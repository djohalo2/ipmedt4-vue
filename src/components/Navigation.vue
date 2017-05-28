<template>
    <q-tabs slot="navigation" :refs="$refs" default-tab="tab-1" >
        <q-tab name="tab-1" route="/">
            Overzicht
        </q-tab>
        <q-tab name="tab-2" route="/patientinformatie">
            Informatie
        </q-tab>
    </q-tabs>
</template>

<script>
export default {
    name: 'navigation',
    methods: {
        setActiveTab(name){

        }
    }
}
</script>

<style lang="styl">
    .q-tabs {
        border-radius: 0;
    }
</style>
