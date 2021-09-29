<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\Devices;

use App\Models\Device;

class FindDeviceByIdOrUniqueIdAction
{
    public function execute(string $id): Device
    {
        $query = is_numeric($id) ? Device::id($id) : Device::uniqueId($id);

        return $query->with([
            'deviceCategory:id,name,user_id',
            'deviceStatus:id,name'
        ])->firstOrFail();
    }
}