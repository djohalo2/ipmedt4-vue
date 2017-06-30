<template>
  <div class="timeline-item">
    <div class="timeline-badge" v-bind:class="getBadge">
      <i>{{afspraakStatus}}</i>
    </div>
    <div class="timeline-title">
      {{title}}
    </div>
    <div class="timeline-date text-italic">
      <div>{{tijdstip}}</div>
      <div>{{datum}}</div>
    </div>

    <div class="card">
      <div class="card-title">
        Afdeling {{department}}
      </div>
      <div class="card-content">
        Afspraak met {{doctor}}
      </div>
    </div>
  </div>
</template>

<script>
import router from 'vue-router';
import moment from 'moment';

export default {
  name: 'afspraken-timeline-item',
  props: ['doctor', 'status', 'date', 'department', 'title'],
  computed: {
    datum () {
      return moment(this.date).format("DD-MM-YYYY")
    },
    tijdstip () {
      return moment(this.date).format("HH:mm")
    },
    afspraakStatus () {
      return moment(this.date).diff(moment()) < 0 ? 'check' : 'alarm';
    },
    getBadge() {
      return this.afspraakStatus == 'check' ? 'bg-positive' : 'bg-warning'
    }
  }
}

</script>

<style lang="scss" scoped>
  .card-content {
    padding-top: 0;
  }
</style>
