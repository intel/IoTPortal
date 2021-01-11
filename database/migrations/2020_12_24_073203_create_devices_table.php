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
            $table->string('unique_id')->unique();
            $table->string('name');
            $table->integer('status');
            $table->string('bios_release_date')->nullable();
            $table->string('bios_vendor')->nullable();
            $table->string('bios_version')->nullable();
            $table->string('cpu')->nullable();
            $table->string('disk_information')->nullable();
            $table->string('os_information')->nullable();
            $table->string('system_manufacturer')->nullable();
            $table->string('system_product_name')->nullable();
            $table->integer('total_memory')->nullable();
            $table->string('mqtt_password');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedBigInteger('team_id')->nullable();
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
