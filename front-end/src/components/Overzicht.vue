<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">Overzicht</p>
            <todo-list :todoType="'overzicht'"></todo-list>
            <medicatie-list :medicatie="medicatie"></medicatie-list>
        </div>
    </div>
</template>

<script>
import TodoList from './TodoList.vue';
import MedicatieList from './MedicatieList';

import { mapActions } from 'vuex';

export default {
    name: 'overzicht',
    components: {
        TodoList,
        MedicatieList
    },
    computed: {
        medicatie() {
            return this.$store.getters.getAllMedicatie;
        }
    },
    methods: {
        fetchPatientData() {
            this.$store.dispatch('FETCH_PATIENT');
        }
    }
}
</script>

<style lang="scss">

</style>
