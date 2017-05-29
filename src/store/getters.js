export default {
    totalBehandelingen(state) {
        return state.behandelingen;
    },
    getCurrentBehandelingType(state){
        return state.currentBehandeling.id;    
    },
    getBehandeling(state) {
        return state.currentBehandeling;
    },
    getMedicatie(state) {
        return state.currentBehandeling.medicatie;
    },
    getMedicijn(state) {
      return state.currentMedicijn;
    },
    getPatientInfo(state) {
        return state.patientInfo;
    }
}
