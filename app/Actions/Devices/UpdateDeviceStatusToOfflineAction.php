<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\Devices;

use App\Models\Device;
use App\Models\DeviceStatus;

class UpdateDeviceStatusToOfflineAction
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

        if (!$device->isOffline()) {
            $device->deviceStatus()->associate(DeviceStatus::getOffline());
            return $device->save();
        }

        return false;
    }
}