<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\CommandHistories;

use App\Models\CommandHistory;

class MarkCommandHistoryAsCompleted
{
    public function execute(CommandHistory $commandHistory): bool
    {
        return $commandHistory->update([
            'completed_at' => now(),
            'responded_at' => now(),
        ]);
    }
}