<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">{{patient.firstname + " " + patient.lastname}}</p>

            <div class="card">
                <div class="card-title">
                    <p class="text-primary">Gegevens:</p>
                    <img class="profile-img" :src="patient.avatar">
                    <p>Voornaam: {{patient.firstname}}<br>
                    Achternaam: {{patient.lastname}}<br>
                    Telefoon: {{patient.phone}}<br>
                    Email: {{patient.email}}</p>
                </div>
            </div>
            <div class="card">
                <div class="card-title">
                    <p class="text-primary">Behandelingen:</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from 'vue-router';


export default {
    name: 'patienten-page',
    data() {
        return {
            patientId: 0
        }
    },
    computed: {
        patients() {
            return this.$store.getters.getPatients
        },
        notities() {
            return this.$store.getters.getNotities
        },
        patient() {
            for(let patient in this.patients) {
                if (this.patients[patient].id == this.$route.params.patientId) {
                    return this.patients[patient];
                }
            }
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
