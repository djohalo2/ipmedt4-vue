<template>
    <div class="card bg-white">
        <div class="card-title">
            <div class="count-left float-left">
                <i>{{icon}}</i>
            </div>
            <div class="count-right float-right">
                <p class="count-title"><span class="number">{{number}}</span>{{title}}</p>
                <p class="count-description text-grey-6">{{description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'count-card',
    props: ['number', 'title', 'icon', 'description']
}
</script>

<style lang="scss" scoped>
    i {
        font-size: 40px;
    }

    .card-title {

        .count-right {

            .count-title {
                font-size: 14px;

                .number {
                    font-size: 32px;
                    margin: 0 0.5rem 0 0;
                }
            }

            .count-description {
                font-size:14px;
                font-weight: 400;
            }
        }

        * {
            margin: 0.5rem;
        }
    }
</style>
