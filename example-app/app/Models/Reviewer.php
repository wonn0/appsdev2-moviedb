<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reviewer extends Model
{
    // use HasFactory;
    protected $table = 'reviewer';

    public $timestamps = false;

    protected $primaryKey = 'rev_id';

    public function ratings()
    {
        return $this->hasMany(Rating::class, 'rev_id');
    }
}
