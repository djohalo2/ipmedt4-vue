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
                ]
            },
            {
                id: "blaasontsteking",
                title: "Blaasontsteking",
                description: "Een blaasontsteking naar aanleiding van bacterie.",
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
                ]
            }
        ]
    },
    getters,
    mutations,
    actions
});

export default store;
