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
            'name' => 'registered',
        ]);

        $deviceStatuses[] = Status::create([
            'name' => 'provisioned',
        ]);

        for ($i = 0; $i < 1; $i++) {
            $user = User::factory()->create();

            $deviceCategories = array();

            $deviceCategories[] = $user->deviceCategories()->create([
                'name' => 'uncategorized',
            ]);

            $deviceCategories[] = $user->deviceCategories()->create([
                'name' => 'cctv',
            ]);

            $deviceCategories[] = $user->deviceCategories()->create([
                'name' => 'router',
            ]);

            $deviceCategories[] = $user->deviceCategories()->create([
                'name' => 'desktop',
            ]);

            $deviceCategories[] = $user->deviceCategories()->create([
                'name' => 'laptop',
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
                ]);

                $commandTypes[] = $device->commands()->create([
                    'name' => 'aota',
                ]);

                $commandTypes[] = $device->commands()->create([
                    'name' => 'fota',
                ]);

                $commandTypes[] = $device->commands()->create([
                    'name' => 'sota',
                ]);

                $commandTypes[] = $device->commands()->create([
                    'name' => 'cota',
                ]);

                $commandTypes[] = $device->commands()->create([
                    'name' => 'shutdown',
                ]);

                $commandTypes[] = $device->commands()->create([
                    'name' => 'reboot',
                ]);

                $commandTypes[] = $device->commands()->create([
                    'name' => 'decommission',
                ]);

                $commandTypes[] = $device->commands()->create([
                    'name' => 'file upload',
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
