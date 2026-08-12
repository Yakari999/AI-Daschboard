// ---- Fallback seed data (used when data/*.json can't be fetched, e.g. local preview) ----
const FALLBACK_COLUMNS = [
  {
    "id": "ebike-avinox",
    "title": "VTT Avinox MG1",
    "prompt": "5 dernières actualités sur le moteur Avinox mg1",
    "resultCount": 5,
    "createdAt": "2026-08-11T08:00:00.000Z",
    "updatedAt": "2026-08-11T22:34:13.200Z",
    "lastRun": "2026-08-12T09:15:00.000Z"
  },
  {
    "id": "presse",
    "title": "Evénements culturels Lausanne",
    "prompt": "5 prochains événements culturels proches de Lausanne à partir d'aujourd'hui",
    "resultCount": 5,
    "createdAt": "2026-08-11T21:39:53.869Z",
    "updatedAt": "2026-08-11T22:36:28.310Z",
    "lastRun": "2026-08-12T09:15:00.000Z"
  },
  {
    "id": "recettes-avocat-saumon",
    "title": "Recettes avocat & saumon",
    "prompt": "5 recettes faciles avec avocat et saumon",
    "resultCount": 5,
    "createdAt": "2026-08-11T08:00:00.000Z",
    "updatedAt": "2026-08-11T22:36:56.618Z",
    "lastRun": "2026-08-12T09:15:00.000Z"
  },
  {
    "id": "youtube-ia-outils",
    "title": "Vidéos outils IA",
    "prompt": "5 liens vers les dernières vidéos Youtube qui parle des derniers outils IA.",
    "resultCount": 5,
    "createdAt": "2026-08-11T08:00:00.000Z",
    "updatedAt": "2026-08-11T22:35:14.382Z",
    "lastRun": "2026-08-12T09:15:00.000Z"
  },
  {
    "id": "idee-de-vacances-wingfoil-en-europe-en-automne",
    "title": "Idée de vacances wingfoil en europe en automne",
    "prompt": "3 Idées de vacances wingfoil en europe en automne",
    "resultCount": 3,
    "createdAt": "2026-08-11T22:50:30.590Z",
    "updatedAt": "2026-08-11T22:50:30.590Z",
    "lastRun": "2026-08-12T09:15:00.000Z"
  },
  {
    "id": "series-netflix",
    "title": "Séries Netflix",
    "prompt": "J'aimerais la liste des 10 séries 2026, les plus appréciées sur Netflix, tout dans un seul widget avec liens vers les trailer youtube. pas besoin d'image.",
    "resultCount": 10,
    "createdAt": "2026-08-12T09:19:55.490Z",
    "updatedAt": "2026-08-12T09:19:55.490Z",
    "lastRun": "2026-08-12T09:35:00.000Z"
  }
];

const FALLBACK_RESULTS = {
  "ebike-avinox": [
    {
      "id": "mg1-c1",
      "type": "article",
      "title": "Eurobike 2026 | Avinox MG1 : un moteur avec boîte de vitesses intégrée",
      "summary": "Concept très compact intégrant directement une boîte de vitesses ou un variateur de couple, déjà testé sur des prototypes Canyon, Commencal, Forbidden, Mondraker et Megamo.",
      "url": "https://www.vojomag.com/news/eurobike-2026-avinox-mg1-et-maintenant-un-moteur-avec-boite-de-vitesses-integree/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.vojomag.com%2Fnews%2Feurobike-2026-avinox-mg1-et-maintenant-un-moteur-avec-boite-de-vitesses-integree%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    },
    {
      "id": "mg1-c2",
      "type": "article",
      "title": "Avinox dévoile le concept produit Avinox MG1 à l'Eurobike 2026",
      "summary": "Présenté comme un concept, sans date de commercialisation annoncée pour l'instant.",
      "url": "https://www.prnewswire.com/news-releases/avinox-devoile-le-concept-produit-avinox-mg1-a-leurobike-2026-302807706.html",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.prnewswire.com%2Fnews-releases%2Favinox-devoile-le-concept-produit-avinox-mg1-a-leurobike-2026-302807706.html?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    },
    {
      "id": "mg1-c3",
      "type": "article",
      "title": "New Avinox MG gearbox motor prototype: is this the end of the classic drivetrain?",
      "summary": "E-MOUNTAINBIKE Magazine analyse l'objectif du concept : ressenti plus naturel, changements de vitesse fluides, entretien réduit.",
      "url": "https://ebike-mtb.com/en/avinox-mg-gearbox-motor/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Febike-mtb.com%2Fen%2Favinox-mg-gearbox-motor%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    },
    {
      "id": "mg1-c4",
      "type": "article",
      "title": "Avinox MG1, moteur à transmission intégrée qui redéfinit le VTTAE",
      "summary": "Plus de dérailleur ni de cassette : une simple chaîne mono-vitesse ou courroie remplace la transmission classique.",
      "url": "https://www.shcycles.fr/moteur-transmission-avinox-mg1/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.shcycles.fr%2Fmoteur-transmission-avinox-mg1%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    },
    {
      "id": "mg1-c5",
      "type": "article",
      "title": "DJI Avinox MG1 : ce nouveau moteur change de vitesse en 0,1 seconde",
      "summary": "Transmission intégrée, changements de rapport possibles même à l'arrêt ou sous forte charge.",
      "url": "https://www.cleanrider.com/actus/dji-avinox-mg1-moteur-velo-electrique-transmission-automatique/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.cleanrider.com%2Factus%2Fdji-avinox-mg1-moteur-velo-electrique-transmission-automatique%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    }
  ],
  "youtube-ia-outils": [
    {
      "id": "yt-c1",
      "type": "video",
      "title": "Les meilleurs outils IA à utiliser en 2026",
      "summary": "Un tour d'horizon rapide en format short des outils IA à connaître cette année.",
      "url": "https://www.youtube.com/shorts/ziMfHt9hnlw",
      "image": "https://img.youtube.com/vi/ziMfHt9hnlw/hqdefault.jpg",
      "date": null,
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    },
    {
      "id": "yt-c2",
      "type": "video",
      "title": "TOP 5 des générateurs de vidéo IA : les meilleurs outils de 2026 (+ bonus nouveauté)",
      "summary": "Comparatif des générateurs de vidéo IA les plus performants du moment.",
      "url": "https://www.youtube.com/watch?v=UG5KPcaQrGA",
      "image": "https://img.youtube.com/vi/UG5KPcaQrGA/hqdefault.jpg",
      "date": "2026-02-01T00:00:00.000Z",
      "datePrecision": "month",
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    },
    {
      "id": "yt-c3",
      "type": "video",
      "title": "Génération de vidéos avec l'IA : quel est le meilleur outil en 2026 ?",
      "summary": "Analyse comparative pour choisir le bon outil de génération vidéo par IA.",
      "url": "https://www.youtube.com/watch?v=OTIrzJED6Ns",
      "image": "https://img.youtube.com/vi/OTIrzJED6Ns/hqdefault.jpg",
      "date": "2026-04-01T00:00:00.000Z",
      "datePrecision": "month",
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    },
    {
      "id": "yt-c4",
      "type": "video",
      "title": "Comprendre l'IA en 2026 (ce que vous devez VRAIMENT savoir)",
      "summary": "Un point complet sur l'état de l'IA et de ses outils cette année.",
      "url": "https://www.youtube.com/watch?v=uonQawqg8N4",
      "image": "https://img.youtube.com/vi/uonQawqg8N4/hqdefault.jpg",
      "date": "2026-07-10T00:00:00.000Z",
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    },
    {
      "id": "yt-c5",
      "type": "video",
      "title": "Intelligence artificielle 2026-2028 : se préparer au vertige qui vient",
      "summary": "Une projection sur l'évolution des outils IA dans les prochaines années.",
      "url": "https://www.youtube.com/watch?v=RatJ6UDm98U",
      "image": "https://img.youtube.com/vi/RatJ6UDm98U/hqdefault.jpg",
      "date": "2026-03-06T00:00:00.000Z",
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    }
  ],
  "recettes-avocat-saumon": [
    {
      "id": "rec-c1",
      "type": "recipe",
      "title": "Salade de saumon à l'avocat et vinaigrette agrumée",
      "summary": "Saumon riche en oméga-3, avocat crémeux et vinaigrette aux agrumes, prête en 15 minutes sans cuisson.",
      "url": "https://www.mealbake.com/fr/recipes/salade-de-saumon-a-l-avocat-et-vinaigrette-agrumee",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.mealbake.com%2Ffr%2Frecipes%2Fsalade-de-saumon-a-l-avocat-et-vinaigrette-agrumee?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    },
    {
      "id": "rec-c2",
      "type": "recipe",
      "title": "Salade au saumon fumé et avocat : recette et variantes",
      "summary": "L'équilibre entre le goût délicat du saumon fumé et la texture crémeuse de l'avocat.",
      "url": "https://www.epiceriedupatrimoine.com/salade-saumon-fume-avocat/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.epiceriedupatrimoine.com%2Fsalade-saumon-fume-avocat%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    },
    {
      "id": "rec-c3",
      "type": "recipe",
      "title": "Saumon fumé sur mousse à l'avocat",
      "summary": "Une mousse d'avocat légère surmontée de fines tranches de saumon fumé, en entrée ou apéritif.",
      "url": "https://www.recettes.com/recettes/saumon-fume-sur-mousse-a-l-avocat/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.recettes.com%2Frecettes%2Fsaumon-fume-sur-mousse-a-l-avocat%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    },
    {
      "id": "rec-c4",
      "type": "recipe",
      "title": "Salade saumon avocat",
      "summary": "Une recette simple et gourmande, prête en quelques minutes.",
      "url": "https://lesdelicesdestef.fr/salade-saumon-avocat/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Flesdelicesdestef.fr%2Fsalade-saumon-avocat%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    },
    {
      "id": "rec-c5",
      "type": "recipe",
      "title": "Recette gourmande de salade au saumon et avocat",
      "summary": "Une explosion de saveurs pour un repas léger et équilibré.",
      "url": "https://www.actuniort.fr/art-de-vivre/14751",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.actuniort.fr%2Fart-de-vivre%2F14751?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    }
  ],
  "presse": [
    {
      "id": "laus-c1",
      "type": "article",
      "title": "Athletissima : saut à la perche à Ouchy",
      "summary": "Compétition masculine de saut à la perche le 20 août 2026, Place de la Navigation à Ouchy, accès libre.",
      "url": "https://www.lausanne-tourisme.ch/en/events/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.lausanne-tourisme.ch%2Fen%2Fevents%2F?w=400&h=225",
      "date": "2026-08-20T00:00:00.000Z",
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    },
    {
      "id": "laus-c2",
      "type": "article",
      "title": "Wolfmother en concert aux Docks",
      "summary": "Le groupe de rock australien se produit à la salle des Docks à Lausanne le 26 août 2026.",
      "url": "https://www.docks.ch/en/programme/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.docks.ch%2Fen%2Fprogramme%2F?w=400&h=225",
      "date": "2026-08-26T00:00:00.000Z",
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    },
    {
      "id": "laus-c3",
      "type": "article",
      "title": "Lausanne sur Mer : activités sportives gratuites au bord de l'eau",
      "summary": "Badminton, freeboard, kayak, paddle, slackline et tennis en accès libre en août.",
      "url": "https://lausanne.evous.ch/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Flausanne.evous.ch%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    },
    {
      "id": "laus-c4",
      "type": "article",
      "title": "Agenda des manifestations – Ville de Lausanne",
      "summary": "Agenda municipal officiel, mis à jour en continu avec tous les événements culturels à venir.",
      "url": "https://www.lausanne.ch/agenda-et-actualites/agenda",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.lausanne.ch%2Fagenda-et-actualites%2Fagenda?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    },
    {
      "id": "laus-c5",
      "type": "article",
      "title": "Tempslibre.ch – Concerts, spectacles et sorties en Romandie",
      "summary": "Agenda régional des concerts et spectacles à Lausanne et environs.",
      "url": "https://www.tempslibre.ch/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.tempslibre.ch%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    }
  ],
  "idee-de-vacances-wingfoil-en-europe-en-automne": [
    {
      "id": "wing-c1",
      "type": "article",
      "title": "Plus beaux spots wingfoil en Europe : destinations incontournables",
      "summary": "Leucate et sa Tramontane régulière, Tarifa au vent constant, L'Almanarre à Hyères : les incontournables européens.",
      "url": "https://www.tourismorama.com/plus-beaux-spots-wingfoil-europe-destinations-incontournables-riders/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.tourismorama.com%2Fplus-beaux-spots-wingfoil-europe-destinations-incontournables-riders%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    },
    {
      "id": "wing-c2",
      "type": "article",
      "title": "Où et quand partir faire du wing ?",
      "summary": "Guide saisonnier par spot : Tarifa et Fuerteventura restent ventés et cléments en automne.",
      "url": "https://wingfoil.voyages-adekua.fr/infos-adekua/ou-quand-partir-wing-foil-sejour-stage-croisiere-cours",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwingfoil.voyages-adekua.fr%2Finfos-adekua%2Fou-quand-partir-wing-foil-sejour-stage-croisiere-cours?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    },
    {
      "id": "wing-c3",
      "type": "article",
      "title": "Meilleurs spots de Wing Foil et SUP de Corse",
      "summary": "Printemps et automne restent doux en Corse (12-18°C), un bon compromis météo pour la pratique hors saison estivale.",
      "url": "https://srokacompany.com/blogs/actualites/les-meilleurs-spots-de-wing-foil-et-sup-en-corse",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsrokacompany.com%2Fblogs%2Factualites%2Fles-meilleurs-spots-de-wing-foil-et-sup-en-corse?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-12T09:15:00.000Z"
    }
  ],
  "series-netflix": [
    {
      "id": "nf-1",
      "type": "video",
      "title": "Squid Game — Saison 3 (finale)",
      "summary": "La saison finale du phénomène coréen, la série la plus regardée de l'histoire de Netflix.",
      "url": "https://www.youtube.com/watch?v=bLlqGBiI2WE",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-12T09:35:00.000Z"
    },
    {
      "id": "nf-2",
      "type": "video",
      "title": "One Piece — Saison 2 : Into the Grand Line",
      "summary": "L'adaptation live-action du manga culte, sortie le 10 mars 2026.",
      "url": "https://www.youtube.com/watch?v=wUi4E4IACfQ",
      "image": null,
      "date": "2026-03-10T00:00:00.000Z",
      "fetchedAt": "2026-08-12T09:35:00.000Z"
    },
    {
      "id": "nf-3",
      "type": "video",
      "title": "3 Body Problem — Saison 2",
      "summary": "Adaptation du roman de Liu Cixin, la saison 2 embrasse la théorie de la forêt sombre.",
      "url": "https://www.youtube.com/watch?v=5vqIIjcOps0",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-12T09:35:00.000Z"
    },
    {
      "id": "nf-4",
      "type": "video",
      "title": "Avatar : Le Dernier Maître de l'Air — Saison 2",
      "summary": "Sortie le 25 juin 2026, la suite de l'adaptation live-action.",
      "url": "https://www.youtube.com/watch?v=M_Las484swM",
      "image": null,
      "date": "2026-06-25T00:00:00.000Z",
      "fetchedAt": "2026-08-12T09:35:00.000Z"
    },
    {
      "id": "nf-5",
      "type": "video",
      "title": "Bandi",
      "summary": "Thriller social en créole/français tourné en Martinique, numéro 1 dans 22 pays dont la Suisse. Sorti le 9 avril 2026.",
      "url": "https://www.youtube.com/watch?v=KyhR3g0wAsM",
      "image": null,
      "date": "2026-04-09T00:00:00.000Z",
      "fetchedAt": "2026-08-12T09:35:00.000Z"
    },
    {
      "id": "nf-6",
      "type": "video",
      "title": "The Empress — Saison 2",
      "summary": "La série historique la mieux notée de Netflix (83% Rotten Tomatoes), sur l'impératrice Sissi.",
      "url": "https://www.youtube.com/watch?v=cPSKEEC99gQ",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-12T09:35:00.000Z"
    },
    {
      "id": "nf-7",
      "type": "video",
      "title": "Bridgerton — Saison 4",
      "summary": "Le clan Bridgerton continue de faire fondre les cœurs, en tête des classements Netflix.",
      "url": "https://www.youtube.com/watch?v=IqaXNwAzSmQ",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-12T09:35:00.000Z"
    },
    {
      "id": "nf-8",
      "type": "video",
      "title": "The Night Agent — Saison 3",
      "summary": "82% sur Rotten Tomatoes : Peter Sutherland traque un agent du Trésor en fuite à Istanbul.",
      "url": "https://www.youtube.com/watch?v=1F6BCHAfGDc",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-12T09:35:00.000Z"
    },
    {
      "id": "nf-9",
      "type": "video",
      "title": "The Lincoln Lawyer — Saison 4",
      "summary": "Mickey Haller doit prouver son innocence dans un procès pour meurtre.",
      "url": "https://www.youtube.com/watch?v=pVvVNbLf7Ig",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-12T09:35:00.000Z"
    },
    {
      "id": "nf-10",
      "type": "video",
      "title": "Stranger Things — Saison 5 (finale)",
      "summary": "La saison finale de la série culte, l'un des événements Netflix les plus attendus.",
      "url": "https://www.youtube.com/watch?v=AfQ13jsLDms",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-12T09:35:00.000Z"
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
