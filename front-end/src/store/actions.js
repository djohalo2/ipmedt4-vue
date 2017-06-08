import axios from 'axios';

const BASE_URL = "http://178.62.240.123/api/"

export default {
    FETCH_PATIENT({ commit }) {
        axios.get(BASE_URL + "authenticate/checkuser", { headers: { Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6XC9cLzE3OC42Mi4yNDAuMTIzXC9hcGlcL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTQ5NjkxODUzNSwiZXhwIjoxNDk5NTEwNTM1LCJuYmYiOjE0OTY5MTg1MzUsImp0aSI6ImlCeTR2YktMbmNDNE9mSXEifQ.mTJFA_PqwKDBVxta8U1qRht1CFfpOoQWOQL3Kr-uqZw"}})
        .then(response => {
            let patientData = response.data.user.patient;
            commit('FETCH_PATIENT', patientData);
        })
        .catch((error) => {
            console.log('error ' + error);
        });
    }
    // FETCH_PATIENT({ commit }) {
    //     axios.post(BASE_URL + "authenticate/checkuser", { headers: { Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6XC9cLzE3OC42Mi4yNDAuMTIzXC9hcGlcL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTQ5NjkxODUzNSwiZXhwIjoxNDk5NTEwNTM1LCJuYmYiOjE0OTY5MTg1MzUsImp0aSI6ImlCeTR2YktMbmNDNE9mSXEifQ.mTJFA_PqwKDBVxta8U1qRht1CFfpOoQWOQL3Kr-uqZw"}})
    //     .then(response => {
    //         let patientData = response.data;
    //         commit('FETCH_PATIENT', patientData);
    //     })
    //     .catch((error) => {
    //         console.log('error ' + error);
    //     });
    // }
}
