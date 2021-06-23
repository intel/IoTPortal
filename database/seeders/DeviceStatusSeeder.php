<?php

namespace Database\Seeders;

use App\Models\DeviceStatus;
use Illuminate\Database\Seeder;

class DeviceStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DeviceStatus::create([
            'name' => DeviceStatus::STATUS_REGISTERED,
        ]);

        DeviceStatus::create([
            'name' => DeviceStatus::STATUS_ONLINE,
        ]);

        DeviceStatus::create([
            'name' => DeviceStatus::STATUS_OFFLINE,
        ]);
    }
}
