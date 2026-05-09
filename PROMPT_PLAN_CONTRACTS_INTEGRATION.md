# Prompt — Plan d'intégration complète des nouveaux smart contracts dans le front

> **À coller à Claude Code en mode plan**. Ne lui demande pas d'écrire du code maintenant — uniquement de **produire un plan d'implémentation** chiffré, ordonné, avec arbitrages explicites. Le plan sera revu humain avant exécution.

---

## 1. Contexte

Les smart contracts ont été refondus et redéployés sur **Chiliz Spicy testnet (chainId 88882)**. Les hooks wagmi sont déjà générés. L'intégration front actuelle a été câblée sur une **ancienne** version des contrats : certaines parties marchent, d'autres sont obsolètes, et la **liquidity pool** n'est que partiellement intégrée.

### Source de vérité
- **Contrats** : `apps/smart-contracts/chiliz-tv/src/` + `apps/smart-contracts/chiliz-tv/README.md` (lis-le en entier — il décrit l'architecture, les rôles, le post-deploy wiring, l'économie LP/treasury).
- **Adresses déployées** : `apps/smart-contracts/chiliz-tv/deployments/chilizTestnet.json` (`BettingMatchFactory` `0x881ae75ec…`, `StreamWalletFactory` `0xc30b1493…`, `ChilizSwapRouter` `0x735526e4…`, `LiquidityPool` `0xd0483…` impl + `0x75fa6ab5…` proxy).
- **Hooks wagmi générés** : `apps/frontend/lib/contracts/generated.ts` (13 467 lignes, 714 hooks `useXxxRead/Write/Simulate/Watch`).
- **Config wagmi** : `apps/frontend/wagmi.config.ts` + ABIs sources dans `apps/frontend/artifacts/`.

### Architecture des contrats (résumé à valider en lisant le README)

```
BettingMatchFactory ──creates──▶ FootballMatch / BasketballMatch (proxies UUPS)
                                          │
                                          ├── placeBetUSDC* (USDC direct)
                                          ├── claim / claimAll / claimRefund
                                          ├── grants ROLE_RESOLVER, ROLE_ADMIN, ROLE_SWAP_ROUTER…
                                          └── reads odds via getCurrentOdds, market lifecycle
                                          
ChilizSwapRouter ──unified entrypoint──▶ {USDC | CHZ | ERC20} → USDC swap → bet/donate/subscribe/depositLiquidity

LiquidityPool (ERC4626 UUPS, asset = USDC)
   ├── deposit/withdraw/redeem (LPs)
   ├── recordBet / settleMarket / payWinner / payRefund (called by authorized matches)
   ├── treasury 2-step rotation (proposeTreasury / acceptTreasury / withdrawTreasury)
   ├── accruedTreasury (loss-split share + LP withdrawal performance fee)
   └── caps : maxLiabilityPerMarketBps, maxLiabilityPerMatchBps, maxBetAmount, depositCooldownSeconds

StreamWalletFactory ──creates──▶ StreamWallet (proxies, lazy on first sub/donation)
                                          │
                                          ├── recordSubscription / recordDonation
                                          └── withdrawRevenue (streamer drains USDC)
```

Loss split par défaut : **40% treasury / 60% LP**. Bettors : 0% à la pose. Toutes les settlements en USDC. Pas de placement fee.

---

## 2. Audit déjà effectué — Tu pars de cet état

### Ce qui marche déjà côté front
| Composant | Hook(s) utilisé(s) | État |
|---|---|---|
| `components/features/discover/sections/PoolPanel.tsx` | `useLiquidityPool` | OK pour TVL / liability / utilization / free / fee. APY = placeholder hardcodé. |
| `components/features/discover/components/PoolDepositDialog.tsx` | `useLiquidityPool` + `useChilizSwapRouter` | OK : deposit USDC/CHZ/ERC20 + withdraw, slippage, allowance. |
| `components/live/MarketBetDialog.tsx` | `useChilizSwapRouter` + reads sur match + pool | OK : bet multi-token avec quote net exposure. |
| `components/live/MatchMarketsList.tsx` | `useBettingMatchReadMarketCount` + `useBettingMatchReadGetMarketInfo` | OK : liste les markets d'un match. |
| `components/live/StreamWalletButton.tsx` / `StreamSubscriptionButton.tsx` | `useStreamWallet` + `useChilizSwapRouter` | OK : donate / subscribe multi-token. |
| `hooks/useChilizSwapRouter.ts` | wrappers générés | OK : multi-token unifié bet/deposit/donate/subscribe. |
| `hooks/useLiquidityPool.ts` | wrappers générés | OK avec `@ts-nocheck` (TS depth limit). |
| `hooks/useBettingMatch.ts` | wrappers générés | OK pour USDC direct. **Ne route pas via le swap router** (multi-token absent). |

### Ce qui est obsolète ou cassé côté front
- **`components/features/predictions/PredictionsDialog.tsx`** — legacy. Utilise `useBettingMatch` direct USDC, `useFanTokens`, `MARKET_IDS` figés, calculs CHZ. Doit être supprimé ou réécrit. Vérifie avec `grep` qui l'importe encore.
- **`hooks/useBettingMatch.ts`** est OK pour USDC mais devrait être harmonisé avec `useChilizSwapRouter` (un seul chemin pour les utilisateurs : passer par le router).
- **Aucune section "Mes positions LP"** dans la page Discover : pas de `costBasis`, pas de `lastDepositAt`, pas de cooldown countdown, pas de gain non réalisé, pas de preview du `lpWithdrawalFee`.
- **Aucune APY réelle** affichée : `POOL_DESIGN_FALLBACK.apy = "18.4%"` dans `PoolPanel.tsx` est statique. Il n'y a pas de calcul historique basé sur les events `MarketSettled` / variation de NAV.
- **Aucun watch hook** branché pour rafraîchir le TVL en temps réel quand une bet ou un settlement arrive — refetch manuel uniquement.
- **Page admin absente** : pas de UI pour `createFootballMatch`, `addMarketWithLine`, `openMarket`, `setMarketOdds`, `resolveMarket`. Aujourd'hui c'est fait soit par script Foundry soit par `BettingContractDeploymentAdapter` côté back, jamais via le front.
- **Page "My bets / claims"** : pas de UI utilisateur pour lister ses bets via `useBettingMatchReadGetUserBets`, voir le market `Resolved` et déclencher `claim` / `claimAll` / `claimRefund`. Il faut la créer.
- **Treasury panel** (proposeTreasury / acceptTreasury / withdrawTreasury / setTreasuryShareBps / setLpWithdrawalFeeBps / setMaxBetAmount / pause / unpause / authorizeMatch) — totalement absent. Dépend si tu veux exposer ça dans `/admin` ou laisser hors front.

### Ce qui est cassé côté back (indexers)
- **`apps/backend/src/infrastructure/blockchain/indexers/BettingEventIndexer.ts`** :
  - Bug majeur : utilise `baseSepolia` (chainId 84532, **Base** chain) quand `networkType === 'testnet'` au lieu de **Chiliz Spicy** (88882). Le `publicClient` ne pointe pas où il croit pointer.
  - Indexe seulement `BetPlaced`. Manque `Payout`, `Refund`, `MarketResolved`, `MarketStateChanged`, `MarketCreated`, `OddsUpdated`, `MarketCancelled`.
  - Convertit l'amount en `Number(amountWei) / 1e18` → faux : les bets sont en **USDC** (6 dp testnet/mainnet réel, mais ici Spicy USDC est 18-dp d'après `usePoolDecimals` du front — à vérifier).
  - Dérive `subType` de `WINNER` uniquement, ignore les autres market types (`GOALS_TOTAL`, `BOTH_SCORE`, etc.). Le mapping par `marketId` n'est pas fait.
- **`apps/backend/src/infrastructure/blockchain/indexers/StreamWalletIndexer.ts`** :
  - Même bug `baseSepolia`.
  - Indexe `DonationProcessed`/`SubscriptionProcessed`/`StreamWalletCreated` du factory. Manque les events des wallets eux-mêmes (`SubscriptionRecorded`, `DonationReceived`, `RevenueWithdrawn`, `PlatformFeeCollected`) et **tous** les events du `ChilizSwapRouter` (qui est la voie d'entrée principale aujourd'hui).
- **Aucun indexeur `LiquidityPool`** : `BetRecorded`, `MarketSettled`, `WinnerPaid`, `RefundPaid`, `TreasuryAccrued`, `LpWithdrawalFeeAccrued`, `Deposit`/`Withdraw` (hérités ERC4626), `Paused`/`Unpaused`, `TreasuryProposed`/`TreasuryAccepted`/`TreasuryWithdrawn`, `*Set` (fees, caps) — aucun event écouté.
- **Aucun indexeur `BettingMatchFactory`** : `MatchCreated` n'est pas écouté → la liste des contracts à indexer dans `BettingEventIndexer.getBettingContracts()` repose uniquement sur la colonne `betting_contract_address` de la table `matches`, qui est probablement remplie par `BettingContractDeploymentAdapter`. Pas de découverte automatique pour des matches créés hors plateforme.
- **Aucun indexeur `ChilizSwapRouter`** : tous les `BetPlacedViaCHZ/Token`, `DonationWithCHZ/Token`, `SubscriptionWithCHZ/Token`, `LiquidityDepositedWith*` sont invisibles côté DB.
- **`abis.ts` du backend** duplique partiellement les ABI du package `@chiliztv/blockchain`. Il faut consolider.

### Adresses & env
- `apps/frontend/.env.example` (testnet) et `apps/frontend/config/chiliz.config.ts` sont à jour : tous les `NEXT_PUBLIC_*` pour factory, router, pool, USDC, WCHZ. Vérifier que `apps/backend` lit bien les **mêmes** adresses (env `BETTING_MATCH_FACTORY_ADDRESS`, `STREAM_WALLET_FACTORY_ADDRESS`, etc. sans `NEXT_PUBLIC_`).
- `packages/blockchain/src/chains/index.ts` exporte un `baseSepolia` qui n'a rien à faire ici. À supprimer ou remplacer par `chilizSpicy` + `chilizMainnet`.

---

## 3. Ce que je veux dans ton plan

Tu vas produire un **plan d'implémentation** structuré (pas de code), divisé en **lots** ordonnés par dépendance, avec pour chaque lot :

1. **Objectif business** en 1 phrase.
2. **Fichiers touchés** (créés / modifiés / supprimés), chemins absolus.
3. **Ordre des sous-tâches** (atomiques, < 1h chacune si possible).
4. **Hooks wagmi à utiliser** (noms exacts depuis `lib/contracts/generated.ts` ; pas de réinvention).
5. **Risques / arbitrages** : qu'est-ce qui peut casser, quel choix entre deux approches, et pourquoi tu recommandes lequel.
6. **Tests / vérifications** : comment on sait que c'est bon (TS, lint, manuel, on-chain via Foundry / cast).
7. **Estimation grossière** en complexité (S / M / L) — pas en jours.

### Lots attendus (à challenger si tu as mieux)

#### Lot 0 — Préliminaires & nettoyage
- Vérifier que les ABIs dans `apps/frontend/artifacts/` correspondent au build Foundry actuel (sinon : régénérer via `pnpm wagmi:gen` après un `forge build`).
- Vérifier `usePoolDecimals` : est-ce que l'asset USDC du pool est 6dp ou 18dp sur Spicy ? Toute la branche front "format" en dépend.
- Régler le bug `baseSepolia` dans `packages/blockchain/src/chains/index.ts` → exporter `chilizSpicy` (88882) + `chilizMainnet` (88888) ; supprimer `baseSepolia`.
- Consolider les ABIs : tout passer par `@chiliztv/blockchain` (supprimer la duplication dans `apps/backend/src/infrastructure/blockchain/abis.ts`).
- Choisir : conserver `hooks/useBettingMatch.ts` direct USDC ou tout faire passer par `useChilizSwapRouter` ? Recommandation à argumenter.

#### Lot 1 — Front : enrichir l'intégration LiquidityPool
- Étendre `hooks/useLiquidityPool.ts` avec les reads manquants : `accruedTreasury`, `treasuryShareBps`, `lpWithdrawalFeeBps`, `treasury`, `pendingTreasury`, `lastDepositAt(holder)`, `costBasis(holder)`, `maxLiabilityPerMarketBps`, `maxLiabilityPerMatchBps`, `convertToShares`, `previewMint`, `previewRedeem`.
- Brancher des `useLiquidityPoolWatch*` (`Deposit`, `Withdraw`, `BetRecorded`, `MarketSettled`, `WinnerPaid`, `RefundPaid`, `TreasuryAccrued`, `Paused`, `Unpaused`) pour invalider la cache react-query au lieu de polling manuel.
- Créer un hook `useLpPosition(userAddress)` qui retourne : `shares`, `assetsValue`, `costBasis`, `unrealizedGain`, `withdrawalFeePreview`, `cooldownRemainingSec`, `canWithdraw` (boolean dérivé du cooldown + `freeBalance`).
- Créer `hooks/usePoolApy.ts` : agrège les events `MarketSettled` + delta NAV sur N jours pour calculer une APY trailing 7d/30d. Domain pur testable. Fallback sur le placeholder si pas assez de données.
- Étendre `PoolPanel.tsx` : remplacer l'APY hardcodé, ajouter une mini-section "Your LP position" si l'utilisateur a des shares (cards mini-bento avec `your shares` / `your USDC` / `unrealized gain` / `withdraw cooldown`).
- Ajuster `PoolDepositDialog.tsx` : afficher cooldown, withdrawal fee preview, gain non réalisé avant `withdraw`/`redeem`.
- **Ne pas casser** ce qui marche : conserver les mêmes signatures publiques de `useLiquidityPool` pour ne pas faire péter `PoolDepositDialog`.

#### Lot 2 — Front : page utilisateur "My bets" + claim
- Créer une route `app/my-bets/page.tsx` (ou `app/dashboard/bets`) qui liste les bets de l'utilisateur connecté.
- Pour chaque match suivi (lecture des events `BetPlaced` filtrés par `user`, ou via API back si déjà indexé), lire `useBettingMatchReadGetUserBets(matchAddress, marketId, user)` et `useBettingMatchReadGetMarketInfo` pour connaître l'état (`Resolved` / `Cancelled` / `Open`…).
- Bouton **Claim** par bet gagnant non claimed → `useBettingMatchWriteClaim` (ou `claimAll` / `claimRefund` selon l'état du market).
- Composants à créer : `MyBetsPage`, `BetCard`, `BetClaimButton`, états loading/empty/error en langage landing.
- Découpage clean architecture : `components/features/my-bets/{sections, components, hooks, domain}` avec types/helpers purs.

#### Lot 3 — Front : page admin matches (optionnelle, gated par rôle)
- `app/admin/matches/page.tsx` — protégée par check côté client `useBettingMatchReadHasRole(matchAddress, ADMIN_ROLE, userAddress)` ou role on `BettingMatchFactory.owner`.
- UI pour : `useBettingMatchFactoryWriteCreateFootballMatch`, `addMarketWithLine`, `openMarket`/`closeMarket`/`suspendMarket`/`cancelMarket`, `setMarketOdds`, `resolveMarket`, `claimAll`.
- Sous-section LiquidityPool admin : `setProtocolFeeBps` (deprecated), `setTreasuryShareBps`, `setLpWithdrawalFeeBps`, `setMaxBetAmount`, `setMaxLiabilityPerMarketBps`, `setMaxLiabilityPerMatchBps`, `pause`/`unpause`, `authorizeMatch`/`revokeMatch`. Avec confirmation Safe-style (dialog "type CONFIRM to proceed").
- Treasury 2-step (proposeTreasury / cancelTreasuryProposal / acceptTreasury / withdrawTreasury) : prévoir le flux mais documenter qu'il doit être fait depuis le Safe, pas depuis un compte EOA.
- Décide si tu intègres ça maintenant ou si tu le scopes "phase 2" — argumente.

#### Lot 4 — Front : route bet/predict harmonisée
- Consolider toute la pose de bet sur **un seul chemin** : `useChilizSwapRouter.placeBet(...)` (multi-token).
- Supprimer / déprécier `components/features/predictions/PredictionsDialog.tsx` une fois que `MarketBetDialog` couvre 100% des cas (`grep` les imports avant).
- S'assurer que la page Discover → carte match → `Predict` ouvre bien le bon dialog (aujourd'hui `MatchExplorer` ne câble pas encore les callbacks `onPredict`/`onWatch`, cf. PR de fusion en cours).
- Watch sur `useBettingMatchWatchBetPlaced` côté `MarketBetDialog` pour fermer le dialog automatiquement après confirmation.

#### Lot 5 — Back : refonte des indexers (impératif)
**Objectif** : avoir un **event indexer par contrat clé**, scopé sur la bonne chain (Chiliz Spicy 88882 testnet / 88888 mainnet), idempotent, avec checkpoint persistant.

- **Fix chain bug** : remplacer `baseSepolia` par `chilizSpicy` partout. Centraliser dans `packages/blockchain/src/chains/index.ts` et l'importer.
- **Checkpoint persistant** : table `indexer_checkpoints (indexer_name, last_block, updated_at)`. Plus de "current_block - 100" hardcodé.
- **Indexers à créer / refondre** :
  1. `BettingMatchFactoryIndexer` (nouveau) — écoute `MatchCreated` → upsert dans `matches` (lien `betting_contract_address` ↔ `api_football_id` peut rester piloté par `BettingContractDeploymentAdapter`, mais on confirme l'event on-chain).
  2. `BettingMatchEventIndexer` (refondu) — écoute, par match autorisé : `BetPlaced`, `Payout`, `Refund`, `MarketCreated`, `MarketStateChanged`, `OddsUpdated`, `MarketResolved`, `MarketCancelled`. **Convertit en USDC selon decimals lus on-chain** (pas hardcodé). Met à jour `predictions` (status PENDING → WON/LOST/REFUNDED), `markets` (state, odds, result), `chat_messages` (system messages).
  3. `LiquidityPoolIndexer` (nouveau) — écoute : `Deposit`, `Withdraw`, `BetRecorded`, `MarketSettled`, `WinnerPaid`, `RefundPaid`, `TreasuryAccrued`, `LpWithdrawalFeeAccrued`, `TreasuryWithdrawn`, `Paused`, `Unpaused`, `*Set`. Persiste en DB pour analytics + APY.
  4. `ChilizSwapRouterIndexer` (nouveau, optionnel) — écoute : `BetPlacedViaCHZ/Token/WithUSDC`, `DonationWith*`, `SubscriptionWith*`, `LiquidityDepositedWith*`. Audit + analytics multi-asset.
  5. `StreamWalletFactoryIndexer` (refondu) — `StreamWalletCreated`, `SubscriptionProcessed`, `DonationProcessed`. + watch direct sur les wallets `SubscriptionRecorded`, `DonationReceived`, `RevenueWithdrawn`, `PlatformFeeCollected`.
- **Tables Supabase** à créer / migrer : `pool_events`, `market_events`, `lp_positions`, `bets` (au-delà de la table `predictions` legacy ?), `indexer_checkpoints`. Schéma à proposer.
- **Idempotence** : dedup par `(transactionHash, logIndex)` ou par PK composite. Aujourd'hui `BettingEventIndexer` dedup par `transactionHash` seul ce qui est insuffisant si plusieurs events partagent la même tx.
- **Pas d'orchestrateur unique** : garder `BlockchainEventListener` qui démarre/stoppe tous les indexers, mais un fichier par contrat.
- **Repositories** : compléter `IPredictionRepository`, `IMatchRepository`, ajouter `ILiquidityPoolEventsRepository`, `ILpPositionRepository` dans `packages/domain/src/`.

#### Lot 6 — Back : services & jobs dérivés
- **Job APY** : précalcule l'APY trailing 7d/30d depuis `pool_events` et l'expose via une API REST consommée par le front (`useApyFromBackend`).
- **Job réconciliation** : match les `BetPlaced` du contrat avec les `predictions` créées via API directe (cas où l'utilisateur a posté la prédiction côté API avant que le tx ne soit indexé). Marque les orphelins.
- **Job résolution** : `ResolveMarketsJob` existe déjà — vérifier qu'il appelle bien `resolveMarket(uint256, uint64)` du nouveau `BettingMatch` et pas l'ancienne signature.

#### Lot 7 — Front : observabilité & resilience
- Réutiliser `NetworkGuard` (déjà présent) sur toutes les pages qui touchent un contrat — vérifier exhaustivement.
- Centraliser les erreurs viem (`AccessControlUnauthorizedAccount`, `BetAmountAboveCap`, `CooldownActive`, `InsufficientFreeBalance`, etc.) dans un mapper `lib/contracts/errors.ts` qui rend des messages humains. Liste exhaustive disponible dans les ABIs (errors).
- Toasts via `sonner` (déjà installé) sur succès/échec de chaque tx.
- État global de la chain (paused / non-authorized) lu depuis `useLiquidityPoolReadPaused` + reflet UI dans le pool panel + bandeau global.

#### Lot 8 — Documentation & smoke tests
- README front : section "Smart contracts" avec adresses, scripts d'init, troubleshooting (qu'est-ce qui se passe si `setUSDCToken` n'a pas été appelé sur un nouveau match, etc.).
- Petit script `scripts/smoke-contracts.ts` qui : lit TVL, lit market 0 d'un match connu, lit balance USDC. Permet de valider rapidement l'env après chaque deploy.
- README back : section indexers — comment ajouter un event, comment redémarrer en clean, comment seed le checkpoint.

---

## 4. Règles d'or pour ton plan

- **Ordre par dépendance**, pas par envie : Lot 0 (cleanup) → 1 (pool front) → 5 (indexers back) → 2/3/4 (UI utilisateur/admin) → 6/7/8 (jobs / observabilité / docs). Si tu changes l'ordre, justifie.
- **Aucun changement dans les contrats Solidity**. Si une fonctionnalité te semble manquer côté contrat, signale-le explicitement comme "blocker → contract change required" sans le coder.
- **Aucune nouvelle dépendance** dans `package.json` (front et back). Si tu en proposes une, justifie.
- **Clean architecture respectée** : domain pur (`packages/domain` + `components/features/*/domain/`), ports/adapters côté back (`infrastructure/blockchain/indexers/*` reste du côté infra, jamais appelé directement par les routes/use-cases — passe par les repositories).
- **Pas de code dans le plan**. Pseudo-code OK pour clarifier un algorithme, jamais plus de 10 lignes.
- **Tu nommes les hooks wagmi exacts** depuis `generated.ts` quand tu listes les actions on-chain — pas de "le hook qui fait X". Si tu hésites entre deux noms, montre les deux et explique la différence (p.ex. `useBettingMatchWriteClaim` vs `useFootballMatchWriteClaim` — ce sont les mêmes ABI sous différents noms générés).
- **Tu identifies les TS depth issues** : `hooks/useLiquidityPool.ts` a déjà `@ts-nocheck` à cause des compounds wagmi. Ton plan doit dire si on le garde, on le contourne via un fichier `.d.ts` typé manuellement, ou on accepte le `@ts-nocheck` localisé.
- **Tu listes les checks Foundry / cast** à faire en parallèle (par ex. avant le Lot 1 : `cast call $POOL "totalAssets()(uint256)" --rpc-url $SPICY` pour confirmer le format).
- **Tu fais un tableau des risques** en fin de plan : risque, probabilité (L/M/H), impact (L/M/H), mitigation.
- **Tu fais une section "Decisions to validate by human"** avec les arbitrages que je dois valider avant que tu codes (p.ex. : "garder `PredictionsDialog` legacy ou le supprimer ?"; "exposer le treasury panel admin dans le front ou laisser hors-front ?"; "table `bets` séparée de `predictions` ou fusion ?").

---

## 5. Format de livraison du plan

Markdown, sections numérotées, quelque chose comme :

```
# Plan d'intégration des smart contracts dans le front (et back indexers)

## Synthèse exécutive
3-5 lignes : où on est, où on va, blockers principaux.

## Décisions à valider par l'humain
- Decision A : … (recommandation : X, parce que Y)
- Decision B : …

## Lots ordonnés
### Lot 0 — Préliminaires & nettoyage  (S)
**Objectif** : …
**Fichiers** :
  - modifié : packages/blockchain/src/chains/index.ts
  - …
**Sous-tâches** :
  1. …
  2. …
**Hooks utilisés** : —
**Risques** : …
**Vérifications** : …

### Lot 1 — …
…

## Tableau des risques
| Risque | Proba | Impact | Mitigation |

## Annexes
- Liste des events de chaque contrat avec leur signature ABI exacte.
- Liste exhaustive des hooks wagmi à utiliser, regroupés par feature.
```

---

## 6. Pour démarrer

Lis dans cet ordre, puis produis ton plan :

1. `apps/smart-contracts/chiliz-tv/README.md` (architecture + post-deploy wiring + roles)
2. `apps/smart-contracts/chiliz-tv/src/liquidity/LiquidityPool.sol` (en entier)
3. `apps/smart-contracts/chiliz-tv/src/betting/BettingMatch.sol` + `FootballMatch.sol` + `BettingMatchFactory.sol`
4. `apps/smart-contracts/chiliz-tv/src/swap/ChilizSwapRouter.sol` (events + entrypoints)
5. `apps/smart-contracts/chiliz-tv/src/streamer/StreamWallet.sol` + `StreamWalletFactory.sol`
6. `apps/smart-contracts/chiliz-tv/deployments/chilizTestnet.json`
7. `apps/frontend/wagmi.config.ts` puis un échantillon de `apps/frontend/lib/contracts/generated.ts` (ne charge pas tout — `head -200` + `grep "useLiquidityPool" | head -50` etc.)
8. `apps/frontend/hooks/useLiquidityPool.ts`, `useChilizSwapRouter.ts`, `useBettingMatch.ts`, `useStreamWallet.ts`, `usePoolDecimals.ts`
9. `apps/frontend/components/features/discover/sections/PoolPanel.tsx` + `components/PoolDepositDialog.tsx`
10. `apps/frontend/components/live/MarketBetDialog.tsx` + `MatchMarketsList.tsx` + `StreamWalletButton.tsx` + `StreamSubscriptionButton.tsx`
11. `apps/frontend/components/features/predictions/PredictionsDialog.tsx` (legacy à euthanasier)
12. `apps/backend/src/infrastructure/blockchain/indexers/BettingEventIndexer.ts` + `StreamWalletIndexer.ts` + `BlockchainEventListener.ts`
13. `apps/backend/src/infrastructure/blockchain/abis.ts`
14. `apps/backend/src/infrastructure/blockchain/adapters/BettingContractDeploymentAdapter.ts` + `MatchResolutionAdapter.ts` + `MarketOddsAdapter.ts`
15. `packages/blockchain/src/chains/index.ts` + `packages/blockchain/src/abis/index.ts`

Si à la lecture tu identifies un point que je n'ai **pas** prévu ci-dessus, ajoute un lot. Si tu identifies un lot **inutile**, supprime-le et explique pourquoi. Trois pages max (sans les annexes).

Fais le plan. Pas de code.
