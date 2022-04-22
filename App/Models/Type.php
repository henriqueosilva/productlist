<?php

/**
 * This file contains the database access for retrieving the types of products
 */

  namespace App\Models;

  use App\Config\Database;

  /**
   * This class implements the logic for retrieving the types of products 
   */

  class Type 
  {
    private static $table = 'product_type';

    public static function selectAll() 
    {
      $database = new Database;
      $db = $database->connect();

      $sql = 'SELECT * FROM '.self::$table;
      $stmt = $db->prepare($sql);
      $stmt->execute();

      if ($stmt->rowCount() > 0) {
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
      } else {
        throw new \Exception("No types registered!");
      }
    }
  }
?>