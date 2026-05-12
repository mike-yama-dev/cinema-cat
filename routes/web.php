<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use App\Http\Controllers\Api\MovieController;


Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});
Route::get('/', [MovieController::class, 'indexShow'])->name('welcome');

Route::get('/movies/{movie}', [MovieController::class, 'show'])->name('movies.show');

require __DIR__.'/settings.php';
