<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">Geregistreerde patienten</p>
            <q-search v-model="patientSearch" placeholder="Zoek patiënten..." class="searchbar"></q-search><br>
            <patient-card v-for="patient in searchedPatients" :key="patient.id" :id="patient.id" :firstname="patient.firstname" :lastname="patient.lastname" :email="patient.email" :phone="patient.phone" :birthday="patient.birthday" :avatar="patient.avatar"></patient-card>
        </div>
    </div>
</template>

<script>
import PatientCard from './PatientCard.vue';

export default {
    name: 'patienten',
    data() {
      return {
        patientSearch: ""
      }
    },
    components: {
        PatientCard
    },
    computed: {
        searchedPatients() {
            if(this.patientSearch !== ""){
                let patients = [];
                this.patienten.map(patient => {
                    if(_.includes(patient.firstname.toLowerCase(), this.patientSearch.toLowerCase()) ||
                       _.includes(patient.lastname.toLowerCase(), this.patientSearch.toLowerCase()) ||
                       _.includes(patient.email.toLowerCase(), this.patientSearch.toLowerCase()) ||
                       _.includes(patient.phone, this.patientSearch) ||
                       _.includes(patient.birthday, this.patientSearch)){
                        patients.push(patient);
                    }
                });
                return patients;
            } else {
                return this.patienten;
            }
        },
        patienten() {
            return this.$store.getters.getPatients;
        }
    }
}
</script>

<style lang="scss" scoped>
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
