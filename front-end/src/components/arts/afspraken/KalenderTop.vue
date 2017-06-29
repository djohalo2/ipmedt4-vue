<template>
  <div class="row">
    <div class="width-1of5">
      <div class="box-day">
        Maandag
        <span class="day-date">{{dagen[0]}}</span>
      </div>
    </div>
    <div class="width-1of5">
      <div class="box-day">
        Dinsdag
        <span class="day-date">{{dagen[1]}}</span>
      </div>
    </div>
    <div class="width-1of5">
      <div class="box-day">
        Woensdag
        <span class="day-date">{{dagen[2]}}</span>
      </div>
    </div>
    <div class="width-1of5">
      <div class="box-day">
        Donderdag
        <span class="day-date">{{dagen[3]}}</span>
      </div>
    </div>
    <div class="width-1of5">
      <div class="box-day">
        Vrijdag
        <span class="day-date">{{dagen[4]}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'kalender-top',
  data() {
    return {
      dagen: this.getDagen(),
      week: 0
    }
  },
  methods: {
    getDagen() {
      console.log('Start get dagen')
      let dagen = []
      for(let i = 1; i <= 5; i++) {
        dagen.push(moment().startOf('week').add(i, 'day').format('DD'))
      }
      return dagen
    }
  }
}

</script>

<style lang="scss" scoped>
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

  .day-date {
    font-size: 40px;
    display: block;
  }
</style>
