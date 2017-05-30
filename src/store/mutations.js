import { CHANGE_CURRENT_BEHANDELING, CHANGE_CURRENT_MEDICIJN, TOGGLE_TODO, ADD_NOTE } from './mutation-types';

export default {
    [CHANGE_CURRENT_BEHANDELING](state, id) {
        state.currentBehandeling = state.behandelingen.filter(behandeling => behandeling.id === id)[0];
    },
    [CHANGE_CURRENT_MEDICIJN](state, id) {
        state.currentMedicijn = state.medicatie.filter(medicijn => medicijn.id === id)[0];
    },
    [TOGGLE_TODO](state, id){
        console.log(state.currentBehandeling.todos.filter(todo => todo.naam === id));
        state.currentBehandeling.todos.filter(todo => todo.naam === id)[0].completed = !state.currentBehandeling.todos.filter(todo => todo.naam === id)[0].completed;
    },
    [ADD_NOTE](state, payload) {
        
    }
}
