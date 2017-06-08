import axios from 'axios';

const BASE_URL = "http://178.62.240.123/api/"

export default {
    FETCH_PATIENT({ commit }) {
        axios.get(BASE_URL + "patient/user/2", { headers: { Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6XC9cLzE3OC42Mi4yNDAuMTIzXC9hcGlcL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTQ5NjkxNDgxMSwiZXhwIjoxNDk5NTA2ODExLCJuYmYiOjE0OTY5MTQ4MTEsImp0aSI6IjFsQmt0bUxiQjUweDR2NEMifQ.WWNYf5QNBCnGymsGIHdPBn6Ssw6eppyeWFaMUlNYjyU"}})
        .then(response => {
            let patientData = response.data;
            commit('FETCH_PATIENT', patientData.patient);
        })
        .catch((error) => {
            console.log('error ' + error);
        });
    }
}
