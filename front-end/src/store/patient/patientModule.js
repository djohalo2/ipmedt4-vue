import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const patientModule = {
    state: {
        patientData: {},
        token: "",
        isFetching: false,
        currentBehandeling: {},
        currentMedicijn: {},
        currentOefening: {}
    },
    actions,
    mutations,
    getters
}

export default patientModule;
