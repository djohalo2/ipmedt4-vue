<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">MEDICATIE</p>
            <p class="no-entries-msg" v-if="medicatie.length === 0">Er is geen medicatie gevonden.</p>
            <medicijn-card v-for="medicijn in medicatie" :id="medicijn.id" :title="medicijn.title" :content="medicijn.description" :date="medicijn.date"></medicijn-card>
        </div>
    </div>
</template>

<script>
import MedicijnCard from './MedicijnCard.vue';
import Navigation from './Navigation.vue';

export default {
    name: 'medicatie',
    components: {
        MedicijnCard,
        Navigation
    },
    computed: {
        medicatie(){
            return this.$store.getters.getMedicatie
        }
    }
}
</script>

<style lang="scss">
    .no-entries-msg {
        color: #a8a8a8;
    }
    .layout-view {
        background-color: #F6F6F6;
    }

    .page-title {
        font-size:0.85rem;
        font-weight: 500;
        color: #a8a8a8;
        margin: 0.5rem 0;
    }
</style>
