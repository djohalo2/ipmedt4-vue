<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">Dashboard</p>
            <p>Hier komt straks allemaal mooie ding</p>

            <div class="row small-gutter">
                <div class="width-1of3">
                    <count-card title="Patienten" number="130" description="Actuele patienten" icon="people"></count-card>
                </div>
                <div class="width-1of3">
                    <count-card title="Afspraken" number="7" description="Afspraken vandaag" icon="date_range"></count-card>
                </div>
                <div class="width-1of3">
                    <count-card title="Behandelingen" number="75" description="Actuele behandelingen" icon="loyalty"></count-card>
                </div>
            </div>

            <div class="row small-gutter">
                <div class="width-1of3"></div>
            </div>
        </div>
    </div>
</template>

<script>
import CountCard from './CountCard.vue';

export default {
    name: 'dashboard',
    components: {
        CountCard
    }
}
</script>

<style lang="scss">

</style>
