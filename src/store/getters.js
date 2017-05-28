export default {
    totalBehandelingen(state) {
        return state.behandelingen;
    },
    getBehandeling(state, id) {
        return state.currentBehandeling;
    },
    getPatientInfo(state) {
        return state.patientInfo;
    }
}
