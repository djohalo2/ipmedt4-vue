<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Medication extends Model
{
    public $fillable = ['therapy_id', 'times', 'doses', 'medicine_id'];

    protected $with = ['medicine'];

    public function medicine()
    {
        return $this->hasOne('App\Medicine', 'id', 'medicine_id');
    }
}
