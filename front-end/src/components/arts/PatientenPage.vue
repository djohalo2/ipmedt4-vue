<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">{{patient.firstname + " " + patient.lastname}}</p>

            <div class="card">
                <div class="card-title">
                    <p class="text-primary">Gegevens</p>
                    <img class="profile-img" :src="patient.avatar">
                    <ul class="patientinfo-list">
                      <li>Voornaam: {{patient.firstname}}</li>
                      <li>Achternaam: {{patient.lastname}}</li>
                      <li>Telefoon: {{patient.phone}}</li>
                      <li>Email: {{patient.email}}</li>
                    </ul>
                </div>
            </div>
            <div class="card">
                <div class="card-title">
                    <p class="text-primary">Behandelingen</p>
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
            patientId: 0
        }
    },
    methods: {
      behandelingStatus(date) {
        return moment(date).diff(moment()) < 0 ? 'check_circle' : 'cached';
      },
      clickBehandeling(behandelingId) {
        this.$router.push({path: this.patient.id + '/behandelingen/' + behandelingId})
      }
    },
    computed: {
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
      this.$store.dispatch('FETCH_PATIENT_DATA', this.patient.id)
    }
}
</script>

<style lang="scss" scoped>
    .profile-img {
      margin: 0 auto;
      border-radius: 50%;
      width:100px;
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

</style>
