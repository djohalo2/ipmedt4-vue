<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">Arts Informatie</p>
            <p class="profile-name">{{doctorData.firstname}} {{doctorData.lastname}}</p>
            <img class="profile-img" src="https://image.shutterstock.com/z/stock-vector-male-doctor-avatar-icon-with-a-faceless-man-with-flat-design-element-modern-style-logo-vector-281668325.jpg">
            <div class="card">
                <div class="card-title">
                    <p class="text-primary">MIJN GEGEVENS</p>
                    <ul>
                        <li>
                            <i>person</i>
                            <p>{{doctorData.firstname}} {{doctorData.lastname}}</p>
                        </li>

                        <li>
                            <i>class</i>
                            <p>{{doctorData.department.naam}}</p>
                        </li>

                        <li>
                            <i>email</i>
                            <p>{{doctorData.email}}</p>
                        </li>

                        <li>
                            <i>smartphone</i>
                            <p>{{doctorData.phone}}</p>
                        </li>

                        <li>
                            <i>today</i>
                            <p>Rip geen birthday</p>
                        </li>

                        <li>
                            <i>today</i>
                            <p>Ripgeenstraat 69</p>
                        </li>

                        <li>
                            <i>today</i>
                            <p>Engeenstad</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CountCard from './CountCard.vue';

export default {
    name: 'arts-informatie',
    components: {
        CountCard
    },
    computed: {
      doctorData() {
          return this.$store.getters.getDoctorInfo;
      }
    }
}
</script>

<style lang="scss">
  .layout-view {
      background-color: #F6F6F6;
  }
  .profile-name {
      text-align: center;
      font-weight: 600;
      font-size: 1.1rem;
      margin-top: 1rem;
  }
  .profile-img {
      width: 80px;
      height: 80px;
      border-radius: 100%;
      margin:0 auto;
      display: block;
  }
  .card {
      margin-top: 1rem;
      background: #fcfcfc;
      max-width: 700px;
      margin:0 auto;
      margin-top: 20px;
  }
  li > * {
      display: inline-block;
  }

  li {
      list-style-type: none;
      font-weight: 400;
  }

  ul {
      padding: 0;
  }
</style>
