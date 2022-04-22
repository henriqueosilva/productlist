<?php
/**
 * This file contains the Type call in functions for the Product Service
 */
  namespace App\Services;

  use App\Models\Type;
/**
   * This class implements the logic for retrieving the product types
   */
  class TypeService
  {
      public function get()
      {
          return Type::selectAll();
      }
  }
