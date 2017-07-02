<template>
  <div>
    <div class="card">
      <div class="card-title">
        Behandeling informatie
      </div>
      <div class="card-content">
        <ul>
          <li><strong>Naam:</strong> {{name}}</li>
          <li><strong>Startdatum:</strong> {{start}}</li>
          <li><strong>Einddatum:</strong> {{end}} <span v-if="end == null">Nog in behandeling</span></li>
          <li><strong>Categorie:</strong> <span v-for="bodypart in bodyparts">{{bodypart.name}}</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'behandeling-informatie',
    props: ['name', 'start', 'end', 'bodyparts']
}
</script>

<style lang="scss" scoped>
  .layout-padding {
    padding-top: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin-top: 5px;

    li {
      font-size: 14px;
    }
  }

  .card-title {
    padding-bottom: 0.5rem;
  }

  .card-content {
    padding-top: 0;
  }
</style>
