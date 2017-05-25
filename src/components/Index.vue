<template>
    <q-layout>
        <div slot="header" class="toolbar">
            <q-toolbar-title>
                IPMEDT4
            </q-toolbar-title>
        </div>

        <q-tabs slot="navigation" :refs="$refs" default-tab="tab-4">
          <q-tab name="tab-1" icon="message">
            Overzicht
          </q-tab>
          <q-tab name="tab-2" icon="fingerprint">
            Informatie
          </q-tab>
          <q-tab name="tab-3" icon="alarm">
            Tab 3
          </q-tab>
        </q-tabs>
    </q-layout>
</template>

<script>
export default {

}
</script>

<style lang="styl">

</style>
