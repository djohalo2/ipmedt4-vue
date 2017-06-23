<template>
  <div class="layout-view">
    <div class="layout-padding">
      <div class="timeline">
        <afspraken-timeline-item
          v-for="appointment in appointments"
          :key="appointment.id"
          :doctor="appointment.doctor.gender + ' ' + appointment.doctor.lastname"
          :status="appointment.status"
          :date="appointment.time_date"
          :title="appointment.title"  
          :department="appointment.doctor.department.naam"
        ></afspraken-timeline-item>
      </div>
    </div>
  </div>
</template>

<script>
import router from 'vue-router';
import AfsprakenTimelineItem from './AfsprakenTimelineItem.vue';

export default {
  name: 'afspraken',
  components: {
    AfsprakenTimelineItem
  },
  computed: {
    appointments () {
      return this.$store.getters.getAllAppointsments
    }
  }
}

</script>

<style lang="scss" scoped>
  .timeline {
    margin-top: 1rem;
  }
</style>
