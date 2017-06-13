import axios from 'axios';
import { LocalStorage, SessionStorage } from 'quasar';
import qs from 'qs';

const BASE_URL = "http://www.mijnnazorg.nl/api/";

export default {
    CHECK_TOKEN({ commit }){
        let token = LocalStorage.get.item("token");
        commit('CHECK_TOKEN', token);
    },
    FETCH_PATIENTS({ commit, state }){
        console.log("JEEEJ");
        axios.get(BASE_URL + 'patient', { headers: { Authorization: "Bearer " + state.token}})
        .then(response => {
            commit('FETCH_PATIENTS', response.data.patients);
        })
        .catch((error) => {

        });
    },
    ADD_PATIENT({ commit, state }, patient){
        console.log(patient);
        axios({
            method: "post",
            url: BASE_URL + "patient",
            data: qs.stringify({
                gender: patient.gender,
                firstname: patient.firstname,
                lastname: patient.lastname,
                email: patient.email,
                phone: patient.phone,
                birthday: "2017-05-02",
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
            console.log(response);
            commit('ADD_PATIENT', patient);
        })
        .catch((error) => {
            console.log(error);
        });
    }
}
