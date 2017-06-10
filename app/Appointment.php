<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    public $fillable = ['time_date', 'therapy_id', 'patient_id', 'doctor_id', 'status'];

    protected $with = ['patient', 'doctor'];

    public function patient()
    {
        return $this->belongsTo('App\Patient');
    }

    public function doctor()
    {
        return $this->belongsTo('App\Doctor');
    }
}
