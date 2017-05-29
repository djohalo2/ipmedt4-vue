import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

import _ from 'lodash';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currentBehandeling: {},
        currentMedicijn: {},
        patientInfo: {
            id: 12345,
            voornaam: "Bassie",
            achternaam: "Adriaan",
            email: "bassie@adriaan.nl",
            telefoon: "0615022236",
            geboortedatum: "02/02/1992",
            foto: "https://i0.wp.com/devilsworkshop.org/files/2013/01/small-facebook-profile-picture.jpg?w=160"
        },
        behandelingen: [
            {
                id: "botbreuk-been",
                title: "Botbreuk been",
                description: "Een botbreuk in het been opgelopen.",
                category: "been",
                date: "26-05-2017",
                todos: [
                    {
                        naam: "Medicijn nemen",
                        date: "28-05-2017",
                        completed: true
                    },
                    {
                        naam: "Oefening doen",
                        date: "28-05-2017",
                        completed: false
                    }
                ],
                medicatie: [
                  {
                    id: "paracetamol",
                    title: "Paracetamol 500mg",
                    description: "Goed tegen pijn en griep.",
                    date: "26-05-2017"
                  },
                  {
                    id: "ibuprofen",
                    title: "Ibuprofen",
                    description: "Goed tegen pijn en griep maar dan nog beter.",
                    date: "16-05-2017"
                  }
              ],
              oefeningen: [
                  {
                      id: "step-up-trap",
                      title: "Step up trap",
                      description: "Ga op de onderste traptrede staan met uw gezicht richting de trap. Uw aangedane blijft staan en met de hak van uw andere been tikt uw de grond aan en komt weer met beide voeten op de traptrede staan. Let op dat uw knie niet naar binnen beweegt bij het zakken en dat uw heupen op gelijke hoogte blijven van elkaar.",
                      aantalSetjes: 20,
                      setLengte: 3,
                      dagaantal: 1
                  },
                  {
                      id: "bovenbeenspier-aanspannen",
                      title: "Bovenbeenspier aanspannen",
                      description: "Span uw bovenbeenspier aan in 2-3 seconden (knieschijf optrekken) en ontspan uw bovenbeenspier weer in 2-3 seconden (knieschijf laten zakken)",
                      aantalSetjes: 20,
                      setLengte: 3,
                      dagaantal: 1
                  }
              ],
              notities: [
                  {
                      id: 1,
                      title: "Doe dit",
                      content: "Doe dit nou is even man",
                      date: "29-05-2017"
                  },
                  {
                      id: 2,
                      title: "Tweede doe dit",
                      content: "Doe dit nou is even man",
                      date: "29-05-2017"
                  },
                  {
                      id: 3,
                      title: "Laatste notitie",
                      content: "Doe dit nou is even man",
                      date: "29-05-2017"
                  }
              ]
            },
            {
                id: "blaasontsteking",
                title: "Blaasontsteking",
                description: "Een blaasontsteking naar aanleiding van bacterie.",
                category: "blaas",
                date: "07-03-2017",
                todos: [
                    {
                        naam: "Antibiotica innemen",
                        date: "28-05-2017",
                        completed: false
                    },
                    {
                        naam: "Afspraak maken",
                        date: "28-05-2017",
                        completed: true
                    },
                    {
                        naam: "Pijnstillers nemen",
                        date: "28-05-2017",
                        completed: false
                    }
                ],
                medicatie: [

                ],
                oefeningen: [

                ],
                notities: [

                ]
            }
        ]
    },
    getters,
    mutations,
    actions
});

export default store;
