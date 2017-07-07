<template>
    <div class="layout-view">

      <div class="card patient-search">
        <div class="card-title">
            <p class="page-title">Geregistreerde patienten</p>
            <q-search v-model="patientSearch" placeholder="Zoek patiënten..." class="searchbar"></q-search><br>
        </div>
      </div>

        <div class="layout-padding">
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

    .layout-padding {
      padding-top: 1rem;
    }

    .page-title {
      color: #e74c3c !important;
    }

    .patient-search {
      background-image: url('../../../statics/patienten.jpg');
      -webkit-background-size: cover;
      background-size: cover;
      background-position: center;

    .searchbar {
      max-width: 500px;
      margin: 0 auto;
      line-height: 15vh;
      background: none;
      padding-bottom: 2.5vh;
    }
    }

    .loading-spinner {
      margin: 0 auto;
      display: block;
    }
</style>
