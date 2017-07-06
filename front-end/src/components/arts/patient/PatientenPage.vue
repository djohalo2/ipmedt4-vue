<template>
    <div class="layout-view">
      <div class="card patient-info">
        <div class="card-title">
          <p class="text-white">Gegevens</p>
          <div class="row">
            <div class="patient-info-card">
              <div class="card">
                <div class="card-title">
                  <div class="row medium-gutter sm-column">
                    <div class="width-1of3 patient-left">
                      <img class="profile-img" :src="patient.avatar">
                    </div>
                    <div class="width-2of3 patient-right">
                      <h4>{{patient.firstname}} {{patient.lastname}}</h4>
                      <hr>
                      <div class="table">
                        <div class="table-row">
                          <div class="table-cell"><span>geboortedatum</span></div>
                          <div class="table-cell">
                            <div v-if="!editMode">{{patient.birthday}}</div>
                            <input v-if="editMode" v-model="editPatient.birthday">
                          </div>
                        </div>
                        <div class="table-row">
                          <div class="table-cell"><span>email</span></div>
                          <div class="table-cell">
                            <div v-if="!editMode">{{patient.email}}</div>
                            <input v-if="editMode" v-model="editPatient.email">
                          </div>
                        </div>
                        <div class="table-row">
                          <div class="table-cell"><span>telefoon</span></div>
                          <div class="table-cell">
                            <div v-if="!editMode">{{patient.phone}}</div>
                            <input v-if="editMode" v-model="editPatient.phone">
                          </div>
                        </div>
                        <div class="table-row">
                          <div class="table-cell"><span>straat</span></div>
                          <div class="table-cell">
                            <div v-if="!editMode">{{patient.street}} {{patient.street_number}}</div>
                            <input class="street-input" v-if="editMode" v-model="editPatient.street">
                            <input class="streetnumber-input" v-if="editMode" v-model="editPatient.street_number">
                          </div>
                        </div>
                        <div class="table-row">
                          <div class="table-cell"><span>postcode</span></div>
                          <div class="table-cell">
                            <div v-if="!editMode">{{patient.postal_code}}</div>
                            <input v-if="editMode" v-model="editPatient.postal_code">
                          </div>
                        </div>
                        <div class="table-row">
                          <div class="table-cell"><span>stad</span></div>
                          <div class="table-cell">
                            <div v-if="!editMode">{{patient.city}}</div>
                            <input v-if="editMode" v-model="editPatient.city">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="button primary full-width big" @click="toggleEditMode()" v-if="!editMode">Wijzigen</button>
                <button class="button primary half-btn big" @click="toggleEditMode()" v-if="editMode">Annuleer</button>
                <button class="button background-green half-btn float-right big" @click="updatePatient()" v-if="editMode">Opslaan</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="layout-padding">
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
        editMode: false,
        newTherapy: {
          patient_id: '',
          name: '',
          department_id: '',
          created_by: '',
          bodyparts: ''
        },
        editPatient: {
          id: '',
          gender: '',
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          birthday: '',
          postal_code: '',
          street: '',
          street_number: '',
          city: ''
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
      },
      toggleEditMode() {
        if(!this.editMode) {
          this.editPatient.id = this.patient.id,
          this.editPatient.gender = this.patient.gender,
          this.editPatient.firstname = this.patient.firstname,
          this.editPatient.lastname = this.patient.lastname,
          this.editPatient.email = this.patient.email,
          this.editPatient.phone = this.patient.phone,
          this.editPatient.birthday = this.patient.birthday,
          this.editPatient.postal_code = this.patient.postal_code,
          this.editPatient.street = this.patient.street,
          this.editPatient.street_number = this.patient.street_number,
          this.editPatient.city = this.patient.city
        }
        this.editMode = !this.editMode
        console.log(this.editMode)
      },
      updatePatient() {
        this.$store.dispatch('UPDATE_PATIENT', this.editPatient).then(() => {
          this.toggleEditMode()
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
  .layout-padding {
    padding-top: 1rem;
  }

  .profile-img {
    width:250px;
    display: block;
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

  .background-green {
    background-color: #2ecc71;
    color: #fff;
  }

  .patient-info {
    background-image: url('../../../statics/patient-background.jpg');
    -webkit-background-size: cover;
    background-size: cover;

    .patient-info-card {
      margin-left: 20%;
      flex: 0 1 60%;

      .card {

        .half-btn {
          width: 50% !important;
          display: inline-block;
          border-radius: 0;
        }

        .patient-left {
          margin: 0;
        }

        .patient-right {
          h4 {
            font-size: 28px;
            font-weight: 600;
          }

          hr {
            border: 1px solid #e6e6e6;
          }

          .table-cell {
            display: table-cell;
            width: 150px;
            color: black;
            font-weight: 400;
            font-size: 14px;

            span {
              color: #e74c3c;
              text-transform: uppercase;
              font-weight: 800;
              font-size: 12px;
            }

            input {
              padding: 0;
            }

            .street-input {
              width: 70%;
            }

            .streetnumber-input {
              width: 20%;
              margin-left: 5%;
            }
          }

          .table-row {
            display: table-row;
            height: 30px;
          }

          .table {
            display: table;
          }

        }
      }
    }
  }

</style>
