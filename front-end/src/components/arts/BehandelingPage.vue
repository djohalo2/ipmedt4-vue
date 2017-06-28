<template>
  <div class="layout-view">
    <div class="layout-padding">
      <div class="page-title">
        {{behandeling.name}}
      </div>
      <div class="row medium-gutter sm-column">
        <div class="width-1of2">
          <div class="card">
            <div class="card-title">
              Behandeling informatie
            </div>
          </div>
        </div>

        <div class="width-1of2">
          <div class="card">
            <div class="card-title">
              Notities
            </div>
          </div>
        </div>
      </div>

      <div class="row medium-gutter sm-column">
        <div class="width-1of2">
          <div class="card">
            <div class="card-title">
              Medicatie
            </div>
          </div>
        </div>

        <div class="width-1of2">
          <div class="card">
            <div class="card-title">
              Oefeningen
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'behandeling-page',
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
    }
}
</script>

<style lang="scss" scoped>
  .layout-padding {
    padding-top: 1rem;
  }
</style>
