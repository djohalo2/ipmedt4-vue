<template>
    <div>
        <q-drawer id="drawer" ref="drawer">
            <div class="toolbar light">
              <q-toolbar-title :padding="1">
                  IPMEDT4
              </q-toolbar-title>
            </div>

            <div class="list no-border platform-delimiter">
              <q-drawer-link icon="home" to="/behandeling" exact>
                Behandelingen
              </q-drawer-link>
              <hr>
              <div class="list-label">Behandeling</div>
              <q-drawer-link icon="view_list" :to="'/behandeling/' + behandelingType">
                Overzicht
              </q-drawer-link>
              <q-drawer-link icon="assignment" :to="'/behandeling/' + behandelingType + '/medicatie'">
                Medicatie
              </q-drawer-link>
              <q-drawer-link icon="accessibility" to="/showcase/layout/tabs">
                Oefeningen
              </q-drawer-link>
              <q-drawer-link icon="info" to="/showcase/layout/drawer">
                Informatie
              </q-drawer-link>
            </div>
        </q-drawer>
        <button class="hide-on-drawer-visible" @click="$refs.drawer.open()">
            <i>menu</i>
        </button>
    </div>
</template>

<script>
export default {
    name: 'drawer',
    computed: {
        behandelingType(){
            return this.$store.getters.getCurrentBehandelingType
        }
    }
}
</script>

<style lang="styl">

  #drawer {
    color: #333;
  }

</style>
