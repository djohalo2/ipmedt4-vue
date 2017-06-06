<template>
    <div class="toolbar">
        <!-- v-if="this.$route.path !== '/behandeling' && this.$route.path !== '/patientinformatie' && this.$route.path !== '/'" -->
        <drawer></drawer>

        <q-toolbar-title>
            IPMEDT4
        </q-toolbar-title>

        <q-search v-on-clickaway="closeSearch" v-if="searching" v-model="searchText" placeholder="Zoeken"></q-search>

        <button v-if="!searching" v-on:click="searching = !searching" class="hide-on-drawer-visible">
            <i>search</i>
        </button>

        <!-- <button class="hide-on-drawer-visible">
            <i>more_vert</i>
        </button> -->
    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import Drawer from './ArtsDrawer.vue';

export default {
    name: 'arts-top-header',
    components: {
        Drawer
    },
    mixins: [ clickaway ],
    data() {
        return {
            searching: false,
            searchText: ""
        }
    },
    methods: {
        closeSearch(){
            this.searching = false;
        }
    }
}
</script>

<style lang="styl">

</style>
