<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Alpaca\Alpaca;
use Illuminate\Support\Facades\Http;
use App\Models\Favorites;
use Auth;
class StocksController extends Controller
{
   public function index()
   {

   }

   public function getMarkets()
   {
    return Http::get('https://api.polygon.io/v2/reference/locales?&apiKey=axI0heizc_7p7_9aew40pAGjvQ7tf0H9');

   }

   public function getStocks(Request $request)
   {
    $market = 'us';    
    $url = 'https://api.polygon.io/v2/aggs/grouped/locale/'. $market .'/market/stocks/2020-10-14?adjusted=true&apiKey=axI0heizc_7p7_9aew40pAGjvQ7tf0H9';
    return Http::get($url);
   }

   public function getCryptos(Request $request)
   {
    return Http::get('https://api.polygon.io/v2/aggs/grouped/locale/global/market/crypto/2020-10-14?adjusted=true&apiKey=axI0heizc_7p7_9aew40pAGjvQ7tf0H9');
   }

   public function addToFavorites(Request $request)
   {
      $favorite = new Favorites();
      $favorite->user_id = Auth::id();
      $favorite->code_full = json_encode($request->stock);
      $favorite->code = $request->stock["T"];
      $favorite->type = $request->type;
      $response = $favorite->save();

      return response()->json($response);
   }

   public function getFavorites()
   {
      return Favorites::get();
   }
}
