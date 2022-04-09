<?php
  namespace App\Classes;

  class ProductClass {
    private string $sku;
    private string $name;
    private float $value;

    public function __construct(string $sku, string $name, float $value) {
      $this->sku = $sku;
      $this->name = $name;
      $this->value = $value;
    }

    public function getSku(){
      return $this->sku;
    }
    public function getName(){
      return $this->name;
    }
    public function getValue(){
      return $this->value;
    }
    //setSku
    public function setName(string $name) {
      $this->name = $name;

      return $this->name;
    }
    public function setValue(string $value) {
      $this->value = $value;

      return $this->value;
    }
  }
?>