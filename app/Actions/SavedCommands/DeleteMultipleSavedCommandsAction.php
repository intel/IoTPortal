<?php

namespace App\Actions\SavedCommands;

use App\Models\SavedCommand;

class DeleteMultipleSavedCommandsAction
{
    public function execute(array $ids): bool
    {
        return SavedCommand::idIn($ids)->delete();
    }
}