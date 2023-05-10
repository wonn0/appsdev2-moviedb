<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actor extends Model
{
    // use HasFactory;
    protected $table = 'actor';

    public $timestamps = false;

    protected $primaryKey = 'act_id';

    public function movies()
    {
        return $this->hasMany(MovieCast::class, 'movie_cast', 'mov_id');
    }
}
