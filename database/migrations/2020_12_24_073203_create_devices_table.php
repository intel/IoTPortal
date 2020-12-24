<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDevicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('devices', function (Blueprint $table) {
            $table->id();
            $table->string('unique_id');
            $table->string('name');
            $table->string('status');
            $table->string('bios_release_date');
            $table->string('bios_vendor');
            $table->string('bios_version');
            $table->string('cpu');
            $table->string('disk_information');
            $table->string('os_information');
            $table->string('system_manufacturer');
            $table->string('system_product_name');
            $table->string('total_memory');
            $table->string('mqtt_username');
            $table->string('mqtt_password');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('team_id');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('team_id')->references('id')->on('teams');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('devices');
    }
}
