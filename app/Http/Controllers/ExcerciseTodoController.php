<?php

namespace App\Http\Controllers;

use App\Excercise;
use App\Excercise_todo;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ExcerciseTodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function index()
    {
        return Excercise_todo::all();
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

        $excercise_id = $request->excercise_id;
        $therapy_id = $request->therapy_id;

        DB::table('therapy_excercise')->insert([
            'therapy_id' => $therapy_id,
            'excercise_id' => $excercise_id
        ]);

        $sets = $request->sets;
        $sets_amount = $request->sets_amount;

        $per_day = $request->per_day;
        $hours_between = 12/$per_day;

        for ($i = $start_date; $i <= $end_date; $i->addDay()) {
            $date = $i;
            $date->setTime(8,0,0);
            for ($x = 0; $x < $per_day; $x = $x + 1) {
                Excercise_todo::create([
                    'therapy_id' => $therapy_id,
                    'excercise_id' => $excercise_id,
                    'sets' => $sets,
                    'sets_amount' => $sets_amount,
                    'time_date' => $date,
                ]);

                $date->addHours($hours_between);
            }
        }

        $excercise = Excercise::where('id', '=', $excercise_id)->first();

        return [
            'id' => $excercise_id,
            'title' => $excercise->title,
            'description' => $excercise->description,
            'video_id' => $excercise->video_id,
            'pivot' => [
                'excercise_id' => $excercise_id,
                'therapy_id' => $therapy_id
            ]
        ];

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Excercise_todo  $excercise_todo
     * @return Excercise_todo
     */
    public function show(Excercise_todo $excercise_todo)
    {
        return $excercise_todo;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Excercise_todo  $excercise_todo
     * @return \Illuminate\Http\Response
     */
    public function edit(Excercise_todo $excercise_todo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param $id
     * @return array
     * @internal param Excercise_todo $excercise_todo
     */
    public function update(Request $request, $id)
    {
        $excercise_todo = Excercise_todo::where('id', '=', $id)->first();

        $done = $request->input('done');

        $excercise_todo->done = $done;

        if ($done == 1) {
            $excercise_todo->complete_date = Carbon::now()->addHours(2);
        } else {
            $excercise_todo->complete_date = null;
        }

        $save = $excercise_todo->save();

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
     * @internal param Excercise_todo $excercise_todo
     */
    public function destroy(Request $request)
    {
        $therapy_id = $request->therapy_id;
        $excercise_id = $request->excercise_id;
        $now = Carbon::now();

        Excercise_todo::where('therapy_id', '=', $therapy_id)
            ->where('excercise_id', '=', $excercise_id)
            ->where('time_date', '>=', $now)
            ->delete();

        DB::table('therapy_excercise')
            ->where('therapy_id', '=', $therapy_id)
            ->where('excercise_id', '=', $excercise_id)
            ->delete();

        return ['success' => 1];
    }
}
