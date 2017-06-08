<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">Openstaande behandelingen</p>
            <behandeling-card v-for="behandeling in behandelingen" :id="behandeling.id" :title="behandeling.name" :bodyparts="behandeling.bodyparts[0].name" :date="behandeling.start_date"></behandeling-card>
        </div>
    </div>
</template>

<script>
import BehandelingCard from './BehandelingCard.vue';

export default {
    name: 'behandelingen',
    components: {
        BehandelingCard
    },
    computed: {
        behandelingen(){
            return this.$store.getters.totalBehandelingen
        }
    }
}
</script>

<style lang="styl">
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
