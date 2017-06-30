<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">{{oefening.title}}</p>

            <div class="card">
                <q-video
                    :src="oefening.video.url"
                ></q-video>
                <div class="card-content">
                    <p>{{oefening.title}}</p>
                    <p>{{oefening.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from 'vue-router';

export default {
    name: 'oefening-page',
    created() {
        this.$store.commit('CHANGE_CURRENT_OEFENING', this.$route.params.typeOefening);
    },
    computed: {
        oefening() {
            return this.$store.getters.getOefening
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        padding: 0;

        .card-content {
            padding: 1rem;
        }
    }
</style>
