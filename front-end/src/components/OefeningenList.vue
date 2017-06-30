<template>
    <div class="card">
        <div class="card-title">
            <p class="text-primary">HUIDIGE OEFENINGEN</p>
            <p class="no-entries-msg" v-if="oefeningen.length === 0">
                Er zijn geen oefeningen aanwezig in deze behandeling.
            </p>
            <span v-on:click="labelClick('/behandeling/' + oefening.pivot.therapy_id + '/oefeningen/' + oefening.id, oefening.pivot.therapy_id)" class="label bg-primary" v-for="(oefening, index) in oefeningen" :key="index">
                {{oefening.title}}
            </span>
        </div>
    </div>
</template>

<script>
import router from 'vue-router';

export default {
    name: 'medicatie-list',
    props: ['oefeningen'],
    methods: {
        labelClick(path, behandeling) {
            this.$store.commit('CHANGE_CURRENT_BEHANDELING', behandeling);
            this.$router.push({path: path});
        }
    }
}
</script>

<style lang="scss" scoped>
    span {
        color: #fff;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 13px;
        padding: 0.6rem;
    }
</style>
