<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">Overzicht</p>
            <todo-list :todoType="'overzicht'"></todo-list>
            <medicatie-list :medicatie="medicatie"></medicatie-list>
            <oefeningen-list :oefeningen="oefeningen"></oefeningen-list>
        </div>
    </div>
</template>

<script>
import TodoList from './TodoList.vue';
import MedicatieList from './MedicatieList';
import OefeningenList from './OefeningenList';

import { mapActions } from 'vuex';

export default {
    name: 'overzicht',
    components: {
        TodoList,
        MedicatieList,
        OefeningenList
    },
    computed: {
        medicatie() {
            return this.$store.getters.getAllMedicatie;
        },
        oefeningen() {
          return this.$store.getters.getAllOefeningen;
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
