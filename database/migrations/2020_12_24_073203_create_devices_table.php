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
//            $table->integer('status');
            $table->string('bios_release_date')->nullable();
            $table->string('bios_vendor')->nullable();
            $table->string('bios_version')->nullable();
            $table->string('cpu')->nullable();
            $table->json('disk_information')->nullable();
            $table->string('os_information')->nullable();
            $table->string('system_manufacturer')->nullable();
            $table->string('system_product_name')->nullable();
            $table->unsignedBigInteger('total_memory')->nullable();
            $table->string('mqtt_password');
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('status_id');
//            $table->unsignedBigInteger('user_id');
//            $table->unsignedBigInteger('team_id')->nullable();
            $table->timestamps();

            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('status_id')->references('id')->on('statuses');
//            $table->foreign('user_id')->references('id')->on('users');
//            $table->foreign('team_id')->references('id')->on('teams');
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
