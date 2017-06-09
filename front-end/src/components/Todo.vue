<template>
    <div>
        <li v-on:click="toggleTodo">
            <q-checkbox v-model="completed" @input="toggleTodo"></q-checkbox>
            <p class="todo-name" v-bind:class="{completed: completed}">{{name}}</p>
            <p class="todo-date">{{date}}</p>
        </li>
        <hr>
    </div>
</template>

<script>


export default {
    name: 'todo',
    props: ['id', 'name', 'date', 'completed'],
    data() {
        return {
            checked: false
        }
    },
    methods: {
        toggleTodo() {
            let data = {
                id: this.id,
                completed: this.completed
            }
            this.$store.dispatch('TOGGLE_TODO', data);
        }
    }

}
</script>

<style lang="styl" scoped>
    li > * {
        display: inline-block;
        margin-right: 0.5rem;
    }

    li {
        padding: 0.9rem;
    }

    p {
        margin: 0;
    }

    .completed {
        text-decoration: line-through;
        color: #a8a8a8;
    }

    .todo-date {
        float:right;
        color: #a8a8a8;
        font-weight: 400;
        font-size: 0.8rem;
    }

    hr {
        height: 1px;
        color: #e3e3e3;
        background: #e3e3e3;
        font-size: 0;
        border: 0;
    }

    .todo-name {
        font-size: 14px;
    }

</style>
