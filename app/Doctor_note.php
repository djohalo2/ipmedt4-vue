<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Doctor_note extends Model
{
    protected $fillable = ['title', 'therapy_id', 'added_by', 'note'];

    public $with = ['added_by'];

    public function added_by()
    {
        return $this->hasOne('App\Doctor', 'id', 'added_by');
    }
}
