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
      $data = $_POST;
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
      if ($data['type'] === 'Dvd'){
        $product->setSize($data['size']);
      }
      if ($data['type'] === 'Furniture'){
        $product->setDimensions($data['dimensions']);
      }
      //var_dump($product->getSize());
      return Product::insert($product);
      exit;
    }
  }
?>