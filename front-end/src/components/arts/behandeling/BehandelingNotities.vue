<template>
  <div>
    <div class="card">
      <div class="card-title">
        Notities
        <i class="float-right add-icon" @click="$refs.addNoteModal.open()" v-if="state">add_circle</i>
      </div>
      <div class="card-content">
        <div class="list">
          <q-collapsible group="notes" v-for="note in notes" :key="note.id" :label="note.title">
            <div>
              {{note.note}}
            </div>
          </q-collapsible>
        </div>
      </div>
    </div>

    <q-modal ref="addNoteModal" class="minimized" :content-css="{padding: '50px'}">
        <p>Notitie toevoegen</p>
        <div class="row medium-gutter">
          <input class="full-width" v-model="noteData.title" placeholder="Titel">
        </div>
        <div class="row medium-gutter">
          <textarea  class="full-width" v-model="noteData.note" placeholder="Notitie"></textarea>
        </div>
        <button class="red" @click="addNote()">Toevoegen</button>
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
    props: ['notes', 'state'],
    components: {
      ListItem
    },
    data () {
      return {
        terms: '',
        noteData: {
          title: '',
          added_by: '',
          therapy_id: '',
          note: ''
        },
        now: moment().format()
      }
    },
    computed: {
      doctorId () {
        return this.$store.getters.getDoctorInfo.id
      }
    },
    methods: {
      addNote() {
        console.log(this.noteData)
        this.noteData.therapy_id = parseInt(this.$route.params.behandelingId)
        this.noteData.added_by = this.doctorId
        this.$store.dispatch('ADD_DOCTOR_NOTE', this.noteData).then(() => {
          for(let item in this.noteData) {
            this.noteData[item] = ''
          }
          this.$refs.addNoteModal.close()
        })

      }
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
