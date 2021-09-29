<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\SavedCommands;

use App\Models\SavedCommand;

class FindSavedCommandByIdOrUniqueIdAction
{
    public function execute(string $id): SavedCommand
    {
        $query = is_numeric($id) ? SavedCommand::id($id) : SavedCommand::uniqueId($id);

        return $query->firstOrFail();
    }
}