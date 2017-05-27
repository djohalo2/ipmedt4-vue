<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">Openstaande behandelingen</p>
            <behandeling-card v-for="behandeling in testBehandelingen" :title="behandeling.title" :content="behandeling.description" :date="behandeling.date"></behandeling-card>
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
    data() {
        return {
            testBehandelingen: [
                {
                    title: "Botbreuk been",
                    description: "Een botbreuk in het been opgelopen.",
                    date: "26-05-2017"
                },
                {
                    title: "Blaasontsteking",
                    description: "Een blaasontsteking naar aanleiding van bacterie.",
                    date: "07-03-2017"
                }
            ]
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
