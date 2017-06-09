<template>
    <div class="card">
        <div class="card-title">
            <p class="text-primary">MEDICATIE</p>
            <p class="no-entries-msg" v-if="medicatie.length === 0">
                Er zijn geen medicijnen aanwezig in deze behandeling.
            </p>
            <span v-on:click="labelClick('/behandeling/' + medicijn.pivot.therapy_id + '/medicatie/' + medicijn.id, medicijn.pivot.therapy_id)" class="label bg-primary" v-for="medicijn in medicatie">
                {{medicijn.name}}
            </span>
        </div>
    </div>
</template>

<script>
import router from 'vue-router';

export default {
    name: 'medicatie-list',
    props: ['medicatie'],
    methods: {
        labelClick(path, behandeling) {
            this.$store.commit('CHANGE_CURRENT_BEHANDELING', behandeling);
            this.$router.push({path: path});
        }
    }
}
</script>

<style lang="scss" scoped>
    .no-entries-msg {
        font-size: 0.85rem;
        font-weight: 500;
        color: #a8a8a8;
    }

    span {
        color: #fff;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 13px;
        padding: 0.6rem;
    }
</style>
