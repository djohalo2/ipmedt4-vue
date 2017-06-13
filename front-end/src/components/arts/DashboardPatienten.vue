<template>
    <div class="card bg-white">
        <div class="card-title">
            <i class="float-right add-icon" @click="$refs.addPatientModal.open()">add_circle</i>
            Patiënten overzicht
        </div>

        <q-modal ref="addPatientModal" class="minimized patient-modal" :content-css="{padding: '50px'}">
            <p>Patient toevoegen</p>
            <div class="row">
                <div class="auto">
                    <q-select
                        class="gender-select"
                        type="radio"
                        v-model="newPatient.gender"
                        :options="genders"
                    ></q-select>
                </div>
            </div>
            <div class="row small-gutter">
                <div class="width-1of2">
                    <input v-model="newPatient.firstname" placeholder="Voornaam">
                </div>

                <div class="width-1of2">
                    <input v-model="newPatient.lastname" placeholder="Achternaam">
                </div>
            </div>
            <div class="row">
                <div class="auto">
                    <input v-model="newPatient.email" placeholder="E-mail">
                </div>
            </div>
            <div class="row">
                <div class="auto">
                    <input v-model="newPatient.phone" placeholder="Telefoon">
                </div>
            </div>
            <div class="row">
                <div>
                    <q-datetime
                        class="patient-datepicker"
                        v-model="newPatient.birthday"
                        type="date"
                        placeholder="2017-6-13"
                    ></q-datetime>
                </div>
            </div>
            <div class="row small-gutter">
                <div class="width-3of4">
                    <input v-model="newPatient.street" placeholder="Straat">
                </div>
                <div class="width-1of4">
                    <input v-model="newPatient.streetnumber" placeholder="Nummer">
                </div>
            </div>
            <div class="row small-gutter">
                <div class="width-1of2">
                    <input v-model="newPatient.postalcode" placeholder="Postcode">
                </div>
                <div class="width-1of2">
                    <input v-model="newPatient.city" placeholder="Stad">
                </div>
            </div>

            <button class="red" @click="addPatient">Toevoegen</button>
        </q-modal>

        <div class="card-content">

            <q-search v-model="patientSearch" placeholder="Zoek patiënten..." class="searchbar"></q-search>

            <div class="list">
                <dashboard-patient-card v-if="index > (patientPage * 3 - 4) && index < (patientPage * 3)" v-for="(patient, index) in searchedPatients" :key="patient.id" :id="patient.id" :city="patient.city" :name="patient.firstname + ' ' + patient.lastname" :avatar="patient.avatar" :phone="patient.phone"></dashboard-patient-card>
            </div>

            <q-pagination class="patient-pagination" v-model="patientPage" :max="Math.round(searchedPatients.length / 3)"></q-pagination>
        </div>
    </div>
</template>

<script>
import DashboardPatientCard from './DashboardPatientCard.vue';
import _ from 'lodash';
import moment from 'moment';

export default {
    name: 'dashboard-patienten',
    data(){
        return {
            patientSearch: "",
            genders: [{
                label: 'Man',
                value: 'm'
              },
              {
                label: 'Vrouw',
                value: 'v'
              }
            ],
            newPatient: {
                gender: "",
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                birthday: "",
                street: "",
                streetnumber: "",
                postalcode: "",
                city: ""
            },
            patientPage: 1
        }
    },
    computed: {
        searchedPatients() {
            if(this.patientSearch !== ""){
                let patients = [];
                this.patienten.map(patient => {
                    if(_.includes(patient.firstname.toLowerCase(), this.patientSearch.toLowerCase()) || _.includes(patient.lastname.toLowerCase(), this.patientSearch.toLowerCase())){
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
    },
    methods: {
        addPatient(){
            this.$store.dispatch("ADD_PATIENT", this.newPatient);
            this.$refs.addPatientModal.close();
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

    .add-icon {
        font-size:24px;
        cursor: pointer;
    }

    input, .patient-datepicker, .gender-select {
        width: 100%;
    }

    .patient-modal {
        .row {
            margin-bottom: 0.5rem;
        }

        button {
            margin: 0 auto;
            display: block;
        }
    }


</style>
