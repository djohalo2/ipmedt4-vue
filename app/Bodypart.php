<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bodypart extends Model
{
    public $fillable = ['name'];

//    protected $with = ['therapies'];

    public function therapies()
    {
        return $this->belongsToMany('App\Therapy', 'therapy_bodypart', 'bodypart_id', 'therapy_id');
    }
}
