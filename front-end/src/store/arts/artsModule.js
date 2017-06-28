import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const artsModule = {
    state: {
        doctorData: {},
        patients: {},
        patientBehandelingen: {},
        token: "",
        isFetching: false,
        medicines: []
    },
    actions,
    mutations,
    getters
}

export default artsModule;
