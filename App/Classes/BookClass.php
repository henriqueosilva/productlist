<?php

/**
 * Book class containing book specific variables, setters and getters
 * Extends from general product class
 */

namespace App\Classes;

use App\Classes\ProductClass;
use App\Models\ProductModel;

class BookClass extends ProductClass
{
    private float $weight;

    private function getWeight()
    {
        return $this->weight;
    }
    private function setWeight(float $weight)
    {
        $this->weight = $weight;

        return $this->weight;
    }
    public function setAttributes(array $data)
    {
        $this->setWeight($data['weight']);
    }
    public function getAttributes()
    {
        $attributes = array("sku"=>$this->sku,
        "name"=>$this->name,
        "value"=>$this->value,
        "weight"=>$this->getWeight(),
        "size"=>null,
        "height"=>null,
        "width"=>null,
        "length"=>null,
        "type"=>$this->type);
        return $attributes;
    }
    public function save()
    {
        $res = ProductModel::insert($this->getAttributes());
        echo(var_dump($res));
        //return 
    }
    public function delete()
    {
        return ProductModel::delete($this->sku);
    }
}
