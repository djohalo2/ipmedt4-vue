<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">{{currentBehandeling.title}}</p>
            <div class="card">
                <div class="card-title">
                    <p class="text-primary">TODO</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from 'vue-router';
var _ = require('lodash');

export default {
    name: 'behandeling-page',
    data() {
        return {
            typeBehandeling: this.$route.params.typeBehandeling,
            testBehandelingen: [
                {
                    id: "botbreuk-been",
                    title: "Botbreuk been",
                    description: "Een botbreuk in het been opgelopen.",
                    date: "26-05-2017"
                },
                {
                    id: "blaasontsteking",
                    title: "Blaasontsteking",
                    description: "Een blaasontsteking naar aanleiding van bacterie.",
                    date: "07-03-2017"
                }
            ]
        }
    },
    computed: {
        currentBehandeling() {
            return _.filter(this.testBehandelingen, ['id', this.typeBehandeling])[0];
        }
    },
    created() {
        console.log(this.$route.params.typeBehandeling);
    }
}
</script>

<style lang="styl">

</style>
