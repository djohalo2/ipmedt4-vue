import { FETCH_DOCTOR, CHECK_TOKEN, FETCH_PATIENTS, ADD_PATIENT, SET_PATIENT_DATA, SET_ALL_MEDICINES, SET_ALL_EXERCISES, SET_AFSPRAKEN, SET_APPOINTMENTS_TODAY, ADD_MEDICINE, ADD_EXCERCISE, ADD_APPOINTMENT, LOG_DOCTOR_OUT } from './mutation-types';
import { LocalStorage, SessionStorage } from 'quasar';

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
    [SET_ALL_EXERCISES](state, payload) {
      state.excercises = payload
    },
    [SET_AFSPRAKEN](state, payload) {
      state.appointments = payload
    },
    [SET_APPOINTMENTS_TODAY](state, payload) {
      console.log('Appointments gezet', payload)
      state.appointmentsToday = payload
      console.log(state.appointmentsToday)
    },
    [ADD_MEDICINE](state, payload) {
      state.patientBehandelingen.map((behandeling) => {
        if(behandeling.id == payload.therapy_id) {
          behandeling.medicines.push(payload)
        }
      })
    },
    [ADD_EXCERCISE](state, payload) {
      state.patientBehandelingen.map((behandeling) => {
        if(behandeling.id == payload.therapy_id) {
          behandeling.excercises.push(payload)
        }
      })
    },
    [ADD_APPOINTMENT](state, payload) {
      state.appointments.push({
        title: payload.title,
        start: payload.start,
        end: payload.end
      })
    },
    [LOG_DOCTOR_OUT](state, payload) {
      state = {};
      LocalStorage.clear("token");
    }
}
