<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">{{medicijn.title}}</p>
        </div>
    </div>
</template>

<script>
import router from 'vue-router';

import TodoList from './TodoList.vue';

export default {
    name: 'medicatie-page',
    components: {
        TodoList
    },
    created() {
            this.$store.commit('CHANGE_CURRENT_MEDICIJN', this.$route.params.typeMedicijn);
    },
    computed: {
        medicijn() {
            return this.$store.getters.getMedicijn
        }
    }
}
</script>

<style lang="styl" scoped>

</style>
