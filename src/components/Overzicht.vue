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
    }
}
</script>

<style lang="scss">

</style>
