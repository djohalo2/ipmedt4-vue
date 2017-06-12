<template>
    <div class="card bg-white">
        <div class="card-title">
            Patiënten overzicht
        </div>

        <div class="card-content">
            <q-search v-model="patientSearch" class="searchbar"></q-search>

            <div class="list">
                <dashboard-patient-card v-if="index < 3" v-for="(patient, index) in searchedPatients" :key="patient.id" :id="patient.id" :city="patient.city" :name="patient.name" :avatar="patient.avatar" :phone="patient.phone"></dashboard-patient-card>
            </div>

            <q-pagination class="patient-pagination" v-model="patientPage" :max="Math.round(searchedPatients.length / 3)"></q-pagination>
        </div>
    </div>
</template>

<script>
import DashboardPatientCard from './DashboardPatientCard.vue';
import _ from 'lodash';

export default {
    name: 'dashboard-patienten',
    data(){
        return {
            patientSearch: "",
            patientPage: 1,
            patienten: [
                {
                    name: "Djovanni Tehubijuluw",
                    id: 1,
                    avatar: "http://www.sheffield.com/wp-content/uploads/2013/06/placeholder.png",
                    phone: "06-15022236",
                    city: "Hoofddorp"
                },
                {
                    name: "Bas van Bovene",
                    id: 2,
                    avatar: "http://www.sheffield.com/wp-content/uploads/2013/06/placeholder.png",
                    phone: "06-15022236",
                    city: "Leiden"
                },
                {
                    name: "Sem Ekkelboom",
                    id: 3,
                    avatar: "http://www.sheffield.com/wp-content/uploads/2013/06/placeholder.png",
                    phone: "06-15022236",
                    city: "Zoeterwoude"
                },
                {
                    name: "Jeroen de Meij",
                    id: 4,
                    avatar: "http://www.sheffield.com/wp-content/uploads/2013/06/placeholder.png",
                    phone: "06-15022236",
                    city: "Leiden"
                }
                ,
                {
                    name: "Robbert Winkel",
                    id: 5,
                    avatar: "http://www.sheffield.com/wp-content/uploads/2013/06/placeholder.png",
                    phone: "06-15022236",
                    city: "Leiden"
                }
            ]
        }
    },
    computed: {
        searchedPatients() {
            if(this.patientSearch !== ""){
                let patients = [];
                this.patienten.map(patient => {
                    if(_.includes(patient.name.toLowerCase(), this.patientSearch.toLowerCase())){
                        patients.push(patient);
                    }
                });
                return patients;
            } else {
                return this.patienten;
            }
        }
    },
    components: {
        DashboardPatientCard
    }
}
</script>

<style lang="scss" scoped>

    .searchbar {
        margin-bottom: 1rem;
    }

    .list {
        border-bottom: none;
    }

    .patient-pagination {
        margin: auto;
    }
</style>
