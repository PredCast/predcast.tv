# Gamification — suivi

Source de reprise entre sessions. Sources : [`00-decisions.md`](00-decisions.md) > [`03-spec-mvp.md`](03-spec-mvp.md) > [`04-maquette-carte-profil-mvp.html`](04-maquette-carte-profil-mvp.html). Prompts : `docs/prompts/gamification/`.

`GAMIFICATION_ENABLED` reste à `false` en prod jusqu'au lancement (étape 08).

| Étape | Statut | PR | Migrations | Variables d'env | CA couverts | Écarts et décisions |
|---|---|---|---|---|---|---|
| 01 · Préparation et identité (G0, G1, G2) | PR ouverte | (voir PR feat/gamification-identity) | **043** `accounts`, `account_wallets` | `JOBS_ONCHAIN_ENABLED` (`.env.local.example`) ; `DYNAMIC_ENVIRONMENT_ID`, `AUTH_REQUIRE_DYNAMIC_JWT`, `GAMIFICATION_ENABLED`, `GAMIFICATION_LAUNCH_AT` (les deux `.env.example`) | CA1 | voir ci-dessous |
| 02 · Domaine (G3) | PR ouverte | #45 | — | — | CA3–CA8, CA10, CA14 (règles), CA16 (validation) | voir #45 |
| 03 · Schéma, noyau, connexion (G4, G5, G6) | prête pour PR | (branche feat/gamification-core) | **044** `gamification_*` (appliquée en local seulement) | aucune | CA2, CA3, CA4, CA5, CA17, CA19, CA20 (connexion) | voir ci-dessous |
| 04 · Sources XP joueurs | à faire | — | — | — | — | — |
| 05 · Streamers et classement | à faire | — | — | — | — | — |
| 06 · API, composants, surfaces (G12, G13, G14) | prête pour PR | (branche feat/gamification-surfaces) | aucune | aucune | CA15, CA16, CA22, CA23 | voir ci-dessous |
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

### Étape 03
- **Écarts schéma réel / brouillon §7.3** : `bets` sans `chain_id` (D7, la `ref_key` prendra `matches.betting_chain_id`) ; `donations` / `subscriptions` portent `transaction_hash` (pas `tx_hash`) + `log_index` ; `users` n'a ni `id` ni `created_at` (clé = `wallet_address`) ; `leaderboard_epochs` a pour PK `tx_hash`, `epoch_id` n'y est pas unique ; `bans.status` est l'enum `ban_status` ; `audit_log.id` est un `BIGINT` ; `chat_messages.message_type` vaut `REGULAR`. Aucune FK n'en dépend dans 044.
- **Écarts au brouillon 044** : colonne `level_peak` (+ `CHECK level_peak >= level`), retournée par `gamification_credit` / `_check_in` (`old_level_peak`) pour ne notifier qu'au-dessus du pic ; `admin_adjustment` seul accepte une XP négative, bornée pour que `xp_total` reste ≥ 0 (idem annulation) : invariant `xp_total = SUM(xp)` ; `CHECK` jour de Paris sur le registre (hors annulations) ; trigger `TRUNCATE` + `REVOKE ALL` y compris `service_role` avant les `GRANT` (les privilèges par défaut de Supabase donnaient `TRUNCATE`) ; `CHECK` multiplicateur par pas de 0,25 ; `_check_in` lève une exception si la ligne existe déjà alors que la série a bougé ; nouvelle fonction `gamification_rebuild_profiles(apply)` (CLI) ; `NOTIFY pgrst` en fin de migration.
- `btree_gist` non nécessaire : vérifié en appliquant 044 (GiST natif sur `tstzrange`).
- `gamification_record_watch_minute` n'est pas dans 044 (G7, étape 04) : migration 045 à prévoir, ou ajout à 044 tant qu'elle n'est pas mergée.
- Connexion d'un compte banni ou suspendu : **aucune ligne** écrite (sinon la `ref_key` du jour bloquerait une connexion après levée du ban) ; la série ne bouge pas.
- Motif de refus `rate_limited` ajouté au DTO (2ᵉ appel dans la minute) ; `disabled` ajouté comme demandé.
- Notification de montée de niveau : seulement au-dessus de `level_peak` (pas de toast à la baisse ni en remontant à un niveau déjà atteint).
- `admin_adjustment` : `AdjustXpUseCase` (`ref_key = admin:{adjustmentId}` fourni par l'appelant pour l'idempotence, audit `gamification.xp.adjust`), ignore ban et suspension ; pas de route avant l'étape 07.
- `IAccountRepository.findById` ajouté ; port `IGamificationConfig`. Dépôts reportés : `IWatchMinuteRepository` et `IStreamSessionRepository` (liés à G7 / G10, non implémentés).
- Fixtures L1 : `accountFixture`, `linkedWalletFixture`, `streakFixture`, `doubleXpEventFixture` ; celles des paris / marchés (`betRowFixture`…) arrivent avec l'étape 04.
- Tests SQL : `src/testing/integration/gamification-sql.integration.test.ts`, à lancer **seul** (`vitest run --config vitest.integration.config.ts <fichier>`) : les autres suites d'intégration appellent `setupIntegrationEnv`, qui vide le schéma `public`.
- Front : `GamificationAutoCheckIn` est monté hors `QueryProvider` (QueryClient de wagmi) : l'invalidation de `gamification.me` ne touchera pas le client de l'app, à traiter à l'étape 06 (refetch 60 s ou montage déplacé).

### Étape 06
- **Routes** : publiques dans `gamification-public.routes.ts` (montées avant `authenticate`), propriétaire dans `gamification-me.routes.ts` (`/gamification/me`, après `authenticate`, `requireAccount`). Contrôleur `GamificationReadController` ; le routeur de l'étape 03 (`check-in`) n'est pas touché, pour limiter les conflits avec l'étape 04.
- **Lecture** : port `IGamificationReadRepository` (une lecture groupée par lot : liens actifs, `accounts`, `users` joint par la route elle-même (D8), profils, succès, rangs de cycle, minutes streamées) ; modèles de lecture purs dans le domaine (`policies/profileCard.ts`, `policies/doubleXpAnnouncement.ts`), réutilisant `displayedFrame`, `displayedShowcase`, `ownedTitles`, `effectiveStreak`, `levelProgress`.
- **Cache Redis** : `gami:card|badge|profile:{wallet}` 60 s, `gami:me:{accountId}` 15 s, `gami:double-xp:current` 30 s ; invalidés par le noyau (`GamificationAfterCredit.invalidate`), `PUT me/cosmetics` et l'ack (me). Badges : `mget` / `mset` par wallet, un wallet sans compte est mémorisé `null`. Rate limit `cards/badges` : 60 / min / IP via `IRateLimitService`.
- **Flag off ou avant lancement** : badges `{}`, cartes / profils / `me` en 404, double XP `null` ; le front retombe exactement sur l'UI actuelle (capture `app-desktop-chat-flag-off.png`).
- **Écarts au §9.2** : `AchievementProgressSchema.current` est `nullable` (le domaine renvoie `null` pour `leaderboard` sans rang et `founder`) ; `PublicProfileDto` (non défini par la spec) = carte + plus haut palier public de chaque famille (`achievements`), jamais d'autre wallet ; `activeDoubleXp` de `/me` n'est rempli que pendant l'événement (l'annonce à 7 jours passe par `double-xp/current`). Codes 422 : `COSMETIC_NOT_OWNED` (titre, cadre, tuile non possédée ou privée — `details.code` garde la règle du domaine), `SHOWCASE_TOO_LONG`, `SHOWCASE_DUPLICATE`.
- **Sans profil** : un compte sans ligne `gamification_profiles` n'a ni pastille ni carte publique ; `/me` le lit au niveau 1.
- **Tag `New`** : 14 jours après `accounts.created_at` (constante domaine `NEW_PLAYER_TAG_DAYS`). **Tag `Streamer`** : minutes streamées > 0.
- **Front** : `GamificationAutoCheckIn` déplacé dans `app/layout.tsx`, à l'intérieur du `QueryProvider` de l'app (l'invalidation de `gamification.me` atteint donc le bon client). Avatar extrait de `UserBadge` dans `components/shared/UserAvatar.tsx` (D11) ; `UserBadge` accepte `frameId` / `level` (rétrocompatible). Carte au survol : `radix-ui` Popover (déjà dépendance) en portail, hors des listes qui défilent.
- **Accessibilité (CA23)** : survol 300 ms, focus clavier ouvre, Tab entre dans la carte (portail), Échap ferme et rend le focus au pseudo sans rouvrir, tap sur mobile ; une carte où l'on a cliqué reste ouverte (le dialogue de signalement n'est pas démonté) ; `motion-reduce` coupe les rotations (vérifié : `spin 18s` → `none`).
- **CA22** : la couleur or `isFeatured` est conservée ; la pastille est un élément distinct ; avec une pastille, le pseudo des autres joueurs passe en blanc (la teinte `hueForUser` reste quand il n'y a pas de pastille).
- **Réseau** : un chat chargé = 1 requête `cards/badges` (6 wallets), le leaderboard = 1 ; débounce 300 ms, clé de requête triée (le chat desktop et la feuille mobile partagent la même requête).
- **Ajouts hors liste** : `StreamShelf` (« Now watching ») porte aussi le cadre (même requête de carte que `StreamerStrip`). Sur mobile, la médaille de `PreviewRow` laisse sa place à l'avatar encadré (la colonne Tier garde le nom de la médaille).
- **Dette / à faire** : bouton *Follow* de la carte streamer de la maquette non repris (pied commun *View profile* + signalement) ; `/u/[wallet]` arrive à l'étape 07 (lien déjà en place) ; `AddressLabel` du leaderboard garde sa police mono pour les pseudos (comportement existant) ; la grille du leaderboard reste serrée sur mobile (existant).

### Mode de travail
- À partir du 23/11, l'utilisateur laisse travailler en autonomie : branches empilées (chaque étape part de la précédente), une PR par étape vers `main` avec ses dépendances, aucun merge. Tests manuels groupés à la fin.
