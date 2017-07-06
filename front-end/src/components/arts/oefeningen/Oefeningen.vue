<template>
    <div class="layout-view">

      <div class="card excercise-search">
        <div class="card-title">
            <p class="page-title">Oefeningen</p>
            <q-search v-model="oefeningSearch" placeholder="Zoek oefeningen..." class="searchbar"></q-search>
        </div>
      </div>

        <div class="layout-padding">
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
                  if(_.includes(oefening.title.toLowerCase(), this.oefeningSearch.toLowerCase())){
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
  .layout-padding {
    padding-top: 1rem;
  }

  .page-title {
    color: #e74c3c !important;
  }

  .excercise-search {
    background-image: url('../../../statics/exercises-background.jpg');
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;

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
