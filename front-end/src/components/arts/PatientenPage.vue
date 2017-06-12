<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">{{patient.voornaam + " " + patient.achternaam}}</p>

            <div class="card">
                <div class="card-title">
                    <p class="text-primary">Gegevens:</p>
                    <img class="profile-img" :src="patient.foto">
                    <p>Voornaam: {{patient.voornaam}}<br>
                    Achternaam: {{patient.achternaam}}<br>
                    Telefoon: {{patient.telefoon}}<br>
                    Email: {{patient.email}}</p>
                </div>
            </div>
            <div class="card">
                <div class="card-title">
                    <p class="text-primary">Notities:</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from 'vue-router';


export default {
    name: 'patienten-page',
    computed: {
        patient() {
            return this.$store.getters.getPatientInfo
        },
        notities() {
            return this.$store.getters.getNotities
        }
    }
}
</script>

<style lang="scss" scoped>
    .profile-img {
      margin: 0 auto;
      border-radius: 50%;
      width:100px;
      display: block;
    }

    .no-entries-msg {
        font-size: 0.85rem;
        font-weight: 500;
        color: #a8a8a8;
    }

    span {
        color: #fff;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 13px;
    }
</style>
