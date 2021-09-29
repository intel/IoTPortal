<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\Devices;

use App\Models\Device;
use App\Models\DeviceStatus;

class UpdateDeviceStatusToOnlineAction
{
    /**
     * @var UpdateDeviceLastSeenToNowAction
     */
    private UpdateDeviceLastSeenToNowAction $updateDeviceLastSeenToNowAction;

    public function __construct(UpdateDeviceLastSeenToNowAction $updateDeviceLastSeenToNowAction)
    {
        $this->updateDeviceLastSeenToNowAction = $updateDeviceLastSeenToNowAction;
    }

    public function execute(Device $device): bool
    {
        $this->updateDeviceLastSeenToNowAction->execute($device);

        if (!$device->isOnline()) {
            $device->deviceStatus()->associate(DeviceStatus::getOnline());
            return $device->save();
        }

        return false;
    }
}