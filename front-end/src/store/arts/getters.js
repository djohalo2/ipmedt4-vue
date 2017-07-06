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
    },
    getAllExercises(state) {
      return state.excercises
    },
    getAppointments(state) {
      return state.appointments
    },
    getAppointmentsToday(state) {
      return state.appointmentsToday
    },
    getDoctorNotes(state) {
      return state.doctorNotes
    }
}
