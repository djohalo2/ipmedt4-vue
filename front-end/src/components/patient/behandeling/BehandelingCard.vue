<template>
        <div class="card" v-on:click="cardClick">
            <span class="chip label bg-primary text-white float-right">
                <i>group</i>
                {{bodyparts}}
            </span>
            <div class="card-title">
                {{title}}
            </div>
            <div class="card-date">
                <i>access_time</i>
                Behandeling loopt vanaf {{date}}
            </div>
            <div class="card-content">
                
            </div>
            <!-- <button class="primary clear">Bekijk</button> -->
        </div>
</template>

<script>
import router from 'vue-router';

export default {
    name: 'behandeling-card',
    props: ['id', 'title', 'bodyparts', 'date'],
    methods: {
        cardClick() {
            this.$router.push({path: 'behandeling/' + this.id});
        }
    }
}
</script>

<style lang="scss">
    .card-title, .card-content {
        padding: 0.7rem 0rem;
    }

    .chip.label {
        margin-top: 0.7rem;
        font-size: 0.8rem;
        height: 26px;

        i {
            margin-right: 0.5rem;
        }
    }

    .card {
        padding: 0rem 1rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.22), 0 3px 2px rgba(0,0,0,0.05);
        background-color: #fff;

        .card-title {
            font-size: 1rem;
        }

        .card-content {
            font-size:0.9rem;
        }

        .card-date {
            color: grey;
            font-size: 0.8rem;
        }

        button {
            padding: 0;
        }
    }

</style>
