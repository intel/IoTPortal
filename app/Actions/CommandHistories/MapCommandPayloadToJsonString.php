<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\CommandHistories;

use App\Helpers\Helper;

class MapCommandPayloadToJsonString
{
    public function execute(string $commandName, ?array $payload): bool|string
    {
        $payloadJson = 'null';

        if (isset($payload)) {
            $payloadJson = json_encode(Helper::mapArrayKeyByArray($payload, config('constants.commands.' . $commandName . '.configuration_map')));
        }

        return $payloadJson;
    }
}