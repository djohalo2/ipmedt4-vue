<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{

    public $fillable = ['gender', 'firstname', 'lastname', 'email', 'phone', 'birthday', 'street', 'street_number', 'postal_code', 'city', 'user_id'];

//    protected $with = ['therapys', 'notes', 'appointments'];

    public function therapys()
    {
        return $this->hasMany('App\Therapy');
    }

    public function appointments()
    {
        return $this->hasMany('App\Appointment', 'patient_id', 'id');
    }

    public function notes()
    {
        return $this->hasMany('App\Patient_note', 'patient_id', 'id');
    }

}
