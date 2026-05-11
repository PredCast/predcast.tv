# Runbook — No live betting policy

## Politique

Aucun pari n'est accepté pendant qu'un match est in-play. Les statuts
API-Football suivants bloquent la pose :

| Code | Signification | Action |
|---|---|---|
| `1H`, `2H`, `ET`, `BT`, `P` | Mi-temps en cours / prolongations / pause | Markets fermés on-chain |
| `HT` | Mi-temps (halftime) | Markets fermés — **pas** de réouverture entre 1H et 2H |
| `LIVE` | In-play générique | Idem |
| `SUSP`, `INT` | Suspendu / interrompu | Markets fermés en attente de reprise ou de CANC |
| `PST` | Reporté | Markets fermés ; cancel admin manuel possible |
| `CANC`, `ABD` | Annulé / abandonné | Markets **cancelled** automatiquement (ouvre `claimRefund`) |
| `FT`, `AET`, `PEN` | Terminé | Markets resolved via `ResolveFinishedMatchesUseCase` |

Buffer kickoff : 120s par défaut (env `CLOSE_LIVE_JOB_BUFFER_SEC`). Le pari
ferme 2 minutes avant le coup d'envoi pour absorber le lag RPC.

## Architecture — defense-in-depth (4 couches)

```
[Couche 4] BettingMatchEventIndexer → IIncidentReporter
                                       (log structuré event=live_bet_incident)
                                       ↑ déclenchée seulement si 1-3 ont échoué
[Couche 3] BettingMatch.placeBetUSDC  → require(state == Open) → revert
[Couche 2] Frontend MatchMarketsList  → canBet = isOpen && isBettable(...)
[Couche 1] CloseLiveMarketsJob (60s)  → closeMarketsBatch on-chain
```

Source de vérité unique : [`packages/domain/src/matches/policies/BettablePolicy.ts`](../packages/domain/src/matches/policies/BettablePolicy.ts).
Consommée par front et back. Toute autre comparaison de statut local est
un bug en attente d'arriver — une règle ESLint `no-restricted-imports`
empêche de recopier `LIVE_STATUSES` côté front.

## Surveiller le bon fonctionnement

### Logs structurés à filtrer

```
# Job tick
event="CloseLiveMarketsJob completed" closed=>0 cancelled=>0
event="CloseLiveMarketsJob idle tick" closed=0 cancelled=0 ms=<n>

# Markets fermés sur événement
event="Markets closed (batch)" closed=<n> ids=[...] txHash=0x...
event="Market cancelled" id=<n> reason="Match CANC"

# Incident (alerte humaine nécessaire)
event="live_bet_incident" txHash=0x... user=0x... matchStatus=1H
```

Vérifier que `lastCloseLiveJobAt` est récent (moins de 2 minutes). Si > 5
minutes : le job ne tourne plus ou le RPC est down.

### Métriques utiles (à exposer dans une PR future)

- `close_live_markets_job_last_run_at` (timestamp)
- `close_live_markets_job_matches_scanned` (gauge)
- `close_live_markets_job_markets_closed` (counter)
- `close_live_markets_job_errors` (counter)
- `live_bet_incident_count_24h` (counter — alerte si > 1)

## Réponse aux incidents

### A — Alerte `live_bet_incident` reçue

Un bet a été indexé sur un match in-play. Toutes les couches du
defense-in-depth ont échoué. **Investiguer dans l'ordre :**

1. **Le job tourne-t-il ?** Vérifier les logs récents du backend pour
   `CloseLiveMarketsJob` (tick toutes les 60s). Si absent :
   - Redémarrer le backend → le job se lance immédiatement au boot.
   - Vérifier que `JobScheduler.start()` est bien appelé.

2. **Le RPC est-il accessible ?** Vérifier les logs `ViemBlockchainService`
   — chercher `Failed to read markets` / `closeMarketsBatch failed`.
   - Si RPC down : tester `cast block-number --rpc-url $RPC_URL`.
   - Switcher sur un RPC secondaire si configuré.

3. **Nonce stuck ?** Si une tx est restée pending sans miner, les txs
   suivantes sont bloquées. Utiliser le CLI existant :

   ```bash
   pnpm ts-node src/presentation/cli/cancel-stuck-txs.ts
   ```

4. **Fermer manuellement** le market touché pour stopper l'hémorragie :

   ```bash
   cast send $MATCH_CONTRACT "closeMarketsBatch(uint256[])" "[0,1,2]" \
       --rpc-url $RPC_URL --private-key $ADMIN_PK
   ```

5. **Post-mortem** : extraire le `txHash` de l'incident, identifier le
   bettor (`user`), évaluer l'impact (montant + side de la pool). Si la
   pool est compromise, envisager un buy-back ou un `cancelMarket` du
   marché concerné (ouvre les refunds pour TOUS les bettors de ce
   market — assumer un coût opérationnel).

### B — Le job tourne mais `markets_closed = 0` sur un match en `1H`

Investigation :

1. Lire l'état on-chain :
   ```bash
   cast call $MATCH "marketCount()(uint256)" --rpc-url $RPC_URL
   cast call $MATCH "getMarketCore(uint256)(uint8,uint256,uint32,uint64,uint256)" 0 \
       --rpc-url $RPC_URL
   ```
2. Si `state == 1` (Open) malgré le job, et que les logs `ViemBlockchainService`
   ne montrent rien : vérifier que le match est bien retourné par
   `matchRepository.findAll()` côté DB (présence d'un `bettingContractAddress`).
3. Vérifier que `match.status` côté DB est bien `'1H'`/`'HT'`/etc. — si la
   colonne contient encore `'LIVE'` brut, c'est que `SyncMatchesJob` n'a pas
   tourné depuis le décollapsage du Lot 2.5. Forcer un sync :
   `cast call ...` ou attendre le tick suivant (10 min).

### C — Bettor se plaint que son pari pré-match a été refusé

Probablement le kickoff buffer (T-2min). Vérifier :

```ts
// L'état attendu côté UI :
verdict = isBettable({ status: 'NS', kickoffAt: '...' }, now, { kickoffBufferSec: 120 })
// → { ok: false, reason: 'KICKOFF_BUFFER' }
```

Réponse : c'est by design. Le buffer garantit qu'aucun pari n'arrive sur la
chaîne juste avant le coup d'envoi (potentielle race avec le job). Si on
veut un buffer plus court, ajuster `CLOSE_LIVE_JOB_BUFFER_SEC` (minimum
30s recommandé).

## Ce qu'on ne ferme JAMAIS automatiquement

- Statuts `AWD` (Awarded) / `WO` (Walk Over) — résolution administrative
  manuelle requise (score officiel à valider à la main).
- Statuts inconnus (mapping API-Football pas à jour) — la policy bloque
  par sécurité, mais aucune action on-chain n'est tentée. Log `warn` côté
  `FootballApiAdapterImpl` qui invite à étendre `BettablePolicy.ts`.

## Chat notifications

Les notifications de bet (`type=SYSTEM, systemType='bet'`) sont publiées
**uniquement** dans le canal général du match (`match_id=X, stream_id=NULL`).
L'invariant est vérifié à l'entité — `ChatMessage.create({ systemType: 'bet',
streamId: 'xxx' })` throw immédiatement avec un message explicite. Voir
[ChatMessage.ts](../packages/domain/src/chat/entities/ChatMessage.ts).
Front : [supabase-chat.service.ts:301](../apps/frontend/services/supabase-chat.service.ts#L301) filtre `stream_id != null` côté subscribers stream-overlay, donc une notif ne fuite jamais d'un canal à l'autre.

## Tests reproductibles

- **Scénario L2 dédié** : `pnpm match:scenario run no-live-betting-full` rejoue HT + kickoff buffer + cancel en local. Cleanup via `pnpm match:reset`. Voir [apps/backend/SMOKE.md](../apps/backend/SMOKE.md).
- **Suite L4** : `pnpm test:integration --grep "no-live-betting"` exécute les assertions on-chain contre Anvil + Supabase local. Runbook [apps/backend/SMOKE_integration.md](../apps/backend/SMOKE_integration.md).

## Issues backlog liées

- [ ] **Branch Sentry on backend** — aujourd'hui les incidents sont log-only.
  Sans destination externe, la détection est humaine. Ajouter `@sentry/node`
  + remplacer `LogIncidentReporter` par `SentryIncidentReporter` (le port
  `IIncidentReporter` est déjà en place).
- [ ] **Re-pricing oracle live** — prérequis pour rouvrir le pari en live.
  Tant que ça n'existe pas, la policy actuelle reste défensive et bloque
  toute fenêtre in-play.
- [ ] **`suspendMarketsBatch` côté smart contract** — actuellement on utilise
  `closeMarketsBatch` (terminal). Si on veut pouvoir rouvrir un market plus
  tard, il faudra ajouter une variante batch de `suspendMarket`.
