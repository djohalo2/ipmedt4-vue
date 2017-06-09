import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

import _ from 'lodash';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        patientData: {},
        token: "",
        currentBehandeling: {},
        currentMedicijn: {},
        realData: {},
        patientInfo: {
            id: 12345,
            voornaam: "Jeroen",
            achternaam: "de Meij",
            email: "jeroen@gmail.nl",
            telefoon: "06-12345678",
            geboortedatum: "02/02/1990",
            foto: "http://www.sheffield.com/wp-content/uploads/2013/06/placeholder.png"
        },
        behandelingen: [
            {
                id: "botbreuk-been",
                title: "Botbreuk been",
                description: "Een botbreuk in het been opgelopen.",
                category: "been",
                date: "26-05-2017",
                todos: [
                    {
                        naam: "Paracetamol, Amoxicilline nemen",
                        date: "28-05-2017",
                        completed: true
                    },
                    {
                        naam: "Been en knie oefeningen doen",
                        date: "28-05-2017",
                        completed: false
                    }
                ],
                medicatie: [
                  {
                    id: "paracetamol",
                    behandeling: "botbreuk-been",
                    title: "Paracetamol 500mg",
                    description: "Goed tegen pijn en griep.",
                    date: "26-05-2017",
                    aantal: 3,
                    belangrijkeInformatie: [
                        "Paracetamol stilt pijn en verlaagt koorts.",
                        "Bij verschillende soorten pijn, zoals: hoofdpijn, migraine, keelpijn, oorpijn, spierpijn, gewrichtspijn, artrose en menstruatieklachten. Ook bij koorts, griep en verkoudheid.",
                        "Tabletten, capsules en drank werken binnen een half uur, zetpillen binnen 1 uur.",
                        "Gebruik paracetamol alleen als u pijn heeft. Stop als de pijn is verdwenen.",
                        "Heeft u na 2 dagen nog steeds erg veel pijn? Ga dan naar de huisarts.",
                        "Gebruikt u paracetamol meer dan 15 dagen per maand tegen hoofdpijn? Dit kan juist hoofdpijn veroorzaken. Neem contact op met uw arts.",
                        "Als u meerdere weken een hoge dosering gebruikt, heeft u een kleine kans op schade aan lever, nieren en/of bloed."
                    ],
                    mogelijkeBijwerkingen: [
                        "Medicijnafhankelijke hoofdpijn. Deze hoofdpijn kan ontstaan als u dit medicijn meer dagen wel dan niet tegen hoofdpijn gebruikt.",
                        "Overgevoeligheid voor paracetamol. Dit merkt u aan huiduitslag, galbulten en een enkele keer aan benauwdheid."
                    ],
                    hoeGebruiken: "Tabletten: doe de tabletten eerst in een half glas water, laat dit even staan om ze uiteen te laten vallen en drink het dan op. Doe nogmaals water in het glas om ook de resten in te nemen."
                  },
                  {
                    id: "ibuprofen",
                    behandeling: "botbreuk-been",
                    title: "Ibuprofen",
                    description: "Goed tegen pijn en griep maar dan nog beter.",
                    date: "16-05-2017",
                    aantal: 1,
                    belangrijkeInformatie: [
                        "Ibuprofen stilt pijn, remt ontstekingen en verlaagt koorts.",
                        "Bij verschillende soorten pijn en ontstekingen, zoals bij gewrichtspijn (jicht, reumatoïde artritis, ziekte van Bechterew, artrose), hoofdpijn, migraine, menstruatieklachten en spierpijn. Ook bij griep en verkoudheid.",
                        "Gewone tabletten, capsules, drank en korrels werken na 30 tot 60 minuten. De werking houdt 8 uur aan. Vertraagde-afgiftetabletten en zetpillen werken na 2-3 uur, ongeveer 12 uur lang.",
                        "Pas op met alcohol. Alcohol vergroot de kans op maagklachten."
                    ],
                    mogelijkeBijwerkingen: [
                        "Maagklachten: maagirritatie, buikpijn, misselijkheid, braken, vol gevoel, gebrek aan eetlust, boeren en zuurbranden.",
                        "Darmklachten: diarree, verstopping en winderigheid. Lijdt u aan een chronische darmontsteking, zoals de ziekte van Crohn of colitis ulcerosa? Dit medicijn kan de klachten verergeren."
                    ],
                    hoeGebruiken: "Tabletten of dragees. Innemen met een half glas water."
                  }
              ],
              oefeningen: [
                  {
                      id: "step-up-trap",
                      title: "Step up trap",
                      image: "./../assets/stepup.JPG",
                      description: "Ga op de onderste traptrede staan met uw gezicht richting de trap. Uw aangedane blijft staan en met de hak van uw andere been tikt uw de grond aan en komt weer met beide voeten op de traptrede staan. Let op dat uw knie niet naar binnen beweegt bij het zakken en dat uw heupen op gelijke hoogte blijven van elkaar.",
                      aantalSetjes: 20,
                      setLengte: 3,
                      dagaantal: 1
                  },
                  {
                      id: "bovenbeenspier-aanspannen",
                      title: "Bovenbeenspier aanspannen",
                      image: "./../assets/stepup.JPG",
                      description: "Span uw bovenbeenspier aan in 2-3 seconden (knieschijf optrekken) en ontspan uw bovenbeenspier weer in 2-3 seconden (knieschijf laten zakken)",
                      aantalSetjes: 20,
                      setLengte: 3,
                      dagaantal: 1
                  },
                  {
                      id: "bovenbeenspier-aanspannen",
                      title: "Bovenbeenspier aanspannen",
                      image: "./../assets/stepup.JPG",
                      description: "Span uw bovenbeenspier aan in 2-3 seconden (knieschijf optrekken) en ontspan uw bovenbeenspier weer in 2-3 seconden (knieschijf laten zakken)",
                      aantalSetjes: 20,
                      setLengte: 3,
                      dagaantal: 1
                  }
              ],
              notities: [
                  {
                      id: 1,
                      title: "Eerste notitie",
                      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit tortor, egestas at dapibus nec, semper quis arcu. In lacinia facilisis rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla pulvinar eros sem, sit amet egestas metus pulvinar sit amet.",
                      date: "29-05-2017"
                  },
                  {
                      id: 2,
                      title: "Tweede notitie",
                      content: "Morbi at dui et est egestas rhoncus. Sed commodo turpis non ante auctor iaculis id in nibh. Mauris a eleifend purus. Vivamus a efficitur odio.",
                      date: "29-05-2017"
                  },
                  {
                      id: 3,
                      title: "Laatste notitie",
                      content: "Aliquam volutpat ac nisl eget pellentesque. Duis viverra tellus neque, sodales ornare magna mollis in. Proin et luctus justo. Curabitur ut elit eget lacus auctor fringilla.",
                      date: "29-05-2017"
                  }
              ]
            },
            {
                id: "blaasontsteking",
                title: "Blaasontsteking",
                description: "Een blaasontsteking naar aanleiding van bacterie.",
                category: "blaas",
                date: "07-03-2017",
                todos: [
                    {
                        naam: "Afspraak maken",
                        date: "28-05-2017",
                        completed: true
                    }
                ],
                medicatie: [
                    {
                      id: "amoxicilline",
                      behandeling: "blaasontsteking",
                      title: "Amoxicilline",
                      description: "Amoxicilline is een antibioticum. Het wordt gebruikt bij infecties, zoals luchtweginfecties, oorontsteking en blaasontsteking.",
                      date: "26-05-2017",
                      aantal: 2,
                      belangrijkeInformatie: [
                          "Amoxicilline doodt bacteriën (antibioticum). Werkt binnen enkele dagen.",
                          "Bij infecties van longen, luchtpijp, keel, bijholtes, middenoor, blaas, maag en darmen. En bij geslachtsziekten (chlamydia, gonorroe), de ziekte van Lyme en hersenvliesontsteking.",
                          "Een kuur duurt meestal 5 tot 10 dagen, soms langer. Maak de hele kuur af. Ook als de infectie genezen lijkt, want misschien zijn er nog bacteriën over."
                      ],
                      mogelijkeBijwerkingen: [
                          "Maagdarmklachten, zoals diarree of slappe ontlasting en lichte buikkrampen. Dit gaat vanzelf over binnen enkele dagen.",
                          "Huiduitslag met rode vlekjes en bultjes. Dit kan ook nog enkele dagen na afloop van de kuur ontstaan."
                      ],
                      hoeGebruiken: "Capsules: innemen met een half glas water of andere drank."
                    }
                ],
                oefeningen: [

                ],
                notities: [

                ]
            }
        ]
    },
    getters,
    mutations,
    actions
});

export default store;
