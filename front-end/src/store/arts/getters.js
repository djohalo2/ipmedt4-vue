export default {
    getToken(state) {
        return state.token;
    },
    getPatients(state) {
        return state.patients;
    },
    getTotalPatientCount(state) {
        return state.patients.length;
    }
}
