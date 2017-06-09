<?php

namespace App\Http\Controllers;

use App\Patient;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function index()
    {
        return Patient::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function store(Request $request)
    {
        $gender = $request->gender;
        $firstname = $request->firstname;
        $lastname = $request->lastname;
        $email = $request->email;
        $phone = $request->phone;
        $birthday = $request->birthday;
        $street = $request->street;
        $street_number = $request->street_number;
        $postal_code = $request->postal_code;
        $city = $request->city;

        $username = strtolower($firstname . '_' . $lastname);
        $name = $firstname . ' ' . $lastname;
        $password_str = str_random(8);
        $password = Hash::make($password_str);

        $user = User::firstOrCreate([
            'username' => $username,
            'name' => $name,
            'email' => $email,
            'password' => $password,
            'type' => 'patient'
        ]);

        if ($user) {

            $patient = Patient::firstOrCreate([
                'gender' => $gender,
                'firstname' => $firstname,
                'lastname' => $lastname,
                'email' => $email,
                'phone' => $phone,
                'birthday' => $birthday,
                'street' => $street,
                'street_number' => $street_number,
                'postal_code' => $postal_code,
                'city' => $city,
                'user_id' => $user->id
            ]);

            if ($patient) {

                return ['success' => 1, 'password' => $password_str];

            }

        }

        return ['success' => 0];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Patient  $patient
     * @return Patient
     */
    public function show(Patient $patient)
    {
        return $patient;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function edit(Patient $patient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Patient $patient)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function destroy(Patient $patient)
    {
        //
    }

    public function patient_user_id($user_id)
    {
        return Patient::where('user_id', '=', $user_id)->first();
    }
}
