<?php

namespace App\Providers;

use App\Models\Device;
use App\Models\DeviceCategory;
use App\Models\DeviceGroup;
use App\Models\DeviceJob;
use App\Models\SavedCommand;
use App\Policies\DeviceCategoryPolicy;
use App\Policies\DeviceGroupPolicy;
use App\Policies\DeviceJobPolicy;
use App\Policies\DevicePolicy;
use App\Policies\SavedCommandPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Device::class => DevicePolicy::class,
        DeviceCategory::class => DeviceCategoryPolicy::class,
        DeviceGroup::class => DeviceGroupPolicy::class,
        DeviceJob::class => DeviceJobPolicy::class,
        SavedCommand::class => SavedCommandPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

//        Passport::routes();

        //
    }
}
