<?php
  namespace App\Services;

  use App\Models\Product;
  use App\Classes\BookClass;
  use App\Classes\DvdClass;
  use App\Classes\FurnitureClass;

  //require 'C:\Users\henrique.silva\Documents\Programming\PHPLIST\App\Models\Product.php';

  class ProductService {
    public function get($sku = null) {
      if (!$sku){
        return Product::selectAll();
        exit;
      }
      return Product::select($sku);
      exit;
    }
    public function post(){
      $data = json_decode(file_get_contents('php://input'), true);
      //echo(var_dump($data));
      if(!key_exists("method", $data)){
        throw new \Exception("Method not in request");
      }
      if($data['method'] === 'register')
      {
        if(empty($data['type'])){
          throw new \Exception("Product type is not set");
          exit;
        }
        $classname = 'App\Classes\\'. $data['type'].'Class';
        if (!class_exists($classname)){
          throw new \Exception("Product type is does not exist!");
          exit;
        }
        $product = new $classname($data['sku'], $data['name'], $data['value']);
        if ($data['type'] === 'Book'){
          $product->setWeight($data['weight']);
        }
        if ($data['type'] === 'DVD'){
          $product->setSize($data['size']);
        }
        if ($data['type'] === 'Furniture'){
          $product->setHeight($data['height']);
          $product->setWidth($data['width']);
          $product->setLength($data['length']);
        }
        return Product::insert($product);
        exit;
      }
      if($data['method'] === 'delete')
      {
        array_shift($data);
        foreach($data['products'] as $key => $value) {
          if($value['weight'] != null){
            $classname = 'App\Classes\BookClass';
            $product = new $classname($value['sku'], $value['name'], $value['value']);
            $product->setWeight($value['weight']);
          }
          if($value['size'] != null){
            $classname = 'App\Classes\DVDClass';
            $product = new $classname($value['sku'], $value['name'], $value['value']);
            $product->setSize($value['size']);
          }
          if($value['height'] != null){
            $classname = 'App\Classes\FurnitureClass';
            $product = new $classname($value['sku'], $value['name'], $value['value']);
            $product->setHeight($value['height']);
            $product->setWidth($value['width']);
            $product->setLength($value['length']);
          }
          Product::delete($product);
        }
        return "products deleted";
      }
      throw new \Exception("Unsuported method");      
    }
  }
?>