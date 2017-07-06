<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">{{patient.firstname + " " + patient.lastname}}</p>
            <div class="card patient-info">
              <div class="card-title">
                <p class="text-primary">Gegevens</p>
                <div class="row">
                  <div class="offset-1of4 width-1of2">
                    <div class="card">
                      <div class="card-title">
                        <div class="row medium-gutter sm-column">
                          <div class="width1of2">
                            <img class="profile-img" :src="patient.avatar">
                          </div>

                          <div class="width1of2">
                            <ul class="patientinfo-list">
                              <li>Voornaam: {{patient.firstname}}</li>
                              <li>Achternaam: {{patient.lastname}}</li>
                              <li>Telefoon: {{patient.phone}}</li>
                              <li>Email: {{patient.email}}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-title">
                <i class="float-right add-icon" @click="$refs.addTherapyModal.open()">add_circle</i>
                <p class="text-primary">Behandelingen</p>
                <spinner class="loading-spinner" color="#e74c3c" v-if="isFetching"></spinner>
                <div class="list">
                  <div class="item three-lines" @click="clickBehandeling(behandeling.id)" v-for="behandeling in behandelingen" :key="behandeling.id">
                    <i class="item-primary">{{behandelingStatus(behandeling.end_date)}}</i>
                    <div class="item-content has-secondary">
                      <div class="item-title">{{behandeling.name}}</div>
                      <div class="item-label item-smaller">
                        Loopt sinds {{behandeling.start_date}}<br>
                        <p v-for="(bodypart, index) in behandeling.bodyparts" :key="index">{{bodypart.name}}</p>
                      </div>
                    </div>
                    <button class="primary small item-secondary text-white">Bekijken</button>
                  </div>
                </div>
              </div>
            </div>

            <q-modal ref="addTherapyModal" class="minimized patient-modal" :content-css="{padding: '50px'}">
              <p>Behandeling toevoegen</p>
              <div class="row small-gutter">
                <div class="width-1of2">
                  <input v-model="newTherapy.name" placeholder="Behandeling naam">
                </div>
              </div>
              <div class="row small-gutter">
                <div class="width-1of2">
                  <input v-model="newTherapy.bodyparts" placeholder="Categorie">
                </div>
              </div>
              <button class="red" @click="addTherapy()">Toevoegen</button>
            </q-modal>
        </div>
    </div>
</template>

<script>
import router from 'vue-router';
import moment from 'moment';

export default {
    name: 'patienten-page',
    data() {
      return {
        patientId: 0,
        newTherapy: {
          patient_id: '',
          name: '',
          department_id: '',
          created_by: '',
          bodyparts: ''
        },
        isFetching: false
      }
    },
    methods: {
      behandelingStatus(date) {
        return moment(date).diff(moment()) < 0 ? 'check_circle' : 'cached';
      },
      clickBehandeling(behandelingId) {
        this.$router.push({path: this.patient.id + '/behandelingen/' + behandelingId})
      },
      addTherapy() {
        this.newTherapy.patient_id = this.patient.id
        this.newTherapy.department_id = this.doctorInfo.department_id
        this.newTherapy.created_by = this.doctorInfo.id
        this.$store.dispatch('ADD_THERAPY', this.newTherapy).then(() => {
          this.$refs.addTherapyModal.close()
          for(let item in this.newTherapy) {
            this.newTherapy[item] = ''
          }
        })
      }
    },
    computed: {
        doctorInfo() {
          return this.$store.getters.getDoctorInfo
        },
        patients() {
          return this.$store.getters.getPatients
        },
        notities() {
          return this.$store.getters.getNotities
        },
        behandelingen() {
          return this.$store.getters.getPatientBehandelingen
        },
        patient() {
            for(let patient in this.patients) {
                if (this.patients[patient].id == this.$route.params.patientId) {
                    return this.patients[patient];
                }
            }
        }
    },
    created() {
      this.isFetching = true;
      this.$store.dispatch('FETCH_PATIENT_DATA', this.patient.id).then(() => {
        this.isFetching = false;
      })
    }
}
</script>

<style lang="scss" scoped>
    .profile-img {
      margin: 0 auto;
      width:200px;
      display: block;
    }

    span {
        color: #fff;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 13px;
    }

    .patientinfo-list {
      list-style-type: none;
      padding: 0;
    }

    .item-smaller {
      p {
        font-size:14px;
      }
    }

    .item {
      border-bottom: 1px solid #e0e0e0;
      cursor: pointer;

      &:hover {
        background-color: #F6F6F6;
      }
    }

    .item-secondary {
      width: 120px;
      font-size: 13px;
      margin-top: 25px;
      text-align: center;
    }

    .loading-spinner {
      margin: 0 auto;
      display: block;
    }

    .patient-info {
      background-image: url('../../../statics/patient-background.jpg');
    }

</style>
