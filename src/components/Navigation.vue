<template>
    <q-tabs :refs="$refs" default-tab="tab-1" >
        <q-tab name="tab-1" route="/behandeling">
            Overzicht
        </q-tab>
        <q-tab name="tab-2" route="/patientinformatie">
            Gegevens
        </q-tab>
    </q-tabs>
</template>

<script>
export default {
    name: 'navigation'
}
</script>

<style lang="styl">
    .q-tabs {
        border-radius: 0;
    }
</style>
