<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">{{medicijn.title}}</p>
            <div class="card alert-box bg-warning text-white">
                <div class="card-content">
                    <p><i>warning</i>{{medicijn.aantal}}x per dag innemen om de 4 uur.</p>
                </div>
            </div>

            <div class="card">
                <div class="card-title">
                    {{medicijn.name}}
                </div>
                <div class="card-content">
                    {{medicijn.description}}
                </div>
                <div class="list">
                    <q-collapsible icon="add_circle" group="medicatie" :label="'Belangrijke informatie'">
                        <div>
                            <p>{{medicijn.important}}</p>
                        </div>
                  </q-collapsible>
                  <q-collapsible icon="add_circle" group="medicatie" label="Mogelijke bijwerkingen">
                      <div>
                          <p>{{medicijn.side_effects}}</p>
                      </div>
                  </q-collapsible>
                  <q-collapsible icon="add_circle" group="medicatie" label="Hoe gebruiken?">
                      <div>
                          <p>{{medicijn.usage}}</p>
                      </div>
                  </q-collapsible>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from 'vue-router';

export default {
    name: 'medicatie-page',
    created() {
        console.log("hello");
        this.$store.commit('CHANGE_CURRENT_MEDICIJN', this.$route.params.typeMedicijn);
    },
    computed: {
        medicijn() {
            return this.$store.getters.getMedicijn
        }
    }
}
</script>

<style lang="styl" scoped>
    li {
        margin-bottom: 0.6rem;
    }

    .alert-box {
        p {
            margin: 0.5rem;;
            i {
                font-size: 20px;
                margin-right: 1rem;
            }
        }
    }

</style>
