<template>
    <div>
        <div class="layout-view">
            <div class="layout-padding">
              <div class="card">
                <div class="card-title">
                    <div class="avatar">
                        <img id="logo" src="./../assets/logo_small.png" />
                    </div>
                </div>
                <div class="card-content">
                  <h4>Login</h4>
                  <div class="error-msg bg-warning" v-if="errorMsg">
                    <div class="error-icon">
                      <i>warning</i>
                    </div>
                    <div class="error-text">
                      Je hebt een onjuiste combinatie van gebruikersnaam/wachtwoord ingevuld.
                    </div>
                  </div>
                  <form class="login">
                      <div v-if="token === 'unauthorized'" class="card bg-warning">
                          <div class="card-title">Het ingevulde gebruikersnaam/wachtwoord klopt niet.</div>
                      </div>
                    <div class="floating-label">
                      <input v-model="username" required class="full-width">
                      <label>Gebruikersnaam</label>
                    </div>
                    <div class="floating-label">
                      <input v-model="password" type="password" required class="full-width">
                      <label>Wachtwoord</label>
                    </div>
                    <button class="primary full-width" v-on:submit.prevent @click="login">
                      Log in
                    </button>
                  </form>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from 'vue-router';

export default {
    data(){
        return {
            username: "",
            password: "",
            errorMsg: false
        }
    },
    computed: {
        token(){
            this.$store.getters.getToken;
        }
    },
    methods: {
        login(e) {
            e.preventDefault();
            console.log("Trying to log you in");
            let payload = {
                username: this.username,
                password: this.password
            };
            this.$store.dispatch('FETCH_TOKEN', payload).then(() => {
                if(this.token !== "unauthorized"){
                    console.log("Authorized! :)");
                    this.$store.dispatch('FETCH_PATIENT');
                }
            })
            .catch(() => {
              this.errorMsg = true
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }

    .layout-view {
        background-image: url('./../assets/loginscreen.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        width:100vw;
        height:100vh;
    }

    .avatar {
        height: 120px;
        width: 120px;
        padding: 0.7rem;
        border-radius: 50%;
        background-color: #fff;
        margin: -2rem auto;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

        img {
            margin: 1rem auto;
        }
    }

    .card {
      background-color: rgba(255, 255, 255, 0.95);
      max-width: 500px;
      overflow: visible;
      position: absolute;
      border-radius: 6px;
      left: 50%;
      margin: auto;
      top: 50%;
      transform: translate(-50%,-50%);
    }

    .card-title {
      text-align: center;
      font-size: 50px;
      font-weight: 300;
    }

    .card-content {
      padding: 2rem 4rem;
    }

    .card-title p {
      color:#666;
    }

    #logo {
      width:80px;
    }

    .page-title {
        font-size:0.85rem;
        font-weight: 500;
        color: #a8a8a8;
        margin: 0.5rem 0;
    }

    .floating-label label {
      font-size:16px;
    }

    form {
      text-align:center;
    }

    form * {
      margin-top:4px;
    }

    form button {
      margin: 20px 20px 20px 20px;
    }

    .error-msg {
      font-size: 14px;
      text-align: center;
      color: #fff;
      padding: 1rem;

      .error-icon {
        float: left;
        margin-left: 1rem;
        margin-top: 4px;
        font-size: 20px;
      }
    }

    @media screen and (max-width: 480px) {
      .error-msg {
        font-size: 12px;
      }

      .card-content {
        padding: 1rem 2rem;
      }
    }
</style>
