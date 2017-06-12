import { FETCH_DOCTOR, CHECK_TOKEN, FETCH_PATIENTS } from './mutation-types';

import _ from 'lodash';
import axios from 'axios';
import { LocalStorage, SessionStorage } from 'quasar';

const BASE_URL = "http://www.mijnnazorg.nl/api/";

export default {
    [FETCH_DOCTOR](state, payload, rootState) {
        state.doctorData = payload;
    },
    [CHECK_TOKEN](state, payload) {
        state.token = payload;
    },
    [FETCH_PATIENTS](state, payload) {
        state.patients = payload;
    }
}
