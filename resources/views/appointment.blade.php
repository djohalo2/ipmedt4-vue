<head>
    <style>
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

        .appointment-card {
            background-color: white;
            border-radius:2px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            padding: 15px;
        }
    </style>
</head>

<body style="background-color:#f6f6f6;" >

<img class="logo" src="https://mrgiantdwarf.stackstorage.com/public-share/OE9BipFu2MgKGEl/preview?path=/&mode=thumbnail&size=medium" alt="logo" style="height:5vh;display:block;margin-top:3vh;margin-bottom:3vh;margin-right:auto;margin-left:auto;" >

<div class="container" style="background-color:white;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);height:80vh;width:70%;margin-top:3vh;margin-bottom:3vh;margin-right:auto;margin-left:auto;overflow:hidden;" >
    <div class="banner" style="background-color:#e74c3c;color:white;padding-top:20px;padding-bottom:20px;padding-right:20px;padding-left:20px;font-size:1.15rem;font-weight:300;font-family:sans-serif;box-shadow:0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);" >
        <b>mijn</b>nazorg
    </div>

    <div class="message" style="font-family:sans-serif;margin-top:3vh;margin-bottom:3vh;margin-right:auto;margin-left:auto;width:80%;font-weight:100;" >
        <p class="name" style="font-size:1.5rem;" >
            Beste {{ $data['firstname'] }} {{ $data['lastname'] }},<br>
        </p>
        <p>
            Er is een nieuwe afspraak voor u gemaakt. Hieronder vindt u de details betreffende deze afspraak.<br>
            U kunt inloggen op <a href="http://mijnnazorg.nl" style="color:black;text-decoration:underline;font-weight:500;" >mijnnazorg.nl</a> om deze te bekijken.<br>
        </p>
        <div class="appointment-card" style="background-color:white;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);padding-top:15px;padding-bottom:15px;padding-right:15px;padding-left:15px;" >
            <br>
            Datum: {{ $data['date'] }}<br>
            Ontvangst: {{ $data['start'] }}<br>
            Geschatte afrond tijd: {{ $data['end'] }}<br>
            <br>
            Afdeling: {{ $data['department'] }}<br>
            Arts: {{ $data['doctor'] }}<br>
            <br>
        </div>
        <p>
            Vertrouwende u hiermee voldoende te hebben geinformeerd.
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

