<template>
    <div class="layout-view">
      <div class="layout-padding">
        <div class="calendar">
          <kalender-top></kalender-top>

          <afspraak-tijd-rij v-for="n in 9" :rowNumber="n"></afspraak-tijd-rij>

          <afspraak-card :start="start" :eind="eind"></afspraak-card>
          <afspraak-card :start="start2" :eind="eind2"></afspraak-card>
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
      start: moment('2017-06-29 09:30').format(),
      eind: moment('2017-06-29 10:15').format(),
      start2: moment('2017-06-29 10:30').format(),
      eind2: moment('2017-06-29 12:30').format()
    }
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
