<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace Database\Factories;

use App\Models\MemoryStatistic;
use Illuminate\Database\Eloquent\Factories\Factory;

class MemoryStatisticFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MemoryStatistic::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'available_memory_in_bytes' => $this->faker->numberBetween($min = 107374182, $max = 34359738368),
        ];
    }
}
