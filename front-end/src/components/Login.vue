<template>
    <div>
        <div class="layout-view">
            <div class="layout-padding">
              <div class="card">
                <div class="card-title">
                  Djo&amp;Co.<br />
                  <img id="logo" src="./../assets/logo_small.png" />
                  <p>Uw persoonlijke zorghandboek.</p>
                </div>
                <div class="card-content">
                  <form class="login" action="#" method="post">
                    <div class="floating-label">
                      <input required class="full-width">
                      <label>Gebruikersnaam</label>
                    </div>
                    <div class="floating-label">
                      <input type="password" required class="full-width">
                      <label>Wachtwoord</label>
                    </div>
                    <button class="primary" @click="">
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

</script>

<style lang="styl" scoped>
    .layout-view {
        background-image: url('./../assets/loginscreen.png');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        width:100vw;
        height:100vh;
    }

    .card {
      opacity: .95;
      background-color: #eee;
      border-radius:12px;
      max-width: 400px;
      margin: auto;
    }

    .card-title {
      text-align: center;
      font-size: 50px;
      font-weight: 300;
    }

    .card-title p {
      color:#666;
    }

    #logo {
      width:80px;
      opacity: 1;
    }

    .page-title {
        font-size:0.85rem;
        font-weight: 500;
        color: #a8a8a8;
        margin: 0.5rem 0;
    }

    .floating-label label {
      font-size:16px;
      opacity: 1;
    }

    form {
      text-align:center;
    }

    form * {
      margin-top:10px;
    }

    form button {
      margin: 20px 20px 20px 20px;
    }
</style>
