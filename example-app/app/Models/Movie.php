<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    // use HasFactory;
    protected $table = 'movie'; 

    public $timestamps = false;

    protected $primaryKey = 'mov_id';

    public function ratings()
    {
        return $this->hasMany(Rating::class, 'mov_id');
    }

    public function cast() {
        return $this->hasMany(MovieCast::class, 'mov_id');
    }

    public function genres() {
        return $this->belongsToMany(Genre::class, 'movie_genres', 'mov_id', 'gen_id');
    }

    public function directors() {
        return $this->belongsToMany(Director::class, 'movie_direction', 'mov_id', 'dir_id');
    }
}
