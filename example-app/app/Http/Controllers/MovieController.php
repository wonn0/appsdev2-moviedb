<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;

class MovieController extends Controller
{
    /**
     * Return movies
     */
    public function getMovies(Request $request)
    {
        // Retrieve all movies from the database
        $movies = Movie::paginate(10);

        // Return a JSON response containing the movies
        return response()->json([
            'data' => $movies,
        ]);
    }
    /**
     * Get movie details
     */
    public function getMovie(Request $request, $mov_id)
    {
        // Get the Movie model with the specified ID and its associated relationships
        $movie = Movie::with(['ratings', 'cast', 'cast.actor', 'genres', 'directors', 'ratings.reviewer'])->find($mov_id);

        // If the movie was not found, return a 404 error response
        if (!$movie) {
            return response()->json(['error' => 'Movie not found'], 404);
        }

        // Return a JSON response containing the movie details
        return response()->json([
            'id' => $movie->mov_id,
            'year' => $movie->mov_year,
            'time' => $movie->mov_time,
            'title' => $movie->mov_title,
            'description' => $movie->mov_description,
            'ratings' => $movie->ratings,
            'cast' => $movie->cast,
            'genres' => $movie->genres,
            'directors' => $movie->directors,
        ]);
    }
}
