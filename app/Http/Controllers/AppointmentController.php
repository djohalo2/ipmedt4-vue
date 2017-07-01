<?php

namespace App\Http\Controllers;

use App\Mail\AppointmentMail;
use App\Appointment;
use App\Doctor;
use App\Patient;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param Request|\Illuminate\Http\Request $request
     * @return array
     */
    public function store(Request $request)
    {
        $title = $request->title;
        $start = $request->start;
        $end = $request->end;
        $therapy_id = $request->therapy_id;
        $patient_id = $request->patient_id;
        $doctor_id = $request->doctor_id;

        $start_date_time = Carbon::createFromFormat('Y-m-d H:i:s', $start)->format('Ymd\THis');
        $end_date_time = Carbon::createFromFormat('Y-m-d H:i:s', $end)->format('Ymd\THis');

        $date = Carbon::createFromFormat('Y-m-d H:i:s', $start)->format('d/m/y');
        $start_time = Carbon::createFromFormat('Y-m-d H:i:s', $start)->format('H:i');
        $end_time = Carbon::createFromFormat('Y-m-d H:i:s', $end)->format('H:i');

        $appointment = Appointment::firstOrCreate([
            'title' => $title,
            'start' => $start,
            'end' => $end,
            'therapy_id' => $therapy_id,
            'patient_id' => $patient_id,
            'doctor_id' => $doctor_id
        ]);


        if ($appointment) {

            $doctor = Doctor::where('id', '=', $doctor_id)->first();

            $patient = Patient::where('id', '=', $patient_id)->first();

            if ($patient && $doctor) {

                $data = array(
                    'firstname' => $patient->firstname,
                    'lastname' => $patient->lastname,
                    'email' => $patient->email,
                    'id' => $appointment->id,
                    'start_date_time' => $start_date_time,
                    'end_date_time' => $end_date_time,
                    'date' => $date,
                    'start' => $start_time,
                    'end' => $end_time,
                    'doctor' => $doctor->firstname . ' ' .$doctor->lastname,
                    'department' => $doctor->department->naam

                );

                Mail::to($data['email'])
                    ->queue(new AppointmentMail($data));

                return ['success' => 1];

            }

            return ['success' => 2];
        }

        return ['success' => 0];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function show(Appointment $appointment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function edit(Appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Appointment $appointment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Appointment $appointment)
    {

    }


    public function doctor_appointments($doctor_id, $week_of_year) {

        $date_start = Carbon::now();
        $date_end = Carbon::now();
        $year = Carbon::now()->year;
        $date_start->setISODate($year,$week_of_year);
        $date_end->setISODate($year,$week_of_year);

        $start_of_week = $date_start->startOfWeek();
        $end_of_week = $date_end->endOfWeek();

        return Appointment::whereBetween('start', [$start_of_week, $end_of_week])
            ->where('doctor_id', '=', $doctor_id)
            ->get();
    }

    public function today_appointments($doctor_id) {
        $today = Carbon::today();
        $tomorrow = Carbon::tomorrow();

        $today_appointments = Appointment::where('start', 'like', $today->toDateString() . '%')
            ->where('end', '>=', Carbon::now()->addHours(2)->toDateTimeString())
            ->where('doctor_id', '=', $doctor_id)
            ->with('patient')
            ->orderBy('start', 'asc')
            ->get();

        $tomorrow_appointments = Appointment::where('start', 'like', $tomorrow->toDateString() . '%')
            ->where('doctor_id', '=', $doctor_id)
            ->with('patient')
            ->orderBy('start', 'asc')
            ->get();

        return ['today_appointments' => $today_appointments, 'tomorrow_appointments' => $tomorrow_appointments];
    }


}
