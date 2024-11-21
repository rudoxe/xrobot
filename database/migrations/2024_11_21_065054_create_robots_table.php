<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRobotsTable extends Migration
{
    public function up()
    {
        Schema::create('robots', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('task');
            $table->integer('power_level');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('robots');
    }
}
