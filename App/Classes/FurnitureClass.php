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
        if(!empty($data['height'])&&!empty($data['width'])&&!empty($data['length'])){
            $this->setHeight($data['height']);
            $this->setWidth($data['width']);
            $this->setLength($data['length']);
            return;
        }
        throw new \Exception("Dimensions can't be empty");
    }
    public function save()
    {
        $this->res = ProductModel::insert($this);
        return $this->res;
        
    }
    public function delete()
    {
        return ProductModel::delete($this);

    }
}
