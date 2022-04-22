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
        $this->setSize($data['size']);
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
        return ProductModel::insert($this->getAttributes());
    }
    public function delete()
    {
        return ProductModel::delete($this->sku);

    }
}
