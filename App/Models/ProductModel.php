<?php
  namespace App\Models;

  use App\Config\Database;
  //require 'C:\Users\henrique.silva\Documents\Programming\PHPLIST\App\Config\Database.php';
  
  
  class ProductModel
  {
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

      $sql = 'INSERT INTO '.self::$table .'(sku, name, value, weight, height, width, length, size, created_at, updated_at) VALUES (:sku, :name, :value, :weight, :height, :width, :length, :size, :created_at, :updated_at)';
      $stmt = $db->prepare($sql);
      $stmt->bindValue(':sku', $product['sku']);
      $stmt->bindValue(':name', $product['name']);
      $stmt->bindValue(':value', $product['value']);
      $stmt->bindValue(':weight', $product['weight']);
      $stmt->bindValue(':height', $product['height']);
      $stmt->bindValue(':width', $product['width']);
      $stmt->bindValue(':length', $product['length']);
      $stmt->bindValue(':size', $product['size']);
      $stmt->bindValue(':created_at', $current_time);
      $stmt->bindValue(':updated_at', $current_time);
    
      $stmt->execute();
      if ($stmt->rowCount() > 0) {
        return 'Product successfully inserted';
      } else {
        throw new \Exception("Failed to insert the product!");
      }
    }
    public static function delete(string $sku){
      $database = new Database;
      $db = $database->connect();
      $sql = 'DELETE FROM '.self::$table .' WHERE sku=:sku';
      $stmt = $db->prepare($sql);
      $stmt->bindValue(':sku', $sku);
      $stmt->execute();

      if ($stmt->rowCount() > 0){
        return 'Product successfuly deleted';
      } else {
        throw new \Exception("Failed to delete the product");
      }
    }
  }
?>