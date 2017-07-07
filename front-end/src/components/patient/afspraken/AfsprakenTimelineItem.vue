<template>
  <div class="timeline-item">
    <div class="timeline-badge" v-bind:class="getBadge">
      <i>{{afspraakStatus}}</i>
    </div>
    <div class="timeline-title">
      {{title}} <span v-if="status == 'canceled'">(Geannuleerd)</span>
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
      if(this.status != 'canceled') {
        return moment(this.date).diff(moment()) < 0 ? 'check' : 'alarm';
      }
      return 'close'
    },
    getBadge() {
      if(this.status != 'canceled') {
        return this.afspraakStatus == 'check' ? 'bg-positive' : 'bg-warning'
      }
      return 'bg-primary'
    }
  }
}

</script>

<style lang="scss" scoped>
  .card-content {
    padding-top: 0;
  }
</style>
