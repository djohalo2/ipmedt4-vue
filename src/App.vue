<template>
    <div id="q-app">
        <q-layout>
            <top-header slot="header"></top-header>
            <navigation v-if="this.$route.path === '/behandeling' || this.$route.path === '/patientinformatie' || this.$route.path === '/'" slot="navigation"></navigation>
            <router-view></router-view>
        </q-layout>
    </div>
</template>

<script>
import TopHeader from 'components/Header.vue';
import Navigation from 'components/Navigation.vue';

export default {
    components: {
        TopHeader,
        Navigation
    }
}
</script>

<style>
    .layout-padding {
        padding-top: 0;
    }

    .card {
        margin-bottom: 15px;
    }
</style>
