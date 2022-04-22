<?php
  namespace App\Services;

  use App\Models\Type;

  class TypeService
  {
      public function get()
      {
          return Type::selectAll();
      }
  }
