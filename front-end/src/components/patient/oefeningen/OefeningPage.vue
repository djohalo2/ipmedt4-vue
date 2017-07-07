<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">{{oefening.title}}</p>

            <div class="card">
                <q-video
                    :src="oefening.video.url"
                ></q-video>
                <div class="card-content">
                    <p>{{oefening.title}}</p>
                    <p>{{oefening.description}}</p>
                </div>
            </div>

            <div class="card bg-warning text-white">
              <ul>
                <li><strong>Setjes</strong>: {{oefeningTodo.sets}}</li>
                <li><strong>Herhalingen</strong>: {{oefeningTodo.sets_amount}}</li>
              </ul>
            </div>
        </div>
    </div>
</template>

<script>
import router from 'vue-router';

export default {
    name: 'oefening-page',
    created() {
      this.$store.commit('CHANGE_CURRENT_OEFENING', this.$route.params.typeOefening);
      console.log(this.oefeningTodo)
    },
    computed: {
        oefening() {
          return this.$store.getters.getOefening
        },
        oefeningTodo () {
          let allTodos = this.$store.getters.getAllTodos
          let oefeningTodo = ''
          allTodos.map((todo) => {
            if(todo.excercise_id) {
              if(todo.excercise_id == this.oefening.id) {
                oefeningTodo = todo
              }
            }
          })
          return oefeningTodo
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        padding: 0;

        .card-content {
            padding: 1rem;
        }

        ul {
          list-style-type:none;
          padding-left: 1rem;
        }
    }
</style>
