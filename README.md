# Mon tableau de bord IA

Un tableau de bord perso en colonnes. Chaque colonne = un prompt enregistré
(ex : "les 5 dernières actus vélos électriques Avinox"), avec ses résultats
affichés sous forme de tuiles (article, vidéo, recette...).

## Utilisation

- **Voir le tableau** : ouvrir `index.html` (ou le site publié) — fonctionne
  en lecture seule sans rien configurer.
- **Ajouter / modifier / supprimer une colonne** : cliquer sur ⚙️ (Réglages)
  et renseigner un jeton d'accès personnel GitHub :
  1. Aller sur github.com → Settings → Developer settings →
     Personal access tokens → Fine-grained tokens → Generate new token.
  2. Limiter le jeton au dépôt `yakari999/ai-daschboard`, permission
     **Contents: Read and write**.
  3. Copier le jeton dans le panneau Réglages de la page (il reste stocké
     uniquement dans le navigateur, jamais envoyé ailleurs qu'à l'API GitHub).
- **Rafraîchir une colonne** : le bouton "🔄 Rafraîchir" indique la marche à
  suivre pour demander une mise à jour immédiate en session avec Claude.
  La mise à jour automatique quotidienne se fait via une routine planifiée,
  sans clé API séparée à payer.

## Structure

- `index.html` / `app.js` — la page (aucune étape de build nécessaire)
- `data/columns.json` — les colonnes et leurs prompts
- `data/results.json` — les derniers résultats par colonne

## Publier sur GitHub Pages

Une fois cette branche fusionnée sur `main` :
Settings → Pages → Source : "Deploy from a branch" → `main` / `(root)`.
