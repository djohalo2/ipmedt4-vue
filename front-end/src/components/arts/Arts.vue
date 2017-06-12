<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">Arts pagina</p>
            <p>Hier komt straks allemaal mooie ding</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'arts',
    components: {
    },
    computed: {
        medicatie() {
            return this.$store.getters.getAllMedicatie;
        }
    }
}
</script>

<style lang="scss">

</style>
