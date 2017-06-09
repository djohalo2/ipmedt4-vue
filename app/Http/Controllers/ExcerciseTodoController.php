<?php

namespace App\Http\Controllers;

use App\Excercise_todo;
use Carbon\Carbon;
use Illuminate\Http\Request;

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
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
     * @param  \App\Excercise_todo  $excercise_todo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Excercise_todo $excercise_todo)
    {
        //
    }
}
