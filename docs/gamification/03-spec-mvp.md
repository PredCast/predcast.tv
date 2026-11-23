# PredCast · Gamification — Spécification MVP (03)

> **Statut** : spécification prête à développer, à relire par l'équipe. Rien n'est implémenté.
> **Date** : 2026-11-21. **Maquette** : [`04-maquette-carte-profil-mvp.html`](04-maquette-carte-profil-mvp.html).
> **Sources, par ordre de priorité** : [`00-decisions.md`](00-decisions.md) (décisions et calibrage validé), puis cette spec, puis [`01-proposition-gamification.md`](01-proposition-gamification.md) pour le contexte historique.
> **Chemins** : relatifs à la racine du monorepo `chiliztv.com`. Chaque table, colonne, route ou fichier cité a été vérifié dans le code au 2026-11-21 ; tout ce qui n'existe pas encore est marqué **(nouveau)**.
> **Conventions** : identifiants de code, tables, colonnes et routes en anglais. Libellés de l'app en anglais, avec le nom français de référence entre parenthèses, par exemple *Starter (Titulaire)*. Le marqueur **⚠ juridique** signale une mécanique à faire valider avant le lancement.
> **Migrations** : aucun fichier n'est écrit dans le repo. Le SQL du §7 est un brouillon. Les numéros **043** et **044** sont les prochains libres sur toutes les branches au 2026-11-21. Leur création demande l'accord de l'utilisateur (CLAUDE.md §9).

---

## 1. Objectif et périmètre du MVP

### 1.1 La boucle en 5 lignes

1. **Déclencheur** : un match publié ou un stream suivi passe en live. Le joueur ouvre l'app, ce qui enregistre sa connexion du jour (+50 à +100 XP selon sa série).
2. **Action** : il regarde, chatte, suit un streamer ou mise. Chaque action qualifiante crédite de l'XP plafonnée par jour ; un pari d'au moins 5 USDC rapporte 1 XP par USDC.
3. **Récompense** : à la résolution, un pari gagnant rapporte un bonus fixe, quel que soit le montant. Les compteurs de succès avancent et débloquent des paliers, des titres et des cadres.
4. **Statut** : niveau, rang (cadre), titre et vitrine s'affichent au survol dans le chat, au leaderboard, sur la page live et sur la page profil. **Aucun montant n'y figure jamais.**
5. **Retour** : la série quotidienne (avec gel automatique) et les événements double XP lancés par l'équipe ramènent le joueur, sans jamais exiger de miser.

### 1.2 Objectifs mesurables

| Objectif | Indicateur (dashboard admin, itération 2) | Cible indicative |
|---|---|---|
| Activation | Part des comptes créés qui atteignent le niveau 2 en 7 jours | ≥ 50 % |
| Retour quotidien | Comptes avec une série ≥ 7 jours / comptes actifs sur 30 jours | ≥ 20 % |
| Statut visible | Part des messages de chat affichés avec une pastille de niveau | ≥ 90 % des messages d'auteurs connectés |
| Voie non monétaire | Part de l'XP totale venant des sources non monétaires | ≥ 50 % |

### 1.3 Contenu du MVP

- Identité **compte ↔ wallets** prouvée par le JWT Dynamic (prérequis, §8.6).
- Registre d'XP append-only, niveaux 1 à 60, 7 rangs, cadres, titres, vitrine de 1 à 3 emplacements.
- Sources d'XP : connexion quotidienne, volume misé, paris gagnants, visionnage authentifié, chat, suivi de streamer, soutien streamer, temps de stream, étapes « Premiers pas » et succès.
- Série quotidienne avec gel.
- 13 familles de succès (§5).
- Double XP déclenché à la main depuis l'admin.
- Carte au survol (chat, leaderboard, page live), section *Progression* du dashboard, page profil publique `/u/[wallet]`, toasts in-app.
- Suspension manuelle de la gamification d'un compte (anti-abus).
- Pas de rétroactivité : tout le monde part de zéro à `GAMIFICATION_LAUNCH_AT`.

### 1.4 Hors MVP

**Repris de « À faire plus tard » (`00-decisions.md`)**
- « Paper pronostic » (pronostics sans mise). Donc pas de `free_picks`, pas de série de justesse, pas de sources N5 ni J3.
- Calendriers des matchs (basket, nouveaux marchés). En attendant, le palier « catalogue complet » de *Versatility* est dynamique.
- Notifications push (avec l'application mobile).
- Succès de pic de spectateurs (famille « Streamer · public »).
- NFT (badge ultime ou partenaire).
- Traductions des titres et succès. Les clés de traduction sont posées dès le MVP.
- Prestige au-delà du niveau 60.

**Retiré par les décisions ou reporté**
- Contre-pied, précision, succès cachés, quêtes hebdomadaires, saisons, objectifs communautaires, Hall of Fame, « Avis des confirmés ».
- Régularité streamer (« Rendez-vous »), abonnés qualifiés.
- Fair-play.
- Pondération des signalements.
- KYC (décision 13).
- Présence du chat via `connected_users` (décision 20).
- Rétroactivité (décision 10).
- Détection automatique des multi-comptes (itération 2 : job de scan, §10.3).
- Outil de pause de jeu : non décidé, recommandé, voir §13.

---

## 2. Glossaire

| Terme | Définition | Identifiant technique |
|---|---|---|
| **Compte** | Utilisateur Dynamic authentifié (le `sub` du JWT Dynamic). Porte le profil, l'XP, les succès et la série. | `accounts.id` (nouveau) |
| **Wallet lié** | Adresse EVM présente dans les `verified_credentials` du JWT Dynamic du compte. Ses paris comptent pour le compte. | `account_wallets` (nouveau) |
| **XP** | Points d'expérience entiers, jamais convertibles en argent, en crédit de pari ni en réduction de frais. Chaque crédit est une ligne du registre. | `gamification_ledger.xp` |
| **Registre** | Journal append-only de tous les crédits et annulations d'XP, idempotent par `ref_key`. | `gamification_ledger` |
| **Jour de Paris** | Date civile `YYYY-MM-DD` en Europe/Paris, heure d'été comprise. Base de tous les plafonds journaliers et de la série. | `parisDayOf(instant)` |
| **Niveau** | 1 à 60, dérivé de l'XP totale par la courbe du §4.1. | `gamification_profiles.level` |
| **Rang** | Tranche de niveaux (Rookie → Icon). Il donne le cadre par défaut et la couleur de la pastille. | `RankTier` |
| **Cadre** | Anneau décoratif autour de l'avatar : cadre de rang ou cadre spécial débloqué par un succès. Le joueur choisit parmi ceux qu'il possède. | `frameId` |
| **Titre** | Libellé court choisi par le joueur parmi ses titres débloqués, affiché sous le pseudo. | `titleId` |
| **Vitrine** | 1 à 3 paliers de succès épinglés, visibles sur la carte. Le nombre d'emplacements dépend du niveau. | `showcase` |
| **Succès** | Objectif à paliers d'une famille (exemple : *Winning Bets*). | `achievementId` |
| **Palier** | Seuil d'un succès (I à VIII). Il crédite de l'XP une seule fois et peut débloquer un titre ou un cadre. | `tier` (1 à 8) |
| **Série** | Nombre de jours de Paris consécutifs avec une connexion quotidienne. | `streak_current` |
| **Gel** | Protection consommée automatiquement pour un jour manqué ; la série est conservée sans progresser. 1 gel gagné tous les 7 jours de série, 2 au maximum en stock. | `streak_freezes` |
| **Pari qualifiant** | Ligne `bets` dont la mise vaut au moins 5 USDC. | `QUALIFYING_STAKE_USDC = 5` |
| **Volume compté** | Pour un compte et un marché : la plus forte somme de mises qualifiantes sur **une seule** issue. Pour un joueur qui ne se couvre pas, c'est exactement son volume total. | §3.9 |
| **Marché gagné** | Marché résolu où le compte a au moins 5 USDC de mises qualifiantes sur l'issue gagnante et un profit net strictement positif. | §3.3 |
| **Minute comptée** | Minute de visionnage authentifiée et unique par compte (§3.3), ou minute de stream avec au moins un spectateur authentifié (§3.3). | `gamification_watch_minutes`, `gamification_stream_minutes` |
| **Double XP** | Fenêtre créée dans l'admin pendant laquelle certaines sources non monétaires sont multipliées. | `gamification_double_xp_events` |

---

## 3. Règles exactes

### 3.1 Règles communes à toutes les sources

1. **Fuseau.** Tous les plafonds journaliers et la série utilisent le jour de Paris. Il est calculé dans le domaine par `parisDayOf(instant: Date): string` via `Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris' })`. Le cron du `JobScheduler` est en UTC et limité (CLAUDE.md §3.1bis) : aucun job ne dépend d'une heure locale.
2. **Horodatage de référence.**

   | Source | Horodatage |
   |---|---|
   | Pari | `bets.block_timestamp` |
   | Résolution | `market_events.block_timestamp` du `MarketResolved` |
   | Connexion, chat, visionnage | horloge serveur (`IClock.now()`) |
   | Stream | minute traitée |
   | Soutien | `donations.created_at` ou `subscriptions.created_at` |
3. **Idempotence.** Chaque crédit porte une `ref_key` unique (colonne `UNIQUE`). Un rejeu, un double clic, deux onglets ou une ré-indexation ne créent jamais de seconde ligne.
4. **Ordre de calcul.** On part de l'XP demandée, on applique le plafond journalier de la source (sur l'XP de base), **puis** le multiplicateur double XP. Un crédit au-delà du plafond est enregistré avec `xp = 0` et `reason = 'daily_cap'`, pour la traçabilité.
5. **Rattachement au compte.** Une action venant d'un wallet compte pour le compte qui possède ce wallet **au moment de l'action** : `linked_at ≤ t` et (`unlinked_at` nul ou `t < unlinked_at`). Sans compte, rien n'est crédité ni mis en attente.
6. **Lancement.** Rien de ce qui précède `GAMIFICATION_LAUNCH_AT` ne compte : ni les paris, ni les résolutions, ni les minutes, ni les cycles clos avant cette date.
7. **Bans et suspension.** Si **un** des wallets liés du compte a un ban actif (`IBanRepository.findActiveBan`), ou si le profil est suspendu (`gamification_profiles.suspended_at`), aucune XP n'est créditée. Les crédits automatiques sont enregistrés à 0 avec `reason = 'banned'` ou `'suspended'`, et la connexion du jour n'est pas comptée.
8. **Annulation.** On ne modifie ni ne supprime jamais une ligne du registre. Une annulation est une nouvelle ligne de `xp` négative (`reverses_id`, `ref_key = 'rev:' || ref_key`). Le niveau est recalculé et peut baisser, mais sans toast. Les paliers et titres déjà débloqués ne sont jamais retirés.
9. **Pas de crédit en attente.** Une action non créditée (plafond, ban, wallet non lié) n'est jamais reportée à plus tard.

### 3.2 Table des sources d'XP (valeurs finales)

| `source` | Libellé app (référence FR) | XP | Plafond (jour de Paris) | Double XP | Clé d'idempotence (`ref_key`) | Annulé par |
|---|---|---|---|---|---|---|
| `check_in` | Daily check-in (Connexion quotidienne) | `min(100, 50 + 5 × (s − 1))`, avec `s` = jour de série après la connexion | 1 par jour, 100 XP de base | **Oui** | `check_in:{accountId}:{day}` | — |
| `bet_volume` ⚠ | Bet volume (Volume misé) | 1 XP par USDC entier de **volume compté** (§3.9) | 1 000 XP | Non | `bet_volume:{chainId}:{txHash}:{logIndex}` | marché annulé |
| `bet_won` ⚠ | Winning bet (Pari gagnant) | 5 par marché gagné | 25 XP (5 marchés) | Non | `bet_won:{chainId}:{contract}:{marketId}:{accountId}` | — |
| `watch` | Watching (Visionnage) | 1 XP par tranche de 10 minutes comptées | 10 XP (100 min) | **Oui** | `watch:{accountId}:{day}:{n}`, avec `n` = rang de la tranche de 10 min | — |
| `chat_message` | Chat message (Message de chat) | 1 par message valide | 5 XP | **Oui** | `chat:{messageId}` | retrait par la modération |
| `follow` | Follow a streamer (Suivre un streamer) | 5 par streamer, une fois à vie | 15 XP | Non | `follow:{accountId}:{streamerId}` | — |
| `support` ⚠ | Streamer support (Soutien streamer) | 5 par streamer et par jour (don ou abonnement ≥ 1 USDC), montant ignoré | 10 XP | Non | `support:{accountId}:{streamerWallet}:{day}` | — |
| `stream_time` | Live streaming (Stream en direct) | 1 XP par tranche de 6 minutes comptées (10 XP/h) | 40 XP (4 h) | **Oui** | `stream_time:{streamId}:{n}` | `stop_stream` de la modération |
| `onboarding_step` | First steps (Premiers pas) | 5 par étape (6 étapes) | aucun (une fois par étape) | Non | `onboarding:{accountId}:{step}` | — |
| `achievement` | Achievement (Succès) | barème du §5 | aucun (une fois par palier) | Non | `achievement:{accountId}:{achievementId}:{tier}` | — |
| `admin_adjustment` | — (interne) | ± valeur saisie | — | Non | `admin:{auditLogId}` | — |

Tous les chiffres de la colonne XP sont des valeurs de base.

**Ordres de grandeur** (régime établi, hors succès) :

| Profil | XP par semaine |
|---|---|
| Connexion seule | 700 |
| Quotidien 10 USDC/j | 814 |
| Quotidien 50 USDC/j | 1 110 |
| Week-end 100 USDC/sem. | 242 |

Le détail par source est au §6.

### 3.3 Détail par source

#### `check_in` — Daily check-in (Connexion quotidienne)

- **Ce qui compte comme connexion.** Un appel `POST /gamification/check-in` **(nouveau)** porteur d'un JWT backend valide **contenant `accountId`**. Ce JWT n'est émis qu'après vérification du JWT Dynamic (§8.6). Aucun autre événement ne crédite la connexion : ni un JWT simplement émis, ni une requête quelconque, ni le WebSocket Realtime.
- **Déclencheur côté front.** Composant `GamificationAutoCheckIn` **(nouveau)**, monté à côté de `UserProfileAutoSync` dans `components/providers/DynamicProviderWrapper.tsx`. Il appelle la route dans quatre cas :
  - au montage, si une session authentifiée est active et que `document.visibilityState === 'visible'` ;
  - à chaque passage de l'onglet à `visible` ;
  - toutes les 30 minutes tant que l'onglet reste visible ;
  - toujours **sans** relance si l'onglet est caché.
- **Côté serveur.**
  - `day = parisDayOf(clock.now())`.
  - Le premier appel crédité du jour applique la série (§3.5), puis crédite l'XP.
  - Les appels suivants répondent `credited: false` avec l'état courant.
  - Limite métier via `IRateLimitService` : 1 traitement par minute et par compte. Le kill switch `RATE_LIMIT_DISABLED` ne la désactive pas.
- **Refus.** Ban actif ou profil suspendu : `credited: false, reason`, sans mise à jour de la série.

#### `bet_volume` — Bet volume (Volume misé) ⚠ juridique

- **Déclencheur.** Une nouvelle ligne `bets`, insérée par `PariMatchEventIndexer` sur `PositionTaken` au bloc sûr (head − 6). Elle est lue par `GamificationChainProcessorJob` **(nouveau)**, curseur sur `bets.id`.
- **Conditions.**
  - `block_timestamp ≥ GAMIFICATION_LAUNCH_AT` ;
  - wallet rattaché à un compte (§3.1 règle 5) ;
  - mise ≥ 5 USDC (§3.7) ;
  - marché non annulé au moment du traitement (pas de `MarketCancelled` dans `market_events`).
- **Calcul.** Il se fait en ordre de chaîne `(block_number, log_index)`, sur les seuls paris qualifiants du compte (tous wallets liés) pour ce `(contract_address, market_id)` :
  ```
  counted(set)   = max sur les issues o de Σ stake_amount(o)      // en USDC, décimales lues via getTokenDecimals
  delta_usdc     = floor(counted(avant ∪ ce pari)) − floor(counted(avant))
  requested_xp   = delta_usdc                                      // peut valoir 0 (couverture)
  ```
  Le pari est toujours inscrit au registre, même à 0 XP (`reason = 'hedge'`), parce qu'il fait avancer *Versatility* et *Globetrotter*.
  - `metadata` : `{ chainId, contract, marketId, marketKey, txHash, logIndex, deltaUsdc, marketKind, leagueId }`, avec `marketKey = '{chainId}:{contract}:{marketId}'` et `marketKind = '{marketType}:{line}'` lu dans le `MarketCreated` de `market_events`.
  - Progression : `bet_volume_usdc += deltaUsdc` (sans plafond journalier) ; `market_kinds ∪= marketKind` ; `leagues ∪= leagueId`, avec `leagueId = matches.league->>'id'` du match du contrat.
- **Jour du plafond.** `parisDayOf(bets.block_timestamp)`.
- **Annulation.** Sur `MarketCancelled` du marché, toutes les lignes `bet_volume` de `marketKey` avec `xp > 0` sont annulées (`reason = 'market_cancelled'`), et `bet_volume_usdc -= deltaUsdc`. L'XP annulée ne libère pas de place dans le plafond du jour.
- **Retardataires.** Une ligne `bets` rattrapée plus tard par le recouvrement de 120 blocs de l'indexeur est traitée à son tour, avec un `avant` calculé en ordre de chaîne. L'écart possible est borné par la mise de ce seul pari. On l'accepte.

#### `bet_won` — Winning bet (Pari gagnant) ⚠ juridique

- **Déclencheur.** Un `MarketResolved` dans `market_events` (payload `result`, `resolvedNetPool`), lu par `GamificationChainProcessorJob` avec un curseur `(block_number, log_index)` et un recouvrement de 200 blocs.
- **Calcul**, pour chaque compte ayant misé sur le marché (wallets liés au moment de chaque pari) :
  ```
  winningPool        = Σ bets.stake_amount du marché sur l'issue result (tous joueurs)
  qualifyingOnWinner = Σ mises ≥ 5 USDC du compte sur l'issue result
  payout             = Σ par wallet floor(stake_wallet(result) × resolvedNetPool / winningPool)
  totalStake         = Σ de toutes les mises du compte sur le marché (toutes issues, y compris < 5 USDC)
  gagné ⇔ qualifyingOnWinner ≥ 5 USDC  ET  payout > totalStake
  ```
  C'est la règle du contrat (`PariMatchBase._processClaim` : `payout > totalStake` → `recordProfit`), appliquée au compte. `bets.status = 'WON'` est fixé par ligne et ne suffit pas, à cause des couvertures.
- **Crédit.** 5 XP, plafond 25 XP par jour de Paris de la résolution. Progression `bets_won += 1`.
- Un seul crédit par marché et par compte, quel que soit le nombre de wallets.

#### `watch` — Watching (Visionnage)

- **Déclencheur.** `POST /gamification/watch-heartbeat` **(nouveau)** `{ matchId, streamId? }`. Le hook `useWatchHeartbeat` **(nouveau)**, monté dans `components/features/live/LivePage.tsx`, l'appelle toutes les 60 s si trois conditions sont réunies :
  - l'onglet est visible ;
  - le lecteur joue, ou aucun stream n'est sélectionné ;
  - 60 s se sont écoulées depuis l'arrivée sur la page (pas de crédit pour un simple passage).
- **Une minute est comptée si :**
  - le compte est authentifié avec un `accountId`, ni banni ni suspendu ;
  - le match est visible (`requireVisibleMatch`) ;
  - **et** soit le match est en jeu (`classifyStatus(match.status)` ∈ `live`, `blocked`, cf. `BettablePolicy`), soit `streamId` désigne une ligne `live_streams` au statut `live` sur ce match ;
  - le stream n'est pas celui du compte lui-même.
- **Unicité.** On insère `gamification_watch_minutes (account_id, minute)` avec `minute = date_trunc('minute', now)`. Plusieurs onglets ou matchs donnent **une** minute par compte.
- **Crédit.** Le compteur du jour `minutes:watch` est incrémenté. Quand il atteint un multiple de 10 (jusqu'à 100), on crédite 1 XP avec `n = compteur / 10`.
- **Progression.**
  - `watch_minutes += 1`, plafonné à 240 min par jour pour les succès.
  - `leagues ∪= leagueId` quand le compteur `minutes:league:{id}` du jour atteint 10.
  - Étape `onboarding:watch` dès 5 minutes cumulées.
- `PUT /stream/:streamId/viewers`, `POST /stream/:id/join` et `viewer_sessions` ne sont **jamais** lus (anonymes et falsifiables, §14).

#### `chat_message` — Chat message (Message de chat)

- **Déclencheur.** Après `chatRepository.saveMessage` dans `application/chat/use-cases/SendMessageUseCase.ts`, appel à `RecordChatXpUseCase` **(nouveau)** avec `accountId` (du JWT), `messageId`, le texte et `createdAt`. Ce crédit est enveloppé : une erreur de gamification ne fait jamais échouer l'envoi (log `warn`).
- **Message valide** :
  - `message_type = 'message'` ;
  - longueur après `trim` ≥ 4 caractères, dont au moins 2 lettres ou chiffres (`/[\p{L}\p{N}]/gu`) ;
  - différent du dernier message crédité du compte dans les 24 h. La comparaison porte sur le `sha256` du texte normalisé (minuscules, espaces réduits), stocké dans `metadata.textHash`, jamais le texte ;
  - au moins 20 s depuis le dernier message crédité.
- **Crédit.** 1 XP, plafond 5 XP. Progression `chat_messages += 1`, plafonnée à 50 par jour. Étape `onboarding:chat` au premier message valide.
- **Annulation.** Quand `chat_messages.removed_at` est posé (soft-delete de la modération), le job annule `chat:{messageId}` et décrémente `chat_messages`. Une action de modération elle-même annulée ensuite (`report_actions.reversed_at`) ne recrédite pas au MVP.

#### `follow` — Follow a streamer (Suivre un streamer)

- **Déclencheur.** Après succès de `FollowStreamerUseCase`. **Prérequis** : `followerId` est forcé à `dynamicUserId` du JWT (aujourd'hui il vient du body, §14).
- **Conditions.** Une seule fois par couple (compte, `streamerId`) à vie : se désabonner puis se réabonner ne recrédite pas. Pas de crédit si le streamer est le compte lui-même.
- **Crédit.** 5 XP, plafond 15 XP. Progression `streamers_followed ∪= streamerId`. Étape `onboarding:follow`.

#### `support` — Streamer support (Soutien streamer) ⚠ juridique

- **Déclencheur.** Nouvelles lignes `donations` (`donor_address`) et `subscriptions` (`subscriber_address`) insérées par `StreamWalletIndexer`. Elles sont lues par `GamificationChainProcessorJob`, curseur sur `created_at` avec 10 min de recouvrement.
- **Conditions.**
  - `amount ≥ 1` (colonne déjà en USDC décimal) ;
  - donateur rattaché à un compte ;
  - le compte du donateur est différent de celui du streamer (`streamer_address` → `account_wallets`) ;
  - une seule fois par (compte, streamer, jour), dons et abonnements confondus.
- **Crédit.** 5 XP, plafond 10 XP. Le montant est ignoré. Progression `support_actions += 1`.

#### `stream_time` — Live streaming (Stream en direct)

- **Sessions.** `GamificationStreamMinutesJob` **(nouveau)**, toutes les 60 s, réconcilie `gamification_stream_sessions` avec `live_streams` :
  - toute ligne `status = 'live'` sans session crée une session, avec `went_live_at` = maintenant (précision ±60 s) ;
  - toute session ouverte dont la ligne n'est plus `live`, ou a été supprimée, est fermée (`ended_at = live_streams.ended_at` ou maintenant).

  Aucun branchement n'est donc nécessaire dans les cinq chemins de fin de stream (webhook CF, beacon, `DELETE /stream`, `StaleStreamCleanupJob`, modération).
- **Minute comptée**, traitée avec 2 minutes de retard pour laisser arriver les heartbeats :
  - la session est ouverte à cette minute, et son compte (`streamer_wallet` → `account_wallets`) n'est ni banni ni suspendu ;
  - **et** soit au moins une minute `gamification_watch_minutes` porte ce `stream_id` à cette minute, pour un compte différent du streamer, créé il y a plus de 24 h et non banni ;
  - soit l'**exemption** joue : les 60 premières minutes comptées à vie du streamer ne demandent pas de spectateur.
- **Crédit.** On insère `gamification_stream_minutes`. Chaque 6e minute comptée de la session crédite 1 XP, plafond 40 XP. Progression `stream_minutes += 1`, plafonnée à 360 par jour pour les succès.
- **Annulation.** Un `report_actions.kind = 'stop_stream'` avec `affected_stream_id` = session pose `moderated_at`, annule toutes les lignes `stream_time` de la session et retire ses minutes de `stream_minutes`.
- **Prérequis.** `POST /stream` authentifié, identité prise dans le JWT (§14).

#### `onboarding_step` — First steps (Premiers pas)

Six étapes à 5 XP chacune, une seule fois chacune :

| Étape | Déclencheur |
|---|---|
| `username` | `POST /users/profile` avec un pseudo non vide (`UpsertUserProfileUseCase`) |
| `avatar` | `POST /users/avatar` réussi |
| `watch` | 5 minutes comptées |
| `chat` | 1er message valide |
| `follow` | 1er suivi |
| `streak3` | série de 3 jours |

Aucune étape ne demande de miser. Le succès `first_steps` se débloque à 5 étapes sur 6 (§5).

#### `achievement` — Achievement (Succès)

Après chaque crédit qui modifie un compteur, `EvaluateAchievementsUseCase` compare les compteurs au catalogue. Pour chaque palier atteint :
- insertion dans `gamification_achievements` (`ON CONFLICT DO NOTHING`) ;
- crédit de l'XP du palier ;
- notification in-app.

Plusieurs paliers peuvent tomber d'un coup. Le succès `founder` est réévalué après chaque montée de niveau.

### 3.4 Définition précise de la connexion quotidienne

> Un **jour de connexion** est un jour de Paris `D` pour lequel il existe une ligne `gamification_ledger` de `source = 'check_in'` et `ref_key = 'check_in:{accountId}:{D}'` dont `reason` n'est ni `banned` ni `suspended`.
> Elle est créée par le premier `POST /gamification/check-in` du jour, authentifié par un JWT backend contenant `accountId`. Ce JWT a été émis après vérification RS256 du JWT Dynamic de la session, qui prouve la possession du wallet.

- Ouvrir l'app connecté suffit : il n'y a rien à miser ni à regarder.
- Le JWT backend reste valable 24 h (`JWT_EXPIRY = '24h'`). Une session ouverte la veille et encore active compte donc le lendemain dès que l'onglet redevient visible.
- Un script disposant d'un JWT valide peut se connecter chaque jour. On l'accepte : le gain se limite à du statut, il demande un compte Dynamic réel, et les titres rares exigent d'autres actions (§10).

### 3.5 Série quotidienne et gel

**État** (`gamification_profiles`) : `streak_current`, `streak_best`, `streak_last_day` (date de Paris), `streak_freezes` (0 à 2).

**Application d'une connexion le jour `D`** (fonction pure `applyCheckIn(state, D)` dans `packages/domain/src/gamification/policies/streakPolicy.ts`) :
```
si last_day = D                        → rien (déjà compté)
sinon si last_day = null               → current = 1
sinon si last_day = D − 1              → current += 1
sinon                                   // missed = D − last_day − 1 jours manqués
    si missed ≤ freezes                → freezes −= missed ; current += 1 ; notification 'streak_freeze_used' (missed)
    sinon                              → current = 1                     // les gels ne sont PAS consommés
best = max(best, current) ; last_day = D
si current % 7 = 0 et freezes < 2      → freezes += 1 ; notification 'streak_freeze_earned'
XP de connexion = min(100, 50 + 5 × (current − 1))
```

**Exemples**

| Situation | Effet |
|---|---|
| Jours 1 à 10 | 50, 55, …, 95 XP |
| Jour 11 et suivants | 100 XP |
| Jour 7 de série | +1 gel |
| Jour 14 | +1 gel (2 en stock) |
| Jour 21 | pas de gel en plus (stock plein) |
| Série de 12, 1 jour manqué, 1 gel | série 13 au retour, 0 gel |
| Série de 12, 2 jours manqués, 1 gel | série 1 au retour, le gel reste |

**Affichage pour les autres** (fonction pure `effectiveStreak(state, today)`, sans job) :
- `gap = today − last_day` ;
- si `gap ≤ 1`, la série est vivante et vaut `current` ;
- si `gap ≥ 2` et `gap − 1 ≤ freezes`, elle est vivante (protégée) et vaut `current` ;
- sinon, elle vaut 0 et la meilleure série reste affichée.

La consommation réelle des gels se fait à la connexion suivante.

**Concurrence.** La mise à jour de la série passe par un compare-and-set sur `streak_last_day` dans la fonction SQL `gamification_check_in` (§7). Deux onglets ne comptent qu'une fois.

**Garde-fous** ⚠ juridique
- La série ne demande **jamais** de miser.
- Aucune notification « série en danger ». Le push n'existe pas, et la connexion étant automatique à l'ouverture, l'app n'affiche jamais d'état « à risque » au joueur.
- Le gel est automatique (pas d'achat, pas de monnaie).
- Un jour de ban est un jour manqué, et les gels s'appliquent normalement.

### 3.6 Double XP (Double XP) ⚠ juridique

- **Création.** Uniquement depuis `apps/admin` (rôle `admin` et plus). Une ligne `gamification_double_xp_events` : `name`, `multiplier`, `sources`, `starts_at`, `ends_at`. Chaque action est auditée dans `audit_log` (`gamification.double_xp.create`, `gamification.double_xp.cancel`).
- **Sources multipliables, défaut prudent** : `check_in`, `watch`, `chat_message`, `stream_time`. **Jamais** `bet_volume`, `bet_won`, `support`, `follow`, `onboarding_step`, `achievement`.
  - Le périmètre est figé par un `CHECK` SQL : l'élargir demande une migration, exprès.
  - Le DTO Zod admin le refuse aussi (400).
- **Garde-fous** (domaine `doubleXpPolicy.ts`, revérifiés par le use case) :

  | Garde-fou | Valeur |
  |---|---|
  | Multiplicateur | entre 1,00 (exclu) et 2,00 (inclus), pas de 0,25 |
  | Durée | 72 h au maximum |
  | Préavis | `starts_at ≥ now + 24 h` (`DOUBLE_XP_MIN_NOTICE_HOURS`), pour annoncer l'événement dans l'app |
  | Fréquence | 4 événements au plus par mois civil (Paris) |
  | Chevauchement | aucun (contrainte d'exclusion) |
  | Annulation | possible à tout moment ; sans effet rétroactif sur l'XP déjà créditée |
- **Application.**
  - Un crédit de la source `s`, horodaté `t`, prend le multiplicateur de l'événement non annulé tel que `starts_at ≤ t < ends_at` et `s ∈ sources`.
  - Calcul : `xp = floor(min(requested, cap_restant) × multiplier)`, le plafond s'appliquant à l'XP de base. En ×2, la connexion du jour 11 rapporte donc 200 XP, et le chat 10 XP au plus.
- **Affichage.** Bannière in-app `DoubleXpBanner` dès que l'événement est connu, au plus tôt 7 jours avant, avec un texte explicite : *« Check-in, watching, chat and streaming earn ×2. Bets are not boosted. »*
- **Hors tableau de progression** : les événements sont exceptionnels et ne sont pas comptés au §6.

### 3.7 Règle des 5 USDC

- `QUALIFYING_STAKE_USDC = 5` (constante du domaine). La comparaison se fait **par ligne `bets`** (un événement `PositionTaken`), sur `stake_amount` converti avec les décimales USDC lues on-chain ou en cache (`getTokenDecimals`). Jamais un `1e6` codé en dur (CLAUDE.md §7.5).
- Un pari via CHZ ou fan token est jugé sur sa mise USDC après swap (c'est ce que porte `PositionTaken.stake`).
- Un pari sous 5 USDC ne rapporte ni XP de volume, ni progression *Versatility*, *Globetrotter* ou *Bet Volume*, et ne qualifie pas un marché gagné.
- Il **reste** dans le calcul du profit net du marché (§3.3 `bet_won`), pour qu'une petite couverture ne transforme pas une perte en victoire.
- Le minimum on-chain reste `MIN_STAKE = 10_000` (0,01 USDC). La règle est purement off-chain.

### 3.8 Marchés annulés

- `MarketCancelled`, y compris l'annulation automatique quand l'issue gagnante n'a aucune mise et l'opération admin `cancel_markets` : toutes les lignes `bet_volume` du marché sont annulées. Le compteur `bet_volume_usdc` est décrémenté ; `market_kinds` et `leagues` ne sont pas retirés.
- Un marché annulé n'émet pas de `MarketResolved` : aucun `bet_won` n'est possible.
- Un pari traité après l'annulation est ignoré (contrôle sur `market_events`).
- Remboursements (`StakeRefunded`) : aucun effet.

### 3.9 Couverture des deux issues d'un même marché

- **Volume.** Le volume compté d'un marché est la **plus forte** somme de mises sur une seule issue, et non la somme sur toutes les issues :
  - 30 USDC sur Home puis 30 sur Away : 30 XP au total (la seconde mise est inscrite à 0 XP, `reason = 'hedge'`) ;
  - 30 Home puis 50 Away : 50 XP (30 + 20) ;
  - 1X2 couvert 3 × 500 : 500 XP, pour 30 USDC de frais.
- **Victoire.** La couverture n'est gagnante que si le profit net du compte sur le marché est positif. Une couverture proportionnelle à la pool perd les frais et ne compte donc pas.
- **Couvertures entre marchés liés** (par exemple `WINNER` Home et `DOUBLE_CHANCE` X2) : elles ne sont pas détectées au MVP. Le plafond de 1 000 XP par jour borne le gain. Itération 2 : scan d'abus (§10.3).

### 3.10 Paris entre ses propres wallets

- **Wallets liés au même compte.** Tout est agrégé par compte (§3.1 règle 5). Miser Home avec le wallet A et Away avec le wallet B est une couverture au sens du §3.9 : le volume compte une seule issue et la victoire se juge sur le net du compte.
- **Wallets non liés (multi-comptes)** : deux comptes Dynamic distincts. Sans KYC (décision 13), ils ne sont pas détectables à coup sûr. Chaque compte gagne son volume et paie les frais de pari-mutuel (2 % par défaut) ; seul l'un gagne. Parades au MVP : plafonds journaliers, minimum de 5 USDC, suspension manuelle (§10). Itération 2 : heuristique des paires de comptes qui prennent des issues opposées du même marché à moins de 10 minutes d'écart, de façon répétée, envoyée en revue dans *Admin › Players*, jamais sanctionnée automatiquement.

---

## 4. Courbe de niveaux, rangs, cadres, titres, vitrine

### 4.1 Courbe

- XP cumulée pour atteindre le niveau `L` : **`XP(L) = 50 × L × (L − 1)`**. Passer de `L` à `L + 1` coûte `100 × L`.
- Niveau à partir de l'XP : le plus grand `L ≤ 60` tel que `50 × L × (L − 1) ≤ xp`, en arithmétique entière. On n'utilise pas de racine carrée flottante. SQL : `gamification_level_of(xp)`. Domaine : `levelOf(xp)`.
- Au niveau 60, l'XP continue de s'accumuler (`xp_total`, en vue d'un prestige futur). La jauge affiche *Max level*.

| Niveau | XP cumulée | Pour le suivant | Niveau | XP cumulée | Pour le suivant |
|---|---|---|---|---|---|
| 1 | 0 | 100 | 15 | 10 500 | 1 500 |
| 2 | 100 | 200 | 20 | 19 000 | 2 000 |
| 3 | 300 | 300 | 25 | 30 000 | 2 500 |
| 4 | 600 | 400 | 30 | 43 500 | 3 000 |
| 5 | 1 000 | 500 | 35 | 59 500 | 3 500 |
| 6 | 1 500 | 600 | 40 | 78 000 | 4 000 |
| 7 | 2 100 | 700 | 45 | 99 000 | 4 500 |
| 8 | 2 800 | 800 | 50 | 122 500 | 5 000 |
| 9 | 3 600 | 900 | 55 | 148 500 | 5 500 |
| 10 | 4 500 | 1 000 | 60 | 177 000 | — (max) |

### 4.2 Rangs et cadres de rang

Couleurs tirées du CLAUDE.md §5 (`#3A3A3A` border-hover, `#F5C518` gold, `#E8001D` accent-red, `#FF1737` red-hover, `#B0001A` red-dark, `#fff`) et des médailles de `components/features/leaderboard/domain/medals.ts` (bronze `#C8794B`, argent `#D8D8DC`).

| `RankTier` | Libellé (FR) | Niveaux | Couleur de la pastille | Rendu du cadre `frame.rank.<tier>` |
|---|---|---|---|---|
| `rookie` | Rookie (Recrue) | 1–4 | `#3A3A3A`, texte `rgba(255,255,255,0.65)` | anneau plein 2 px |
| `starter` | Starter (Titulaire) | 5–14 | `#C8794B` | anneau 2 px |
| `seasoned` | Seasoned (Confirmé) | 15–24 | `#D8D8DC` | anneau 2 px + anneau extérieur 1 px `rgba(216,216,220,0.55)` |
| `captain` | Captain (Capitaine) | 25–34 | `#F5C518` | anneau 3 px + halo `0 0 18px rgba(245,197,24,0.35)` |
| `international` | International (International) | 35–44 | `#E8001D`, texte `#FF1737` | anneau 3 px + halo `0 0 22px rgba(232,0,29,0.55)` |
| `legend` | Legend (Légende) | 45–59 | dégradé `#E8001D → #F5C518` | dégradé conique `#E8001D, #F5C518, #E8001D, #B0001A`, rotation 12 s |
| `icon` | Icon (Icône) | 60 | `#FFFFFF` | dégradé conique `#E8001D, #F5C518, #FFFFFF`, rotation 18 s, anneau extérieur pointillé `rgba(245,197,24,0.75)` |

- Les animations sont coupées par `@media (prefers-reduced-motion: reduce)` (CLAUDE.md §4.4).
- La **pastille de niveau** montre toujours le niveau dans la couleur du rang, quel que soit le cadre porté.
- Le joueur peut porter le cadre de son rang ou de n'importe quel rang inférieur déjà atteint.

### 4.3 Cadres spéciaux

| `frameId` | Libellé (FR) | Débloqué par | Rendu | Durée |
|---|---|---|---|---|
| `frame.podium.gold` / `.silver` / `.bronze` | Podium (Podium) | 1er, 2e ou 3e d'un cycle (succès *Leaderboard* IV) ; la meilleure place obtenue fixe la couleur | anneau 4 px en `repeating-conic-gradient` de la médaille, mention *Cycle N* au survol | permanent |
| `frame.crown` | Crown (Couronne) | 1er du **dernier** cycle clos | anneau 3 px `#F5C518`, halo `0 0 22px rgba(245,197,24,0.5)`, icône couronne au-dessus de l'avatar | jusqu'à la clôture du cycle suivant |
| `frame.antenna.bronze` → `.icon` | Antenna (Antenne) | *Streamed Hours* II (10 h) bronze, III (50 h) argent, IV (150 h) rouge, V (300 h) légende, VI (1 000 h) icône | anneau 3 px + anneau pointillé extérieur, couleur du palier | permanent ; le joueur porte le plus haut |
| `frame.founder` | Founder (Fondateur) | succès `founder` | `repeating-conic-gradient(#E8001D 0 20deg, #FFFFFF 20deg 23deg)` | permanent |

Le cadre *Visionnaire* (contre-pied) et les cadres de pic de spectateurs sont retirés.

### 4.4 Titres

Clé de traduction : `gamification.title.<titleId>`. Libellés EN au lancement, FR = référence de traduction.

| `titleId` | Titre (FR) | Débloqué par |
|---|---|---|
| `new_recruit` | New Recruit (Nouvelle recrue) | `first_steps` |
| `regular` | Regular (Habitué) | `daily_streak` II (7 jours) |
| `faithful` | Faithful (Fidèle) | `daily_streak` IV (30 jours) |
| `unbreakable` | Unbreakable (Increvable) | `daily_streak` VI (100 jours) |
| `full_season` | Full Season (Saison complète) | `daily_streak` VIII (365 jours) |
| `striker` | Striker (Buteur) | `winning_bets` II |
| `finisher` | Finisher (Finisseur) | `winning_bets` III |
| `fox_in_the_box` | Fox in the Box (Renard des surfaces) | `winning_bets` IV |
| `goleador` | Goleador (Goleador) | `winning_bets` V |
| `winning_machine` | Winning Machine (Machine à gagner) | `winning_bets` VI |
| `prediction_legend` | Prediction Legend (Légende du pronostic) | `winning_bets` VII |
| `curious` | Curious (Curieux) | `versatility` I |
| `versatile` | Versatile (Polyvalent) | `versatility` II |
| `swiss_army_knife` | Swiss Army Knife (Couteau suisse) | `versatility` III |
| `encyclopedia` | Encyclopedia (Encyclopédie) | `versatility` IV |
| `traveller` | Traveller (Voyageur) | `globetrotter` II |
| `globetrotter` | Globetrotter (Globe-trotter) | `globetrotter` III |
| `citizen_of_the_world` | Citizen of the World (Citoyen du monde) | `globetrotter` IV |
| `contender` | Contender (Prétendant) | `leaderboard` III (top 10) |
| `podium` | Podium (Podium) | `leaderboard` IV (top 3) |
| `cycle_champion` | Champion · Cycle N (Champion du cycle N) | `leaderboard` V (1er), avec le dernier cycle gagné |
| `spectator` | Spectator (Spectateur) | `spectator` I |
| `in_the_stands` | In the Stands (Tribune) | `spectator` II |
| `kop` | Kop (Kop) | `spectator` III |
| `ultra` | Ultra (Ultra) | `spectator` IV |
| `season_ticket` | Season Ticket (Abonné à vie) | `spectator` V |
| `club_memory` | Club Memory (Mémoire du club) | `spectator` VI |
| `cheerleader` | Cheerleader (Ambianceur) | `chatter` III |
| `voice_of_the_kop` | Voice of the Kop (Voix du kop) | `chatter` IV |
| `stadium_announcer` | Stadium Announcer (Speaker du stade) | `chatter` V |
| `studio_regular` | Studio Regular (Fidèle des plateaux) | `streamers_followed` III |
| `patron` | Patron (Mécène) | `supporter` III |
| `benefactor` | Benefactor (Bienfaiteur) | `supporter` IV |
| `mic_on` | Mic On (Micro ouvert) | `streamer_hours` I |
| `pundit` | Pundit (Consultant) | `streamer_hours` II |
| `commentator` | Commentator (Commentateur) | `streamer_hours` III |
| `voice_of_the_match` | Voice of the Match (Voix du match) | `streamer_hours` IV |
| `live_legend` | Live Legend (Légende du direct) | `streamer_hours` V |
| `monument` | Monument (Monument) | `streamer_hours` VI |
| `founder` | Founder (Fondateur) | `founder` |
| `club_stalwart` | Club Stalwart (Taulier) | niveau 30 |
| `dressing_room_legend` | Dressing-Room Legend (Légende du vestiaire) | niveau 50 |
| `club_icon` | Club Icon (Icône du club) | niveau 60 |

Le volume misé ne donne **aucun** titre (§5, visibilité privée).

### 4.5 Vitrine et déblocages par niveau

| Niveau | Déblocage |
|---|---|
| 1 | Rang *Rookie*, vitrine 1 emplacement |
| 5 | Rang *Starter* (cadre bronze) ; vérification de `founder` |
| 10 | Vitrine 2 emplacements |
| 15 | Rang *Seasoned* |
| 20 | Vitrine 3 emplacements |
| 25 | Rang *Captain* |
| 30 | Titre *Club Stalwart* |
| 35 | Rang *International* |
| 45 | Rang *Legend* (cadre animé) |
| 50 | Titre *Dressing-Room Legend* |
| 60 | Rang *Icon*, titre *Club Icon* |

**Règles de sélection** (fonctions pures `ownedTitles`, `ownedFrames`, `showcaseSlots`, `defaultShowcase`)

- **Titre.** `null` ou un titre possédé. Par défaut, aucun titre : la carte affiche le rang.
- **Cadre.** Un cadre possédé. Par défaut, le cadre du rang courant. Si le cadre choisi n'est plus possédé (fin de *Crown*), la lecture retombe sur le cadre du rang, sans modifier la base.
- **Vitrine.** Liste ordonnée de `"{achievementId}:{tier}"` possédés et **publics**, de longueur ≤ `showcaseSlots(level)`. Si elle est vide, la carte affiche `defaultShowcase` : les paliers publics les plus hauts, à raison d'un par famille.

---

## 5. Catalogue des succès du MVP

**Barème standard par palier** : I = 10 · II = 25 · III = 50 · IV = 100 · V = 200 · VI = 350 · VII = 500 · VIII = 750 XP.

**Couleur de tuile par palier** : I bronze `#C8794B` · II argent `#D8D8DC` · III or `#F5C518` · IV rouge `#FF1737` · V Légende (rouge → or) · VI et plus Icône (blanc sur rouge et or).

**Clés de traduction** : `gamification.achievement.<achievementId>.name`, `.tier.<n>`, `.description`.

**Catalogue en code** : `packages/domain/src/gamification/catalog/achievements.ts` **(nouveau)**, versionné, partagé avec le front (le front importe déjà `@chiliztv/domain`). La base ne stocke que les déblocages.

| `achievementId` | Nom app (FR) | Famille | Paliers (seuils) | Condition exacte | XP par palier | Titre / cadre | Donnée source | Visibilité |
|---|---|---|---|---|---|---|---|---|
| `first_steps` | First Steps (Premiers pas) | Activation | unique : 5 étapes sur 6 | `progress.first_steps.items` contient au moins 5 des étapes `username`, `avatar`, `watch`, `chat`, `follow`, `streak3` | 25 | `new_recruit` | `users` (014) via les use cases users, minutes, chat, follows, série | publique |
| `daily_streak` | Daily Streak (Série quotidienne) | Régularité | 3 · 7 · 14 · 30 · 60 · 100 · 200 · 365 jours | `streak_best ≥ seuil` | I → VIII | II `regular`, IV `faithful`, VI `unbreakable`, VIII `full_season` | `gamification_profiles` | publique |
| `winning_bets` ⚠ | Winning Bets (Paris gagnants) | Paris | 1 · 10 · 50 · 150 · 500 · 1 000 · 2 500 | `progress.bets_won ≥ seuil`, marché gagné au sens du §3.3 | I → VII | II `striker`, III `finisher`, IV `fox_in_the_box`, V `goleador`, VI `winning_machine`, VII `prediction_legend` | `bets` (022) + `market_events.MarketResolved` (011) | publique (nombre, jamais de montant) |
| `bet_volume` ⚠ | Bet Volume (Volume misé) | Paris | 50 · 250 · 1 000 · 5 000 · 25 000 · 100 000 USDC | `progress.bet_volume_usdc ≥ seuil`, volume compté net des annulations | **10 par palier** (sous le barème) | aucun | `bets` (022) | **privée** : visible du seul propriétaire (dashboard), jamais en vitrine ni sur la carte ou le profil public |
| `versatility` ⚠ | Versatility (Polyvalence) | Exploration | 3 · 5 · 7 · catalogue complet (9 aujourd'hui) | `cardinality(progress.market_kinds.items) ≥ seuil` ; `marketKind = '{marketType}:{line}'` d'un pari qualifiant sur un marché non annulé ; le seuil IV = `getDefaultFootballMarkets({ isKnockout: true }).length` | I → IV | I `curious`, II `versatile`, III `swiss_army_knife`, IV `encyclopedia` | `market_events.MarketCreated` (payload `marketType`, `line`) | publique |
| `globetrotter` | Globetrotter (Globe-trotter) | Exploration | 2 · 5 · 10 · 20 compétitions | `cardinality(progress.leagues.items) ≥ seuil` ; une compétition (`matches.league->>'id'`) compte après un pari qualifiant sur un de ses matchs **ou** 10 minutes comptées le même jour sur un de ses matchs | I → IV | II `traveller`, III `globetrotter`, IV `citizen_of_the_world` | `matches.league` (JSONB `{id, name, logo, country}`, 002), minutes, paris | publique |
| `leaderboard` ⚠ | Leaderboard (Classement) | Compétition | top 100 · top 50 · top 10 · top 3 · 1er d'un cycle de 30 jours | meilleur rang, parmi les wallets du compte, dans `gamification_cycle_ranks` d'un cycle clos après le lancement, avec un score > 0 ; XP **une fois par palier à vie**, cosmétiques par cycle | I → V | III `contender`, IV `podium` + `frame.podium.*`, V `cycle_champion` + `frame.crown` | `leaderboard_cycle_scores` (029) + `leaderboard_epochs` (024, `EpochAdvanced`) | publique |
| `spectator` | Spectator (Spectateur) | Présence | 1 · 10 · 50 · 150 · 500 · 1 000 h | `progress.watch_minutes / 60 ≥ seuil` (240 min comptées par jour au plus) | I → VI | I `spectator`, II `in_the_stands`, III `kop`, IV `ultra`, V `season_ticket`, VI `club_memory` | `gamification_watch_minutes` | publique |
| `chatter` | Chatter (Ambianceur) | Communauté | 10 · 100 · 500 · 2 000 · 10 000 messages | `progress.chat_messages ≥ seuil` ; messages valides non retirés, 50 par jour au plus | I → V | III `cheerleader`, IV `voice_of_the_kop`, V `stadium_announcer` | `chat_messages` (000, 009, 036 `removed_at`) | publique |
| `streamers_followed` | Followed Streamers (Streamers suivis) | Communauté | 1 · 5 · 20 | `cardinality(progress.streamers_followed.items) ≥ seuil`, streamers distincts à vie | I → III | III `studio_regular` | `streamer_follows` (003) via `FollowStreamerUseCase` | publique |
| `supporter` ⚠ | Supporter (Soutien) | Communauté | 1 · 5 · 20 · 50 actions | `progress.support_actions ≥ seuil` ; au plus une par streamer et par jour, ≥ 1 USDC, montant ignoré | I → IV | III `patron`, IV `benefactor` | `donations`, `subscriptions` (000, 011) | publique |
| `streamer_hours` | Streamed Hours (Heures streamées) | Streamer | 1 · 10 · 50 · 150 · 300 · 1 000 h | `progress.stream_minutes / 60 ≥ seuil` (minutes comptées §3.3, nettes des `stop_stream`) | I → VI | I `mic_on`, II `pundit` + antenne bronze, III `commentator` + argent, IV `voice_of_the_match` + rouge, V `live_legend` + légende, VI `monument` + icône | `gamification_stream_sessions` / `_minutes` (nouveau) | publique |
| `founder` | Founder (Fondateur) | Lancement | unique | niveau ≥ 5 atteint avant `GAMIFICATION_LAUNCH_AT + 60 jours` (`FOUNDER_WINDOW_DAYS = 60`) | 0 (cosmétique) | `founder` + `frame.founder` | `gamification_profiles.level` | publique |

**XP totale disponible par famille** : `first_steps` 55 (étapes comprises) · `daily_streak` 1 985 · `winning_bets` 1 235 · `bet_volume` 60 · `versatility` 185 · `globetrotter` 185 · `leaderboard` 385 · `spectator` 735 · `chatter` 385 · `streamers_followed` 85 · `supporter` 185 · `streamer_hours` 735.

Cela fait environ 5 500 XP pour un joueur et 6 200 pour un streamer, soit environ 3 % des 177 000 XP du niveau 60. Les succès donnent surtout du rythme au début (activation) et du statut, pas de la vitesse sur la durée.

**Exclus par principe** : tout succès sur les défaites, l'heure tardive, la taille d'une mise isolée, une série de victoires ou la remise en jeu après une perte.

---

## 6. Tableau de progression recalculé

### 6.1 Méthode

- **Simulation jour par jour** (jour 1 = lundi), avec les valeurs du §3.2 et du §5, les plafonds et l'ordre plafond puis multiplicateur.
- **Base** = connexion + volume, soit le calibrage validé de `00-decisions.md`, qu'on retrouve exactement : connexion seule niveau 5 en 13 j, 20 en 6,3 mois, 60 en 4,9 ans ; 50 USDC/j niveau 20 en 4,2 mois, 60 en 3,2 ans et 59 100 USDC.
- **Final** = base + toutes les autres sources + succès.
- **Accélération** = `1 − délai final / délai base`. Contrainte : ≤ 25 % pour chaque profil et à chaque niveau. Le maximum observé est de **23 %** (week-end, niveaux 5 et 10).
- **Non inclus** : double XP, classement (+385 XP à vie au plus), streaming.

### 6.2 Profils

| Profil | Connexion | Paris (≥ 5 USDC) | Autres actions | Gagnés |
|---|---|---|---|---|
| **Connexion seule** | chaque jour | aucun | aucune (seule l'étape `streak3`) | — |
| **Quotidien 10 USDC/j** | chaque jour | 1 marché par jour à 10 USDC ; un nouveau type de marché par semaine | samedi et dimanche : 90 min de match regardées et 5 messages ; suit 5 streamers le 1er mois ; 1 don par mois ; une nouvelle compétition toutes les 2 semaines ; pseudo et avatar le jour 1 | 45 % des marchés |
| **Quotidien 50 USDC/j** | chaque jour | 2 marchés par jour à 25 USDC | comme le précédent | 45 % |
| **Week-end 100 USDC/sem.** | samedi et dimanche seulement (série de 2 jours au plus, jamais de gel) | 2 marchés à 25 USDC le samedi et le dimanche | 90 min regardées et 5 messages chaque jour joué ; 1 suivi par semaine le 1er mois ; 1 don par mois | 45 % |

### 6.3 Résultat

Format des cellules : **délai final** (délai base, accélération) · USDC misés cumulés.

| Niveau (XP cumulée) | Connexion seule | Quotidien 10 USDC/j | Quotidien 50 USDC/j | Week-end 100 USDC/sem. |
|---|---|---|---|---|
| **5** (1 000) | **13 j** (13 j, −0 %) | **10 j** (12 j, −17 %) · 100 USDC | **7 j** (9 j, −22 %) · 350 USDC | **27 j** (35 j, −23 %) · 350 USDC |
| **10** (4 500) | **46 j** (48 j, −4 %) | **37 j** (44 j, −16 %) · 370 USDC | **28 j** (32 j, −12 %) · 1 400 USDC | **3,9 mois** (5,1 mois, −23 %) · 1 650 USDC |
| **15** (10 500) | **3,3 mois** (3,5 mois, −6 %) | **2,8 mois** (3,2 mois, −12 %) · 860 USDC | **2,1 mois** (2,4 mois, −12 %) · 3 150 USDC | **9,4 mois** (11,9 mois, −21 %) · 4 050 USDC |
| **20** (19 000) | **6,1 mois** (6,3 mois, −4 %) | **5,1 mois** (5,8 mois, −12 %) · 1 540 USDC | **3,7 mois** (4,2 mois, −12 %) · 5 700 USDC | **17,2 mois** (21,4 mois, −20 %) · 7 450 USDC |
| **30** (43 500) | **13,7 mois** (14,4 mois, −5 %) | **11,7 mois** (13,1 mois, −10 %) · 3 570 USDC | **8,6 mois** (9,6 mois, −10 %) · 13 150 USDC | **3,3 ans** (4,1 ans, −18 %) · 17 400 USDC |
| **45** (99 000) | **2,7 ans** (2,7 ans, −2 %) | **2,3 ans** (2,5 ans, −8 %) · 8 270 USDC | **19,9 mois** (21,7 mois, −8 %) · 30 300 USDC | **7,6 ans** (9,3 ans, −17 %) · 39 900 USDC |
| **60** (177 000) | **4,8 ans** (4,9 ans, −1 %) | **4,1 ans** (4,4 ans, −7 %) · 14 920 USDC | **3,0 ans** (3,2 ans, −7 %) · 54 850 USDC | **13,8 ans** (16,6 ans, −17 %) · 71 800 USDC |

### 6.4 Composition hebdomadaire en régime établi (après le jour 11, hors succès)

| Profil | Connexion | Volume | Gagnés | Visionnage | Chat | **Total** | Part hors base |
|---|---|---|---|---|---|---|---|
| Connexion seule | 700 | — | — | — | — | **700** | 0 % |
| Quotidien 10 USDC/j | 700 | 70 | ≈ 16 | 18 | 10 | **≈ 814** | 6 % |
| Quotidien 50 USDC/j | 700 | 350 | ≈ 32 | 18 | 10 | **≈ 1 110** | 6 % |
| Week-end 100 USDC/sem. | 105 | 100 | 9 | 18 | 10 | **242** | 18 % |

### 6.5 Lecture

- **Voie non monétaire.** Un supporter qui ne mise jamais mais se connecte, regarde 90 min et écrit 5 messages chaque jour atteint le niveau 60 en 4,2 ans (−14 % par rapport à la connexion seule). C'est quasiment le rythme du parieur quotidien à 10 USDC (4,1 ans). L'argent ne fait pas le statut.
- **Joueur du week-end.** Avec la courbe validée, il n'atteint pas les rangs *Legend* ni *Icon* dans un horizon réaliste (13,8 ans pour le niveau 60) : le statut récompense la constance. À confirmer avec l'utilisateur.
- **Streamer.** Un streamer qui diffuse 2 h trois fois par semaine gagne 60 XP par semaine de `stream_time`, en plus de son profil de joueur, plus 735 XP de succès à vie.

---

## 7. Modèle de données

### 7.1 Vue d'ensemble

| Table (toutes nouvelles) | Rôle | Écrite par | Lue par |
|---|---|---|---|
| `accounts` | Compte = utilisateur Dynamic | `ExchangeDynamicTokenUseCase` | tout le backend |
| `account_wallets` | Wallets liés au compte (preuve : JWT Dynamic) | idem | processeurs, cartes |
| `gamification_profiles` | État courant : XP, niveau, série, cosmétiques choisis, suspension | fonctions SQL | carte, `/me` |
| `gamification_ledger` | Registre append-only de chaque crédit ou annulation | `gamification_credit`, `gamification_reverse` | historique, recalcul |
| `gamification_daily_counters` | Compteurs par compte, jour de Paris et seau (plafonds XP, plafonds de progression, minutes du jour) | fonctions SQL | fonctions SQL |
| `gamification_progress` | Compteurs de succès et ensembles distincts | `gamification_credit` | évaluateur de succès |
| `gamification_achievements` | Paliers débloqués | `EvaluateAchievementsUseCase` | carte, profil |
| `gamification_watch_minutes` | Minutes de visionnage authentifiées (purgées après 35 jours) | `RecordWatchHeartbeatUseCase` | streamers, purge |
| `gamification_stream_sessions` | Registre durable des streams (survit à la purge de 7 jours de `live_streams`) | `GamificationStreamMinutesJob` | idem |
| `gamification_stream_minutes` | Minutes de stream comptées | idem | idem |
| `gamification_cycle_ranks` | Rang final figé par cycle et par wallet (top 100) | `GamificationCycleSnapshotJob` | succès *Leaderboard*, Podium, Crown |
| `gamification_double_xp_events` | Événements double XP | admin | crédit, bannière |
| `gamification_notifications` | Notifications in-app (montée de niveau, palier, gel) | crédit | `/me` |
| `gamification_cursors` | Curseurs des processeurs (modèle `indexer_checkpoints`) | jobs | jobs |

**Conventions suivies** (migrations 036, 037, 042)
- `BEGIN; … COMMIT;`, `IF NOT EXISTS` sur les créations.
- Adresses en minuscules avec `CHECK (x = lower(x))`.
- Pas d'ENUM SQL pour les taxonomies qui évoluent (`source`, `kind` : unions TS dans `packages/domain`), mais un `CHECK` figé pour les invariants de sécurité (périmètre double XP).
- RLS activée sur tout, **aucune politique publique**, `REVOKE ALL … FROM anon, authenticated`, droits à `service_role` uniquement. Tout passe par l'API.
- Aucune table dans la publication Realtime.
- Fonctions : `REVOKE ALL … FROM PUBLIC, anon, authenticated` puis `GRANT EXECUTE … TO service_role`.

### 7.2 Brouillon `043_accounts.sql`

```sql
-- 043 — Accounts and linked wallets (identity proven by the Dynamic JWT).
--
-- An account is a Dynamic user (`sub`). Its wallets are the EVM entries of the token's
-- `verified_credentials`, refreshed at every /auth/token exchange. A wallet belongs to at most
-- one account; the first link wins, conflicts are logged and resolved by hand.

BEGIN;

CREATE TABLE IF NOT EXISTS accounts (
    id               UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    dynamic_user_id  TEXT        NOT NULL UNIQUE,
    primary_wallet   TEXT        CHECK (primary_wallet = lower(primary_wallet)),
    created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
    last_seen_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS account_wallets (
    wallet_address   TEXT        PRIMARY KEY CHECK (wallet_address = lower(wallet_address)),
    account_id       UUID        NOT NULL REFERENCES accounts(id),
    linked_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
    -- Set when the wallet disappears from verified_credentials; activity after it no longer counts.
    unlinked_at      TIMESTAMPTZ,
    CONSTRAINT account_wallets_unlink_after_link CHECK (unlinked_at IS NULL OR unlinked_at >= linked_at)
);

CREATE INDEX IF NOT EXISTS idx_account_wallets_account
    ON account_wallets (account_id) WHERE unlinked_at IS NULL;

ALTER TABLE accounts        ENABLE ROW LEVEL SECURITY;
ALTER TABLE account_wallets ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON accounts, account_wallets FROM anon, authenticated;
GRANT SELECT, INSERT, UPDATE ON accounts, account_wallets TO service_role;

COMMIT;
```

### 7.3 Brouillon `044_gamification.sql`

```sql
-- 044 — Off-chain gamification: XP ledger, levels, daily streak, achievements, double XP.
--
-- Rules live in packages/domain/src/gamification (catalog + pure policies). The database only
-- enforces idempotency (ref_key), per-account serialisation, daily caps and the frozen double-XP
-- perimeter. No table joins the realtime publication.

BEGIN;

-- ─── Double XP events (created before the ledger, which references them) ──────

CREATE TABLE IF NOT EXISTS gamification_double_xp_events (
    id                   UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
    name                 TEXT         NOT NULL CHECK (char_length(name) BETWEEN 3 AND 80),
    multiplier           NUMERIC(3,2) NOT NULL CHECK (multiplier > 1 AND multiplier <= 2),
    -- Frozen legal perimeter: widening it to bet sources requires a migration on purpose.
    sources              TEXT[]       NOT NULL
                         CHECK (cardinality(sources) >= 1
                                AND sources <@ ARRAY['check_in','watch','chat_message','stream_time']::TEXT[]),
    starts_at            TIMESTAMPTZ  NOT NULL,
    ends_at              TIMESTAMPTZ  NOT NULL,
    created_by_wallet    TEXT         NOT NULL,
    created_at           TIMESTAMPTZ  NOT NULL DEFAULT now(),
    cancelled_at         TIMESTAMPTZ,
    cancelled_by_wallet  TEXT,
    CONSTRAINT dxp_window CHECK (ends_at > starts_at AND ends_at - starts_at <= INTERVAL '72 hours'),
    CONSTRAINT dxp_no_overlap EXCLUDE USING gist (tstzrange(starts_at, ends_at, '[)') WITH &&)
        WHERE (cancelled_at IS NULL)
);
CREATE INDEX IF NOT EXISTS idx_gami_dxp_starts ON gamification_double_xp_events (starts_at);

-- ─── Profiles ────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS gamification_profiles (
    account_id         UUID        PRIMARY KEY REFERENCES accounts(id),
    xp_total           BIGINT      NOT NULL DEFAULT 0 CHECK (xp_total >= 0),
    level              SMALLINT    NOT NULL DEFAULT 1 CHECK (level BETWEEN 1 AND 60),
    streak_current     INTEGER     NOT NULL DEFAULT 0 CHECK (streak_current >= 0),
    streak_best        INTEGER     NOT NULL DEFAULT 0 CHECK (streak_best >= streak_current),
    streak_last_day    DATE,
    streak_freezes     SMALLINT    NOT NULL DEFAULT 0 CHECK (streak_freezes BETWEEN 0 AND 2),
    selected_title_id  TEXT,
    selected_frame_id  TEXT,
    showcase           TEXT[]      NOT NULL DEFAULT '{}' CHECK (cardinality(showcase) <= 3),
    suspended_at       TIMESTAMPTZ,
    suspended_reason   TEXT,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ─── Ledger (append-only) ────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS gamification_ledger (
    id                  BIGSERIAL    PRIMARY KEY,
    account_id          UUID         NOT NULL REFERENCES accounts(id),
    -- Union TS in packages/domain (GamificationSource) — no SQL enum.
    source              TEXT         NOT NULL,
    ref_key             TEXT         NOT NULL UNIQUE,
    day                 DATE         NOT NULL,           -- Europe/Paris day of occurred_at
    occurred_at         TIMESTAMPTZ  NOT NULL,
    requested_xp        INTEGER      NOT NULL,           -- before the daily cap
    base_xp             INTEGER      NOT NULL,           -- after the cap, before the multiplier
    multiplier          NUMERIC(3,2) NOT NULL DEFAULT 1.00,
    xp                  INTEGER      NOT NULL,           -- credited; negative on reversals
    double_xp_event_id  UUID         REFERENCES gamification_double_xp_events(id),
    reverses_id         BIGINT       REFERENCES gamification_ledger(id),
    reason              TEXT,        -- daily_cap | hedge | banned | suspended | market_cancelled | message_removed | stream_stopped
    metadata            JSONB        NOT NULL DEFAULT '{}'::jsonb,
    created_at          TIMESTAMPTZ  NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_gami_ledger_account     ON gamification_ledger (account_id, id DESC);
CREATE INDEX IF NOT EXISTS idx_gami_ledger_account_day ON gamification_ledger (account_id, day, source);
CREATE UNIQUE INDEX IF NOT EXISTS idx_gami_ledger_one_reversal
    ON gamification_ledger (reverses_id) WHERE reverses_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_gami_ledger_market
    ON gamification_ledger ((metadata->>'marketKey')) WHERE source = 'bet_volume';
CREATE INDEX IF NOT EXISTS idx_gami_ledger_stream
    ON gamification_ledger ((metadata->>'streamId')) WHERE source = 'stream_time';

REVOKE UPDATE, DELETE ON gamification_ledger FROM service_role;
CREATE OR REPLACE FUNCTION gamification_ledger_immutable() RETURNS trigger AS $$
BEGIN
    RAISE EXCEPTION 'gamification_ledger is append-only';
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER trg_gamification_ledger_immutable
    BEFORE UPDATE OR DELETE ON gamification_ledger
    FOR EACH ROW EXECUTE FUNCTION gamification_ledger_immutable();

-- ─── Counters and progress ───────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS gamification_daily_counters (
    account_id  UUID    NOT NULL REFERENCES accounts(id),
    day         DATE    NOT NULL,
    bucket      TEXT    NOT NULL,     -- 'xp:<source>' | 'progress:<metric>' | 'minutes:watch' | 'minutes:league:<id>'
    value       INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY (account_id, day, bucket)
);
CREATE INDEX IF NOT EXISTS idx_gami_daily_day ON gamification_daily_counters (day);

CREATE TABLE IF NOT EXISTS gamification_progress (
    account_id  UUID        NOT NULL REFERENCES accounts(id),
    metric      TEXT        NOT NULL, -- bets_won | bet_volume_usdc | market_kinds | leagues | watch_minutes
                                      -- | chat_messages | streamers_followed | support_actions | stream_minutes | first_steps
    value       BIGINT      NOT NULL DEFAULT 0,
    items       TEXT[]      NOT NULL DEFAULT '{}',   -- distinct sets; value = cardinality for set metrics
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    PRIMARY KEY (account_id, metric)
);

CREATE TABLE IF NOT EXISTS gamification_achievements (
    account_id      UUID        NOT NULL REFERENCES accounts(id),
    achievement_id  TEXT        NOT NULL,
    tier            SMALLINT    NOT NULL CHECK (tier BETWEEN 1 AND 8),
    unlocked_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    context         JSONB       NOT NULL DEFAULT '{}'::jsonb,   -- e.g. {"cycleId": 7, "rank": 1}
    PRIMARY KEY (account_id, achievement_id, tier)
);
CREATE INDEX IF NOT EXISTS idx_gami_ach_tier ON gamification_achievements (achievement_id, tier);

-- ─── Watching and streaming ──────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS gamification_watch_minutes (
    account_id  UUID        NOT NULL REFERENCES accounts(id),
    minute      TIMESTAMPTZ NOT NULL,     -- truncated to the minute by the caller
    match_id    INTEGER     NOT NULL,     -- matches.api_football_id, no FK (24 h match purge)
    stream_id   UUID,                     -- live_streams.id, no FK (7-day stream purge)
    league_id   INTEGER,
    PRIMARY KEY (account_id, minute)
);
CREATE INDEX IF NOT EXISTS idx_gami_watch_stream ON gamification_watch_minutes (stream_id, minute) WHERE stream_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_gami_watch_minute ON gamification_watch_minutes (minute);

CREATE TABLE IF NOT EXISTS gamification_stream_sessions (
    stream_id            UUID        PRIMARY KEY,                 -- live_streams.id, no FK
    account_id           UUID        REFERENCES accounts(id),     -- NULL when the wallet has no account
    streamer_wallet      TEXT        NOT NULL CHECK (streamer_wallet = lower(streamer_wallet)),
    match_id             INTEGER     NOT NULL,
    went_live_at         TIMESTAMPTZ NOT NULL,
    ended_at             TIMESTAMPTZ,
    counted_minutes      INTEGER     NOT NULL DEFAULT 0,
    last_processed_minute TIMESTAMPTZ,
    moderated_at         TIMESTAMPTZ,
    created_at           TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_gami_sessions_open    ON gamification_stream_sessions (went_live_at) WHERE ended_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_gami_sessions_account ON gamification_stream_sessions (account_id, went_live_at DESC);

CREATE TABLE IF NOT EXISTS gamification_stream_minutes (
    stream_id        UUID        NOT NULL REFERENCES gamification_stream_sessions(stream_id),
    minute           TIMESTAMPTZ NOT NULL,
    viewer_accounts  SMALLINT    NOT NULL,          -- audit only; no peak-viewer feature in the MVP
    exempt           BOOLEAN     NOT NULL DEFAULT false,
    PRIMARY KEY (stream_id, minute)
);

-- ─── Leaderboard snapshots ───────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS gamification_cycle_ranks (
    cycle_id    BIGINT        NOT NULL,           -- leaderboard_epochs.epoch_id
    wallet      TEXT          NOT NULL CHECK (wallet = lower(wallet)),
    account_id  UUID          REFERENCES accounts(id),
    rank        INTEGER       NOT NULL CHECK (rank BETWEEN 1 AND 100),
    score       NUMERIC(78,0) NOT NULL,
    frozen_at   TIMESTAMPTZ   NOT NULL DEFAULT now(),
    PRIMARY KEY (cycle_id, wallet)
);
CREATE INDEX IF NOT EXISTS idx_gami_cycle_account ON gamification_cycle_ranks (account_id, cycle_id DESC);

-- ─── Notifications, cursors ──────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS gamification_notifications (
    id          BIGSERIAL   PRIMARY KEY,
    account_id  UUID        NOT NULL REFERENCES accounts(id),
    kind        TEXT        NOT NULL,   -- level_up | achievement | streak_freeze_used | streak_freeze_earned
    payload     JSONB       NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    seen_at     TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_gami_notif_unseen ON gamification_notifications (account_id, id DESC) WHERE seen_at IS NULL;

CREATE TABLE IF NOT EXISTS gamification_cursors (
    name        TEXT        PRIMARY KEY,   -- bets | settlements | support | chat_removals | stream_moderation | cycles
    position    JSONB       NOT NULL,
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ─── Functions ───────────────────────────────────────────────────────────────

-- Exact integer inverse of XP(L) = 50·L·(L−1), capped at 60.
CREATE OR REPLACE FUNCTION gamification_level_of(p_xp BIGINT)
RETURNS SMALLINT
LANGUAGE sql
IMMUTABLE
AS $$
    SELECT COALESCE(MAX(l), 1)::SMALLINT
      FROM generate_series(1, 60) AS l
     WHERE 50::BIGINT * l * (l - 1) <= GREATEST(p_xp, 0);
$$;

-- One credit, atomically: idempotency, per-account lock, daily cap, multiplier, progress, level.
-- p_progress: [{"metric":"chat_messages","delta":1,"dailyCap":50}, {"metric":"market_kinds","item":"WINNER:0"}]
CREATE OR REPLACE FUNCTION gamification_credit(
    p_account_id    UUID,
    p_source        TEXT,
    p_ref_key       TEXT,
    p_day           DATE,
    p_occurred_at   TIMESTAMPTZ,
    p_requested_xp  INTEGER,
    p_daily_cap     INTEGER,      -- NULL = no cap
    p_multiplier    NUMERIC,      -- 1.00 when no event applies
    p_double_xp_id  UUID,
    p_reason        TEXT,         -- non-NULL forces 0 XP (banned, suspended, hedge)
    p_metadata      JSONB,
    p_progress      JSONB
)
RETURNS TABLE (inserted BOOLEAN, ledger_id BIGINT, credited_xp INTEGER, new_total BIGINT,
               old_level SMALLINT, new_level SMALLINT)
LANGUAGE plpgsql
AS $$
DECLARE
    v_old    SMALLINT;
    v_used   INTEGER;
    v_base   INTEGER := GREATEST(p_requested_xp, 0);
    v_reason TEXT    := p_reason;
    v_xp     INTEGER;
    v_id     BIGINT;
    v_total  BIGINT;
    v_p      JSONB;
    v_delta  BIGINT;
BEGIN
    INSERT INTO gamification_profiles (account_id) VALUES (p_account_id) ON CONFLICT DO NOTHING;
    -- Serialises every credit of one account: caps and level stay exact under concurrency.
    SELECT level INTO v_old FROM gamification_profiles WHERE account_id = p_account_id FOR UPDATE;

    IF EXISTS (SELECT 1 FROM gamification_ledger WHERE ref_key = p_ref_key) THEN
        RETURN QUERY SELECT false, NULL::BIGINT, 0,
            (SELECT g.xp_total FROM gamification_profiles g WHERE g.account_id = p_account_id), v_old, v_old;
        RETURN;
    END IF;

    IF v_reason IS NOT NULL THEN
        v_base := 0;
    ELSIF p_daily_cap IS NOT NULL THEN
        INSERT INTO gamification_daily_counters (account_id, day, bucket)
        VALUES (p_account_id, p_day, 'xp:' || p_source) ON CONFLICT DO NOTHING;
        SELECT value INTO v_used FROM gamification_daily_counters
         WHERE account_id = p_account_id AND day = p_day AND bucket = 'xp:' || p_source;
        v_base := LEAST(v_base, GREATEST(p_daily_cap - v_used, 0));
        IF v_base < p_requested_xp THEN v_reason := 'daily_cap'; END IF;
        UPDATE gamification_daily_counters SET value = value + v_base
         WHERE account_id = p_account_id AND day = p_day AND bucket = 'xp:' || p_source;
    END IF;
    v_xp := FLOOR(v_base * COALESCE(p_multiplier, 1));

    INSERT INTO gamification_ledger (account_id, source, ref_key, day, occurred_at, requested_xp,
                                     base_xp, multiplier, xp, double_xp_event_id, reason, metadata)
    VALUES (p_account_id, p_source, p_ref_key, p_day, p_occurred_at, p_requested_xp, v_base,
            COALESCE(p_multiplier, 1), v_xp, CASE WHEN p_multiplier > 1 THEN p_double_xp_id END,
            v_reason, COALESCE(p_metadata, '{}'::jsonb))
    RETURNING id INTO v_id;

    -- Progress moves only together with the idempotent ledger insert.
    FOR v_p IN SELECT * FROM jsonb_array_elements(COALESCE(p_progress, '[]'::jsonb)) LOOP
        INSERT INTO gamification_progress (account_id, metric)
        VALUES (p_account_id, v_p->>'metric') ON CONFLICT DO NOTHING;
        IF v_p ? 'item' THEN
            UPDATE gamification_progress
               SET items = array_append(items, v_p->>'item'), value = value + 1, updated_at = now()
             WHERE account_id = p_account_id AND metric = v_p->>'metric'
               AND NOT ((v_p->>'item') = ANY (items));
        ELSE
            v_delta := (v_p->>'delta')::BIGINT;
            IF v_p ? 'dailyCap' THEN
                INSERT INTO gamification_daily_counters (account_id, day, bucket)
                VALUES (p_account_id, p_day, 'progress:' || (v_p->>'metric')) ON CONFLICT DO NOTHING;
                SELECT value INTO v_used FROM gamification_daily_counters
                 WHERE account_id = p_account_id AND day = p_day AND bucket = 'progress:' || (v_p->>'metric');
                v_delta := LEAST(v_delta, GREATEST((v_p->>'dailyCap')::INTEGER - v_used, 0));
                UPDATE gamification_daily_counters SET value = value + v_delta
                 WHERE account_id = p_account_id AND day = p_day AND bucket = 'progress:' || (v_p->>'metric');
            END IF;
            UPDATE gamification_progress SET value = GREATEST(value + v_delta, 0), updated_at = now()
             WHERE account_id = p_account_id AND metric = v_p->>'metric';
        END IF;
    END LOOP;

    UPDATE gamification_profiles AS g
       SET xp_total = g.xp_total + v_xp,
           level = gamification_level_of(g.xp_total + v_xp),
           updated_at = now()
     WHERE g.account_id = p_account_id
    RETURNING g.xp_total INTO v_total;

    RETURN QUERY SELECT true, v_id, v_xp, v_total, v_old, gamification_level_of(v_total);
END;
$$;

-- Reversal: a new negative row; progress deltas listed in metadata.progressUndo are subtracted.
CREATE OR REPLACE FUNCTION gamification_reverse(p_ref_key TEXT, p_reason TEXT, p_occurred_at TIMESTAMPTZ)
RETURNS TABLE (reversed BOOLEAN, reversed_xp INTEGER, new_total BIGINT)
LANGUAGE plpgsql
AS $$
DECLARE
    v_row   gamification_ledger%ROWTYPE;
    v_total BIGINT;
    v_p     JSONB;
BEGIN
    SELECT * INTO v_row FROM gamification_ledger WHERE ref_key = p_ref_key AND reverses_id IS NULL;
    IF NOT FOUND THEN RETURN QUERY SELECT false, 0, NULL::BIGINT; RETURN; END IF;
    PERFORM 1 FROM gamification_profiles WHERE account_id = v_row.account_id FOR UPDATE;

    INSERT INTO gamification_ledger (account_id, source, ref_key, day, occurred_at, requested_xp,
                                     base_xp, multiplier, xp, reverses_id, reason, metadata)
    VALUES (v_row.account_id, v_row.source, 'rev:' || p_ref_key, v_row.day, p_occurred_at, 0,
            -v_row.base_xp, v_row.multiplier, -v_row.xp, v_row.id, p_reason, v_row.metadata)
    ON CONFLICT (ref_key) DO NOTHING;
    IF NOT FOUND THEN RETURN QUERY SELECT false, 0, NULL::BIGINT; RETURN; END IF;

    FOR v_p IN SELECT * FROM jsonb_array_elements(COALESCE(v_row.metadata->'progressUndo', '[]'::jsonb)) LOOP
        UPDATE gamification_progress
           SET value = GREATEST(value - (v_p->>'delta')::BIGINT, 0), updated_at = now()
         WHERE account_id = v_row.account_id AND metric = v_p->>'metric';
    END LOOP;

    UPDATE gamification_profiles AS g
       SET xp_total = GREATEST(g.xp_total - v_row.xp, 0),
           level = gamification_level_of(GREATEST(g.xp_total - v_row.xp, 0)),
           updated_at = now()
     WHERE g.account_id = v_row.account_id
    RETURNING g.xp_total INTO v_total;

    RETURN QUERY SELECT true, -v_row.xp, v_total;
END;
$$;

-- Check-in: compare-and-set on the streak (state computed by the domain), then credit.
CREATE OR REPLACE FUNCTION gamification_check_in(
    p_account_id     UUID,
    p_day            DATE,
    p_now            TIMESTAMPTZ,
    p_expected_last  DATE,          -- streak_last_day read by the use case
    p_streak_current INTEGER,
    p_streak_best    INTEGER,
    p_streak_freezes SMALLINT,
    p_xp             INTEGER,
    p_multiplier     NUMERIC,
    p_double_xp_id   UUID
)
RETURNS TABLE (applied BOOLEAN, credited_xp INTEGER, new_total BIGINT, old_level SMALLINT, new_level SMALLINT)
LANGUAGE plpgsql
AS $$
DECLARE r RECORD;
BEGIN
    INSERT INTO gamification_profiles (account_id) VALUES (p_account_id) ON CONFLICT DO NOTHING;
    UPDATE gamification_profiles
       SET streak_current = p_streak_current, streak_best = p_streak_best,
           streak_freezes = p_streak_freezes, streak_last_day = p_day, updated_at = p_now
     WHERE account_id = p_account_id
       AND streak_last_day IS NOT DISTINCT FROM p_expected_last
       AND (streak_last_day IS NULL OR streak_last_day < p_day);
    IF NOT FOUND THEN RETURN QUERY SELECT false, 0, NULL::BIGINT, NULL::SMALLINT, NULL::SMALLINT; RETURN; END IF;

    SELECT * INTO r FROM gamification_credit(p_account_id, 'check_in',
        'check_in:' || p_account_id || ':' || p_day, p_day, p_now, p_xp, 100, p_multiplier, p_double_xp_id,
        NULL, jsonb_build_object('streak', p_streak_current), '[]'::jsonb);
    RETURN QUERY SELECT true, r.credited_xp, r.new_total, r.old_level, r.new_level;
END;
$$;

-- ─── RLS / grants ────────────────────────────────────────────────────────────

DO $$
DECLARE t TEXT;
BEGIN
    FOREACH t IN ARRAY ARRAY[
        'gamification_double_xp_events','gamification_profiles','gamification_ledger',
        'gamification_daily_counters','gamification_progress','gamification_achievements',
        'gamification_watch_minutes','gamification_stream_sessions','gamification_stream_minutes',
        'gamification_cycle_ranks','gamification_notifications','gamification_cursors'
    ] LOOP
        EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', t);
        EXECUTE format('REVOKE ALL ON %I FROM anon, authenticated', t);
        EXECUTE format('GRANT SELECT, INSERT, UPDATE, DELETE ON %I TO service_role', t);
    END LOOP;
END$$;
-- The ledger stays append-only even for service_role (grant above re-adds UPDATE/DELETE).
REVOKE UPDATE, DELETE ON gamification_ledger FROM service_role;
REVOKE ALL ON SEQUENCE gamification_ledger_id_seq, gamification_notifications_id_seq FROM anon, authenticated;

REVOKE ALL ON FUNCTION gamification_level_of(BIGINT) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION gamification_credit(UUID, TEXT, TEXT, DATE, TIMESTAMPTZ, INTEGER, INTEGER, NUMERIC, UUID, TEXT, JSONB, JSONB) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION gamification_reverse(TEXT, TEXT, TIMESTAMPTZ) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION gamification_check_in(UUID, DATE, TIMESTAMPTZ, DATE, INTEGER, INTEGER, SMALLINT, INTEGER, NUMERIC, UUID) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION gamification_level_of(BIGINT) TO service_role;
GRANT EXECUTE ON FUNCTION gamification_credit(UUID, TEXT, TEXT, DATE, TIMESTAMPTZ, INTEGER, INTEGER, NUMERIC, UUID, TEXT, JSONB, JSONB) TO service_role;
GRANT EXECUTE ON FUNCTION gamification_reverse(TEXT, TEXT, TIMESTAMPTZ) TO service_role;
GRANT EXECUTE ON FUNCTION gamification_check_in(UUID, DATE, TIMESTAMPTZ, DATE, INTEGER, INTEGER, SMALLINT, INTEGER, NUMERIC, UUID) TO service_role;

COMMIT;
```

**Notes pour la revue du brouillon**
- `gamification_record_watch_minute` (insertion de la minute, incrément `minutes:watch` et `minutes:league:{id}`, retour du compteur du jour) suit le même modèle, avec un verrou sur la ligne de profil. Elle n'est pas détaillée ici.
- `metadata.progressUndo` est renseigné par l'appelant pour les sources annulables : `bet_volume` (`bet_volume_usdc`), `chat_message` (`chat_messages`), `stream_time` (`stream_minutes`).
- Quand `p_reason` vaut `banned` ou `suspended`, l'appelant passe `p_progress = '[]'` : ni XP ni progression. Avec `hedge`, la progression (types de marché, compétitions) est transmise.
- La purge (`GamificationPurgeJob`) supprime `gamification_watch_minutes` et `gamification_daily_counters` de plus de 35 jours, et les notifications vues depuis plus de 30 jours. Le registre n'est jamais purgé.
- `btree_gist` n'est pas nécessaire : l'exclusion ne porte que sur un `tstzrange`.

---

## 8. Pipeline

### 8.1 Schéma

```
Chaîne ─► indexeurs existants (bloc sûr = head − 6, recouvrement 120 blocs)
            PariMatchEventIndexer ─► bets · market_events (MarketCreated / Resolved / Cancelled)
            StreamWalletIndexer   ─► donations · subscriptions
            LeaderboardIndexer    ─► leaderboard_cycle_scores · leaderboard_epochs
                                          │
                                          ▼  (batch, jobs « safe » du JobRegistry)
     GamificationChainProcessorJob (toutes les 60 s) ──┐
     GamificationStreamMinutesJob  (toutes les 60 s) ──┤
     GamificationCycleSnapshotJob  (cron « 15 * * * ») ┼─► application/gamification/use-cases
     GamificationPurgeJob          (cron « 30 3 * * ») ┘        │  règles pures : packages/domain/src/gamification
                                                               ▼
App ─► use cases synchrones (temps réel) ────────────► gamification_credit / _reverse / _check_in (SQL, atomique)
        CheckIn · RecordWatchHeartbeat · RecordChatXp (appelé par SendMessage)       │
        RecordFollowXp (appelé par FollowStreamer) · RecordProfileStep (users)       ▼
                                                     gamification_* ─► EvaluateAchievements ─► notifications
                                                               │
                                                               ▼
        GET /gamification/cards/* (public, Redis 60 s) · GET /gamification/me (JWT) · admin double XP
        DTO packages/shared/src/dto/gamification → lib/api/endpoints → queryKeys → hooks (CLAUDE.md §3.2bis)
```

### 8.2 Couches DDD (CLAUDE.md §3.1)

| Couche | Fichiers (nouveaux sauf mention) |
|---|---|
| `packages/domain/src/gamification/catalog/` | `sources.ts` (union `GamificationSource`, valeurs, plafonds, `DOUBLE_XP_ELIGIBLE`), `achievements.ts`, `titles.ts`, `frames.ts`, `ranks.ts` |
| `packages/domain/src/gamification/policies/` | `levelCurve.ts` (`xpForLevel`, `levelOf`, `levelProgress`), `parisDay.ts`, `checkInXp.ts`, `streakPolicy.ts` (`applyCheckIn`, `effectiveStreak`), `volumeCredit.ts` (`countedVolume`, `volumeDelta`), `winPolicy.ts` (`isMarketWon`), `chatPolicy.ts`, `watchPolicy.ts`, `streamMinutePolicy.ts`, `doubleXpPolicy.ts`, `achievementEvaluator.ts`, `cosmetics.ts` (`ownedTitles`, `ownedFrames`, `showcaseSlots`, `defaultShowcase`, `validateCosmetics`) |
| `packages/domain/src/gamification/repositories/` | `IGamificationLedgerRepository`, `IGamificationProfileRepository`, `IGamificationProgressRepository`, `IWatchMinuteRepository`, `IStreamSessionRepository`, `ICycleRankRepository`, `IDoubleXpEventRepository`, `IGamificationCursorRepository`, `IGamificationNotificationRepository` |
| `packages/domain/src/identity/` | `repositories/IAccountRepository.ts`, `ports/IIdentityTokenVerifier.ts` (résultat en union discriminée `{ ok: true, subject, wallets, email } \| { ok: false, reason }`) |
| `apps/backend/src/application/gamification/use-cases/` | `CheckInUseCase`, `RecordWatchHeartbeatUseCase`, `RecordChatXpUseCase`, `RecordFollowXpUseCase`, `RecordProfileStepUseCase`, `ProcessBetVolumeUseCase`, `ProcessMarketSettlementsUseCase` (gains + annulations), `ProcessSupportEventsUseCase`, `ProcessModerationReversalsUseCase` (chat retiré + `stop_stream`), `ProcessStreamMinutesUseCase`, `SnapshotCycleRanksUseCase`, `EvaluateAchievementsUseCase`, `CreditXpUseCase` (cœur : bans, suspension, double XP, appel SQL, montée de niveau, notifications, invalidation du cache), `GetMyGamificationUseCase`, `GetProfileCardUseCase`, `GetProfileBadgesUseCase`, `GetPublicProfileUseCase`, `UpdateCosmeticsUseCase`, `AckNotificationsUseCase`, `GetCurrentDoubleXpUseCase`, `ListDoubleXpEventsUseCase`, `CreateDoubleXpEventUseCase`, `CancelDoubleXpEventUseCase`, `SuspendGamificationUseCase` |
| `apps/backend/src/application/auth/use-cases/` | `ExchangeDynamicTokenUseCase` |
| `apps/backend/src/infrastructure/` | `auth/DynamicJwtVerifier.ts` (JWKS via axios, clé via `crypto.createPublicKey({ key: jwk, format: 'jwk' })`, vérification `jsonwebtoken` RS256 : **aucune dépendance nouvelle**) ; `persistence/repositories/Supabase*Repository.ts` ; `scheduling/jobs/Gamification*Job.ts` + entrées `JobRegistry` + `JobLocks` dédiés |
| `apps/backend/src/presentation/http/` | `routes/gamification.public.routes.ts`, `routes/gamification.routes.ts`, `controllers/gamification.controller.ts`, `controllers/admin-gamification.controller.ts` ; montage dans `apps/backend/index.ts` (public **avant** `app.use(authenticate)`, comme `/leaderboard`) |

### 8.3 Jobs

Tous en catégorie `safe` (Run now admin+). Chaque job relance ses erreurs après les avoir loggées (CLAUDE.md §3.1bis), et a son propre `JobLocks`.

| Job | Planning | Étapes | Curseur | Rejouable |
|---|---|---|---|---|
| `GamificationChainProcessor` | `every(60_000)` | 1. `ProcessBetVolume` (nouvelles lignes `bets`, lots de 500, ordre `id`) → 2. `ProcessMarketSettlements` (`MarketResolved`, `MarketCancelled`) → 3. `ProcessSupportEvents` → 4. `ProcessModerationReversals` → 5. évaluation des succès des comptes touchés | `bets` : `{lastId}` ; `settlements` : `{block, logIndex}` − 200 blocs ; `support` : `{createdAt}` − 10 min ; `chat_removals` : `{removedAt}` − 10 min ; `stream_moderation` : `{triggeredAt}` − 10 min | oui : remettre un curseur à zéro rejoue sans doublon (`ref_key`) |
| `GamificationStreamMinutes` | `every(60_000)` | réconcilie les sessions avec `live_streams`, puis compte les minutes de `last_processed_minute + 1` à `now − 2 min` | par session (`last_processed_minute`) | oui (PK `(stream_id, minute)`) |
| `GamificationCycleSnapshot` | `cron('15 * * * *')` | pour chaque `leaderboard_epochs` `confirmed` ou `rolled_over` avec `epoch_id` non photographié et `closed_at ≥ LAUNCH_AT` : classe `leaderboard_cycle_scores` (`score > 0`, `ORDER BY score DESC, user_address ASC`), garde le top 100 et débloque les paliers | `cycles` : `{lastEpochId}` | oui (PK `(cycle_id, wallet)`) |
| `GamificationPurge` | `cron('30 3 * * *')` | purge du §7.3 | — | oui |

Avant `GAMIFICATION_LAUNCH_AT` ou si `GAMIFICATION_ENABLED = false`, chaque job sort immédiatement.

### 8.4 Temps réel ou batch

| Source | Mode | Latence | Retour joueur |
|---|---|---|---|
| `check_in` | synchrone | immédiate | réponse de la route → toast *+65 XP · Day 4 streak* |
| `watch` | synchrone (heartbeat) | ≤ 60 s | jauge mise à jour au prochain `/me` |
| `chat_message`, `follow`, `onboarding_step` | synchrone | immédiate | discret (pas de toast pour +1 XP) |
| `bet_volume` | batch | 6 blocs + ≤ 60 s ≈ 1 à 2 min | toast agrégé *+25 XP · Bet volume* via notification |
| `bet_won`, annulations | batch | ≈ 1 à 2 min après la résolution indexée | notification de palier éventuelle |
| `support` | batch | ≈ 1 à 2 min | — |
| `stream_time` | batch | ≈ 3 min | jauge |
| *Leaderboard* | batch | ≤ 1 h après `EpochAdvanced` indexé | notification |

### 8.5 Réorgs, rejeu, marchés annulés

- **Réorgs.** La gamification ne lit que des lignes déjà indexées au bloc sûr (head − 6, CLAUDE.md §7.7). Elle ne gère pas de réorg plus profonde, comme le reste du système.
- **Rembobinage des indexeurs** (`UPDATE indexer_checkpoints …`, CLAUDE.md §7.15). Les lignes `bets` et `market_events` sont dédupliquées par `(tx_hash, log_index)`, et les crédits par `ref_key` : aucun double crédit.
  - Exception : `LeaderboardIndexer` incrémente les scores sans déduplication (§14, D6). Le correctif est un prérequis du snapshot.
- **Marchés annulés.** Voir §3.8 : annulation des crédits `bet_volume`, garde au traitement des retardataires.
- **Rééquilibrage des valeurs.** Le catalogue est versionné en code. Le registre garde `requested_xp`, `base_xp` et `multiplier`, et n'est jamais réécrit. Un CLI `pnpm gamification:rebuild-profiles` **(nouveau)** recalcule `xp_total` et `level` depuis le registre. Le recrédit rétroactif avec de nouvelles valeurs est hors MVP.

### 8.6 Rattacher les wallets au compte

Aujourd'hui, `POST /auth/token` signe un JWT pour **n'importe quelle** adresse envoyée dans le body, sans preuve (le commentaire de `AdminAuthController` le reconnaît : *« Unlike /auth/token (which trusts the claimed wallet) »*). Dynamic est configuré en `initialAuthenticationMode: 'connect-and-sign'` (`components/providers/DynamicProviderWrapper.tsx`) : chaque session a donc un JWT Dynamic signé RS256 qui prouve la possession du wallet.

**Flux cible** (`ExchangeDynamicTokenUseCase`)

1. Le front (`providers/auth-provider.tsx`, `lib/api/auth.ts`) envoie `{ walletAddress, dynamicJwt }`, avec `dynamicJwt = getAuthToken()` de `@dynamic-labs/sdk-react-core`.
2. `DynamicJwtVerifier` vérifie le jeton :
   - signature RS256 avec la clé JWKS de l'environnement (`https://app.dynamicauth.com/api/v0/sdk/{DYNAMIC_ENVIRONMENT_ID}/.well-known/jwks`, URL à confirmer dans la console Dynamic), JWKS en cache 1 h ;
   - `iss` attendu, `exp`, et `scope` qui **contient** `user:basic`. Un scope `requiresAdditionalAuth` est refusé.
3. Lecture de `sub` (identifiant Dynamic) et de `verified_credentials[]`, filtrées sur les adresses EVM (valeur exacte du champ `chain` à relever sur un jeton réel, ticket G0). Le `walletAddress` demandé doit en faire partie, sinon 401.
4. Upsert de `accounts` par `dynamic_user_id`, puis synchronisation de `account_wallets` :

   | Cas | Effet |
   |---|---|
   | Wallet absent de la table | ajout (`linked_at = now`) |
   | Wallet déjà lié à ce compte | rien |
   | Wallet lié à un **autre** compte et actif | refus de rattacher, log `warn` « wallet link conflict », résolution manuelle |
   | Wallet lié à un autre compte mais `unlinked_at` posé | transfert (`account_id`, `linked_at = now`, `unlinked_at = NULL`) |
   | Wallet du compte qui n'est plus dans les credentials | `unlinked_at = now` |
5. Le JWT backend porte en plus `accountId` et `dynamicUserId` (`application/auth/types/JwtPayload.ts`). Toutes les routes de gamification exigent `accountId`, sinon 401 `ACCOUNT_REQUIRED` (le front refait alors l'échange).
6. **Transition.** L'ancien body `{ walletAddress }` reste accepté au déploiement, mais sans `accountId`. Une fois le front déployé, il est recommandé de le refuser, ce qui ferme l'usurpation d'identité sur le chat et les signalements (ticket G2).
7. **Ajout de wallet dans Dynamic.** À l'échange suivant (au plus tard à l'expiration du JWT backend, 24 h), le nouveau wallet est lié. Ses paris ne comptent qu'à partir de `linked_at`.
8. **Repli** si le JWT Dynamic est inutilisable : défi signé sur le modèle d'`AdminAuthController` (`/auth/challenge`, `/auth/verify`, viem `verifyMessage`), un wallet à la fois, l'ajout d'un wallet se faisant depuis une session authentifiée.

**Vie privée.** La carte et le profil public **ne listent jamais** les wallets d'un compte. On prévient le joueur qu'en liant un wallet, ses paris comptent pour le même profil.

---

## 9. API backend et composants front

### 9.1 Routes

| Méthode et chemin | Auth | Corps / paramètres | Réponse (DTO Zod) | Cache, limite |
|---|---|---|---|---|
| `POST /auth/token` (existant, modifié) | public | `{ walletAddress, dynamicJwt? }` | inchangé + `accountId` dans le JWT | `authLimiter` existant |
| `GET /gamification/cards/:wallet` | **public** | — | `ProfileCardDto` ou 404 | Redis `gami:card:{wallet}` 60 s |
| `POST /gamification/cards/badges` | **public** | `{ wallets: string[] }` (≤ 100) | `{ badges: Record<wallet, ProfileBadgeDto> }` | Redis par wallet 60 s ; 60 req/min/IP |
| `GET /gamification/profiles/:wallet` | **public** | — | `PublicProfileDto` | Redis 60 s |
| `GET /gamification/double-xp/current` | **public** | — | `DoubleXpPublicDto \| null` (en cours ou à venir sous 7 jours) | Redis 30 s |
| `POST /gamification/check-in` | JWT + `accountId` | — | `CheckInResultDto` | 1 traitement/min/compte |
| `POST /gamification/watch-heartbeat` | JWT + `accountId`, `requireNotBanned` | `{ matchId: number, streamId?: uuid }` | `WatchHeartbeatResultDto` | 1 minute comptée/min/compte |
| `GET /gamification/me` | JWT + `accountId` | — | `MyGamificationDto` (notifications non vues incluses) | Redis 15 s par compte |
| `PUT /gamification/me/cosmetics` | JWT + `accountId` | `UpdateCosmeticsBody` | `MyGamificationDto` | invalide carte et badges |
| `POST /gamification/me/notifications/ack` | JWT + `accountId` | `{ ids: number[] }` (≤ 50) | `{ acked: number }` | — |
| `GET /admin/gamification/double-xp` | `requireAdmin('admin')` | `?from&to` | `AdminDoubleXpEventDto[]` | — |
| `POST /admin/gamification/double-xp` | `requireAdmin('admin')` | `AdminCreateDoubleXpBody` | `AdminDoubleXpEventDto` (201), 409 si chevauchement, 400 si règles §3.6 | audit `gamification.double_xp.create` |
| `POST /admin/gamification/double-xp/:id/cancel` | `requireAdmin('admin')` | `{ note }` | `AdminDoubleXpEventDto` | audit `gamification.double_xp.cancel` |
| `POST /admin/gamification/accounts/:wallet/suspend` / `unsuspend` | `requireAdmin('admin')` | `{ reason }` | `{ suspendedAt }` | audit `gamification.account.suspend` / `.unsuspend` |

Les routes publiques sont dans un routeur monté **avant** `app.use(authenticate)` dans `apps/backend/index.ts`. Les autres sont sous le même préfixe, après. Les actions admin s'ajoutent à l'union TS des actions d'audit (`packages/shared`).

### 9.2 DTO Zod (`packages/shared/src/dto/gamification/`, nouveau)

Exports ajoutés à `packages/shared/src/index.ts`.

```ts
// GamificationEnums.ts
export const RankTierSchema = z.enum(['rookie', 'starter', 'seasoned', 'captain', 'international', 'legend', 'icon']);
export const ProfileTagSchema = z.enum(['new', 'streamer', 'crown', 'founder']);

// ProfileBadgeDto.ts — chat pills and leaderboard rows
export const ProfileBadgeDtoSchema = z.object({
    wallet: z.string(),
    level: z.number().int().min(1).max(60),
    rankTier: RankTierSchema,
    frameId: z.string(),
    titleId: z.string().nullable(),
    /** Cycle number for `cycle_champion`; null otherwise. */
    titleCycleId: z.number().int().nullable(),
    tags: z.array(ProfileTagSchema),
});

// ProfileCardDto.ts — hover card; never carries an amount
export const ShowcaseItemSchema = z.object({
    achievementId: z.string(),
    tier: z.number().int().min(1).max(8),
    /** e.g. {"cycleId": 7} for leaderboard tiers. */
    context: z.record(z.string(), z.union([z.string(), z.number()])).nullable(),
});
export const ProfileCardDtoSchema = ProfileBadgeDtoSchema.extend({
    displayName: z.string().nullable(),
    avatarUrl: z.string().nullable(),
    xp: z.object({
        total: z.number().int().nonnegative(),
        levelStart: z.number().int().nonnegative(),
        /** Null at level 60. */
        nextLevelAt: z.number().int().positive().nullable(),
    }),
    streak: z.object({ current: z.number().int(), best: z.number().int(), alive: z.boolean() }),
    showcase: z.array(ShowcaseItemSchema).max(3),
    showcaseSlots: z.number().int().min(1).max(3),
    /** Streamers only (null otherwise). Whole hours. */
    streamedHours: z.number().int().nullable(),
    memberSince: z.string(),   // ISO date of accounts.created_at
});

// MyGamificationDto.ts — owner view (adds private data)
export const AchievementProgressSchema = z.object({
    achievementId: z.string(),
    unlockedTier: z.number().int().min(0).max(8),
    current: z.number(),           // counter value (hours for spectator/streamer_hours)
    nextThreshold: z.number().nullable(),
    visibility: z.enum(['public', 'private']),
});
export const GamificationNotificationSchema = z.object({
    id: z.number().int(),
    kind: z.enum(['level_up', 'achievement', 'streak_freeze_used', 'streak_freeze_earned']),
    payload: z.record(z.string(), z.unknown()),
    createdAt: z.string(),
});
export const MyGamificationDtoSchema = ProfileCardDtoSchema.extend({
    streakFreezes: z.number().int().min(0).max(2),
    checkedInToday: z.boolean(),
    ownedTitleIds: z.array(z.string()),
    ownedFrameIds: z.array(z.string()),
    achievements: z.array(AchievementProgressSchema),
    todayXpBySource: z.record(z.string(), z.number().int()),
    activeDoubleXp: z.lazy(() => DoubleXpPublicDtoSchema).nullable(),
    unseenNotifications: z.array(GamificationNotificationSchema).max(10),
});

// CheckInResultDto.ts
export const CheckInResultDtoSchema = z.discriminatedUnion('credited', [
    z.object({ credited: z.literal(true), day: z.string(), xp: z.number().int(), multiplier: z.number(),
               streak: z.number().int(), freezeUsed: z.number().int(), freezeEarned: z.boolean(),
               level: z.number().int(), leveledUp: z.boolean() }),
    z.object({ credited: z.literal(false), day: z.string(),
               reason: z.enum(['already_checked_in', 'banned', 'suspended', 'not_launched']) }),
]);

// WatchHeartbeatResultDto.ts
export const WatchHeartbeatResultDtoSchema = z.object({
    counted: z.boolean(),
    reason: z.enum(['counted', 'same_minute', 'not_live', 'own_stream', 'banned', 'suspended', 'not_launched']),
    minutesToday: z.number().int(),
});

// UpdateCosmeticsBody.ts
export const UpdateCosmeticsBodySchema = z.object({
    titleId: z.string().nullable(),
    frameId: z.string().nullable(),
    showcase: z.array(z.string().regex(/^[a-z_]+:[1-8]$/)).max(3),
});

// DoubleXp DTOs (public + admin in packages/shared/src/dto/admin/AdminGamificationDtos.ts)
export const DoubleXpSourceSchema = z.enum(['check_in', 'watch', 'chat_message', 'stream_time']);
export const DoubleXpPublicDtoSchema = z.object({
    name: z.string(), multiplier: z.number(), sources: z.array(DoubleXpSourceSchema),
    startsAt: z.string(), endsAt: z.string(), isActive: z.boolean(),
});
export const AdminCreateDoubleXpBodySchema = z.object({
    name: z.string().min(3).max(80),
    multiplier: z.number().gt(1).lte(2).multipleOf(0.25),
    sources: z.array(DoubleXpSourceSchema).min(1).default(['check_in', 'watch', 'chat_message', 'stream_time']),
    startsAt: z.string().datetime(),
    endsAt: z.string().datetime(),
});
```

Erreurs : 422 `COSMETIC_NOT_OWNED`, 422 `SHOWCASE_TOO_LONG`, 409 `DOUBLE_XP_OVERLAP`, 400 `DOUBLE_XP_NOTICE` / `DOUBLE_XP_MONTHLY_LIMIT`, 401 `ACCOUNT_REQUIRED`, toutes via le middleware d'erreurs existant (`BusinessRuleError`, `ValidationError`).

### 9.3 Front (`apps/frontend`)

**Nouvelle feature** `components/features/gamification/`, découpée selon CLAUDE.md §3.2 et §3.3bis (un composant par fichier) :

| Dossier | Fichiers |
|---|---|
| `domain/` | `levelDisplay.ts` (jauge, *Max level*), `rankStyle.ts` (tokens de couleur du §4.2), `frameStyle.ts` (styles des cadres du §4.3), `labels.ts` (clés `gamification.*` → libellés EN), `streakDisplay.ts`, `showcaseDisplay.ts` |
| `components/` | `FramedAvatar.tsx` (s'appuie sur l'avatar de `components/shared/UserBadge.tsx`, ajoute cadre et pastille), `LevelPill.tsx`, `XpBar.tsx`, `StreakStat.tsx`, `ShowcaseTile.tsx`, `ProfileHoverCard.tsx`, `ProfileHoverTrigger.tsx` (survol avec 300 ms de délai, focus clavier, Échap, `aria-haspopup="dialog"`, `aria-expanded` ; tap sur mobile), `AchievementTile.tsx`, `TitlePicker.tsx`, `FramePicker.tsx`, `ShowcasePicker.tsx`, `DoubleXpBanner.tsx`, `LevelUpToast.tsx`, `HowXpWorksDialog.tsx` |
| `hooks/` | `useAutoCheckIn.ts`, `useWatchHeartbeat.ts`, `useGamificationToasts.ts` (notifications non vues → toast `sonner` → ack) |
| `sections/` | `ProgressionSection.tsx` (dashboard), `PublicProfileHero.tsx`, `PublicAchievementsGrid.tsx` |
| racine | `PublicProfilePage.tsx` (orchestrateur) |

**Couches API** (CLAUDE.md §3.2bis)
- `lib/api/endpoints/gamification.ts` (`gamificationApi`), réexporté dans `lib/api/endpoints/index.ts` ;
- `lib/query/keys.ts` (`queryKeys.gamification.me()`, `.card(wallet)`, `.badges(wallets)`, `.profile(wallet)`, `.doubleXp()`) ;
- `hooks/api/useGamification.ts` (`useMyGamification`, `useProfileCard`, `useProfileBadges`, `usePublicProfile`, `useUpdateCosmetics`, `useCheckIn`, `useCurrentDoubleXp`), réexporté dans `hooks/api/index.ts`.
- `staleTime` alignés sur le cache backend (60 s pour cartes et badges, 15 s pour `/me`). `/me` est rafraîchi toutes les 60 s seulement si l'onglet est visible (`refetchIntervalInBackground: false`).

**Fichiers existants à modifier**

| Fichier | Modification |
|---|---|
| `providers/auth-provider.tsx`, `lib/api/auth.ts` | Envoi de `dynamicJwt` (`getAuthToken()` Dynamic) ; nouvel échange quand Dynamic change de credentials ou sur 401 `ACCOUNT_REQUIRED` |
| `components/providers/DynamicProviderWrapper.tsx` | Monter `GamificationAutoCheckIn` (nouveau, dans `components/providers/`) à côté de `UserProfileAutoSync` |
| `app/layout.tsx` | Rien : le `Toaster` de `@chiliztv/ui` (sonner) existe déjà |
| `components/live/chat/ChatMessageList.tsx` | Collecte des wallets distincts des messages visibles → `useProfileBadges` (un appel par lot, débouncé) |
| `components/live/chat/ChatMessageItem.tsx` | `LevelPill` avant le pseudo ; pseudo enveloppé dans `ProfileHoverTrigger` (résolution par `message.walletAddress`) ; **ne pas** toucher `isFeatured` (abonné actif) ni la couleur or qui lui est réservée ; pas de pastille sur les messages système |
| `components/features/leaderboard/sections/PreviewRow.tsx`, `PreviewTable.tsx`, `MyPosition.tsx` | `FramedAvatar` + pastille + titre sous le nom ; badges chargés en lot par la table |
| `components/live/sections/StreamerStrip.tsx` | Cadre *Antenna* (ou cadre porté) et ligne *Level 31 · Voice of the Match · 152 h streamed* |
| `components/features/dashboard/Dashboard.tsx` | Insérer `<ProgressionSection />` entre `DashboardHero` et `QuickActionsStrip` |
| `components/features/dashboard/sections/DashboardHero.tsx`, `components/features/dashboard/components/ProfileAvatar.tsx` | Titre sous le nom ; le halo actuel devient le cadre porté |
| `components/features/live/LivePage.tsx` | Monter `useWatchHeartbeat({ matchId, streamId: selectedStream?.id, isPlaying })` |
| `components/shared/UserBadge.tsx` | Props optionnelles `frameId` et `level` (rétrocompatibles) |
| `app/u/[wallet]/page.tsx` (nouveau) | Server Component minimal qui rend `PublicProfilePage` |
| `components/features/win-card/domain/types.ts`, `domain/buildWinCard.ts`, `components/WinCard.tsx` (ticket G19) | `level`, `titleId` et `frameId` dans `WinCardData` |

**Carte au survol** (maquette 04)
- Avatar encadré + pastille de niveau.
- Pseudo, titre choisi en couleur du rang, ligne méta (*Captain rank*, tags *New* `#2dd4a4`, *Streamer*, *Crown*, *Founder*).
- Jauge *LVL 27 · 1,320 / 2,700 XP*.
- Ligne de série (*Daily streak 14 days* · *Best 31*) ; pour un streamer, *152 h streamed* · *Daily streak*.
- Vitrine de 1 à 3 tuiles.
- Pied : *Member since Nov 2026*, *View profile* (→ `/u/[wallet]`), bouton signalement (`ReportButton targetType="account"`).
- **Aucun montant, aucun succès privé.** Si le wallet n'a pas de compte, pas de pastille ni de carte (pseudo simple).

**Section Progression** (dashboard, propriétaire)
- Niveau, jauge, XP du jour par source.
- Série + gels (icônes) + meilleure série.
- 3 prochains paliers les plus proches.
- Sélecteurs de titre, de cadre et de vitrine (`PUT /gamification/me/cosmetics`).
- Succès privés (*Bet Volume*) marqués *Only visible to you*.
- Lien *How XP works*.

**Texte de *How XP works*** (EN, transparence, ⚠ à faire relire)
> *XP measures your activity on PredCast. It is never money, credit or a fee discount. You earn it by checking in each day, watching live matches, chatting, following streamers, streaming and, for bets of 5 USDC or more, 1 XP per USDC staked (up to 1,000 XP a day). Double XP events only boost check-ins, watching, chat and streaming, never bets. Your streak only needs you to open the app; a freeze protects a missed day.*

### 9.4 Admin (`apps/admin`)

| Fichier | Modification |
|---|---|
| `config/nav.ts` | Entrée `{ label: 'Gamification', href: '/gamification', icon: …, roles: ['admin'] }` |
| `app/gamification/page.tsx` (nouveau) | Page *Double XP* (prochains, en cours, passés) + formulaire |
| `components/gamification/DoubleXpPanel.tsx`, `DoubleXpRow.tsx`, `DoubleXpForm.tsx`, `SuspendGamificationButton.tsx` (nouveaux) | Primitives existantes (`Button`, `Badge`, `CardHead`, `TRow`, `TwoStepButton`, `Modal`) ; heure courante via `useNow()` |
| `lib/api/endpoints/gamification.ts`, `lib/query/keys.ts`, `hooks/api/useDoubleXpEvents.ts` (nouveaux ou modifiés) | 4 couches, sans barrel (CLAUDE.md §3.2ter) |
| `packages/shared/src/dto/admin/AdminGamificationDtos.ts` (nouveau) | DTO du §9.2 |
| `components/directory/PlayerDetailView.tsx` | Bloc *Gamification* (niveau, XP, série, suspension) + bouton suspendre ; DTO `AdminDirectoryDtos` étendu |

Le formulaire affiche les règles du §3.6 (préavis de 24 h, 72 h au plus, 4 par mois, sources non monétaires) et un aperçu du texte de la bannière. Il est désactivé hors rôle `admin`, mais c'est le backend qui fait foi.

---

## 10. Anti-abus du MVP

### 10.1 Parades

| Vecteur | Parade | Où |
|---|---|---|
| Usurpation d'un wallet (JWT sans preuve) | Aucune XP sans `accountId`, issu d'un JWT Dynamic vérifié RS256 | `ExchangeDynamicTokenUseCase`, routes de gamification |
| Micro-mises répétées | Minimum 5 USDC par pari ; plafond de 1 000 XP par jour | `volumeCredit.ts`, `gamification_credit` |
| Couverture des deux issues | Volume compté = issue maximale ; victoire = profit net > 0 sur le compte | §3.9, `winPolicy.ts` |
| Paris croisés entre ses wallets liés | Agrégation par compte | §3.10 |
| Multi-comptes (wallets non liés) | Plafonds journaliers, frais de 2 % sur chaque pari, suspension manuelle auditée ; heuristique en itération 2 | §10.3 |
| Marchés annulés | Annulation des crédits de volume ; retardataires ignorés | `ProcessMarketSettlementsUseCase` |
| Paris d'avant le lancement ou d'avant le lien | Ne comptent pas | §3.1 règles 5 et 6 |
| Onglets multiples, page laissée ouverte | 1 minute par compte et par minute ; match en jeu ou stream live seulement ; onglet visible et lecteur actif ; plafonds 10 XP et 240 min par jour | `watchPolicy.ts` |
| Spectateurs bots ou anonymes | `viewer_count`, `viewer_sessions`, `PUT /stream/:id/viewers` et `POST /stream/:id/join` jamais lus ; seuls les heartbeats authentifiés comptent | §3.3 |
| Stream « écran noir » pour farmer des heures | Minute comptée seulement avec un spectateur authentifié **d'un autre compte**, créé depuis plus de 24 h et non banni (sauf les 60 premières minutes à vie) ; 4 h par jour ; `stop_stream` annule la session | `streamMinutePolicy.ts` |
| Spam de chat | ≥ 4 caractères dont 2 alphanumériques, anti-doublon (hash), 20 s entre deux crédits, 5 XP et 50 messages comptés par jour ; annulation si retiré ; aucune XP en ban | `chatPolicy.ts` |
| Suivre / ne plus suivre en boucle | Un crédit par couple à vie ; `followerId` pris dans le JWT | `RecordFollowXpUseCase`, ticket G2 |
| Don à soi-même | Compte donateur ≠ compte du streamer ; un crédit par streamer et par jour ; montant ignoré | `ProcessSupportEventsUseCase` |
| Joueur banni qui farme | Aucune XP si un wallet lié est banni ; jour non compté pour la série | `CreditXpUseCase` |
| Connexion scriptée | Exige un compte Dynamic réel ; gain limité au statut ; 1 traitement par minute | §3.4 |
| Altération du registre | Append-only (trigger + `REVOKE UPDATE, DELETE`), corrections par lignes `admin_adjustment` auditées | §7.3 |

### 10.2 Croisement avec la modération

- `bans` (036) : vérifié pour chaque crédit, sur tous les wallets liés du compte, avec le cache `ban:active:{wallet}` existant.
- `chat_messages.removed_at`, `removed_by_action_id` : annulation du crédit de chat.
- `report_actions.kind = 'stop_stream'` : annulation des crédits de la session.
- Suspension de gamification (`gamification_profiles.suspended_at`) : décision humaine, auditée, réversible. Jamais automatique au MVP.

### 10.3 Itération 2

- `GamificationAbuseScanJob` : paires de comptes aux issues opposées, comptes créés en rafale qui regardent tous le même stream, streamer dont 80 % des minutes viennent d'un même spectateur. Les signalements vont en revue dans *Admin › Players*.
- Pondération de l'exemption streamer selon l'ancienneté.

---

## 11. Critères d'acceptation et plan de tests

### 11.1 Critères d'acceptation

| # | Critère |
|---|---|
| CA1 | Un JWT obtenu sans `dynamicJwt` valide ne porte pas `accountId` ; toute route `/gamification/*` authentifiée répond 401 `ACCOUNT_REQUIRED`. |
| CA2 | Premier `check-in` du jour de Paris : +50 XP (série 1). Un second appel le même jour répond `credited: false` sans changer les totaux. Deux appels simultanés ne créent qu'une ligne. |
| CA3 | Série de 11 jours : le 11e jour rapporte 100 XP, le 12e aussi. Au 7e jour, un gel est gagné ; au 21e, le stock reste à 2. |
| CA4 | 1 jour manqué avec 1 gel : la série continue au retour et le gel est consommé (notification). 2 jours manqués avec 1 gel : série à 1, gel conservé. |
| CA5 | Les jours de Paris sont exacts autour de minuit et des changements d'heure du 2027-03-28 et du 2027-10-31 (connexion à 23:59 puis à 00:01 heure de Paris : deux jours distincts). |
| CA6 | Un pari de 4,99 USDC ne crée aucune ligne ; un pari de 5,00 USDC crée `bet_volume` à 5 XP. |
| CA7 | Wallet A 30 USDC sur Home et wallet B (même compte) 30 USDC sur Away : 30 XP au total, la seconde ligne à 0 XP avec `reason = 'hedge'`. |
| CA8 | 1 200 USDC misés dans la journée : 1 000 XP ce jour-là, le reste à 0 (`daily_cap`). Les paris du lendemain rapportent de nouveau. |
| CA9 | Marché annulé : toutes ses lignes `bet_volume` sont annulées, `xp_total` et `bet_volume_usdc` baissent, aucun palier n'est retiré. |
| CA10 | Marché gagné une seule fois par compte, même avec deux wallets gagnants. Une couverture proportionnelle à la pool n'est pas gagnante. 4 USDC sur l'issue gagnante plus 5 USDC sur une perdante ne sont pas gagnants. |
| CA11 | 6 messages valides dans la journée : 5 XP. Un message retiré par la modération : −1 XP. Un doublon ou un message envoyé 10 s après le précédent : 0 ligne. |
| CA12 | Deux onglets ouverts : 1 minute comptée par minute. 100 minutes : 10 XP ; la 110e minute : pas d'XP. Heartbeat sur un match non commencé sans stream live : `counted: false, reason: 'not_live'`. |
| CA13 | Stream sans autre spectateur authentifié, après les 60 premières minutes à vie : 0 minute comptée. Avec un spectateur éligible : 10 XP par heure, 40 XP par jour au plus. `stop_stream` : crédits de la session annulés. |
| CA14 | Double XP ×2 actif : connexion du jour 11 à 200 XP, chat plafonné à 10 XP, `bet_volume` inchangé. Création incluant `bet_volume` → 400 ; début dans moins de 24 h → 400 ; chevauchement → 409 ; 5e événement du mois → 400. Chaque action est inscrite dans `audit_log`. |
| CA15 | `GET /gamification/cards/:wallet` répond sans JWT et ne contient ni montant ni succès *Bet Volume* (test de schéma : aucune clé `amount`, `stake`, `pnl`, `volume`). |
| CA16 | `PUT /gamification/me/cosmetics` : titre non possédé → 422 ; 3 tuiles de vitrine au niveau 9 → 422 ; tuile *Bet Volume* → 422. |
| CA17 | Une montée de niveau donne exactement un toast, et plus après l'ack. Pas de toast quand le niveau baisse. |
| CA18 | Remettre à zéro le curseur `bets` puis relancer `GamificationChainProcessor` : aucune ligne nouvelle, totaux inchangés. |
| CA19 | Aucun pari, minute ni cycle antérieur à `GAMIFICATION_LAUNCH_AT` n'est crédité. |
| CA20 | Ban actif sur un wallet lié : `check-in` → `credited: false, reason: 'banned'` ; pas d'XP de chat ni de visionnage. |
| CA21 | Cycle clos : top 100 photographié en moins d'une heure après l'indexation d'`EpochAdvanced` ; le 1er porte *Crown* jusqu'au snapshot du cycle suivant ; l'XP du palier V n'est versée qu'une fois à vie. |
| CA22 | Le chat garde la couleur or des abonnés actifs (`isFeatured`) ; la pastille de niveau est un élément distinct. |
| CA23 | Accessibilité : la carte s'ouvre au focus clavier et se ferme avec Échap ; les animations s'arrêtent avec `prefers-reduced-motion` ; contrastes AA. |

### 11.2 Plan de tests (CLAUDE.md §4.1ter)

| Niveau | Contenu |
|---|---|
| **Domaine** (tests unitaires vitest, `packages/domain/src/gamification/__tests__/`) | `levelCurve` : `levelOf(xpForLevel(L)) = L` et `levelOf(xpForLevel(L) − 1) = L − 1` pour L = 2 à 60 ; plafond à 60. `checkInXp` (s = 1 à 15). `streakPolicy` : tous les cas du §3.5, gel plein, gels non consommés. `parisDay` : DST, minuit. `volumeCredit` : seuil 5 USDC, couvertures, ordre de chaîne, décimales 6 et 18. `winPolicy` : net, couverture, combinaisons sous 5 USDC. `chatPolicy`. `watchPolicy`. `streamMinutePolicy` (exemption, âge du spectateur). `doubleXpPolicy` (fenêtre `[)`, sources, préavis, quota mensuel en heure de Paris). `achievementEvaluator` (plusieurs paliers d'un coup, palier dynamique *Versatility*). `cosmetics` (emplacements, propriété, *Crown* expirée). Aucun test JSX (CLAUDE.md §8.5). |
| **L1 fixtures** | `apps/backend/src/testing/fixtures/gamification.fixtures.ts` (nouveau) : `accountFixture()`, `linkedWalletFixture()`, `betRowFixture({ stakeUsdc, outcome, wallet })`, `marketResolvedFixture()`, `marketCancelledFixture()`, `doubleXpEventFixture()`. Tout match passe par `matchFixture` et `nextTestMatchId()` (plage 999000–999999), sans payload `Match.create` en dur. |
| **L2 scénarios** | `apps/backend/src/testing/scenarios/gamification-matchday.scenario.ts` (deux comptes, une couverture, un pari de 4 USDC, résolution, vérification du registre) et `gamification-cancel.scenario.ts` (annulation et annulation des crédits), enregistrés dans `scenarios/registry.ts` ; `pnpm match:scenario` puis `pnpm match:reset` pour nettoyer. |
| **L3 `IClock`** | Use cases et jobs testés avec `MockClock` : `advanceBy` pour passer minuit à Paris, les DST, l'ouverture et la fermeture d'un double XP, `GAMIFICATION_LAUNCH_AT`, la fenêtre *Founder* et les trous de série. Aucun `new Date()` direct (garde ESLint). |
| **L4 intégration** | `apps/backend/src/testing/integration/gamification-chain.integration.test.ts` (Anvil + Supabase local : paris → `PariMatchEventIndexer` → `GamificationChainProcessor` → registre ; annulation ; rembobinage idempotent) et `gamification-credit.integration.test.ts` (20 crédits de chat en parallèle → plafond exact ; append-only : `UPDATE` refusé). |

---

## 12. Tickets ordonnés

Tailles : **S** ≈ 1 à 2 jours, **M** ≈ 3 à 5 jours, **L** ≈ 6 à 10 jours (un développeur).

| # | Ticket | Contenu | Taille | Dépend de |
|---|---|---|---|---|
| G0 | Vérifications et accords | Décoder un JWT Dynamic réel en staging (`iss`, `aud`, `scope`, forme de `verified_credentials[].chain`) ; accord pour les migrations 043 et 044 (CLAUDE.md §9) ; date de `GAMIFICATION_LAUNCH_AT` ; questions juridiques du §13 envoyées | S | — |
| G1 | Comptes et preuve d'identité | Migration 043 ; `IIdentityTokenVerifier` + `DynamicJwtVerifier` ; `ExchangeDynamicTokenUseCase` ; `/auth/token` accepte `dynamicJwt` ; `JwtPayload.accountId` ; front (`auth-provider.tsx`, `lib/api/auth.ts`) ; `DYNAMIC_ENVIRONMENT_ID`, `GAMIFICATION_LAUNCH_AT`, `GAMIFICATION_ENABLED` ajoutés **ensemble** à `apps/backend/.env.example` et `.env.local.example` (CLAUDE.md §7.11) | M | G0 |
| G2 | Durcissement de l'identité | `POST /follows` et `DELETE /follows` : `followerId` = `dynamicUserId` du JWT ; `POST /stream` monté derrière `authenticate`, `streamerId` et `streamerWalletAddress` pris dans le JWT ; puis refus de `/auth/token` sans `dynamicJwt` | S | G1 |
| G3 | Domaine gamification | `packages/domain/src/gamification/` : catalogue complet (§3.2, §4, §5), toutes les politiques pures et leurs tests | M | — (en parallèle de G1) |
| G4 | Schéma et dépôts | Migration 044 (tables, fonctions, RLS, trigger) ; dépôts Supabase ; jetons DI (`TOKENS`) | M | G0, G1 |
| G5 | Noyau de crédit | `CreditXpUseCase` (bans, suspension, double XP, appel SQL, montée de niveau, notifications, invalidation Redis), `EvaluateAchievementsUseCase` | M | G3, G4 |
| G6 | Connexion et série | `CheckInUseCase` + route ; `GamificationAutoCheckIn` + `useAutoCheckIn` ; toast de connexion | S | G5 |
| G7 | Visionnage | Route heartbeat + `RecordWatchHeartbeatUseCase` + `gamification_record_watch_minute` ; `useWatchHeartbeat` dans `LivePage.tsx` ; `GamificationPurgeJob` | M | G5 |
| G8 | Chat, suivis, premiers pas | `RecordChatXpUseCase` (depuis `SendMessageUseCase`), `RecordFollowXpUseCase` (depuis `FollowStreamerUseCase`), `RecordProfileStepUseCase` (pseudo, avatar) ; annulation des messages retirés | S | G5, G2 |
| G9 | Processeur on-chain | `GamificationChainProcessorJob` : volume, résolutions, annulations, soutien ; curseurs ; entrées `JobRegistry` et `JobLocks` | L | G5 |
| G10 | Streamers | `GamificationStreamMinutesJob` (réconciliation des sessions, minutes avec spectateur, exemption) ; annulation sur `stop_stream` | M | G7, G2 |
| G11 | Classement | Correctif d'idempotence de `LeaderboardIndexer` (D6) ; `GamificationCycleSnapshotJob` ; succès *Leaderboard* ; Podium et Crown | M | G5 |
| G12 | API de lecture | `/me`, `PUT /me/cosmetics`, ack, `cards/:wallet`, `cards/badges`, `profiles/:wallet`, `double-xp/current` ; DTO Zod dans `packages/shared` ; cache Redis | M | G5 |
| G13 | Composants front communs | Domaine front, `FramedAvatar`, `LevelPill`, `XpBar`, `StreakStat`, `ShowcaseTile`, `ProfileHoverCard` et son déclencheur ; endpoints, clés de requête, hooks | M | G12 |
| G14 | Surfaces : chat, leaderboard, page live | `ChatMessageList` / `ChatMessageItem`, `PreviewRow` / `PreviewTable` / `MyPosition`, `StreamerStrip`, `UserBadge` | M | G13 |
| G15 | Section Progression | `ProgressionSection` dans `Dashboard.tsx`, sélecteurs, succès privés, *How XP works* ; titre et cadre dans `DashboardHero` et `ProfileAvatar` | M | G13 |
| G16 | Page profil publique | `app/u/[wallet]/page.tsx`, `PublicProfilePage` (peut glisser en itération 2 : le bouton *View profile* est alors masqué) | M | G13 |
| G17 | Notifications et bannière | `useGamificationToasts` (montée de niveau, palier, gel), `DoubleXpBanner` | S | G13 |
| G18 | Admin | Page *Gamification* (double XP : liste, création, annulation) ; suspension ; bloc dans `PlayerDetailView` ; audit ; nav ; DTO admin | M | G12 |
| G19 | Carte de victoire | Niveau, titre et cadre dans `WinCardData` et le rendu (optionnel, acquisition) | S | G13 |
| G20 | Tests L2 et L4, lancement | Scénarios, tests d'intégration, runbook (ordre : migrations à la main avant le code, cf. CLAUDE.md §2 ; activation du flag ; surveillance d'*Admin › Jobs*) | M | G6 à G12 |

**Chemin critique** : G0 → G1 → G4 → G5 → G9 → G12 → G13 → G14. Environ 7 à 9 semaines pour un développeur, 4 à 5 semaines pour deux (back et front en parallèle à partir de G5).

---

## 13. Points à valider juridiquement avant le lancement

1. **XP de volume** (1 XP par USDC, 1 000 XP par jour, minimum 5 USDC) : constitue-t-elle une incitation ou une gratification encadrée par l'ANJ ? Variante plus sûre déjà prête : XP par marché joué, montant ignoré.
2. **Série quotidienne** sur un produit d'argent réel, même sans mise requise, sans notification et avec gel automatique. Variante plus sûre : série hebdomadaire, ou mode pause qui gèle la série.
3. **Double XP** : périmètre limité aux sources non monétaires (figé en base), ×2 au plus, préavis de 24 h, 4 par mois. Faut-il interdire certaines plages horaires ?
4. **Paris gagnants et classement** : bonus fixe de 5 XP par marché gagné, succès et cosmétiques liés au profit. Variante plus sûre : pas d'XP, cosmétique seul.
5. **Affichage public d'un statut** dérivé en partie des paris (titres de victoires, rang) ; volume privé, aucun montant affiché.
6. **Non-convertibilité** de l'XP et des cosmétiques : clause à ajouter aux CGU.
7. **Outils de jeu responsable** absents du produit (pause, limites, auto-exclusion) et absence de contrôle d'âge : faut-il en faire un prérequis à la gamification ?
8. **Récompense à durée limitée** *Founder* (niveau 5 sous 60 jours) : risque de pression temporelle.

---

## 14. Prérequis et défauts connus du code

| # | Défaut ou prérequis | Constat (vérifié) | Traitement |
|---|---|---|---|
| D1 | **JWT sans preuve de wallet** | `POST /auth/token` (`auth.controller.ts`) signe pour tout `walletAddress` du body ; seule l'admin vérifie une signature | G1 (JWT Dynamic), puis G2 (refus de l'ancien flux). **Bloquant** |
| D2 | **Pas de compte côté backend** | `JwtPayload` = `email`, `walletAddress`, `role` ; `streamer_follows` et `live_streams.streamer_id` sont clés par `userId` Dynamic, `users`, `bets` et le leaderboard par wallet | Tables `accounts` et `account_wallets` ; `accountId` dans le JWT (G1) |
| D3 | **Identité prise dans le body** | `FollowController.follow` lit `followerId` dans le body ; `POST /stream` est monté **avant** `authenticate` et `createStream` lit `streamerId` et `streamerWalletAddress` dans le body | G2 |
| D4 | **Heures de stream non persistées** | `live_streams` n'a pas d'horodatage de passage en live (seulement `created_at`, `ended_at`, `last_heartbeat_at`) ; `OldEndedStreamsCleanupJob` supprime les streams terminés de plus de 7 jours (cron `0 3 * * *`) ; `Stream.start()`, `end()` et `heartbeat()` utilisent `new Date()` dans le domaine | `gamification_stream_sessions`, alimentée par réconciliation toutes les minutes (G10). À déployer **avant** le lancement pour ne rien perdre |
| D5 | **Compteurs de spectateurs falsifiables** | `PUT /stream/:streamId/viewers` (`viewerCount` libre) et `POST /stream/:id/join` (`sessionToken` libre) sont publics ; `viewer_sessions` est anonyme | Jamais utilisés ; heartbeat authentifié (G7). À terme, protéger aussi ces routes |
| D6 | **`WinRecorded` non idempotent** | `LeaderboardIndexer.handleWinRecorded` appelle `increment_leaderboard_score` et `increment_leaderboard_cycle_score` sans déduplication `(tx_hash, log_index)` : un rembobinage double les scores, donc les rangs | G11 : écrire `score = GREATEST(score, newEpochScore)` (l'événement porte le total après incrément), ou dédupliquer par `(tx_hash, log_index)` |
| D7 | **`bets` sans `chain_id`** | Colonne absente (022) alors que Base arrive (`IBettingChainRegistry`, `matches.betting_chain_id`) | Les `ref_key` incluent `chainId` = `COALESCE(matches.betting_chain_id, défaut)` ; ajouter `bets.chain_id` avec le multichain |
| D8 | **Profils « publics » derrière l'authentification** | `/users/by-wallet` et `/users/by-wallets` sont montés après `authenticate` malgré le commentaire « public » | Les routes `cards` publiques joignent `users` elles-mêmes |
| D9 | **Chat et matchs purgés** | Le chat d'un match purgé disparaît (cascade sur `matches.api_football_id`) ; les matchs sans pari sont purgés à 24 h | Crédit de chat synchrone ; job d'annulation toutes les minutes ; `league_id` dénormalisé dans `gamification_watch_minutes` |
| D10 | **`bets.status` par ligne** | `settleMarket` pose WON ou LOST par ligne : une couverture a une ligne WON | Calcul du profit net par compte (§3.3) |
| D11 | **Trois avatars divergents**, aucun en `keccak256(wallet)` (CLAUDE.md §4.4) | `UserBadge` (FNV), `dashboard/components/Avatar.tsx`, `StreamerInitial` | `FramedAvatar` s'appuie sur `UserBadge` ; l'unification complète reste hors MVP (à signaler) |
| D12 | **DTO de profil hors `packages/shared`** | `UserProfileDto` est défini dans `apps/frontend/lib/api/endpoints/users.ts` | Les DTO de gamification vont dans `packages/shared` |
| D13 | **Limiteur HTTP coupé** | `RATE_LIMIT_DISABLED = true` (CLAUDE.md §7.20) | Limites métier via `IRateLimitService` dans les use cases |
| D14 | **Cron UTC limité** | `parseCron` n'accepte que `*`, `*/n` ou une valeur fixe | Jobs à intervalle ; jours de Paris calculés dans le domaine |
| D15 | **Version du leaderboard** | Le CLAUDE.md décrit la V2 (`recordWin` à la réclamation, epoch ouverte) ; le code de la branche courante porte la V3 (`recordProfit` à l'epoch de résolution, `SCORING_GRACE`) | Dans les deux cas, le score d'une epoch close ne bouge plus : le rang se fige à l'indexation d'`EpochAdvanced`, jamais à la frontière théorique de 30 jours |
| D16 | **Présence du chat** | `connected_users` (écrit par le dépôt) contre `chat_connected_users` (migrations) | Hors sujet (décision 20) ; la gamification ne s'en sert pas |
| D17 | **Bans par wallet** | `bans.wallet_address` ; un compte a plusieurs wallets | Le compte est banni si **un** de ses wallets liés l'est |

---

## Sources externes

- Dynamic, *Tokens* (claims `sub`, `scope`, `verified_credentials`, RS256, URL JWKS) : <https://www.dynamic.xyz/docs/overview/authentication/tokens>
- Dynamic, *Server-side auth and JWT* (vérification côté serveur avec une bibliothèque JWT standard) : <https://www.dynamic.xyz/docs/overview/authentication/server-side-auth-and-jwt>

La forme exacte de `verified_credentials[].chain` n'est pas documentée sur ces pages : elle est à relever sur un jeton réel (ticket G0).

La simulation du §6 a été faite jour par jour, avec les valeurs des §3.2 et §5 et les profils du §6.2.
