<template>
    <div class="card bg-white">
        <div class="card-title">
            Afspraken
        </div>
        <div class="card-content">
            <div class="filters">
                <button class="button" v-bind:class="todayButton" @click="appointmentFilter = 'today'">Vandaag</button
                ><button class="button" v-bind:class="tomorrowButton" @click="appointmentFilter = 'tomorrow'">Morgen</button>
            </div>
            <div class="list">
                <dashboard-afspraak-card v-for="(appointment, index) in appointments"
                  :key="index"
                  :patientId="appointment.patient_id"
                  :patient="appointment.patient.firstname + ' ' + appointment.patient.lastname"
                  :date="appointment.start"
                  :therapy="appointment.title">
                </dashboard-afspraak-card>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardAfspraakCard from './DashboardAfspraakCard.vue';

export default {
    name: 'dashboard-afspraken',
    components: {
        DashboardAfspraakCard
    },
    data() {
      return {
        appointmentFilter: 'today'
      }
    },
    computed: {
      appointments() {
        if (this.appointmentFilter == 'today') {
          return this.$store.getters.getAppointmentsToday.today_appointments
        } else {
          return this.$store.getters.getAppointmentsToday.tomorrow_appointments
        }
      },
      todayButton() {
        return this.appointmentFilter == 'today' ? {primary: true} : {primary: true, outline: true}
      },
      tomorrowButton() {
        return this.appointmentFilter == 'tomorrow' ? {primary: true} : {primary: true, outline: true}
      }
    },
    created() {
      this.$store.dispatch('FETCH_APPOINTMENTS_TODAY')
    }
}
</script>

<style lang="scss">

    .list {
        border-bottom: none;
    }

    .filters {
        margin-bottom: 0.5rem;

        button {
            border-radius: 0;
        }

        button:first-child {
            border-radius: 30px 0 0 30px;
            border-right: 0;
        }

        button:last-child {
            border-radius: 0 30px 30px 0;
            border-left: 0;
        }
    }

</style>
