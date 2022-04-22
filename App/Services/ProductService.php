<?php
  namespace App\Services;

  use App\Models\ProductModel;
  use App\Classes\Product;

  class ProductService
  {
      public function get($sku = null)
      {
          if (!$sku) {
              return ProductModel::selectAll();
              exit;
          }
          return ProductModel::select($sku);
          exit;
      }
      public function post()
      {
          $data = json_decode(file_get_contents('php://input'), true);
          //echo(var_dump($data));
          if (!key_exists("method", $data)) {
              throw new \Exception("Method not in request");
          }
          if ($data['method'] === 'register') {
              if (empty($data['type'])) {
                  throw new \Exception("Product type is not set");
                  exit;
              }
              $product = new Product($data);
              $product->setAttributes($data);
              
              echo(var_dump($product->save()));
              echo($product->res);
              /* return $res;
              exit; */
          }
          if ($data['method'] === 'delete') {
              array_shift($data);
              foreach ($data['products'] as $key => $value) {
                  if ($value['weight'] != null) {
                      $classname = 'App\Classes\BookClass';
                      $product = new $classname($value['sku'], $value['name'], $value['value']);
                      $product->setWeight($value['weight']);
                  }
                  if ($value['size'] != null) {
                      $classname = 'App\Classes\DVDClass';
                      $product = new $classname($value['sku'], $value['name'], $value['value']);
                      $product->setSize($value['size']);
                  }
                  if ($value['height'] != null) {
                      $classname = 'App\Classes\FurnitureClass';
                      $product = new $classname($value['sku'], $value['name'], $value['value']);
                      $product->setHeight($value['height']);
                      $product->setWidth($value['width']);
                      $product->setLength($value['length']);
                  }
                  ProductModel::delete($product);
              }
              return "products deleted";
          }
          throw new \Exception("Unsuported method");
      }
  }
