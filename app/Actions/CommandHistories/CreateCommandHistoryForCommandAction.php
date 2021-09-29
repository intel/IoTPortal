<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\CommandHistories;

use App\Models\Command;
use App\Models\CommandHistory;
use Illuminate\Database\Eloquent\Model;

class CreateCommandHistoryForCommandAction
{
    public function execute(Command $command, array $data): CommandHistory|Model
    {
        return $command->commandHistories()->create([
            'payload' => isset($data['payload']) ? ($data['payload'] === 'null' ? null : $data['payload']) : null,
            'error' => $data['error'] ?? null,
            'started_at' => $data['started_at'] ?? null,
            'completed_at' => $data['completed_at'] ?? null,
            'responded_at' => $data['responded_at'] ?? null,
            'device_job_id' => $data['device_job_id'] ?? null,
        ]);
    }
}