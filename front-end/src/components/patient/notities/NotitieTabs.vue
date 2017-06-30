<template>
  <q-tabs :refs="$refs" default-tab="tab-1" >
      <q-tab name="tab-1" route="/notities">
          Mijn notities
      </q-tab>
      <q-tab name="tab-2" route="/notities-arts">
          Arts notities
      </q-tab>
  </q-tabs>
</template>

<script>
export default {
    name: 'notitie-tabs'
}
</script>

<style lang="scss" scoped>

</style>
