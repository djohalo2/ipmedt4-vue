<?php

use App\Appointment;
use App\Bodypart;
use App\Department;
use App\Doctor;
use App\Doctor_note;
use App\Excercise;
use App\Excercise_todo;
use App\Medicine;
use App\Medicine_todo;
use App\Patient;
use App\Patient_note;
use App\Therapy;
use App\Type;
use App\User;
use App\Video;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class TableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $doctor_user = User::insert([
            'username'      => 'boris_reuk',
            'name'          => 'Boris Reuk',
            'email'         => 'boris_reuk@lumc.nl',
            'password'      => Hash::make(env('USER_PASSWORD', 'secret')),
            'type'          => 'doctor',
            'created_at'    => Carbon::now(),
            'updated_at'    => Carbon::now()
        ]);

        $patient_user = User::insert([
            'username'      => 'bas',
            'name'          => 'Bas van Bovene',
            'email'         => 'bas@bovene.nl',
            'password'      => Hash::make(env('USER_PASSWORD', 'secret')),
            'type'          => 'patient',
            'created_at'    => Carbon::now(),
            'updated_at'    => Carbon::now()
        ]);



        $patient = Patient::firstOrCreate([
            'gender' => 'Hr',
            'firstname' => 'Bas',
            'lastname' => 'van Gebrokene',
            'email' => 'bas@bovene.nl',
            'phone' => '0613239346',
            'birthday' => '1998-10-08',
            'street' => 'nassaulaan',
            'street_number' => '104',
            'postal_code' => '2332GP',
            'city' => 'zoeterwoude',
            'user_id' => 2
        ]);

        $department = Department::firstOrCreate([
            'naam' => 'breuken',
            'phone' => '0711231239',
            'location' => 'leiden'
        ]);

        $doctor = Doctor::firstOrCreate([
            'user_id' => 1,
            'gender' => 'Dr',
            'firstname' => 'Boris',
            'lastname' => 'Reuk',
            'department_id' => $department->id,
            'email' => 'boris_reuk@lumc.nl',
            'phone' => '0612312345'
        ]);


        //Excercise seeds

        $video = Video::firstOrCreate([
            'title' => 'Been gestrekt opzij',
            'url' => 'https://www.youtube.com/embed/5CLyljiHdD4?rel=0&amp;controls=0&amp;showinfo=0'
        ]);
        $excercise = Excercise::firstOrCreate([
            'title' => 'Been gestrekt opzij',
            'description' => 'Been strekken en sta goed op de benen. Gerbuik een bedleuning ter ondersteuning.',
            'video_id' => $video->id
        ]);
        $excercise_type = Type::firstOrCreate([
            'type' => 'Been'
        ]);
        DB::table('excercise_type')->insert([
            'excercise_id' => $excercise->id,
            'type_id' => $excercise_type->id
        ]);


        $video = Video::firstOrCreate([
            'title' => 'Duimen op',
            'url' => 'https://www.youtube.com/embed/-ObXXj5-FJw?rel=0&amp;controls=0&amp;showinfo=0'
        ]);
        $excercise = Excercise::firstOrCreate([
            'title' => 'Duimen op',
            'description' => 'Beide armen en handen rusten voor je. Maak een vuist en beweeg de duimen naar boven en beneden.',
            'video_id' => $video->id
        ]);
        $excercise_type = Type::firstOrCreate([
            'type' => 'Hand'
        ]);
        DB::table('excercise_type')->insert([
            'excercise_id' => $excercise->id,
            'type_id' => $excercise_type->id
        ]);


        $video = Video::firstOrCreate([
            'title' => 'Hand optillen',
            'url' => 'https://www.youtube.com/embed/wiTXMnPNOd0?rel=0&amp;controls=0&amp;showinfo=0'
        ]);
        $excercise = Excercise::firstOrCreate([
            'title' => 'Hand optillen',
            'description' => 'Beide armen gestrekt voor je houden en optillen.',
            'video_id' => $video->id
        ]);
        $excercise_type = Type::firstOrCreate([
            'type' => 'Hand'
        ]);
        DB::table('excercise_type')->insert([
            'excercise_id' => $excercise->id,
            'type_id' => $excercise_type->id
        ]);


        $video = Video::firstOrCreate([
            'title' => 'Arm heffen',
            'url' => 'https://www.youtube.com/embed/D58s19PHmkw?rel=0&amp;controls=0&amp;showinfo=0'
        ]);
        $excercise = Excercise::firstOrCreate([
            'title' => 'Arm heffen',
            'description' => 'Houdt de armen gebogen en de handen op schouderhoogte en strek de armen tot boven het hoofd.',
            'video_id' => $video->id
        ]);
        $excercise_type = Type::firstOrCreate([
            'type' => 'Arm'
        ]);
        DB::table('excercise_type')->insert([
            'excercise_id' => $excercise->id,
            'type_id' => $excercise_type->id
        ]);


        $video = Video::firstOrCreate([
            'title' => 'Schouders optrekken',
            'url' => 'https://www.youtube.com/embed/tjqaYBIQZ0w?rel=0&amp;controls=0&amp;showinfo=0'
        ]);
        $excercise = Excercise::firstOrCreate([
            'title' => 'Schouders optrekken',
            'description' => 'Beide armen en handen rusten voor je en rustig de schouders omhoog en omlaag bewegen.',
            'video_id' => $video->id
        ]);
        $excercise_type = Type::firstOrCreate([
            'type' => 'Schouder'
        ]);
        DB::table('excercise_type')->insert([
            'excercise_id' => $excercise->id,
            'type_id' => $excercise_type->id
        ]);


        $video = Video::firstOrCreate([
            'title' => 'O-vorm maken',
            'url' => 'https://www.youtube.com/embed/6bUNOXSpbUU?rel=0&amp;controls=0&amp;showinfo=0'
        ]);
        $excercise = Excercise::firstOrCreate([
            'title' => 'O-vorm maken',
            'description' => 'Laat je onderarmen rusten en draai de handpalm naar boven. Maak met je duim een cirkel met alle vingers.',
            'video_id' => $video->id
        ]);
        $excercise_type = Type::firstOrCreate([
            'type' => 'Hand'
        ]);
        DB::table('excercise_type')->insert([
            'excercise_id' => $excercise->id,
            'type_id' => $excercise_type->id
        ]);


        $video = Video::firstOrCreate([
            'title' => 'Arm buigen',
            'url' => 'https://www.youtube.com/embed/nP55-lK_5go?rel=0&amp;controls=0&amp;showinfo=0'
        ]);
        $excercise = Excercise::firstOrCreate([
            'title' => 'Arm buigen',
            'description' => 'Houdt beide ellebogen in je zij en buig de armen. ',
            'video_id' => $video->id
        ]);
        $excercise_type = Type::firstOrCreate([
            'type' => 'Arm'
        ]);
        DB::table('excercise_type')->insert([
            'excercise_id' => $excercise->id,
            'type_id' => $excercise_type->id
        ]);


        $video = Video::firstOrCreate([
            'title' => 'Vuisten maken',
            'url' => 'https://www.youtube.com/embed/zZi-Bj7QUL8?rel=0&amp;controls=0&amp;showinfo=0'
        ]);
        $excercise = Excercise::firstOrCreate([
            'title' => 'Vuisten maken',
            'description' => 'Beiden armen en handen rusten voor je en maak een vuist.',
            'video_id' => $video->id
        ]);
        $excercise_type = Type::firstOrCreate([
            'type' => 'Hand'
        ]);
        DB::table('excercise_type')->insert([
            'excercise_id' => $excercise->id,
            'type_id' => $excercise_type->id
        ]);


        $video = Video::firstOrCreate([
            'title' => 'Knie gestrekt heffen',
            'url' => 'https://www.youtube.com/embed/e9syKk1eQjc?rel=0&amp;controls=0&amp;showinfo=0'
        ]);
        $excercise = Excercise::firstOrCreate([
            'title' => 'Knie gestrekt heffen',
            'description' => 'Til het hele been op van je matras en houdt je been volledig gestrekt gedurende de oefening.',
            'video_id' => $video->id
        ]);
        $excercise_type = Type::firstOrCreate([
            'type' => 'Been'
        ]);
        DB::table('excercise_type')->insert([
            'excercise_id' => $excercise->id,
            'type_id' => $excercise_type->id
        ]);


        $video = Video::firstOrCreate([
            'title' => 'Ellebogen strekken',
            'url' => 'https://www.youtube.com/embed/v29mTqb9OKI?rel=0&amp;controls=0&amp;showinfo=0'
        ]);
        $excercise = Excercise::firstOrCreate([
            'title' => 'Ellebogen strekken',
            'description' => 'Laat je handen rusten en beweeg de armen naar voren en strek de ellebogen.',
            'video_id' => $video->id
        ]);
        $excercise_type = Type::firstOrCreate([
            'type' => 'Arm'
        ]);
        DB::table('excercise_type')->insert([
            'excercise_id' => $excercise->id,
            'type_id' => $excercise_type->id
        ]);



        //Medicine seeds

        Medicine::firstOrCreate([
            'name' => 'Paracetamol',
            'important' => 'Paracetamol stilt pijn en verlaagt koorts.',
            'side_effects' => 'Medicijnafhankelijke hoofdpijn. Deze hoofdpijn kan ontstaan als u dit medicijn meer dagen wel dan niet tegen hoofdpijn gebruikt. Na enige tijd ontstaat de hoofdpijn als u het medicijn even niet slikt of later dan gebruikelijk. U kunt er zo afhankelijk van worden.',
            'usage' => 'Tabletten: doe de tabletten eerst in een half glas water, laat dit even staan om ze uiteen te laten vallen en drink het dan op. Doe nogmaals water in het glas om ook de resten in te nemen.'
        ]);
        Medicine::firstOrCreate([
            'name' => 'Ibuprofen',
            'important' => 'Ibuprofen stilt pijn, remt ontstekingen en verlaagt koorts.',
            'side_effects' => 'Maagklachten: maagirritatie, buikpijn, misselijkheid, braken, vol gevoel, gebrek aan eetlust, boeren en zuurbranden. U heeft hier minder kans op als u dit medicijn inneemt met wat voedsel en een glas water of melk. Gebruik geen alcohol of andere voedingsmiddelen die de maag irriteren, zoals scherpe kruiden. De bijwerkingen op maag en darmen kunnen ook optreden bij zetpillen. Het medicijn komt dan namelijk via de bloedbaan ook bij de maagwand terecht. Heeft u last van slokdarmontstekingdoor opkomend maagzuur? De klachten kunnen verergeren. Neem contact op met uw arts als u dat bemerkt. Mensen boven de zeventig jaar hebben meer kans op bijwerkingen door dit medicijn. Artsen schrijven daarom meestal ook een maagbeschermer voor. Ook als u dit medicijn maar enkele dagen zal gebruiken.',
            'usage' => 'Tabletten of dragees. Innemen met een half glas water.'
        ]);
        Medicine::firstOrCreate([
            'name' => 'Diclofenac',
            'important' => 'Diclofenac stilt pijn, remt ontstekingen en verlaagt koorts.',
            'side_effects' => 'Maagklachten: maagirritatie, buikpijn, misselijkheid, braken, vol gevoel, gebrek aan eetlust, boeren en zuurbranden. U heeft hier minder kans op als u dit medicijn inneemt met wat voedsel en een glas water of melk. Gebruik geen alcohol of andere voedingsmiddelen die de maag irriteren, zoals scherpe kruiden. De bijwerkingen op maag en darmen kunnen ook optreden bij zetpillen. Het medicijn komt dan namelijk via de bloedbaan ook bij de maagwand terecht. Heeft u last van slokdarmontstekingdoor opkomend maagzuur? De klachten kunnen verergeren. Neem contact op met uw arts als u dat bemerkt. Mensen boven de zeventig jaar hebben meer kans op bijwerkingen door dit medicijn. Artsen schrijven daarom meestal ook een maagbeschermer voor. Ook als u dit medicijn maar enkele dagen zal gebruiken.',
            'usage' => 'Omhulde tabletten. Innemen met een half glas water.'
        ]);
        Medicine::firstOrCreate([
            'name' => 'Tramadol',
            'important' => 'Tramadol is een matige tot sterke pijnstiller.',
            'side_effects' => 'Sufheid, slaperigheid, een draaierig gevoel en een verminderd reactievermogen. Dit is vooral lastig bij activiteiten waarbij uw oplettendheid erg nodig is, zoals autorijden, het beklimmen van een ladder of het bewaken van een proces op het werk. Onderneem geen risicovolle activiteiten, zeker niet de eerste twee weken van de behandeling, als u nog aan het medicijn moet wennen.',
            'usage' => 'Gewone capsules: innemen met een half glas water.'
        ]);
        Medicine::firstOrCreate([
            'name' => 'Amoxicilline',
            'important' => 'Amoxicilline doodt bacteriën (antibioticum). Werkt binnen enkele dagen.',
            'side_effects' => 'Maagdarmklachten, zoals diarree of slappe ontlasting en lichte buikkrampen. Dit gaat vanzelf over binnen enkele dagen. Zeer zelden ontstaat een ernstige diarree (meer dan 7 keer per dag) met buikkrampen en soms met koorts. Waarschuw dan een arts. Drink voldoende vocht als u diarree heeft, anders raakt u uitgedroogd.',
            'usage' => 'Capsules: innemen met een half glas water of andere drank.'
        ]);
        Medicine::firstOrCreate([
            'name' => 'Oxazepam',
            'important' => 'Oxazepam werkt rustgevend vermindert angstgevoelens, ontspant spieren en maakt suf.',
            'side_effects' => 'Sufheid, vermoeidheid en, minder vaak ook slaperigheid. Hierdoor zijn uw reactie- en concentratievermogen verminderd, waardoor u een grote kans heeft op ongelukken. Ongelukken kunnen bijvoorbeeld plaatsvinden: in het verkeer, bij het beklimmen van een ladder, bedienen van apparaten of bij bewakings- en controlewerkzaamheden. Maar u heeft bijvoorbeeld ook meer kans te vallen als u \'s nachts uit bed moet om naar het toilet te gaan.',
            'usage' => 'Verdeel de tabletten gelijkmatig over de dag, dus ongeveer om de 6 tot 8 uur. Gebruikt u dit medicijn alleen in speciale gevallen, zoals bij vliegangst? Neem het dan minstens een 2 uur van tevoren in.'
        ]);
        Medicine::firstOrCreate([
            'name' => 'Noscapine',
            'important' => 'Noscapine is een hoestmiddel. Het vermindert de neiging om te hoesten.',
            'side_effects' => 'Misselijkheid. Meestal helpt het als u het medicijn met wat voedsel inneemt. Blijft u er ook na enige dagen last van houden? Neem dan contact op met uw arts.',
            'usage' => 'Meestal is het gebruik van dit medicijn maar voor enkele dagen nodig. Gebruik het tot de klachten zijn verdwenen. Een normale kriebelhoest hoort binnen twee weken over te zijn. Is dat bij u niet het geval, raadpleeg dan uw arts. Mogelijk is er een oorzaak voor uw hoest waar uw arts een oplossing voor weet.'
        ]);
        Medicine::firstOrCreate([
            'name' => 'Codeïne',
            'important' => 'Codeïne is een hoestprikkeldempend middel. Het is ook een pijnstiller.',
            'side_effects' => 'Verstopping (obstipatie). Eet, als dat mogelijk is, vezelrijke voeding en drink veel. Soms schrijven artsen bij dit middel een laxerend middel voor. Raadpleeg uw arts als u last krijgt van verstopping.',
            'usage' => 'Codeïne werkt het snelst als u het op een lege maag inneemt. U kunt het echter ook met voedsel innemen. De werking treedt dan wat later in. Heeft u snel last van uw maag, neem het dan in na een maaltijd.'
        ]);
        Medicine::firstOrCreate([
            'name' => 'Doxycycline',
            'important' => 'Doxycycline doodt bacteriën (antibioticum). Werkt binnen enkele dagen.',
            'side_effects' => 'Maagdarmklachten, zoals misselijkheid. Zeer zelden buikpijn, gebrek aan eetlust, maagpijn, brandend maagzuur, braken en diarree. Drink voldoende vocht als u diarree heeft, anders raakt u uitgedroogd.',
            'usage' => 'Gewone tabletten: tablet heel doorslikken terwijl u zit of staat, met een heel glas water . Hierdoor blijft de tablet niet in de slokdarm plakken en voorkomt u irritatievan de slokdarm.'
        ]);
        Medicine::firstOrCreate([
            'name' => 'Omeprazol',
            'important' => 'Omeprazol vermindert de aanmaak van zuur in de maag.',
            'side_effects' => 'Maagdarmklachten, zoals misselijkheid, braken, buikpijn, diarree, verstopping, winderigheid.',
            'usage' => 'Tabletten: innemen zonder te kauwen. Als u moeite heeft met slikken, mag u de tablet in een half glas water uit elkaar laten vallen. Het valt dan uiteen in kleine korreltjes die allemaal voorzien zijn van een beschermende laag. Roer de vloeistof om en drink hem op. Spoel het glas daarna na met een beetje water en drink dit op, om de achtergebleven korrels op te drinken.'
        ]);
        Medicine::firstOrCreate([
            'name' => 'Acetylsalicylzuur',
            'important' => 'Acetylsalicylzuur stilt pijn, verlaagt koorts en remt ontstekingen.',
            'side_effects' => 'Darmklachten: diarree, verstopping en winderigheid. Lijdt u aan een chronische darmontsteking, zoals de ziekte van Crohn of colitis ulcerosa, dan kan dit medicijn de klachten verergeren. Bespreek met uw arts of dit medicijn voor u geschikt is. Meestal schrijft uw arts behalve dit medicijn ook een maagbeschermend medicijn voor. Ook als u dit medicijn maar enkele dagen zal gebruiken.',
            'usage' => 'Los de tablet of het poeder daarom op in een glas water. Spoel het glas daarna na met een beetje water en drink dat ook op.'
        ]);
        Medicine::firstOrCreate([
            'name' => 'Oxycodon',
            'important' => 'Oxycodon is een sterke pijnstiller. Bij hevige pijn, zoals pijn na operaties, verwondingen en kanker. Ook bij zenuwpijn en in de palliatieve zorg (zorg in de laatste levensfase).',
            'side_effects' => 'Verstopping (obstipatie). Gebruik, als dit mogelijk is, vezelrijke voeding en drink veel. Meestal schrijven artsen bij dit medicijn een laxerend middel voor. Raadpleeg uw arts als u door oxycodon last heeft van verstopping.',
            'usage' => 'Capsules: doorslikken met een half glas water.'
        ]);
        Medicine::firstOrCreate([
            'name' => 'Fraxiparine',
            'important' => 'Fraxiparine zorgt ervoor dat bloed minder makkelijk samenklontert (antistollingsmedicijn). Hierdoor heeft u minder kans op trombose.',
            'side_effects' => 'Bloeduitstorting en zelden irritatie op de injectieplaats.',
            'usage' => 'Dien de injectie toe in de voor- of zijkant van de buik of in de bovenbenen. Vermijd toedienen in de buurt van een wond of litteken.'
        ]);


    }
}
