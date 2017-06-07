<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Therapy extends Model
{
    public $fillable = ['name', 'patient_id', 'start_date', 'end_date', 'created_by', 'last_update_by'];

    protected $with = ['created_by', 'last_update_by', 'notes', 'excercises', 'bodyparts', 'medicines', 'medicine_todo', 'excercise_todo'];

    public function patient()
    {
        return $this->hasOne('App\Patient', 'id', 'patient_id');
    }

    public function created_by()
    {
        return $this->hasOne('App\User', 'id', 'created_by');
    }

    public function last_update_by()
    {
        return $this->hasOne('App\User', 'id', 'last_update_by');
    }

    public function notes()
    {
        return $this->hasMany('App\Doctor_note', 'therapy_id', 'id');
    }

    public function excercises()
    {
        return $this->belongsToMany('App\Excercise', 'therapy_excercise', 'therapy_id', 'excercise_id');
    }

    public function medicines()
    {
        return $this->belongsToMany('App\Medicine', 'therapy_medicine', 'therapy_id', 'medicine_id');
    }

    public function bodyparts()
    {
        return $this->belongsToMany('App\Bodypart', 'therapy_bodypart', 'therapy_id', 'bodypart_id');
    }

    public function medicine_todo()
    {
        return $this->hasMany('App\Medicine_todo', 'therapy_id', 'id');
    }

    public function excercise_todo()
    {
        return $this->hasMany('App\Excercise_todo', 'therapy_id', 'id');
    }


}
