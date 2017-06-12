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
        $api->resource('patient', \App\Http\Controllers\PatientController::class);
        $api->resource('patient_note', \App\Http\Controllers\PatientNoteController::class);
        $api->resource('bodypart', \App\Http\Controllers\BodypartController::class, $except);
        $api->resource('excercise', \App\Http\Controllers\ExcerciseController::class, $except);
        $api->resource('excercise_todo', \App\Http\Controllers\ExcerciseTodoController::class);
        $api->resource('therapy', \App\Http\Controllers\TherapyController::class, $except);
        $api->resource('type', \App\Http\Controllers\TypeController::class, $except);
        $api->resource('video', \App\Http\Controllers\VideoController::class, $except);
        $api->resource('medicine', \App\Http\Controllers\MedicineController::class, $except);
        $api->resource('medicine_todo', \App\Http\Controllers\MedicineTodoController::class);
        $api->resource('department', \App\Http\Controllers\DepartmentController::class, $except);
        $api->resource('doctor', \App\Http\Controllers\DoctorController::class, $except);
        $api->resource('doctor_note', \App\Http\Controllers\DoctorNoteController::class);

        $api->get('authenticate/checkuser', ['as' => 'authenticate.checkuser',  'uses' => '\App\Http\Controllers\AuthenticateController@authenticateCheck']);

        $api->get('patient/user/{user_id}', ['as' => 'patient.user_id',  'uses' => '\App\Http\Controllers\PatientController@patient_user_id']);
        $api->get('doctor/user/{user_id}', ['as' => 'doctor.user_id',  'uses' => '\App\Http\Controllers\DoctorController@doctor_user_id']);
    });


    $api->post('authenticate', ['as' => 'authenticate.user',  'uses' => '\App\Http\Controllers\AuthenticateController@authenticate']);

});
