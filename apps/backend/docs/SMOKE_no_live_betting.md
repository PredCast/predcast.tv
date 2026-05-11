# Smoke — no live betting (defense-in-depth)

Procédure manuelle pour valider que la chaîne complète bloque tout pari
post-kickoff. À exécuter sur Chiliz Spicy testnet (chainId 88882). Durée
estimée : ~15 min si tout marche du premier coup.

## Préalables

- Variables d'env backend renseignées : `CHILIZ_RPC_URL`, `ADMIN_PRIVATE_KEY`,
  `USDC_ADDRESS`, `BETTING_FACTORY_ADDRESS`.
- Wallet test funded en CHZ (gas) + USDC (au moins 1 USDC pour les bets).
- `cast` (Foundry) installé.
- Backend tourné via `pnpm dev` (ou équivalent), JobScheduler actif — vérifier
  dans les logs : `Starting interval job: CloseLiveMarkets`.

```bash
# Export pratique pour la suite
export ADMIN_PK=...
export USER_PK=...
export RPC_URL=https://spicy-rpc.chiliz.com
export USDC=$(...)            # adresse USDC testnet
```

## Étapes

### 1. Créer un match testable

```bash
pnpm ts-node src/presentation/cli/commands/TestMatchLifecycleCommand.ts create \
    --kickoff "$(date -u -v+10M '+%Y-%m-%dT%H:%M:%SZ')" \
    --home "Smoke FC" --away "Test United"
# Récupérer le match id + bettingContractAddress retournés
export MATCH=0x... # bettingContractAddress
export MATCH_ID=42 # id en DB
```

### 2. Ouvrir les markets

```bash
pnpm ts-node src/presentation/cli/commands/SetupMarketsCommand.ts \
    --contract $MATCH
# Vérifier : marketCount = 3, state = Open
cast call $MATCH "marketCount()(uint256)" --rpc-url $RPC_URL
cast call $MATCH "getMarketCore(uint256)(uint8,uint256,uint32,uint64,uint256)" 0 \
    --rpc-url $RPC_URL
# state attendu : 1 (Open)
```

### 3. Pari pré-match — devrait passer

```bash
# Place 0.1 USDC sur Home (selection=0) via le router
cast send $USDC "approve(address,uint256)" $ROUTER 100000 \
    --private-key $USER_PK --rpc-url $RPC_URL
cast send $ROUTER "placeBetWithUsdc(address,uint256,uint64,uint256)" \
    $MATCH 0 0 100000 \
    --private-key $USER_PK --rpc-url $RPC_URL
# → succès attendu
```

### 4. Forcer le match en live

```bash
pnpm ts-node src/presentation/cli/commands/TestMatchLifecycleCommand.ts set-status \
    --id $MATCH_ID --status 1H
```

### 5. Attendre 1 tick du `CloseLiveMarketsJob`

Le job tourne toutes les 60s. Soit on attend, soit on déclenche manuellement :

```bash
# Dans les logs backend, attendre :
#   "Markets closed (match no longer bettable)" matchId=$MATCH_ID closed=3
```

### 6. Vérifier on-chain : state == Closed

```bash
cast call $MATCH "getMarketCore(uint256)(uint8,uint256,uint32,uint64,uint256)" 0 \
    --rpc-url $RPC_URL
# state attendu : 3 (Closed)
```

### 7. Pari en live — doit revert

```bash
cast send $ROUTER "placeBetWithUsdc(address,uint256,uint64,uint256)" \
    $MATCH 0 0 100000 \
    --private-key $USER_PK --rpc-url $RPC_URL
# → revert avec InvalidMarketState(0, 3, 1)
```

### 8. Pari en live via le front — bouton désactivé

Ouvrir `http://localhost:3000/live/$MATCH_ID` :
- ✅ La pill affiche `Live · Betting closed`.
- ✅ Les boutons Predict sont désactivés (`aria-disabled="true"`).
- ✅ Cliquer sur une odd ouvre le dialog en mode "Betting closed", pas le flow stake/review.

### 9. Test HT explicite

```bash
pnpm ts-node src/presentation/cli/commands/TestMatchLifecycleCommand.ts set-status \
    --id $MATCH_ID --status HT

# Côté front : pill = "Halftime · Betting closed"
# Côté cast : retenter le bet → revert
```

### 10. Test reprise 2H — markets restent Closed (terminal)

```bash
pnpm ts-node src/presentation/cli/commands/TestMatchLifecycleCommand.ts set-status \
    --id $MATCH_ID --status 2H

# Attendre 60s
cast call $MATCH "getMarketCore(uint256)(uint8,uint256,uint32,uint64,uint256)" 0 \
    --rpc-url $RPC_URL
# state attendu : toujours 3 (Closed) — on ne rouvre jamais.
```

### 11. Test auto-cancel sur CANC

```bash
pnpm ts-node src/presentation/cli/commands/TestMatchLifecycleCommand.ts set-status \
    --id $MATCH_ID --status CANC
# Attendre 60s
cast call $MATCH "getMarketCore(uint256)(uint8,uint256,uint32,uint64,uint256)" 0 \
    --rpc-url $RPC_URL
# state attendu : 5 (Cancelled) — N tx (1 par market) émises côté admin.

# Le bettor de l'étape 3 peut désormais récupérer son refund :
cast send $MATCH "claimRefund(uint256,uint256)" 0 0 \
    --private-key $USER_PK --rpc-url $RPC_URL
```

### 12. Test alerte `live_bet_incident`

Pour valider la couche 4 :

```bash
# 1. Couper temporairement le CloseLiveMarketsJob dans JobScheduler.ts
#    (commenter le startIntervalJob 'CloseLiveMarkets').
# 2. Redémarrer le backend.
# 3. Refaire les étapes 4-7 sans que les markets ne se ferment.
# 4. Quand le bet en live est miné, l'indexer doit logger en error :
#    "event=live_bet_incident — bet placed on non-bettable match"
# 5. Re-décommenter et redémarrer.
```

### 13. Test transition dynamique dialog

Manuel uniquement :
1. Créer un match avec kickoff dans 3 min.
2. Ouvrir le dialog Predict, sélectionner un outcome, aller jusqu'au step
   `stake` (ou même `review`).
3. Attendre que le kickoff buffer (T-2min) soit atteint.
4. ✅ Le dialog doit basculer **automatiquement** sur le panneau "Betting
   closed" sans permettre un Confirm.

## Critères de succès

- Toutes les étapes 1-13 passent.
- Aucun bet ne peut être posé pendant que le match est in-play
  (`1H` / `HT` / `2H` / `ET` / `BT` / `P` / `LIVE` / `SUSP` / `INT`).
- Les markets ne se rouvrent jamais après avoir été fermés.
- Les bets pré-match restent valides et settled normalement au resolveMarket
  final.

## Critères d'échec — rollback immédiat

- Un `placeBetWithUsdc` réussit pendant `1H`/`HT`/`2H` (= la couche 3 contrat
  a un bug — investigate `getMarketCore` côté on-chain).
- Le job tourne (`lastCloseLiveJobAt` récent) mais state reste Open après
  2 ticks consécutifs (= `closeMarketsBatch` revert silencieusement,
  consulter les logs `ViemBlockchainService`).
- Un bet est observé par le indexer alors que `match.status` est live et
  qu'aucun `live_bet_incident` n'est loggé (= le `IIncidentReporter` n'est
  pas correctement injecté).
