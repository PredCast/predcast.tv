# Gamification — suivi

Source de reprise entre sessions. Sources : [`00-decisions.md`](00-decisions.md) > [`03-spec-mvp.md`](03-spec-mvp.md) > [`04-maquette-carte-profil-mvp.html`](04-maquette-carte-profil-mvp.html). Prompts : `docs/prompts/gamification/`.

`GAMIFICATION_ENABLED` reste à `false` en prod jusqu'au lancement (étape 08).

| Étape | Statut | PR | Migrations | Variables d'env | CA couverts | Écarts et décisions |
|---|---|---|---|---|---|---|
| 01 · Préparation et identité (G0, G1, G2) | PR ouverte | (voir PR feat/gamification-identity) | **043** `accounts`, `account_wallets` | `JOBS_ONCHAIN_ENABLED` (`.env.local.example`) ; `DYNAMIC_ENVIRONMENT_ID`, `AUTH_REQUIRE_DYNAMIC_JWT`, `GAMIFICATION_ENABLED`, `GAMIFICATION_LAUNCH_AT` (les deux `.env.example`) | CA1 | voir ci-dessous |
| 02 · Domaine (G3) | PR ouverte | #45 | — | — | CA3–CA8, CA10, CA14 (règles), CA16 (validation) | voir #45 |
| 03 · Schéma, noyau, connexion (G4, G5, G6) | prête pour PR | (branche feat/gamification-core) | **044** `gamification_*` (appliquée en local seulement) | aucune | CA2, CA3, CA4, CA5, CA17, CA19, CA20 (connexion) | voir ci-dessous |
| 04 · Sources XP joueurs (G7, G8, G9) | prête pour PR | (branche feat/gamification-player-xp) | **045** `gamification_record_watch_minute` + index (appliquée en local seulement) | aucune | CA6–CA12, CA18, CA19, CA20 (tests) | voir ci-dessous |
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

### Étape 04
- **Migration 045** : `gamification_record_watch_minute` (minute unique par compte, compteurs `minutes:watch` / `minutes:league:{id}`, progression `watch_minutes` plafonnée à 240/jour, `leagues` au 10ᵉ min du jour, même verrou de profil que `gamification_credit`) + index de scan (`market_events` settlements, `subscriptions.created_at`, `chat_messages.removed_at`, registre `(account_id, source, id)`, notifications vues). 044 non modifiée.
- **Écarts au code vérifiés** : noms d'events `PositionTaken` / `MarketResolved` (`resolvedNetPool` dans le payload) / `MarketCancelled` / `MarketCreated` (`marketType`, `line`) confirmés. `_processClaim` paie en arrondi cumulatif : `winPolicy` garde un `floor` par wallet, écart ≤ 1 unité brute par wallet, accepté. `bets` sans `chain_id` : `chainId = COALESCE(matches.betting_chain_id, defaultChain)`. Décimales USDC lues on-chain (`IStakeTokenDecimals` → `getTokenDecimals`, cache), jamais `1e6` ; une autre chaîne que celle du `NETWORK` lève une erreur.
- **Ports ajoutés** : `IGamificationEventSource` (lecture seule de `bets`, `market_events`, `donations`, `subscriptions`, `chat_messages.removed_at`, `matches`), `IStakeTokenDecimals`, `IWatchMinuteRepository` implémenté (`listViewersAt` fourni pour l'étape 05), `ITextHasher` (Node sha256). `listReversibleByMarket` remplacé par `listVolumeRowsByMarket` + politique `isReversibleCredit` : une ligne plafonnée à 0 XP mais qui a bougé `bet_volume_usdc` est aussi annulée ; une ligne zéro pour ban / suspension ne l'est jamais (sa progression n'a pas bougé). `findLastCredited` tient compte des lignes `daily_cap` (anti-spam du chat au-delà de 5 XP).
- **Décisions** : `rate_limited` ajouté au heartbeat (4 appels / min / compte via `IRateLimitService`) ; `already_counted` pour un 2ᵉ onglet. Étape `avatar` créditée dès qu'un `avatarUrl` non vide passe par `UpsertUserProfileUseCase` (upload ou profil). Étape `streak3` créditée par la connexion quand la série atteint 3. `bet_won` en mode `cosmetic_only` : ligne à 0 XP `source_disabled`, progression `bets_won` conservée. Achievements évalués pour les comptes touchés en fin de passe (pas après les annulations : aucun palier n'est retiré). Visionnage : évaluation seulement sur tranche XP, nouvelle ligue ou heure pleine.
- **Rejeu** : curseurs `bets {lastId}`, `settlements {block, logIndex}` − 200 blocs, `support {createdAt}` et `chat_removals {removedAt}` − 10 min ; au premier passage, support et retraits partent de `GAMIFICATION_LAUNCH_AT`. Un pas en erreur n'empêche pas les suivants ; la 1ʳᵉ erreur est relancée à la fin. Le curseur ne recule jamais.
- **Tests** : domaine (`sourcesPolicies.test.ts`) ; use cases avec `MockClock` et fixtures L1 (`betRowFixture`, `marketResolvedFixture`, `marketCancelledFixture`, `supportEventFixture`) ; scénario `gamification-matchday` en test vitest in-memory (les scénarios CLI `pnpm match:scenario` ne créent que des matchs : ni comptes ni lignes indexées) ; SQL 045 dans `gamification-watch-sql.integration.test.ts` (à lancer seul).
- **Smoke local (API :3031, Supabase local, Spicy en lecture)** : heartbeat (compté, 2ᵉ onglet, 10ᵉ minute → +1 XP + étape `watch` + ligue 61), `ACCOUNT_REQUIRED` sans `accountId`, chat (+1, doublon et « gg » ignorés), follow (+5, soi-même ignoré), pseudo (+5), ban d'un wallet lié → heartbeat / check-in / chat refusés ou à 0, processeur (volume 40 + couverture 0 + pari de 4 USDC ignoré + 25, `bet_won` unique, soutien, annulation −30, retrait de chat −1, pari tardif sur marché annulé ignoré), remise à zéro des curseurs → aucune ligne nouvelle. Lignes de test supprimées ensuite.
- **Reste / risques** : « Run now » de l'admin non testé de bout en bout (job `safe`, enregistré au registre) ; bout en bout Spicy avec un vrai pari à faire par l'utilisateur. Le curseur `settlements` est un numéro de bloc : avec le multichain (Base), il faudra un curseur par chaîne. Les annulations `stop_stream` arrivent à l'étape 05.

### Mode de travail
- À partir du 23/11, l'utilisateur laisse travailler en autonomie : branches empilées (chaque étape part de la précédente), une PR par étape vers `main` avec ses dépendances, aucun merge. Tests manuels groupés à la fin.
