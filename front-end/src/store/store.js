import Vue from 'vue';
import Vuex from 'vuex';
import patientModule from './patient/patientModule';
import artsModule from './arts/artsModule';

import _ from 'lodash';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        patient: patientModule,
        arts: artsModule
    }
});

export default store;
