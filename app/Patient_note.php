<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Patient_note extends Model
{
    protected $fillable = ['patient_id', 'note'];
}
