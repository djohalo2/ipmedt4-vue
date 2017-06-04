<template>
        <div class="card" v-on:click="cardClick">
            <div class="card-title">
                {{title}}
            </div>
            <div class="card-date">
                <i>access_time</i>
                Medicijn genomen sinds {{date}}
            </div>
            <div class="card-content">
                <span class="chip label bg-primary text-white">
                    {{aantal}}x per dag innemen
                </span>
            </div>
        </div>
</template>

<script>
import router from 'vue-router';

export default {
    name: 'medicijn-card',
    props: ['id', 'behandeling', 'title', 'aantal', 'date'],
    methods: {
        cardClick() {
            this.$router.push({path: '/behandeling/' + this.behandeling + '/medicatie/' + this.id});
        }
    }
}
</script>

<style lang="styl">
  .card-title, .card-content {
      padding: 0.7rem 0rem;
  }

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

  .card {
      padding: 0rem 1rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.22), 0 3px 2px rgba(0,0,0,0.05);
      background-color: #fff;
  }
</style>
