<template>
  <div>
    <button class="card primary afspraak-card" v-bind:style="{top: topOffset, height: height, left: leftOffset}" @click="$refs.appointmentModal.open()">
      {{name}}


    </button>

    <q-modal ref="appointmentModal" class="minimized appointment-modal">
      <div class="modal-image">
        <i class="close-btn" @click="$refs.appointmentModal.close()">close</i>
        <img src="http://via.placeholder.com/450x250" alt="">
      </div>
      <div class="modal-title">
        <h4>{{name}}</h4>
      </div>

      <div class="modal-text">
        <ul>
          <li><i>access_time</i>{{startTijd}} - {{eindTijd}}</li>
          <li><i>person</i>{{patient}}</li>
        </ul>
      </div>
    </q-modal>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'afspraak-card',
  props: ['start', 'eind', 'name', 'patientId'],
  data () {
    return {
      topOffset: '',
      height: '',
      leftOffset: ''
    }
  },
  methods: {
    calculateTopOffset() {
      let offset = 100;
      let verschil = moment(this.start).diff(moment(this.start).startOf('day').add(9, 'hours'), 'minutes')
      offset = offset + (verschil * 1.366666) + 'px';
      this.topOffset = offset
    },
    calculateLength() {
      let verschil = moment(this.eind).diff(moment(this.start), 'minutes')
      let height = verschil * 1.366666 + 'px'
      this.height = height
    },
    calculateLeftOffset() {
      let verschil = moment(this.start).diff(moment(this.start).startOf('week').add(1, 'day'), 'days')
      let offset = verschil * 20 + '%'
      this.leftOffset = offset
    }
  },
  computed: {
    startTijd() {
      return moment(this.start).format('H:mm');
    },
    eindTijd() {
      return moment(this.eind).format('H:mm')
    },
    patient() {
      let patients = this.$store.getters.getPatients
      for(let patient in patients) {
        if(patients[patient].id === this.patientId) {
          return patients[patient].firstname + ' ' + patients[patient].lastname
        }
      }
    }
  },
  created() {
    this.calculateTopOffset()
    this.calculateLength()
    this.calculateLeftOffset()
  },
  beforeUpdate() {
    this.calculateTopOffset()
    this.calculateLength()
    this.calculateLeftOffset()
  }
}

</script>

<style lang="scss" scoped>
  .afspraak-card {
    width: 20%;
    background-color: #e74c3c;
    position: absolute;
    transition: none!important;

    .card-title {
      color: #fff;
    }
  }

  .modal-image {
    max-height: 250px;

    .close-btn {
      font-size:20px;
      position: absolute;
      font-weight: 700;
      color: #fff;
      top: 15px;
      right:15px;
      cursor: pointer;
    }
  }

  .modal-title {
    background-color: #e74c3c;
    padding: 1rem;

    h4 {
      font-size: 22px;
      color: #fff;
      margin-left: 0.8rem;
    }
  }

  .modal-text {
    padding: 1rem;

    ul {
      list-style-type: none;
      padding: 0;
      margin-left: 0.8rem;

      i {
        margin-right: 1rem;
        font-size: 20px;
      }

      li {
        margin-bottom: 1rem;
      }

    }
  }
</style>
