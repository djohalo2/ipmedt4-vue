<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDoctorNotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctor_notes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->integer('added_by')->unsigned();
            $table->integer('therapy_id')->unsigned();
            $table->longText('note');
            $table->timestamps();

            $table->foreign('added_by')->references('id')->on('doctors');
            $table->foreign('therapy_id')->references('id')->on('therapies');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('doctor_notes');
    }
}
