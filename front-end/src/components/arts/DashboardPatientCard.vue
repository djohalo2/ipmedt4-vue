<template>
    <div class="item three-lines">
        <img class="item-primary" :src="patient.avatar">
        <div class="item-content has-secondary">
                <div class="item-title">{{patient.firstname + " " + patient.lastname}}</div>
                <div class="item-label item-smaller">
                    {{patient.phone}}<br>
                    {{patient.city}}
                </div>
        </div>
        <div class="item-secondary stamp">
            Nr. {{patient.id}}
        </div>
        <i class="item-secondary">edit</i>
    </div>
</template>

<script>
export default {
    name: 'dashboard-patient-card',
    props: ['patient'],
    methods: {

    }
}
</script>

<style lang="scss" scoped>

    .item {
        border-bottom: 1px solid #e0e0e0;

        .item-primary {
            margin-right: 1rem;
        }

        img {
            width: 44px;
            height: 44px;
            border-radius: 100%;
            margin-top: 5px;
        }

        i {
            cursor: pointer;
        }
    }

</style>
