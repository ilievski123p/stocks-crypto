<?php

use \App\Http\Controllers\API\UserController;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\StocksController;

Route::post('login', [UserController::class, 'login']);
Route::post('register', [UserController::class, 'register']);
Route::post('logout', [UserController::class, 'logout'])->middleware('auth:sanctum');

Route::post('getStocks', [StocksController::class, 'getStocks'])->middleware('api');
Route::post('getCryptos',[StocksController::class, 'getCryptos'])->middleware('api');

Route::get('getUser',[UserController::class, 'getUser'])->middleware('api');
Route::post('updateUser',[UserController::class, 'updateUser'])->middleware('api');

Route::post('addToFavorites',[STocksController::class, 'addToFavorites'])->middleware('api');
Route::get('getFavorites',[StocksController::class, 'getFavorites'])->middleware('api');
