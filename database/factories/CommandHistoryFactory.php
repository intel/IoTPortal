<?php

namespace Database\Factories;

use App\Models\CommandHistory;
use Illuminate\Database\Eloquent\Factories\Factory;

class CommandHistoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CommandHistory::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'type' => $this->faker->numberBetween($min = 0, $max = 8),
            'payload' => '{"app":"compose","cmd":"down","containerTag":"hjckhjkhjk"}',
            'response_time' => $this->faker->dateTime(),
        ];
    }
}
