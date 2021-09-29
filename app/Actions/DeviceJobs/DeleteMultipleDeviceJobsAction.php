<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\DeviceJobs;

use App\Models\DeviceJob;

class DeleteMultipleDeviceJobsAction
{
    public function execute(array $ids): bool
    {
        return DeviceJob::idIn($ids)->delete();
    }
}