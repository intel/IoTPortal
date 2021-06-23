<?php

namespace App\Actions\Commands;

use App\Models\Command;
use App\Models\Device;

class FindCommandForDeviceByNameAction
{
    public function execute(Device $device, string $name): Command
    {
        return $device->commands()->name($name)->firstOrFail();
    }
}