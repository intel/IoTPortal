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
            $table->string('bios_release_date')->nullable();
            $table->string('bios_vendor')->nullable();
            $table->string('bios_version')->nullable();
            $table->string('cpu')->nullable();
            $table->json('disk_information')->nullable();
            $table->string('os_information')->nullable();
            $table->string('system_manufacturer')->nullable();
            $table->string('system_product_name')->nullable();
            $table->unsignedBigInteger('total_memory')->nullable();
            $table->text('mqtt_password');
            $table->unsignedBigInteger('device_category_id');
            $table->unsignedBigInteger('device_status_id');
            $table->timestamps();

            $table->foreign('device_category_id')->references('id')->on('device_categories')->onDelete('cascade');
            $table->foreign('device_status_id')->references('id')->on('device_statuses')->onDelete('cascade');
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
