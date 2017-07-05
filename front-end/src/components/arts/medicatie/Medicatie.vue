<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">Medicatie</p>
            <q-search v-model="medicijnSearch" placeholder="Zoek medicijn..." class="searchbar"></q-search>

            <spinner class="loading-spinner" color="#e74c3c" v-if="isFetching"></spinner>
            <div class="list bg-white striped">
              <div class="item"  v-for="(medicijn, index) in searchedMedicijnen" :key="index">
                <div class="item-content">
                  {{medicijn.name}}
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';

export default {
    name: 'medicatie',
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
    .page-title {
        font-size:0.85rem;
        font-weight: 500;
        color: #a8a8a8;
        margin: 0.5rem 0;
    }

    .loading-spinner {
      margin: 1rem auto;
      display: block;
    }
</style>
