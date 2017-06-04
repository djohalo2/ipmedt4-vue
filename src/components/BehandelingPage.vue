<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">{{behandeling.title}}</p>
            <todo-list :todoType="'behandeling'"></todo-list>

            <medicatie-list :medicatie="behandeling.medicatie"></medicatie-list>


            <div class="card">
                <div class="card-title">
                    <p class="text-primary">OEFENINGEN</p>
                    <p class="no-entries-msg" v-if="behandeling.oefeningen.length === 0">
                        Er zijn geen oefeningen aanwezig in deze behandeling.
                    </p>
                    <span class="label bg-primary" v-for="oefening in behandeling.oefeningen">
                        {{oefening.title}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from 'vue-router';

import TodoList from './TodoList.vue';
import MedicatieList from './MedicatieList.vue';

export default {
    name: 'behandeling-page',
    components: {
        TodoList,
        MedicatieList
    },
    methods: {
        clickLink() {
            this.$router.push({path: this.behandeling.id + '/medicatie'});
        }
    },
    created() {
            this.$store.commit('CHANGE_CURRENT_BEHANDELING', this.$route.params.typeBehandeling);
    },
    computed: {
        behandeling() {
            return this.$store.getters.getBehandeling
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
    }
</style>
