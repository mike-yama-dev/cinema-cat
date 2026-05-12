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
        // 1. Fetch the data using your existing logic
        $movieData = $this->index();

        // 2. Return the Inertia page with the data as a prop
        return Inertia::render('welcome', [
            'movies' => $movieData['results'] ?? []
        ]);
    }

    public function getMovieDetails($id)
    {
        $response = Http::withToken(config('services.tmdb.token'))
            ->get("https://api.themoviedb.org/3/movie/{$id}?language=en-US");

        return $response->json();
    }

    public function show($movie)
    {
        // 1. Fetch the data using your existing logic
        $movieData = $this->getMovieDetails($movie);

        // 2. Return the Inertia page with the data as a prop
        return Inertia::render('Movies/Show', [
            'movie' => $movieData
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
