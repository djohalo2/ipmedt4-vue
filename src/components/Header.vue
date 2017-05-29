<template>
    <div slot="header" class="toolbar">
        <q-drawer id="drawer" ref="drawer">
          <div class="list platform-delimiter">
            <div class="list-header">
              Djo&amp;Co.
            </div>
            <q-drawer-link icon="mail" to="/medicatie">Account</q-drawer-link>
            <q-drawer-link icon="alarm" to="/patientinformatie">Alarms</q-drawer-link>
          </div>
        </q-drawer>

        <button class="hide-on-drawer-visible" @click="$refs.drawer.open()">
            <i>menu</i>
        </button>

        <q-toolbar-title>
            IPMEDT4
        </q-toolbar-title>

        <button class="hide-on-drawer-visible">
            <i>search</i>
        </button>

        <button class="hide-on-drawer-visible">
            <i>more_vert</i>
        </button>
    </div>
</template>

<script>
export default {
    name: 'top-header'
}
</script>

<style lang="styl">

  #drawer {
    color: #333;
  }

</style>
