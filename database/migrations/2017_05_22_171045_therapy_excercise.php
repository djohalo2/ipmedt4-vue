<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TherapyExcercise extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('therapy_excercise', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('therapy_id')->unsigned()->index();
            $table->integer('excercise_id')->unsigned()->index();
            $table->timestamps();

            $table->foreign('therapy_id')->references('id')->on('therapies');
            $table->foreign('excercise_id')->references('id')->on('excercises');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('therapy_excercise');
    }
}
