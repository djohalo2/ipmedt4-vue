<template>
  <div class="width-1of5">
    <div class="box-event" @click="openAppointmentCreator()" v-bind:class="{'box-creating': isCreating}">
      <q-popover class="popover" @close="closeAppointmentCreator()" :ref="'appointmentPopover' + xPos + yPos">
        <div class="create-appointment">
          <p>Afspraak maken</p>
          <span class="afspraak-date"></span>
          <input v-model="appointment.title" placeholder="Afspraak omschrijving">
          <div class="stacked-label">
            <q-autocomplete v-model="patientTerms" @selected="selected" @close="openPopover()" @search="searchPatient"></q-autocomplete>
            <label>Patient</label>
          </div>
          <div class="stacked-label">
            <q-autocomplete v-model="therapyTerms" @selected="selected" @close="openPopover()" @search="searchTherapy"></q-autocomplete>
            <label>Behandeling</label>
          </div>
          <button class="primary small outline float-right" @click="addAppointment()">Toevoegen</button>
        </div>
      </q-popover>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

import AfspraakCard from './AfspraakCard'

export default {
  name: 'afspraken-kolom',
  props: ['xPos', 'yPos', 'week'],
  components: {
    AfspraakCard
  },
  data() {
    return {
      isCreating: false,
      appointment: {
        title: '',
        start: this.startDate,
        end: this.endDate,
        therapy_id: 1,
        patient_id: 1,
        doctor_id: this.doctorId,
        patientName: '',
        therapyName: ''
      },
      patientTerms: '',
      therapyTerms: ''
    }
  },
  methods: {
    openAppointmentCreator() {
      this.isCreating = true
    },
    closeAppointmentCreator() {
      this.isCreating = false
    },
    openPopover() {
      this.$refs['appointmentPopover' + this.xPos + this.yPos].open()
    },
    addAppointment() {
      this.$store.dispatch('ADD_APPOINTMENT', this.appointment)
    },
    searchPatient (patientTerms, done) {
      let results = [];
      this.patients.map((patient) => {
        if(_.includes(patient.firstname.toLowerCase(), patientTerms.toLowerCase()) || _.includes(patient.lastname.toLowerCase(), patientTerms.toLowerCase())) {
          results.push({
            label: patient.firstname + ' ' + patient.lastname,
            id: patient.id,
            value: patient.firstname + ' ' + patient.lastname,
            type: 'patient'
          });
        }
      })
      done(results);
    },
    searchTherapy (therapyTerms, done) {
      let results = [];
      this.therapies.map((therapy) => {
        if(_.includes(therapy.name.toLowerCase(), therapyTerms.toLowerCase())) {
          results.push({
            label: therapy.name,
            id: therapy.id,
            value: therapy.name,
            type: 'therapy'
          });
        }
      })
      done(results);
    },
    selected (item) {
      if(item.type == 'patient') {
        this.$store.dispatch('FETCH_PATIENT_DATA', item.id)
        this.appointment.patient_id = item.id
        this.appointment.patientName = item.label
      } else {
        this.appointment.therapy_id = item.id
        this.appointment.therapyName = item.label
        console.log(this.appointment)
      }
    }
  },
  computed: {
    doctorId () {
      return this.$store.getters.getDoctorInfo.id
    },
    startDate () {
      return moment('2017').locale('nl').add(this.week, 'weeks').startOf('week').add(this.xPos - 1, 'day').add(9, 'hours').add((this.yPos - 1) * 30, 'minutes').format('YYYY-MM-DD H:mm:ss')
    },
    endDate () {
      return moment('2017').locale('nl').add(this.week, 'weeks').startOf('week').add(this.xPos - 1, 'day').add(9, 'hours').add(this.yPos * 30, 'minutes').format('YYYY-MM-DD H:mm:ss')
    },
    patients () {
      return this.$store.getters.getPatients
    },
    therapies() {
      return this.$store.getters.getPatientBehandelingen
    }
  },
  created() {
    this.appointment.start = this.startDate
    this.appointment.end = this.endDate
    this.appointment.doctor_id = this.doctorId
  }
}

</script>

<style lang="scss" scoped>
  .box-event {
    min-height: 40px;
  }

  .box-day {
    min-height: 100px;
  }

  .box-event{
    padding: 0.7rem;
    background-color: #fff;
    width: 100%;
    border-right: 1px solid #e4e4e4;

    &:hover {
      background-color: #fafafa;
    }
  }

  .popover {
    width: 20%;

    button {
      margin-bottom: 1rem;
    }
  }

  .create-appointment {
    padding: 1rem;
  }

  .box-creating {
    background-color: #e74c3c;
    color: #fff;

    &:hover {
      background-color: #e74c3c;
    }
  }
</style>
