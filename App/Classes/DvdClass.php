<?php

/**
 * DVD class containing dvd specific variables, setters and getters
 * Extends from general product class
 */

namespace App\Classes;

use App\Classes\ProductClass;
use App\Models\ProductModel;

class DVDClass extends ProductClass
{
    private int $size;

    public function getSize()
    {
        return $this->size;
    }
    public function setSize(int $size)
    {
        $this->size = $size;

        return $this->size;
    }
    public function setAttributes(array $data)
    {
        if(!empty($data['size'])){
            return $this->setSize($data['size']);
        }
        throw new \Exception("Size can't be empty");
    }
    public function getAttributes()
    {
        $attributes = array("sku"=>$this->sku,
        "name"=>$this->name,
        "value"=>$this->value,
        "weight"=>null,
        "size"=>$this->getSize(),
        "height"=>null,
        "width"=>null,
        "length"=>null,
        "type"=>$this->type);
        return $attributes;
    }
    public function save()
    {
        $this->res = ProductModel::insert($this->getAttributes());
        return $this->res;
    }
    public function getRes()
    {
        return $this->res;
    }
    public function delete()
    {
        return ProductModel::delete($this->sku);

    }
}
