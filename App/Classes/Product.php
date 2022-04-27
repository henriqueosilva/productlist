<?php

/**
 * Construct product class containing product variables and interface for accessing
 * type specific methods
 */

namespace App\Classes;

class Product
{
    private $product;

    public function __construct(array $data)
    {
        $classname = "App\Classes\\" . $data['type'] . "Class";

        if ( ! class_exists($classname)){
            throw new \Exception('Incorrect product type');
        }

        $this->product = new $classname($data['sku'], $data['name'], $data['value'], $data['type']);
    }
    public function getAttributes()
    {
        return $this->product->getAttributes();
    }
    public function setAttributes(array $data)
    {
        $this->product->setAttributes($data);
    }
    public function save()
    {
        $this->product->save();
    }
    public function getRes()
    {
        return $this->product->getRes();
    }
    public function delete()
    {
        $this->product->delete();
    }
}