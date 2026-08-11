// ---- Fallback seed data (used when data/*.json can't be fetched, e.g. local preview) ----
const FALLBACK_COLUMNS = [
  {
    "id": "ebike-avinox",
    "title": "VTT Avinox MG1",
    "prompt": "5 dernières actualités sur le moteur Avinox mg1",
    "resultCount": 5,
    "createdAt": "2026-08-11T08:00:00.000Z",
    "updatedAt": "2026-08-11T22:34:13.200Z",
    "lastRun": "2026-08-11T23:00:00.000Z"
  },
  {
    "id": "youtube-ia-outils",
    "title": "Vidéos outils IA",
    "prompt": "5 liens vers les dernières vidéos Youtube qui parle des derniers outils IA.",
    "resultCount": 5,
    "createdAt": "2026-08-11T08:00:00.000Z",
    "updatedAt": "2026-08-11T22:35:14.382Z",
    "lastRun": "2026-08-11T23:00:00.000Z"
  },
  {
    "id": "presse",
    "title": "Evénements culturels Lausanne",
    "prompt": "5 prochains événements culturels proches de Lausanne à partir d'aujourd'hui",
    "resultCount": 5,
    "createdAt": "2026-08-11T21:39:53.869Z",
    "updatedAt": "2026-08-11T22:36:28.310Z",
    "lastRun": "2026-08-11T23:00:00.000Z"
  },
  {
    "id": "recettes-avocat-saumon",
    "title": "Recettes avocat & saumon",
    "prompt": "5 recettes faciles avec avocat et saumon",
    "resultCount": 5,
    "createdAt": "2026-08-11T08:00:00.000Z",
    "updatedAt": "2026-08-11T22:36:56.618Z",
    "lastRun": "2026-08-11T23:00:00.000Z"
  },
  {
    "id": "prochaines-competition-de-vtt-en-suisse",
    "title": "Compétition de VTT en Suisse",
    "prompt": "3 prochaines compétitions de VTT en Suisse.",
    "resultCount": 3,
    "createdAt": "2026-08-11T22:37:48.168Z",
    "updatedAt": "2026-08-11T22:37:57.921Z",
    "lastRun": "2026-08-11T23:00:00.000Z"
  },
  {
    "id": "prevision-de-vent-pour-les-prochains-jour-a-st-prex-suisse-avec-windy",
    "title": "Prévision de vent pour les prochains jour à St-Prex suisse avec Windy",
    "prompt": "Prévision de vent pour les prochains jour à St-Prex suisse avec Windy",
    "resultCount": 5,
    "createdAt": "2026-08-11T22:39:16.268Z",
    "updatedAt": "2026-08-11T22:39:16.268Z",
    "lastRun": "2026-08-11T23:00:00.000Z"
  }
];

const FALLBACK_RESULTS = {
  "ebike-avinox": [
    {
      "id": "mg1-a1",
      "type": "article",
      "title": "Eurobike 2026 | Avinox MG1 : un moteur avec boîte de vitesses intégrée",
      "summary": "Trois mois après le lancement des M2 et M2S, Avinox dévoile ce concept en collaboration avec Canyon, Commencal, Forbidden, Mondraker et Megamo.",
      "url": "https://www.vojomag.com/news/eurobike-2026-avinox-mg1-et-maintenant-un-moteur-avec-boite-de-vitesses-integree/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.vojomag.com%2Fnews%2Feurobike-2026-avinox-mg1-et-maintenant-un-moteur-avec-boite-de-vitesses-integree%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "mg1-a2",
      "type": "article",
      "title": "DJI Avinox MG1 : ce nouveau moteur change de vitesse en 0,1 seconde",
      "summary": "Transmission intégrée, changements de rapport sous forte charge ou à l'arrêt, plusieurs modes de conduite dont un mode automatique.",
      "url": "https://www.cleanrider.com/actus/dji-avinox-mg1-moteur-velo-electrique-transmission-automatique/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.cleanrider.com%2Factus%2Fdji-avinox-mg1-moteur-velo-electrique-transmission-automatique%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "mg1-a3",
      "type": "article",
      "title": "Avinox dévoile le concept produit Avinox MG1 à l'Eurobike 2026",
      "summary": "Aucune date de commercialisation annoncée ; le moteur ne devrait pas être disponible cette année.",
      "url": "https://www.prnewswire.com/news-releases/avinox-devoile-le-concept-produit-avinox-mg1-a-leurobike-2026-302807706.html",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.prnewswire.com%2Fnews-releases%2Favinox-devoile-le-concept-produit-avinox-mg1-a-leurobike-2026-302807706.html?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "mg1-a4",
      "type": "article",
      "title": "New Avinox MG gearbox motor prototype: is this the end of the classic drivetrain?",
      "summary": "E-MOUNTAINBIKE Magazine teste le prototype et s'interroge sur l'avenir de la transmission classique en VTTAE.",
      "url": "https://ebike-mtb.com/en/avinox-mg-gearbox-motor/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Febike-mtb.com%2Fen%2Favinox-mg-gearbox-motor%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "mg1-a5",
      "type": "article",
      "title": "Avinox MG Concept: Lightweight, Full-Power Combined eBike Motor & Gearbox",
      "summary": "Bikerumor détaille le concept présenté à l'Eurobike 2026 : moteur et boîte de vitesses combinés en un seul ensemble léger.",
      "url": "https://bikerumor.com/avinox-mg-concept-combined-ebike-motor-and-gearbox-at-eurobike-2026/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fbikerumor.com%2Favinox-mg-concept-combined-ebike-motor-and-gearbox-at-eurobike-2026%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    }
  ],
  "youtube-ia-outils": [
    {
      "id": "yt-b1",
      "type": "video",
      "title": "Les meilleurs outils IA à utiliser en 2026",
      "summary": "Un tour d'horizon rapide en format short des outils IA à connaître cette année.",
      "url": "https://www.youtube.com/shorts/ziMfHt9hnlw",
      "image": "https://img.youtube.com/vi/ziMfHt9hnlw/hqdefault.jpg",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "yt-b2",
      "type": "video",
      "title": "TOP 5 des générateurs de vidéo IA : les meilleurs outils de 2026 (+ bonus nouveauté)",
      "summary": "Comparatif des générateurs de vidéo IA les plus performants du moment.",
      "url": "https://www.youtube.com/watch?v=UG5KPcaQrGA",
      "image": "https://img.youtube.com/vi/UG5KPcaQrGA/hqdefault.jpg",
      "date": "2026-02-01T00:00:00.000Z",
      "datePrecision": "month",
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "yt-b3",
      "type": "video",
      "title": "Génération de vidéos avec l'IA : quel est le meilleur outil en 2026 ?",
      "summary": "Analyse comparative pour choisir le bon outil de génération vidéo par IA.",
      "url": "https://www.youtube.com/watch?v=OTIrzJED6Ns",
      "image": "https://img.youtube.com/vi/OTIrzJED6Ns/hqdefault.jpg",
      "date": "2026-04-01T00:00:00.000Z",
      "datePrecision": "month",
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "yt-b4",
      "type": "video",
      "title": "Comprendre l'IA en 2026 (ce que vous devez VRAIMENT savoir)",
      "summary": "Un point complet sur l'état de l'IA et de ses outils cette année.",
      "url": "https://www.youtube.com/watch?v=uonQawqg8N4",
      "image": "https://img.youtube.com/vi/uonQawqg8N4/hqdefault.jpg",
      "date": "2026-07-10T00:00:00.000Z",
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "yt-b5",
      "type": "video",
      "title": "Intelligence artificielle 2026-2028 : se préparer au vertige qui vient",
      "summary": "Une projection sur l'évolution des outils IA dans les prochaines années.",
      "url": "https://www.youtube.com/watch?v=RatJ6UDm98U",
      "image": "https://img.youtube.com/vi/RatJ6UDm98U/hqdefault.jpg",
      "date": "2026-03-06T00:00:00.000Z",
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    }
  ],
  "recettes-avocat-saumon": [
    {
      "id": "rec-b1",
      "type": "recipe",
      "title": "Saumon grillé et salsa d'avocat (BBQ)",
      "summary": "Avocat, oignon, coriandre et jus de lime en salsa fraîche, saumon cuit 3-4 minutes de chaque côté sur le barbecue.",
      "url": "https://chefcuisto.com/recette/saumon-grille-avec-une-salsa-davocat/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fchefcuisto.com%2Frecette%2Fsaumon-grille-avec-une-salsa-davocat%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "rec-b2",
      "type": "recipe",
      "title": "Saumon & avocat, tout simplement",
      "summary": "Saumon zesté d'agrumes, avocat en dés sur lit de jeunes pousses d'épinards, crème de mascarpone aux herbes fraîches.",
      "url": "https://www.jcdavid.fr/recette-saumon-avocat/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.jcdavid.fr%2Frecette-saumon-avocat%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "rec-b3",
      "type": "recipe",
      "title": "Bowl de saumon fumé, avocat & grenailles",
      "summary": "Prêt en 20 minutes : grenailles, salade, miettes de saumon fumé et avocat, mélangés à la vinaigrette.",
      "url": "https://www.hellofresh.fr/recipes/bowl-de-saumon-fume-avocat-and-grenailles-646cad1222f7f34e1f95d07d",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.hellofresh.fr%2Frecipes%2Fbowl-de-saumon-fume-avocat-and-grenailles-646cad1222f7f34e1f95d07d?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "rec-b4",
      "type": "recipe",
      "title": "Avocats au saumon fumé, citron vert, aneth et ciboulette",
      "summary": "Un classique revisité avec des saveurs fraîches d'agrumes et d'herbes.",
      "url": "https://www.recette-healthy.com/recette/avocats-au-saumon-fume/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.recette-healthy.com%2Frecette%2Favocats-au-saumon-fume%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "rec-b5",
      "type": "recipe",
      "title": "Tartare de saumon et avocat",
      "summary": "Saumon mariné au citron vert, gingembre et soja, mélangé à l'avocat en dés. Servi avec des chips wonton ou toasts croustillants.",
      "url": "https://chefsquare.fr/recette-tartare-saumon-avocat",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fchefsquare.fr%2Frecette-tartare-saumon-avocat?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    }
  ],
  "presse": [
    {
      "id": "laus-1",
      "type": "article",
      "title": "Athletissima : saut à la perche à Ouchy",
      "summary": "Compétition masculine de saut à la perche le jeudi 20 août 2026 à 18h, Place de la Navigation à Ouchy, accès libre.",
      "url": "https://www.cityzeum.com/evenement/lausanne",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.cityzeum.com%2Fevenement%2Flausanne?w=400&h=225",
      "date": "2026-08-20T00:00:00.000Z",
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "laus-2",
      "type": "article",
      "title": "Lausanne Judo Grand Slam",
      "summary": "Du 28 au 30 août 2026, la Vaudoise arena accueille pour la première fois une étape du World Judo Tour, avec près de 900 athlètes de plus de 50 nations.",
      "url": "https://www.tempslibre.ch/ou-sortir/lausanne-104",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.tempslibre.ch%2Fou-sortir%2Flausanne-104?w=400&h=225",
      "date": "2026-08-28T00:00:00.000Z",
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "laus-3",
      "type": "article",
      "title": "Agenda officiel des manifestations – Ville de Lausanne",
      "summary": "Agenda municipal officiel, mis à jour en continu avec tous les événements culturels à venir dans la ville.",
      "url": "https://www.lausanne.ch/agenda-et-actualites/agenda.html",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.lausanne.ch%2Fagenda-et-actualites%2Fagenda.html?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "laus-4",
      "type": "article",
      "title": "Lausanne Tourisme – Événements",
      "summary": "Sélection d'événements à venir par l'office du tourisme : expositions, concerts, festivals.",
      "url": "https://www.lausanne-tourisme.ch/en/events/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.lausanne-tourisme.ch%2Fen%2Fevents%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "laus-5",
      "type": "article",
      "title": "Leprogramme.ch – Agenda culturel Lausanne",
      "summary": "Concerts, spectacles, soirées et sorties dans la région lausannoise.",
      "url": "https://vd.leprogramme.ch/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fvd.leprogramme.ch%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    }
  ],
  "prochaines-competition-de-vtt-en-suisse": [
    {
      "id": "vtt-1",
      "type": "article",
      "title": "Swiss Cycling – Calendrier VTT officiel",
      "summary": "Calendrier officiel des compétitions VTT en Suisse, filtrable par catégorie et période.",
      "url": "https://www.swiss-cycling.ch/fr/vtt/calendrier.html",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.swiss-cycling.ch%2Ffr%2Fvtt%2Fcalendrier.html?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "vtt-2",
      "type": "article",
      "title": "Battistrada – Calendrier des événements VTT Suisse 2026-2027",
      "summary": "Liste complète des cyclosportives et courses VTT en Suisse, avec dates et localisations.",
      "url": "https://battistrada.com/fr/calendrier-cyclosportives/suisse/velo-tout-terrain/?biketype=2",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fbattistrada.com%2Ffr%2Fcalendrier-cyclosportives%2Fsuisse%2Fvelo-tout-terrain%2F%3Fbiketype%3D2?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "vtt-3",
      "type": "article",
      "title": "Ahotu – Calendrier VTT Suisse",
      "summary": "Calendrier international filtrable par pays et discipline, incluant les prochaines courses VTT suisses.",
      "url": "https://www.ahotu.com/calendar/mountain-biking/switzerland",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.ahotu.com%2Fcalendar%2Fmountain-biking%2Fswitzerland?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    }
  ],
  "prevision-de-vent-pour-les-prochains-jour-a-st-prex-suisse-avec-windy": [
    {
      "id": "vent-1",
      "type": "link",
      "title": "Windfinder – Prévisions de vent Saint-Prex",
      "summary": "Prévisions par intervalles de 3h jusqu'à 10 jours (vitesse, direction, rafales).",
      "url": "https://fr.windfinder.com/forecast/saint-prex",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ffr.windfinder.com%2Fforecast%2Fsaint-prex?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "vent-2",
      "type": "link",
      "title": "Windfinder – Rapport météo temps réel Saint-Prex",
      "summary": "Conditions de vent actuelles mesurées en temps réel à Saint-Prex.",
      "url": "https://fr.windfinder.com/report/saint-prex",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ffr.windfinder.com%2Freport%2Fsaint-prex?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "vent-3",
      "type": "link",
      "title": "Windy.app – Saint-Prex, vent, vagues et météo",
      "summary": "Prévisions basées sur le modèle GFS, mises à jour 4 fois par jour, avec info spéciales voile/kitesurf.",
      "url": "https://windy.app/fr/forecast2/spot/603444/Saint-Prex",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwindy.app%2Ffr%2Fforecast2%2Fspot%2F603444%2FSaint-Prex?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "vent-4",
      "type": "link",
      "title": "Meteo Suisse – Saint-Prex en temps réel",
      "summary": "Prévisions météo locales pour Saint-Prex.",
      "url": "https://meteo-ch.ch/fr/cities/saint-prex.html",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmeteo-ch.ch%2Ffr%2Fcities%2Fsaint-prex.html?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    },
    {
      "id": "vent-5",
      "type": "link",
      "title": "MétéoMédia – Prévisions du vent Saint-Prex",
      "summary": "Prévisions du vent pour Saint-Prex, canton de Vaud.",
      "url": "https://www.meteomedia.com/fr/ville/ch/vaud/saint-prex/vents",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.meteomedia.com%2Ffr%2Fville%2Fch%2Fvaud%2Fsaint-prex%2Fvents?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T23:00:00.000Z"
    }
  ]
};

const TYPE_ICON = { article: "📰", video: "▶️", recipe: "🍳", link: "🔗", default: "✨" };

const ICONS = {
  pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>',
  chevronLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
  chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.07" y2="4.93"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
};

const state = {
  columns: [],
  results: {},
  sha: { columns: null, results: null },
  gh: loadGhConfig(),
  pendingSaves: 0
};

const dragState = { id: null };

function $(sel, root = document) { return root.querySelector(sel); }
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k === "disabled") node.disabled = Boolean(v);
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  }
  for (const c of [].concat(children)) {
    if (c == null) continue;
    node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  }
  return node;
}

function loadGhConfig() {
  try {
    return JSON.parse(localStorage.getItem("dashboard-gh-config") || "null") || {
      owner: "yakari999", repo: "ai-daschboard", branch: "main", token: ""
    };
  } catch {
    return { owner: "yakari999", repo: "ai-daschboard", branch: "main", token: "" };
  }
}
function saveGhConfig(cfg) {
  localStorage.setItem("dashboard-gh-config", JSON.stringify(cfg));
  state.gh = cfg;
}

function toast(msg, ms = 3200) {
  const wrap = $("#toastWrap");
  const t = el("div", { class: "toast" }, msg);
  wrap.appendChild(t);
  setTimeout(() => t.remove(), ms);
}

// ---- Data loading ----
async function loadData() {
  try {
    const bust = Date.now();
    const [colRes, resRes] = await Promise.all([
      fetch(`data/columns.json?t=${bust}`, { cache: "no-store" }),
      fetch(`data/results.json?t=${bust}`, { cache: "no-store" })
    ]);
    if (!colRes.ok || !resRes.ok) throw new Error("fetch failed");
    state.columns = await colRes.json();
    state.results = await resRes.json();
  } catch {
    state.columns = FALLBACK_COLUMNS;
    state.results = FALLBACK_RESULTS;
    toast("Aperçu local : données d'exemple affichées (pas de connexion au dépôt).");
  }
}

// ---- GitHub Contents API (used only when a token is configured) ----
function b64EncodeUtf8(str) {
  return btoa(unescape(encodeURIComponent(str)));
}
function b64DecodeUtf8(str) {
  return decodeURIComponent(escape(atob(str)));
}
async function ghApi(path, opts = {}) {
  const { owner, repo, token } = state.gh;
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
    ...opts,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      ...(opts.headers || {})
    }
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`GitHub API ${res.status}: ${body.slice(0, 200)}`);
  }
  return res.json();
}
async function ghGetSha(path) {
  try {
    const data = await ghApi(`${path}?ref=${state.gh.branch}`);
    return data.sha;
  } catch {
    return null;
  }
}
async function ghPutFile(path, obj, message) {
  const sha = await ghGetSha(path);
  const body = {
    message,
    content: b64EncodeUtf8(JSON.stringify(obj, null, 2)),
    branch: state.gh.branch
  };
  if (sha) body.sha = sha;
  return ghApi(path, { method: "PUT", body: JSON.stringify(body) });
}

function isEditable() {
  return Boolean(state.gh.token);
}

async function persistColumns(message) {
  if (!isEditable()) return;
  state.pendingSaves++;
  try {
    await ghPutFile("data/columns.json", state.columns, message);
  } finally {
    state.pendingSaves--;
  }
}
async function persistResults(message) {
  if (!isEditable()) return;
  state.pendingSaves++;
  try {
    await ghPutFile("data/results.json", state.results, message);
  } finally {
    state.pendingSaves--;
  }
}

// ---- Rendering ----
function formatDate(iso, precision) {
  if (!iso) return null;
  try {
    if (precision === "month") {
      return new Date(iso).toLocaleDateString("fr-FR", { month: "short", year: "numeric" });
    }
    return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
  } catch {
    return null;
  }
}

function renderTile(item) {
  const icon = TYPE_ICON[item.type] || TYPE_ICON.default;
  const media = item.image
    ? el("img", {
        class: "tile-media", src: item.image, alt: "", loading: "lazy",
        onerror: (e) => e.target.replaceWith(el("div", { class: "tile-media placeholder" }, icon))
      })
    : el("div", { class: "tile-media placeholder" }, icon);
  const pubDate = formatDate(item.date, item.datePrecision);
  const footerChildren = [el("span", { class: "type-badge" }, item.type || "info")];
  if (pubDate) {
    footerChildren.push(el("span", { class: "tile-date", title: "Date de parution" }, pubDate));
  }
  const body = el("div", { class: "tile-body" }, [
    el("p", { class: "tile-title" }, item.title || "Sans titre"),
    el("p", { class: "tile-summary" }, item.summary || ""),
    el("div", { class: "tile-footer" }, footerChildren)
  ]);
  const tag = item.url ? "a" : "div";
  const attrs = item.url ? { class: "tile", href: item.url, target: "_blank", rel: "noopener" } : { class: "tile" };
  return el(tag, attrs, [media, body]);
}

function renderColumn(col, idx, total) {
  const items = state.results[col.id] || [];
  const body = el("div", { class: "column-body" },
    items.length ? items.map(renderTile) : [el("div", { class: "empty-tile" }, "Aucun résultat pour l'instant.")]
  );

  const menu = el("div", { class: "column-menu" }, [
    el("button", { class: "mini-btn", title: "Déplacer à gauche", disabled: idx === 0, onclick: () => moveColumn(col.id, -1), html: ICONS.chevronLeft }),
    el("button", { class: "mini-btn", title: "Déplacer à droite", disabled: idx === total - 1, onclick: () => moveColumn(col.id, 1), html: ICONS.chevronRight }),
    el("button", { class: "mini-btn", title: "Modifier le prompt", onclick: () => openEditForm(col), html: ICONS.pencil }),
    el("button", { class: "mini-btn danger", title: "Supprimer", onclick: () => deleteColumn(col.id), html: ICONS.trash })
  ]);

  const headAttrs = { class: "column-head" };
  if (isEditable()) {
    headAttrs.draggable = "true";
    headAttrs.title = "Glisser pour réorganiser";
    headAttrs.ondragstart = (e) => {
      if (e.target.closest("button")) { e.preventDefault(); return; }
      dragState.id = col.id;
      e.dataTransfer.effectAllowed = "move";
      e.currentTarget.closest(".column").classList.add("dragging");
    };
    headAttrs.ondragend = (e) => {
      e.currentTarget.closest(".column").classList.remove("dragging");
      $("#board").querySelectorAll(".column.drag-over").forEach(n => n.classList.remove("drag-over"));
      dragState.id = null;
    };
  }

  const head = el("div", headAttrs, [
    el("div", { class: "column-title-row" }, [
      el("h2", { class: "column-title" }, col.title),
      menu
    ]),
    el("p", { class: "column-prompt" }, col.prompt),
    el("div", { class: "column-meta" }, [
      el("span", { title: "Dernière mise à jour de cette colonne" }, col.lastRun ? `Màj ${formatDate(col.lastRun)}` : "Jamais exécuté"),
      el("button", { class: "refresh-btn", onclick: () => requestRefresh(col) }, ["🔄 Rafraîchir"])
    ])
  ]);

  const columnAttrs = { class: "column" };
  if (isEditable()) {
    columnAttrs.ondragover = (e) => {
      if (!dragState.id || dragState.id === col.id) return;
      e.preventDefault();
      e.currentTarget.classList.add("drag-over");
    };
    columnAttrs.ondragleave = (e) => {
      e.currentTarget.classList.remove("drag-over");
    };
    columnAttrs.ondrop = (e) => {
      e.preventDefault();
      e.currentTarget.classList.remove("drag-over");
      if (dragState.id && dragState.id !== col.id) reorderColumns(dragState.id, col.id);
      dragState.id = null;
    };
  }

  return el("div", columnAttrs, [head, body]);
}

function renderAddColumn() {
  return el("div", { class: "column add-column", onclick: openAddForm }, [
    el("span", {}, "＋ Ajouter une colonne")
  ]);
}

function render() {
  const board = $("#board");
  board.innerHTML = "";
  const total = state.columns.length;
  state.columns.forEach((col, idx) => board.appendChild(renderColumn(col, idx, total)));
  board.appendChild(renderAddColumn());
  updateStatusLine();
  updateScrollButtons();
}

function updateStatusLine() {
  const line = $("#statusLine");
  if (isEditable()) {
    line.innerHTML = `<span class="status-dot rw"></span>Édition active — ${state.gh.owner}/${state.gh.repo}@${state.gh.branch}`;
  } else {
    line.innerHTML = `<span class="status-dot ro"></span>Lecture seule — configure ton accès pour éditer`;
  }
}

// ---- Board horizontal scroll ----
function updateScrollButtons() {
  const board = $("#board");
  const toolbar = $("#boardToolbar");
  if (!board || !toolbar) return;
  const hasOverflow = board.scrollWidth > board.clientWidth + 4;
  toolbar.classList.toggle("visible", hasOverflow);
  if (!hasOverflow) return;
  $("#scrollLeftBtn").disabled = board.scrollLeft <= 4;
  $("#scrollRightBtn").disabled = board.scrollLeft >= board.scrollWidth - board.clientWidth - 4;
}
function scrollBoard(dir) {
  $("#board").scrollBy({ left: dir * 340, behavior: "smooth" });
}

// ---- Column CRUD ----
function slugify(str) {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `colonne-${Date.now()}`;
}

function guessCount(prompt) {
  const m = prompt.match(/\b(\d{1,2})\b/);
  const n = m ? parseInt(m[1], 10) : 5;
  return Math.min(Math.max(n, 1), 10);
}

function moveColumn(id, dir) {
  if (!isEditable()) {
    toast("Configure ton jeton GitHub dans les réglages (⚙️) pour réorganiser les colonnes.");
    openSettings();
    return;
  }
  const idx = state.columns.findIndex(c => c.id === id);
  const newIdx = idx + dir;
  if (idx === -1 || newIdx < 0 || newIdx >= state.columns.length) return;
  const [moved] = state.columns.splice(idx, 1);
  state.columns.splice(newIdx, 0, moved);
  render();
  persistColumns("Réorganise les colonnes").catch(e => toast("Échec de l'enregistrement sur GitHub : " + e.message));
}

function reorderColumns(draggedId, targetId) {
  const from = state.columns.findIndex(c => c.id === draggedId);
  const to = state.columns.findIndex(c => c.id === targetId);
  if (from === -1 || to === -1 || from === to) return;
  const [moved] = state.columns.splice(from, 1);
  state.columns.splice(to, 0, moved);
  render();
  persistColumns("Réorganise les colonnes (glisser-déposer)").catch(e => toast("Échec de l'enregistrement sur GitHub : " + e.message));
}

function openAddForm() {
  if (!isEditable()) {
    toast("Configure ton jeton GitHub dans les réglages (⚙️) pour ajouter une colonne.");
    openSettings();
    return;
  }
  const board = $("#board");
  const addCol = board.querySelector(".add-column");

  const titleInput = el("input", { placeholder: "Ex : Vélos électriques Bosch" });
  const promptInput = el("textarea", { rows: "4", placeholder: "Ex : Affiche-moi les 5 dernières actualités sur..." });

  const form = el("div", { class: "column" }, [
    el("div", { class: "column-head" }, [
      el("h2", { class: "column-title" }, "Nouvelle colonne"),
      el("div", { class: "form-field" }, [el("label", {}, "Titre"), titleInput]),
      el("div", { class: "form-field" }, [el("label", {}, "Prompt"), promptInput]),
      el("div", { class: "form-actions" }, [
        el("button", { class: "btn btn-ghost", onclick: render }, "Annuler"),
        el("button", {
          class: "btn btn-primary",
          onclick: async () => {
            const title = titleInput.value.trim();
            const prompt = promptInput.value.trim();
            if (!title || !prompt) { toast("Titre et prompt sont requis."); return; }
            const now = new Date().toISOString();
            const col = {
              id: slugify(title), title, prompt,
              resultCount: guessCount(prompt),
              createdAt: now, updatedAt: now, lastRun: null
            };
            state.columns.push(col);
            state.results[col.id] = [];
            render();
            try {
              await persistColumns(`Ajoute la colonne "${title}"`);
              await persistResults(`Initialise les résultats pour "${title}"`);
              toast("Colonne ajoutée ✅");
            } catch (e) {
              toast("Échec de l'enregistrement sur GitHub : " + e.message);
            }
          }
        }, "Ajouter")
      ])
    ])
  ]);
  board.replaceChild(form, addCol);
  titleInput.focus();
}

function openEditForm(col) {
  if (!isEditable()) {
    toast("Configure ton jeton GitHub dans les réglages (⚙️) pour modifier.");
    openSettings();
    return;
  }
  const board = $("#board");
  const columns = [...board.children];
  const idx = state.columns.findIndex(c => c.id === col.id);
  const target = columns[idx];

  const titleInput = el("input", { value: col.title });
  const promptInput = el("textarea", { rows: "4" }, col.prompt);

  const form = el("div", { class: "column" }, [
    el("div", { class: "column-head" }, [
      el("div", { class: "form-field" }, [el("label", {}, "Titre"), titleInput]),
      el("div", { class: "form-field" }, [el("label", {}, "Prompt"), promptInput]),
      el("div", { class: "form-actions" }, [
        el("button", { class: "btn btn-ghost", onclick: render }, "Annuler"),
        el("button", {
          class: "btn btn-primary",
          onclick: async () => {
            col.title = titleInput.value.trim() || col.title;
            col.prompt = promptInput.value.trim() || col.prompt;
            col.resultCount = guessCount(col.prompt);
            col.updatedAt = new Date().toISOString();
            render();
            try {
              await persistColumns(`Modifie la colonne "${col.title}"`);
              toast("Colonne mise à jour ✅");
            } catch (e) {
              toast("Échec de l'enregistrement sur GitHub : " + e.message);
            }
          }
        }, "Enregistrer")
      ])
    ])
  ]);
  board.replaceChild(form, target);
  titleInput.focus();
}

async function deleteColumn(id) {
  if (!isEditable()) {
    toast("Configure ton jeton GitHub dans les réglages (⚙️) pour supprimer.");
    openSettings();
    return;
  }
  const col = state.columns.find(c => c.id === id);
  if (!confirm(`Supprimer la colonne "${col?.title}" ?`)) return;
  state.columns = state.columns.filter(c => c.id !== id);
  delete state.results[id];
  render();
  try {
    await persistColumns(`Supprime la colonne "${col?.title}"`);
    await persistResults(`Retire les résultats de "${col?.title}"`);
    toast("Colonne supprimée");
  } catch (e) {
    toast("Échec de la suppression sur GitHub : " + e.message);
  }
}

function requestRefresh(col) {
  toast(`Pour rafraîchir "${col.title}" maintenant, demande à Claude en session : "rafraîchis la colonne ${col.title}".`, 5000);
}

// ---- Settings panel ----
function openSettings() {
  $("#ghOwner").value = state.gh.owner;
  $("#ghRepo").value = state.gh.repo;
  $("#ghBranch").value = state.gh.branch;
  $("#ghToken").value = state.gh.token;
  $("#settingsBackdrop").classList.add("open");
}
function closeSettings() {
  $("#settingsBackdrop").classList.remove("open");
}

// ---- Theme ----
function currentTheme() {
  return document.documentElement.getAttribute("data-theme") ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}
function updateThemeIcon() {
  $("#themeToggle").innerHTML = currentTheme() === "dark" ? ICONS.sun : ICONS.moon;
}
function initTheme() {
  const saved = localStorage.getItem("dashboard-theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcon();
}
function toggleTheme() {
  const next = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("dashboard-theme", next);
  updateThemeIcon();
}

// ---- Prevent leaving/reloading while a save is still in flight ----
window.addEventListener("beforeunload", (e) => {
  if (state.pendingSaves > 0) {
    e.preventDefault();
    e.returnValue = "";
  }
});

// ---- Wiring ----
document.addEventListener("DOMContentLoaded", async () => {
  initTheme();
  $("#themeToggle").addEventListener("click", toggleTheme);
  $("#settingsBtn").addEventListener("click", openSettings);
  $("#settingsBackdrop").addEventListener("click", (e) => { if (e.target.id === "settingsBackdrop") closeSettings(); });
  $("#ghSave").addEventListener("click", () => {
    saveGhConfig({
      owner: $("#ghOwner").value.trim(),
      repo: $("#ghRepo").value.trim(),
      branch: $("#ghBranch").value.trim() || "main",
      token: $("#ghToken").value.trim()
    });
    closeSettings();
    render();
    toast(isEditable() ? "Accès configuré ✅" : "Jeton effacé, retour en lecture seule.");
  });
  $("#ghClear").addEventListener("click", () => {
    saveGhConfig({ owner: state.gh.owner, repo: state.gh.repo, branch: state.gh.branch, token: "" });
    $("#ghToken").value = "";
    closeSettings();
    render();
    toast("Jeton effacé, retour en lecture seule.");
  });
  $("#scrollLeftBtn").addEventListener("click", () => scrollBoard(-1));
  $("#scrollRightBtn").addEventListener("click", () => scrollBoard(1));
  $("#board").addEventListener("scroll", updateScrollButtons);
  window.addEventListener("resize", updateScrollButtons);

  await loadData();
  render();
});
