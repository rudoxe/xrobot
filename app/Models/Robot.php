<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Robot extends Model
{
    use HasFactory;

    // Remove 'type' from the fillable array
    protected $fillable = [
        'name',
        'task',
        'power_level', // Keep only the fields you need
    ];
}