<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">Oefeningen</p>
            <q-search v-model="oefeningSearch" placeholder="Zoek oefeningen..." class="searchbar"></q-search>

            <spinner class="loading-spinner" color="#e74c3c" v-if="isFetching"></spinner>
            <div class="list bg-white">
              <div class="item"  v-for="(oefening, index) in searchedOefeningen" :key="index">
                <oefening-list-item :excercise="oefening"></oefening-list-item>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import OefeningListItem from './OefeningListItem.vue'

export default {
    name: 'oefeningen',
    components: {
      OefeningListItem
    },
    data() {
      return {
        oefeningSearch: '',
        isFetching: false
      }
    },
    computed: {
      oefeningen () {
        return this.$store.getters.getAllExercises
      },
      searchedOefeningen() {
          if(this.oefeningSearch !== ""){
              let oefeningen = [];
              this.oefeningen.map(oefening => {
                  if(_.includes(oefening.name.toLowerCase(), this.oefeningSearch.toLowerCase())){
                      oefeningen.push(oefening);
                  }
              });
              return oefeningen;
          } else {
              return this.oefeningen;
          }
      }
    },
    created () {
      this.isFetching = true
      this.$store.dispatch('FETCH_ALL_EXERCISES').then(() => {
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
