<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TherapyBodypart extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('therapy_bodypart', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('therapy_id')->unsigned()->index();
            $table->integer('bodypart_id')->unsigned()->index();
            $table->timestamps();

            $table->foreign('therapy_id')->references('id')->on('therapies');
            $table->foreign('bodypart_id')->references('id')->on('bodyparts');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('therapy_bodypart');
    }
}
