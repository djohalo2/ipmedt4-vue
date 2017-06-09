import axios from 'axios';
import { LocalStorage, SessionStorage } from 'quasar';

const BASE_URL = "http://178.62.240.123/api/";

export default {
    FETCH_TOKEN({ commit }, payload){
        console.log(payload);
        axios.post(BASE_URL + "authenticate", {
            username: payload.username,
            password: payload.password
        })
        .then(response => {
            LocalStorage.set("token", response.data.token);
        })
        .catch((error) => {
            console.log(error);
        });
    },
    CHECK_TOKEN({ commit }){
        let token = LocalStorage.get.item("token");
        commit('CHECK_TOKEN', token);
    },
    FETCH_PATIENT({ commit, state }) {
        axios.get(BASE_URL + "authenticate/checkuser", { headers: { Authorization: "Bearer " + state.token}})
        .then(response => {
            let patientData = response.data.user.patient;
            commit('FETCH_PATIENT', patientData);
        })
        .catch((error) => {
            console.log('error ' + error);
        });
    },
    TOGGLE_TODO({ commit }, data) {
        axios({
            method: 'put',
            url: "http://178.62.240.123/api/medicine_todo/" + data.id,
            data: {
                done: + data.completed
            },
            headers: { Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6XC9cLzE3OC42Mi4yNDAuMTIzXC9hcGlcL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTQ5NjkxODUzNSwiZXhwIjoxNDk5NTEwNTM1LCJuYmYiOjE0OTY5MTg1MzUsImp0aSI6ImlCeTR2YktMbmNDNE9mSXEifQ.mTJFA_PqwKDBVxta8U1qRht1CFfpOoQWOQL3Kr-uqZw"}
        })
        .then(response => {
            commit('TOGGLE_TODO');
        })
        .catch((error) => {
            console.log(error);
        });
    }
}
