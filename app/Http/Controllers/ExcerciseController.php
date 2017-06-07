<?php

namespace App\Http\Controllers;

use App\Excercise;
use Illuminate\Http\Request;

class ExcerciseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function index()
    {
        return Excercise::all();
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
     * @param  \App\Excercise  $excercise
     * @return Excercise
     */
    public function show(Excercise $excercise)
    {
        return $excercise;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Excercise  $excercise
     * @return \Illuminate\Http\Response
     */
    public function edit(Excercise $excercise)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Excercise  $excercise
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Excercise $excercise)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Excercise  $excercise
     * @return \Illuminate\Http\Response
     */
    public function destroy(Excercise $excercise)
    {
        //
    }
}
