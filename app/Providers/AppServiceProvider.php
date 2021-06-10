<?php

namespace App\Providers;

use App\Jobs\ProcessDeviceJob;
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

            if ($jobModel instanceof ProcessDeviceJob) {
                $jobModel->getDeviceJob()->update([
                    'error' => 'An error has occurred.',
                    'completed_at' => now(),
                ]);
            }

            if ($jobModel instanceof SendDeviceCommandJob) {
                $jobModel->getCommandHistory()->update([
                    'error' => 'An error has occurred.',
                    'completed_at' => now(),
                ]);
            }
        });
    }
}
