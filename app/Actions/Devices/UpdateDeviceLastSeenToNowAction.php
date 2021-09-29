<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\Devices;

use App\Models\Device;

class UpdateDeviceLastSeenToNowAction
{
    public function execute(Device $device): bool
    {
        return $device->update([
            'last_seen' => now(),
        ]);
    }
}