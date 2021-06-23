<?php

namespace Database\Factories;

use App\Models\Device;
use Illuminate\Database\Eloquent\Factories\Factory;

class DeviceFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Device::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
//            'status' => config('constants.device_statuses.provisioned'),
            'bios_release_date' => $this->faker->date($format = 'Y-m-d', $max = 'now') . $this->faker->time($format = 'H:i:s', $max = 'now'),
            'bios_vendor' => $this->faker->company,
            'bios_version' => '6.00',
            'cpu' => 'Intel(R) Core(TM) i7-6770HQ CPU @ 2.60GHz',
            'disk_information' => json_decode('[{\"SSD\": \"False\", \"NAME\": \"loop0\", \"SIZE\": \"31334400\"}, {\"SSD\": \"False\", \"NAME\": \"loop1\", \"SIZE\": \"58159104\"}, {\"SSD\": \"False\", \"NAME\": \"loop2\", \"SIZE\": \"2605056\"}, {\"SSD\": \"False\", \"NAME\": \"loop3\", \"SIZE\": \"267980800\"}, {\"SSD\": \"False\", \"NAME\": \"loop4\", \"SIZE\": \"2273280\"}, {\"SSD\": \"False\", \"NAME\": \"loop5\", \"SIZE\": \"282624\"}, {\"SSD\": \"False\", \"NAME\": \"loop6\", \"SIZE\": \"58007552\"}, {\"SSD\": \"False\", \"NAME\": \"loop7\", \"SIZE\": \"65105920\"}, {\"SSD\": \"False\", \"NAME\": \"loop8\", \"SIZE\": \"561152\"}, {\"SSD\": \"False\", \"NAME\": \"loop9\", \"SIZE\": \"67915776\"}, {\"SSD\": \"False\", \"NAME\": \"loop10\", \"SIZE\": \"33845248\"}, {\"SSD\": \"False\", \"NAME\": \"loop11\", \"SIZE\": \"2555904\"}, {\"SSD\": \"False\", \"NAME\": \"loop12\", \"SIZE\": \"282624\"}, {\"SSD\": \"False\", \"NAME\": \"loop13\", \"SIZE\": \"229629952\"}, {\"SSD\": \"False\", \"NAME\": \"loop14\", \"SIZE\": \"2342912\"}, {\"SSD\": \"False\", \"NAME\": \"loop15\", \"SIZE\": \"978944\"}, {\"SSD\": \"False\", \"NAME\": \"loop16\", \"SIZE\": \"33554432\"}, {\"SSD\": \"False\", \"NAME\": \"loop17\", \"SIZE\": \"33554432\"}, {\"SSD\": \"False\", \"NAME\": \"loop18\", \"SIZE\": \"33554432\"}, {\"SSD\": \"False\", \"NAME\": \"loop19\", \"SIZE\": \"33554432\"}, {\"SSD\": \"False\", \"NAME\": \"loop20\", \"SIZE\": \"33554432\"}, {\"SSD\": \"False\", \"NAME\": \"loop21\", \"SIZE\": \"33554432\"}, {\"SSD\": \"False\", \"NAME\": \"loop22\", \"SIZE\": \"33554432\"}, {\"SSD\": \"False\", \"NAME\": \"loop23\", \"SIZE\": \"33554432\"}, {\"SSD\": \"False\", \"NAME\": \"sda\", \"SIZE\": \"128849018880\"}, {\"SSD\": \"False\", \"NAME\": \"sr0\", \"SIZE\": \"1073741312\"}]'),
            'os_information' => 'Linux ubuntu 5.4.0-67-generic #75~18.04.1-Ubuntu SMP Tue Feb 23 19:17:50 UTC 2021 x86_64',
            'system_manufacturer' => $this->faker->company,
            'system_product_name' => $this->faker->sentence($nbWords = 6, $variableNbWords = true),
            'total_memory' => $this->faker->numberBetween($min = 50000, $max = 900000),
            'last_seen' => $this->faker->dateTime(),
        ];
    }
}
