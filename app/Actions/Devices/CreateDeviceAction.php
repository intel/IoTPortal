<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\Devices;

use App\Models\Device;
use App\Models\DeviceStatus;
use App\Models\User;

class CreateDeviceAction
{
    public function execute(User $user, array $data = [])
    {
        return $user->devices()->create([
            'name' => $data['name'] ?? null,
            'device_category_id' => $data['device_category'] ?? $user->deviceCategories()->getUncategorized()->id,
            'device_status_id' => DeviceStatus::getRegistered()->id,
        ]);
    }
}