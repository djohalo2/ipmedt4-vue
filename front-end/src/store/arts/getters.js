export default {
    getTokenArts(state) {
      return state.token;
    },
    getPatients(state) {
      return state.patients;
    },
    getTotalPatientCount(state) {
      return state.patients.length;
    },
    getDoctorInfo(state) {
      return state.doctorData;
    },
    getPatientBehandelingen(state) {
      return state.patientBehandelingen
    },
    getAllMedicines(state) {
      return state.medicines
    }
}
