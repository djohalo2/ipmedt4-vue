<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">Geregistreerde patienten</p>
            <patient-card :id="patienten.id" :voornaam="patienten.voornaam" :achternaam="patienten.achternaam" :email="patienten.email" :telefoon="patienten.telefoon" :geboortedatum="patienten.geboortedatum" :foto="patienten.foto"></patient-card>
        </div>
    </div>
</template>

<script>
import PatientCard from './PatientCard.vue';

export default {
    name: 'patienten',
    components: {
        PatientCard
    },
    computed: {
        patienten(){
            return this.$store.getters.getPatientInfo
        }
    }
}
</script>

<style lang="styl">
    .layout-view {
        background-color: #F6F6F6;
    }

    .page-title {
        font-size:0.85rem;
        font-weight: 500;
        color: #a8a8a8;
        margin: 0.5rem 0;
    }
</style>
