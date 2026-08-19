// ---- Fallback seed data (used when data/*.json can't be fetched, e.g. local preview) ----
const FALLBACK_COLUMNS = [
  {
    "id": "marques-vtt-avinox",
    "title": "Marques VTT Avinox",
    "prompt": "Liste des marques de VTT électrique qui ont signé un partenariat avec DJI pour utiliser le moteur Avinox (M1, M2, M2S, Mg1), triée par ordre alphabétique, avec un lien vers le site officiel de chaque marque. Complète la liste chaque semaine avec les nouvelles marques qui rejoignent le partenariat.",
    "resultCount": 30,
    "frequency": "weekly",
    "layout": "list",
    "tags": [
      "bike"
    ],
    "createdAt": "2026-08-12T20:05:00.000Z",
    "updatedAt": "2026-08-12T17:55:43.650Z",
    "lastRun": "2026-08-17T04:09:02.000Z",
    "sourceType": "prompt"
  },
  {
    "id": "courses-au-large",
    "title": "Courses au large",
    "prompt": "liste des prochaines courses de voile au large, imoca, ultime etc avec lien vers les site web des course",
    "resultCount": 7,
    "createdAt": "2026-08-12T09:39:51.181Z",
    "updatedAt": "2026-08-17T11:51:20.402Z",
    "lastRun": "2026-08-17T04:09:02.000Z",
    "tags": [
      "sport"
    ],
    "frequency": "weekly",
    "layout": "list-date",
    "sourceType": "prompt"
  },
  {
    "id": "films-sorties",
    "title": "Top films",
    "prompt": "J'aimerais que tu me maintiennes une liste des 20 meilleures films de l'année en cours et de l'année précédent, encensées par les critiques et toutes plateformes confondues avec un lien vers le trailer youtube et une vignette youtube, dans l'ordre, soit les meilleures en haut.",
    "resultCount": 15,
    "createdAt": "2026-08-12T09:41:09.686Z",
    "updatedAt": "2026-08-12T13:04:39.827Z",
    "lastRun": "2026-08-17T04:09:02.000Z",
    "tags": [
      "ciné"
    ],
    "frequency": "weekly",
    "layout": "tiles",
    "sourceType": "prompt"
  },
  {
    "id": "top-films-sf",
    "title": "Top films SF",
    "prompt": "J'aimerais que tu me maintiennes une liste des 10 meilleures films SF de l'année en cours et de l'année précédente, encensées par les critiques et toutes plateformes confondues avec un lien vers le trailer youtube et une vignette youtube, dans l'ordre, soit les meilleures en haut.",
    "resultCount": 15,
    "tags": [
      "ciné"
    ],
    "createdAt": "2026-08-12T13:03:08.181Z",
    "updatedAt": "2026-08-12T13:04:54.123Z",
    "lastRun": "2026-08-17T04:09:02.000Z",
    "frequency": "weekly",
    "layout": "tiles",
    "sourceType": "prompt"
  },
  {
    "id": "series-netflix",
    "title": "Top séries",
    "prompt": "J'aimerais que tu me maintiennes une liste des 20 meilleures séries de l'année en cours et de l'année précédente, encensées par les critiques et toutes plateformes confondues avec un lien vers le trailer youtube et une vignette youtube, dans l'ordre, soit les meilleures en haut.",
    "resultCount": 15,
    "createdAt": "2026-08-12T09:19:55.490Z",
    "updatedAt": "2026-08-12T13:04:29.156Z",
    "lastRun": "2026-08-17T04:09:02.000Z",
    "tags": [
      "ciné"
    ],
    "frequency": "weekly",
    "layout": "tiles",
    "sourceType": "prompt"
  },
  {
    "id": "top-jeux",
    "title": "Top jeux",
    "prompt": "J'aimerais que tu me maintiennes une liste des 10 meilleures jeux vidéos de l'année en cours et de l'année précédente, encensées par les critiques et toutes plateformes confondues avec un lien vers le trailer youtube et une vignette youtube, dans l'ordre, soit les meilleures en haut.",
    "resultCount": 10,
    "tags": [
      "jeux"
    ],
    "createdAt": "2026-08-12T13:06:43.136Z",
    "updatedAt": "2026-08-12T13:56:42.401Z",
    "lastRun": "2026-08-17T04:09:02.000Z",
    "frequency": "weekly",
    "layout": "tiles",
    "sourceType": "prompt"
  },
  {
    "id": "presse",
    "title": "Evénements culturels Lausanne",
    "prompt": "5 prochains événements culturels proches de Lausanne à partir d'aujourd'hui",
    "resultCount": 5,
    "createdAt": "2026-08-11T21:39:53.869Z",
    "updatedAt": "2026-08-12T12:12:53.333Z",
    "lastRun": "2026-08-19T04:04:45.000Z",
    "tags": [
      "event"
    ],
    "frequency": "daily",
    "layout": "tiles",
    "sourceType": "prompt"
  },
  {
    "id": "idee-de-vacances-wingfoil-en-europe-en-automne",
    "title": "Idée de vacances wingfoil en europe en automne",
    "prompt": "Idées de vacances wingfoil en europe en automne",
    "resultCount": 10,
    "createdAt": "2026-08-11T22:50:30.590Z",
    "updatedAt": "2026-08-13T06:47:01.307Z",
    "lastRun": "2026-08-17T04:09:02.000Z",
    "frequency": "weekly",
    "tags": [
      "wing"
    ],
    "layout": "tiles",
    "sourceType": "prompt"
  },
  {
    "id": "presse-citron",
    "title": "Presse-citron",
    "prompt": "Presse-citron",
    "sourceType": "site",
    "resultCount": 15,
    "frequency": "daily",
    "layout": "tiles",
    "tags": [
      "actu"
    ],
    "createdAt": "2026-08-12T21:10:00.000Z",
    "updatedAt": "2026-08-12T19:09:04.649Z",
    "lastRun": "2026-08-19T04:04:45.000Z"
  },
  {
    "id": "wing-freefly",
    "title": "Wing Freefly",
    "prompt": "dernières vidéos de wingfoil freefly youtube",
    "sourceType": "prompt",
    "resultCount": 5,
    "frequency": "daily",
    "layout": "tiles",
    "tags": [
      "wing"
    ],
    "createdAt": "2026-08-13T06:46:07.770Z",
    "updatedAt": "2026-08-13T06:46:36.738Z",
    "lastRun": "2026-08-19T04:04:45.000Z"
  },
  {
    "id": "restaurant-lausanne",
    "title": "Restaurant Lausanne",
    "prompt": "Idées de restaurants Lausanne et environs appréciés",
    "sourceType": "prompt",
    "resultCount": 10,
    "frequency": "weekly",
    "layout": "list",
    "tags": [
      "cuisine"
    ],
    "createdAt": "2026-08-13T06:49:14.630Z",
    "updatedAt": "2026-08-13T07:10:52.931Z",
    "lastRun": "2026-08-17T04:09:02.000Z"
  }
];

const FALLBACK_RESULTS = {
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
  "presse": [
    {
      "id": "laus-c11",
      "type": "article",
      "title": "Otobong Nkanga. I dreamt of you in colours",
      "summary": "Jusqu'au 23 août 2026 au MCBA : grande exposition consacrée à l'artiste nigériane Otobong Nkanga (installations, céramiques, tapisseries, dessins inédits), autour de l'écologie et de la mémoire.",
      "url": "https://www.mcba.ch/en/exhibitions/otobong-nkanga/",
      "date": "2026-08-23T00:00:00.000Z",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.mcba.ch%2Fen%2Fexhibitions%2Fotobong-nkanga%2F?w=400&h=225",
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-16T04:06:21.000Z"
    },
    {
      "id": "laus-c9",
      "type": "article",
      "title": "Lausanne Afro Fusions Festival (LAFF)",
      "summary": "Du 20 au 23 août 2026, Esplanade et Casino de Montbenon : plus grand festival africain en plein air de Suisse romande. Accueille aussi la 1ère édition du FILAA (festival international du livre et des arts africains). Accès libre aux concerts, certains spectacles payants.",
      "url": "https://lausaff.org/en/",
      "date": "2026-08-20T00:00:00.000Z",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Flausaff.org%2Fen%2F?w=400&h=225",
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-14T04:12:37.000Z"
    },
    {
      "id": "laus-c10",
      "type": "article",
      "title": "Athletissima",
      "summary": "51e édition le 21 août 2026 au Stade olympique de la Pontaise : 17 disciplines de la Ligue de diamant. La veille, concours de perche masculine en accès libre sur les quais d'Ouchy.",
      "url": "https://athletissima.ch/en/",
      "date": "2026-08-21T00:00:00.000Z",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fathletissima.ch%2Fen%2F?w=400&h=225",
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-14T04:12:37.000Z"
    },
    {
      "id": "laus-c12",
      "type": "article",
      "title": "Vernissage – Lucas Erin, Prix Culturel Manor Vaud 2026",
      "summary": "Jeudi 27 août 2026, Espace Projet du MCBA, entrée libre de 18h à 21h : exposition de l'artiste lausannois Lucas Erin, lauréat du Prix Culturel Manor Vaud 2026, autour du jardin et de ses temporalités.",
      "url": "https://www.mcba.ch/en/exhibitions/lucas-erin/",
      "date": "2026-08-27T00:00:00.000Z",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.mcba.ch%2Fen%2Fexhibitions%2Flucas-erin%2F?w=400&h=225",
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-16T04:06:21.000Z"
    },
    {
      "id": "laus-c7",
      "type": "article",
      "title": "Lausanne Judo Grand Slam 2026",
      "summary": "Du 28 au 30 août 2026 à la Vaudoise arena : première étape Grand Slam en Suisse, combinant pour la première fois judo et para-judo, avec près de 900 athlètes de plus de 50 nations.",
      "url": "https://vaudoisearena.ch/en/events/lausanne-judo-grand-slam",
      "date": "2026-08-28T00:00:00.000Z",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fvaudoisearena.ch%2Fen%2Fevents%2Flausanne-judo-grand-slam?w=400&h=225",
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-13T04:05:50.000Z"
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
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "wing-c2",
      "type": "article",
      "title": "Où et quand partir faire du wing ?",
      "summary": "Guide saisonnier par spot : Tarifa et Fuerteventura restent ventés et cléments en automne.",
      "url": "https://wingfoil.voyages-adekua.fr/infos-adekua/ou-quand-partir-wing-foil-sejour-stage-croisiere-cours",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwingfoil.voyages-adekua.fr%2Finfos-adekua%2Fou-quand-partir-wing-foil-sejour-stage-croisiere-cours?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "wing-c3",
      "type": "article",
      "title": "Meilleurs spots de Wing Foil et SUP de Corse",
      "summary": "Printemps et automne restent doux en Corse (12-18°C), un bon compromis météo pour la pratique hors saison estivale.",
      "url": "https://srokacompany.com/blogs/actualites/les-meilleurs-spots-de-wing-foil-et-sup-en-corse",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsrokacompany.com%2Fblogs%2Factualites%2Fles-meilleurs-spots-de-wing-foil-et-sup-en-corse?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    }
  ],
  "series-netflix": [
    {
      "id": "series-adolescence",
      "type": "video",
      "title": "Adolescence",
      "summary": "Mini-série Netflix multi-primée : 8 Emmy Awards (dont Meilleure mini-série) et 4 Golden Globes.",
      "url": "https://www.youtube.com/watch?v=Wk5OxqtpBR4",
      "image": "https://img.youtube.com/vi/Wk5OxqtpBR4/hqdefault.jpg",
      "date": "2025-03-13T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T15:40:00.000Z"
    },
    {
      "id": "series-severance-s2",
      "type": "video",
      "title": "Severance — Saison 2",
      "summary": "Retour très attendu du thriller psychologique Apple TV+, salué par la critique avec plusieurs nominations aux Emmy.",
      "url": "https://www.youtube.com/watch?v=1cGJ92m1fYc",
      "image": "https://img.youtube.com/vi/1cGJ92m1fYc/hqdefault.jpg",
      "date": "2025-01-17T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T15:40:00.000Z"
    },
    {
      "id": "series-andor-s2",
      "type": "video",
      "title": "Andor — Saison 2",
      "summary": "Conclusion de la série Star Wars, largement considérée par la critique comme la meilleure série de l'univers Star Wars.",
      "url": "https://www.youtube.com/watch?v=AE4wxt70aUM",
      "image": "https://img.youtube.com/vi/AE4wxt70aUM/hqdefault.jpg",
      "date": "2025-04-22T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T15:40:00.000Z"
    },
    {
      "id": "series-tlou-s2",
      "type": "video",
      "title": "The Last of Us — Saison 2",
      "summary": "Suite HBO du hit primé aux Emmy, avec l'arrivée du personnage d'Abby (Kaitlyn Dever) très commentée par la critique.",
      "url": "https://www.youtube.com/watch?v=9VcGB3bym3g",
      "image": "https://img.youtube.com/vi/9VcGB3bym3g/hqdefault.jpg",
      "date": "2025-04-13T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T15:40:00.000Z"
    },
    {
      "id": "ts-3",
      "type": "video",
      "title": "Squid Game — Saison 3 (finale)",
      "summary": "La saison finale du phénomène coréen, la série la plus regardée de l'histoire de Netflix.",
      "url": "https://www.youtube.com/watch?v=bLlqGBiI2WE",
      "image": "https://img.youtube.com/vi/bLlqGBiI2WE/hqdefault.jpg",
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "ts-2",
      "type": "video",
      "title": "3 Body Problem — Saison 2",
      "summary": "Adaptation du roman de Liu Cixin, la saison 2 embrasse la théorie de la forêt sombre.",
      "url": "https://www.youtube.com/watch?v=5vqIIjcOps0",
      "image": "https://img.youtube.com/vi/5vqIIjcOps0/hqdefault.jpg",
      "date": "2026-04-01T00:00:00.000Z",
      "datePrecision": "month",
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "ts-1",
      "type": "video",
      "title": "The Pitt — Saison 2",
      "summary": "Après avoir remporté l'Emmy de la meilleure série dramatique, la série médicale d'HBO Max revient pour une saison saluée par la critique.",
      "url": "https://www.youtube.com/watch?v=cAZFgj2MwwI",
      "image": "https://img.youtube.com/vi/cAZFgj2MwwI/hqdefault.jpg",
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "ts-4",
      "type": "video",
      "title": "The Empress — Saison 2",
      "summary": "La série historique la mieux notée de Netflix (83% Rotten Tomatoes), sur l'impératrice Sissi.",
      "url": "https://www.youtube.com/watch?v=cPSKEEC99gQ",
      "image": "https://img.youtube.com/vi/cPSKEEC99gQ/hqdefault.jpg",
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "ts-5",
      "type": "video",
      "title": "Avatar : Le Dernier Maître de l'Air — Saison 2",
      "summary": "Sortie le 25 juin 2026, la suite très attendue de l'adaptation live-action.",
      "url": "https://www.youtube.com/watch?v=M_Las484swM",
      "image": "https://img.youtube.com/vi/M_Las484swM/hqdefault.jpg",
      "date": "2026-06-25T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "ts-6",
      "type": "video",
      "title": "Bandi",
      "summary": "Thriller social tourné en Martinique, numéro 1 dans 22 pays dont la Suisse.",
      "url": "https://www.youtube.com/watch?v=KyhR3g0wAsM",
      "image": "https://img.youtube.com/vi/KyhR3g0wAsM/hqdefault.jpg",
      "date": "2026-04-09T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "series-cent-ans-solitude-2",
      "type": "video",
      "title": "Cent ans de solitude — Partie 2",
      "summary": "Conclusion de l'adaptation Netflix du roman de Gabriel García Márquez. 7 premiers épisodes sortis le 5 août 2026, épisode final le 26 août.",
      "url": "https://www.youtube.com/watch?v=F7iKrcc5L3M",
      "image": "https://img.youtube.com/vi/F7iKrcc5L3M/hqdefault.jpg",
      "date": "2026-08-05T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-17T04:09:02.000Z"
    }
  ],
  "courses-au-large": [
    {
      "id": "voile-1",
      "type": "article",
      "title": "The Ocean Race Atlantic",
      "summary": "Transatlantique en équipage reliant New York à Barcelone, départ le 2 septembre 2026. Lancement de cette nouvelle épreuve du calendrier IMOCA.",
      "url": "https://www.imoca.org/fr/news/news/une-saison-2026-dense-et-strategique-pour-la-flotte-imoca",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.imoca.org%2Ffr%2Fnews%2Fnews%2Fune-saison-2026-dense-et-strategique-pour-la-flotte-imoca?w=400&h=225",
      "date": "2026-09-02T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "voile-2",
      "type": "article",
      "title": "24H ULTIM (Lorient)",
      "summary": "Épreuve d'endurance disputée à Lorient le 24 septembre 2026, qui confronte les trimarans géants sur 24 heures.",
      "url": "https://www.classeultim.org/calendrier-2026",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.classeultim.org%2Fcalendrier-2026?w=400&h=225",
      "date": "2026-09-24T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "voile-3",
      "type": "article",
      "title": "Route du Rhum – Destination Guadeloupe",
      "summary": "Course transatlantique en solitaire mythique, départ de Saint-Malo prévu le 1er novembre 2026.",
      "url": "https://figaronautisme.meteoconsult.fr/actus-nautisme-courses/2026-06-02/84568-calendrier-des-grandes-courses-a-la-voile-en-2026",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ffigaronautisme.meteoconsult.fr%2Factus-nautisme-courses%2F2026-06-02%2F84568-calendrier-des-grandes-courses-a-la-voile-en-2026?w=400&h=225",
      "date": "2026-11-01T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "voile-4",
      "type": "article",
      "title": "Défi Azimut-Lorient",
      "summary": "Temps fort de la saison IMOCA qui sert de préparation directe aux grandes échéances transocéaniques.",
      "url": "https://www.defi-azimut.net/fr",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.polefinistere.com%2Fcalendrier-2026%2F?w=400&h=225",
      "date": "2026-09-15T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    }
  ],
  "films-sorties": [
    {
      "id": "films-fjord",
      "type": "video",
      "title": "Fjord",
      "summary": "Palme d'Or du Festival de Cannes 2026 (2e Palme pour Cristian Mungiu). Sortie en salles le 19 août 2026, avec Sebastian Stan et Renate Reinsve.",
      "url": "https://www.youtube.com/watch?v=jHyO5oGIFFs",
      "image": "https://img.youtube.com/vi/jHyO5oGIFFs/hqdefault.jpg",
      "date": "2026-08-19T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "films-un-simple-accident",
      "type": "video",
      "title": "Un simple accident",
      "summary": "Palme d'Or du Festival de Cannes 2025, réalisé par Jafar Panahi.",
      "url": "https://www.youtube.com/watch?v=UZ0WhSvEero",
      "image": "https://img.youtube.com/vi/UZ0WhSvEero/hqdefault.jpg",
      "date": "2025-10-01T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T15:40:00.000Z"
    },
    {
      "id": "tf-1",
      "type": "video",
      "title": "Valeur sentimentale",
      "summary": "Joachim Trier, Grand Prix du Festival de Cannes 2025. Avec Renate Reinsve, Stellan Skarsgård, Elle Fanning.",
      "url": "https://www.youtube.com/watch?v=u4a6nRFwcV8",
      "image": "https://img.youtube.com/vi/u4a6nRFwcV8/hqdefault.jpg",
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "films-une-bataille-apres-lautre",
      "type": "video",
      "title": "Une bataille après l'autre",
      "summary": "Film de Paul Thomas Anderson avec Leonardo DiCaprio, l'un des mieux notés de l'année par la critique US, sérieux prétendant aux Oscars 2026.",
      "url": "https://www.youtube.com/watch?v=hg8AGTyYMBA",
      "image": "https://img.youtube.com/vi/hg8AGTyYMBA/hqdefault.jpg",
      "date": "2025-09-26T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T15:40:00.000Z"
    },
    {
      "id": "films-echos-du-passe",
      "type": "video",
      "title": "Les Échos du passé",
      "summary": "Prix du Jury au Festival de Cannes 2025 (Mascha Schilinski), sélectionné pour représenter l'Allemagne aux Oscars du meilleur film international.",
      "url": "https://www.youtube.com/watch?v=O-jgGbvLgVo",
      "image": "https://img.youtube.com/vi/O-jgGbvLgVo/hqdefault.jpg",
      "date": "2026-01-07T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T15:40:00.000Z"
    },
    {
      "id": "tf-2",
      "type": "video",
      "title": "Sirât",
      "summary": "Oliver Laxe, Prix du Jury à Cannes 2025. Figure dans le top 10 des films les mieux notés par la presse française.",
      "url": "https://www.youtube.com/watch?v=hQSSygPH1CE",
      "image": "https://img.youtube.com/vi/hQSSygPH1CE/hqdefault.jpg",
      "date": "2025-09-10T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "films-nouvelle-vague",
      "type": "video",
      "title": "Nouvelle Vague",
      "summary": "Film de Richard Linklater présenté en compétition à Cannes 2025, lettre d'amour à la Nouvelle Vague française et au tournage d'À bout de souffle.",
      "url": "https://www.youtube.com/watch?v=UufRzKVFseg",
      "image": "https://img.youtube.com/vi/UufRzKVFseg/hqdefault.jpg",
      "date": "2025-11-14T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T15:40:00.000Z"
    },
    {
      "id": "tf-3",
      "type": "video",
      "title": "L'Agent secret",
      "summary": "Kleber Mendonça Filho, Prix de la mise en scène et prix d'interprétation masculine (Wagner Moura) à Cannes 2025.",
      "url": "https://www.youtube.com/watch?v=yn1MTvX4iYc",
      "image": "https://img.youtube.com/vi/yn1MTvX4iYc/hqdefault.jpg",
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "tf-4",
      "type": "video",
      "title": "Résurrection",
      "summary": "Bi Gan, Prix spécial du jury à Cannes 2025. Un jeune rêveur qui se réincarne à travers cinq époques.",
      "url": "https://www.youtube.com/watch?v=FAaL2uJgscc",
      "image": "https://img.youtube.com/vi/FAaL2uJgscc/hqdefault.jpg",
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "tf-5",
      "type": "video",
      "title": "Projet Dernière Chance (Project Hail Mary)",
      "summary": "Phil Lord et Christopher Miller adaptent Andy Weir (Seul sur Mars), avec Ryan Gosling.",
      "url": "https://www.youtube.com/watch?v=zEuBewFxgaA",
      "image": "https://img.youtube.com/vi/zEuBewFxgaA/hqdefault.jpg",
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "tf-6",
      "type": "video",
      "title": "L'Odyssée",
      "summary": "Christopher Nolan adapte Homère avec Matt Damon et Tom Holland, meilleur démarrage de la carrière du réalisateur.",
      "url": "https://www.youtube.com/watch?v=wBPYOYBt6Vc",
      "image": "https://img.youtube.com/vi/wBPYOYBt6Vc/hqdefault.jpg",
      "date": "2026-07-15T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    }
  ],
  "top-films-sf": [
    {
      "id": "sf-28-years-later",
      "type": "video",
      "title": "28 Years Later",
      "summary": "95% sur Rotten Tomatoes (Certified Fresh) : suite post-apocalyptique de Danny Boyle saluée par la critique.",
      "url": "https://www.youtube.com/watch?v=R6JVdxWtYjA",
      "image": "https://img.youtube.com/vi/R6JVdxWtYjA/hqdefault.jpg",
      "date": "2025-06-19T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T15:40:00.000Z"
    },
    {
      "id": "sf-companion",
      "type": "video",
      "title": "Companion",
      "summary": "94% sur Rotten Tomatoes : thriller de science-fiction avec Sophie Thatcher et Jack Quaid, l'un des mieux notés du genre en 2025.",
      "url": "https://www.youtube.com/watch?v=OiqObq3PEKI",
      "image": "https://img.youtube.com/vi/OiqObq3PEKI/hqdefault.jpg",
      "date": "2025-01-31T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T15:40:00.000Z"
    },
    {
      "id": "sf-bugonia",
      "type": "video",
      "title": "Bugonia",
      "summary": "90% sur Rotten Tomatoes (87 Metacritic) : comédie noire de science-fiction de Yorgos Lanthimos avec Emma Stone et Jesse Plemons.",
      "url": "https://www.youtube.com/watch?v=YBOVvUI0AJM",
      "image": "https://img.youtube.com/vi/YBOVvUI0AJM/hqdefault.jpg",
      "date": "2025-10-24T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T15:40:00.000Z"
    },
    {
      "id": "sf-1",
      "type": "video",
      "title": "Disclosure Day",
      "summary": "Le retour de Steven Spielberg à la science-fiction, avec Emily Blunt et Josh O'Connor. Sorti le 10 juin 2026.",
      "url": "https://www.youtube.com/watch?v=Nc5HRNpq82k",
      "image": "https://img.youtube.com/vi/Nc5HRNpq82k/hqdefault.jpg",
      "date": "2026-06-10T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "sf-2",
      "type": "video",
      "title": "Projet Dernière Chance (Project Hail Mary)",
      "summary": "Adaptation ambitieuse du roman d'Andy Weir, avec Ryan Gosling.",
      "url": "https://www.youtube.com/watch?v=zEuBewFxgaA",
      "image": "https://img.youtube.com/vi/zEuBewFxgaA/hqdefault.jpg",
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "sf-mickey-17",
      "type": "video",
      "title": "Mickey 17",
      "summary": "89% sur Rotten Tomatoes : nouveau film de science-fiction de Bong Joon-ho (Parasite) avec Robert Pattinson.",
      "url": "https://www.youtube.com/watch?v=TkEvgqguA_g",
      "image": "https://img.youtube.com/vi/TkEvgqguA_g/hqdefault.jpg",
      "date": "2025-01-31T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T15:40:00.000Z"
    },
    {
      "id": "sf-the-assessment",
      "type": "video",
      "title": "The Assessment",
      "summary": "83% sur Rotten Tomatoes : drame de science-fiction sur la parentalité avec Elizabeth Olsen et Alicia Vikander.",
      "url": "https://www.youtube.com/watch?v=8x5FZUERxzg",
      "image": "https://img.youtube.com/vi/8x5FZUERxzg/hqdefault.jpg",
      "date": "2025-05-08T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T15:40:00.000Z"
    },
    {
      "id": "sf-3",
      "type": "video",
      "title": "The Running Man",
      "summary": "Edgar Wright adapte Stephen King, avec Glen Powell : une critique de la société du spectacle.",
      "url": "https://www.youtube.com/watch?v=KD18ddeFuyM",
      "image": "https://img.youtube.com/vi/KD18ddeFuyM/hqdefault.jpg",
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "sf-4",
      "type": "video",
      "title": "Predator: Badlands",
      "summary": "Un jeune Predator rejeté par les siens fait équipe avec une androïde. Sorti le 5 novembre 2025.",
      "url": "https://www.youtube.com/watch?v=R2n_TZgmmPo",
      "image": "https://img.youtube.com/vi/R2n_TZgmmPo/hqdefault.jpg",
      "date": "2025-11-05T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "sf-ash",
      "type": "video",
      "title": "Ash",
      "summary": "Horreur cosmique stylisée réalisée par Flying Lotus, avec Eiza González et Aaron Paul.",
      "url": "https://www.youtube.com/watch?v=TZ5y2TqpJgg",
      "image": "https://img.youtube.com/vi/TZ5y2TqpJgg/hqdefault.jpg",
      "date": "2025-03-21T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T15:40:00.000Z"
    }
  ],
  "top-jeux": [
    {
      "id": "jeux-clair-obscur",
      "type": "video",
      "title": "Clair Obscur: Expedition 33",
      "summary": "Jeu de l'année 2025 aux The Game Awards, avec 9 récompenses — record du nombre de trophées remportés en une soirée.",
      "url": "https://www.youtube.com/watch?v=wWGIakhqr5g",
      "image": "https://img.youtube.com/vi/wWGIakhqr5g/hqdefault.jpg",
      "date": "2025-04-24T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T15:40:00.000Z"
    },
    {
      "id": "jeux-silksong",
      "type": "video",
      "title": "Hollow Knight: Silksong",
      "summary": "Suite la plus attendue de la décennie, accueil critique quasi unanime dès sa sortie.",
      "url": "https://www.youtube.com/watch?v=EGfxuH-vUr4",
      "image": "https://img.youtube.com/vi/EGfxuH-vUr4/hqdefault.jpg",
      "date": "2025-09-04T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T15:40:00.000Z"
    },
    {
      "id": "jeux-death-stranding-2",
      "type": "video",
      "title": "Death Stranding 2: On the Beach",
      "summary": "Suite très saluée du jeu de Hideo Kojima, exclusivité PS5 fortement notée par la critique.",
      "url": "https://www.youtube.com/watch?v=8Aq_7OsgYLY",
      "image": "https://img.youtube.com/vi/8Aq_7OsgYLY/hqdefault.jpg",
      "date": "2025-06-26T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T15:40:00.000Z"
    },
    {
      "id": "jv-1",
      "type": "video",
      "title": "Monster Hunter Wilds",
      "summary": "Le dernier opus de la licence Capcom, sorti le 12 février 2025.",
      "url": "https://www.youtube.com/watch?v=tQ4lXF8a-TE",
      "image": "https://img.youtube.com/vi/tQ4lXF8a-TE/hqdefault.jpg",
      "date": "2025-02-12T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "jv-2",
      "type": "video",
      "title": "Assassin's Creed Shadows",
      "summary": "Ubisoft situe l'aventure dans le Japon féodal, disponible depuis le 20 mars 2025.",
      "url": "https://www.youtube.com/watch?v=f2s4cgHsnTA",
      "image": "https://img.youtube.com/vi/f2s4cgHsnTA/hqdefault.jpg",
      "date": "2025-03-20T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "jv-3",
      "type": "video",
      "title": "Doom: The Dark Ages",
      "summary": "Le préquel médiéval-futuriste de la licence id Software, disponible depuis le 15 mai 2025.",
      "url": "https://www.youtube.com/watch?v=S7IEg0_qNXs",
      "image": "https://img.youtube.com/vi/S7IEg0_qNXs/hqdefault.jpg",
      "date": "2025-05-15T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "jv-4",
      "type": "video",
      "title": "Elden Ring Nightreign",
      "summary": "Le spin-off coopératif de FromSoftware, disponible depuis le 30 mai 2025.",
      "url": "https://www.youtube.com/watch?v=MqLM4MV0Fls",
      "image": "https://img.youtube.com/vi/MqLM4MV0Fls/hqdefault.jpg",
      "date": "2025-05-30T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "jeux-kcd2",
      "type": "video",
      "title": "Kingdom Come: Deliverance II",
      "summary": "RPG médiéval salué pour son ambition et sa fidélité historique, très bien noté par la presse spécialisée.",
      "url": "https://www.youtube.com/watch?v=sXDoP90YkOc",
      "image": "https://img.youtube.com/vi/sXDoP90YkOc/hqdefault.jpg",
      "date": "2025-02-04T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T15:40:00.000Z"
    },
    {
      "id": "jv-5",
      "type": "video",
      "title": "Sid Meier's Civilization VII",
      "summary": "Le retour de la licence de stratégie culte, disponible depuis le 11 février 2025.",
      "url": "https://www.youtube.com/watch?v=MGOdJMNN2b0",
      "image": "https://img.youtube.com/vi/MGOdJMNN2b0/hqdefault.jpg",
      "date": "2025-02-11T00:00:00.000Z",
      "fetchedAt": "2026-08-17T04:09:02.000Z"
    }
  ],
  "marques-vtt-avinox": [
    {
      "id": "avinox-brand-1",
      "type": "link",
      "title": "Amflow",
      "summary": "",
      "url": "https://www.amflowbikes.com/",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T20:05:00.000Z"
    },
    {
      "id": "avinox-brand-2",
      "type": "link",
      "title": "Canyon",
      "summary": "",
      "url": "https://www.canyon.com/en-us/mountain-bikes/",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T20:05:00.000Z"
    },
    {
      "id": "avinox-brand-3",
      "type": "link",
      "title": "Commencal",
      "summary": "",
      "url": "https://www.commencal.com/",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T20:05:00.000Z"
    },
    {
      "id": "avinox-brand-4",
      "type": "link",
      "title": "Forbidden Bike Co.",
      "summary": "",
      "url": "https://forbiddenbike.com/",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T20:05:00.000Z"
    },
    {
      "id": "avinox-brand-5",
      "type": "link",
      "title": "Megamo",
      "summary": "",
      "url": "https://www.megamo.com/",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T20:05:00.000Z"
    },
    {
      "id": "avinox-brand-6",
      "type": "link",
      "title": "Mondraker",
      "summary": "",
      "url": "https://mondraker.com/us/en",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T20:05:00.000Z"
    },
    {
      "id": "avinox-brand-7",
      "type": "link",
      "title": "Orbea",
      "summary": "",
      "url": "https://www.orbea.com/",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T20:05:00.000Z"
    },
    {
      "id": "avinox-brand-8",
      "type": "link",
      "title": "Pivot Cycles",
      "summary": "",
      "url": "https://www.pivotcycles.com/en/",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T20:05:00.000Z"
    },
    {
      "id": "avinox-brand-9",
      "type": "link",
      "title": "ROTWILD",
      "summary": "",
      "url": "https://www.rotwild.com/en",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T20:05:00.000Z"
    },
    {
      "id": "avinox-brand-10",
      "type": "link",
      "title": "Unno",
      "summary": "",
      "url": "https://www.unno.com/",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T20:05:00.000Z"
    },
    {
      "id": "avinox-brand-11",
      "type": "link",
      "title": "YT Industries",
      "summary": "",
      "url": "https://www.yt-industries.com/en-us",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-12T20:05:00.000Z"
    },
    {
      "id": "avinox-brand-12",
      "type": "link",
      "title": "Atherton",
      "summary": "",
      "url": "https://www.athertonbikes.com/",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "avinox-brand-13",
      "type": "link",
      "title": "Crussis",
      "summary": "",
      "url": "https://www.crussis.com/",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-17T04:09:02.000Z"
    }
  ],
  "presse-citron": [
    {
      "id": "presse-citron-2",
      "type": "article",
      "title": "La nouvelle IA d'OpenAI fait peur à son propre créateur",
      "summary": "OpenAI a développé un nouveau modèle plus puissant, surnommé en interne «Astra», dont l'accès reste volontairement restreint en raison des risques qu'il pourrait représenter s'il était rendu public. Il n'est pour l'instant pas disponible sur ChatGPT, l'entreprise évoquant un «seuil critique» de capacités atteint.",
      "url": "https://www.presse-citron.net/ia-openai-fait-peur-a-son-createur-chatgpt-seuil-critique/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fia-openai-fait-peur-a-son-createur-chatgpt-seuil-critique%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-12T21:10:00.000Z"
    },
    {
      "id": "presse-citron-3",
      "type": "article",
      "title": "Souveraineté, cybersécurité, quantique... 7 points à retenir sur l'IA",
      "summary": "Deux experts du cabinet Square Management, Jules Brochard et Axel Barrault, décryptent la menace que représente l'alliance entre IA et informatique quantique pour les systèmes de chiffrement actuels (RSA). Ils pointent aussi une stratégie de captation de données chiffrées par certains États, stockées en vue du jour où les ordinateurs quantiques seront assez puissants pour les décrypter, et relativisent le discours sur la souveraineté européenne, jugée encore trop dépendante des géants américains du cloud.",
      "url": "https://www.presse-citron.net/souverainete-cybersecurite-quantique-discute-ia-avec-2-experts-7-points-retenir/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fsouverainete-cybersecurite-quantique-discute-ia-avec-2-experts-7-points-retenir%2F?w=400&h=225",
      "date": "2026-07-05T00:00:00.000Z",
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-12T21:10:00.000Z"
    },
    {
      "id": "presse-citron-4",
      "type": "article",
      "title": "Une nouvelle IA en France : OVHcloud se lance dans les LLM",
      "summary": "L'hébergeur français, acteur reconnu du cloud, annonce à Paris son entrée sur le marché des grands modèles de langage (LLM) — une diversification stratégique face à la domination des géants américains sur ce secteur.",
      "url": "https://www.presse-citron.net/une-nouvelle-ia-en-france-ovhcloud-annonce-a-paris-se-lancer-dans-les-llm/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fune-nouvelle-ia-en-france-ovhcloud-annonce-a-paris-se-lancer-dans-les-llm%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-12T21:10:00.000Z"
    },
    {
      "id": "presse-citron-5",
      "type": "article",
      "title": "Accord XXL entre Mistral et Microsoft",
      "summary": "Microsoft a signé le 22 juillet 2026 un accord pluriannuel avec la start-up française Mistral AI pour utiliser la puissance de calcul de ses infrastructures européennes. En retour, Mistral pourra accélérer le déploiement de ses centres de données sur le continent et intégrer plusieurs de ses modèles dans les produits de l'Américain, sans que Microsoft n'entre au capital — l'accord positionne aussi la start-up pour une levée de fonds visant une valorisation à 20 milliards d'euros.",
      "url": "https://www.presse-citron.net/france-accord-xxl-entre-mistral-et-microsoft/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Ffrance-accord-xxl-entre-mistral-et-microsoft%2F?w=400&h=225",
      "date": "2026-07-22T00:00:00.000Z",
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-12T21:10:00.000Z"
    },
    {
      "id": "presse-citron-6",
      "type": "article",
      "title": "L'avenir de l'IA se joue dans cette île de 36 197 km²",
      "summary": "Nvidia investit actuellement 100 milliards de dollars par an à Taïwan pour la production de puces d'intelligence artificielle, un montant qui pourrait grimper jusqu'à 150 milliards par an. L'île, qui concentre une grande partie de la chaîne de production mondiale des semi-conducteurs avancés, devient un point stratégique central pour l'avenir de l'IA.",
      "url": "https://www.presse-citron.net/ia-ile-nvidia-y-investit-massivement-jusqua-150-milliards-de-dollars-par-an/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fia-ile-nvidia-y-investit-massivement-jusqua-150-milliards-de-dollars-par-an%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-13T04:05:50.000Z"
    },
    {
      "id": "presse-citron-7",
      "type": "article",
      "title": "Ce nouveau métier payé jusqu'à 300 000€/an n'exige pas de diplôme",
      "summary": "Apparu il y a environ trois ans, le «prompt engineering» — l'art d'obtenir une réponse exacte d'une IA — est devenu un métier à part entière. Aux États-Unis, certaines offres pour ce poste dépassent les 300 000 dollars par an, sans exiger de diplôme particulier.",
      "url": "https://www.presse-citron.net/invente-il-y-a-3-ans-ce-nouveau-metier-paye-jusqua-300-000e-an-etonne-car-il-nexige-pas-de-diplome/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Finvente-il-y-a-3-ans-ce-nouveau-metier-paye-jusqua-300-000e-an-etonne-car-il-nexige-pas-de-diplome%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-13T04:05:50.000Z"
    },
    {
      "id": "presse-citron-8",
      "type": "article",
      "title": "+58 % en 9 jours : comment Trump, Musk, Google et Nvidia ont sauvé Intel",
      "summary": "Le titre d'Intel a bondi de 58% en seulement 9 jours, porté par une série de soutiens stratégiques : investissements de Donald Trump, Elon Musk, Google et Nvidia dans le fondeur américain, en difficulté face à la concurrence.",
      "url": "https://www.presse-citron.net/donald-trump-elon-musk-google-et-nvidia-ont-sauve-le-soldat-intel/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fdonald-trump-elon-musk-google-et-nvidia-ont-sauve-le-soldat-intel%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-13T04:05:50.000Z"
    },
    {
      "id": "presse-citron-9",
      "type": "article",
      "title": "Pas d'IA, pas de promotion",
      "summary": "Une entreprise impose désormais à ses cadres l'utilisation de l'intelligence artificielle comme condition pour obtenir une promotion, illustrant la pression croissante des employeurs pour accélérer l'adoption de l'IA en interne.",
      "url": "https://www.presse-citron.net/ia-promotion-entreprise-forcer-cadres-intelligence-artificielle/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fia-promotion-entreprise-forcer-cadres-intelligence-artificielle%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-13T04:05:50.000Z"
    },
    {
      "id": "presse-citron-10",
      "type": "article",
      "title": "L'IA fait exploser les bénéfices de Google de 298 %",
      "summary": "Dopés par l'intelligence artificielle, les résultats trimestriels de Google affichent un bond spectaculaire de 298% des bénéfices — une performance qui n'a pourtant pas empêché l'action du groupe de chuter en bourse dans la foulée.",
      "url": "https://www.presse-citron.net/ia-fait-exploser-benefices-google-298-action-degringole-foulee/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fia-fait-exploser-benefices-google-298-action-degringole-foulee%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-13T04:05:50.000Z"
    },
    {
      "id": "presse-citron-11",
      "type": "article",
      "title": "Apple et l'intelligence artificielle : racheter ou mourir",
      "summary": "Face à son retard perçu dans la course à l'intelligence artificielle, Apple serait confronté à un choix stratégique radical : multiplier les rachats de start-ups spécialisées ou risquer de décrocher durablement face à ses concurrents.",
      "url": "https://www.presse-citron.net/apple-et-lintelligence-artificielle-racheter-ou-mourir/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fapple-et-lintelligence-artificielle-racheter-ou-mourir%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-13T04:05:50.000Z"
    },
    {
      "id": "presse-citron-12",
      "type": "article",
      "title": "La superintelligence pour tous : la vision de l'IA de Zuckerberg inquiète",
      "summary": "Mark Zuckerberg défend une vision où la «superintelligence personnelle» serait accessible à tous via les produits Meta, chacun disposant de son propre assistant IA individuel. Cette ambition suscite des inquiétudes chez les experts, qui pointent les risques d'une IA aussi puissante déployée à grande échelle sans garde-fous suffisants.",
      "url": "https://www.presse-citron.net/superintelligence-pour-tous-pourquoi-vision-ia-mark-zuckerberg-vraiment-pas-rassurante/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fsuperintelligence-pour-tous-pourquoi-vision-ia-mark-zuckerberg-vraiment-pas-rassurante%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-14T04:12:37.000Z"
    },
    {
      "id": "presse-citron-13",
      "type": "article",
      "title": "Elon Musk tient sa revanche : son IA Grok rattrape ChatGPT",
      "summary": "Grok, l'intelligence artificielle développée par xAI d'Elon Musk, aurait comblé son retard technique sur ChatGPT selon plusieurs comparatifs récents. Une avancée qui rebat les cartes de la compétition entre grands modèles de langage, jusque-là dominée par OpenAI.",
      "url": "https://www.presse-citron.net/elon-musk-tient-sa-revanche-son-ia-grok-vient-de-rattraper-chatgpt/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Felon-musk-tient-sa-revanche-son-ia-grok-vient-de-rattraper-chatgpt%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-14T04:12:37.000Z"
    },
    {
      "id": "presse-citron-14",
      "type": "article",
      "title": "SpaceX en pleine reconversion : l'IA doit rapporter plus que les fusées",
      "summary": "Selon Elon Musk, les revenus générés par l'intelligence artificielle chez SpaceX dépasseront dès septembre ceux des autres activités du groupe, fusées et Starlink compris — un virage stratégique majeur pour l'entreprise.",
      "url": "https://www.presse-citron.net/spacex-reconversion-nouvelle-activite-depassera-starlink-fusees/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fspacex-reconversion-nouvelle-activite-depassera-starlink-fusees%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-15T04:06:06.000Z"
    },
    {
      "id": "presse-citron-15",
      "type": "article",
      "title": "Cette pépite gratuite de Google transforme l'iPhone en outil de prise de notes",
      "summary": "Google propose un nouvel outil gratuit basé sur l'IA qui permet de transformer l'iPhone en un puissant assistant de prise de notes, avec reconnaissance vocale et organisation automatique du contenu.",
      "url": "https://www.presse-citron.net/nouvelle-pepite-google-gratuite-transforme-iphone-outil-notes/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fnouvelle-pepite-google-gratuite-transforme-iphone-outil-notes%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-15T04:06:06.000Z"
    },
    {
      "id": "presse-citron-16",
      "type": "article",
      "title": "Ce détail caché trahira les textes générés par l'IA",
      "summary": "Les textes rédigés par une intelligence artificielle contiennent une signature technique cachée qui permet de les identifier. Une astuce existe pour l'effacer, mais elle reste fastidieuse et chronophage à appliquer manuellement.",
      "url": "https://www.presse-citron.net/detail-trahira-les-textes-ia-astuce-pour-debarrasser/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fdetail-trahira-les-textes-ia-astuce-pour-debarrasser%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-18T04:04:36.000Z"
    }
  ],
  "wing-freefly": [
    {
      "id": "wing-8",
      "type": "video",
      "title": "GWA Wingfoil World Cup Fuerteventura 2026 – Day 3 Livestream",
      "summary": "Replay du 3e jour de l'étape 2026 du World Cup de Fuerteventura, avec les épreuves FreeFly-Slalom.",
      "url": "https://www.youtube.com/watch?v=NV1kU9ccbu0",
      "image": "https://img.youtube.com/vi/NV1kU9ccbu0/hqdefault.jpg",
      "date": null,
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-16T04:06:21.000Z"
    },
    {
      "id": "wing-2",
      "type": "video",
      "title": "WINGFOIL - FREEFLY avec les copains",
      "summary": "Session freefly conviviale entre riders, ambiance décontractée.",
      "url": "https://www.youtube.com/watch?v=aXOlKUkmWGo",
      "image": "https://img.youtube.com/vi/aXOlKUkmWGo/hqdefault.jpg",
      "date": null,
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-13T06:51:42.000Z"
    },
    {
      "id": "wing-6",
      "type": "video",
      "title": "GWA 2026 Season Teaser",
      "summary": "Bande-annonce de la nouvelle saison du circuit mondial GWA Wingfoil, incluant la discipline FreeFly-Slalom.",
      "url": "https://www.youtube.com/watch?v=808vRAA3ygg",
      "image": "https://img.youtube.com/vi/808vRAA3ygg/hqdefault.jpg",
      "date": "2026-01-01T00:00:00.000Z",
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-15T04:06:06.000Z"
    },
    {
      "id": "wing-9",
      "type": "video",
      "title": "WINGFOIL CRAZY SESSION !",
      "summary": "Récit d'une session intense en wingfoil, entre sensations fortes et conditions engagées.",
      "url": "https://www.youtube.com/watch?v=cx1n10_g5_E",
      "image": "https://img.youtube.com/vi/cx1n10_g5_E/hqdefault.jpg",
      "date": null,
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-16T04:06:21.000Z"
    },
    {
      "id": "wing-4",
      "type": "video",
      "title": "Tech Talk : Float & Float SLS 2026",
      "summary": "Présentation par Ken Winner et Klaas Voget des ailes Float et Float SLS 2026, pensées pour la vague et le freefly.",
      "url": "https://www.youtube.com/watch?v=8dF9cpS-YdY",
      "image": "https://img.youtube.com/vi/8dF9cpS-YdY/hqdefault.jpg",
      "date": null,
      "fetchedAt": "2026-08-19T04:04:45.000Z",
      "firstSeenAt": "2026-08-13T06:51:42.000Z"
    }
  ],
  "restaurant-lausanne": [
    {
      "id": "resto-1",
      "type": "link",
      "title": "Le Berceau des Sens",
      "summary": "",
      "url": "https://www.berceau-des-sens.ch/en/",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-13T06:51:42.000Z"
    },
    {
      "id": "resto-2",
      "type": "link",
      "title": "Pic au Beau-Rivage Palace",
      "summary": "",
      "url": "https://www.brp.ch/en/restaurants-bars/pic-at-beau-rivage-palace/",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-13T06:51:42.000Z"
    },
    {
      "id": "resto-3",
      "type": "link",
      "title": "La Table (Lausanne Palace)",
      "summary": "",
      "url": "https://www.lausanne-palace.ch/en/restaurants-bars/la-table-du-lausanne-palace/le-restaurant/",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-13T06:51:42.000Z"
    },
    {
      "id": "resto-4",
      "type": "link",
      "title": "Osteria Balsamico",
      "summary": "",
      "url": "https://osteriabalsamico.ch",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-13T06:51:42.000Z"
    },
    {
      "id": "resto-5",
      "type": "link",
      "title": "La Pergola",
      "summary": "",
      "url": "https://www.restaurant-la-pergola.ch",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-13T06:51:42.000Z"
    },
    {
      "id": "resto-6",
      "type": "link",
      "title": "L'Echo",
      "summary": "",
      "url": "https://www.restaurant-lecho.com/",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-13T06:51:42.000Z"
    },
    {
      "id": "resto-7",
      "type": "link",
      "title": "Binôm'",
      "summary": "",
      "url": "https://restaurant-binom.ch",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-13T06:51:42.000Z"
    },
    {
      "id": "resto-8",
      "type": "link",
      "title": "Café de Grancy",
      "summary": "",
      "url": "https://www.cafedegrancy.ch/",
      "image": null,
      "date": null,
      "fetchedAt": "2026-08-17T04:09:02.000Z",
      "firstSeenAt": "2026-08-13T06:51:42.000Z"
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
  pendingSaves: 0,
  activeTags: loadActiveTags(),
  seen: loadSeenSet(),
  searchQuery: ""
};

const dragState = { id: null };

function loadActiveTags() {
  try {
    return new Set(JSON.parse(localStorage.getItem("dashboard-active-tags") || "[]"));
  } catch {
    return new Set();
  }
}
function saveActiveTags() {
  localStorage.setItem("dashboard-active-tags", JSON.stringify([...state.activeTags]));
}

function loadSeenSet() {
  try {
    return new Set(JSON.parse(localStorage.getItem("dashboard-seen-urls") || "[]"));
  } catch {
    return new Set();
  }
}
function saveSeenSet() {
  localStorage.setItem("dashboard-seen-urls", JSON.stringify([...state.seen]));
}
function markSeen(url, node, cssClass) {
  if (!url || state.seen.has(url)) return;
  state.seen.add(url);
  saveSeenSet();
  if (node) node.classList.add(cssClass);
}

function normalizeSearch(s) {
  return (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}
function filteredItemsFor(col) {
  const items = state.results[col.id] || [];
  const q = normalizeSearch(state.searchQuery);
  if (!q) return items;
  return items.filter(it => normalizeSearch((it.title || "") + " " + (it.summary || "")).includes(q));
}

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

const NEW_BADGE_WINDOW_MS = 24 * 60 * 60 * 1000;

function isRecentlyNew(item) {
  if (!item.firstSeenAt) return false;
  const seen = new Date(item.firstSeenAt).getTime();
  if (Number.isNaN(seen)) return false;
  return Date.now() - seen < NEW_BADGE_WINDOW_MS;
}

function renderTile(item, opts = {}) {
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
  const summaryClass = "tile-summary" + (opts.longSummary ? " tile-summary-long" : "");
  const body = el("div", { class: "tile-body" }, [
    el("p", { class: "tile-title" }, item.title || "Sans titre"),
    el("p", { class: summaryClass }, item.summary || ""),
    el("div", { class: "tile-footer" }, footerChildren)
  ]);
  const mediaWrap = isRecentlyNew(item)
    ? el("div", { class: "tile-media-wrap" }, [media, el("span", { class: "new-badge", title: "Apparu dans les dernières 24h" }, "Nouveau")])
    : media;
  const tag = item.url ? "a" : "div";
  const seenClass = item.url && state.seen.has(item.url) ? " tile-seen" : "";
  const attrs = item.url
    ? {
        class: "tile" + seenClass, href: item.url, target: "_blank", rel: "noopener",
        onclick: (e) => markSeen(item.url, e.currentTarget, "tile-seen")
      }
    : { class: "tile" };
  return el(tag, attrs, [mediaWrap, body]);
}

function renderListItem(item, opts = {}) {
  const tag = item.url ? "a" : "div";
  const seenClass = item.url && state.seen.has(item.url) ? " list-item-seen" : "";
  const attrs = item.url
    ? {
        class: "list-item" + seenClass, href: item.url, target: "_blank", rel: "noopener",
        onclick: (e) => markSeen(item.url, e.currentTarget, "list-item-seen")
      }
    : { class: "list-item" };
  const nameChildren = [el("span", { class: "list-item-name" }, item.title || "Sans titre")];
  const pubDate = opts.showDate ? formatDate(item.date, item.datePrecision) : null;
  if (pubDate) nameChildren.push(el("span", { class: "list-item-date" }, pubDate));
  const children = [el("div", { class: "list-item-main" }, nameChildren)];
  if (isRecentlyNew(item)) {
    children.push(el("span", { class: "list-item-badge", title: "Apparu dans les dernières 24h" }, "Nouveau"));
  }
  return el(tag, attrs, children);
}

function compareListByDate(a, b) {
  const now = Date.now();
  const ta = a.date ? new Date(a.date).getTime() : NaN;
  const tb = b.date ? new Date(b.date).getTime() : NaN;
  const upcomingA = !Number.isNaN(ta) && ta >= now;
  const upcomingB = !Number.isNaN(tb) && tb >= now;
  if (upcomingA && upcomingB) return ta - tb;
  if (upcomingA) return -1;
  if (upcomingB) return 1;
  const knownA = !Number.isNaN(ta);
  const knownB = !Number.isNaN(tb);
  if (knownA && knownB) return tb - ta;
  if (knownA) return -1;
  if (knownB) return 1;
  return (a.title || "").localeCompare(b.title || "", "fr", { sensitivity: "base" });
}

function renderColumn(col, idx, total) {
  const items = filteredItemsFor(col);
  const isList = col.layout === "list" || col.layout === "list-date";
  const bodyClass = isList ? "column-list" : "column-body";
  let bodyChildren;
  if (!items.length) {
    bodyChildren = [el("div", { class: "empty-tile" }, col.lastError || "Aucun résultat pour l'instant.")];
  } else if (isList) {
    const byDate = col.layout === "list-date";
    const sorted = byDate
      ? [...items].sort(compareListByDate)
      : [...items].sort((a, b) => (a.title || "").localeCompare(b.title || "", "fr", { sensitivity: "base" }));
    bodyChildren = sorted.map(item => renderListItem(item, { showDate: byDate }));
  } else {
    const longSummary = col.sourceType === "site";
    bodyChildren = items.map(item => renderTile(item, { longSummary }));
  }
  const body = el("div", { class: bodyClass }, bodyChildren);

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

  const tags = col.tags || [];
  const head = el("div", headAttrs, [
    el("div", { class: "column-title-row" }, [
      el("h2", { class: "column-title" }, col.title),
      menu
    ]),
    tags.length ? el("div", { class: "column-tags" }, tags.map(t => el("span", { class: "column-tag" }, t))) : null,
    el("p", { class: "column-prompt" }, col.prompt),
    el("div", { class: "column-meta" }, [
      el("span", { title: "Dernière mise à jour de cette colonne" },
        (col.lastRun ? `Màj ${formatDate(col.lastRun)}` : "Jamais exécuté") +
        (col.frequency === "weekly" ? " · hebdo" : "")),
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
  const tagFiltered = visibleColumns();
  const query = normalizeSearch(state.searchQuery);
  const visible = query ? tagFiltered.filter(col => filteredItemsFor(col).length > 0) : tagFiltered;
  const total = visible.length;
  visible.forEach((col, idx) => board.appendChild(renderColumn(col, idx, total)));
  board.appendChild(renderAddColumn());
  updateStatusLine();
  renderTagFilterBar();
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

// ---- Tag filter bar ----
function renderTagFilterBar() {
  const bar = $("#tagFilterBar");
  if (!bar) return;
  bar.innerHTML = "";
  const tags = getAllTags();
  if (tags.length === 0) return;
  bar.appendChild(el("button", {
    class: "tag-pill" + (state.activeTags.size === 0 ? " active" : ""),
    onclick: () => { state.activeTags.clear(); saveActiveTags(); render(); }
  }, "Tous"));
  tags.forEach(tag => {
    bar.appendChild(el("button", {
      class: "tag-pill" + (state.activeTags.has(tag) ? " active" : ""),
      onclick: () => {
        if (state.activeTags.has(tag)) state.activeTags.delete(tag);
        else state.activeTags.add(tag);
        saveActiveTags();
        render();
      }
    }, tag));
  });
}

// ---- Board horizontal scroll ----
function updateScrollButtons() {
  const board = $("#board");
  const toolbar = $("#boardToolbar");
  if (!board || !toolbar) return;
  const hasOverflow = board.scrollWidth > board.clientWidth + 4;
  toolbar.classList.toggle("visible", state.columns.length > 0);
  $("#scrollControls").style.display = hasOverflow ? "flex" : "none";
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
  return Math.min(Math.max(n, 1), 30);
}

function clampResultCount(n) {
  const v = parseInt(n, 10);
  return Math.min(Math.max(Number.isFinite(v) ? v : 5, 1), 30);
}

const LAYOUTS = ["tiles", "list", "list-date"];
function normalizeLayout(v) {
  return LAYOUTS.includes(v) ? v : "tiles";
}

const SOURCE_TYPES = ["prompt", "site"];
function normalizeSourceType(v) {
  return SOURCE_TYPES.includes(v) ? v : "prompt";
}

function applyPromptFieldLabel(sourceTypeSelect, promptLabel, promptInput) {
  const isSite = sourceTypeSelect.value === "site";
  promptLabel.textContent = isSite ? "Nom ou URL du site" : "Prompt";
  promptInput.placeholder = isSite
    ? "Ex : Presse-citron ou https://www.presse-citron.net"
    : "Ex : Affiche-moi les 5 dernières actualités sur...";
}

function parseTags(str) {
  const seen = new Set();
  for (const raw of str.split(",")) {
    const t = raw.trim();
    if (t) seen.add(t);
  }
  return [...seen];
}

function getAllTags() {
  const set = new Set();
  state.columns.forEach(c => (c.tags || []).forEach(t => set.add(t)));
  return [...set].sort((a, b) => a.localeCompare(b));
}

function visibleColumns() {
  if (state.activeTags.size === 0) return state.columns;
  return state.columns.filter(c => (c.tags || []).some(t => state.activeTags.has(t)));
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
  const promptLabel = el("label", {}, "Prompt");
  const promptInput = el("textarea", { rows: "4", placeholder: "Ex : Affiche-moi les 5 dernières actualités sur..." });
  const tagsInput = el("input", { placeholder: "Ex : sport, suisse" });
  const resultCountInput = el("input", { type: "number", min: "1", max: "30", value: String(guessCount("")) });
  const frequencySelect = el("select", {}, [
    el("option", { value: "daily" }, "Quotidienne (chaque jour, 6h)"),
    el("option", { value: "weekly" }, "Hebdomadaire (chaque lundi, 6h)")
  ]);
  frequencySelect.value = "daily";
  const layoutSelect = el("select", {}, [
    el("option", { value: "tiles" }, "Tuiles (avec image)"),
    el("option", { value: "list" }, "Liste simple (texte, A→Z)"),
    el("option", { value: "list-date" }, "Liste triée par date (le plus proche en haut)")
  ]);
  layoutSelect.value = "tiles";
  const sourceTypeSelect = el("select", {}, [
    el("option", { value: "prompt" }, "Prompt personnalisé"),
    el("option", { value: "site" }, "Site d'actu (flux RSS)")
  ]);
  sourceTypeSelect.value = "prompt";
  sourceTypeSelect.addEventListener("change", () => applyPromptFieldLabel(sourceTypeSelect, promptLabel, promptInput));

  const form = el("div", { class: "column" }, [
    el("div", { class: "column-head" }, [
      el("h2", { class: "column-title" }, "Nouvelle colonne"),
      el("div", { class: "form-field" }, [el("label", {}, "Titre"), titleInput]),
      el("div", { class: "form-field" }, [el("label", {}, "Type de colonne"), sourceTypeSelect]),
      el("div", { class: "form-field" }, [promptLabel, promptInput]),
      el("div", { class: "form-field" }, [el("label", {}, "Tags (séparés par une virgule)"), tagsInput]),
      el("div", { class: "form-field-row" }, [
        el("div", { class: "form-field" }, [el("label", {}, "Nombre de résultats"), resultCountInput]),
        el("div", { class: "form-field" }, [el("label", {}, "Fréquence de mise à jour"), frequencySelect])
      ]),
      el("div", { class: "form-field" }, [el("label", {}, "Affichage"), layoutSelect]),
      el("div", { class: "form-actions" }, [
        el("button", { class: "btn btn-ghost", onclick: render }, "Annuler"),
        el("button", {
          class: "btn btn-primary",
          onclick: async () => {
            const title = titleInput.value.trim();
            const prompt = promptInput.value.trim();
            if (!title || !prompt) { toast("Titre et " + (sourceTypeSelect.value === "site" ? "nom du site sont" : "prompt sont") + " requis."); return; }
            const now = new Date().toISOString();
            const col = {
              id: slugify(title), title, prompt,
              sourceType: normalizeSourceType(sourceTypeSelect.value),
              resultCount: clampResultCount(resultCountInput.value),
              frequency: frequencySelect.value === "weekly" ? "weekly" : "daily",
              layout: normalizeLayout(layoutSelect.value),
              tags: parseTags(tagsInput.value),
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
  const idx = visibleColumns().findIndex(c => c.id === col.id);
  const target = columns[idx];

  const titleInput = el("input", { value: col.title });
  const promptLabel = el("label", {}, "Prompt");
  const promptInput = el("textarea", { rows: "4" }, col.prompt);
  const tagsInput = el("input", { value: (col.tags || []).join(", "), placeholder: "Ex : sport, suisse" });
  const resultCountInput = el("input", { type: "number", min: "1", max: "30", value: String(col.resultCount || guessCount(col.prompt)) });
  const frequencySelect = el("select", {}, [
    el("option", { value: "daily" }, "Quotidienne (chaque jour, 6h)"),
    el("option", { value: "weekly" }, "Hebdomadaire (chaque lundi, 6h)")
  ]);
  frequencySelect.value = col.frequency === "weekly" ? "weekly" : "daily";
  const layoutSelect = el("select", {}, [
    el("option", { value: "tiles" }, "Tuiles (avec image)"),
    el("option", { value: "list" }, "Liste simple (texte, A→Z)"),
    el("option", { value: "list-date" }, "Liste triée par date (le plus proche en haut)")
  ]);
  layoutSelect.value = normalizeLayout(col.layout);
  const sourceTypeSelect = el("select", {}, [
    el("option", { value: "prompt" }, "Prompt personnalisé"),
    el("option", { value: "site" }, "Site d'actu (flux RSS)")
  ]);
  sourceTypeSelect.value = normalizeSourceType(col.sourceType);
  sourceTypeSelect.addEventListener("change", () => applyPromptFieldLabel(sourceTypeSelect, promptLabel, promptInput));
  applyPromptFieldLabel(sourceTypeSelect, promptLabel, promptInput);

  const form = el("div", { class: "column" }, [
    el("div", { class: "column-head" }, [
      el("div", { class: "form-field" }, [el("label", {}, "Titre"), titleInput]),
      el("div", { class: "form-field" }, [el("label", {}, "Type de colonne"), sourceTypeSelect]),
      el("div", { class: "form-field" }, [promptLabel, promptInput]),
      el("div", { class: "form-field" }, [el("label", {}, "Tags (séparés par une virgule)"), tagsInput]),
      el("div", { class: "form-field-row" }, [
        el("div", { class: "form-field" }, [el("label", {}, "Nombre de résultats"), resultCountInput]),
        el("div", { class: "form-field" }, [el("label", {}, "Fréquence de mise à jour"), frequencySelect])
      ]),
      el("div", { class: "form-field" }, [el("label", {}, "Affichage"), layoutSelect]),
      el("div", { class: "form-actions" }, [
        el("button", { class: "btn btn-ghost", onclick: render }, "Annuler"),
        el("button", {
          class: "btn btn-primary",
          onclick: async () => {
            col.title = titleInput.value.trim() || col.title;
            col.prompt = promptInput.value.trim() || col.prompt;
            col.sourceType = normalizeSourceType(sourceTypeSelect.value);
            col.resultCount = clampResultCount(resultCountInput.value);
            col.frequency = frequencySelect.value === "weekly" ? "weekly" : "daily";
            col.layout = normalizeLayout(layoutSelect.value);
            col.tags = parseTags(tagsInput.value);
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

// ---- Compact mode ----
function initCompactMode() {
  const on = localStorage.getItem("dashboard-compact") === "1";
  document.body.classList.toggle("compact", on);
  $("#compactToggle").classList.toggle("active", on);
}
function toggleCompactMode() {
  const next = !document.body.classList.contains("compact");
  document.body.classList.toggle("compact", next);
  localStorage.setItem("dashboard-compact", next ? "1" : "0");
  $("#compactToggle").classList.toggle("active", next);
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
  initCompactMode();
  $("#compactToggle").addEventListener("click", toggleCompactMode);
  $("#searchInput").addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    render();
  });
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
