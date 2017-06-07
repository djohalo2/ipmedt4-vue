<?php

namespace App\Http\Controllers;

use App\Bodypart;
use Illuminate\Http\Request;

class BodypartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function index()
    {
        return Bodypart::all();
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
     * @param  \App\Bodypart  $bodypart
     * @return Bodypart
     */
    public function show(Bodypart $bodypart)
    {
        return $bodypart;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Bodypart  $bodypart
     * @return \Illuminate\Http\Response
     */
    public function edit(Bodypart $bodypart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bodypart  $bodypart
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bodypart $bodypart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bodypart  $bodypart
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bodypart $bodypart)
    {
        //
    }
}
