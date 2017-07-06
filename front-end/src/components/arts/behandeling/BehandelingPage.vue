<template>
  <div class="layout-view">
    <div class="layout-padding">
      <div class="page-title">
        {{behandeling.name}}
      </div>
      <div class="row medium-gutter sm-column">
        <div class="width-1of2">
          <behandeling-informatie :name="behandeling.name" :start="behandeling.start_date" :end="behandeling.end_date" :bodyparts="behandeling.bodyparts"></behandeling-informatie>
        </div>

        <div class="width-1of2">
          <behandeling-notities :notes="behandeling.doctor_notes" :state="behandeling.end_date == null"></behandeling-notities>
        </div>
      </div>

      <div class="row medium-gutter sm-column">
        <div class="width-1of2">
          <behandeling-medicatie :medicatie="behandeling.medicines" :state="behandeling.end_date == null"></behandeling-medicatie>
        </div>

        <div class="width-1of2">
          <behandeling-oefeningen :oefeningen="behandeling.excercises" :state="behandeling.end_date == null"></behandeling-oefeningen>
        </div>
      </div>

      <div class="row medium-gutter sm-column">
        <div class="width-2of2">
          <button class="button primary full-width" @click="finishTherapy()" v-if="behandeling.end_date == null">Behandeling afronden</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem';
import BehandelingMedicatie from './BehandelingMedicatie'
import BehandelingOefeningen from './BehandelingOefeningen'
import BehandelingInformatie from './BehandelingInformatie'
import BehandelingNotities from './BehandelingNotities'

import router from 'vue-router'

export default {
    name: 'behandeling-page',
    components: {
      ListItem,
      BehandelingMedicatie,
      BehandelingOefeningen,
      BehandelingInformatie,
      BehandelingNotities
    },
    computed: {
      behandelingen () {
        return this.$store.getters.getPatientBehandelingen
      },
      behandeling () {
        for(let behandeling in this.behandelingen) {
          if(this.behandelingen[behandeling].id == this.$route.params.behandelingId) {
            return this.behandelingen[behandeling]
          }
        }
      }
    },
    methods: {
      finishTherapy() {
        this.$store.dispatch('FINISH_THERAPY', this.behandeling.id).then(() => {
          window.history.back()
        })
      }
    }
}
</script>

<style lang="scss" scoped>
  .layout-padding {
    padding-top: 1rem;
  }
</style>
