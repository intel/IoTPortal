<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\Devices;

use App\Models\Device;

class DeleteMultipleDevicesAction
{
    public function execute(array $ids): bool
    {
        return Device::idIn($ids)->delete();
    }
}