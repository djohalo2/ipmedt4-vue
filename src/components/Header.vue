<template>
    <div class="toolbar">
        <drawer v-if="this.$route.path !== '/behandeling' && this.$route.path !== '/patientinformatie'"></drawer>

        <q-toolbar-title>
            IPMEDT4
        </q-toolbar-title>

        <button class="hide-on-drawer-visible">
            <i>search</i>
        </button>

        <button class="hide-on-drawer-visible">
            <i>more_vert</i>
        </button>
    </div>
</template>

<script>
import Drawer from './Drawer.vue';

export default {
    name: 'top-header',
    components: {
        Drawer
    }
}
</script>

<style lang="styl">

</style>
