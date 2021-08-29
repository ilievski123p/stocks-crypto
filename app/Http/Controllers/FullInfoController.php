<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FullInfoController extends Controller
{
    public function basicData(Request $request)
    {
        return Http::Get('https://api.polygon.io/v1/meta/symbols/AAPL/company?&apiKey=axI0heizc_7p7_9aew40pAGjvQ7tf0H9');
    }
 
    //https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-10-14/2021-10-14?adjusted=true&sort=asc&limit=5000&apiKey=axI0heizc_7p7_9aew40pAGjvQ7tf0H9
 
}
