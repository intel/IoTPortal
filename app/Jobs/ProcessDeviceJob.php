<?php

namespace App\Jobs;

use App\Helpers\Helper;
use App\Models\DeviceJob;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Throwable;

class ProcessDeviceJob implements ShouldQueue
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
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        foreach ($this->deviceJob->deviceGroup->devices as $device) {
            $command = $device->commands()->name($this->deviceJob->savedCommand->command_name)->first();

            if ($command) {
                $payloadJson = 'null';

                if ($this->deviceJob->savedCommand->payload) {
                    $payloadArray = json_decode($this->deviceJob->savedCommand->payload, true);
                    $payloadJson = json_encode(Helper::mapArrayKeyByArray($payloadArray, config('constants.commands.' . $command->name . '.configuration_map')));
                }

                $commandHistory = $command->commandHistories()->create([
                    'payload' => $payloadJson === 'null' ? null : $payloadJson,
                    'device_job_id' => $this->deviceJob->id,
                ]);

                try {
                    Helper::mqttPublish('iotportal/' . $device->unique_id . '/methods/POST/' . $command->method_name . '/?$rid=' . $commandHistory->id, $payloadJson);
                } catch (Throwable $error) {
                    // TODO : log error into logger
                    $commandHistory->update([
                        'error' => 'An error occurred while sending the command to the device.',
                    ]);
                }

            } else {
                $command->commandHistories()->create([
                    'error' => 'This command not supported for this device',
                    'device_job_id' => $this->deviceJob->id,
                ]);
            }
        }
    }
}
