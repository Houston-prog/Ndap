<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Loyers extends Model
{
    protected $fillable = [
        'title',
        'price',
        'status',
        'location',
        'locality',
        'bedrooms',
        'bathrooms',
        'area',
        'description',
        'contact',
        'name',
        'images',
        'slug',
    ];

    // Pour transformer automatiquement le tableau d'images JSON en Array PHP
    protected $casts = [
        'images' => 'array',
        'price'=> 'decimal:2',
    ];
}
