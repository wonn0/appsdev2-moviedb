<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Director extends Model
{
    // use HasFactory;
    protected $table = 'director';

    public $timestamps = false;

    protected $primaryKey = 'dir_id';

    public function movies() {
        return $this->belongsToMany(Movie::class, 'movie_direction', 'dir_id', 'mov_id');
    }
}
