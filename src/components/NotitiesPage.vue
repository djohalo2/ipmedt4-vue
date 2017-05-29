<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">NOTITIES</p>
            <p class="no-entries-msg" v-if="notities.length === 0">
                Er zijn geen notities gevonden.
            </p>
            <div v-if="notities.length > 0" class="list item-delimiter">
                <q-collapsible v-for="notitie in notities" group="somegroup" :label="notitie.title">
                    <div>
                        <p>{{notitie.content}}</p>
                    </div>
                </q-collapsible>
            </div>
            <button class="primary big circular fixed-bottom-right"><i>note_add</i></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'notitie-page',
    computed: {
        notities() {
            return this.$store.getters.getNotities
        }
    }
}
</script>

<style scoped>
    .list {
        background-color: #fff;
    }

    button {
        margin: 1rem;
        box-shadow: 0 10px 20px rgba(0,0,0,0.12), 0 4px 5px rgba(0,0,0,0.13);
    }

    .no-entries-msg {
        color: #a8a8a8;
    }
</style>
