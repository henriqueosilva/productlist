<?php

/**
 * Furniture class containing furniture specific variables, setters and getters
 * Extends from general product class
 */

namespace App\Classes;

use App\Classes\ProductClass;
use App\Models\ProductModel;

class FurnitureClass extends ProductClass
{
    private float $height;
    private float $width;
    private float $length;
    public string $res;

    public function getHeight()
    {
        return $this->height;
    }
    public function getWidth()
    {
        return $this->width;
    }
    public function getLength()
    {
        return $this->length;
    }
    public function setHeight(float $height)
    {
        $this->height = $height;

        return $this->height;
    }
    public function setWidth(float $width)
    {
        $this->width = $width;

        return $this->width;
    }
    public function setLength(float $length)
    {
        $this->length = $length;

        return $this->length;
    }
    public function setAttributes(array $data)
    {
        $this->setHeight($data['height']);
        $this->setWidth($data['width']);
        $this->setLength($data['length']);
    }
    public function getAttributes()
    {
        $attributes = array("sku"=>$this->sku,
        "name"=>$this->name,
        "value"=>$this->value,
        "weight"=>null,
        "size"=>null,
        "height"=>$this->getHeight(),
        "width"=>$this->getWidth(),
        "length"=>$this->getLength(),
        "type"=>$this->type);
        return $attributes;
    }
    public function save()
    {
        $this->res = ProductModel::insert($this->getAttributes());
        return $this->res;
        
    }
    public function delete()
    {
        return ProductModel::delete($this->sku);

    }
}
