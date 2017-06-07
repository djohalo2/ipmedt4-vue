<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TherapyMedicine extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('therapy_medicine', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('therapy_id')->unsigned()->index();
            $table->integer('medicine_id')->unsigned()->index();
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
        Schema::dropIfExists('therapy_medicine');
    }
}
