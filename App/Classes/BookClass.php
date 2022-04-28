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

    public function getWeight()
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
        if(!empty($data['weight'])){
            return $this->setWeight($data['weight']);
        }
        throw new \Exception("Weight value can't be empty");
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
