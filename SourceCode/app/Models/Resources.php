<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resources extends Model
{
    use HasFactory;


    public function getCourse()
    {
        return $this->belongsTo(Courses::class);
    }
}
