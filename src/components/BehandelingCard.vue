<template>
        <div class="card" v-on:click="cardClick">
            <div class="card-title">
                {{title}}
            </div>
            <div class="card-date">
                <i>access_time</i>
                Behandeling loopt vanaf {{date}}
            </div>
            <div class="card-content">
                {{content}}
            </div>
        </div>
</template>

<script>
export default {
    name: 'behandeling-card',
    props: ['title', 'content', 'date'],
    methods: {
        cardClick() {
            alert("has been clicked!");
        }
    }
}
</script>

<style lang="styl">
    .card-title, .card-content {
        padding: 0.7rem 0rem;
    }

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

    .card {
        padding: 0rem 1rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.22), 0 3px 2px rgba(0,0,0,0.05);
        background-color: #fff;
    }

</style>
