<?php

namespace App\Http\Controllers;

use App\Therapy;
use Illuminate\Http\Request;

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
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return Therapy
     * @internal param Therapy $therapy
     * @internal param $id
     * @internal param Therapy $therapy
     */
    public function show($id)
    {
        return Therapy::find($id)->with('medications', 'patient', 'notes')->get();
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
}
