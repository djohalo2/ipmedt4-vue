<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{

    public $fillable = ['firstname', 'lastname', 'email', 'phone', 'birthday'];

//    protected $with = ['therapy'];

    public function therapy()
    {
        return $this->hasMany('App\Therapy', 'patient_id', 'id');
    }
}
