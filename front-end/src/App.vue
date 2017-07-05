<template>
    <div id="q-app">
        <q-layout>
            <top-header v-if="this.$route.path !== '/login' && !this.$route.path.includes('/arts')" slot="header"></top-header>
            <navigation v-if="this.$route.path === '/behandeling' || this.$route.path === '/'" slot="navigation"></navigation>
            <notitie-tabs v-if="this.$route.path === '/notities' || this.$route.path === '/notities-arts'" slot="navigation"></notitie-tabs>
            <arts-top-header v-if="this.$route.path.includes('/arts')" slot="header"></arts-top-header>
            <arts-drawer v-if="this.$route.path.includes('/arts')"></arts-drawer>
            <router-view v-if="!isFetching"></router-view>
            <spinner class="loading" v-if="isFetching" color="#e74c3c" name="tail"></spinner>
        </q-layout>
    </div>
</template>

<script>
import TopHeader from 'components/patient/Header.vue';
import Navigation from 'components/patient/Navigation.vue';
import ArtsTopHeader from 'components/arts/ArtsHeader.vue';
import ArtsDrawer from 'components/arts/ArtsDrawer.vue';
import NotitieTabs from 'components/patient/notities/NotitieTabs.vue';

import { LocalStorage } from 'quasar';
import router from 'vue-router';

export default {
    components: {
        TopHeader,
        Navigation,
        ArtsTopHeader,
        ArtsDrawer,
        NotitieTabs
    },
    computed: {
        isFetching(){
            return this.$store.getters.isFetching;
        }
    },
    beforeCreate(){
        if(LocalStorage.get.item('token')){
            this.$store.commit('TOGGLE_IS_FETCHING');
            this.$store.dispatch('CHECK_TOKEN').then(() => {
                this.$store.dispatch('FETCH_PATIENT').then(() => {

                });
            });
        }
    },
    beforeUpdate(){
        if(LocalStorage.get.item('token') === null){
            this.$router.push({path: '/login'});
        }else {
            this.$store.dispatch('CHECK_TOKEN');
        }
    }
}
</script>

<style lang="scss">
    .layout-padding {
        padding-top: 0;
    }

    .card {
        margin-bottom: 15px;
        background-color: #fff;
    }

    .loading {
        margin: 5rem auto;
    }

    .layout-view {
        background-color: #F6F6F6;
    }

    .page-title {
        font-size:0.85rem;
        font-weight: 500;
        color: #a8a8a8;
        margin: 0.5rem 0;
    }

    .add-icon {
        font-size:24px;
        cursor: pointer;
    }

    .no-entries-msg {
        font-size: 0.85rem;
        font-weight: 400;
        color: #a8a8a8;
    }

</style>
