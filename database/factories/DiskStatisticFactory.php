<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace Database\Factories;

use App\Models\DiskStatistic;
use Illuminate\Database\Eloquent\Factories\Factory;

class DiskStatisticFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = DiskStatistic::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'disk_percentage_used' => $this->faker->randomFloat(2, 0, 100),
        ];
    }
}
