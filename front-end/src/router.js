import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({

  routes: [
    // Paths voor patient
    { path: '/', component: load('Overzicht') },
    { path: '/behandeling', component: load('Behandelingen') },
    { path: '/medicatie', component: load('Medicatie') },
    { path: '/notities', component: load('NotitiesPage') },
    { path: '/oefeningen', component: load('Oefeningen') },
    { path: '/afspraken', component: load('Afspraken') },
    { path: '/login', component: load('Login') },
    { path: '/patientinformatie', component: load('PatientInformatie') },
    { path: '/behandeling/:typeBehandeling', component: load('BehandelingPage') },
    { path: '/behandeling/:typeBehandeling/notities', component: load('NotitiesPage') },
    { path: '/behandeling/:typeBehandeling/medicatie', component: load('Medicatie') },
    { path: '/behandeling/:typeBehandeling/medicatie/:typeMedicijn', component: load('MedicatiePage') },
    { path: '/behandeling/:typeBehandeling/oefeningen/:typeOefening', component: load('OefeningPage') },
    // Paths voor arts
    { path: '/arts', component: load('arts/Dashboard') },
    { path: '/arts/patienten', component: load('arts/Patienten') },
    { path: '/arts/patienten/:patientId', component: load('arts/PatientenPage') },
    { path: '/arts/informatie', component: load('arts/ArtsInfo') },
    { path: '/arts/medicatie', component: load('arts/Medicatie') },
    // { path: '/arts/medicatie/:typeMedicijn', component: load('ArtsMedicatiePage') }, // Path later toevoegen voor doorklikken in medicatie, in overleg met Djo
    { path: '/arts/afspraken', component: load('arts/Afspraken') },
     // Not found
    { path: '*', component: load('Error404') }
  ]
})
