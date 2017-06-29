<template>
  <div class="row">
    <div class="timestamp">
      <span>{{8 + rowNumber}}:00</span>
    </div>

    <afspraak-kolom v-for="n in 5"></afspraak-kolom>
  </div>
</template>

<script>
import AfspraakKolom from './AfspraakKolom'

export default {
  name: 'afspraken-tijd-rij',
  props: ['rowNumber'],
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
    border: 1px solid #e4e4e4;
    position: relative;
  }
</style>
