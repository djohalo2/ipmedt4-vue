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
    ADD_PATIENT({ commit, state }, patientData){
      return new Promise((resolve, reject) => {
        axios({
          method: "post",
          url: BASE_URL + "patient",
          data: qs.stringify({
            gender: patientData.gender,
            firstname: patientData.firstname,
            lastname: patientData.lastname,
            email: patientData.email,
            phone: patientData.phone,
            birthday: moment(patientData.birthday).format('YYYY-MM-DD'),
            street: patientData.street,
            street_number: patientData.streetnumber,
            postal_code: patientData.postalcode,
            city: patientData.city
          }),
          headers: {
              Authorization: "Bearer " + state.token,
          }
        })
        .then(response => {
          commit('ADD_PATIENT', response.data.patient);
          resolve()
        })
        .catch((error) => {
          console.log(error);
          reject()
        })
      })
    },
    UPDATE_PATIENT({ commit, state }, patientData){
      console.log(patientData)
      return new Promise((resolve, reject) => {
        axios({
          method: "put",
          url: BASE_URL + "patient/" + patientData.id,
          data: qs.stringify({
            id: patientData.id,
            gender: patientData.gender,
            firstname: patientData.firstname,
            lastname: patientData.lastname,
            email: patientData.email,
            phone: patientData.phone,
            birthday: moment(patientData.birthday).format('YYYY-MM-DD'),
            street: patientData.street,
            street_number: patientData.street_number,
            postal_code: patientData.postal_code,
            city: patientData.city
          }),
          headers: {
              Authorization: "Bearer " + state.token,
          }
        })
        .then(response => {
          console.log(response)
          commit('UPDATE_PATIENT', response.data.patient);
          resolve()
        })
        .catch((error) => {
          console.log(error);
          reject()
        })
      })
    },
    FETCH_PATIENT_DATA({ commit, state}, patientId) {
      return new Promise((resolve, reject) => {
        axios.get(BASE_URL + 'therapy/' + patientId, { headers: { Authorization: "Bearer " + state.token}})
        .then(response => {
          commit('SET_PATIENT_DATA', response.data.therapies)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject()
        })
      })
    },
    FETCH_ALL_MEDICINES({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios.get(BASE_URL + 'medicine', { headers: { Authorization: "Bearer " + state.token}})
        .then(response => {
          commit('SET_ALL_MEDICINES', response.data.medicines)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject()
        })
      })
    },
    FETCH_ALL_NOTES({ commit, state }, id) {
      return new Promise((resolve, reject) => {
        axios.get(BASE_URL + 'doctor/notes/' + id, { headers: { Authorization: "Bearer " + state.token}})
        .then(response => {
          // commit('', response.data.medicines)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject()
        })
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
      return new Promise((resolve, reject) => {
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
          console.log("MADE IT")
          commit('ADD_MEDICINE', response.data)
          resolve()
        })
        .catch((error) => {
            console.log(error);
            reject()
        });
      })
    },
    ADD_DOCTOR_NOTE({ commit, state }, noteData) {
      console.log(noteData)
      return new Promise((resolve, reject) => {
        axios({
          method: "post",
          url: BASE_URL + "doctor_note",
          data: qs.stringify({
            title: noteData.title,
            added_by: noteData.added_by,
            therapy_id: noteData.therapy_id,
            note: noteData.note
          }),
          headers: {
              Authorization: "Bearer " + state.token,
          }
        })
        .then(response => {
          commit('ADD_DOCTOR_NOTE', response.data)
          resolve()
        })
        .catch((error) => {
            console.log(error);
            reject()
        });
      })
    },
    ADD_EXCERCISE({ commit, state }, excerciseData) {
      return new Promise((resolve, reject) => {
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
            console.log(response.data)
            commit('ADD_EXCERCISE', response.data)
            resolve()
        })
        .catch((error) => {
            console.log(error);
            reject()
        });
      })
    },
    ADD_APPOINTMENT({ commit, state }, appointmentData) {
      return new Promise((resolve, reject) => {
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
          commit('ADD_APPOINTMENT', response.data.appointment)
          resolve()
        })
        .catch((error) => {0
            console.log(error);
            reject()
        });
      })
    },
    CANCEL_APPOINTMENT({ commit, state }, id) {
      return new Promise((resolve, reject) => {
        axios({
            method: "post",
            url: BASE_URL + "appointment/cancel/" + id,
            headers: {
              Authorization: "Bearer " + state.token,
            }
        })
        .then(response => {
          commit('CANCEL_APPOINTMENT', id)
          resolve()
        })
        .catch((error) => {0
          console.log(error);
          reject()
        })
      })
    },
    ADD_THERAPY({ commit, state }, therapyData) {
      return new Promise((resolve, reject) => {
        axios({
            method: "post",
            url: BASE_URL + "therapy",
            data: qs.stringify({
              patient_id: therapyData.patient_id,
              name: therapyData.name,
              department_id: therapyData.department_id,
              created_by: therapyData.created_by,
              bodyparts: therapyData.bodyparts
            }),
            headers: {
              Authorization: "Bearer " + state.token,
            }
        })
        .then(response => {
          console.log(response)
          commit('ADD_THERAPY', response.data.therapies[0])
          resolve()
        })
        .catch((error) => {0
          console.log(error);
          reject()
        })
      })
    },
    FINISH_THERAPY({ commit, state}, therapyId) {
      return new Promise((resolve, reject) => {
        axios({
            method: "post",
            url: BASE_URL + "therapy/finish/" + therapyId,
            headers: {
              Authorization: "Bearer " + state.token,
            }
        })
        .then(response => {
          console.log(response)
          // commit('ADD_THERAPY', response.data.therapies[0])
          resolve()
        })
        .catch((error) => {0
          console.log(error);
          reject()
        })
      })
    },
    FETCH_AFSPRAKEN({ commit, state}, week) {
      return new Promise((resolve, reject) => {
        axios.get(BASE_URL + 'doctor/appointments/' + state.doctorData.id + '/' + week, { headers: { Authorization: "Bearer " + state.token}})
        .then(response => {
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
        commit('SET_APPOINTMENTS_TODAY', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    DELETE_ITEM({ commit, state}, item) {
      return new Promise((resolve, reject) => {
        let urlType = item.type == 'medicine' ? 'delete/medicine_todo' : 'delete/excercise_todo'
        let data = {
          therapy_id: item.therapy_id
        }

        if(item.type == 'medicine') {
          data['medicine_id'] = item.id
        } else if (item.type == 'excercise') {
          data['excercise_id'] = item.id
        }

        console.log('DATA', data)

        axios({
            method: "post",
            url: BASE_URL + urlType,
            data: qs.stringify(data),
            headers: {
              Authorization: "Bearer " + state.token,
            }
        })
        .then(response => {
          console.log(response)
          commit('DELETE_ITEM', item)
          resolve()
        })
        .catch((error) => {0
          console.log(error);
          reject()
        })
      })
    }
}
