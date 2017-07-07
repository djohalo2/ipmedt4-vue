<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">Dashboard</p>

            <div class="row medium-gutter sm-column">
                <div class="gt-sm-width-1of2">
                    <count-card title="Patienten" :number="patientCount" description="Actuele patienten" icon="people"></count-card>
                </div>
                <div class="gt-sm-width-1of2">
                    <count-card title="Afspraken" :number="appointmentCount" description="Afspraken vandaag" icon="date_range"></count-card>
                </div>
            </div>

            <div class="row medium-gutter sm-column">
                <div class="width-1of2">
                    <dashboard-patienten></dashboard-patienten>
                </div>

                <div class="width-1of2">
                    <dashboard-afspraken></dashboard-afspraken>
                </div>
            </div>

            <!-- <div class="row medium-gutter sm-column">
                <div class="width-1of2">
                    <dashboard-notificaties></dashboard-notificaties>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import CountCard from './CountCard.vue';
import DashboardPatienten from './DashboardPatienten.vue';
import DashboardNotificaties from './DashboardNotificaties.vue';
import DashboardAfspraken from './DashboardAfspraken.vue';

export default {
    name: 'dashboard',
    components: {
        CountCard,
        DashboardPatienten,
        DashboardNotificaties,
        DashboardAfspraken
    },
    computed: {
        patientCount(){
          return this.$store.getters.getTotalPatientCount
        },
        appointmentCount() {
          return this.$store.getters.getTotalAppointmentCount
        }
    }
}
</script>

<style lang="scss" scoped>
  .gt-sm-width-1of3 {
    flex: 33.33333%;
  }
</style>
