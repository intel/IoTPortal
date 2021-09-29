<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace Database\Factories;

use App\Models\EventHistory;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventHistoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = EventHistory::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
//            'type' => config('constants.raw_data_types'. '.' . array_rand(config('constants.raw_data_types'))),
            'raw_data' => '{"app":"compose","cmd":"down","containerTag":"hjckhjkhjk"}',
        ];
    }
}
