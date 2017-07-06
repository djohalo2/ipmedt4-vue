<?php

namespace App\Http\Controllers;

use App\Medicine;
use App\Medicine_todo;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MedicineTodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function index()
    {
        return Medicine_todo::all();
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

        $start_date = Carbon::createFromFormat('Y-m-d', $request->start_date);
        $end_date = Carbon::createFromFormat('Y-m-d', $request->end_date);

        $medicine_id = $request->medicine_id;
        $therapy_id = $request->therapy_id;

        DB::table('therapy_medicine')->insert([
            'therapy_id' => $therapy_id,
            'medicine_id' => $medicine_id
        ]);

        $amount = $request->amount;

        $per_day = $request->amount_per_day;
        $hours_between = 12/$per_day;

        for ($i = $start_date; $i <= $end_date; $i->addDay()) {
            $date = $i;
            $date->setTime(8,0,0);
            for ($x = 0; $x < $per_day; $x = $x + 1) {
                Medicine_todo::create([
                    'therapy_id' => $therapy_id,
                    'medicine_id' => $medicine_id,
                    'amount' => $amount,
                    'time_date' => $date,
                    'amount_per_day' => $per_day,
                ]);

                $date->addHours($hours_between);
            }
        }

        $medicine = Medicine::where('id', '=', $medicine_id)->first();

        return [
            'id' => $medicine_id,
            'important' => $medicine->important,
            'name' => $medicine->name,
            'side_effects' => $medicine->side_effects,
            'usage' => $medicine->usage,
            'pivot' => [
                'medicine_id' => $medicine_id,
                'therapy_id' => $therapy_id
            ]
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Medicine_todo  $medicine_todo
     * @return Medicine_todo
     */
    public function show(Medicine_todo $medicine_todo)
    {
        return $medicine_todo;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Medicine_todo  $medicine_todo
     * @return \Illuminate\Http\Response
     */
    public function edit(Medicine_todo $medicine_todo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param $id
     * @return array
     * @internal param Medicine_todo $medicine_todo
     */
    public function update(Request $request, $id)
    {
        $medicine_todo = Medicine_todo::where('id', '=', $id)->first();

        $done = $request->input('done');

        $medicine_todo->done = $done;

        if ($done == 1) {
            $medicine_todo->complete_date = Carbon::now()->addHours(2);
        } else {
            $medicine_todo->complete_date = null;
        }

        $save = $medicine_todo->save();

        if ($save) {
            return ['success' => 1];
        } else {
            return ['success' => 0];
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @return array
     * @internal param Medicine_todo $medicine_todo
     */
    public function destroy(Request $request)
    {
        $therapy_id = $request->therapy_id;
        $medicine_id = $request->medicine_id;
        $now = Carbon::now();

        Medicine_todo::where('therapy_id', '=', $therapy_id)
            ->where('medicine_id', '=', $medicine_id)
            ->where('time_date', '>=', $now)
            ->delete();

        DB::table('therapy_medicine')
            ->where('therapy_id', '=', $therapy_id)
            ->where('medicine_id', '=', $medicine_id)
            ->delete();

        return ['success' => 1];
    }
}
