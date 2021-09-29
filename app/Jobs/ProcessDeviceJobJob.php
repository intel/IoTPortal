<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Jobs;

use App\Exceptions\DeviceTimeoutException;
use App\Helpers\Helper;
use App\Models\Device;
use App\Models\DeviceJob;
use Exception;
use Illuminate\Bus\Batch;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Bus;
use Throwable;

class ProcessDeviceJobJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * The DeviceJob instance.
     *
     * @var DeviceJob
     */
    protected DeviceJob $deviceJob;

    /**
     * Create a new job instance.
     *
     * @param DeviceJob $deviceJob
     */
    public function __construct(DeviceJob $deviceJob)
    {
        $this->deviceJob = $deviceJob;
    }

    /**
     * @return DeviceJob
     */
    public function getDeviceJob(): DeviceJob
    {
        return $this->deviceJob;
    }

    /**
     * Execute the job.
     *
     * @return void
     * @throws Exception
     * @throws \Throwable
     */
    public function handle()
    {
        $this->deviceJob->update([
            'started_at' => now(),
        ]);

        $payloadJson = 'null';

        if ($this->deviceJob->savedCommand->payload) {
            $payloadArray = json_decode($this->deviceJob->savedCommand->payload, true);
            $payloadJson = json_encode(Helper::mapArrayKeyByArray($payloadArray, config('constants.commands.' . $this->deviceJob->savedCommand->command_name . '.configuration_map')));
        }

        $jobs = $this->deviceJob->deviceGroup->devices
            ->map(fn(Device $device) => $this->createSendDeviceCommandJob($this->deviceJob, $device, $payloadJson))
            ->filter(function (?SendDeviceCommandJob $sendDeviceCommandJob) {
                return !is_null($sendDeviceCommandJob);
            })
            ->toArray();

        $deviceJob = $this->deviceJob;

        $jobBatch = Bus::batch($jobs)
            ->catch(function (Batch $batch, Throwable $e) use ($deviceJob) {
                if ($e instanceof DeviceTimeoutException) {
                    $deviceJob->update([
                        'error' => 'One or more devices has timeout while waiting for their response.',
                    ]);
                } else {
                    $deviceJob->update([
                        'error' => 'An error has occurred to one or more devices.',
                    ]);
                }
            })
            ->finally(function (Batch $batch) use ($deviceJob) {
                $deviceJob->update([
                    'completed_at' => now(),
                ]);
            })
            ->name($this->deviceJob->id)
            ->allowFailures()
            ->dispatch();

        $this->deviceJob->update([
            'job_batch_id' => $jobBatch->id,
        ]);
    }

    public function createSendDeviceCommandJob(DeviceJob $deviceJob, Device $device, string $payloadJson): ?SendDeviceCommandJob
    {
        $command = $device->commands()->name($deviceJob->savedCommand->command_name)->first();

        if ($command) {
            $commandHistory = $command->commandHistories()->create([
                'payload' => $payloadJson === 'null' ? null : $payloadJson,
                'device_job_id' => $deviceJob->id,
            ]);
        } else {
            $commandHistory = $command->commandHistories()->create([
                'payload' => $payloadJson === 'null' ? null : $payloadJson,
                'error' => 'The command not supported for this device',
                'device_job_id' => $deviceJob->id,
            ]);
        }

        return $commandHistory->error
            ? null
            : new SendDeviceCommandJob($commandHistory, $payloadJson);
    }
}