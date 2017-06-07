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
    getAllTodos(state) {
        let todos = [];
        state.behandelingen.map(behandeling => {
            behandeling.todos.map(todo =>{
                todos.push(todo);
            });
        });
        return todos;
    },
    getAllMedicatie(state) {
        let medicatie = [];
        state.behandelingen.map(behandeling => {
            behandeling.medicatie.map(medicijn =>{
                medicatie.push(medicijn);
            });
        });
        return medicatie;
    },
    getAllNotities(state) {
        let notities = [];
        state.behandelingen.map(behandeling => {
            behandeling.notities.map(notitie =>{
                notities.push(notitie);
            });
        });
        return notities;
    },
    getAllOefeningen(state){
        let oefeningen = [];
        state.behandelingen.map(behandeling => {
            behandeling.oefeningen.map(oefening =>{
                oefeningen.push(oefening);
            });
        });
        return oefeningen;
    },
    getNotities(state) {
        return state.currentBehandeling.notities;
    },
    getMedicijn(state) {
      return state.currentMedicijn;
    },
    getPatientInfo(state) {
        return state.patientInfo;
    }
}
