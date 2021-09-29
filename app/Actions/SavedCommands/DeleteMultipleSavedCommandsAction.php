<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\SavedCommands;

use App\Models\SavedCommand;

class DeleteMultipleSavedCommandsAction
{
    public function execute(array $ids): bool
    {
        return SavedCommand::idIn($ids)->delete();
    }
}