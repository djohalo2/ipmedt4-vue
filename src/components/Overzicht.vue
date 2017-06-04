<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">Overzicht</p>
            <todo-list :todoType="'overzicht'"></todo-list>
        </div>
    </div>
</template>

<script>
import TodoList from './TodoList.vue';

export default {
    name: 'overzicht',
    components: {
        TodoList
    }
}
</script>

<style lang="scss">

</style>
