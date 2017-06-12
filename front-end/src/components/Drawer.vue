<template>
    <div>
        <q-drawer id="drawer" ref="drawer">
            <div class="toolbar bg-primary">
              <q-toolbar-title :padding="1">
                  IPMEDT4
              </q-toolbar-title>
            </div>

            <div class="list no-border platform-delimiter">
                <div class="patient-info bg-light" v-on:click="openPatientInfo">
                    <img class="patient-avatar" :src="patientInfo.avatar" alt="">
                    <p class="text-center">{{patientInfo.name}}</p>
                </div>
              <q-drawer-link icon="home" to="/" exact>
                Overzicht
              </q-drawer-link>
              <!-- <div class="list-label">Behandelingen</div> -->
              <q-drawer-link icon="assignment" :to="'/medicatie'">
                Medicatie
              </q-drawer-link>
              <q-drawer-link icon="insert_drive_file" :to="'/notities'">
                Notities
              </q-drawer-link>
              <q-drawer-link icon="accessibility" :to="'/oefeningen'">
                Oefeningen
              </q-drawer-link>
              <q-drawer-link icon="date_range" :to="'/afspraken'">
                Afspraken
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
        },
        patientInfo() {
            return this.$store.getters.getPatientInfo
        }
    },
    methods: {
        openPatientInfo() {
            this.$router.push({path: '/patientinformatie'});
            this.$refs.drawer.close();
        }
    }
}
</script>

<style lang="scss">

  #drawer {
    color: #333;
  }

  .patient-avatar {
      border-radius: 100%;
      width:70px;
      height:70px;
      display: block;
      margin: auto;
  }

  .patient-info {
      padding: 1rem 0;
  }

</style>
