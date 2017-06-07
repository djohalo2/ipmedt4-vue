<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{

    protected $fillable = ['firstname', 'lastname', 'email', 'phone', 'birthday', 'street', 'street_number', 'postal_code', 'city', 'user_id'];

    public $with = ['therapy', 'notes'];

    public function therapy()
    {
        return $this->hasMany('App\Therapy', 'patient_id', 'id');
    }

    public function notes()
    {
        return $this->hasMany('App\Patient_note', 'patient_id', 'id');
    }
}
