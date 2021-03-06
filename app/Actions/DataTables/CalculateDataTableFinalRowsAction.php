<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\DataTables;

use Illuminate\Support\Facades\Config;

class CalculateDataTableFinalRowsAction
{
    public function execute(?int $rows)
    {
        $maxRows = Config::get('constants.index_max_rows');

        return min($rows ?? 10, $maxRows);
    }
}