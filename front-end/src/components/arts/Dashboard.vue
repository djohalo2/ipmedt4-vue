<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">Dashboard</p>

            <div class="row small-gutter sm-column">
                <div class="gt-sm-width-1of3">
                    <count-card title="Patienten" number="130" description="Actuele patienten" icon="people"></count-card>
                </div>
                <div class="gt-sm-width-1of3">
                    <count-card title="Afspraken" number="7" description="Afspraken vandaag" icon="date_range"></count-card>
                </div>
                <div class="gt-sm-width-1of3">
                    <count-card title="Behandelingen" number="75" description="Actuele behandelingen" icon="loyalty"></count-card>
                </div>
            </div>

            <div class="row small-gutter sm-column">
                <div class="width-1of2">
                    <dashboard-patienten></dashboard-patienten>
                </div>

                <div class="width-1of2">
                    <dashboard-afspraken></dashboard-afspraken>
                </div>
            </div>
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
    }
}
</script>

<style lang="scss">

</style>
