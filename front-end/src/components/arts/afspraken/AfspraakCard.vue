<template>
  <div class="card afspraak-card" v-bind:style="{top: topOffset, height: height, left: leftOffset}" @click="clickEvent()">
    <div class="card-title">Start: {{startTijd}}</div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'afspraak-card',
  props: ['start', 'eind'],
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
      offset = offset + (verschil * 1.33) + 'px';
      this.topOffset = offset
    },
    calculateLength() {
      let verschil = moment(this.eind).diff(moment(this.start), 'minutes')
      let height = verschil * 1.33 + 'px'
      this.height = height
    },
    calculateLeftOffset() {
      let verschil = moment(this.start).diff(moment().startOf('week').add(1, 'day'), 'days')
      let offset = verschil * 20 + '%'
      this.leftOffset = offset
    },
    clickEvent() {
      console.log(this.start, 'has been clicked')
    }
  },
  computed: {
    startTijd() {
      return moment(this.start).format('DD-MM-YYYY H:mm');
    }
  },
  created() {
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

    //1.33px per minuut

    .card-title {
      color: #fff;
    }
  }
</style>
