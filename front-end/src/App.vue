<template>
    <div id="q-app">
        <q-layout>
            <top-header slot="header"></top-header>
            <navigation v-if="this.$route.path === '/behandeling' || this.$route.path === '/patientinformatie' || this.$route.path === '/'" slot="navigation"></navigation>
            <router-view v-if="!isFetching"></router-view>
            <h1 v-if="isFetching">BEN AN HET LADEN</h1>
        </q-layout>
    </div>
</template>

<script>
import TopHeader from 'components/Header.vue';
import Navigation from 'components/Navigation.vue';

import { LocalStorage } from 'quasar';
import router from 'vue-router';

export default {
    components: {
        TopHeader,
        Navigation
    },
    computed: {
        isFetching(){
            return this.$store.getters.isFetching;
        }
    },
    beforeCreate(){
        console.log("BEFORE CREATE");
        if(LocalStorage.get.item('token')){
            this.$store.commit('TOGGLE_IS_FETCHING');
            this.$store.dispatch('CHECK_TOKEN').then(() => {
                this.$store.dispatch('FETCH_PATIENT').then(() => {
                    console.log("Patient gefetched!!!");
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

<style>
    .layout-padding {
        padding-top: 0;
    }

    .card {
        margin-bottom: 15px;
    }
</style>
