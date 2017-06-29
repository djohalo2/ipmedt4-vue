<template>
  <div class="row">
    <div class="width-1of5" v-for="dag in dagen" :key="dag">
      <div class="box-day">
        <span class="day-text">{{dag.day}}</span>
        <span class="day-date">{{dag.dayNumber}}</span>
        <span class="month-date">{{dag.month}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'kalender-top',
  props: ['week'],
  data() {
    return {
      dagen: '',
      huidigeWeek: this.week
    }
  },
  methods: {
    getDagen() {
      console.log('Start get dagen')
      let dagen = []
      for(let i = 0; i < 5; i++) {
        dagen.push({
          dayNumber: moment().lang('nl').startOf('week').add(i, 'day').format('DD'),
          day: moment().lang('nl').startOf('week').add(i, 'day').format('dddd'),
          month: moment().lang('nl').startOf('week').add(i, 'day').format('MMMM')
        })
      }
      this.dagen = dagen
    }
  },
  created() {
    this.getDagen()
  },
  updated() {
    console.log(this.huidigeWeek)
    this.getDagen()
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

  .day-text {
    color: #bdbdbd;
    &:first-letter {
      text-transform: uppercase;
    }
  }

  .month-date {
    float:right;
    color: #bdbdbd;
    font-size:13px;
    font-weight: 400;

    &:first-letter {
      text-transform: uppercase;
    }
  }
</style>
