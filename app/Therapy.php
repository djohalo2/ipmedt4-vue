<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Therapy extends Model
{
    public $fillable = ['name', 'patient_id', 'start_date', 'end_date', 'department_id', 'created_by', 'last_update_by'];

    protected $with = ['created_by', 'last_update_by', 'doctor_notes', 'excercises', 'bodyparts', 'medicines', 'medicine_todo', 'excercise_todo', 'appointments'];

    public function patient()
    {
        return $this->belongsTo('App\Patient', 'patient_id');
    }

    public function created_by()
    {
        return $this->hasOne('App\Doctor', 'id', 'created_by');
    }

    public function last_update_by()
    {
        return $this->hasOne('App\Doctor', 'id', 'last_update_by');
    }

    public function doctor_notes()
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

    public function appointments()
    {
        return $this->hasMany('App\Appointment', 'therapy_id', 'id');
    }


}
