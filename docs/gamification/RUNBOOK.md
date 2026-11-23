# Gamification — runbook de lancement

Ordre de mise en prod de la gamification (étapes 01 à 07, PR #45 à #52 et PR de l'étape 08). À suivre d'abord sur **staging**, puis sur **production**.

Rappels :
- `GAMIFICATION_ENABLED` reste à `false` en prod jusqu'au lancement. Le lancement est une **décision humaine**, après la gate juridique ([`LEGAL_CHECKLIST.md`](LEGAL_CHECKLIST.md)).
- Le backend lit la config au démarrage (`GamificationConfigService`). Changer une variable sur Fly redémarre les machines (`fly secrets set` déclenche un redéploiement progressif). **`chiliztv-api` et `chiliztv-workers` doivent toujours avoir les mêmes valeurs.**
- Le front n'a aucune variable de gamification : il déduit l'état des réponses de l'API (404 / `disabled` / `not_launched` → aucune UI de gamification).

---

## 0. Merge des PR

Ordre (branches empilées) :

| Ordre | PR | Contenu | Migration |
|---|---|---|---|
| 1 | #46 | comptes, JWT Dynamic, identité prise dans le JWT, `JOBS_ONCHAIN_ENABLED` | 043 |
| 2 | #45 | domaine (règles, catalogue, interrupteurs juridiques) | — |
| 3 | #47 | schéma, noyau de crédit, connexion | 044 |
| 4 | #48 | sources XP joueurs | 045 |
| 5 | #50 | streamers et classement, **correctif D6** | 046, 047 |
| 6 | #49 | API, composants, surfaces | — |
| 7 | #51, #52 | progression, profil, notifications ; admin | — |
| 8 | étape 08 (`feat/gamification-launch`) | tests L2 / L4, runbook, gate juridique | — |

La branche `feat/gamification-launch` contient tout : la merger seule, à la place des PR une par une, revient au même.

**D6 (bug de prod indépendant)** : le commit `5a375b2` (migration 046 `record_leaderboard_win`) corrige le double comptage du score leaderboard au rembobinage. Il peut partir avant le reste, mais `validate-migrations` refuse un trou de numérotation : il faudrait alors le renuméroter en 043 et décaler 043 à 045 de la gamification.

---

## 1. Migrations (à la main, **avant** le code)

Tant que `ci/db-migrate-before-deploy` n'est pas mergée, `db-migrate` tourne **en parallèle** du déploiement (CLAUDE.md §2). Il faut donc lancer les migrations à la main avant de pousser le code :

1. GitHub → Actions → **db-migrate** → *Run workflow* → `target: staging`.
2. Vérifier sur staging (ci-dessous).
3. Même chose avec `target: production`, avant le tag de release.

| Numéro | Fichier | Contenu |
|---|---|---|
| 043 | `043_accounts.sql` | `accounts`, `account_wallets` |
| 044 | `044_gamification.sql` | registre append-only, profils, succès, séries, double XP, notifications, curseurs ; `gamification_credit`, `gamification_check_in`, `gamification_rebuild_profiles` |
| 045 | `045_gamification_sources.sql` | `gamification_record_watch_minute` + index de scan |
| 046 | `046_leaderboard_win_idempotence.sql` | `record_leaderboard_win` (D6) |
| 047 | `047_gamification_streams.sql` | minutes de stream, `stop_stream` |

Vérification (SQL editor Supabase, lecture seule) :

```sql
SELECT to_regclass('public.accounts'), to_regclass('public.gamification_ledger'),
       to_regclass('public.gamification_stream_sessions');
SELECT proname FROM pg_proc
 WHERE proname IN ('gamification_credit', 'gamification_check_in', 'gamification_record_watch_minute',
                   'record_leaderboard_win', 'gamification_record_stream_minute');
```

Les migrations ne changent aucun comportement tant que le code n'est pas déployé : 046 ajoute une fonction, les anciennes `increment_*` restent.

---

## 2. Variables d'environnement

### Fly (`chiliztv-api` **et** `chiliztv-workers`, puis `*-staging`)

| Variable | Valeur | Provenance |
|---|---|---|
| `DYNAMIC_ENVIRONMENT_ID` | identifiant de l'environnement Dynamic **Live** | doit être **identique** à `NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID` du front Vercel du même environnement (dashboard Dynamic → *Developers* → *SDK & API keys*). Un jeton d'un autre environnement est refusé (`wrong_environment`). |
| `AUTH_REQUIRE_DYNAMIC_JWT` | `false` au déploiement, `true` ensuite (§3) | — |
| `GAMIFICATION_ENABLED` | `false` | passe à `true` au lancement seulement (§5) |
| `GAMIFICATION_LAUNCH_AT` | instant de lancement ISO 8601 avec fuseau, ex. `2027-01-15T09:00:00+01:00` | décision produit. Vide = pas lancé. Rien n'est crédité avant cet instant. |
| `ALLOWED_ORIGINS` (existante) | doit contenir l'origine du front (`https://app.predcast.tv`, et l'URL Vercel de staging) | le claim `aud` du JWT Dynamic est vérifié contre cette liste (`wrong_audience` sinon) |

```bash
fly secrets set -a chiliztv-api     DYNAMIC_ENVIRONMENT_ID=<live-env-id> AUTH_REQUIRE_DYNAMIC_JWT=false GAMIFICATION_ENABLED=false GAMIFICATION_LAUNCH_AT=<iso>
fly secrets set -a chiliztv-workers DYNAMIC_ENVIRONMENT_ID=<live-env-id> AUTH_REQUIRE_DYNAMIC_JWT=false GAMIFICATION_ENABLED=false GAMIFICATION_LAUNCH_AT=<iso>
```

`JOBS_ONCHAIN_ENABLED` : **ne pas la définir** en prod et en staging. Sans elle, les jobs on-chain tournent dès que `NODE_ENV=production`, comme aujourd'hui. Elle ne sert qu'au dev local.

> L'environnement Dynamic utilisé aujourd'hui en local et en prod est le même (`8d9de814…`). Vérifier dans le dashboard Dynamic que c'est bien l'environnement **Live** avant de le reporter dans `DYNAMIC_ENVIRONMENT_ID`.

### Vercel (front)

Aucune nouvelle variable. Vérifier seulement que `NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID` est l'environnement Live, celui reporté sur Fly.

---

## 3. Bascule de l'identité

Le front envoie le JWT Dynamic à `POST /auth/token`. Le backend prouve alors les wallets, crée le compte et signe un JWT qui porte `accountId`.

1. **Déployer le front** (et la landing, qui n'appelle plus `/auth/token`) avec le code de l'étape 01.
2. **Déployer le backend** avec `AUTH_REQUIRE_DYNAMIC_JWT=false`. Les anciens clients reçoivent encore un jeton legacy.
3. **Vérifier les connexions** pendant 24 h au moins (durée de vie d'un JWT, `JWT_EXPIRY=24h`) :
   - logs : pas de pic de `wrong_environment`, `wrong_audience`, `keys_unavailable` ;
   - `SELECT count(*) FROM accounts;` et `SELECT count(*) FROM account_wallets;` augmentent ;
   - follows et création de stream fonctionnent (identité prise dans le JWT) ; le log `warn` du repli legacy de `sessionIdentity` doit se raréfier.
4. **Passer `AUTH_REQUIRE_DYNAMIC_JWT=true`** (api et workers). `/auth/token` refuse alors toute demande sans JWT Dynamic valide, ce qui ferme l'usurpation de wallet (D1).
5. Revérifier une connexion, un follow et une création de stream.

Conflit de wallet (un wallet déjà lié à un autre compte) : le premier lien gagne, un `warn` est loggé, la résolution est manuelle.

---

## 4. Pré-lancement (code déployé, flag coupé)

- `GamificationStreamMinutes` tourne **déjà** : il ouvre et ferme les sessions de stream quel que soit le flag (D4), pour ne perdre aucune session. Il ne compte ni minute ni XP tant que le flag est coupé.
- `GamificationChainProcessor`, `GamificationCycleSnapshot` et `GamificationPurge` sortent immédiatement.
- L'API répond 404 / `disabled` sur les routes de gamification : l'app est identique à aujourd'hui.
- *Admin › Gamification* est utilisable : on peut programmer un double XP de lancement (préavis 24 h). L'ajustement d'XP est refusé (`GAMIFICATION_CLOSED`).

À vérifier dans *Admin › Jobs* : les 4 jobs `Gamification*` sont présents, en succès, avec une durée courte.

---

## 5. Lancement

1. **Gate juridique** : toutes les cases « décision » de [`LEGAL_CHECKLIST.md`](LEGAL_CHECKLIST.md) sont remplies, les interrupteurs sont posés en conséquence dans `packages/domain/src/gamification/catalog/legalSwitches.ts` (et déployés), la clause CGU est publiée. Sinon, on ne lance pas.
2. Vérifier `GAMIFICATION_LAUNCH_AT` : rien n'est rétroactif. Paris, connexions et messages antérieurs ne comptent pas ; tout le monde part de zéro.
3. **Staging d'abord** : `GAMIFICATION_ENABLED=true` sur `chiliztv-api-staging` et `chiliztv-workers-staging`, puis le parcours de vérification ci-dessous.
4. **Production** : `GAMIFICATION_ENABLED=true` sur `chiliztv-api` et `chiliztv-workers` (même commande, les deux apps).

Parcours de vérification (5 min) :
- se connecter → toast de connexion du jour, section *Progression* du dashboard au niveau 1 ;
- envoyer un message de chat → +1 XP ; survoler un pseudo → carte de profil ;
- `/u/<wallet>` → profil public, aucun montant ;
- *Admin › Players* → bloc *Gamification* du joueur, registre cohérent.

---

## 6. Surveillance

**Admin › Jobs** : `GamificationChainProcessor` (chaque minute), `GamificationStreamMinutes` (chaque minute), `GamificationCycleSnapshot` (`15 * * * *`), `GamificationPurge` (`30 3 * * *`) : statut, durée, dernière erreur.

**Logs `warn` à suivre** :
- conflits de lien de wallet (`ExchangeDynamicTokenUseCase`) ;
- crédits de chat en erreur (le message est envoyé, le crédit est perdu) ;
- erreurs du processeur de la chaîne (un pas en erreur n'empêche pas les suivants, la première erreur est relancée en fin de passe).

**Registre, le premier jour** :

```sql
SELECT source, count(*) AS rows, sum(xp) AS xp
  FROM gamification_ledger
 WHERE created_at >= now() - interval '1 day'
 GROUP BY source ORDER BY rows DESC;

-- Invariant : doit renvoyer 0 ligne.
SELECT p.account_id FROM gamification_profiles p
  LEFT JOIN (SELECT account_id, sum(xp) AS s FROM gamification_ledger GROUP BY account_id) l
    ON l.account_id = p.account_id
 WHERE p.xp_total <> coalesce(l.s, 0);
```

Signaux d'alerte : un compte au plafond de toutes les sources dès le premier jour, `bet_volume` qui domine largement les sources non monétaires (objectif §1.2 : ≥ 50 % d'XP non monétaire), un volume anormal de `chat_message`.

Suspension d'un compte : *Admin › Players* → *Suspend XP* (motif obligatoire, audité, réversible).

---

## 7. Retour arrière

- **Couper** : `GAMIFICATION_ENABLED=false` (api et workers). Les jobs sortent, l'API répond 404 / `disabled`, l'app revient exactement à l'UI d'avant. **Aucune donnée n'est perdue** ; à la réactivation, rien n'est rattrapé pour la période coupée.
- **Recalculer les profils** (si l'invariant `xp_total = SUM(ledger)` est rompu) :
  ```bash
  cd apps/backend
  pnpm gamification:rebuild-profiles --dry-run   # aperçu, n'écrit rien
  pnpm gamification:rebuild-profiles             # recalcule xp_total et niveau depuis le registre
  ```
  À lancer avec les variables Supabase de l'environnement visé (machine `chiliztv-workers` ou poste opérateur).
- **Basculer une source** vers sa variante plus sûre : changer la constante dans `legalSwitches.ts`, déployer. Les lignes déjà écrites restent ; une correction passe par des lignes d'annulation ou d'ajustement, jamais par un `UPDATE` (le registre le refuse).
- **Identité** : `AUTH_REQUIRE_DYNAMIC_JWT=false` rouvre le flux legacy si Dynamic tombe. Pendant ce temps, aucune XP n'est gagnée (pas d'`accountId`).
