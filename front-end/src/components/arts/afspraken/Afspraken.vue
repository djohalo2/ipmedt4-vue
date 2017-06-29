<template>
    <div class="layout-view">
      <div class="layout-padding">
        <div class="calendar">
          <div class="row">
            <div class="width-1of5">
              <div class="box-day">
                Maandag
                <span class="day-date">25</span>
              </div>
            </div>
            <div class="width-1of5">
              <div class="box-day">
                Dinsdag
                <span class="day-date">26</span>
              </div>
            </div>
            <div class="width-1of5">
              <div class="box-day">
                Woensdag
                <span class="day-date">27</span>
              </div>
            </div>
            <div class="width-1of5">
              <div class="box-day">
                Donderdag
                <span class="day-date">28</span>
              </div>
            </div>
            <div class="width-1of5">
              <div class="box-day">
                Vrijdag
                <span class="day-date">29</span>
              </div>
            </div>
          </div>

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
import moment from 'moment'

export default {
  name: 'afspraken',
  components: {
    AfspraakTijdRij,
    AfspraakCard
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

  .day-date {
    font-size: 40px;
    display: block;
  }

  .calendar {
    position: relative;
  }

  .row {
    border: 1px solid #e4e4e4;
    position: relative;
  }

  .box-day {
    min-height: 100px;
  }

  .box-event, .box-day {
    padding: 0.7rem;
    background-color: #fff;
    width: 100%;
    border-right: 1px solid #e4e4e4;
  }
</style>
