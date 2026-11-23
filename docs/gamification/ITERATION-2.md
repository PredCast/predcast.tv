# Gamification — itération 2

À faire après le lancement du MVP, rien n'est commencé. Ordre indicatif : anti-abus et indicateurs d'abord (ils disent si le MVP marche), puis la dette, puis les nouveautés produit.

## 1. Anti-abus : `GamificationAbuseScanJob` (§10.3)

Job `safe` du registre, quotidien, qui **signale** (jamais ne sanctionne) dans *Admin › Players* :
- paires de comptes qui misent sur des issues opposées des mêmes marchés ;
- comptes créés en rafale qui regardent tous le même stream ;
- streamer dont 80 % des minutes comptées viennent d'un même spectateur.

Plus la pondération de l'exemption streamer (60 premières minutes à vie) selon l'ancienneté du compte. La suspension reste une décision humaine, auditée.

## 2. Indicateurs du §1.2 dans l'admin

| Indicateur | Cible |
|---|---|
| Activation : comptes créés qui atteignent le niveau 2 en 7 jours | ≥ 50 % |
| Retour : comptes avec une série ≥ 7 jours / actifs sur 30 jours | ≥ 20 % |
| Statut visible : messages de chat affichés avec une pastille | ≥ 90 % des auteurs connectés |
| Voie non monétaire : part de l'XP hors `bet_volume`, `bet_won`, `support` | ≥ 50 % |

Proposition (étape 07) :
- quatre `StatTile` en tête de *Admin › Gamification*, cible en légende ;
- un endpoint `GET /admin/gamification/kpis` en cache Redis court ;
- sur le dashboard, une carte *Engagement* (rôle admin) à côté de *System health*, avec les deux premiers indicateurs, sans rafraîchissement automatique.

Le 3ᵉ indicateur demande de mesurer l'affichage (côté front) ou d'approcher par « messages dont l'auteur a un profil de gamification ».

## 3. « À faire plus tard » (`00-decisions.md`)

- « Paper pronostic » : pronostics sans mise (et les sources qui en dépendent : série de justesse, `free_picks`).
- Calendriers des matchs (basket, nouveaux marchés) ; le palier « catalogue complet » de *Versatility* est dynamique en attendant.
- Notifications push, avec l'application mobile.
- Succès de pic de spectateurs (famille « Streamer · public »).
- NFT : badge ultime ou partenaire.
- Traductions des titres et succès (les clés sont déjà posées).
- Prestige au-delà du niveau 60.
- Outil de jeu responsable : mode pause qui gèle la série (voir `LEGAL_CHECKLIST.md`, points 2 et 7).

## 4. Dette relevée pendant le MVP

### Identité
- **Appelants de `/auth/token` (étape 01)** : dans le repo, seul le front l'appelle encore (la landing n'en a plus besoin, l'admin a son propre flux signé). Après `AUTH_REQUIRE_DYNAMIC_JWT=true` et une période sans log de repli legacy :
  - supprimer le chemin sans `dynamicJwt` de `ExchangeDynamicTokenUseCase` ;
  - supprimer le repli legacy de `sessionIdentity.ts` (identité lue dans le body pour follows et `POST /stream`) ;
  - supprimer `AUTH_REQUIRE_DYNAMIC_JWT`.

  Un appelant hors repo (script, partenaire, appli mobile) casserait à ce moment-là : vérifier les logs d'abord.
- **Conflits de liens de wallets** : résolution manuelle aujourd'hui (log `warn`). Prévoir un écran dans *Admin › Players*.

### Défauts connus (§14)
- **D5** : `PUT /stream/:streamId/viewers` et `POST /stream/:id/join` restent publics et falsifiables. La gamification ne les lit pas, mais l'affichage du nombre de spectateurs en dépend. Les protéger (authentification ou suppression au profit du heartbeat authentifié).
- **D7** : `bets` n'a pas de `chain_id`. Les `ref_key` prennent `matches.betting_chain_id`. Avec le multichain (Base), ajouter la colonne et un curseur `settlements` **par chaîne** (aujourd'hui un seul numéro de bloc).
- **D8** : `/users/by-wallet` et `/users/by-wallets` sont derrière `authenticate` malgré leur commentaire « public ». Les routes `cards` contournent en joignant `users` elles-mêmes. Trancher : publiques ou non.
- **D11** : trois avatars divergents (`UserBadge`, `dashboard/components/Avatar.tsx`, `StreamerInitial`), aucun en `keccak256(wallet)` comme le demande CLAUDE.md §4.4. `UserAvatar` (extrait à l'étape 06) est le point d'unification.
- **D6** : une fois la migration 046 déployée partout et le code de `LeaderboardIndexer` à jour, supprimer `increment_leaderboard_score` et `increment_leaderboard_cycle_score` (nouvelle migration).

### Produit et UI
- Toasts dédupliqués par onglet : deux onglets ouverts au même instant peuvent montrer le même toast une fois chacun.
- Le toast de volume agrégé ne vit que pendant une session ouverte (pas de rattrapage au rechargement).
- Bouton *Follow* de la carte streamer de la maquette non repris.
- Icône dédiée pour *Bet Volume* (trophée générique aujourd'hui).
- Le texte de *How XP works* est à faire relire.
- Leaderboard serré sur mobile ; police mono des pseudos dans `AddressLabel`.

### Admin
- L'annulation d'un double XP **en cours** libère encore sa place du quota mensuel.
- Pas de pagination au-delà des 50 derniers événements double XP et des 20 dernières lignes du registre d'un joueur.
- Un joueur sans pari n'apparaît pas dans la liste *Players* (fiche accessible par URL seulement).

### Jobs
- Un stream repassé en `live` après sa fin garde sa session close : les minutes suivantes ne sont pas comptées.
- Un `stop_stream` survenu flag coupé n'est pas rejoué à l'activation (aucune minute n'était comptée, donc sans effet aujourd'hui).
- « Run now » des jobs gamification depuis l'admin à tester de bout en bout en staging.
