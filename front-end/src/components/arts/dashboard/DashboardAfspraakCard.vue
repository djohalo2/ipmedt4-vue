<template>
    <div class="item three-lines">
        <div class="item-content has-secondary">
                <div class="item-title">{{timestamp}}</div>
                <div class="item-label item-smaller">
                    {{patient}}<br>
                    {{therapy}}
                </div>
        </div>
        <button class="primary text-white small item-secondary" @click="clickPatient()">
            Bekijk patient
        </button>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'dashboard-afspraak-card',
    props: ['patient', 'date', 'therapy', 'patientId'],
    computed: {
      timestamp() {
        return moment(this.date).format('H:mm')
      }
    },
    methods: {
      clickPatient() {
        this.$router.push({path: 'arts/patienten/' + this.patientId})
      }
    }
}
</script>

<style lang="scss" scoped>

    .item {
        border-bottom: 1px solid #e0e0e0;

        button {
            font-size:12px;
        }

        .item-secondary {
            width: 120px;
            top: 15px!important;
        }
    }

</style>
