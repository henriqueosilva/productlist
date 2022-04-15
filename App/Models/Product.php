<?php
  namespace App\Models;

  use App\Config\Database;
  //require 'C:\Users\henrique.silva\Documents\Programming\PHPLIST\App\Config\Database.php';
  
  
  class Product {
    private static $table = 'products';

    public static function select($sku) {
      $database = new Database;
      $db = $database->connect();

      $sql = 'SELECT * FROM '.self::$table .' WHERE sku = :sku';
      $stmt = $db->prepare($sql);
      $stmt->bindValue(':sku', $sku);
      $stmt->execute();

      if ($stmt->rowCount() > 0) {
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
      } else {
        throw new \Exception("No product found!");
      }
    }

    public static function selectAll() {
      $database = new Database;
      $db = $database->connect();

      $sql = 'SELECT * FROM '.self::$table;
      $stmt = $db->prepare($sql);
      $stmt->execute();

      if ($stmt->rowCount() > 0) {
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
      } else {
        throw new \Exception("No product found!");
      }
    }

    public static function insert($product) {
      $database = new Database;
      $db = $database->connect();
      $current_time = date('Y-m-d H:i:s');

      $sql = 'INSERT INTO '.self::$table .'(sku, name, value, weight, dimensions, size, created_at, updated_at) VALUES (:sku, :name, :value, :weight, :dimensions, :size, :created_at, :updated_at)';
      $stmt = $db->prepare($sql);
      $stmt->bindValue(':sku', $product->getSku());
      $stmt->bindValue(':name', $product->getName());
      $stmt->bindValue(':value', $product->getValue());
      $stmt->bindValue(':created_at', $current_time);
      $stmt->bindValue(':updated_at', $current_time);
      
      if(method_exists($product, 'getWeight')){
        $stmt->bindValue(':weight', $product->getWeight());
        $stmt->bindValue(':dimensions', null);
        $stmt->bindValue(':size', null);
      }

      if(method_exists($product, 'getDimensions')){
        $stmt->bindValue(':dimensions', $product->getDimensions());
        $stmt->bindValue(':weight', null);
        $stmt->bindValue(':size', null);
      }
      
      if(method_exists($product, 'getSize')){
        $stmt->bindValue(':size', $product->getSize());
        $stmt->bindValue(':weight', null);
        $stmt->bindValue(':dimensions', null);
      }
      echo(var_dump($stmt));
      $stmt->execute();

      if ($stmt->rowCount() > 0) {
        return 'Product successfully inserted';
      } else {
        throw new \Exception("Failed to insert the product!");
      }
    }
  }
?>