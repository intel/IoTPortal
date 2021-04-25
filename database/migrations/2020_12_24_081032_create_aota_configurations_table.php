<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAotaConfigurationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aota_configurations', function (Blueprint $table) {
            $table->id();
            $table->string('app');
            $table->string('command');
            $table->string('container_tag')->nullable();
            $table->string('device_reboot')->nullable();
            $table->string('fetch')->nullable();
            $table->string('signature')->nullable();
            $table->string('version')->nullable();
            $table->string('server_username')->nullable();
            $table->string('docker_registry')->nullable();
            $table->string('docker_username')->nullable();
            $table->string('docker_compose_file')->nullable();
            $table->unsignedBigInteger('user_id');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('aota_configurations');
    }
}
