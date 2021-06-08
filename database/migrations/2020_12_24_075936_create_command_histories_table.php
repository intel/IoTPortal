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
            $table->json('payload')->nullable();
            $table->string('error')->nullable();
            $table->timestamp('started_at')->nullable();
            $table->timestamp('completed_at')->nullable();
            $table->timestamp('responded_at')->nullable();
            $table->unsignedBigInteger('command_id');
            $table->unsignedBigInteger('device_job_id')->nullable();
            $table->timestamps();

            $table->foreign('command_id')->references('id')->on('commands')->onDelete('cascade');
            $table->foreign('device_job_id')->references('id')->on('device_jobs')->onDelete('cascade');
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
