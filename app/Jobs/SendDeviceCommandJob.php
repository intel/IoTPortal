<?php

namespace App\Jobs;

use App\Helpers\Helper;
use App\Models\CommandHistory;
use Exception;
use Illuminate\Bus\Batchable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendDeviceCommandJob implements ShouldQueue
{
    use Batchable, Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * The CommandHistory instance.
     *
     * @var CommandHistory
     */
    protected CommandHistory $commandHistory;

    /**
     * The string instance.
     *
     * @var string
     */
    protected string $payloadJson;

    /**
     * Create a new job instance.
     *
     * @param CommandHistory $commandHistory
     * @param string $payloadJson
     */
    public function __construct(CommandHistory $commandHistory, string $payloadJson)
    {
        $this->commandHistory = $commandHistory;
        $this->payloadJson = $payloadJson;
    }

    /**
     * @return CommandHistory
     */
    public function getCommandHistory(): CommandHistory
    {
        return $this->commandHistory;
    }

    /**
     * Execute the job.
     *
     * @return void
     * @throws Exception
     */
    public function handle()
    {
        if ($this->batch()->cancelled()) {
            return;
        }

        $this->commandHistory->update([
            'started_at' => now(),
        ]);

        Helper::mqttPublish('iotportal/' . $this->commandHistory->command->device->unique_id . '/methods/POST/' . $this->commandHistory->command->methodName . '/?$rid=' . $this->commandHistory->id, $this->payloadJson);

        $this->commandHistory->refresh();
        $elapsedTimeInSeconds = 0;
        while (!$this->commandHistory->responded_at && $elapsedTimeInSeconds <= 30) {
            $elapsedTimeInSeconds++;
            sleep(1);
            $this->commandHistory->refresh();
        }

        if (!$this->commandHistory->responded_at) {
            $this->commandHistory->update([
                'error' => 'Timeout waiting for device to respond.',
            ]);
        }
    }
}
