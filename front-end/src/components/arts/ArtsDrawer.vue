<template>
    <!-- <div> -->
        <q-drawer id="drawer">
            <div class="toolbar light">
              <q-toolbar-title :padding="1">
                  Hallo {{doctorData.firstname}}
              </q-toolbar-title>
            </div>

            <div class="list no-border platform-delimiter">
              <q-drawer-link icon="home" to="/arts" exact>
                Dashboard
              </q-drawer-link>
              <hr>
              <div class="list-label">Opties</div>
              <!-- <q-drawer-link icon="view_list" :to="'/behandeling/' + behandelingType">
                Overzicht
              </q-drawer-link> -->
              <q-drawer-link icon="person" :to="'/arts/Patienten'">
                Patienten
              </q-drawer-link>
              <q-drawer-link icon="event" :to="'/arts/Afspraken'">
                Afspraken
              </q-drawer-link>
              <q-drawer-link icon="assignment" :to="'/arts/medicatie'">
                Medicatie
              </q-drawer-link>
              <q-drawer-link icon="info" :to="'/arts/Informatie'">
                Informatie
              </q-drawer-link>
            </div>
        </q-drawer>
    <!-- </div> -->
</template>

<script>
export default {
    name: 'arts-drawer',
    computed: {
      doctorData() {
        return this.$store.getters.getDoctorInfo;
      }
    }
}
</script>

<style lang="styl">

  #drawer {
    color: #333;
  }

</style>
