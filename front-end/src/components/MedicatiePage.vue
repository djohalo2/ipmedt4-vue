<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">{{medicijn.title}}</p>
        </div>
    </div>
</template>

<script>
import router from 'vue-router';

export default {
    name: 'medicatie-page',
    created() {
        console.log("hello");
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
