<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">Oefeningen</p>
        </div>
        <div class="list">
            <div class="item" v-for="oefening in oefeningen">
                <hr>
                <div class="item-content">
                    {{oefening.title}}
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
    .list {
        background-color: #fff;

        .item:first-child hr {
            visibility: hidden;
        }
    }
</style>
