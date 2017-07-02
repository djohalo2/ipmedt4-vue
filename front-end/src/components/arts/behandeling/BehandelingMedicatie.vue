<template>
  <div>
    <div class="card">
      <div class="card-title">
        Medicatie
        <i class="float-right add-icon" @click="$refs.addMedicineModal.open()" v-if="state">add_circle</i>
      </div>
      <div class="card-content">
        <div class="list">
          <list-item v-for="medicijn in medicatie" :key="medicijn.id" :title="medicijn.name"></list-item>
        </div>
      </div>
    </div>

    <q-modal ref="addMedicineModal" class="minimized patient-modal" :content-css="{padding: '50px'}">
        <p>Medicijn toevoegen</p>
        <div class="row medium-gutter">
          <q-autocomplete v-model="terms" @search="search" @selected="selected" :delay="0">
            <q-search v-model="terms" placeholder="Zoek een medicijn" />
          </q-autocomplete>
        </div>
        <div class="row medium-gutter">
          <q-datetime class="patient-datepicker" v-model="medicineData.start_date" type="date" placeholder="Startdatum" :min="now"></q-datetime>
        </div>
        <div class="row medium-gutter">
          <q-datetime class="patient-datepicker" v-model="medicineData.end_date" type="date" placeholder="Einddatum" :min="now"></q-datetime>
        </div>
        <div class="row medium-gutter">
          <input v-model="medicineData.amount" placeholder="Dosering">
        </div>
        <div class="row medium-gutter">
          <input v-model="medicineData.amount_per_day" placeholder="Hoeveelheid per dag">
        </div>
        <button class="red" @click="addMedicine()">Toevoegen</button>
    </q-modal>
  </div>
</template>

<script>
import _ from 'lodash';
import { Utils } from 'quasar';
import router from 'vue-router';
import moment from 'moment';
import lodash from 'lodash';

import ListItem from './ListItem';

export default {
    name: 'behandeling-medicatie',
    props: ['medicatie', 'state'],
    components: {
      ListItem
    },
    data () {
      return {
        terms: '',
        medicineData: {
          amount: '',
          amount_per_day: '',
          therapy_id: this.$route.params.behandelingId,
          id: 0,
          start_date: moment().format(),
          end_date: moment().format(),
          name: ''
        },
        now: moment().format()
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
          if(_.includes(medicine.name.toLowerCase(), terms.toLowerCase())) {
            results.push({
              label: medicine.name,
              id: medicine.id,
              value: medicine.name
            });
          }
        })
        done(results);
      },
      selected (item) {
        this.medicineData.id = item.id
        this.medicineData.name = item.label
      },
      addMedicine() {
        this.$store.dispatch('ADD_MEDICINE', this.medicineData)
        this.$refs.addMedicineModal.close()
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
