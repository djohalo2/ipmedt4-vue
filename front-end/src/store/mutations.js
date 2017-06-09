import { CHANGE_CURRENT_BEHANDELING, CHANGE_CURRENT_MEDICIJN, TOGGLE_TODO, ADD_NOTE, FETCH_PATIENT, CHECK_TOKEN } from './mutation-types';
import _ from 'lodash';
import axios from 'axios';

export default {
    [CHANGE_CURRENT_BEHANDELING](state, id) {
        state.currentBehandeling = state.patientData.therapys.filter(behandeling => behandeling.id === id)[0];
    },
    [CHANGE_CURRENT_MEDICIJN](state, id) {
        console.log(id);
        state.patientData.therapys.map(behandeling => {
            behandeling.medicines.map(medicine => {
                console.log(medicine.id);
                if(medicine.id == id) {
                    console.log(medicine);
                    state.currentMedicijn = medicine;
                    console.log(state.currentMedicijn);
                }
            });
        });
    },
    [TOGGLE_TODO](state, id){

    },
    [ADD_NOTE](state, payload) {

    },
    [FETCH_PATIENT](state, payload) {
        state.patientData = payload;
    },
    [CHECK_TOKEN](state, payload) {
        state.token = payload;
    }
}
