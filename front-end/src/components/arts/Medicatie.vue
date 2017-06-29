<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">Medicatie</p>
            <q-search v-model="medicijnSearch" placeholder="Zoek medicijn..." class="searchbar"></q-search>

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
        medicijnSearch: ''
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
      this.$store.dispatch('FETCH_ALL_MEDICINES')
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


</style>
