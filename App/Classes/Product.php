<?php

/**
 * General product class containing product variables, setters and getters
 * Extends from general product class
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

        $this->product = new $classname($data['sku'], $data['name'], $data['value']);
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
}