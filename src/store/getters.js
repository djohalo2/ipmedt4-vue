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

        console.log(todos);
        return todos;
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
