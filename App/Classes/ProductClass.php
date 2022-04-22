<?php

/**
 * General product class containing product variables, setters and getters
 * Extends from general product class
 */

namespace App\Classes;

abstract class ProductClass
{
    protected string $sku;
    protected string $name;
    protected string $value;
    protected string $type;

    public function __construct(string $sku, string $name, float $value, string $type)
    {
      $this->sku = $sku;
      $this->name = $name;
      $this->value = $value;
      $this->type = $type;
    }
    public abstract function getAttributes();
    public abstract function setAttributes(array $data);
    public abstract function save();
    public abstract function delete();
}