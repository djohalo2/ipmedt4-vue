<template>
    <div class="card">
        <div class="card-title">
            <p class="text-primary">TODOS VANDAAG</p>
            <ul>
                <todo v-if="todoType === 'overzicht'" v-for="todo in todos" :key="todo.id" :id="todo.id" :type="getTodoType(todo)" :name="getTodoName(todo)" :date="todo.time_date" :completed="!!todo.done"></todo>
            </ul>
            <q-progress :percentage="todoProgress" style="height: 4px"></q-progress>
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
    methods: {
      getTodoName (todo) {
        if ('medicine' in todo) {
          return todo.medicine.name;
        }
        if ('excercise' in todo) {
          return todo.excercise.title;
        }
      },
      getTodoType (todo) {
        if ('medicine' in todo) {
          return 'medicine_todo';
        }
        if ('excercise' in todo) {
          return 'excercise_todo';
        }
      }
    },
    computed: {
        todos() {
          return this.$store.getters.getAllTodos;
        },
        todoProgress() {
          let totalTodos = this.todos.length;
          let completedTodos = _.filter(this.todos, ['done', 1]).length;

          return (completedTodos / totalTodos) * 100;
        }
    }

}
</script>

<style lang="scss" scoped>
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
</style>
