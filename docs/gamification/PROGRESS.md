# Gamification — suivi

Source de reprise entre sessions. Sources : [`00-decisions.md`](00-decisions.md) > [`03-spec-mvp.md`](03-spec-mvp.md) > [`04-maquette-carte-profil-mvp.html`](04-maquette-carte-profil-mvp.html). Prompts : `docs/prompts/gamification/`.

`GAMIFICATION_ENABLED` reste à `false` en prod jusqu'au lancement (étape 08).

| Étape | Statut | PR | Migrations | Variables d'env | CA couverts | Écarts et décisions |
|---|---|---|---|---|---|---|
| 01 · Préparation et identité (G0, G1, G2) | PR ouverte | (voir PR feat/gamification-identity) | **043** `accounts`, `account_wallets` | `JOBS_ONCHAIN_ENABLED` (`.env.local.example`) ; `DYNAMIC_ENVIRONMENT_ID`, `AUTH_REQUIRE_DYNAMIC_JWT`, `GAMIFICATION_ENABLED`, `GAMIFICATION_LAUNCH_AT` (les deux `.env.example`) | CA1 | voir ci-dessous |
| 02 · Domaine (G3) | PR ouverte | #45 | — | — | CA3–CA8, CA10, CA14 (règles), CA16 (validation) | voir #45 |
| 03 · Schéma, noyau, connexion | à faire | — | — | — | — | — |
| 04 · Sources XP joueurs | à faire | — | — | — | — | — |
| 05 · Streamers et classement | à faire | — | — | — | — | — |
| 06 · API, composants, surfaces | à faire | — | — | — | — | — |
| 07 · Progression, profil, notifs, admin | à faire | — | — | — | — | — |
| 08 · Tests et lancement | à faire | — | — | — | — | — |

## Journal des écarts et décisions

### Étape 01
- `JOBS_ONCHAIN_ENABLED` n'existait pas : ajouté (désactivé par défaut hors `NODE_ENV=production`, « Run now » toujours possible).
- Relevé JWT Dynamic (local et prod, même environnement `8d9de814…`) : `iss = app.dynamicauth.com/<env>`, claim `environment_id`, `aud` = origine du front, `scope = user:basic`. `getAuthToken()` du SDK renvoie le `legacyToken`, seul porteur de `verified_credentials` (`format: blockchain`, `chain: eip155`).
- Vérifications ajoutées au JWT Dynamic : `environment_id` = `DYNAMIC_ENVIRONMENT_ID` (décision utilisateur) et `aud` dans `ALLOWED_ORIGINS`.
- Transition : tant que `AUTH_REQUIRE_DYNAMIC_JWT=false`, un jeton legacy garde l'identité envoyée par le client pour follows et `POST /stream` (log `warn`).
- Landing : `authenticateWallet` et `setAuthToken` supprimés (code mort, pas de SDK Dynamic).
- `GAMIFICATION_LAUNCH_AT` vide = pas lancé (décision utilisateur).

### Étape 02
- Titres de niveau, cadres de rang et emplacements de vitrine suivent le niveau maximal atteint (§3.1 règle 8) : prévoir une colonne `level_peak` à l'étape 03.
- Écarts avec le code : type de message `REGULAR`, minutes « en jeu » = statut `live` seulement, payout cumulatif dans `_processClaim`.

### Mode de travail
- À partir du 23/11, l'utilisateur laisse travailler en autonomie : branches empilées (chaque étape part de la précédente), une PR par étape vers `main` avec ses dépendances, aucun merge. Tests manuels groupés à la fin.
