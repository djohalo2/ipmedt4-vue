<template>
    <div id="q-app">
            <top-header></top-header>
            <router-view></router-view>
    </div>
</template>

<script>
import TopHeader from 'components/Header.vue';

export default {
    components: {
        TopHeader
    }
}
</script>

<style></style>
