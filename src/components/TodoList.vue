<template>
    <div class="card">
        <div class="card-title">
            <p class="text-primary">TODO</p>

            <ul>
                <todo v-for="todo in behandeling.todos" :name="todo.naam" :date="todo.date" :completed="todo.completed"></todo>
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
    components: {
        Todo
    },
    computed: {
        behandeling() {
            return this.$store.getters.getBehandeling
        },
        todoProgress() {
            let totalTodos = this.behandeling.todos.length;
            let completedTodos = _.filter(this.behandeling.todos, ['completed', true]).length;

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
