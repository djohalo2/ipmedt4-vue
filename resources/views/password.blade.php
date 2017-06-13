<head>
  <style media="screen">
    body {
      background-color: #f6f6f6;
    }

    .logo {
      height: 5vh;
      display: block;
      margin: 3vh auto;
    }

    .container {
      background-color: white;
      border-radius:2px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      height: 80vh;
      width: 70%;
      margin: 3vh auto;
      overflow: hidden;
    }

    .banner {
      background-color: #e74c3c;
      color: white;
      padding: 20px;
      font-size: 1.15rem;
      font-weight: 300;
      font-family: sans-serif;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

    .message {
      font-family: sans-serif;
      margin: 3vh auto;
      width: 80%;
      font-weight: 100;
    }

    .name {
      font-size: 1.5rem;
    }

    a {
      color: black;
      text-decoration: underline;
      font-weight: 500;
    }
  </style>
</head>

<body>

  <img class="logo" src="https://mrgiantdwarf.stackstorage.com/public-share/OE9BipFu2MgKGEl/preview?path=/&mode=thumbnail&size=medium" alt="logo">

  <div class="container">
      <div class="banner">
          <b>mijn</b>nazorg
      </div>

      <div class="message">
          <p class="name">
              Beste {{ $data['firstname'] }} {{ $data['lastname'] }},<br>
          </p>
          <p>
              Dit is een vervolg op de mail over uw account voor Mijn nazorg.<br>
              U kunt inloggen op <a href="http://mijnnazorg.nl">mijnnazorg.nl</a>.<br>
              <br>
              Uw wachtwoord is: <b>{{ $data['password'] }}</b><br>
              <br>
              De gebruikersnaam heeft u eerder ontvangen.<br>
          </p>
          <p>
            <br>
              Met vriendelijke groet,<br>
              <br>
              Het team van Mijn nazorg
          </p>
      </div>
  </div>
</body>
