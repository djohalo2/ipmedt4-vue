import axios from 'axios';
import { LocalStorage, SessionStorage } from 'quasar';

const BASE_URL = "http://www.mijnnazorg.nl/api/";

export default {
    CHECK_TOKEN({ commit }){
        let token = LocalStorage.get.item("token");
        commit('CHECK_TOKEN', token);
    },
    FETCH_PATIENTS({ commit, state }){
        console.log("JEEEJ");
        axios.get(BASE_URL + '/patient', { headers: { Authorization: "Bearer " + state.token}})
        .then(response => {
            commit('FETCH_PATIENTS', response.data.patients);
        })
        .catch((error) => {

        });
    }
}
