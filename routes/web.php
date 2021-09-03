<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\FullInfoController;


Route::delete('removeFromFavorites',[StocksController::class, 'removeFromFavorites']);



Route::get('/{any}', function () {
    return view('welcome');
})->where('any','.*');


