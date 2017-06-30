<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">Oefeningen</p>

            <oefening-card v-for="oefening in oefeningen" :key="oefening.id" :id="oefening.id" :title="oefening.title" :description="oefening.description" :therapy="oefening.pivot.therapy_id"></oefening-card>
        </div>
    </div>
</template>

<script>
import OefeningCard from './OefeningCard.vue';

export default {
    name: 'overzicht',
    components: {
        OefeningCard
    },
    computed: {
        oefeningen() {
            return this.$store.getters.getAllOefeningen;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
