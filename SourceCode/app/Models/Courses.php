<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Courses extends Model
{



    use HasFactory;


    protected $fillable = [
        'name',
        'description',
        'image',
        'year',
        'file',
        'video',
        'requirements',
        'category_id',
        "created_at",
        "updated_at",
    ];

    public function users(){
        return $this->belongsToMany(User::class);
    }

    public function getResources()
    {
        return $this->hasMany(Resources::class);
    }
}
