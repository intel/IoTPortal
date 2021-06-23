<?php

namespace App\Traits;

trait EloquentGetTableName
{
    public static function getTableName()
    {
        return ((new self)->getTable());
    }
}