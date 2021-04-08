<?php

namespace Database\Seeders;

use App\Models\CommandHistory;
use App\Models\Device;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()
            ->has(Device::factory()
                ->has(CommandHistory::factory()
                    ->count(10)
                )->count(3))
            ->create();
    }
}
