<?php

/**
 * This file contains the CRUD call in functions for the Product Service
 */

  namespace App\Services;

  use App\Models\ProductModel;
  use App\Classes\Product;

  /**
   * This class implements the logic for retrieving, inserting and deleting the products
   */
  
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
              
              $product->save();
              return $product->getRes();
              exit;
          }
          if ($data['method'] === 'delete') {
              array_shift($data);
              if(sizeof($data['products'])==0){
                 throw new \Exception("No products selected");
              }
              foreach ($data['products'] as $key => $value) {
                  $product = new Product($value);
                  $product->delete();
              }
              return "products deleted";
          }
          throw new \Exception("Unsuported method");
      }
  }
