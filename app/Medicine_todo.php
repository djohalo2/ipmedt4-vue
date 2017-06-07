<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Medicine_todo extends Model
{
    protected $fillable = ['therapy_id', 'medicine_id', 'done', 'complete_date', 'time_date', 'amount'];

    public $with = ['medicine'];

    public function medicine()
    {
        return $this->hasOne('App\Medicine', 'medicine_id', 'id');
    }
}
