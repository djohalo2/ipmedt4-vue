import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({

  routes: [
    // Paths voor patient
    { path: '/', component: load('patient/overzicht/Overzicht') },
    { path: '/behandeling', component: load('patient/behandeling/Behandelingen') },
    { path: '/medicatie', component: load('patient/medicatie/Medicatie') },
    { path: '/notities', component: load('patient/notities/NotitiesPage') },
    { path: '/notities-arts', component: load('patient/notities/ArtsNotitiesPage') },
    { path: '/oefeningen', component: load('patient/oefeningen/Oefeningen') },
    { path: '/afspraken', component: load('patient/afspraken/Afspraken') },
    { path: '/login', component: load('Login') },
    { path: '/patientinformatie', component: load('patient/PatientInformatie') },
    { path: '/behandeling/:typeBehandeling', component: load('BehandelingPage') },
    { path: '/behandeling/:typeBehandeling/notities', component: load('NotitiesPage') },
    { path: '/behandeling/:typeBehandeling/medicatie', component: load('Medicatie') },
    { path: '/behandeling/:typeBehandeling/medicatie/:typeMedicijn', component: load('MedicatiePage') },
    { path: '/behandeling/:typeBehandeling/oefeningen/:typeOefening', component: load('OefeningPage') },
    // Paths voor arts
    { path: '/arts', component: load('arts/dashboard/Dashboard') },
    { path: '/arts/patienten', component: load('arts/patient/Patienten') },
    { path: '/arts/patienten/:patientId', component: load('arts/patient/PatientenPage') },
    { path: '/arts/patienten/:patientId/behandelingen/:behandelingId', component: load('arts/behandeling/BehandelingPage') },
    { path: '/arts/informatie', component: load('arts/ArtsInfo') },
    { path: '/arts/medicatie', component: load('arts/medicatie/Medicatie') },
    // { path: '/arts/medicatie/:typeMedicijn', component: load('ArtsMedicatiePage') }, // Path later toevoegen voor doorklikken in medicatie, in overleg met Djo
    { path: '/arts/afspraken', component: load('arts/afspraken/Afspraken') },
     // Not found
    { path: '*', component: load('Error404') }
  ]
})
