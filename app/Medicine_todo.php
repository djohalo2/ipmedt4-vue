<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Medicine_todo extends Model
{
    protected $fillable = ['therapy_id', 'medicine_id', 'done', 'complete_date', 'time_date', 'amount', 'amount_per_day'];

    public $with = ['medicine'];

    public function medicine()
    {
        return $this->hasOne('App\Medicine', 'id', 'medicine_id');
    }
}
