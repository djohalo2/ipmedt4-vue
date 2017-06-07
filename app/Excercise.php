<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Excercise extends Model
{
    public $fillable = ['title', 'description', 'video_id'];

    protected $with = ['types', 'video'];

    public function types()
    {
        return $this->belongsToMany('App\Type', 'excercise_type', 'excercise_id', 'type_id');
    }

    public function video()
    {
        return $this->hasOne('App\Video', 'id', 'video_id');
    }

    public function therapies()
    {
        return $this->belongsToMany('App\Therapy', 'therapy_excercise', 'excercise_id', 'therapy_id');
    }
}
