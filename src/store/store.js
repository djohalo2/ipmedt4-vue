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
            voornaam: "Jeroen",
            achternaam: "de Meij",
            email: "jeroen@gmail.nl",
            telefoon: "06-12345678",
            geboortedatum: "02/02/1990",
            foto: "http://www.sheffield.com/wp-content/uploads/2013/06/placeholder.png"
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
                    behandeling: "botbreuk-been",
                    title: "Paracetamol 500mg",
                    description: "Goed tegen pijn en griep.",
                    date: "26-05-2017",
                    aantal: 3
                  },
                  {
                    id: "ibuprofen",
                    behandeling: "botbreuk-been",
                    title: "Ibuprofen",
                    description: "Goed tegen pijn en griep maar dan nog beter.",
                    date: "16-05-2017",
                    aantal: 1
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
                      title: "Eerste notitie",
                      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit tortor, egestas at dapibus nec, semper quis arcu. In lacinia facilisis rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla pulvinar eros sem, sit amet egestas metus pulvinar sit amet.",
                      date: "29-05-2017"
                  },
                  {
                      id: 2,
                      title: "Tweede notitie",
                      content: "Morbi at dui et est egestas rhoncus. Sed commodo turpis non ante auctor iaculis id in nibh. Mauris a eleifend purus. Vivamus a efficitur odio.",
                      date: "29-05-2017"
                  },
                  {
                      id: 3,
                      title: "Laatste notitie",
                      content: "Aliquam volutpat ac nisl eget pellentesque. Duis viverra tellus neque, sodales ornare magna mollis in. Proin et luctus justo. Curabitur ut elit eget lacus auctor fringilla.",
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
                        naam: "Afspraak maken",
                        date: "28-05-2017",
                        completed: true
                    }
                ],
                medicatie: [
                    {
                      id: "amoxicilline",
                      behandeling: "blaasontsteking",
                      title: "Amoxicilline",
                      description: "Goed tegen pijn en griep.",
                      date: "26-05-2017",
                      aantal: 2
                    }
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
