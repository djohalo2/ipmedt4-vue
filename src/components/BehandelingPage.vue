<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">{{currentBehandeling.title}}</p>
            <div class="card">
                <div class="card-title">
                    <p class="text-primary">TODO</p>

                    <ul>
                        <todo v-for="todo in currentBehandeling.todos" :name="todo.naam" :date="todo.date" :completed="todo.completed"></todo>
                    </ul>

                    <q-progress
                      :percentage="todoProgress"
                      style="height: 4px"
                    ></q-progress>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from 'vue-router';
var _ = require('lodash');

import Todo from './Todo.vue';

export default {
    name: 'behandeling-page',
    components: {
        Todo
    },
    data() {
        return {
            typeBehandeling: this.$route.params.typeBehandeling,
            progress: 70,
            testBehandelingen: [
                {
                    id: "botbreuk-been",
                    title: "Botbreuk been",
                    description: "Een botbreuk in het been opgelopen.",
                    date: "26-05-2017",
                    todos: [
                        {
                            naam: "Medicijn nemen",
                            date: "28-05-2017",
                            completed: true
                        },
                        {
                            naam: "Oefening doen",
                            date: "28-05-2017",
                            completed: false
                        }
                    ]
                },
                {
                    id: "blaasontsteking",
                    title: "Blaasontsteking",
                    description: "Een blaasontsteking naar aanleiding van bacterie.",
                    date: "07-03-2017",
                    todos: [
                        {
                            naam: "Antibiotica innemen",
                            date: "28-05-2017",
                            completed: false
                        },
                        {
                            naam: "Afspraak maken",
                            date: "28-05-2017",
                            completed: true
                        },
                        {
                            naam: "Pijnstillers nemen",
                            date: "28-05-2017",
                            completed: false
                        }
                    ]
                }
            ]
        }
    },
    computed: {
        currentBehandeling() {
            return _.filter(this.testBehandelingen, ['id', this.typeBehandeling])[0];
        },
        todoProgress() {
            let totalTodos = this.currentBehandeling.todos.length;
            let completedTodos = _.filter(this.currentBehandeling.todos, ['completed', true]).length;

            return (completedTodos / totalTodos) * 100;
        }
    },
    created() {
        console.log(this.$route.params.typeBehandeling);
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
