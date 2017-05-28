<template>
    <div>
        <navigation></navigation>
        <div class="layout-view">
            <div class="layout-padding">
                <p class="profile-name">{{patient.voornaam}} {{patient.achternaam}}</p>
                <img class="profile-img" :src="patient.foto">
                <div class="card">
                    <div class="card-title">
                        <p class="text-primary">GEGEVENS</p>
                        <ul>
                            <li>
                                <i>person</i>
                                <p>{{patient.voornaam}} {{patient.achternaam}}</p>
                            </li>

                            <li>
                                <i>email</i>
                                <p>{{patient.email}}</p>
                            </li>

                            <li>
                                <i>smartphone</i>
                                <p>{{patient.telefoon}}</p>
                            </li>

                            <li>
                                <i>today</i>
                                <p>{{patient.geboortedatum}}</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
    name: 'patient-informatie',
    components: {
        Navigation
    },
    computed: {
        patient() {
            return this.$store.getters.getPatientInfo
        }
    }
}
</script>

<style lang="styl" scoped>
    .layout-view {
        background-color: #F6F6F6;
    }
    .profile-name {
        text-align: center;
        font-weight: 600;
        font-size: 1.1rem;
    }
    .profile-img {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        margin:0 auto;
        display: block;
    }
    .card {
        margin-top: 1rem;
    }

    li > * {
        display: inline-block;
    }

    li {
        list-style-type: none;
        font-weight: 400;
    }

    ul {
        padding: 0;
    }

</style>
