<template>
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
              <q-drawer-link icon="person" :to="'/arts/patienten'">
                Patienten
              </q-drawer-link>
              <q-drawer-link icon="event" :to="'/arts/afspraken'">
                Afspraken
              </q-drawer-link>
              <q-drawer-link icon="assignment" :to="'/arts/medicatie'">
                Medicatie
              </q-drawer-link>
              <q-drawer-link icon="info" :to="'/arts/informatie'">
                Informatie
              </q-drawer-link>
              <div class="item item-link drawer-closer" @click="logOut()">
                <i class="item-primary">exit_to_app</i>
                <div class="item-content">
                  Uitloggen
                </div>
              </div>

            </div>
        </q-drawer>
</template>

<script>
export default {
    name: 'arts-drawer',
    computed: {
      doctorData() {
        return this.$store.getters.getDoctorInfo;
      }
    },
    methods: {
      logOut(){
        console.log('CLICKED')
        this.$store.commit('LOG_DOCTOR_OUT');
        this.$router.push({path: '/login'});
      }
    }
}
</script>

<style lang="styl">

  #drawer {
    color: #333;
  }

</style>
