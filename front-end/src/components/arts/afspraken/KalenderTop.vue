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
  watch: {
    week: function () {
      this.huidigeWeek = this.week
      this.getDagen()
    }
  },
  methods: {
    getDagen() {
      console.log('Start get dagen')
      let dagen = []
      for(let i = 0; i < 5; i++) {
        dagen.push({
          dayNumber: moment('2017').locale('nl').add(this.huidigeWeek, 'weeks').startOf('week').add(i, 'day').format('DD'),
          day: moment('2017').locale('nl').add(this.huidigeWeek, 'weeks').startOf('week').add(i, 'day').format('dddd'),
          month: moment('2017').locale('nl').add(this.huidigeWeek, 'weeks').startOf('week').add(i, 'day').format('MMMM')
        })
      }
      this.dagen = dagen
    }
  },
  created() {
    this.getDagen()
  }
}

</script>

<style lang="scss" scoped>
  .row {
    border-bottom: 1px solid #e4e4e4;
    position: relative;
  }

  .box-day {
    min-height: 100px;
    font-size: 14px;
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
