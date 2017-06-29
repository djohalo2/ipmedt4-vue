import { FETCH_DOCTOR, CHECK_TOKEN, FETCH_PATIENTS, ADD_PATIENT, SET_PATIENT_DATA, SET_ALL_MEDICINES, ADD_MEDICINE } from './mutation-types';

export default {
    [FETCH_DOCTOR](state, payload, rootState) {
      state.doctorData = payload
    },
    [CHECK_TOKEN](state, payload) {
      state.token = payload
    },
    [FETCH_PATIENTS](state, payload) {
      state.patients = payload
    },
    [ADD_PATIENT](state, payload) {
      state.patients.push(payload)
    },
    [SET_PATIENT_DATA](state, payload) {
      state.patientBehandelingen = payload
    },
    [SET_ALL_MEDICINES](state, payload) {
      state.medicines = payload
    },
    [ADD_MEDICINE](state, payload) {
      state.patientBehandelingen.map((behandeling) => {
        if(behandeling.id == payload.therapy_id) {
          behandeling.medicines.push(payload)
        }
      })
    }
}
