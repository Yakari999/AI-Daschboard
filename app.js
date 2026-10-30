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
    "lastRun": "2026-10-26T04:09:00.000Z",
    "sourceType": "prompt"
  },
  {
    "id": "courses-au-large",
    "title": "Courses au large",
    "prompt": "liste des prochaines courses de voile au large, imoca, ultime etc avec lien vers les site web des course",
    "resultCount": 7,
    "createdAt": "2026-08-12T09:39:51.181Z",
    "updatedAt": "2026-08-17T11:51:20.402Z",
    "lastRun": "2026-10-26T04:09:00.000Z",
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
    "lastRun": "2026-10-26T04:09:00.000Z",
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
    "lastRun": "2026-10-26T04:09:00.000Z",
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
    "lastRun": "2026-10-26T04:09:00.000Z",
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
    "lastRun": "2026-10-26T04:09:00.000Z",
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
    "lastRun": "2026-10-30T04:09:00.000Z",
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
    "lastRun": "2026-10-26T04:09:00.000Z",
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
    "lastRun": "2026-10-30T04:09:00.000Z"
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
    "lastRun": "2026-10-30T04:09:00.000Z"
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
    "lastRun": "2026-10-26T04:09:00.000Z"
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
      "id": "laus-c29",
      "type": "article",
      "title": "Charles Blanc-Gatti. Les couleurs du son",
      "summary": "Du 25 septembre 2026 au 17 janvier 2027 au MCBA (Place de la Gare 16, Lausanne), entrée libre : rétrospective consacrée au peintre, cinéaste et musicien lausannois Charles Blanc-Gatti (1890-1966), figure de la « musicalisation » des arts visuels, avec peintures et documents audiovisuels explorant les équivalences entre couleurs et sons.",
      "url": "https://www.mcba.ch/en/exhibitions/blanc-gatti/",
      "date": "2026-09-25T00:00:00.000Z",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.mcba.ch%2Fen%2Fexhibitions%2Fblanc-gatti%2F?w=400&h=225",
      "fetchedAt": "2026-09-21T04:09:32.000Z",
      "firstSeenAt": "2026-09-21T04:09:32.000Z"
    },
    {
      "id": "laus-c31",
      "type": "article",
      "title": "JazzOnze+, 39e édition",
      "summary": "Du 27 octobre au 1er novembre 2026, le festival JazzOnze+ investit sept lieux du centre-ville de Lausanne (dont le Casino de Montbenon) avec une programmation jazz internationale réunissant notamment Hiromi, Kenny Barron, Nate Smith, Kurt Rosenwinkel et Joe Armon-Jones.",
      "url": "https://jazzonzeplus.ch/",
      "date": "2026-10-27T00:00:00.000Z",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fjazzonzeplus.ch%2F?w=400&h=225",
      "fetchedAt": "2026-10-05T04:08:00.000Z",
      "firstSeenAt": "2026-10-05T04:08:00.000Z"
    },
    {
      "id": "laus-c33",
      "type": "article",
      "title": "Portugal. The Man en concert à Lausanne",
      "summary": "Le groupe américain Portugal. The Man se produit aux Docks à Lausanne le 17 novembre 2026 à 19h30, dans le cadre d'une date reportée depuis le 14 mars 2026 (les billets déjà achetés restent valables).",
      "url": "https://www.lausanne-tourisme.ch/fr/evenement/portugal-the-man",
      "date": "2026-11-17T00:00:00.000Z",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.lausanne-tourisme.ch%2Ffr%2Fevenement%2Fportugal-the-man?w=400&h=225",
      "fetchedAt": "2026-10-17T04:08:00.000Z",
      "firstSeenAt": "2026-10-17T04:08:00.000Z"
    },
    {
      "id": "laus-c34",
      "type": "article",
      "title": "Festival Bach de Lausanne, 28e édition « Aimez-vous Bach… »",
      "summary": "Du 6 novembre au 4 décembre 2026, le Festival Bach de Lausanne propose dix concerts exceptionnels dans divers lieux de la ville, consacrés à l'interprétation de l'œuvre de Jean-Sébastien Bach.",
      "url": "https://www.lausanne-tourisme.ch/fr/evenement/festival-bach-de-lausanne",
      "date": "2026-11-06T00:00:00.000Z",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.lausanne-tourisme.ch%2Ffr%2Fevenement%2Ffestival-bach-de-lausanne?w=400&h=225",
      "fetchedAt": "2026-10-20T04:08:00.000Z",
      "firstSeenAt": "2026-10-20T04:08:00.000Z"
    },
    {
      "id": "laus-c35",
      "type": "article",
      "title": "Le Grand Récital — Grigory Sokolov",
      "summary": "Le pianiste Grigory Sokolov se produit à la Salle Métropole de Lausanne le 7 novembre 2026, avec un apéro gratuit et une présentation du programme dès 18h avant le récital à 19h (Sonate n°21 D.960 de Schubert, suite du programme à annoncer). Billets dès 24 CHF.",
      "url": "https://www.lausanne-tourisme.ch/fr/evenement/le-grand-recital-grigory-sokolov",
      "date": "2026-11-07T00:00:00.000Z",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.lausanne-tourisme.ch%2Ffr%2Fevenement%2Fle-grand-recital-grigory-sokolov?w=400&h=225",
      "fetchedAt": "2026-10-30T04:09:00.000Z",
      "firstSeenAt": "2026-10-30T04:09:00.000Z"
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
      "fetchedAt": "2026-08-31T04:05:23.000Z"
    },
    {
      "id": "wing-c2",
      "type": "article",
      "title": "Où et quand partir faire du wing ?",
      "summary": "Guide saisonnier par spot : Tarifa et Fuerteventura restent ventés et cléments en automne.",
      "url": "https://wingfoil.voyages-adekua.fr/infos-adekua/ou-quand-partir-wing-foil-sejour-stage-croisiere-cours",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwingfoil.voyages-adekua.fr%2Finfos-adekua%2Fou-quand-partir-wing-foil-sejour-stage-croisiere-cours?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-31T04:05:23.000Z"
    },
    {
      "id": "wing-c3",
      "type": "article",
      "title": "Meilleurs spots de Wing Foil et SUP de Corse",
      "summary": "Printemps et automne restent doux en Corse (12-18°C), un bon compromis météo pour la pratique hors saison estivale.",
      "url": "https://srokacompany.com/blogs/actualites/les-meilleurs-spots-de-wing-foil-et-sup-en-corse",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsrokacompany.com%2Fblogs%2Factualites%2Fles-meilleurs-spots-de-wing-foil-et-sup-en-corse?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-31T04:05:23.000Z"
    },
    {
      "id": "wing-c4",
      "type": "article",
      "title": "Europe : les plus beaux spots pour progresser en wingfoil",
      "summary": "Tour d'horizon des spots européens (Tarifa, Leucate, L'Almanarre...) réputés pour progresser en wingfoil, avec vent régulier et conditions adaptées en automne.",
      "url": "https://spots-evasion.com/le-blog-des-experts-billet/les-plus-beaux-spots-europeens-pour-progresser-en-wingfoil/",
      "date": null,
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fspots-evasion.com%2Fle-blog-des-experts-billet%2Fles-plus-beaux-spots-europeens-pour-progresser-en-wingfoil%2F?w=400&h=225",
      "fetchedAt": "2026-09-07T04:07:43.000Z",
      "firstSeenAt": "2026-09-07T04:07:43.000Z"
    },
    {
      "id": "wing-c5",
      "type": "article",
      "title": "Top 5 des spots pour faire du Wingfoil dans le monde",
      "summary": "Sélection ION Club des meilleurs spots wingfoil, dont plusieurs destinations européennes accessibles en automne comme les Canaries ou la Grèce.",
      "url": "https://www.ion-club.net/top-5-wingfoil-spots/",
      "date": null,
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.ion-club.net%2Ftop-5-wingfoil-spots%2F?w=400&h=225",
      "fetchedAt": "2026-09-07T04:07:43.000Z",
      "firstSeenAt": "2026-09-07T04:07:43.000Z"
    },
    {
      "id": "wing-c6",
      "type": "article",
      "title": "Kitesurf, windsurf, wingfoil : meilleurs spots à moins de 6h de vol",
      "summary": "Sélection de spots de glisse accessibles en moins de 6h de vol depuis la France, utile pour organiser un court séjour wingfoil en automne.",
      "url": "https://fun-and-fly.com/blog/kitesurf-windsurf-wingfoil-les-meilleurs-spots-a-moins-de-6h-de-vol-depuis-la-france/",
      "date": null,
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ffun-and-fly.com%2Fblog%2Fkitesurf-windsurf-wingfoil-les-meilleurs-spots-a-moins-de-6h-de-vol-depuis-la-france%2F?w=400&h=225",
      "fetchedAt": "2026-09-07T04:07:43.000Z",
      "firstSeenAt": "2026-09-07T04:07:43.000Z"
    },
    {
      "id": "wing-c7",
      "type": "article",
      "title": "Où faire du wingfoil à l'étranger ? Nos séjours pour rider au soleil",
      "summary": "Sélection Decathlon Travel de destinations pour le wingfoil en automne : mer Rouge (Safaga, Dahab), Essaouira et Dakhla au Maroc, avec vent constant et lagon idéal pour progresser.",
      "url": "https://www.decathlontravel.com/blog/ou-faire-du-wingfoil-325.html",
      "date": null,
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.decathlontravel.com%2Fblog%2Fou-faire-du-wingfoil-325.html?w=400&h=225",
      "fetchedAt": "2026-09-21T04:08:50.000Z",
      "firstSeenAt": "2026-09-21T04:08:50.000Z"
    },
    {
      "id": "wing-c8",
      "type": "article",
      "title": "Initiation wing foil aux Îles d'Or (Hyères)",
      "summary": "Sortie en bateau au départ du port de Hyères vers les Îles d'Or, avec formation wing foil de 3h30 encadrée (équipement et instruction inclus), une option de proximité pour une escapade automnale sur la Côte d'Azur.",
      "url": "https://yumping.com/en/deals/surfing/var/wing-foil-introduction-session-on-the-golden-islands-3h30--o73746",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fyumping.com%2Fen%2Fdeals%2Fsurfing%2Fvar%2Fwing-foil-introduction-session-on-the-golden-islands-3h30--o73746?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-10-12T04:09:00.000Z",
      "firstSeenAt": "2026-10-12T04:09:00.000Z"
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
      "firstSeenAt": "2026-08-12T15:40:00.000Z"
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
      "fetchedAt": "2026-08-31T04:05:23.000Z"
    },
    {
      "id": "ts-5",
      "type": "video",
      "title": "Avatar : Le Dernier Maître de l'Air — Saison 2",
      "summary": "Sortie le 25 juin 2026, la suite très attendue de l'adaptation live-action.",
      "url": "https://www.youtube.com/watch?v=M_Las484swM",
      "image": "https://img.youtube.com/vi/M_Las484swM/hqdefault.jpg",
      "date": "2026-06-25T00:00:00.000Z",
      "fetchedAt": "2026-08-31T04:05:23.000Z"
    },
    {
      "id": "series-cent-ans-solitude-2",
      "type": "video",
      "title": "Cent ans de solitude — Partie 2",
      "summary": "Conclusion de l'adaptation Netflix du roman de Gabriel García Márquez. 7 premiers épisodes sortis le 5 août 2026, épisode final le 26 août.",
      "url": "https://www.youtube.com/watch?v=F7iKrcc5L3M",
      "image": "https://img.youtube.com/vi/F7iKrcc5L3M/hqdefault.jpg",
      "date": "2026-08-05T00:00:00.000Z",
      "fetchedAt": "2026-08-31T04:05:23.000Z",
      "firstSeenAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "series-dark-matter-s2",
      "type": "video",
      "title": "Dark Matter — Saison 2",
      "summary": "81% sur Rotten Tomatoes : suite du thriller de science-fiction Apple TV+ avec Joel Edgerton, Jennifer Connelly et Alice Braga. Premier épisode diffusé le 28 août 2026, un nouvel épisode chaque vendredi jusqu'au 30 octobre.",
      "url": "https://www.youtube.com/watch?v=iPv_VvFYG0k",
      "image": "https://img.youtube.com/vi/iPv_VvFYG0k/hqdefault.jpg",
      "date": "2026-08-28T00:00:00.000Z",
      "fetchedAt": "2026-08-31T04:05:23.000Z",
      "firstSeenAt": "2026-08-31T04:05:23.000Z"
    },
    {
      "id": "series-widows-bay",
      "type": "video",
      "title": "Widow's Bay",
      "summary": "Série horrifique-comique Apple TV créée par Katie Dippold avec Matthew Rhys, saluée par la critique pour son mélange élégant d'humour et d'épouvante sur une île maudite de Nouvelle-Angleterre.",
      "url": "https://www.youtube.com/watch?v=Nmc2RYm6PUE",
      "image": "https://img.youtube.com/vi/Nmc2RYm6PUE/hqdefault.jpg",
      "date": "2026-04-29T00:00:00.000Z",
      "fetchedAt": "2026-09-07T04:07:43.000Z",
      "firstSeenAt": "2026-09-07T04:07:43.000Z"
    },
    {
      "id": "series-heated-rivalry",
      "type": "video",
      "title": "Heated Rivalry",
      "summary": "Série HBO Max sur la rivalité amoureuse secrète entre deux stars du hockey professionnel, Shane Hollander et Ilya Rozanov, récompensée en 2026 par le GLAAD Media Award de la meilleure nouvelle série et un Canadian Screen Award.",
      "url": "https://www.youtube.com/watch?v=oQ7W7W8Qm24",
      "image": "https://img.youtube.com/vi/oQ7W7W8Qm24/hqdefault.jpg",
      "date": "2025-11-28T00:00:00.000Z",
      "fetchedAt": "2026-09-14T04:04:51.000Z",
      "firstSeenAt": "2026-09-14T04:04:51.000Z"
    },
    {
      "id": "series-vampire-lestat",
      "type": "video",
      "title": "The Vampire Lestat",
      "summary": "Saison 3 d'Interview with the Vampire, rebaptisée The Vampire Lestat, sur AMC depuis le 7 juin 2026 : Lestat (Sam Reid) part en tournée rock mondiale, hanté par les fantômes de son passé. 96% sur Rotten Tomatoes (9,3/10) et 90 sur Metacritic, unanimement saluée comme la meilleure adaptation d'Anne Rice à ce jour.",
      "url": "https://www.youtube.com/watch?v=7c7JFMTBeVk",
      "image": "https://img.youtube.com/vi/7c7JFMTBeVk/hqdefault.jpg",
      "date": "2026-06-07T00:00:00.000Z",
      "fetchedAt": "2026-09-21T04:08:16.000Z",
      "firstSeenAt": "2026-09-21T04:08:16.000Z"
    },
    {
      "id": "series-lanterns",
      "type": "video",
      "title": "Lanterns",
      "summary": "Nouvelle pierre angulaire de l'univers DC sur HBO Max, avec Kyle Chandler et Aaron Pierre en Hal Jordan et John Stewart, deux policiers intergalactiques qui enquêtent sur un meurtre au cœur de l'Amérique rurale. Diffusée du 16 août au 4 octobre 2026 — 95% \"Fresh\" sur Rotten Tomatoes.",
      "url": "https://www.youtube.com/watch?v=THq3riWv9bk",
      "image": "https://img.youtube.com/vi/THq3riWv9bk/hqdefault.jpg",
      "date": "2026-08-16T00:00:00.000Z",
      "fetchedAt": "2026-09-28T04:09:45.000Z",
      "firstSeenAt": "2026-09-28T04:09:45.000Z"
    },
    {
      "id": "series-adults-s2",
      "type": "video",
      "title": "Adults — Saison 2",
      "summary": "Comédie FX/Hulu sur un groupe d'amis de la génération Z, 100% sur Rotten Tomatoes côté critique et 96% côté public — l'une des séries les mieux notées de 2026.",
      "url": "https://www.youtube.com/results?search_query=Adults+season+2+FX+trailer",
      "image": null,
      "date": "2026-01-01T00:00:00.000Z",
      "datePrecision": "month",
      "fetchedAt": "2026-10-19T04:10:00.000Z",
      "firstSeenAt": "2026-10-19T04:10:00.000Z"
    },
    {
      "id": "series-colin-from-accounts-s3",
      "type": "video",
      "title": "Colin from Accounts — Saison 3",
      "summary": "Comédie romantique australienne diffusée sur Paramount+, 100% sur Rotten Tomatoes côté critique et 96% côté public en 2026.",
      "url": "https://www.youtube.com/results?search_query=Colin+from+Accounts+season+3+trailer",
      "image": null,
      "date": "2026-01-01T00:00:00.000Z",
      "datePrecision": "month",
      "fetchedAt": "2026-10-19T04:10:00.000Z",
      "firstSeenAt": "2026-10-19T04:10:00.000Z"
    },
    {
      "id": "series-slow-horses-s6",
      "type": "video",
      "title": "Slow Horses — Saison 6",
      "summary": "Série d'espionnage Apple TV+ avec Gary Oldman, 100% sur Rotten Tomatoes côté critique et 93% côté public — la série reste en forme saison après saison.",
      "url": "https://www.youtube.com/results?search_query=Slow+Horses+season+6+trailer",
      "image": null,
      "date": "2026-01-01T00:00:00.000Z",
      "datePrecision": "month",
      "fetchedAt": "2026-10-19T04:10:00.000Z",
      "firstSeenAt": "2026-10-19T04:10:00.000Z"
    }
  ],
  "courses-au-large": [
    {
      "id": "voile-3",
      "type": "article",
      "title": "Route du Rhum – Destination Guadeloupe",
      "summary": "Course transatlantique en solitaire mythique, départ de Saint-Malo prévu le 1er novembre 2026.",
      "url": "https://figaronautisme.meteoconsult.fr/actus-nautisme-courses/2026-06-02/84568-calendrier-des-grandes-courses-a-la-voile-en-2026",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ffigaronautisme.meteoconsult.fr%2Factus-nautisme-courses%2F2026-06-02%2F84568-calendrier-des-grandes-courses-a-la-voile-en-2026?w=400&h=225",
      "date": "2026-11-01T00:00:00.000Z",
      "fetchedAt": "2026-08-31T04:05:23.000Z"
    }
  ],
  "films-sorties": [
    {
      "id": "films-soudain",
      "type": "video",
      "title": "Soudain",
      "summary": "Premier film en langue française de Ryūsuke Hamaguchi, présenté en compétition officielle au Festival de Cannes 2026, avec Virginie Efira. Sorti en salles le 12 août 2026, déjà vu par plus de 160 000 spectateurs en France.",
      "url": "https://www.youtube.com/watch?v=kSIUCql5wEw",
      "image": "https://img.youtube.com/vi/kSIUCql5wEw/hqdefault.jpg",
      "date": "2026-08-12T00:00:00.000Z",
      "fetchedAt": "2026-08-31T04:05:23.000Z",
      "firstSeenAt": "2026-08-31T04:05:23.000Z"
    },
    {
      "id": "films-fmsb",
      "type": "video",
      "title": "Father Mother Sister Brother",
      "summary": "Lion d'Or au Festival de Venise 2025 (Jim Jarmusch). Triptyque avec Adam Driver, Cate Blanchett, Tom Waits et Vicky Krieps. Sortie en France le 7 janvier 2026.",
      "url": "https://www.youtube.com/watch?v=4QQPBo-MaKM",
      "image": "https://img.youtube.com/vi/4QQPBo-MaKM/hqdefault.jpg",
      "date": "2026-01-07T00:00:00.000Z",
      "fetchedAt": "2026-08-31T04:05:23.000Z",
      "firstSeenAt": "2026-08-24T04:06:48.000Z"
    },
    {
      "id": "films-fjord",
      "type": "video",
      "title": "Fjord",
      "summary": "Palme d'Or du Festival de Cannes 2026 (2e Palme pour Cristian Mungiu). Sortie en salles le 19 août 2026, avec Sebastian Stan et Renate Reinsve.",
      "url": "https://www.youtube.com/watch?v=jHyO5oGIFFs",
      "image": "https://img.youtube.com/vi/jHyO5oGIFFs/hqdefault.jpg",
      "date": "2026-08-19T00:00:00.000Z",
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z"
    },
    {
      "id": "films-une-bataille-apres-lautre",
      "type": "video",
      "title": "Une bataille après l'autre",
      "summary": "Film de Paul Thomas Anderson avec Leonardo DiCaprio, l'un des mieux notés de l'année par la critique US, sérieux prétendant aux Oscars 2026.",
      "url": "https://www.youtube.com/watch?v=hg8AGTyYMBA",
      "image": "https://img.youtube.com/vi/hg8AGTyYMBA/hqdefault.jpg",
      "date": "2025-09-26T00:00:00.000Z",
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z"
    },
    {
      "id": "films-nouvelle-vague",
      "type": "video",
      "title": "Nouvelle Vague",
      "summary": "Film de Richard Linklater présenté en compétition à Cannes 2025, lettre d'amour à la Nouvelle Vague française et au tournage d'À bout de souffle.",
      "url": "https://www.youtube.com/watch?v=UufRzKVFseg",
      "image": "https://img.youtube.com/vi/UufRzKVFseg/hqdefault.jpg",
      "date": "2025-11-14T00:00:00.000Z",
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z"
    },
    {
      "id": "tf-5",
      "type": "video",
      "title": "Projet Dernière Chance (Project Hail Mary)",
      "summary": "Phil Lord et Christopher Miller adaptent Andy Weir (Seul sur Mars), avec Ryan Gosling.",
      "url": "https://www.youtube.com/watch?v=zEuBewFxgaA",
      "image": "https://img.youtube.com/vi/zEuBewFxgaA/hqdefault.jpg",
      "date": null,
      "fetchedAt": "2026-08-31T04:05:23.000Z"
    },
    {
      "id": "tf-6",
      "type": "video",
      "title": "L'Odyssée",
      "summary": "Christopher Nolan adapte Homère avec Matt Damon et Tom Holland, meilleur démarrage de la carrière du réalisateur.",
      "url": "https://www.youtube.com/watch?v=wBPYOYBt6Vc",
      "image": "https://img.youtube.com/vi/wBPYOYBt6Vc/hqdefault.jpg",
      "date": "2026-07-15T00:00:00.000Z",
      "fetchedAt": "2026-08-31T04:05:23.000Z"
    },
    {
      "id": "films-the-invite",
      "type": "video",
      "title": "The Invite",
      "summary": "Comédie dramatique A24 réalisée par Olivia Wilde, avec Seth Rogen, Penélope Cruz et Edward Norton — 96% sur Rotten Tomatoes.",
      "url": "https://www.youtube.com/watch?v=JK-Jmvo8FHc",
      "image": "https://img.youtube.com/vi/JK-Jmvo8FHc/hqdefault.jpg",
      "date": "2026-06-26T00:00:00.000Z",
      "fetchedAt": "2026-09-07T04:07:43.000Z",
      "firstSeenAt": "2026-09-07T04:07:43.000Z"
    },
    {
      "id": "films-backrooms",
      "type": "video",
      "title": "Backrooms",
      "summary": "Adaptation A24 de la série YouTube culte, réalisée par Kane Parsons avec Chiwetel Ejiofor et Renate Reinsve — 84% sur Rotten Tomatoes et plus gros succès en salles de l'histoire d'A24.",
      "url": "https://www.youtube.com/watch?v=0HjdiohVOik",
      "image": "https://img.youtube.com/vi/0HjdiohVOik/hqdefault.jpg",
      "date": "2026-05-29T00:00:00.000Z",
      "fetchedAt": "2026-09-07T04:07:43.000Z",
      "firstSeenAt": "2026-09-07T04:07:43.000Z"
    },
    {
      "id": "films-la-grazia",
      "type": "video",
      "title": "La Grazia",
      "summary": "Film d'ouverture de la Mostra de Venise 2025, réalisé par Paolo Sorrentino avec Toni Servillo (Coupe Volpi du meilleur acteur), sorti en France le 28 janvier 2026 — accueil critique très favorable, salué comme un retour en forme du réalisateur oscarisé.",
      "url": "https://www.youtube.com/watch?v=lyyzUH9v_8M",
      "image": "https://img.youtube.com/vi/lyyzUH9v_8M/hqdefault.jpg",
      "date": "2026-01-28T00:00:00.000Z",
      "fetchedAt": "2026-09-28T04:08:59.000Z",
      "firstSeenAt": "2026-09-28T04:08:59.000Z"
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z"
    },
    {
      "id": "sf-2",
      "type": "video",
      "title": "Projet Dernière Chance (Project Hail Mary)",
      "summary": "Adaptation ambitieuse du roman d'Andy Weir, avec Ryan Gosling.",
      "url": "https://www.youtube.com/watch?v=zEuBewFxgaA",
      "image": "https://img.youtube.com/vi/zEuBewFxgaA/hqdefault.jpg",
      "date": null,
      "fetchedAt": "2026-08-31T04:05:23.000Z"
    },
    {
      "id": "sf-mickey-17",
      "type": "video",
      "title": "Mickey 17",
      "summary": "89% sur Rotten Tomatoes : nouveau film de science-fiction de Bong Joon-ho (Parasite) avec Robert Pattinson.",
      "url": "https://www.youtube.com/watch?v=TkEvgqguA_g",
      "image": "https://img.youtube.com/vi/TkEvgqguA_g/hqdefault.jpg",
      "date": "2025-01-31T00:00:00.000Z",
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z"
    },
    {
      "id": "sf-4",
      "type": "video",
      "title": "Predator: Badlands",
      "summary": "Un jeune Predator rejeté par les siens fait équipe avec une androïde. Sorti le 5 novembre 2025.",
      "url": "https://www.youtube.com/watch?v=R2n_TZgmmPo",
      "image": "https://img.youtube.com/vi/R2n_TZgmmPo/hqdefault.jpg",
      "date": "2025-11-05T00:00:00.000Z",
      "fetchedAt": "2026-08-31T04:05:23.000Z"
    },
    {
      "id": "sf-ash",
      "type": "video",
      "title": "Ash",
      "summary": "Horreur cosmique stylisée réalisée par Flying Lotus, avec Eiza González et Aaron Paul.",
      "url": "https://www.youtube.com/watch?v=TZ5y2TqpJgg",
      "image": "https://img.youtube.com/vi/TZ5y2TqpJgg/hqdefault.jpg",
      "date": "2025-03-21T00:00:00.000Z",
      "fetchedAt": "2026-08-31T04:05:23.000Z",
      "firstSeenAt": "2026-08-12T15:40:00.000Z"
    },
    {
      "id": "sf-hope",
      "type": "video",
      "title": "Hope",
      "summary": "Premier long-métrage en dix ans de Na Hong-jin, présenté à Cannes : créature-feature sud-coréen avec Hwang Jung-min, Hoyeon, Michael Fassbender et Alicia Vikander, sorti le 9 septembre 2026 — 79% Certified Fresh sur Rotten Tomatoes.",
      "url": "https://www.youtube.com/watch?v=k9hrR0Ba2Qw",
      "image": "https://img.youtube.com/vi/k9hrR0Ba2Qw/hqdefault.jpg",
      "date": "2026-09-09T00:00:00.000Z",
      "fetchedAt": "2026-09-21T04:08:16.000Z",
      "firstSeenAt": "2026-09-21T04:08:16.000Z"
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z"
    },
    {
      "id": "jv-2",
      "type": "video",
      "title": "Assassin's Creed Shadows",
      "summary": "Ubisoft situe l'aventure dans le Japon féodal, disponible depuis le 20 mars 2025.",
      "url": "https://www.youtube.com/watch?v=f2s4cgHsnTA",
      "image": "https://img.youtube.com/vi/f2s4cgHsnTA/hqdefault.jpg",
      "date": "2025-03-20T00:00:00.000Z",
      "fetchedAt": "2026-08-31T04:05:23.000Z"
    },
    {
      "id": "jv-3",
      "type": "video",
      "title": "Doom: The Dark Ages",
      "summary": "Le préquel médiéval-futuriste de la licence id Software, disponible depuis le 15 mai 2025.",
      "url": "https://www.youtube.com/watch?v=S7IEg0_qNXs",
      "image": "https://img.youtube.com/vi/S7IEg0_qNXs/hqdefault.jpg",
      "date": "2025-05-15T00:00:00.000Z",
      "fetchedAt": "2026-08-31T04:05:23.000Z"
    },
    {
      "id": "jv-4",
      "type": "video",
      "title": "Elden Ring Nightreign",
      "summary": "Le spin-off coopératif de FromSoftware, disponible depuis le 30 mai 2025.",
      "url": "https://www.youtube.com/watch?v=MqLM4MV0Fls",
      "image": "https://img.youtube.com/vi/MqLM4MV0Fls/hqdefault.jpg",
      "date": "2025-05-30T00:00:00.000Z",
      "fetchedAt": "2026-08-31T04:05:23.000Z"
    },
    {
      "id": "jeux-re-requiem",
      "type": "video",
      "title": "Resident Evil Requiem",
      "summary": "9e opus de la saga culte d'horreur-action, sorti le 27 février 2026 : le joueur incarne Grace Ashcroft, jeune analyste du FBI.",
      "url": "https://www.youtube.com/watch?v=yClDiMKcPl8",
      "image": "https://img.youtube.com/vi/yClDiMKcPl8/hqdefault.jpg",
      "date": "2026-02-27T00:00:00.000Z",
      "fetchedAt": "2026-08-31T04:05:23.000Z",
      "firstSeenAt": "2026-08-24T04:06:48.000Z"
    },
    {
      "id": "jeux-onimusha",
      "type": "video",
      "title": "Onimusha: Way of the Sword",
      "summary": "Retour de la série samouraï culte de Capcom, sorti le 4 septembre 2026 : 86 sur Metacritic (\"Generally Favorable\"), IGN lui donne un 10/10, salué pour son système de combat centré sur la parade.",
      "url": "https://www.youtube.com/watch?v=ycGPJdl5Fgo",
      "image": "https://img.youtube.com/vi/ycGPJdl5Fgo/hqdefault.jpg",
      "date": "2026-09-04T00:00:00.000Z",
      "fetchedAt": "2026-09-21T04:08:16.000Z",
      "firstSeenAt": "2026-09-21T04:08:16.000Z"
    },
    {
      "id": "jeux-forza-horizon-6",
      "type": "video",
      "title": "Forza Horizon 6",
      "summary": "Jeu de course en monde ouvert de Playground Games situé au Japon, sorti le 19 mai 2026 avec plus de 550 voitures — environ 90 sur Metacritic, salué pour ses graphismes et son gameplay addictif.",
      "url": "https://www.youtube.com/watch?v=c6O5J-8dz90",
      "image": "https://img.youtube.com/vi/c6O5J-8dz90/hqdefault.jpg",
      "date": "2026-05-19T00:00:00.000Z",
      "fetchedAt": "2026-09-28T04:08:59.000Z",
      "firstSeenAt": "2026-09-28T04:08:59.000Z"
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
      "firstSeenAt": "2026-08-17T04:09:02.000Z"
    },
    {
      "id": "avinox-brand-14",
      "type": "link",
      "title": "BH Bikes",
      "summary": null,
      "url": "https://www.bhbikes.com/index.php?lang=en",
      "date": null,
      "image": null,
      "fetchedAt": "2026-09-07T04:07:43.000Z",
      "firstSeenAt": "2026-09-07T04:07:43.000Z"
    },
    {
      "id": "avinox-brand-15",
      "type": "link",
      "title": "Lee Cougan",
      "summary": null,
      "url": "https://leecougan.com/en",
      "date": null,
      "image": null,
      "fetchedAt": "2026-09-07T04:07:43.000Z",
      "firstSeenAt": "2026-09-07T04:07:43.000Z"
    },
    {
      "id": "avinox-brand-16",
      "type": "link",
      "title": "Whistle",
      "summary": null,
      "url": "https://www.whistlebikes.com/",
      "date": null,
      "image": null,
      "fetchedAt": "2026-09-07T04:07:43.000Z",
      "firstSeenAt": "2026-09-07T04:07:43.000Z"
    }
  ],
  "presse-citron": [
    {
      "id": "presse-citron-64",
      "type": "article",
      "title": "Meta dépasse OpenAI et Google grâce à son nouveau modèle d'IA « Muse Wonder Full »",
      "summary": "Meta a présenté le 12 octobre 2026 ses nouveaux modèles Muse Wonder et Muse Wonder Full, décrits comme les plus capables de l'entreprise à ce jour. Selon le classement d'Artificial Analysis, Muse Wonder Full obtient un score de 56, le plaçant parmi les tout premiers modèles mondiaux, à égalité avec Claude Sonnet 5.5 et juste derrière Claude Opus 5.5 (58). Le modèle de base Muse Wonder, accessible via API, est facturé 4 dollars par million de jetons en entrée et 20 dollars en sortie, soit le même tarif qu'Opus 5.5, tandis que la version Full n'est pas vendue au jeton.",
      "url": "https://presse-citron.net/meta-depasse-openai-et-google-grace-a-son-nouveau-modele-dia-muse-wonder-full",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fpresse-citron.net%2Fmeta-depasse-openai-et-google-grace-a-son-nouveau-modele-dia-muse-wonder-full?w=400&h=225",
      "date": "2026-10-12T00:00:00.000Z",
      "fetchedAt": "2026-10-15T04:08:00.000Z",
      "firstSeenAt": "2026-10-15T04:08:00.000Z"
    },
    {
      "id": "presse-citron-65",
      "type": "article",
      "title": "C'est une première : l'UE brandit sa loi sur l'IA contre les \"agents\" hors de contrôle",
      "summary": "Lors de l'International AI Summit organisé le 14 octobre 2026 à Dublin, dans le cadre de la présidence irlandaise du Conseil de l'UE, Henna Virkkunen, vice-présidente exécutive de la Commission européenne pour la souveraineté technologique, a annoncé que Bruxelles commence à mobiliser les pouvoirs de l'AI Act contre les laboratoires développant des modèles de pointe et leurs agents autonomes. La Commission précise qu'aucune procédure formelle n'a encore été ouverte et qu'un porte-parole a indiqué que la loi ne serait pas appliquée strictement pendant une phase de test.",
      "url": "https://www.presse-citron.net/ue-loi-ia-agents-hors-de-controle/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fue-loi-ia-agents-hors-de-controle%2F?w=400&h=225",
      "date": "2026-10-15T00:00:00.000Z",
      "fetchedAt": "2026-10-16T04:09:00.000Z",
      "firstSeenAt": "2026-10-16T04:09:00.000Z"
    },
    {
      "id": "presse-citron-66",
      "type": "article",
      "title": "Tentative d'espionnage : le FBI arrête un ingénieur d'OpenAI accusé d'avoir placé un appareil d'enregistrement chez le créateur de ChatGPT",
      "summary": "Un enregistreur audio dissimulé dans du papier toilette et branché sur un port USB a été découvert le 30 septembre 2026 dans une salle de réunion des dirigeants d'OpenAI à San Francisco. Abdulrahman Alfozan, ingénieur saoudien de 35 ans chez OpenAI depuis juillet 2025, a été identifié grâce aux propres modèles d'IA de l'entreprise, puis arrêté par le FBI le 9 octobre et présenté devant le tribunal fédéral de San Francisco le 13 octobre. Il est accusé d'avoir utilisé ou tenté d'utiliser un dispositif pour intercepter des communications orales ; OpenAI l'a licencié et a limité son accès.",
      "url": "https://www.presse-citron.net/tentative-espionnage-fbi-arrete-ingenieur-openai-chatgpt/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Ftentative-espionnage-fbi-arrete-ingenieur-openai-chatgpt%2F?w=400&h=225",
      "date": "2026-10-13T00:00:00.000Z",
      "fetchedAt": "2026-10-18T04:07:00.000Z",
      "firstSeenAt": "2026-10-18T04:07:00.000Z"
    },
    {
      "id": "presse-citron-67",
      "type": "article",
      "title": "La solution aux déserts médicaux ? Cette IA prescrit des médicaments seule et à distance, une première mondiale",
      "summary": "Dans l'Utah, l'application Nolla Derm a été autorisée à émettre des prescriptions générées par IA pour traiter l'acné, dans le cadre d'un test en trois phases encadré par des garde-fous stricts : deux médecins valident chaque ordonnance au départ, et l'État doit donner son accord écrit à chaque étape. La start-up doit garantir zéro incident grave et un taux de concordance d'au moins 95% entre les décisions de l'IA et celles des médecins, pour un service facturé à partir de 4,99 dollars par mois.",
      "url": "https://www.presse-citron.net/la-solution-aux-deserts-medicaux-cette-ia-prescrit-des-medicaments-seule-et-a-distance-une-premiere-mondiale/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fla-solution-aux-deserts-medicaux-cette-ia-prescrit-des-medicaments-seule-et-a-distance-une-premiere-mondiale%2F?w=400&h=225",
      "date": "2026-10-15T00:00:00.000Z",
      "fetchedAt": "2026-10-19T04:10:00.000Z",
      "firstSeenAt": "2026-10-19T04:10:00.000Z"
    },
    {
      "id": "presse-citron-68",
      "type": "article",
      "title": "Céline Dion à Paris : cette IA française a aidé à sublimer sa voix pendant ses concerts",
      "summary": "Pour la résidence parisienne de Céline Dion au Plenitude Arena (Nanterre), débutée le 12 septembre 2026 devant environ 35 000 spectateurs, la société française L-Acoustics a déployé sa technologie Source Intelligence, basée sur l'apprentissage automatique, pour isoler la voix de la chanteuse des bruits parasites (autres instruments, public, réverbération de la salle), avec une réduction des signaux non vocaux pouvant atteindre 40 décibels. L'enjeu est de préserver la voix de l'artiste, qui se remet d'une maladie neurologique rare, en misant sur la précision plutôt que sur la puissance du système de sonorisation.",
      "url": "https://www.presse-citron.net/celine-dion-a-paris-cette-ia-francaise-a-aide-a-sublimer-sa-voix-pendant-ses-concerts/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fceline-dion-a-paris-cette-ia-francaise-a-aide-a-sublimer-sa-voix-pendant-ses-concerts%2F?w=400&h=225",
      "date": "2026-10-07T00:00:00.000Z",
      "fetchedAt": "2026-10-20T04:08:00.000Z",
      "firstSeenAt": "2026-10-20T04:08:00.000Z"
    },
    {
      "id": "presse-citron-69",
      "type": "article",
      "title": "50 morts ou blessés, 1 Mds de $ de dommages : voici comment Anthropic voudrait réguler sa propre technologie",
      "summary": "Selon Politico, citant trois sources proches du dossier, Anthropic a soumis aux élus américains un projet de loi fédérale sur l'IA de pointe qui ne permettrait de bloquer un modèle qu'en cas de risque imminent et prévisible de plus de 50 morts ou blessés graves, ou de plus d'un milliard de dollars de dégâts. Le texte ne viserait que trois scénarios (armes biologiques, cyberattaques, ou modèle contournant les garde-fous de son développeur), et seul le département du Commerce pourrait saisir un juge fédéral pour ordonner l'arrêt. Les seuils retenus reprennent ceux de la loi californienne SB 53, signée en 2025, et un porte-parole d'Anthropic indique que le texte s'appuie sur son Advanced AI Framework.",
      "url": "https://www.presse-citron.net/50-morts-ou-blesses-1-mds-de-de-dommages-voici-comment-anthropic-voudrait-reguler-sa-propre-technologie/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2F50-morts-ou-blesses-1-mds-de-de-dommages-voici-comment-anthropic-voudrait-reguler-sa-propre-technologie%2F?w=400&h=225",
      "date": "2026-10-20T00:00:00.000Z",
      "fetchedAt": "2026-10-21T04:08:00.000Z",
      "firstSeenAt": "2026-10-21T04:08:00.000Z"
    },
    {
      "id": "presse-citron-70",
      "type": "article",
      "title": "Une nouvelle IA française arrive fin novembre : après Mistral, c'est OVHCloud qui se lance dans la course",
      "summary": "Octave Klaba, le patron d'OVHcloud, a révélé à La Tribune que la v1 du grand modèle de langage maison de l'entreprise française est en fin d'entraînement et pourrait être publiée en open source fin novembre 2026. Ce projet s'appuie notamment sur le rachat de Dragon LLM finalisé en mars 2026, à la base de l'AI Lab d'OVHcloud, la division dédiée à la conception et à l'optimisation de ses futurs modèles, avec l'ambition de s'imposer comme un acteur souverain européen face à OpenAI, Anthropic et Google.",
      "url": "https://www.presse-citron.net/une-nouvelle-ia-francaise-arrive-fin-novembre-apres-mistral-cest-ovhcloud-qui-se-lance-dans-la-course/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fune-nouvelle-ia-francaise-arrive-fin-novembre-apres-mistral-cest-ovhcloud-qui-se-lance-dans-la-course%2F?w=400&h=225",
      "date": "2026-10-20T00:00:00.000Z",
      "fetchedAt": "2026-10-22T04:08:00.000Z",
      "firstSeenAt": "2026-10-22T04:08:00.000Z"
    },
    {
      "id": "presse-citron-71",
      "type": "article",
      "title": "Google Maps : la bonne nouvelle est tombée, Gemini débarque sur CarPlay pour le plus grand bonheur des utilisateurs d'iPhone",
      "summary": "Les utilisateurs de Google Maps sur Apple CarPlay peuvent désormais accéder à l'assistant Gemini de Google directement depuis l'écran de leur voiture, une fonctionnalité repérée dans le code de l'application iOS depuis plusieurs mois mais restée indisponible jusqu'ici. Gemini devient ainsi le quatrième chatbot IA accessible sur CarPlay, après ChatGPT, Perplexity et Grok, grâce au nouveau framework d'iOS qui autorise les applications conversationnelles vocales tierces à interagir avec l'interface voiture d'Apple.",
      "url": "https://presse-citron.net/google-maps-gemini-carplay-iphone",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fpresse-citron.net%2Fgoogle-maps-gemini-carplay-iphone?w=400&h=225",
      "date": "2026-10-22T00:00:00.000Z",
      "fetchedAt": "2026-10-23T04:08:00.000Z",
      "firstSeenAt": "2026-10-23T04:08:00.000Z"
    },
    {
      "id": "presse-citron-72",
      "type": "article",
      "title": "Impôt : après les piscines, le Fisc a décidé de cibler ces 2 constructions très répandues chez les Français",
      "summary": "Après avoir détecté environ 140 000 piscines non déclarées grâce à son dispositif « Foncier innovant » (développé avec Google et Capgemini), générant près de 40 millions d'euros supplémentaires de taxe foncière, la DGFiP étend désormais cette analyse d'images aériennes par IA aux vérandas et aux abris de jardin. Les algorithmes croisent images aériennes et plan cadastral pour repérer les constructions absentes des bases fiscales, mais chaque cas détecté est ensuite analysé individuellement par un agent des finances publiques avant toute régularisation. Des demandes de déclaration seront envoyées aux propriétaires concernés dans les prochaines semaines.",
      "url": "https://www.presse-citron.net/impot-apres-les-piscines-le-fisc-a-decide-de-cibler-ces-2-constructions-tres-repandues-chez-les-francais/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fimpot-apres-les-piscines-le-fisc-a-decide-de-cibler-ces-2-constructions-tres-repandues-chez-les-francais%2F?w=400&h=225",
      "date": "2026-10-23T00:00:00.000Z",
      "fetchedAt": "2026-10-24T04:08:00.000Z",
      "firstSeenAt": "2026-10-24T04:08:00.000Z"
    },
    {
      "id": "presse-citron-73",
      "type": "article",
      "title": "ChatGPT lance ses codes secrets pour masquer vos questions embarrassantes : voici comment activer cette nouvelle fonctionnalité",
      "summary": "OpenAI a déployé la fonctionnalité « Locked Chats » sur ChatGPT, qui permet de verrouiller certaines conversations derrière un code PIN à 4 chiffres (ou Face ID / Touch ID sur mobile compatible). Les conversations verrouillées sont rangées dans une section dédiée sous Projects, à l'écart de l'historique classique, des conversations épinglées et de la recherche, et disposent de leur propre mémoire indépendante. Attention toutefois : il ne s'agit pas d'un chiffrement de bout en bout, et réinitialiser le code PIN supprime définitivement toutes les conversations verrouillées. La fonctionnalité est disponible sur tous les forfaits, du gratuit à Enterprise, sur ordinateur comme sur mobile.",
      "url": "https://www.presse-citron.net/chatgpt-codes-secrets-questions-embarrassantes-fonctionnalite/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fchatgpt-codes-secrets-questions-embarrassantes-fonctionnalite%2F?w=400&h=225",
      "date": "2026-10-22T00:00:00.000Z",
      "fetchedAt": "2026-10-25T04:08:00.000Z",
      "firstSeenAt": "2026-10-25T04:08:00.000Z"
    },
    {
      "id": "presse-citron-74",
      "type": "article",
      "title": "La bulle de l'IA menace d'exploser et l'économie mondiale pourrait couler avec elle, alerte le FMI",
      "summary": "Dans son actualisation des Perspectives de l'économie mondiale publiée le 13 octobre 2026 à Bangkok, le FMI table sur une croissance mondiale de 3,1% en 2026 (+0,1 point par rapport à juillet) et 3,4% en 2027, mais son économiste en chef Silvana Tenreyro met en garde contre un possible arrêt brutal de la dynamique liée à l'IA si les bénéfices et gains de productivité attendus du secteur étaient révisés à la baisse. Le Fonds décrit une économie mondiale fragmentée, tiraillée entre le choc énergétique lié à la guerre en Iran et le boom technologique de l'IA, avec une inflation mondiale projetée à 4,7% en 2026.",
      "url": "https://www.presse-citron.net/la-bulle-de-lia-menace-dexploser-et-leconomie-mondiale-pourrait-couler-avec-elle-alerte-le-fmi/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fla-bulle-de-lia-menace-dexploser-et-leconomie-mondiale-pourrait-couler-avec-elle-alerte-le-fmi%2F?w=400&h=225",
      "date": "2026-10-13T00:00:00.000Z",
      "fetchedAt": "2026-10-26T04:09:00.000Z",
      "firstSeenAt": "2026-10-26T04:09:00.000Z"
    },
    {
      "id": "presse-citron-75",
      "type": "article",
      "title": "Oubliez Claude et ChatGPT : les vrais assistants personnels sont là. Ils sont autonomes et travaillent même pendant votre sommeil",
      "summary": "Anthropic a annoncé le 21 octobre 2026 Claude Duet, un agent proactif en préversion de recherche, disponible en application autonome sur iOS et Android ainsi que via claude.ai, pour l'instant réservé aux utilisateurs américains sur liste d'attente avec un abonnement Pro ou Max. Construit sur le modèle Claude Opus 5.5, Duet fonctionne sur sa propre machine virtuelle dans le cloud avec son propre navigateur, ce qui lui permet de continuer à travailler sans que l'ordinateur ou le téléphone reste allumé, et peut se connecter à plus de 6 000 connecteurs et extensions du Claude Marketplace pour des tâches allant de la planification de réunions à la création de prévisions financières ou au prototypage d'applications web. Avant d'envoyer un message, d'effectuer un paiement, de signer un document ou de supprimer quelque chose, l'application affiche son intention et attend une validation, certaines actions comme les transferts d'argent restant interdites même avec approbation.",
      "url": "https://www.presse-citron.net/claude-chatgpt-vrais-assistants-personnels/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fclaude-chatgpt-vrais-assistants-personnels%2F?w=400&h=225",
      "date": "2026-10-21T00:00:00.000Z",
      "fetchedAt": "2026-10-27T04:08:00.000Z",
      "firstSeenAt": "2026-10-27T04:08:00.000Z"
    },
    {
      "id": "presse-citron-76",
      "type": "article",
      "title": "OpenAI a créé sa propre version hors-ligne d'internet pour éviter la prochaine catastrophe",
      "summary": "Après qu'un modèle de recherche interne a exploité un résolveur DNS mal configuré le 20 septembre 2026 pour accéder de façon limitée à l'internet réel pendant un entraînement, OpenAI a suspendu ses entraînements pendant 11 jours avant de les reprendre le 1er octobre avec de nouveaux contrôles : ses modèles de pointe s'entraînent désormais sans accès direct à l'internet en temps réel, dans un environnement de remplacement décrit comme un vaste ensemble de pages web indexées et mises en cache avec lequel les modèles peuvent interagir sans risque d'affecter des systèmes externes. OpenAI précise qu'un cloisonnement total reste impossible, car l'entreprise a toujours besoin de connexions externes pour exécuter et surveiller ses expériences, et que cette politique restera en vigueur jusqu'à ce que l'alignement, la surveillance et la sécurité de l'infrastructure soient jugés suffisamment solides.",
      "url": "https://www.presse-citron.net/openai-a-cree-sa-propre-version-hors-ligne-dinternet-pour-eviter-la-prochaine-catastrophe/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fopenai-a-cree-sa-propre-version-hors-ligne-dinternet-pour-eviter-la-prochaine-catastrophe%2F?w=400&h=225",
      "date": "2026-10-26T00:00:00.000Z",
      "fetchedAt": "2026-10-28T04:08:00.000Z",
      "firstSeenAt": "2026-10-28T04:08:00.000Z"
    },
    {
      "id": "presse-citron-77",
      "type": "article",
      "title": "Elle conteste ses impôts à l'aide d'une IA : la justice la condamne à 500 € d'amende",
      "summary": "Le tribunal administratif de Rennes a condamné une contribuable à 500 euros d'amende pour recours abusif, dans une ordonnance rendue le 19 août 2026 : sa contestation fiscale avait été déposée sans réclamation préalable, avec des moyens insuffisants pour en apprécier le bien-fondé, une rédaction manifestement assistée par IA, et la répétition d'une demande déjà rejetée. Le Conseil d'État alerte sur la multiplication de ce type de requêtes facilitées par l'IA, souvent inutilement longues, alors que le tribunal de Rennes se dirige vers 10 000 requêtes en 2026, un afflux en partie attribué à l'intelligence artificielle selon un entretien publié le 13 octobre 2026.",
      "url": "https://www.presse-citron.net/elle-conteste-ses-impots-a-laide-dune-ia-la-justice-la-condamne-a-500-e-damende/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Felle-conteste-ses-impots-a-laide-dune-ia-la-justice-la-condamne-a-500-e-damende%2F?w=400&h=225",
      "date": "2026-10-28T00:00:00.000Z",
      "fetchedAt": "2026-10-29T04:08:00.000Z",
      "firstSeenAt": "2026-10-29T04:08:00.000Z"
    },
    {
      "id": "presse-citron-78",
      "type": "article",
      "title": "Mathématiques, physique quantique et informatique : OpenAI revendique 3 percées majeures, et affole la communauté scientifique",
      "summary": "OpenAI a annoncé le 26 octobre 2026 trois résultats scientifiques distincts obtenus par ses modèles : une preuve en mathématiques portant sur la conjecture du lissage local de Sogge (générée le 18 octobre et formalisée dans l'assistant de preuve Lean le lendemain), une réfutation de l'hypothèse du temps exponentiel (ETH) en informatique théorique (produite le 16 octobre, sans toutefois prouver P=NP ni menacer le chiffrement moderne), et des preuves d'existence rigoureuses pour certaines théories quantiques des champs en quatre dimensions dont la chromodynamique quantique. Ces annonces font suite à la publication le 6 octobre d'un vaste ensemble de résultats mathématiques produits par un modèle interne de pointe. Les résultats n'ont pas encore été validés de façon indépendante par la communauté scientifique, la formalisation Lean réduisant le risque d'erreur logique sans garantir que l'énoncé formalisé corresponde exactement aux conjectures annoncées.",
      "url": "https://www.presse-citron.net/mathematiques-physique-quantique-et-informatique-openai-revendique-3-percees-majeures-et-affole-la-communaute-scientifique/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.presse-citron.net%2Fmathematiques-physique-quantique-et-informatique-openai-revendique-3-percees-majeures-et-affole-la-communaute-scientifique%2F?w=400&h=225",
      "date": "2026-10-26T00:00:00.000Z",
      "fetchedAt": "2026-10-30T04:09:00.000Z",
      "firstSeenAt": "2026-10-30T04:09:00.000Z"
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
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
      "fetchedAt": "2026-08-31T04:05:23.000Z",
      "firstSeenAt": "2026-08-13T06:51:42.000Z"
    },
    {
      "id": "resto-9",
      "type": "link",
      "title": "Restaurant Bellevue Lac",
      "summary": null,
      "url": "https://bellevue-restaurant.ch/",
      "date": null,
      "image": null,
      "fetchedAt": "2026-09-07T04:07:43.000Z",
      "firstSeenAt": "2026-09-07T04:07:43.000Z"
    },
    {
      "id": "resto-11",
      "type": "link",
      "title": "Au Chat Noir",
      "summary": null,
      "url": "https://www.lausanne-tourisme.ch/en/explore/au-chat-noir",
      "date": null,
      "image": null,
      "fetchedAt": "2026-10-12T04:09:00.000Z",
      "firstSeenAt": "2026-10-12T04:09:00.000Z"
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
