<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Medicine extends Model
{
    public $fillable = ['name', 'important', 'side_effects', 'usage'];


}
