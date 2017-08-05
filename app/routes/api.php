<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('v1')
    ->middleware('auth:api')
    ->group(function() {

        Route::get('/docs', function (Request $request) {

            $docs = [
                '/docs' => 'A list of all commands available in the api',
                '/oauth/token' => 'issue a token',
                '/user' => 'get current logged in user'
            ];

            return $request->json($docs);
        });

        Route::get('/user', function (Request $request) {
            return $request->user();
        });


    });
