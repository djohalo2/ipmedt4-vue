export default {
    totalBehandelingen(state) {
        return state.patientData.therapys;
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
        state.patientData.therapys.map(behandeling => {
            if(behandeling.medicine_todo.length > 0){
                behandeling.medicine_todo.map(todo =>{
                    todos.push(todo);
                });
            }
        });
        return todos;
    },
    getAllMedicatie(state) {
        let medicatie = [];
        state.patientData.therapys.map(behandeling => {
            if(behandeling.medicines.length > 0){
                behandeling.medicines.map(medicijn =>{
                    medicatie.push(medicijn);
                });
            }
        });
        return medicatie;
    },
    getArtsNotities(state) {
        let notities = [];
        state.patientData.therapys.map(behandeling => {
            behandeling.doctor_notes.map(notitie =>{
                notities.push(notitie);
            });
        });
        return notities;
    },
    getPatientNotities(state) {
        return state.patientData.notes;
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
        return {
            name: state.patientData.gender + " " + state.patientData.firstname + " " + state.patientData.lastname,
            email: state.patientData.email,
            phone: state.patientData.phone,
            address: state.patientData.street + " " + state.patientData.street_number,
            city: state.patientData.postal_code + " " + state.patientData.city,
            birthday: state.patientData.birthday
        };
    }
}
