<template>
    <div class="layout-view">
      <div class="layout-padding">
        <div class="row small-gutter">
          <div class="width-1of5">
            <button @click="changeWeek('previous')" class="primary outline"><i>keyboard_arrow_left</i>Vorige week</button>
          </div>
          <div class="width-3of5"></div>
          <div class="width-1of5">
            <button @click="changeWeek('next')" class="primary outline float-right">Volgende week<i>keyboard_arrow_right</i></button>
          </div>
        </div>
        <div class="calendar">
          <kalender-top :week="huidigeWeek"></kalender-top>
          <afspraak-tijd-rij v-for="n in 9" :rowNumber="n" :key="n"></afspraak-tijd-rij>
          <afspraak-card v-for="(appointment, index) in appointments" :key="index" :start="appointment.start" :eind="appointment.end" :name="appointment.title"></afspraak-card>
        </div>
      </div>
    </div>
</template>

<script>
import AfspraakTijdRij from './AfspraakTijdRij'
import AfspraakCard from './AfspraakCard'
import KalenderTop from './KalenderTop'
import moment from 'moment'

export default {
  name: 'afspraken',
  components: {
    AfspraakTijdRij,
    AfspraakCard,
    KalenderTop
  },
  data() {
    return {
      huidigeWeek: moment().format('w')
    }
  },
  computed: {
    appointments() {
      return this.$store.getters.getAppointments
    }
  },
  methods: {
    changeWeek(buttonType) {
      if(buttonType == 'previous') {
        this.huidigeWeek--;
      } else {
        this.huidigeWeek++;
      }
      console.log('huidige week', this.huidigeWeek)
      this.$store.dispatch('FETCH_AFSPRAKEN', this.huidigeWeek)
    }
  },
  created() {
    this.$store.dispatch('FETCH_AFSPRAKEN', this.huidigeWeek)
  },
  updated() {
    console.log('week updateje', this.huidigeWeek)
  }
}

</script>

<style lang="scss" scoped>
  .layout-padding {
    padding-top: 1.5rem;
  }

  .calendar {
    position: relative;
  }
</style>
