<template>
    <div class="item three-lines">
        <div class="item-content has-secondary">
                <div class="item-title">{{date}}</div>
                <div class="item-label item-smaller">
                    {{patient}}<br>
                    {{therapy}}
                </div>
        </div>
        <button class="primary text-white small item-secondary">
            Bekijk patient
        </button>
    </div>
</template>

<script>
export default {
    name: 'dashboard-afspraak-card',
    props: ['patient', 'date', 'therapy']
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
