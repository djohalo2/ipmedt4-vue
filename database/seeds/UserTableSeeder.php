<?php

use App\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::insert([
            [
                'username'      => 'bas',
                'name'          => 'Bas van Bovene',
                'email'         => 's1096181@student.hsleiden.nl',
                'password'      => Hash::make(env('USER_PASSWORD', 'secret')),
                'created_at'    => Carbon::now(),
                'updated_at'    => Carbon::now()
            ]
        ]);
    }
}
