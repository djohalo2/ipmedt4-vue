<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    public $fillable = ['title', 'start', 'end', 'therapy_id', 'patient_id', 'doctor_id', 'status'];

    protected $with = ['doctor'];

    public function patient()
    {
        return $this->belongsTo('App\Patient');
    }

    public function doctor()
    {
        return $this->belongsTo('App\Doctor');
    }
}
