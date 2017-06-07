<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">Oefeningen</p>

            <div class="card" v-for="oefening in oefeningen">
                <div class="card-title">
                    {{oefening.title}}
                </div>
                <div class="card-content">
                    <button class="button outline text-primary float-right">Bekijk</button>
                    <p>Aantal setjes: {{oefening.aantalSetjes}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'overzicht',
    computed: {
        oefeningen() {
            return this.$store.getters.getAllOefeningen;
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
