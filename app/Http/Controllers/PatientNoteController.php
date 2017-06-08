<?php

namespace App\Http\Controllers;

use App\Patient_note;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PatientNoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function index()
    {
        return Patient_note::all();
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
        $title = $request->title;
        $patient_id = $request->patient_id;
        $note = $request->note;

        Patient_note::insert([
            'title' => $title,
            'patient_id' => $patient_id,
            'note' => $note,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        return ['success' => 1];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Patient_note  $patient_note
     * @return Patient_note
     */
    public function show(Patient_note $patient_note)
    {
        return $patient_note;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Patient_note  $patient_note
     * @return \Illuminate\Http\Response
     */
    public function edit(Patient_note $patient_note)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Patient_note  $patient_note
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Patient_note $patient_note)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Patient_note  $patient_note
     * @return \Illuminate\Http\Response
     */
    public function destroy(Patient_note $patient_note)
    {
        //
    }
}
