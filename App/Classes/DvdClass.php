<?php
  namespace App\Classes;

  use App\Classes\ProductClass;

  class DVDClass extends ProductClass {
    private int $size;

    public function getSize() {
      return $this->size;
    }
    public function setSize(int $size) {
      $this->size = $size;

      return $this->size;
    }
  }
?>