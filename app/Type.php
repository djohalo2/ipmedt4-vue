<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    public $fillable = ['type'];

//    protected $with = ['excercises'];

    public function excercises()
    {
        return $this->belongsToMany('App\Excercise', 'excercise_type', 'type_id', 'excercise_id');
    }
}
