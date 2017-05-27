<template>
    <div id="q-app">
            <top-header></top-header>
            <navigation></navigation>
            <router-view></router-view>
    </div>
</template>

<script>
import Navigation from 'components/Navigation.vue';
import TopHeader from 'components/Header.vue';

export default {
    components: {
        Navigation,
        TopHeader
    }
}
</script>

<style></style>
