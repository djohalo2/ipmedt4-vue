<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">{{behandeling.title}}</p>
            <todo-list></todo-list>
            <button class="primary" @click="clickLink()">
              Test
            </button>
        </div>
    </div>
</template>

<script>
import router from 'vue-router';

import TodoList from './TodoList.vue';

export default {
    name: 'behandeling-page',
    components: {
        TodoList
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

<style lang="styl" scoped>

</style>
