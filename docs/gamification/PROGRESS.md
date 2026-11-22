# Gamification — suivi

Source de reprise entre sessions. Sources : [`00-decisions.md`](00-decisions.md) > [`03-spec-mvp.md`](03-spec-mvp.md) > [`04-maquette-carte-profil-mvp.html`](04-maquette-carte-profil-mvp.html). Prompts : `docs/prompts/gamification/`.

`GAMIFICATION_ENABLED` reste à `false` en prod jusqu'au lancement (étape 08).

| Étape | Statut | PR | Migrations | Variables d'env | CA couverts | Écarts et décisions |
|---|---|---|---|---|---|---|
| 01 · Préparation et identité (G0, G1, G2) | en cours (Phase 0) | — | à proposer (comptes) | `JOBS_ONCHAIN_ENABLED` (`.env.local.example`) ; à valider : `DYNAMIC_ENVIRONMENT_ID`, `GAMIFICATION_LAUNCH_AT`, `GAMIFICATION_ENABLED`, `AUTH_REQUIRE_DYNAMIC_JWT` | — | voir ci-dessous |
| 02 · Domaine (G3) | en cours | — | — | — | — | — |
| 03 · Schéma, noyau, connexion | à faire | — | — | — | — | — |
| 04 · Sources XP joueurs | à faire | — | — | — | — | — |
| 05 · Streamers et classement | à faire | — | — | — | — | — |
| 06 · API, composants, surfaces | à faire | — | — | — | — | — |
| 07 · Progression, profil, notifs, admin | à faire | — | — | — | — | — |
| 08 · Tests et lancement | à faire | — | — | — | — | — |

## Journal des écarts et décisions

### Étape 01
- `JOBS_ONCHAIN_ENABLED` n'existait pas : ajouté (désactivé par défaut hors `NODE_ENV=production`, « Run now » toujours possible).
