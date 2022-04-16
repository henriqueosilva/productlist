<?php
  namespace App\Classes;

  use App\Classes\ProductClass;

  class FurnitureClass extends ProductClass {
    private float $height;
    private float $width;
    private float $length;

    public function getDimensions() {
      $dimensions = array("height"=>$this->height,
      "width"=>$this->width,
      "length"=>$this->length);

      return $dimensions;
    }
    public function setHeight(float $height) {
      $this->height = $height;

      return $this->height;
    }
    public function setWidth(float $width) {
      $this->width = $width;

      return $this->width;
    }
    public function setLength(float $length) {
      $this->length = $length;

      return $this->length;
    }
  }
?>