<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\CommandHistory;
use App\Models\CpuStatistic;
use App\Models\Device;
use App\Models\DiskStatistic;
use App\Models\EventHistory;
use App\Models\MemoryStatistic;
use App\Models\Status;
use App\Models\TemperatureStatistic;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $deviceStatuses = array();

        $deviceStatuses[] = Status::create([
            'name' => 'REGISTERED',
        ]);

        $deviceStatuses[] = Status::create([
            'name' => 'PROVISIONED',
        ]);

        for ($i = 0; $i < 1; $i++) {
            $user = User::factory()->create();

            $deviceCategories = array();

            $deviceCategories[] = $user->deviceCategories()->create([
                'name' => 'UNCATEGORIZED',
            ]);

            $deviceCategories[] = $user->deviceCategories()->create([
                'name' => 'CCTV',
            ]);

            $deviceCategories[] = $user->deviceCategories()->create([
                'name' => 'ROUTER',
            ]);

            $deviceCategories[] = $user->deviceCategories()->create([
                'name' => 'DESKTOP',
            ]);

            $deviceCategories[] = $user->deviceCategories()->create([
                'name' => 'LAPTOP',
            ]);

            for ($x = 0; $x < 1; $x++) {
                $device = Device::factory()
                    ->for(Arr::random($deviceCategories))
                    ->for(Arr::random($deviceStatuses))
                    ->create();

                $currentTime = now();
                foreach (range(1, 2) as $day) {
                    foreach (range(1, 1440) as $minute) {

                        TemperatureStatistic::factory()
                            ->for($device)
                            ->state([
                                'created_at' => $currentTime,
                                'updated_at' => $currentTime,
                            ])
                            ->create();

                        CpuStatistic::factory()
                            ->for($device)
                            ->state([
                                'created_at' => $currentTime,
                                'updated_at' => $currentTime,
                            ])
                            ->create();

                        DiskStatistic::factory()
                            ->for($device)
                            ->state([
                                'created_at' => $currentTime,
                                'updated_at' => $currentTime,
                            ])
                            ->create();

                        MemoryStatistic::factory()
                            ->for($device)
                            ->state([
                                'created_at' => $currentTime,
                                'updated_at' => $currentTime,
                            ])
                            ->create();

                        $currentTime->subMinutes(1);
                    }
                }

                $commandTypes = array();

                $commandTypes[] = $device->commands()->create([
                    'name' => 'ota',
                    'method_name' => 'triggerota',
                ]);

                $commandTypes[] = $device->commands()->create([
                    'name' => 'aota',
                    'method_name' => 'triggeraota',
                ]);

                $commandTypes[] = $device->commands()->create([
                    'name' => 'fota',
                    'method_name' => 'triggerfota',
                ]);

                $commandTypes[] = $device->commands()->create([
                    'name' => 'sota',
                    'method_name' => 'triggersota',
                ]);

                $commandTypes[] = $device->commands()->create([
                    'name' => 'cota',
                    'method_name' => 'triggerconfig',
                ]);

                $commandTypes[] = $device->commands()->create([
                    'name' => 'shutdown',
                    'method_name' => 'shutdown_device',
                ]);

                $commandTypes[] = $device->commands()->create([
                    'name' => 'reboot',
                    'method_name' => 'reboot_device',
                ]);

                $commandTypes[] = $device->commands()->create([
                    'name' => 'decommission',
                    'method_name' => 'decommission_device',
                ]);

                $commandTypes[] = $device->commands()->create([
                    'name' => 'file upload',
                    'method_name' => 'file_upload',
                ]);

                for ($a = 0; $a < 10; $a++) {
                    CommandHistory::factory()
                        ->for(Arr::random($commandTypes))
                        ->create();
                }

                $eventTypes = array();

                $eventTypes[] = $device->events()->create([
                    'name' => 'property',
                ]);

                $eventTypes[] = $device->events()->create([
                    'name' => 'telemetry',
                ]);

                for ($b = 0; $b < 10; $b++) {
                    EventHistory::factory()
                        ->for(Arr::random($eventTypes))
                        ->create();
                }
            }
        }
    }
}
