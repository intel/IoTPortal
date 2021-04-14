<?php

namespace Database\Factories;

use App\Models\TemperatureStatistic;
use Illuminate\Database\Eloquent\Factories\Factory;

class TemperatureStatisticFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = TemperatureStatistic::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'temperature' => $this->faker->randomFloat(2, 0, 100),
        ];
    }
}
