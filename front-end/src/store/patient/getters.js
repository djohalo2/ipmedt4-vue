export default {
    isFetching(state) {
        return state.isFetching;
    },
    getToken(state) {
        return state.token;
    },
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
    getOefening(state) {
        return state.currentOefening;
    },
    getAllTodos(state) {
        let todos = [];
        if(state.patientData.therapys){
            state.patientData.therapys.map(behandeling => {
                if(behandeling.medicine_todo.length > 0){
                    behandeling.medicine_todo.map(todo =>{
                        todos.push(todo);
                    });
                }
            });
            return todos;
        }
    },
    getAllMedicatie(state) {
        let medicatie = [];
        if(state.patientData.therapys){
            state.patientData.therapys.map(behandeling => {
                if(behandeling.medicines.length > 0){
                    behandeling.medicines.map(medicijn =>{
                        medicatie.push(medicijn);
                    });
                }
            });
            return medicatie;
        }
    },
    getArtsNotities(state) {
        let notities = [];
        if(state.patientData.therapys){
            state.patientData.therapys.map(behandeling => {
                behandeling.doctor_notes.map(notitie =>{
                    notities.push(notitie);
                });
            });
            return notities;
        }
    },
    getPatientNotities(state) {
        return state.patientData.notes;
    },
    getAllOefeningen(state){
        let oefeningen = [];
        if(state.patientData.therapys){
            state.patientData.therapys.map(behandeling => {
                if(behandeling.excercises.length > 0){
                    behandeling.excercises.map(oefening =>{
                        oefeningen.push(oefening);
                    });
                }
            });
            return oefeningen;
        }
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
            birthday: state.patientData.birthday,
            avatar: state.patientData.avatar
        };
    },
    getPatientId(state) {
        return state.patientData.id;
    }
}