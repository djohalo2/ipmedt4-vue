<template>
    <q-modal class="minimized patient-modal" :content-css="{padding: '50px'}">
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
                    min="1900-3-10"
                ></q-datetime>
                <!-- Violet Brown <3 -->
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
</template>

<script>
import _ from 'lodash';
import moment from 'moment';

export default {
    name: 'dashboard-patient-modal',
    data(){
        return {
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
    methods: {
        addPatient(){
            this.$store.dispatch("ADD_PATIENT", this.newPatient);
            this.$refs.addPatientModal.close();
        }
    }
}
</script>

<style lang="scss" scoped>
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
