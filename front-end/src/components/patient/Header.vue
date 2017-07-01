<template>
    <div class="toolbar">
        <drawer></drawer>

        <q-toolbar-title>
            <span class="bold">mijn</span><span class="light">nazorg.nl</span>
        </q-toolbar-title>

        <button ref="target" class="hide-on-drawer-visible">
            <i>more_vert</i>
            <q-popover ref="popover" max-height="500px" self="top right" anchor="top right">
                <div class="list highlight">
                    <div
                        class="item item-link"
                        @click="$router.push({path: '/patientinformatie'}), $refs.popover.close()"
                    >
                    <button>Gegevens</button>
                    </div>

                    <div
                        class="item item-link"
                        @click="logOut(), $refs.popover.close()"
                    >
                    <button>Uitloggen</button>
                    </div>
                </div>
            </q-popover>
        </button>
    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import Drawer from './Drawer.vue';

import router from 'vue-router';

export default {
    name: 'top-header',
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
        },
        logOut(){
            this.$store.commit('LOG_OUT');
            this.$router.push({path: '/login'});
        }
    }
}
</script>

<style lang="scss" scoped>
    .list {
        margin: 0;
    }

    .bold {
        font-weight: 800;
    }

    .light {
        font-weight: 300;
    }
</style>
