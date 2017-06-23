<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">ARTS NOTITIES</p>
            <p class="no-entries-msg" v-if="artsNotities.length === 0">
                Er zijn geen notities gevonden.
            </p>

            <div v-if="artsNotities.length > 0" class="list item-delimiter">
                <q-collapsible group="notities" v-for="notitie in artsNotities" :label="notitie.title">
                    <div>
                        <p>{{notitie.note}}</p>
                    </div>
                </q-collapsible>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'arts-notitie-page',
    computed: {
        artsNotities() {
            return this.$store.getters.getArtsNotities
        },
        patientId() {
            return this.$store.getters.getPatientId
        }

    }
}
</script>

<style lang="scss" scoped>
    .list {
        background-color: #fff;
        margin-top: 1.2rem;
    }

    button {
        margin: 1rem;
        box-shadow: 0 10px 20px rgba(0,0,0,0.12), 0 4px 5px rgba(0,0,0,0.13);
    }

    .no-entries-msg {
        color: #a8a8a8;
    }
</style>
