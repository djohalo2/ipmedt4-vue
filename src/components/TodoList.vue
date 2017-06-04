<template>
    <div class="card">
        <div class="card-title">
            <p class="text-primary">TODO</p>

            <ul>
                <todo v-if="todoType === 'behandeling'" v-for="todo in behandeling.todos" :name="todo.naam" :date="todo.date" :completed="todo.completed"></todo>
                <todo v-if="todoType === 'overzicht'" v-for="todo in behandeling" :name="todo.naam" :date="todo.date" :completed="todo.completed"></todo>
            </ul>

            <q-progress
              :percentage="todoProgress"
              style="height: 4px"
            ></q-progress>
        </div>
    </div>
</template>

<script>
import router from 'vue-router';
var _ = require('lodash');

import Todo from './Todo.vue';

export default {
    name: 'todo-list',
    props: ['todoType'],
    components: {
        Todo
    },
    computed: {
        behandeling() {
            if(this.todoType === "behandeling"){
                return this.$store.getters.getBehandeling;
            } else {
                return this.$store.getters.getAllTodos;
            }

        },
        todoProgress() {
            let totalTodos = 0;
            let completedTodos = 0;

            if(this.todoType === "behandeling"){
                totalTodos = this.behandeling.todos.length;
                completedTodos = _.filter(this.behandeling.todos, ['completed', true]).length;
            } else {
                totalTodos = this.behandeling.length;
                completedTodos = _.filter(this.behandeling, ['completed', true]).length;
            }

            return (completedTodos / totalTodos) * 100;
        }
    }

}
</script>

<style lang="styl" scoped>
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
</style>
