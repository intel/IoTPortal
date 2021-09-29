<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\Commands;

use App\Actions\CommandHistories\CreateCommandHistoryForCommandAction;
use App\Actions\CommandHistories\MapCommandPayloadToJsonString;
use App\Actions\CommandHistories\MarkCommandHistoryAsCompleted;
use App\Actions\Mqtt\PublishMqttToDeviceAction;
use App\Models\CommandHistory;
use App\Models\Device;

class TriggerCommandAction
{
    private FindCommandForDeviceByNameAction $findCommandForDeviceByNameAction;

    /**
     * @var MapCommandPayloadToJsonString
     */
    private MapCommandPayloadToJsonString $mapCommandPayloadToJsonString;

    /**
     * @var CreateCommandHistoryForCommandAction
     */
    private CreateCommandHistoryForCommandAction $createCommandHistoryForCommandAction;

    /**
     * @var PublishMqttToDeviceAction
     */
    private PublishMqttToDeviceAction $publishMqttToDeviceAction;

    /**
     * @var MarkCommandHistoryAsCompleted
     */
    private MarkCommandHistoryAsCompleted $markCommandHistoryAsCompleted;

    public function __construct(FindCommandForDeviceByNameAction $findCommandForDeviceByNameAction,
                                MapCommandPayloadToJsonString $mapCommandPayloadToJsonString,
                                CreateCommandHistoryForCommandAction $createCommandHistoryForCommandAction,
                                PublishMqttToDeviceAction $publishMqttToDeviceAction,
                                MarkCommandHistoryAsCompleted $markCommandHistoryAsCompleted)
    {
        $this->findCommandForDeviceByNameAction = $findCommandForDeviceByNameAction;
        $this->mapCommandPayloadToJsonString = $mapCommandPayloadToJsonString;
        $this->createCommandHistoryForCommandAction = $createCommandHistoryForCommandAction;
        $this->publishMqttToDeviceAction = $publishMqttToDeviceAction;
        $this->markCommandHistoryAsCompleted = $markCommandHistoryAsCompleted;
    }

    public function execute(Device $device, array $data): CommandHistory
    {
        $command = $this->findCommandForDeviceByNameAction->execute($device, $data['command']);

        $payloadJson = $this->mapCommandPayloadToJsonString->execute($command->name, $data['payload'] ?? null);

        $commandHistory = $this->createCommandHistoryForCommandAction->execute($command, [
            'payload' => $payloadJson,
            'started_at' => now(),
        ]);

        $this->publishMqttToDeviceAction->execute($device->unique_id, $command->method_name, $commandHistory->id, $payloadJson);

        $this->markCommandHistoryAsCompleted->execute($commandHistory);

        return $commandHistory;
    }
}