<template>
  <div>
    <div class="card">
      <div class="card-title">
        Oefeningen
        <i class="float-right add-icon" @click="$refs.addExerciseModal.open()" v-if="state">add_circle</i>
      </div>
      <div class="card-content">
        <div class="list">
          <list-item v-for="excercise in oefeningen" :key="excercise.id" type="excercise" :id="excercise.id" :therapyId="excercise.pivot.therapy_id" :title="excercise.title"></list-item>
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
          <q-datetime class="patient-datepicker full-width" v-model="excerciseData.start_date" type="date" placeholder="Startdatum" :min="now"></q-datetime>
        </div>
        <div class="row medium-gutter">
          <q-datetime class="patient-datepicker full-width" v-model="excerciseData.end_date" type="date" placeholder="Einddatum" :min="now"></q-datetime>
        </div>
        <div class="row medium-gutter">
          <input class="full-width" v-model="excerciseData.sets" placeholder="Hoeveel sets">
        </div>
        <div class="row medium-gutter">
          <input class="full-width" v-model="excerciseData.sets_amount" placeholder="Aantal per set">
        </div>
        <div class="row medium-gutter">
          <input class="full-width" v-model="excerciseData.per_day" placeholder="Hoeveel keer per dag">
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
    props: ['oefeningen', 'state'],
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
          therapy_id: '',
          id: '',
          start_date: moment().format(),
          end_date: '',
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
        this.excerciseData.therapy_id = parseInt(this.$route.params.behandelingId)
        this.$store.dispatch('ADD_EXCERCISE', this.excerciseData).then(() => {
          for(let item in this.excerciseData) {
            this.excerciseData[item] = ''
          }
          this.$refs.addExerciseModal.close()
        })

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
  .minimized {
    button {
      margin: 0 auto;
      display: block;
    }

    .row div, input {
      margin-bottom: 1rem;
    }
  }
</style>
