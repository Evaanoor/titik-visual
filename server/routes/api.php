<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\JobController;
use App\Http\Controllers\Api\MessageController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\SettingsController;


//auth
Route::post('/login', [AuthController::class, 'login']);

//port view only 
Route::get('/portfolios', [PortfolioController::class, 'index']);
Route::get('/portfolios/{id}', [PortfolioController::class, 'show']);

//job view only
Route::get('/jobs', [JobController::class, 'index']);
Route::get('/jobs/{id}', [JobController::class, 'show']); // Detail job

//messages sent only
Route::post('/messages', [MessageController::class, 'store']);


// Public route: baca setting (publik)
Route::get('/settings/{key}', [SettingsController::class, 'show']);

// protected routes atau utk admin yang sdh login
Route::middleware('auth:sanctum')->group(function () {
    
    // Auth (Logout & Get User Info)
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // --- ADMIN PORTFOLIO (CRUD) ---
    Route::post('/portfolios', [PortfolioController::class, 'store']);      // Tambah
    Route::put('/portfolios/{id}', [PortfolioController::class, 'update']);   // Edit
    Route::delete('/portfolios/{id}', [PortfolioController::class, 'destroy']); // Hapus

    // --- ADMIN JOBS (CRUD) ---
    Route::post('/jobs', [JobController::class, 'store']);
    Route::put('/jobs/{id}', [JobController::class, 'update']);
    Route::delete('/jobs/{id}', [JobController::class, 'destroy']);

    // --- ADMIN MESSAGES (LIHAT & HAPUS) ---
    Route::get('/messages', [MessageController::class, 'index']); // Lihat inbox
    Route::delete('/messages/{id}', [MessageController::class, 'destroy']); // Hapus pesan

    // --- SETTINGS (update only) ---
    Route::post('/settings/{key}', [SettingsController::class, 'update']);
});