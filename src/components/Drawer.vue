<template>
    <div>
        <q-drawer id="drawer" ref="drawer">
            <div class="toolbar light">
              <q-toolbar-title :padding="1">
                  IPMEDT4
              </q-toolbar-title>
            </div>

            <div class="list no-border platform-delimiter">
              <q-drawer-link icon="home" to="/" exact>
                Home
              </q-drawer-link>
              <hr>
              <div class="list-label">Behandelingen</div>
              <!-- <q-drawer-link icon="view_list" :to="'/behandeling/' + behandelingType">
                Overzicht
              </q-drawer-link> -->
              <q-drawer-link icon="assignment" :to="'/medicatie'">
                Medicatie
              </q-drawer-link>
              <q-drawer-link icon="insert_drive_file" :to="'/notities'">
                Notities
              </q-drawer-link>
              <q-drawer-link icon="accessibility" :to="'/oefeningen'">
                Oefeningen
              </q-drawer-link>
              <q-drawer-link disabled icon="subdirectory_arrow_right" :to="'/verwijzingen'">
                Verwijzingen
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
