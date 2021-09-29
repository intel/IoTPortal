<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\DeviceCategories;

use App\Models\DeviceCategory;

class FindDeviceCategoryByIdOrUniqueIdAction
{
    public function execute(string $id): DeviceCategory
    {
        $query = is_numeric($id) ? DeviceCategory::id($id) : DeviceCategory::uniqueId($id);

        return $query->firstOrFail();
    }
}