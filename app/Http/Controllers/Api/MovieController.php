<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;


class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $response = Http::withToken(config('services.tmdb.token'))
            ->get('https://api.themoviedb.org/3/movie/now_playing');

        return $response->json();
    }

    public function indexShow()
    {
        $token = config('services.tmdb.token');

        // Fetch all categories
        $nowPlaying = Http::withToken($token)->get('https://api.themoviedb.org/3/movie/now_playing')->json();
        $populars = Http::withToken($token)->get('https://api.themoviedb.org/3/movie/popular')->json();
        $topRated = Http::withToken($token)->get('https://api.themoviedb.org/3/movie/top_rated')->json();
        $upcoming = Http::withToken($token)->get('https://api.themoviedb.org/3/movie/upcoming')->json();

        return Inertia::render('welcome', [
            'nowPlaying' => $nowPlaying['results'] ?? [],
            'populars'    => $populars['results'] ?? [],
            'topRated'   => $topRated['results'] ?? [],
            'upcoming'   => $upcoming['results'] ?? [],
        ]);
    }

    public function getMovieDetails($id)
    {
        // 1. Fix the URL string (removed the extra '}' after $id)
        $response = Http::withToken(config('services.tmdb.token'))
            ->get("https://api.themoviedb.org/3/movie/{$id}?language=en-US");

        // 2. Check if the request was successful
        if ($response->failed()) {
            abort(404);
        }

        // 3. Convert the response to an array/json
        $movieData = $response->json();

        return Inertia::render('Movies/Show', [
            'movie' => $movieData,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
