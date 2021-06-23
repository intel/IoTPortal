<?php

namespace App\Actions\DeviceJobs;

use App\Models\DeviceJob;

class FindDeviceJobByIdOrUniqueIdAction
{
    public function execute(string $id): DeviceJob
    {
        $query = is_numeric($id) ? DeviceJob::id($id) : DeviceJob::uniqueId($id);

        return $query->with([
                'deviceGroup',
                'savedCommand',
                'deviceGroup.devices.deviceCategory',
                'deviceGroup.devices.deviceStatus',
                'commandHistories.command:id,device_id'
            ])->firstOrFail();
    }
}