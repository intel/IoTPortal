<?php

namespace App\Providers;

use App\Exceptions\DeviceTimeoutException;
use App\Jobs\ProcessDeviceJobJob;
use App\Jobs\SendDeviceCommandJob;
use Illuminate\Queue\Events\JobFailed;
use Illuminate\Support\Facades\Queue;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Queue::failing(function (JobFailed $event) {
            $payload = $event->job->payload();

            $jobModel = unserialize($payload['data']['command']);

            if ($jobModel instanceof ProcessDeviceJobJob) {
                $jobModel->getDeviceJob()->update([
                    'error' => 'An error has occurred.',
                    'completed_at' => now(),
                ]);
            }

            if ($jobModel instanceof SendDeviceCommandJob) {
                if ($event->exception instanceof DeviceTimeoutException) {
                    $jobModel->getCommandHistory()->update([
                        'error' => $event->exception->getMessage(),
                        'completed_at' => now(),
                    ]);
                } else {
                    $jobModel->getCommandHistory()->update([
                        'error' => 'An error has occurred.',
                        'completed_at' => now(),
                    ]);
                }
            }
        });
    }
}
