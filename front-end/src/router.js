import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    { path: '/', component: load('Overzicht') },
    { path: '/behandeling', component: load('Behandelingen') },
    { path: '/medicatie', component: load('Medicatie') },
    { path: '/notities', component: load('NotitiesPage') },
    { path: '/oefeningen', component: load('Oefeningen') },
    { path: '/login', component: load('Login') },
    { path: '/patientinformatie', component: load('PatientInformatie') },
    { path: '/behandeling/:typeBehandeling', component: load('BehandelingPage') },
    { path: '/behandeling/:typeBehandeling/notities', component: load('NotitiesPage') },
    { path: '/behandeling/:typeBehandeling/medicatie', component: load('Medicatie') },
    { path: '/behandeling/:typeBehandeling/medicatie/:typeMedicijn', component: load('MedicatiePage') },
    { path: '/behandeling/:typeBehandeling/oefeningen/:typeOefening', component: load('OefeningPage') },
    { path: '*', component: load('Error404') } // Not found
  ]
})
