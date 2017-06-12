<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">{{medicijn.title}}</p>
            <div class="card alert-box bg-warning text-white">
                <div class="card-content">
                    <p><i>warning</i>{{medicijnAmount()}}x per dag innemen om de 4 uur.</p>
                </div>
            </div>

            <div class="card">
                <div class="card-title">
                    {{medicijn.name.charAt(0).toUpperCase() + medicijn.name.slice(1)}}
                </div>
                <div class="card-content">
                    {{medicijn.description}}
                </div>
                <div class="list no-border">
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
    methods: {
        medicijnAmount(){
            let amount = 0;
            this.todos.map(todo => {
                if(todo.medicine_id === this.medicijn.id){
                    amount = todo.amount_per_day;
                }
            });
            return amount;
        }
    },
    computed: {
        medicijn() {
            return this.$store.getters.getMedicijn
        },
        todos() {
            return this.$store.getters.getAllTodos
        }
    }
}
</script>

<style lang="styl" scoped>
    li {
        margin-bottom: 0.6rem;
    }

    .list {
        margin-bottom: 1rem;
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
