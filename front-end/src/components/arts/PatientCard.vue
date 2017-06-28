<template>
        <div class="card">
            <div class="float-right">
              <!-- <img class="profile-img" :src="{{avatar}}"> -->
            </div>
            <div class="card-title">
                {{firstname}} {{lastname}}
            </div>
            <div class="card-content">
                Geboortedatum: {{birthday}}<br>
                Telefoon: {{phone}}<br>
                Email: {{email}}<br>
            </div>
            <button class="primary clear" v-on:click="cardClick">Bekijk</button>
        </div>
</template>

<script>
import router from 'vue-router';

export default {
    name: 'patient-card',
    props: ['id', 'firstname', 'lastname', 'email', 'phone', 'birthday', 'avatar'],
    methods: {
        cardClick() {
            this.$router.push({path: 'patienten/' + this.id});
        }
    }
}
</script>

<style lang="scss" scoped>
    .profile-img {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        margin:0 auto;
        margin-top:20px;
        display: block;
    }

    .card-title, .card-content {
        padding: 0.7rem 0rem;
    }

    .chip.label {
        margin-top: 0.7rem;
        font-size: 0.8rem;
        height: 26px;

        i {
            margin-right: 0.5rem;
        }
    }

    .card {
        padding: 0rem 1rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.22), 0 3px 2px rgba(0,0,0,0.05);

        .card-title {
            font-size: 1rem;
        }

        .card-content {
            font-size:0.9rem;
        }

        .card-date {
            color: grey;
            font-size: 0.8rem;
        }

        button {
            padding: 0;
        }
    }

</style>
