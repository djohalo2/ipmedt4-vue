<template>
    <div id="q-app">
        <q-layout>
          <top-header v-if="!this.$route.path.includes('/arts')" slot="header"></top-header>
          <navigation v-if="this.$route.path === '/behandeling' || this.$route.path === '/patientinformatie' || this.$route.path === '/' || !this.$route.path.includes('/arts')" slot="navigation"></navigation>
          <arts-top-header v-if="this.$route.path.includes('/arts')" slot="header"></arts-top-header>
          <router-view></router-view>
        </q-layout>
    </div>
</template>

<script>
import TopHeader from 'components/Header.vue';
import Navigation from 'components/Navigation.vue';
import ArtsTopHeader from 'components/arts/ArtsHeader.vue';

export default {
    components: {
        TopHeader,
        Navigation,
        ArtsTopHeader
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
