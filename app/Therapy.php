<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Therapy extends Model
{
    public $fillable = ['name', 'patient_id', 'start_date', 'end_date', 'created_by', 'last_update_by'];

//    protected $with = ['patient', 'created_by', 'last_update_by', 'notes', 'excercises', 'bodyparts'];

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
        return $this->hasMany('App\Note', 'therapy_id', 'id');
    }

    public function medications()
    {
        return $this->hasMany('App\Medication', 'therapy_id', 'id');
    }

    public function excercises()
    {
        return $this->belongsToMany('App\Excercise', 'therapy_excercise', 'therapy_id', 'excercise_id');
    }

    public function bodyparts()
    {
        return $this->belongsToMany('App\Bodypart', 'therapy_bodypart', 'therapy_id', 'bodypart_id');
    }


}
