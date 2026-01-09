<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    protected $fillable = [
        'title',
        'client',
        'description',
        'tag',
        'year',
        'tags',
        'is_featured',
        'image',
    ];
}

