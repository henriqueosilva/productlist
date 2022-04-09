<?php
  namespace App\Classes;

  use App\Classes\ProductClass;

  class BookClass extends ProductClass {
    private float $weight;

    public function getWeight() {
      return $this->weight;
    }
    public function setWeight(float $weight) {
      $this->weight = $weight;

      return $this->weight;
    }
  }
?>