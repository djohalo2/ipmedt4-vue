<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMedicineTodosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medicine_todos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('therapy_id')->unsigned();
            $table->integer('medicine_id')->unsigned();
            $table->string('amount');
            $table->dateTime('time_date');
            $table->integer('amount_per_day');
            $table->boolean('done')->default(0);
            $table->dateTime('complete_date')->nullable();
            $table->timestamps();

            $table->foreign('therapy_id')->references('id')->on('therapies');
            $table->foreign('medicine_id')->references('id')->on('medicines');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('medicine_todos');
    }
}
