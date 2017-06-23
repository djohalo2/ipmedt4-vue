<template>
    <div class="layout-view">
        <div class="layout-padding">
            <div class="timeline">
              <div class="timeline-label">
                <h4 class="bg-white text-italic">
                  Afspraken
                </h4>
              </div>
              <div v-for="afspraak in afspraken" class="timeline-item">
                <div class="timeline-badge">
                  <i>alarm</i>
                </div>
                <div class="timeline-title">
                  {{afspraak.title}}
                </div>
                <div class="timeline-date text-italic">
                  <div>{{afspraak.time}}</div>
                  <div>{{afspraak.date}}</div>
                </div>
                <div class="card">
                  <div class="card-title">
                    {{afspraak.title}}
                  </div>
                  <div class="card-content">
                    {{afspraak.description}}
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'afspraken',
    data() {
      return {
        afspraken: [
          {
            title: "Afspraak 1",
            time: "12:34",
            date: "1 Jan 1969",
            description: "Dit gaat om een afspraak"
          }, {
            title: "Afspraak 2",
            time: "12:34",
            date: "1 Jan 1969",
            description: "Dit gaat om een afspraak"
          }, {
            title: "Afspraak 3",
            time: "12:34",
            date: "1 Jan 1969",
            description: "Dit gaat om een afspraak"
          }, {
            title: "Afspraak 4",
            time: "12:34",
            date: "1 Jan 1969",
            description: "Dit gaat om een afspraak"
          }
        ]
      }
    }
}

</script>

<style lang="styl" scoped>

  .timeline-badge {
    background: #fd4935;
  }

</style>
