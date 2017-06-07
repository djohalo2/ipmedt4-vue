<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    protected $fillable = ['user_id', 'gender', 'firstname', 'lastname', 'department_id', 'email', 'phone'];

    public $with = ['department'];

    public function department()
    {
        return $this->hasOne('App\Department', 'id', 'department_id');
    }
}
