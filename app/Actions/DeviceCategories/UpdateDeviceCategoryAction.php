<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\DeviceCategories;

use App\Models\DeviceCategory;

class UpdateDeviceCategoryAction
{
    public function execute(DeviceCategory $deviceCategory, array $data): bool
    {
        return $deviceCategory->update([
            'name' => $data['name'] ?? $deviceCategory->name,
        ]);
    }
}