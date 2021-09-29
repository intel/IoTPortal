<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\Devices;

use App\Models\Device;

class UpdateDeviceAction
{
    public function execute(Device $device, array $data): bool
    {
        return $device->update([
            'name' => $data['name'] ?? $device->name,
            'device_category_id' => $data['device_category'] ?? $device->device_category_id,
        ]);
    }
}