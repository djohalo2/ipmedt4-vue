<template>
    <q-tabs slot="navigation" :refs="$refs" default-tab="tab-1">
        <q-tab name="tab-1">
            Overzicht
        </q-tab>
        <q-tab name="tab-2">
            Informatie
        </q-tab>
        <q-tab name="tab-3">
            Tab 3
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
