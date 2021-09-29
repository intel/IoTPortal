<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace Database\Factories;

use App\Models\CpuStatistic;
use Illuminate\Database\Eloquent\Factories\Factory;

class CpuStatisticFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CpuStatistic::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'system_cpu_percentage' => $this->faker->randomFloat(2, 0, 100),
        ];
    }
}
