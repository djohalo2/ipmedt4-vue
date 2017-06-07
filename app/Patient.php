<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{

    public $fillable = ['firstname', 'lastname', 'email', 'phone', 'birthday', 'street', 'street_number', 'postal_code', 'city', 'user_id'];

    protected $with = ['therapys', 'notes'];

    public function therapys()
    {
        return $this->hasMany('App\Therapy');
    }

    public function notes()
    {
        return $this->hasMany('App\Patient_note', 'patient_id', 'id');
    }
}
