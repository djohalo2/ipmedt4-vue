<?php

namespace App\Http\Controllers;

use App\Bodypart;
use App\Therapy;
use App\Type;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TherapyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function index()
    {
        return Therapy::all();
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

        $patient_id = $request->patient_id;
        $name = $request->name;
        $start_date = Carbon::today()->toDateString();
        $department_id = $request->department_id;
        $created_by = $request->created_by;

        $bodyparts_string = $request->bodyparts;
        $bodyparts = explode(',', $bodyparts_string);

        if($start_date) {

            $therapy = Therapy::firstOrCreate([
                'name' => $name,
                'patient_id' => $patient_id,
                'start_date' => $start_date,
                'department_id' => $department_id,
                'created_by' => $created_by,
                'last_update_by' => $created_by
            ]);

            foreach($bodyparts as $bodypart) {
                $bodypart = Bodypart::firstOrCreate([
                    'name' => $bodypart
                ]);

                DB::table('therapy_bodypart')->insert([
                    [
                        'therapy_id' => $therapy->id,
                        'bodypart_id' => $bodypart->id
                    ]
                ]);
            }

            if ($therapy) {
                return ['success' => 1];
            }

            return ['success' => 0];
        }

        return ['success' => 0];

    }

    /**
     * Display the specified resource.
     *
     * @param $patient_id
     * @return Therapy
     * @internal param Therapy $therapy
     * @internal param $id
     * @internal param Therapy $therapy
     * @internal param $id
     * @internal param Therapy $therapy
     */
    public function show($patient_id)
    {
        return Therapy::where('patient_id', '=', $patient_id)->with('doctor_notes', 'excercises', 'medicines', 'bodyparts')->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Therapy  $therapy
     * @return \Illuminate\Http\Response
     */
    public function edit(Therapy $therapy)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Therapy  $therapy
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Therapy $therapy)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Therapy  $therapy
     * @return \Illuminate\Http\Response
     */
    public function destroy(Therapy $therapy)
    {
        //
    }


    public function finish($id) {
        $therapy = Therapy::where('id', '=', $id)->first();

        if ($therapy) {

            $therapy->end_date = Carbon::now()->toDateString();

            $save = $therapy->save();

            if ($save) {
                return ['success' => 1];
            }

            return ['success' => 0];

        }


        return ['success' => 0];

    }
}
