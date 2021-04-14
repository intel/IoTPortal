<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommandHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('command_histories', function (Blueprint $table) {
            $table->id();
//            $table->integer('type');
            $table->json('payload')->nullable();
            $table->timestamp('response_time')->nullable();
            $table->unsignedBigInteger('command_id');
//            $table->unsignedBigInteger('device_id');
            $table->timestamps();

            $table->foreign('command_id')->references('id')->on('commands');
//            $table->foreign('device_id')->references('id')->on('devices');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('command_histories');
    }
}
