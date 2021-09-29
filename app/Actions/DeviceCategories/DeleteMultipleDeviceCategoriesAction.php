<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\DeviceCategories;

use App\Models\DeviceCategory;

class DeleteMultipleDeviceCategoriesAction
{
    public function execute(array $ids): bool
    {
        return DeviceCategory::idIn($ids)->delete();
    }
}