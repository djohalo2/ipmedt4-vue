<?php

namespace App\Http\Controllers;

use App\Medicine_todo;
use Carbon\Carbon;
use Illuminate\Http\Request;

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
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Medicine_todo  $medicine_todo
     * @return array
     */
    public function update(Request $request, $id)
    {
        $medicine_todo = Medicine_todo::where('id', '=', $id)->first();

        $done = $request->input('done');

        $medicine_todo->done = $done;
        $medicine_todo->complete_date = Carbon::now()->addHours(2);

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
     * @param  \App\Medicine_todo  $medicine_todo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Medicine_todo $medicine_todo)
    {
        //
    }
}
