import { CHANGE_CURRENT_BEHANDELING } from './mutation-types';

export default {
    [CHANGE_CURRENT_BEHANDELING](state, id) {
        state.currentBehandeling = state.behandelingen.filter(behandeling => behandeling.id === id)[0];
    }
}
