<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Traits;

trait EloquentGetTableName
{
    public static function getTableName()
    {
        return ((new self)->getTable());
    }
}