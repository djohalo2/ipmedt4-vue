<template>
  <div>
    <div class="card">
      <div class="card-title">
        Oefeningen
        <i class="float-right add-icon" @click="$refs.addExerciseModal.open()">add_circle</i>
      </div>
      <div class="card-content">
        <div class="list">
          <list-item v-for="excercise in oefeningen" :key="excercise.id" :title="excercise.title"></list-item>
        </div>
      </div>
    </div>

    <q-modal ref="addExerciseModal" class="minimized" :content-css="{padding: '50px'}">
        <p>Oefening toevoegen</p>
        <div class="row medium-gutter">
          <q-autocomplete v-model="terms" @search="search" @selected="selected" :delay="0">
            <q-search v-model="terms" placeholder="Voeg een oefening toe" />
          </q-autocomplete>
        </div>
        <div class="row medium-gutter">
          <q-datetime class="patient-datepicker" v-model="excerciseData.start_date" type="date" placeholder="Startdatum" :min="now"></q-datetime>
        </div>
        <div class="row medium-gutter">
          <q-datetime class="patient-datepicker" v-model="excerciseData.end_date" type="date" placeholder="Einddatum" :min="now"></q-datetime>
        </div>
        <div class="row medium-gutter">
          <input v-model="excerciseData.sets" placeholder="Hoeveel sets">
        </div>
        <div class="row medium-gutter">
          <input v-model="excerciseData.sets_amount" placeholder="Aantal per set">
        </div>
        <div class="row medium-gutter">
          <input v-model="excerciseData.per_day" placeholder="Hoeveelheid per dag">
        </div>
        <button class="red" @click="addExercise()">Toevoegen</button>
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
    name: 'behandeling-oefeningen',
    props: ['oefeningen'],
    components: {
      ListItem
    },
    data () {
      return {
        terms: '',
        excerciseData: {
          sets: '',
          sets_amount: '',
          per_day: '',
          therapy_id: this.$route.params.behandelingId,
          id: 0,
          start_date: moment().format(),
          end_date: moment().format(),
          title: ''
        },
        now: moment().format()
      }
    },
    computed: {
      excercises () {
        return this.$store.getters.getAllExercises
      }
    },
    methods: {
      search (terms, done) {
        let results = [];
        this.excercises.map((excercise) => {
          if(_.includes(excercise.title.toLowerCase(), terms.toLowerCase())) {
            results.push({
              label: excercise.title,
              id: excercise.id,
              value: excercise.title
            });
          }
        })
        done(results);
      },
      selected (item) {
        this.excerciseData.id = item.id
        this.excerciseData.title = item.label
      },
      addExercise() {
        this.$store.dispatch('ADD_EXCERCISE', this.excerciseData)
        this.$refs.addExerciseModal.close()
      }
    },
    created () {
      this.$store.dispatch('FETCH_ALL_EXERCISES')
    }
}
</script>

<style lang="scss" scoped>
  .layout-padding {
    padding-top: 1rem;
  }
</style>
