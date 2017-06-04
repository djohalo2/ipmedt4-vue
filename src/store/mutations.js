import { CHANGE_CURRENT_BEHANDELING, CHANGE_CURRENT_MEDICIJN, TOGGLE_TODO, ADD_NOTE } from './mutation-types';
import _ from 'lodash';

export default {
    [CHANGE_CURRENT_BEHANDELING](state, id) {
        state.currentBehandeling = state.behandelingen.filter(behandeling => behandeling.id === id)[0];
    },
    [CHANGE_CURRENT_MEDICIJN](state, id) {
        state.behandelingen.map(behandeling => {
            if(_.filter(behandeling.medicatie, ['id', id])[0]){
                state.currentMedicijn = _.filter(behandeling.medicatie, ['id', id])[0];
            }
        });
    },
    [TOGGLE_TODO](state, id){
        state.behandelingen.map(behandeling => {
            if(_.filter(behandeling.todos, ['naam', id])[0]){
                _.filter(behandeling.todos, ['naam', id])[0].completed = !_.filter(behandeling.todos, ['naam', id])[0].completed;
            }
        });
    },
    [ADD_NOTE](state, payload) {

    }
}
