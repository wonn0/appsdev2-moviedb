<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MovieCast extends Model
{
    // use HasFactory;
    protected $table = 'movie_cast';

    public $timestamps = false;

    public function movie()
    {
        return $this->belongsTo(Movie::class, 'mov_id');
    }

    public function actor()
    {
        return $this->belongsTo(Actor::class, 'act_id');
    }
}
