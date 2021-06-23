<?php

namespace App\Actions\DeviceJobs;

use App\Models\DeviceJob;

class DeleteMultipleDeviceJobsAction
{
    public function execute(array $ids): bool
    {
        return DeviceJob::idIn($ids)->delete();
    }
}