<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\SavedCommands;

use App\Models\SavedCommand;
use App\Models\User;

class CreateSavedCommandAction
{
    public function execute(User $user, array $data): SavedCommand
    {
        return SavedCommand::create([
            'name' => $data['name'],
            'command_name' => $data['command'],
            'payload' => is_null($data['payload']) ? null : json_encode($data['payload']),
            'user_id' => $user->id,
        ]);
    }
}