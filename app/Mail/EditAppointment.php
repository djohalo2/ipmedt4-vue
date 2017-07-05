<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class EditAppointment extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $ical = '';

        $ical .= 'BEGIN:VCALENDAR' . "\xA";
        $ical .= 'VERSION:2.0' . "\xA";
        $ical .= 'PRODID:-//Mijn nazorg//EN"' . "\xA";
        $ical .= 'CALSCALE:GREGORIAN' . "\xA";
        $ical .= 'METHOD:PUBLISH' . "\xA";
        $ical .= 'BEGIN:VTIMEZONE' . "\xA";
        $ical .= 'TZID:Europe/Amsterdam' . "\xA";
        $ical .= 'BEGIN:STANDARD' . "\xA";
        $ical .= 'DTSTART:20151025T020000' . "\xA";
        $ical .= 'RDATE:20160327T030000' . "\xA";
        $ical .= 'TZOFFSETFROM:+0200' . "\xA";
        $ical .= 'TZOFFSETTO:+0100' . "\xA";
        $ical .= 'TZNAME:Europe/Amsterdam CET' . "\xA";
        $ical .= 'END:STANDARD' . "\xA";
        $ical .= 'BEGIN:STANDARD' . "\xA";
        $ical .= 'DTSTART:20161030T020000' . "\xA";
        $ical .= 'RDATE:20170326T030000' . "\xA";
        $ical .= 'TZOFFSETFROM:+0200' . "\xA";
        $ical .= 'TZOFFSETTO:+0100' . "\xA";
        $ical .= 'TZNAME:Europe/Amsterdam CET' . "\xA";
        $ical .= 'END:STANDARD' . "\xA";
        $ical .= 'BEGIN:DAYLIGHT' . "\xA";
        $ical .= 'DTSTART:20150601T073000' . "\xA";
        $ical .= 'RDATE:20151025T020000' . "\xA";
        $ical .= 'TZOFFSETFROM:+0100' . "\xA";
        $ical .= 'TZOFFSETTO:+0200' . "\xA";
        $ical .= 'TZNAME:Europe/Amsterdam CEST' . "\xA";
        $ical .= 'END:DAYLIGHT' . "\xA";
        $ical .= 'BEGIN:DAYLIGHT' . "\xA";
        $ical .= 'DTSTART:20160327T030000' . "\xA";
        $ical .= 'RDATE:20161030T020000' . "\xA";
        $ical .= 'TZOFFSETFROM:+0100' . "\xA";
        $ical .= 'TZOFFSETTO:+0200' . "\xA";
        $ical .= 'TZNAME:Europe/Amsterdam CEST' . "\xA";
        $ical .= 'END:DAYLIGHT' . "\xA";
        $ical .= 'END:VTIMEZONE' . "\xA";
        $ical .= 'BEGIN:VEVENT' . "\xA";
        $ical .= 'TZID:Europe/Paris' . "\xA";

        $ical .= 'UID:' . 'MIJNNAZORG' . $this->data['id'] . "\xA";
        $ical .= 'DTSTAMP;TZID=Europe/Amsterdam:' . $this->data['start_date_time'] . "\xA";
        $ical .= 'ORGANIZER;CN=Mijn nazorg:MAILTO:no-reply@mijnnazorg.nl' . "\xA";
        $ical .= 'LOCATION:LUMC Albinusdreef 2, 2333 ZA Leiden' . "\xA";
        $ical .= 'DTSTART;TZID=Europe/Amsterdam:' . $this->data['start_date_time'] . "\xA";
        $ical .= 'DTEND;TZID=Europe/Amsterdam:' . $this->data['end_date_time'] . "\xA";
        $ical .= 'SUMMARY:Afspraak mijn nazorg' . "\xA";
        $ical .= 'END:VEVENT' . "\xA";
        $ical .= 'END:VCALENDAR' . "\xA";


        return $this->view('edit_appointment')
            ->from('no-reply@mijnnazorg.nl')
            ->subject('Gewijzigde afspraak | mijn nazorg')
            ->attachData($ical, 'afspraak.ics', [
                'mime' => 'text/calendar',
            ])
            ->with([
                'data' => $this->data
            ]);
    }
}
