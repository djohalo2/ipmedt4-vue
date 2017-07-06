<template>
    <div class="layout-view">
          <div class="card medicine-search">
            <div class="card-title">
              <p class="page-title">Medicatie</p>

              <q-search v-model="medicijnSearch" placeholder="Zoek medicijn..." class="searchbar"></q-search>
            </div>
          </div>

      <div class="layout-padding">

            <spinner class="loading-spinner" color="#e74c3c" v-if="isFetching"></spinner>
            <div class="list bg-white">
              <div class="item"  v-for="(medicijn, index) in searchedMedicijnen" :key="index">
                <medicatie-list-item :medicine="medicijn"></medicatie-list-item>
              </div>
            </div>
      </div>
    </div>
</template>

<script>
import _ from 'lodash';
import MedicatieListItem from './MedicatieListItem.vue'

export default {
    name: 'medicatie',
    components: {
      MedicatieListItem
    },
    data() {
      return {
        medicijnSearch: '',
        isFetching: false
      }
    },
    computed: {
      medicatie () {
        return this.$store.getters.getAllMedicines
      },
      searchedMedicijnen() {
          if(this.medicijnSearch !== ""){
              let medicatie = [];
              this.medicatie.map(medicijn => {
                  if(_.includes(medicijn.name.toLowerCase(), this.medicijnSearch.toLowerCase())){
                      medicatie.push(medicijn);
                  }
              });
              return medicatie;
          } else {
              return this.medicatie;
          }
      }
    },
    created () {
      this.isFetching = true
      this.$store.dispatch('FETCH_ALL_MEDICINES').then(() => {
        this.isFetching = false
      })
    }
}

</script>

<style lang="scss" scoped>

  .layout-padding {
    padding-top: 1rem;
  }

    .page-title {
        color: #e74c3c !important;
    }

  .medicine-search {
    background-image: url('../../../statics/medicines-background.jpg');
    -webkit-background-size: cover;
    background-size: cover;

      .searchbar {
        max-width: 500px;
        margin: 0 auto;
        line-height: 15vh;
        background: none;
        padding-bottom: 2.5vh;
      }
    }

    .loading-spinner {
      margin: 0 auto;
      display: block;
    }
</style>
