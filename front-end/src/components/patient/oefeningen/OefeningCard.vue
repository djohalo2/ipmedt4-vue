<template>
    <div class="card" @click="cardClick">
        <div class="card-title">
            {{title}}
        </div>
        <div class="card-content">
            <button class="button outline text-primary float-right">Bekijk</button>
            <p>{{description}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'oefening-card',
    props: ['title', 'description', 'therapy', 'id'],
    methods: {
        cardClick() {
            this.$router.push({path: '/behandeling/' + this.therapy + '/oefeningen/' + this.id});
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {

        .card-content {
            padding: 0;

            p {
                font-size: 14px;
            }
        }
    }
</style>
