<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">MEDICATIE</p>
            <p class="no-entries-msg" v-if="medicatie.length === 0">Er is geen medicatie gevonden.</p>
            <medicijn-card v-for="medicijn in medicatie" :key="medicijn.id" :id="medicijn.id" :behandeling="medicijn.behandeling" :title="medicijn.name" :aantal="medicijn.aantal" :date="medicijn.start_date"></medicijn-card>
        </div>
    </div>
</template>

<script>
import MedicijnCard from './MedicijnCard.vue';

export default {
    name: 'medicatie',
    components: {
        MedicijnCard
    },
    computed: {
      medicatie(){
          return this.$store.getters.getAllMedicatie
      }
    }
}
</script>

<style lang="scss">
    .no-entries-msg {
        color: #a8a8a8;
    }
</style>
