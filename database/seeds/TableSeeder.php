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

//        DB::table('therapy_excercise')->insert([
//            'therapy_id' => $therapy1->id,
//            'excercise_id' => $excercise->id
//        ]);



        $medicine = Medicine::firstOrCreate([
            'name' => 'ibuprofen',
            'important' => 'Pas op met alcohol',
            'side_effects' => 'Misselijkheid',
            'usage' => 'Innemen met een half glas water'
        ]);
        Medicine::firstOrCreate([
            'name' => 'Rommel',
            'important' => 'Lekker rommel in je lichaam gooien',
            'side_effects' => 'Misselijkheid',
            'usage' => 'Innemen met een half glas water'
        ]);
        Medicine::firstOrCreate([
            'name' => 'Paracetamol',
            'important' => 'Kom je van je hoofdpijn af',
            'side_effects' => 'Misselijkheid',
            'usage' => 'Innemen met een half glas water'
        ]);
        Medicine::firstOrCreate([
            'name' => 'Anti Djovanni',
            'important' => 'Kom je van djo af',
            'side_effects' => 'Misselijkheid',
            'usage' => 'Innemen met een half glas water'
        ]);


//        $appointment1 = Appointment::firstOrCreate([
//            'title' => 'Controle afspraak',
//            'start' => '2017-06-28 9:20',
//            'end' => '2017-06-28 9:40',
//            'therapy_id' => $therapy1->id,
//            'patient_id' => $patient->id,
//            'doctor_id' => $doctor->id,
//            'status' => 'planned'
//        ]);
//
//        $appointment2 = Appointment::firstOrCreate([
//            'title' => 'Operatie',
//            'start' => '2017-06-27 14:20',
//            'end' => '2017-06-27 15:30',
//            'therapy_id' => $therapy1->id,
//            'patient_id' => $patient->id,
//            'doctor_id' => $doctor->id,
//            'status' => 'planned'
//        ]);
//
//        $appointment3 = Appointment::firstOrCreate([
//            'title' => 'Controle afspraak',
//            'start' => '2017-06-28 10:00',
//            'end' => '2017-06-28 10:50',
//            'therapy_id' => $therapy1->id,
//            'patient_id' => $patient->id,
//            'doctor_id' => $doctor->id,
//            'status' => 'planned'
//        ]);
//
//        $appointment4 = Appointment::firstOrCreate([
//            'title' => 'Operatie',
//            'start' => '2017-07-06 14:20',
//            'end' => '2017-07-06 15:30',
//            'therapy_id' => $therapy1->id,
//            'patient_id' => $patient->id,
//            'doctor_id' => $doctor->id,
//            'status' => 'planned'
//        ]);
//
//        $appointment4 = Appointment::firstOrCreate([
//            'title' => 'Operatie',
//            'start' => '2017-06-22 14:20',
//            'end' => '2017-06-22 15:30',
//            'therapy_id' => $therapy1->id,
//            'patient_id' => $patient->id,
//            'doctor_id' => $doctor->id,
//            'status' => 'planned'
//        ]);

    }
}
