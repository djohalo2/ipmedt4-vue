<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ExcerciseType extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('excercise_type', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('excercise_id')->unsigned()->index();
            $table->integer('type_id')->unsigned()->index();
            $table->timestamps();

            $table->foreign('excercise_id')->references('id')->on('excercises');
            $table->foreign('type_id')->references('id')->on('types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('excercise_type');
    }
}
