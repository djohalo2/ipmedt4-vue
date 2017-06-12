<?php

use App\Appointment;
use App\Bodypart;
use App\Department;
use App\Doctor;
use App\Doctor_note;
use App\Excercise;
use App\Excercise_todo;
use App\Medicine;
use App\Medicine_todo;
use App\Patient;
use App\Patient_note;
use App\Therapy;
use App\Type;
use App\User;
use App\Video;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class TableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $doctor_user = User::insert([
            'username'      => 'boris_reuk',
            'name'          => 'Boris Reuk',
            'email'         => 'boris_reuk@lumc.nl',
            'password'      => Hash::make(env('USER_PASSWORD', 'secret')),
            'type'          => 'doctor',
            'created_at'    => Carbon::now(),
            'updated_at'    => Carbon::now()
        ]);

        $patient_user = User::insert([
            'username'      => 'bas',
            'name'          => 'Bas van Bovene',
            'email'         => 'bas@bovene.nl',
            'password'      => Hash::make(env('USER_PASSWORD', 'secret')),
            'type'          => 'patient',
            'created_at'    => Carbon::now(),
            'updated_at'    => Carbon::now()
        ]);



        $patient = Patient::firstOrCreate([
            'gender' => 'Hr',
            'firstname' => 'Bas',
            'lastname' => 'van Gebrokene',
            'email' => 'bas@bovene.nl',
            'phone' => '0613239346',
            'birthday' => '1998-10-08',
            'street' => 'nassaulaan',
            'street_number' => '104',
            'postal_code' => '2332GP',
            'city' => 'zoeterwoude',
            'user_id' => 2
        ]);

        $department = Department::firstOrCreate([
            'naam' => 'breuken',
            'phone' => '0711231239',
            'location' => 'leiden'
        ]);

        $doctor = Doctor::firstOrCreate([
            'user_id' => 1,
            'gender' => 'Dr',
            'firstname' => 'Boris',
            'lastname' => 'Reuk',
            'department_id' => $department->id,
            'email' => 'boris_reuk@lumc.nl',
            'phone' => '0612312345'
        ]);



        $therapy1 = Therapy::firstOrCreate([
            'name' => 'test_therapy_1',
            'patient_id' => 1,
            'start_date' => '2017-06-30',
            'end_date' => '2017-07-30',
            'department_id' => $department->id,
            'created_by' => 1,
            'last_update_by' => 1
        ]);

        $therapy2 = Therapy::firstOrCreate([
            'name' => 'test_therapy_2',
            'patient_id' => 1,
            'start_date' => '2017-06-27',
            'end_date' => '2017-07-10',
            'department_id' => $department->id,
            'created_by' => 1,
            'last_update_by' => 1
        ]);



        $patient_note = Patient_note::firstOrCreate([
            'title' => 'Patient note 1',
            'patient_id' => 1,
            'note' => 'test patient note'
        ]);

        $doctor_note = Doctor_note::firstOrCreate([
            'title' => 'doctor note 1',
            'added_by' => 1,
            'therapy_id' => $therapy1->id,
            'note' => 'therapy 1 test doctor note'
        ]);



        $bodypart1 = Bodypart::firstOrCreate([
            'name' => 'been rechts'
        ]);

        $bodypart2 = Bodypart::firstOrCreate([
            'name' => 'been links'
        ]);

        DB::table('therapy_bodypart')->insert([
            [
                'therapy_id' => $therapy1->id,
                'bodypart_id' => $bodypart1->id
            ],
            [
                'therapy_id' => $therapy2->id,
                'bodypart_id' => $bodypart2->id
            ],
        ]);



        $excercise_type = Type::firstOrCreate([
            'type' => 'been'
        ]);

        $video = Video::firstOrCreate([
            'title' => 'Fysiotherapie oefening: knie strekken',
            'url' => 'https://www.youtube.com/embed/BxzAaglPgaU?rel=0&amp;showinfo=0'
        ]);

        $excercise = Excercise::firstOrCreate([
            'title' => 'Knie strekken',
            'description' => 'Het strekken van de knie',
            'video_id' => $video->id
        ]);

        DB::table('excercise_type')->insert([
            'excercise_id' => $excercise->id,
            'type_id' => $excercise_type->id
        ]);

        DB::table('therapy_excercise')->insert([
            'therapy_id' => $therapy1->id,
            'excercise_id' => $excercise->id
        ]);

        Excercise_todo::firstOrCreate([
            'therapy_id' => $therapy1->id,
            'excercise_id' => $excercise->id,
            'sets' => 2,
            'sets_amount' => 10,
            'time_date' => '2017-06-07 10:00:00',
            'done' => false
        ]);
        Excercise_todo::firstOrCreate([
            'therapy_id' => $therapy1->id,
            'excercise_id' => $excercise->id,
            'sets' => 2,
            'sets_amount' => 10,
            'time_date' => '2017-06-07 19:00:00',
            'done' => false
        ]);



        $medicine = Medicine::firstOrCreate([
            'name' => 'ibuprofen',
            'important' => 'Pas op met alcohol',
            'side_effects' => 'Misselijkheid',
            'usage' => 'Innemen met een half glas water'
        ]);

        DB::table('therapy_medicine')->insert([
            'therapy_id' => $therapy1->id,
            'medicine_id' => $medicine->id
        ]);

        Medicine_todo::firstOrCreate([
            'therapy_id' => $therapy1->id,
            'medicine_id' => $medicine->id,
            'amount' => '2 stuks',
            'amount_per_day' => 2,
            'time_date' => '2017-06-07 08:30:00',
            'done' => true
        ]);
        Medicine_todo::firstOrCreate([
            'therapy_id' => $therapy1->id,
            'medicine_id' => $medicine->id,
            'amount' => '2 stuks',
            'amount_per_day' => 2,
            'time_date' => '2017-06-07 12:30:00',
            'done' => false
        ]);
        Medicine_todo::firstOrCreate([
            'therapy_id' => $therapy1->id,
            'medicine_id' => $medicine->id,
            'amount' => '2 stuks',
            'amount_per_day' => 2,
            'time_date' => '2017-06-08 12:30:00',
            'done' => false
        ]);


        $appointment1 = Appointment::firstOrCreate([
            'time_date' => '2017-06-15',
            'therapy_id' => $therapy1->id,
            'patient_id' => $patient->id,
            'doctor_id' => $doctor->id,
            'status' => 'planned'
        ]);

        $appointment2 = Appointment::firstOrCreate([
            'time_date' => '2017-06-01',
            'therapy_id' => $therapy1->id,
            'patient_id' => $patient->id,
            'doctor_id' => $doctor->id,
            'status' => 'planned'
        ]);

    }
}