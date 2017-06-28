<template>
  <div>
    <div class="card">
      <div class="card-title">
        Medicatie
        <i class="float-right add-icon" @click="$refs.addMedicineModal.open()">add_circle</i>
      </div>
      <div class="card-content">
        <div class="list">
          <list-item v-for="medicijn in medicatie" :key="medicijn.id" :title="medicijn.name"></list-item>
        </div>
      </div>
    </div>

    <q-modal ref="addMedicineModal" class="minimized patient-modal" :content-css="{padding: '50px'}">
        <p>Medicijn toevoegen</p>
        <div class="row small-gutter">
          <q-autocomplete v-model="terms" @search="search" @selected="selected" :delay="0">
            <q-search v-model="terms" placeholder="Zoek een medicijn" />
          </q-autocomplete>
        </div>
        <button class="red">Toevoegen</button>
    </q-modal>
  </div>
</template>

<script>
import _ from 'lodash';

import ListItem from './ListItem';

export default {
    name: 'behandeling-medicatie',
    props: ['medicatie'],
    components: {
      ListItem
    },
    data () {
      return {
        terms: ''
      }
    },
    computed: {
      medicines () {
        return this.$store.getters.getAllMedicines
      }
    },
    methods: {
      search (terms, done) {
        let results = [];
        this.medicines.map((medicine) => {
          if(_.includes(medicine.name.toLowerCase(), terms)) {
            results.push(medicine);
          }
        })
        done(results);
      },
      selected (item) {
        console.log(item);
      }
    },
    created () {
      this.$store.dispatch('FETCH_ALL_MEDICINES')
    }
}
</script>

<style lang="scss" scoped>
  .layout-padding {
    padding-top: 1rem;
  }
</style>
