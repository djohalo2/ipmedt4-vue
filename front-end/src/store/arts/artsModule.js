import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const artsModule = {
    state: {
        patienten: {},
        token: "",
        isFetching: false,
    },
    actions,
    mutations,
    getters
}

export default artsModule;
