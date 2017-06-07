<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Excercise_todo extends Model
{
    protected $fillable = ['therapy_id', 'excercise_id', 'done', 'complete_date', 'time_date', 'sets', 'sets_amount'];

    public $with = ['excercise'];

    public function excercise()
    {
        return $this->hasOne('App\Excercise', 'id', 'excercise_id');
    }
}
