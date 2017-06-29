<template>
  <div class="row">
    <div class="timestamp">
      <span v-if="rowNumber % 2 != 0">{{8 + Math.round(rowNumber / 2)}}:00</span>
    </div>

    <afspraak-kolom v-for="n in 5" :week="week" :xPos="n" :yPos="rowNumber"></afspraak-kolom>
  </div>
</template>

<script>
import AfspraakKolom from './AfspraakKolom'

export default {
  name: 'afspraken-tijd-rij',
  props: ['rowNumber', 'week'],
  components: {
    AfspraakKolom
  }
}

</script>

<style lang="scss" scoped>
  .timestamp {
    position: absolute;
    left: -40px;
    top: -8px;
    font-size: 14px;
  }

  .row {
    border-bottom: 1px solid #e4e4e4;
    position: relative;
  }
</style>
