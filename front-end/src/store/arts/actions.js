import axios from 'axios';
import { LocalStorage, SessionStorage } from 'quasar';
import qs from 'qs';
import moment from 'moment';

const BASE_URL = "http://www.mijnnazorg.nl/api/";

export default {
    CHECK_TOKEN({ commit }){
        let token = LocalStorage.get.item("token");
        commit('CHECK_TOKEN', token);
    },
    FETCH_PATIENTS({ commit, state }){
        axios.get(BASE_URL + 'patient', { headers: { Authorization: "Bearer " + state.token}})
        .then(response => {
            commit('FETCH_PATIENTS', response.data.patients);
        })
        .catch((error) => {

        });
    },
    ADD_PATIENT({ commit, state }, patient){
        axios({
            method: "post",
            url: BASE_URL + "patient",
            data: qs.stringify({
                gender: patient.gender,
                firstname: patient.firstname,
                lastname: patient.lastname,
                email: patient.email,
                phone: patient.phone,
                birthday: moment(patient.birthday).format('YYYY-MM-DD'),
                street: patient.street,
                street_number: patient.streetnumber,
                postal_code: patient.postalcode,
                city: patient.city
            }),
            headers: {
                Authorization: "Bearer " + state.token,
            }
        })
        .then(response => {
            commit('ADD_PATIENT', patient);
        })
        .catch((error) => {
            console.log(error);
        });
    },
    FETCH_PATIENT_DATA({ commit, state}, patientId) {
      axios.get(BASE_URL + 'therapy/' + patientId, { headers: { Authorization: "Bearer " + state.token}})
      .then(response => {
        commit('SET_PATIENT_DATA', response.data.therapies)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    FETCH_ALL_MEDICINES({ commit, state }) {
      axios.get(BASE_URL + 'medicine', { headers: { Authorization: "Bearer " + state.token}})
      .then(response => {
        commit('SET_ALL_MEDICINES', response.data.medicines)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    FETCH_ALL_EXERCISES({ commit, state }) {
      axios.get(BASE_URL + 'excercise', { headers: { Authorization: "Bearer " + state.token}})
      .then(response => {
        commit('SET_ALL_EXERCISES', response.data.excercises)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    ADD_MEDICINE({ commit, state }, medicineData) {
      axios({
          method: "post",
          url: BASE_URL + "medicine_todo",
          data: qs.stringify({
              amount: medicineData.amount,
              amount_per_day: medicineData.amount_per_day,
              therapy_id: medicineData.therapy_id,
              medicine_id: medicineData.id,
              start_date: moment(medicineData.start_date).format('YYYY-MM-DD'),
              end_date: moment(medicineData.end_date).format('YYYY-MM-DD'),
          }),
          headers: {
              Authorization: "Bearer " + state.token,
          }
      })
      .then(response => {
          commit('ADD_MEDICINE', medicineData)
      })
      .catch((error) => {
          console.log(error);
      });
    },
    ADD_EXCERCISE({ commit, state }, excerciseData) {
      axios({
          method: "post",
          url: BASE_URL + "excercise_todo",
          data: qs.stringify({
              sets: excerciseData.sets,
              sets_amount: excerciseData.sets_amount,
              per_day: excerciseData.per_day,
              therapy_id: excerciseData.therapy_id,
              excercise_id: excerciseData.id,
              start_date: moment(excerciseData.start_date).format('YYYY-MM-DD'),
              end_date: moment(excerciseData.end_date).format('YYYY-MM-DD'),
          }),
          headers: {
              Authorization: "Bearer " + state.token,
          }
      })
      .then(response => {
        console.log(response)
          commit('ADD_EXCERCISE', excerciseData)
      })
      .catch((error) => {
          console.log(error);
      });
    },
    ADD_APPOINTMENT({ commit, state }, appointmentData) {
      axios({
          method: "post",
          url: BASE_URL + "appointment",
          data: qs.stringify({
              title: appointmentData.title,
              start: appointmentData.start,
              end: appointmentData.end,
              therapy_id: appointmentData.therapy_id,
              patient_id: appointmentData.patient_id,
              doctor_id: appointmentData.doctor_id
          }),
          headers: {
              Authorization: "Bearer " + state.token,
          }
      })
      .then(response => {
        console.log(response)
          commit('ADD_APPOINTMENT', appointmentData)
      })
      .catch((error) => {0
          console.log(error);
      });
    },
    FETCH_AFSPRAKEN({ commit, state}, week) {
      return new Promise((resolve, reject) => {
        axios.get(BASE_URL + 'doctor/appointments/' + state.doctorData.id + '/' + week, { headers: { Authorization: "Bearer " + state.token}})
        .then(response => {
          console.log(response);
          commit('SET_AFSPRAKEN', response.data.appointments)
          resolve()
        })
        .catch((error) => {
          reject()
          console.log(error)
        })
      })
    },
    FETCH_APPOINTMENTS_TODAY({ commit, state}) {
      axios.get(BASE_URL + 'doctor/today_appointments/' + state.doctorData.id, { headers: { Authorization: "Bearer " + state.token}})
      .then(response => {
        console.log(response);
        commit('SET_APPOINTMENTS_TODAY', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }
}
