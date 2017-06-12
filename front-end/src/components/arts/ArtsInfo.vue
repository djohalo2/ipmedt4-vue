<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">Arts Informatie</p>
            <p class="profile-name">Sem Brekelbeen</p>
            <img class="profile-img" src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAbQAAAAJDJlZjUxNDJjLTc3N2EtNDg3My1hOGY0LWRiNmEyNGU1YzQ1OQ.jpg">
            <div class="card">
                <div class="card-title">
                    <p class="text-primary">MIJN GEGEVENS</p>
                    <ul>
                        <li>
                            <i>person</i>
                            <p>Sem Brekelbeen</p>
                        </li>

                        <li>
                            <i>class</i>
                            <p>Arts Botfracturen</p>
                        </li>

                        <li>
                            <i>email</i>
                            <p>sem@breakaleg.com</p>
                        </li>

                        <li>
                            <i>smartphone</i>
                            <p>06-13376969</p>
                        </li>

                        <li>
                            <i>today</i>
                            <p>27-01-1969</p>
                        </li>

                        <li>
                            <i>today</i>
                            <p>Ziekenhuisstraat 69</p>
                        </li>

                        <li>
                            <i>today</i>
                            <p>Groenlo</p>
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
