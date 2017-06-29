import { CHANGE_CURRENT_BEHANDELING, CHANGE_CURRENT_MEDICIJN, CHANGE_CURRENT_OEFENING, TOGGLE_TODO, ADD_NOTE, FETCH_PATIENT, LOG_OUT, CHECK_TOKEN, TOGGLE_IS_FETCHING, FETCH_TOKEN } from './mutation-types';
import _ from 'lodash';
import axios from 'axios';
import { LocalStorage, SessionStorage } from 'quasar';

const BASE_URL = "http://178.62.240.123/api/";

export default {
    [CHANGE_CURRENT_BEHANDELING](state, id) {
        state.currentBehandeling = state.patientData.therapys.filter(behandeling => behandeling.id === id)[0];
    },
    [CHANGE_CURRENT_MEDICIJN](state, id) {
        state.patientData.therapys.map(behandeling => {
            behandeling.medicines.map(medicine => {
                if(medicine.id == id) {
                    state.currentMedicijn = medicine;
                }
            });
        });
    },
    [CHANGE_CURRENT_OEFENING](state, id) {
        state.patientData.therapys.map(behandeling => {
            behandeling.excercises.map(oefening => {
                if(oefening.id == id) {
                    state.currentOefening = oefening;
                }
            });
        });
    },
    [TOGGLE_TODO](state, id){
        state.patientData.therapys.map(behandeling => {
            if(behandeling.medicine_todo.length > 0){
                behandeling.medicine_todo.map(todo => {
                    if(todo.id === id){
                        todo.done = !todo.done;
                    };
                })
            }
        });
    },
    [ADD_NOTE](state, data) {
        state.patientData.notes.push({
            title: data.title,
            note: data.note
        })
    },
    [FETCH_PATIENT](state, payload) {
        state.patientData = payload;
    },
    [CHECK_TOKEN](state, payload) {
        state.token = payload;
    },
    [TOGGLE_IS_FETCHING](state){
        state.isFetching = !state.isFetching;
    },
    [LOG_OUT](state) {
        state = {};
        LocalStorage.clear("token");
    }
}
