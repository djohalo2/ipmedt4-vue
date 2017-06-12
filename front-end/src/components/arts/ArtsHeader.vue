<template>
    <div class="toolbar">
        <!-- v-if="this.$route.path !== '/behandeling' && this.$route.path !== '/patientinformatie' && this.$route.path !== '/'" -->
        <q-drawer id="drawer" ref="drawer">
            <div class="toolbar light">
              <q-toolbar-title :padding="1">
                  ARTS TEST
              </q-toolbar-title>
            </div>

            <div class="list no-border platform-delimiter">
              <q-drawer-link icon="home" to="/arts" exact>
                Home
              </q-drawer-link>
              <hr>
              <div class="list-label">Opties</div>
              <!-- <q-drawer-link icon="view_list" :to="'/behandeling/' + behandelingType">
                Overzicht
              </q-drawer-link> -->
              <q-drawer-link icon="assignment" :to="'/arts/Patienten'">
                Patienten
              </q-drawer-link>
              <q-drawer-link icon="event" :to="'/arts/Afspraken'">
                Afspraken
              </q-drawer-link>
              <q-drawer-link icon="assignment" :to="'/arts/medicatie'">
                Medicatie
              </q-drawer-link>
              <q-drawer-link icon="insert_drive_file" :to="'/arts/Informatie'">
                Informatie
              </q-drawer-link>
            </div>
        </q-drawer>

        <button class="drawer-button hide-on-drawer-visible" @click="$refs.drawer.open()">
            <i>menu</i>
        </button>

        <q-toolbar-title class="header-title">
            <span class="bold">mijn</span><span class="light">nazorg.nl</span>
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
// import Drawer from './ArtsDrawer.vue';

export default {
    name: 'arts-top-header',
    components: {
        // Drawer
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

<style lang="scss" scoped>

    .header-title {
        position: absolute;
        left: 40px;

        .light {
            font-weight:300;
        }

        .bold {
            font-weight: 800;
        }
    }

    .drawer-button {
        position: absolute;
    }
</style>
