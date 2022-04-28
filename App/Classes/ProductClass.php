<?php

/**
 * General product class containing product variables, setters and getters
 * Extends from general product class
 */

namespace App\Classes;

class ProductClass
{
    private string $sku;
    private string $name;
    private string $value;
    private string $type;
    protected string $res;

    public function __construct(string $sku, string $name, float $value, string $type)
    {
      $this->sku = $sku;
      $this->name = $name;
      $this->value = $value;
      $this->type = $type;
    }
    public function getSku()
    {
      return $this->sku;
    }
    public function getName()
    {
      return $this->name;
    }
    public function getValue()
    {
      return $this->value;
    }
    public function getType()
    {
      return $this->type;
    }
    public function getWeight()
    {
      return null;
    }
    public function getSize()
    {
      return null;
    }
    public function getHeight()
    {
      return null;
    }
    public function getLength()
    {
      return null;
    }
    public function getWidth()
    {
      return null;
    }
    public function getRes()
    {
      return $this->res;
    }
    public function setAttributes(array $data){}
    public function save(){}
    public function delete(){}
}