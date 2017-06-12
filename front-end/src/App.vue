<template>
    <div id="q-app">
        <q-layout>
            <top-header v-if="this.$route.path !== '/login'" slot="header"></top-header>
            <navigation v-if="this.$route.path === '/behandeling' || this.$route.path === '/'" slot="navigation"></navigation>
            <router-view v-if="!isFetching"></router-view>
            <spinner class="loading" v-if="isFetching" color="#e74c3c" name="tail"></spinner>
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

<style lang="scss">
    .layout-padding {
        padding-top: 0;
    }

    .card {
        margin-bottom: 15px;
    }

    .loading {
        margin: 5rem auto;
    }
</style>
