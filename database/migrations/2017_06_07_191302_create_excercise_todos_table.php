<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExcerciseTodosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('excercise_todos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('therapy_id')->unsigned();
            $table->integer('excercise_id')->unsigned();
            $table->integer('sets');
            $table->integer('sets_amount');
            $table->dateTime('time_date');
            $table->boolean('done');
            $table->dateTime('completion');
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
        Schema::dropIfExists('excercise_todos');
    }
}
