<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFotaConfigurationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fota_configurations', function (Blueprint $table) {
            $table->id();
            $table->string('bios_version')->nullable();
            $table->string('fetch');
            $table->string('manufacturer')->nullable();
            $table->string('path')->nullable();
            $table->string('product')->nullable();
            $table->string('release_date')->nullable();
            $table->string('signature')->nullable();
            $table->string('tools_options')->nullable();
            $table->string('vendor')->nullable();
            $table->string('server_username')->nullable();
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
        Schema::dropIfExists('fota_configurations');
    }
}
