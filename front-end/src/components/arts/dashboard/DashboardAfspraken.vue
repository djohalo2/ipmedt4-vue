<template>
    <div class="card bg-white">
        <div class="card-title">
            Afspraken
        </div>

        <div class="card-content">
            <div class="filters">
                <button class="button primary">Vandaag</button
                ><button class="primary outline">Morgen</button>
            </div>
            <div class="list">
                <dashboard-afspraak-card v-for="(afspraak, index) in afspraken" :key="index" :patient="afspraak.patient" :date="afspraak.date" :therapy="afspraak.therapy"></dashboard-afspraak-card>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardAfspraakCard from './DashboardAfspraakCard.vue';

export default {
    name: 'dashboard-afspraken',
    components: {
        DashboardAfspraakCard
    },
    data() {
        return {
            afspraken: [
                {
                    patient: "Djovanni Tehubijuluw",
                    date: "Vandaag: 9:30 - 10:00",
                    therapy: "Gebroken been"
                },
                {
                    patient: "Bas van Bovene",
                    date: "Vandaag: 10:00 - 10:45",
                    therapy: "Gebroken pols"
                },
                {
                    patient: "Sem Ekkelboom",
                    date: "Vandaag: 10:45 - 11:30",
                    therapy: "Gebroken teen"
                },
                {
                    patient: "Jeroen de Meij",
                    date: "Vandaag: 12:30 - 13:30",
                    therapy: "Gebroken sleutelbeen"
                }
            ]
        }
    }
}
</script>

<style lang="scss">

    .list {
        border-bottom: none;
    }

    .filters {
        margin-bottom: 0.5rem;

        button {
            border-radius: 0;
        }

        button:first-child {
            border-radius: 30px 0 0 30px;
            border-right: 0;
        }

        button:last-child {
            border-radius: 0 30px 30px 0;
            border-left: 0;
        }
    }

</style>
