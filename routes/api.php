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

$api = app(\Dingo\Api\Routing\Router::class);

$api->version('v1', ['middleware' => 'api.throttle', 'limit' => 10000, 'expires' => 5], function ($api)
{

    $api->group(['middleware' => ['api.auth', 'api']], function ($api)
    {

        $except = ['except' => ['update']];
        $api->resource('patient', \App\Http\Controllers\PatientController::class, $except);
        $api->resource('note', \App\Http\Controllers\NoteController::class, $except);
        $api->resource('bodypart', \App\Http\Controllers\BodypartController::class, $except);
        $api->resource('excercise', \App\Http\Controllers\ExcerciseController::class, $except);
        $api->resource('therapy', \App\Http\Controllers\TherapyController::class, $except);
        $api->resource('type', \App\Http\Controllers\TypeController::class, $except);
        $api->resource('video', \App\Http\Controllers\VideoController::class, $except);
        $api->resource('medicine', \App\Http\Controllers\MedicineController::class, $except);
        $api->resource('medication', \App\Http\Controllers\MedicationController::class, $except);

//        $api->get('therapy/{id}', '\App\Http\Controllers\TherapyController@show');
    });


    $api->post('authenticate',              ['as' => 'authenticate.user',  'uses' => '\App\Http\Controllers\AuthenticateController@authenticate']);
    $api->post('authenticate/checkuser',    ['as' => 'authenticate.checkuser',  'uses' => '\App\Http\Controllers\AuthenticateController@authenticateCheck']);
});
