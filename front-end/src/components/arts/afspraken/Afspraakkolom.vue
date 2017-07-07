<template>
  <div class="width-1of5">
    <div class="box-event" @click="openAppointmentCreator()" v-bind:class="{'box-creating': isCreating}">
      <div class="appointment-popover card" v-if="isCreating" :ref="'appointmentPopover' + xPos + yPos">
        <p class="text-black">Afspraak maken</p>
        <span class="afspraak-date"></span>
        <input v-model="appointment.title" placeholder="Afspraak omschrijving">
        <div class="stacked-label">
          <q-autocomplete v-model="patientTerms" @selected="selected" @search="searchPatient"></q-autocomplete>
          <label>Patient</label>
        </div>
        <div class="stacked-label">
          <q-autocomplete v-model="therapyTerms" @selected="selected" @search="searchTherapy"></q-autocomplete>
          <label>Behandeling</label>
        </div>
        <button class="primary small outline float-right" @click="addAppointment()">Toevoegen</button>
      </div>
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
        start: '',
        end: '',
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
      //TODO: Fix deze code
      //This code is dangerous for humanities existance, please ignore this code for the sake of your own life.
      //I repeat this code is dangerous, run!
      let root = this.$root.$children[0].$children[0].$children[2].$children
      for(let child in root) {
        let rootChild = root[child].$children
        if(rootChild.length == 5) {
          for(let column in rootChild) {
            rootChild[column].isCreating = false
          }
        }
      }
      //After this point you will be save of ugly, inefficient code
      //Have a nice day.
      this.isCreating = false
      this.isCreating = true
    },
    closeAppointmentCreator() {
      if(this.isCreating) {
        this.isCreating = false
      }
    },
    addAppointment() {
      console.log(this.appointment)
      this.$store.dispatch('ADD_APPOINTMENT', this.appointment)
      this.closePopover()
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
  updated() {
    this.appointment.start = this.startDate
    this.appointment.end = this.endDate
    this.appointment.doctor_id = this.doctorId
  }
}

</script>

<style lang="scss" scoped>
  .appointment-popover {
    position: absolute;
    overflow: visible;
    width: 150%;
    padding: 1rem;
    top: 40px;
    left: 0;
    z-index: 1;
  }

  .box-event {
    min-height: 40px;
    position: relative;
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
