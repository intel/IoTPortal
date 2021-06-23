<?php

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