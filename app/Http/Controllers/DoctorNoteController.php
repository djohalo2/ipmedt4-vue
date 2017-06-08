<?php

namespace App\Http\Controllers;

use App\Doctor_note;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DoctorNoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function index()
    {
        return Doctor_note::all();
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
        $added_by = $request->added_by;
        $therapy_id = $request->therapy_id;
        $note = $request->note;

        Doctor_note::insert([
            'title' => $title,
            'added_by' => $added_by,
            'therapy_id' => $therapy_id,
            'note' => $note,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        return ['success' => 1];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Doctor_note  $doctor_note
     * @return Doctor_note
     */
    public function show(Doctor_note $doctor_note)
    {
        return $doctor_note;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Doctor_note  $doctor_note
     * @return \Illuminate\Http\Response
     */
    public function edit(Doctor_note $doctor_note)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param $id
     * @return array
     * @internal param Doctor_note $doctor_note
     */
    public function update(Request $request, $id)
    {
        $doctor_note = Doctor_note::where('id', '=', $id)->first();

        $title = $request->input('title');
        $note = $request->input('note');

        $doctor_note->title = $title;
        $doctor_note->note = $note;

        $save = $doctor_note->save();

        if ($save) {
            return ['success' => 1];
        } else {
            return ['success' => 0];
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $id
     * @return array
     * @internal param Doctor_note $doctor_note
     */
    public function destroy($id)
    {
        $delete = Doctor_note::where('id', '=', $id)->delete();

        if ($delete == 1) {
            return ['success' => 1];
        } else {
            return ['success' => 0];
        }
    }
}
