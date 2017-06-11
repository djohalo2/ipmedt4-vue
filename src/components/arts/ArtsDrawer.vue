<template>
    <div>
        <q-drawer id="drawer" ref="drawer">
            <div class="toolbar light">
              <q-toolbar-title :padding="1">
                  ARTS TEST
              </q-toolbar-title>
            </div>

            <div class="list no-border platform-delimiter">
              <q-drawer-link icon="home" to="/arts" exact>
                Home
              </q-drawer-link>
              <hr>
              <div class="list-label">Opties</div>
              <!-- <q-drawer-link icon="view_list" :to="'/behandeling/' + behandelingType">
                Overzicht
              </q-drawer-link> -->
              <q-drawer-link icon="assignment" :to="'/arts/Patienten'">
                Patienten
              </q-drawer-link>
              <q-drawer-link icon="insert_drive_file" :to="'/arts'">
                Informatie
              </q-drawer-link>
            </div>
        </q-drawer>
        <button class="hide-on-drawer-visible" @click="$refs.drawer.open()">
            <i>menu</i>
        </button>
    </div>
</template>

<script>
export default {
    name: 'arts-drawer'
}
</script>

<style lang="styl">

  #drawer {
    color: #333;
  }

</style>
