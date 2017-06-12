import axios from 'axios';
import { LocalStorage, SessionStorage } from 'quasar';
import router from './../../router'

const BASE_URL = "http://www.mijnnazorg.nl/api/";

export default {
    CHECK_TOKEN({ commit }){
        let token = LocalStorage.get.item("token");
        commit('CHECK_TOKEN', token);
    },
    FETCH_PATIENT({ commit, state }) {
        axios.get(BASE_URL + "authenticate/checkuser", { headers: { Authorization: "Bearer " + state.token}})
        .then(response => {
            let userId = response.data.user.id;
            state.userType = response.data.user.type;

            axios.get(BASE_URL + response.data.user.type + "/user/" + userId, { headers: { Authorization: "Bearer " + state.token}})
            .then(response => {
                if(state.userType === "patient"){
                    commit('FETCH_PATIENT', response.data.patient);
                    router.push({path: '/'});
                } else {
                    commit('FETCH_DOCTOR', response.data.doctor);

                    axios.get(BASE_URL + 'patient', { headers: { Authorization: "Bearer " + state.token}})
                    .then(response => {
                        commit('FETCH_PATIENTS', response.data.patients);
                    })
                    .catch((error) => {

                    });
                    router.push({path: '/arts'});
                }

                if(state.isFetching){
                    commit('TOGGLE_IS_FETCHING');
                }
            })
            .catch((error) => console.log('error' + error));
        })
        .catch((error) => {
            console.log('error ' + error);
        });
    },
    FETCH_TOKEN({ commit, state }, payload){
        axios.post(BASE_URL + "authenticate", {
            username: payload.username,
            password: payload.password
        })
        .then(response => {
            LocalStorage.set("token", response.data.token);
            // commit('CHECK_TOKEN', response.data.token);
            state.token = response.data.token;
        })
        .catch((error) => {
            state.token = "unauthorized";
        });
    },
    TOGGLE_TODO({ commit }, data) {
        axios({
            method: 'put',
            url: "http://178.62.240.123/api/medicine_todo/" + data.id,
            data: {
                done: + !data.completed
            },
            headers: { Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6XC9cLzE3OC42Mi4yNDAuMTIzXC9hcGlcL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTQ5NjkxODUzNSwiZXhwIjoxNDk5NTEwNTM1LCJuYmYiOjE0OTY5MTg1MzUsImp0aSI6ImlCeTR2YktMbmNDNE9mSXEifQ.mTJFA_PqwKDBVxta8U1qRht1CFfpOoQWOQL3Kr-uqZw"}
        })
        .then(response => {
            commit('TOGGLE_TODO', data.id);
        })
        .catch((error) => {
            console.log(error);
        });
    },
    ADD_NOTE({ commit, state }, data) {
        axios({
            method: "post",
            url: BASE_URL + "patient_note",
            data: {
                title: data.title,
                patient_id: data.patientId,
                note: data.note
            },
            headers: {
                Authorization: "Bearer " + state.token
            }
        })
        .then(response => {
            console.log("testje is gelukt he");
            commit('ADD_NOTE', data);
        })
        .catch((error) => {

        });
    }
}
