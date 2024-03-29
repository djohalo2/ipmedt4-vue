<?php

namespace App\Http\Controllers;

use App\Mail\Password;
use App\Mail\Welcome;
use App\Patient;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

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
        $firstname = ucfirst($request->firstname);
        $lastname = $request->lastname;
        $email = $request->email;
        $phone = $request->phone;
        $birthday = $request->birthday;
        $street = ucfirst($request->street);
        $street_number = $request->street_number;
        $postal_code = $request->postal_code;
        $city = ucfirst($request->city);

        $username = str_slug(strtolower($firstname . ' ' . $lastname . ' ' . rand(1000, 9999)), '_');
        $name = $firstname . ' ' . $lastname;
        $password_str = str_random(8);
        $password = $password_str;



        $user = User::firstOrNew([
            'email' => $email
        ]);

        if ($user->exists) {
            return ['success' => 0];
        }

        $user->username = $username;
        $user->name = $name;
        $user->email = $email;
        $user->type = 'patient';
        $user->password = $password;

        $user->save();


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

            $patient = Patient::where('id', '=', $patient->id)->first();

            if ($patient) {

                $data = array(
                    'firstname'=>$firstname,
                    'lastname'=>$lastname,
                    'username'=>$username,
                    'email'=>$email,
                );

                Mail::to($data['email'])
                    ->queue(new Welcome($data));

                $data['password'] = $password_str;

                $when = Carbon::now()->addSeconds(20)->toDateTimeString();

                Mail::to($data['email'])
                    ->later($when, new Password($data));

                return ['success' => 1, 'password' => $password_str, 'patient' => $patient];

            }

        }

        return ['success' => 0];
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return Patient
     * @internal param Patient $patient
     */
    public function show($id)
    {
        return Patient::where('id', '=', $id)->with(['appointments' => function($query){

            $query->orderBy('start', 'desc');

        }, 'therapys', 'notes'])->first();
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
     * @param  \Illuminate\Http\Request $request
     * @param Patient $patient
     * @return array
     * @internal param $id
     * @internal param Patient $patient
     */
    public function update(Request $request, Patient $patient)
    {
        $select = Patient::find($patient)->first();

        if ($select) {

            $gender = $request->gender;
            $firstname = ucfirst($request->firstname);
            $lastname = $request->lastname;
            $email = $request->email;
            $phone = $request->phone;
            $birthday = $request->birthday;
            $street = ucfirst($request->street);
            $street_number = $request->street_number;
            $postal_code = $request->postal_code;
            $city = ucfirst($request->city);

            $user_id = $select->user_id;

            $select->gender = $gender;
            $select->firstname = $firstname;
            $select->lastname = $lastname;
            $select->email = $email;
            $select->phone = $phone;
            $select->birthday = $birthday;
            $select->street = $street;
            $select->street_number = $street_number;
            $select->postal_code = $postal_code;
            $select->city = $city;

            $save = $select->save();

            if ($save) {
                $user = User::where('id', '=', $user_id)->first();

                $user->email = $email;

                $save = $user->save();

                if ($save) {
                    return ['patient' => $select];
                }

                return ['success' => 0];
            }

            return ['success' => 0];

        }

        return ['success' => 0];
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
        return Patient::where('user_id', '=', $user_id)->with(['appointments' => function($query){

            $query->orderBy('start', 'desc');

        }, 'therapys.medicine_todo' => function($query) {
            $query->where('time_date', 'like', Carbon::parse(Carbon::today())->format('Y-m-d') . '%');
        }, 'therapys.excercise_todo' => function($query) {
            $query->where('time_date', 'like', Carbon::parse(Carbon::today())->format('Y-m-d') . '%');
        },
            'therapys',
            'notes',
            'therapys.doctor_notes',
            'therapys.excercises',
            'therapys.medicines',
            'therapys.bodyparts',
            'therapys.appointments'
        ])->first();
    }
}
