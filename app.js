// ---- Fallback seed data (used when data/*.json can't be fetched, e.g. local preview) ----
const FALLBACK_COLUMNS = [
  {
    "id": "ebike-avinox",
    "title": "Vélos électriques Avinox",
    "prompt": "Affiche-moi les 5 dernières actualités que tu trouves sur internet sur le moteur avinox mg1",
    "resultCount": 5,
    "createdAt": "2026-08-11T08:00:00.000Z",
    "updatedAt": "2026-08-11T21:39:05.716Z",
    "lastRun": "2026-08-11T22:00:00.000Z"
  },
  {
    "id": "presse",
    "title": "presse",
    "prompt": "affiche moi les derniers articles d'actualité qui parle de la qualité du lac léman",
    "resultCount": 5,
    "createdAt": "2026-08-11T21:39:53.869Z",
    "updatedAt": "2026-08-11T21:39:53.869Z",
    "lastRun": "2026-08-11T22:00:00.000Z"
  },
  {
    "id": "youtube-ia-outils",
    "title": "Vidéos outils IA",
    "prompt": "Affiche-moi les liens vers les 3 dernières vidéos YouTube qui parlent des derniers outils IA sortis.",
    "resultCount": 3,
    "createdAt": "2026-08-11T08:00:00.000Z",
    "updatedAt": "2026-08-11T08:00:00.000Z",
    "lastRun": "2026-08-11T22:00:00.000Z"
  },
  {
    "id": "recettes-avocat-saumon",
    "title": "Recettes avocat & saumon",
    "prompt": "Affiche-moi 5 nouvelles recettes avec de l'avocat et du saumon.",
    "resultCount": 5,
    "createdAt": "2026-08-11T08:00:00.000Z",
    "updatedAt": "2026-08-11T21:39:25.324Z",
    "lastRun": "2026-08-11T22:00:00.000Z"
  }
];

const FALLBACK_RESULTS = {
  "ebike-avinox": [
    {
      "id": "mg1-1",
      "type": "article",
      "title": "DJI Avinox MG1 : ce nouveau moteur change de vitesse en 0,1 seconde",
      "summary": "Transmission intégrée au moteur, passages de vitesse en moins de 0,1 seconde sans interruption de puissance, même à l'arrêt ou en forte charge.",
      "url": "https://www.cleanrider.com/actus/dji-avinox-mg1-moteur-velo-electrique-transmission-automatique/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.cleanrider.com%2Factus%2Fdji-avinox-mg1-moteur-velo-electrique-transmission-automatique%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T22:00:00.000Z"
    },
    {
      "id": "mg1-2",
      "type": "article",
      "title": "Eurobike 2026 | Avinox MG1 : un moteur avec boîte de vitesses intégrée",
      "summary": "Trois mois après le lancement des M2 et M2S, Avinox dévoile un concept encore plus ambitieux à l'Eurobike 2026.",
      "url": "https://www.vojomag.com/news/eurobike-2026-avinox-mg1-et-maintenant-un-moteur-avec-boite-de-vitesses-integree/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.vojomag.com%2Fnews%2Feurobike-2026-avinox-mg1-et-maintenant-un-moteur-avec-boite-de-vitesses-integree%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T22:00:00.000Z"
    },
    {
      "id": "mg1-3",
      "type": "article",
      "title": "Avinox MG1, moteur à transmission intégrée qui redéfinit le VTTAE",
      "summary": "Chaîne mono-vitesse ou courroie, plus de dérailleur ni de cassette multi-vitesses : le MG1 simplifie l'entretien du vélo électrique.",
      "url": "https://www.shcycles.fr/moteur-transmission-avinox-mg1/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.shcycles.fr%2Fmoteur-transmission-avinox-mg1%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T22:00:00.000Z"
    },
    {
      "id": "mg1-4",
      "type": "article",
      "title": "Avinox dévoile le concept produit Avinox MG1 à l'Eurobike 2026",
      "summary": "Compatible VTT, trekking, SUV et gravel, le MG1 supporte une charge totale de plus de 150 kg. Aucune date de commercialisation annoncée.",
      "url": "https://www.prnewswire.com/news-releases/avinox-devoile-le-concept-produit-avinox-mg1-a-leurobike-2026-302807706.html",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.prnewswire.com%2Fnews-releases%2Favinox-devoile-le-concept-produit-avinox-mg1-a-leurobike-2026-302807706.html?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T22:00:00.000Z"
    },
    {
      "id": "mg1-5",
      "type": "article",
      "title": "Avinox MG1, le moteur à transmission intégrée révélé à l'Eurobike",
      "summary": "Plusieurs modes de conduite proposés, du changement manuel classique jusqu'à un mode entièrement automatique.",
      "url": "https://docteur-ebike.com/moteur-avinox-mg1/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fdocteur-ebike.com%2Fmoteur-avinox-mg1%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T22:00:00.000Z"
    }
  ],
  "youtube-ia-outils": [
    {
      "id": "yt-ia-1",
      "type": "video",
      "title": "Les meilleurs outils IA à utiliser en 2026",
      "summary": "Un tour d'horizon rapide en format short des outils IA à connaître cette année.",
      "url": "https://www.youtube.com/shorts/ziMfHt9hnlw",
      "image": "https://img.youtube.com/vi/ziMfHt9hnlw/hqdefault.jpg",
      "date": null,
      "fetchedAt": "2026-08-11T22:00:00.000Z"
    },
    {
      "id": "yt-ia-2",
      "type": "video",
      "title": "TOP 5 des générateurs de vidéo IA : les meilleurs outils de 2026 (+ bonus nouveauté)",
      "summary": "Comparatif des générateurs de vidéo IA les plus performants du moment, avec une découverte bonus.",
      "url": "https://www.youtube.com/watch?v=UG5KPcaQrGA",
      "image": "https://img.youtube.com/vi/UG5KPcaQrGA/hqdefault.jpg",
      "date": "2026-02-01T00:00:00.000Z",
      "fetchedAt": "2026-08-11T22:00:00.000Z",
      "datePrecision": "month"
    },
    {
      "id": "yt-ia-3",
      "type": "video",
      "title": "Génération de vidéos avec l'IA : quel est le meilleur outil en 2026 ?",
      "summary": "Analyse comparative pour choisir le bon outil de génération vidéo par IA.",
      "url": "https://www.youtube.com/watch?v=OTIrzJED6Ns",
      "image": "https://img.youtube.com/vi/OTIrzJED6Ns/hqdefault.jpg",
      "date": "2026-04-01T00:00:00.000Z",
      "fetchedAt": "2026-08-11T22:00:00.000Z",
      "datePrecision": "month"
    }
  ],
  "recettes-avocat-saumon": [
    {
      "id": "recette-1",
      "type": "recipe",
      "title": "Tartare de saumon et avocat",
      "summary": "Saumon mariné au citron vert, gingembre et soja, mélangé à l'avocat en dés. Servi avec des chips wonton ou toasts croustillants.",
      "url": "https://chefsquare.fr/recette-tartare-saumon-avocat",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fchefsquare.fr%2Frecette-tartare-saumon-avocat?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T22:00:00.000Z"
    },
    {
      "id": "recette-2",
      "type": "recipe",
      "title": "Saumon & avocat, tout simplement",
      "summary": "Saumon zesté d'agrumes, avocat en dés sur lit de jeunes pousses d'épinards, crème de mascarpone aux herbes fraîches.",
      "url": "https://www.jcdavid.fr/recette-saumon-avocat/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.jcdavid.fr%2Frecette-saumon-avocat%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T22:00:00.000Z"
    },
    {
      "id": "recette-3",
      "type": "recipe",
      "title": "Mille-feuille saumon avocat",
      "summary": "Pour 4 personnes, 25 min de préparation : pavé de saumon, avocat, feuilles croustillantes et pointe de poivre agrume, montés en mille-feuille.",
      "url": "https://auxdelicesdantan.wordpress.com/2026/05/15/mille-feuille-saumon-avocat/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fauxdelicesdantan.wordpress.com%2F2026%2F05%2F15%2Fmille-feuille-saumon-avocat%2F?w=400&h=225",
      "date": "2026-05-15T00:00:00.000Z",
      "fetchedAt": "2026-08-11T22:00:00.000Z"
    },
    {
      "id": "recette-4",
      "type": "recipe",
      "title": "Salade au saumon fumé et avocat : recette et variantes",
      "summary": "L'équilibre entre le goût délicat du saumon fumé et la texture crémeuse de l'avocat, avec plusieurs variantes proposées.",
      "url": "https://www.epiceriedupatrimoine.com/salade-saumon-fume-avocat/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.epiceriedupatrimoine.com%2Fsalade-saumon-fume-avocat%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T22:00:00.000Z"
    },
    {
      "id": "recette-5",
      "type": "recipe",
      "title": "Saumon grillé et salsa d'avocat",
      "summary": "Avocat, oignon, coriandre et jus de lime en salsa fraîche, servie sur un pavé de saumon grillé au barbecue.",
      "url": "https://chefcuisto.com/recette/saumon-grille-avec-une-salsa-davocat/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fchefcuisto.com%2Frecette%2Fsaumon-grille-avec-une-salsa-davocat%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T22:00:00.000Z"
    }
  ],
  "presse": [
    {
      "id": "leman-1",
      "type": "article",
      "title": "L'eau du Léman plus propre, mais aussi plus chaude",
      "summary": "Le lac se réchauffe et atteint des températures records en 2025, selon la RTS.",
      "url": "https://www.rts.ch/info/environnement/2026/article/le-leman-se-rechauffe-et-atteint-des-temperatures-records-en-2025-29198607.html",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.rts.ch%2Finfo%2Fenvironnement%2F2026%2Farticle%2Fle-leman-se-rechauffe-et-atteint-des-temperatures-records-en-2025-29198607.html?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T22:00:00.000Z"
    },
    {
      "id": "leman-2",
      "type": "article",
      "title": "Dégradation de la qualité des eaux du Léman",
      "summary": "Point sur les facteurs de dégradation observés récemment dans le lac.",
      "url": "https://www.paysdegexagglo.fr/actualite/24314/8430-degradation-de-la-qualite-des-eaux-du-leman.htm",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.paysdegexagglo.fr%2Factualite%2F24314%2F8430-degradation-de-la-qualite-des-eaux-du-leman.htm?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T22:00:00.000Z"
    },
    {
      "id": "leman-3",
      "type": "article",
      "title": "Les eaux du lac Léman continuent de se réchauffer",
      "summary": "Un réchauffement des eaux de surface de 1,7 degré, avec un brassage hivernal incomplet pour la 14e année consécutive.",
      "url": "https://www.terrenature.ch/nature/les-eaux-du-lac-leman-continuent-de-se-rechauffer/",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.terrenature.ch%2Fnature%2Fles-eaux-du-lac-leman-continuent-de-se-rechauffer%2F?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T22:00:00.000Z"
    },
    {
      "id": "leman-4",
      "type": "article",
      "title": "La qualité de l'eau du Léman va-t-elle être altérée par les blooms algaux ?",
      "summary": "Analyse de l'INRAE sur l'impact des activités humaines et du changement climatique sur le lac.",
      "url": "https://www.inrae.fr/actualites/qualite-leau-du-leman-va-t-elle-etre-alteree-blooms-algaux-du-fait-activites-humaines-du-changement-climatique",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.inrae.fr%2Factualites%2Fqualite-leau-du-leman-va-t-elle-etre-alteree-blooms-algaux-du-fait-activites-humaines-du-changement-climatique?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T22:00:00.000Z"
    },
    {
      "id": "leman-5",
      "type": "article",
      "title": "Lac Léman : un bilan de santé globalement positif",
      "summary": "Le phosphore atteint son niveau le plus bas depuis 1970, réduisant nettement les efflorescences algales.",
      "url": "https://www.sauvonsleau.fr/jcms/e_29392/lac-leman--un-bilan-de-sante-globalement-positif",
      "image": "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.sauvonsleau.fr%2Fjcms%2Fe_29392%2Flac-leman--un-bilan-de-sante-globalement-positif?w=400&h=225",
      "date": null,
      "fetchedAt": "2026-08-11T22:00:00.000Z"
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
  gh: loadGhConfig()
};

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
  await ghPutFile("data/columns.json", state.columns, message);
}
async function persistResults(message) {
  if (!isEditable()) return;
  await ghPutFile("data/results.json", state.results, message);
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
  const body = el("div", { class: "tile-body" }, [
    el("p", { class: "tile-title" }, item.title || "Sans titre"),
    el("p", { class: "tile-summary" }, item.summary || ""),
    el("div", { class: "tile-footer" }, [
      el("span", { class: "type-badge" }, item.type || "info"),
      el("span", { class: "tile-date", title: "Date de parution" }, pubDate || "Date inconnue")
    ])
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

  const head = el("div", { class: "column-head" }, [
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

  return el("div", { class: "column" }, [head, body]);
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
