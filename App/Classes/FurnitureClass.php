<?php
  namespace App\Classes;

  use App\Classes\ProductClass;

  class FurnitureClass extends ProductClass {
    private string $dimensions;

    public function getDimensions() {
      return $this->dimensions;
    }
    public function setDimensions(string $dimensions) {
      $this->dimensions = $dimensions;

      return $this->dimensions;
    }
  }
?>