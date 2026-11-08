# CLAUDE.md — Contexte permanent pour les agents IA

> Ce fichier est lu **automatiquement** par Claude Code (et reconnu par Cursor, Continue, Aider, etc.) à chaque session. Il décrit le projet, l'architecture, les règles de code et les pièges à éviter. **Tu dois t'y conformer en permanence.** Si une instruction utilisateur entre en conflit avec ce fichier, demande confirmation avant d'enfreindre une règle.

---

## 1. Le projet en 30 secondes

**PredCast** (predcast.tv — le repo et les packages gardent le naming historique `chiliztv` / `@chiliztv/*`) est une plateforme Web3 qui combine **streaming football live + paris pari-mutuel on-chain** sur Chiliz Chain. **Mainnet 88888 est le réseau de prod depuis le 2026-06-09** ; Spicy testnet 88882 sert au staging et au dev local. Quatre piliers :

1. **Discovery + streaming** — page `/browse` (Discover) liste les matchs, page `/live/[id]` permet de regarder un stream + chat live. Accès public (waitlist retirée en juin 2026).
2. **Pari-mutuel on-chain** — chaque match déploie un contrat `FootballPariMatch` (UUPS proxy) qui hérite de `PariMatchBase`. Les utilisateurs misent en USDC dans la pool d'un outcome (Polymarket-style). Au settlement, les gagnants se partagent `totalPool × (1 − feeBps)` au prorata. Fee par défaut = 2% (`feeBps = 200` : 1% treasury + 1% leaderboard), plafond `MAX_FEE_BPS = 500`, toujours lue on-chain. Pas de bookmaker, pas d'odds fixées en avance — la foule fait l'odds implicite. **MiCA-friendly** : sortie du périmètre licence-pari EU.
3. **Leaderboard rewards (contrat V2)** — 1% du fee sur chaque pool gagnante alimente `LeaderboardRewards` (UUPS, USDC). `recordWin` accumule le score **on-chain par epoch** ; `advanceEpoch` / `rolloverEpoch` sont permissionless ; `claim(epochId)` distribue top-N pro-rata. **Plus de merkle root en V2.** ⚠ Le backend (`CloseEpochUseCase` + CLI `leaderboard:close-epoch`) suit encore l'ancien flux merkle — hotfix obligatoire avant le 1er juillet (le `CloseMonthlyEpochJob` revertera sinon).
4. **Modération communautaire** — signalements (`reports`) avec quorum dynamique + fast-path sévérité ≥4, bans à escalade (24h → 168h → permanent) appliqués time-derived (`Ban.isActiveAt`), soft-delete des messages chat. Schéma migration 036 ; domaine `packages/domain/src/reporting/`, use-cases `application/reporting/`.

Routeur unifié `ChilizSwapRouter` accepte USDC direct, CHZ natif, ou n'importe quel fan token ERC20 → swap via Kayen DEX → bet/donate/subscribe (placeBetWithUSDC / placeBetWithCHZ / placeBetWithToken). Les fan tokens CAP-20 (0 décimales) sont **wrappés automatiquement** par le router avant le swap `[wrapped, WCHZ, USDC]` ; les quotes passent par `quoteTokenToUSDC` (jamais de path construit à la main). Streamers ont un `StreamWallet` UUPS pour donations + subscriptions.

**Modèle historique (LP / bookmaker)** : retiré en mai 2026 lors de la migration `archi-off-mica`. Plus aucune référence à `LiquidityPool` / ctvLP / setMarketOdds / liability caps. Les markets `CORRECT_SCORE` legacy restent cachés côté UI mais ne sont plus créés.

---

## 2. Stack technique

### Monorepo `pnpm@10.28.1` + `turbo`

```
chiliztv.com/
├── apps/
│   ├── frontend/             Next.js 16 (App Router), React 19, Tailwind v4, framer-motion — app.predcast.tv (Vercel)
│   ├── landing/              Next.js 16 export statique — predcast.tv (Cloudflare Pages)
│   ├── backend/              Express + TypeScript, tsyringe DI, Supabase JS, Pino — Fly.io (chiliztv-api + chiliztv-workers)
│   └── smart-contracts/      Foundry, Solidity 0.8.24, UUPS + OpenZeppelin
├── packages/
│   ├── domain/               Entités + ports DDD (zéro dépendance infrastructure)
│   ├── shared/               DTOs + schémas Zod partagés front/back
│   ├── blockchain/           ABIs + chain config (chilizSpicy, chilizMainnet)
│   └── ui/                   Primitives partagées (Radix, SmokeBackground, Table…)
└── .github/workflows/        CI/CD — push main → staging ; tag v*.*.* → prod (release.yml)
```

Deploy : `main` → staging (Vercel preview, CF Pages, images GHCR `:main` sur Fly `*-staging`, db-migrate staging) ; tag `v*.*.*` → prod (retag image, cosign, Fly prod, build Vercel prod, db-migrate prod, GitHub Release). `compose/` (Traefik) est l'ancien mécanisme, plus utilisé.

### Versions clés (ne pas déprécier)
- Node **22 LTS** Alpine 3.20
- pnpm `10.28.1` (corepack)
- Next.js `16.x`, React `19` (hooks + Server Components)
- Solidity `0.8.24` (UUPS via OpenZeppelin contracts-upgradeable)
- Viem `2.x`, wagmi `2.x`

### Dépendances externes (à ne pas remplacer sans validation)
- **Supabase** Postgres managé + Realtime — DB unique côté back
- **Dynamic Labs** SDK — auth wallet (front)
- **Kayen DEX** (FanX) — swap CHZ/ERC20 → USDC, consommé via `ChilizSwapRouter` (jamais en direct)
- **API-Football** (`api-sports.io`) — matches metadata + odds (5 books sharps : Pinnacle, Betfair, Bet365, 1xBet, Marathonbet)
- **Cloudflare Stream** — ingest + playback des lives (MediaMTX ne sert plus qu'au dev local via `pnpm mediamtx`)
- **Pyth Hermes** — CHZ price oracle ; **CoinGecko** — prix USD des fan tokens

---

## 3. Clean Architecture — les règles non-négociables

### 3.1 Couches DDD côté back

```
apps/backend/src/
├── application/<feature>/use-cases/      Use cases pures (orchestration)
├── domain/                               (= packages/domain) entités + ports
├── infrastructure/                       adapters (Supabase, viem, API-Football)
└── presentation/http/controllers/        Express handlers (thin)
```

- **`presentation`** ne contient **aucune logique métier**. Juste : parse req → call use case → format res.
- **`application/use-cases`** orchestrent **uniquement via les ports** déclarés dans `domain/shared/ports/`. Aucune référence à `viem`, `supabase`, `axios`.
- **`domain`** = pure TS. Aucun import de `wagmi`, `viem`, `@supabase`, `tsyringe`, `express`. Entités + value objects + repositories interfaces (`I*Repository`) + ports (`I*Service`).
- **`infrastructure`** = adapters concrets. Implémentent les interfaces du domain. Seuls fichiers autorisés à importer `viem`, Supabase, axios, etc.

### 3.2 Côté front (clean architecture appliquée à React)

```
apps/frontend/
├── app/<route>/page.tsx                  Server Component minimal (rend la feature)
├── components/features/<feature>/
│   ├── <Feature>Page.tsx                 Orchestrateur "use client"
│   ├── sections/                         Sections de la page (présentation)
│   ├── components/                       Composants présentation purs et stateless
│   ├── hooks/                            Hooks de data fetching + state (1 hook = 1 responsabilité)
│   └── domain/                           Logique pure (formatters, types, helpers testables)
├── components/landing/                   Composants partagés (BackgroundFX, SectionHead, etc.)
├── components/ui/                        Primitives shadcn (Dialog, Tabs, Avatar)
├── hooks/
│   ├── api/                              Hooks React Query — un fichier par ressource backend
│   └── *.ts                              Hooks transverses on-chain (useLiquidityPool, useChilizSwapRouter, useAuth)
├── lib/
│   ├── api/
│   │   ├── client.ts                     apiClient axios singleton (interceptors JWT + 401/429)
│   │   └── endpoints/<resource>.ts       Une couche `<resource>Api.{method}` par ressource backend
│   ├── query/keys.ts                     Factory typée des query keys React Query
│   └── contracts/                        wagmi generated + adapters typés
```

- Les composants présentation sont **stateless** quand possible. Le state vit dans des hooks dédiés ou l'orchestrateur.
- Aucune logique métier dans le JSX. Tout calcul (tri, filtre, agrégat, formatage) → `domain/` ou `hooks/`.
- Les fonctions `domain/` sont **pures** : pas d'accès au DOM, pas d'accès au temps via `Date.now()` caché (passer `now: Date` en paramètre quand pertinent), pas d'effet de bord.

### 3.2bis Convention obligatoire pour les appels au backend

Tout nouvel appel à l'API backend depuis le front passe par **4 couches** dans cet ordre. **Aucun `fetch()` brut dans un composant ou un hook**, aucun `axios.create()` ad-hoc, aucune duplication d'URL backend. Le pattern existe pour : capter automatiquement le JWT, gérer 401/429, partager les query keys pour invalidation cohérente, et garder les DTOs alignés back/front via Zod.

1. **DTO Zod** dans `packages/shared/src/dto/<resource>/<Resource>Dto.ts` — schéma + type inféré. Exporté depuis `packages/shared/src/index.ts`. Le backend retourne exactement cette shape, le frontend la consomme typée.
2. **Endpoint** dans `apps/frontend/lib/api/endpoints/<resource>.ts` — objet `<resource>Api` exposant des méthodes typées qui appellent `apiClient.get/post/put/delete<DtoType>('/path')`. Re-exporté depuis `lib/api/endpoints/index.ts`.
3. **Query key** dans `apps/frontend/lib/query/keys.ts` — entrée hiérarchique typée (`queryKeys.<resource>.<surface>(...args)`). Indispensable pour les invalidations cross-hook.
4. **Hook** dans `apps/frontend/hooks/api/use<Resource>.ts` — wrap `useQuery` / `useMutation` avec `queryFn: () => <resource>Api.method()`, `queryKey: queryKeys.<resource>....`, `staleTime` aligné sur le TTL backend. Re-exporté depuis `hooks/api/index.ts`.

Exemple de référence : `pricesApi` ([apps/frontend/lib/api/endpoints/prices.ts](apps/frontend/lib/api/endpoints/prices.ts)) + `usePrices` ([apps/frontend/hooks/api/usePrices.ts](apps/frontend/hooks/api/usePrices.ts)) + `queryKeys` ([apps/frontend/lib/query/keys.ts](apps/frontend/lib/query/keys.ts)).

Les hooks transverses on-chain (`useLiquidityPool`, `useChilizSwapRouter`, etc.) vivent à la racine de `apps/frontend/hooks/` car ils combinent reads viem + writes wagmi + parfois un appel API backend. Quand un de ces hooks fait du backend, il **consomme** un hook `hooks/api/use<Resource>` plutôt que de fetcher en direct (cf. `useLiquidityPool` qui consomme `usePoolState`).

**Anti-pattern à proscrire** : `fetch(\`\${API_URL}/path\`)` dans un hook ou un composant. Ça bypasse les interceptors auth, ne gère pas 401/429, dupliquer l'URL et la query key, et casse les invalidations.

### 3.3 Règles de découpage (taille des fichiers)

| Type | Limite molle | Limite dure |
|---|---|---|
| Composant React | 200 lignes | 350 lignes |
| Use case backend | 150 lignes | 250 lignes |
| Hook React | 150 lignes | 250 lignes |
| Module domain | 200 lignes | 300 lignes |
| Controller Express | 100 lignes par handler | — |
| Repository implementation | 300 lignes | — |

Au-delà de la **limite molle**, splitte. Au-delà de la **limite dure**, refuse de continuer sans découper le fichier d'abord (extract sous-composants, extract custom hooks, extract domain helpers).

### 3.3bis Un composant React = un fichier

**Règle dure** : ne JAMAIS bundler plusieurs composants React dans un même fichier. Même les primitives "petites" (layout shells, headings, callouts, list renderers, sections de page) ont leur fichier dédié.

- `<Feature>Page.tsx` ne contient **que** l'orchestrateur + imports. Aucun sous-composant inline.
- Primitives de layout (Shell, Heading, Lead, ListItem) → `components/<feature>/<Name>.tsx`.
- Sections de page (Hero, ChapterX, EndCTA, BannerY) → `sections/<feature>/<Name>.tsx`.
- Tolérance : un wrapper trivial de < 5 lignes JSX utilisé à un seul endroit peut rester inline. Au-delà de ~15 lignes de JSX **ou** plus de un usage, extract obligatoire.

Anti-pattern à proscrire : `HowItWorksPage.tsx` avec 13 functions inline (ChapterShell, ChapterHeading, ChapterLead, StepsList, ChapterProduct, ChapterPredict, Aside, ChapterParimutuel, etc.). Grep, refactor, et navigation IDE deviennent pénibles ; les composants présentation ne sont plus testables isolément.

---

## 4. Code propre — conventions strictes

### 4.1 TypeScript
- **`strict: true`** activé. **Zéro `any`** toléré. Préférer `unknown` + type guard si vraiment nécessaire.
- Pas de `as` cast sauf cas justifiés (lecture wagmi avec types compounds, parsing JSON externe). Commenter pourquoi.
- Types depuis `@chiliztv/shared/dto/*` ou `@chiliztv/domain/*` quand existants. Pas de types dupliqués front/back.
- Discriminated unions pour les états : `{ ok: true, data } | { ok: false, reason }`, jamais `{ ok: boolean, data?, error? }`.

### 4.1bis Commentaires de code
- **Ton neutre et impersonnel.** Jamais d'adresse directe au lecteur dans les commentaires : pas de `// tu peux`, `// si tu`, `// note que tu`. Écrire à la 3ᵉ personne / passif (`// the caller`, `// callers should`, `// must not be empty`).
- **Concis.** Une JSDoc = 1-2 lignes max sauf raison forte (invariant subtil, workaround documenté). Pas de paragraphes narratifs. Pas de redite de ce que le nom de la fonction dit déjà.
- **Pas de commentaire qui décrit le QUOI** (les noms le font). Commenter le POURQUOI : invariant non-évident, contrainte cachée, référence à un ticket/incident, raison d'un workaround.
- **Pas de signature personnelle** (`// Antony added this`, `// Claude wrote`). Pas de date dans le code (le git blame l'a).
- **Pas d'emoji dans les commentaires** sauf si explicitement demandé.

### 4.1ter Testing matches — 4 niveaux obligatoires
Pour tester un nouveau statut de match, une transition, ou un comportement
lié au temps, la règle est : créer (1) une fixture L1, (2) éventuellement un
scénario L2, (3) éventuellement un test L4. **Ne pas** hardcoder un payload
`Match.create` dans un CLI ad-hoc ni dans un test sans passer par les
fixtures (la divergence prod ↔ tests réapparaît immédiatement).

- **L1 fixtures** : [apps/backend/src/testing/fixtures/match.fixtures.ts](apps/backend/src/testing/fixtures/match.fixtures.ts) — `matchFixture.halftime({ score: { home: 3, away: 2 } })` pour un unit test ; `nextTestMatchId()` pour des IDs uniques dans le range réservé 999000-999999.
- **L2 scénarios** : `pnpm match:scenario list` ([SMOKE.md](apps/backend/docs/SMOKE.md)) pour la QA reproductible. Cleanup atomique via `pnpm match:reset`.
- **L3 `IClock`** : tout accès au temps présent dans `application/` / `infrastructure/` / `presentation/` passe par `this.clock.now()` injecté via `TOKENS.IClock`. ESLint guard `no-restricted-syntax` empêche les `new Date()` directs. Tests injectent `MockClock` (`src/testing/clock/MockClock.ts`) pour `advanceBy*`.
- **L4 intégration** : `pnpm test:integration` — Anvil + Supabase local, tests `it.todo` réservant la couverture critique. Prerequis : Foundry + Supabase CLI + psql. Runbook [SMOKE_integration.md](apps/backend/docs/SMOKE_integration.md).

### 4.2 Naming
- Composants : **PascalCase** (`MatchCard.tsx`)
- Hooks : `useXxx` camelCase (`useDiscoverMatches.ts`)
- Use cases : verbe à l'impératif PascalCase + suffixe `UseCase` (`GetBrowseMatchesUseCase`)
- Repositories : interface `I*Repository`, implémentation `Supabase*Repository`
- Ports : interface `I*Service`, implémentation `Viem*Service`, `*ApiAdapterImpl`
- Constantes : `UPPER_SNAKE_CASE` (`LIVE_STATUSES`, `MAX_BET_AMOUNT`)
- Fonctions pures : verbe-d'abord camelCase (`fmtSelection`, `buildStreams`, `isLive`)

### 4.3 Imports — groupage strict
1. Externes (`react`, `viem`, `wagmi`, `lucide-react`)
2. `@chiliztv/*` (packages internes)
3. `@/*` (alias front ou back)
4. Relatifs (`./...`, `../...`)

Séparés par une ligne vide. **Aucun import non utilisé** (`eslint-plugin-unused-imports` est actif).

### 4.4 React
- Pas de `useState` qui pourrait être dérivé via `useMemo`.
- Pas de `useEffect` qui synchronise des states locaux entre eux.
- Server vs client : `app/*/page.tsx` reste **Server Component** quand possible. Seuls les composants qui consomment des hooks ou des handlers user sont `"use client"`.
- A11y : `aria-label` sur boutons icon-only, `focus-visible:ring-2 focus-visible:ring-[#E8001D]`, contrastes ≥ AA, `prefers-reduced-motion` respecté.
- **Aucun avatar Unsplash hardcodé.** Avatars = initiale + dégradé déterministe via `keccak256(walletAddress)`.

### 4.5 Backend
- `tsyringe` pour DI, `@injectable()` sur chaque service.
- Logs structurés Pino : `logger.info('Action', { matchId, contractAddress, txHash })`. Pas de string interpolation.
- Erreurs : throw `DomainError`/`ValidationError`/`BusinessRuleError` du domain, mappés par un middleware Express vers HTTP.
- Repositories : retournent des entités domain, pas des rows raw Supabase. Le mapping JSON ↔ entité est dans le repo.
- Aucune dépendance circulaire entre couches (infrastructure dépend de domain, jamais l'inverse).

### 4.6 Smart contracts (Solidity)
- UUPS uniquement (pas de beacon, pas de transparent proxy).
- Custom errors (`error InvalidMarketState(...)`) plutôt que `revert` string.
- Events indexés sur les champs pertinents pour les indexers (`indexed marketId`, `indexed user`).
- Pas de modif sans tests Foundry (`forge test -vvv`) + slither clean.
- Roles AccessControl jamais collapsed (admin ≠ treasury ≠ resolver).

---

## 5. Langage visuel (front)

Le site est sur une **identité Chiliz-rouge stricte**. Aucune palette dispersée tolérée.

```
Couleurs
  bg-page         #0A0A0A
  bg-card-1       #111
  bg-card-2       #141414
  bg-elevated     #1A1A1A
  border-subtle   #1E1E1E
  border-default  #2A2A2A
  border-hover    #3A3A3A
  accent-red      #E8001D       (CTA, eyebrow)
  red-hover       #FF1737
  red-dark        #B0001A
  green-pnl       #2dd4a4       (PnL positif, win, success)
  gold            #F5C518       (pause, fee, prize pool)
  text-primary    #fff
  text-body       rgba(255,255,255,0.65)
  text-meta       rgba(255,255,255,0.45)

Typo
  .font-display    Barlow Condensed, uppercase, tracking serré, 700-800
  .font-mono-ctv   JetBrains Mono, uppercase, letter-spacing 0.14-0.32em

Patterns
  Eyebrow rouge avec barre :
    <div class="font-mono-ctv inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#E8001D]">
      <span aria-hidden class="block h-0.5 w-4 bg-[#E8001D]" />
      Eyebrow
    </div>

  CTA primaire :
    className="rounded-md bg-[#E8001D] px-7 py-4 text-[14px] font-bold uppercase tracking-[0.06em] text-white hover:-translate-y-px hover:bg-[#FF1737]"
    style={{ boxShadow: "0 8px 32px rgba(232,0,29,0.25)" }}

  Bento card :
    className="rounded-xl border border-[#1E1E1E] bg-[#111] p-7 hover:border-[#2A2A2A]"
```

**Interdit** : `bg-zinc-*`, `bg-purple-*`, `bg-blue-*`, `bg-emerald-*`, `bg-gray-*`, `text-yellow-400`, `text-purple-*`, gradient `from-[#1a1919]` ou tout autre gradient legacy. Avant de commit, vérifier `grep -rE "bg-(zinc|purple|blue|emerald|gray)-" components/`.

**Admin (`apps/admin`) uniquement** : les tokens du design system admin vivent dans `apps/admin/app/globals.css` (`@theme`) — police texte Lexend, texte secondaire `rgba(255,255,255,0.5)` (au lieu de 0.45, contraste AA), `#FF4757` (`accent-text`) pour tout texte rouge < 18px ; `#E8001D` reste réservé aux fonds, bordures et grands chiffres. Référence : `docs/design/admin/`. Ne pas appliquer à `apps/frontend` ni `apps/landing`.

Composants partagés à **réutiliser, pas dupliquer** :
- `<BackgroundFX />` (`components/landing/BackgroundFX.tsx`)
- `<SectionHead title= lead= eyebrow= />`
- `useBetTicket` (`components/features/live/hooks/bet-ticket/`) + `BetTicketPanel` → logique de pari unique, rendue inline dans la sidebar desktop et dans le bottom sheet mobile (plus de modale de pari)
- `NetworkGuard` pour toute action on-chain

---

## 6. Smart contracts — adresses & lifecycle

**Chiliz mainnet (chainId 88888) — PROD** — addresses dans `apps/smart-contracts/chiliz-tv/deployments/chilizMainnet.json` :

```
PariMatchFactory     0x1e7f73d14d3e87205a766a14ec5847c12febffd7
StreamWalletFactory  0x0ffa30b48adc0b2b773dc01422d249aee135a4bb
ChilizSwapRouter     0x72befd1186f24cba64266995cd627b79c799292a  (redeploy 2026-06-11, wrap fan tokens)
LeaderboardRewards   0xf54e0f9b8f38ec21526680ad6070f033e356158c  (V2)
USDC                 0xa37936f56249965d407e39347528a1a91eb1cbef  (6 decimals, bridged ChainPort)
WCHZ                 0x677f7e16c7dd57be1d4c8ad1244883214953dc47  (18 decimals)
```

**Chiliz Spicy testnet (chainId 88882) — staging/dev** — `deployments/chilizTestnet.json` :

```
PariMatchFactory     0x5c6433b9a03feb15e1e6cd0745a3013cea4879ac
StreamWalletFactory  0xeb92b6620556cbbc0bdb57371c501b1794961fd3
ChilizSwapRouter     0xed417f0b94455e114e05a1ce54c0fdb858fe21ad  (⚠ ancien code — pas de quoteTokenToUSDC, redeploy à faire)
LeaderboardRewards   0x627bfdd9d9d62d634cd94dc1bd2804d26c1771f9
USDC                 0x66f3ee96a0185216f8cb427d2bc4e53947cef60c  (6 decimals, mock)
WCHZ                 0x678c34581db0a7808d0ac669d7025f1408c9a3c6  (18 decimals, mock)
```

### Hiérarchie des contrats pari-mutuel
- `PariMatchBase` (UUPS abstract) — state machine, USDC accounting, fee splitting, `claim` / `claimRefund` / events
- `FootballPariMatch` extends `PariMatchBase` — markets foot (`WINNER`, `GOALS_TOTAL`, `BOTH_SCORE`, `HALFTIME`, `FIRST_SCORER`, `GOALS_EXACT`) + `resolveByScore(FootballScoreInput)`
- `BasketballPariMatch` extends `PariMatchBase` — markets basket (déployable, UI rend `<UnsupportedSportPanel />`)
- `PariMatchFactory` — deploy + wiring (USDC, fee recipient, swap router, resolver, leaderboard)
- `LeaderboardRewards` **V2** (UUPS, USDC) — `recordWin` accumule le score on-chain par epoch, `advanceEpoch` / `rolloverEpoch` permissionless, `claim(epochId)` top-N pro-rata. Plus de merkle (cf. §1.3, hotfix backend en attente)

### Lifecycle d'un market (`enum MarketState`)
```
Inactive(0) → Open(1) → Suspended(2) → Closed(3) → Resolved(4)
                                              ↘
                                               Cancelled(5)
```

- `placeBetUSDC(marketId, outcome, amount)` (ou via `ChilizSwapRouter.placeBetWith*`) exige `state === Open`
- `claim(marketId)` exige `state === Resolved` — verse le payout = `userStake[outcome winning] × netPool / outcomePool[winning]` (netPool = totalPool × (1 − feeBps))
- `claimRefund(marketId)` exige `state === Cancelled` — rembourse `userTotalStake`
- **Void protection** : si l'outcome gagnant a 0 stake (personne n'a parié dessus), `resolveByScore` cancelle automatiquement le market → tous les stakers se font rembourser
- **Règle métier** : **aucun bet pendant qu'un match est in-game** (statuts API-Football `1H`, `HT`, `2H`, `ET`, `BT`, `P`, `LIVE`, `SUSP`, `INT`). Inclut explicitement la mi-temps `HT`. Cf. `packages/domain/src/matches/policies/BettablePolicy.ts`.

### Markets football seedés (payload canonique `FOOTBALL_SEEDING_PAYLOAD`)
- `WINNER` — 1X2 Home/Draw/Away
- `HALFTIME` — 1X2 à la mi-temps
- `GOALS_TOTAL` ×2 lines — Over/Under 1.5 et 2.5 (line × 10 — `25` = 2.5 buts)
- `BOTH_SCORE` — BTTS Yes/No
- `DOUBLE_CHANCE` ×3 variants — 1X / 12 / 2X
- `FULL_TIME_WINNER` — **knockout uniquement** (9ᵉ market, vainqueur après prolongations/TAB)
- Legacy **non créés**, cachés côté UI : `CORRECT_SCORE`, `FIRST_SCORER`, `GOALS_EXACT`. Les fonds éventuels restent claimables on-chain.

### Constantes pari-mutuel à connaître
- `MIN_STAKE = 10_000` (0.01 USDC raw 6dp) — pré-check côté front dans `useBetTicket` (`MIN_STAKE_USDC_RAW`) pour éviter le revert `StakeBelowMinimum`
- `feeBps` par défaut `200` (2%, `PariMatchBase.sol:317`), plafond `MAX_FEE_BPS = 500`. Lecture on-chain via `usePariMatchBaseReadFeeBps` (fallback `DEFAULT_FEE_BPS = 200`)
- `leaderboardFeeBps` par défaut `100` (1%, prélevé sur le fee global, pas en plus)

### Markets basket
Contrats `BasketballMatch` déployés mais **UI non implémentée**. Tous les contrats basket renvoient le placeholder `<UnsupportedSportPanel />`.

---

## 7. Pièges connus & règles de sécurité

1. **`ADMIN_PRIVATE_KEY` ne doit pas vivre en clair dans `.env`** — à migrer vers AWS KMS sign-only. Si tu touches au signing, signale-le.
2. **RPC Chiliz** : testnet `spicy-rpc.chiliz.com` throttle dès ~50 req/s — `staleTime: 8000` + watch hooks mutualisés. Mainnet : **reads via `chiliz-rpc.publicnode.com`** (le balancer officiel `rpc.chiliz.com` sert des nodes jusqu'à ~70k blocs en retard → balances/pools qui flickent) ; les workers utilisent Ankr qui **cappe `eth_getLogs` à ~1000 blocs** — le `BaseIndexer` rattrape en chunks (`INDEXER_MAX_BLOCK_RANGE`, défaut 900), checkpoint persisté à chaque chunk.
3. **Type-check wagmi v2** : les `useReadContracts` batchés avec le full ABI généré font exploser les TS depth limits — passer un **ABI minimal inline** (cf. `useSwapRouterTokenAvailability.ts`).
4. **Hydration safety** : `now: Date` toujours `null` au premier paint server side (sinon mismatch). Pattern : `useState<Date | null>(null) + useEffect(() => setNow(new Date()))`.
5. **Decimals — ne JAMAIS hardcoder.** USDC = 6 dp (`usePoolDecimals()` front, constante — `PariMatchBase` hardcode USDC). Mais les **fan tokens mainnet sont des CAP-20 à 0 décimales**, leurs versions Kayen-wrapped `W*` font 18 dp, et des doublons legacy existent (PSG-L 18 dp). Scaler `parseUnits`/affichage avec les decimals **lus on-chain** : `useTokenDecimals` / `useBetTokenBalances` (front), `FanTokenAdapter` avec cache (back). Un `1e18` hardcodé sur un token 0-dp = montant ×10¹⁸.
6. **Idempotence indexers** : dédup par `(tx_hash, log_index)` PK composite, pas `tx_hash` seul. Plusieurs events peuvent partager une tx.
7. **Re-orgs Chiliz** : indexer le block "safe" = `head - 6` minimum. Accepter ré-indexation des derniers blocs.
8. **Aucune nouvelle dépendance** dans `package.json` sans validation explicite. Tout est déjà installé pour 95% des cas (framer-motion, lucide-react, sonner, react-confetti, viem, wagmi). recharts n'est PAS installé.
9. **Migrations Supabase** : versionnées dans `apps/backend/src/infrastructure/database/migrations/NNN_description.sql`. Incrémenter le numéro, ne jamais éditer une migration mergée.
10. **API-Football** : tarif au req. Cache 60s minimum, polling pré-match 10 min, polling live 60s. Pas d'appel direct depuis le front.
11. **Env example files en miroir** : `apps/backend/.env.example` (template staging/prod) et `apps/backend/.env.local.example` (template local) doivent être bumpés **ensemble** quand une var change (adresses contracts, nouvelle clé requise, default modifié). Une seule des deux à jour = dérive silencieuse, un dev qui suit le mauvais fichier obtient une config cassée.
12. **BigInt literals interdits côté front** : `apps/frontend/tsconfig.json` target `ES2017` — `0n` ou `10_000n` ne compilent pas (`TS2737`). Écrire `BigInt(0)` / `BigInt(10_000)`. Côté backend (`ES2022`) les literals fonctionnent.
13. **Leaderboard ghost epochs** : `leaderboard_epochs.tx_hash` est PK (pas `epoch_id`). Le CLI `pnpm leaderboard:close-epoch` INSERT en `status='pending'` AVANT que la tx confirme. L'indexer flip à `confirmed` sur `EpochClosed` et remplit `epoch_id`. Si la tx revert, le row reste `pending` indéfiniment — invisible côté UI car `useMyClaimableEpochs` filtre `status='confirmed' AND claim_expiry > now`. **Ne jamais utiliser `epoch_id` comme clé d'idempotence côté CLI** — il est inconnu jusqu'à confirmation.
14. **Pari-mutuel : payout dépend de la pool finale.** Le `parimutuelPayoutPreview` côté UI ne montre que l'estimé au moment du clic — la valeur réelle bouge à chaque nouveau bet. Ne pas afficher le payout comme un "lock" comme on le faisait avec les odds bookmaker.
15. **`indexer_checkpoints` est keyé par `indexer_name` seul** — un switch de réseau laisse des numéros de blocs de l'ancienne chain. Si le checkpoint dépasse le head (Spicy > mainnet), `fromBlock > safeHead` → les indexers ne scannent **rien, silencieusement** (incident du 2026-06-11). Après un switch : rembobiner via `UPDATE indexer_checkpoints SET last_block = <bloc deploy>` — le rattrapage chunké est idempotent (`(tx_hash, log_index)`), relu à chaque tick, aucun restart requis.
16. **Quotes de swap : uniquement via `ChilizSwapRouter.quoteTokenToUSDC`** (et `swapRouteFor` pour la route). Un path `[token, USDC]` construit à la main revert pour tous les fan tokens (liquidité Kayen hubée sur WCHZ + wrap CAP-20). Pools peu profondes : afficher le price impact et warner au-delà de ~3%.

---

## 8. Workflow attendu pour toute tâche non triviale

1. **Lire l'existant avant de coder.** Si je te demande d'ajouter une fonctionnalité, commence par grep + read des fichiers proches. Ne réécris pas ce qui existe déjà.
2. **Plan avant code.** Pour toute tâche > 100 lignes, propose un plan ordonné (lots, fichiers touchés, hooks utilisés, risques) avant d'écrire du code. Si tu n'es pas sûr, demande.
3. **Réutiliser > recréer.** Avant de créer un nouveau composant, vérifie qu'un équivalent n'existe pas déjà dans `components/landing/`, `components/features/discover/components/`, `components/ui/`.
4. **Pas de migration "best-effort"** : si tu refactorises, mets à jour **tous** les call-sites. `grep -r` avant suppression. Le build TS doit rester vert.
5. **Tests obligatoires** sur la logique pure (`domain/`). Pas de tests sur le JSX (trop fragile), mais oui sur les fonctions de calcul (PnL, formatters, policies, sorting).
6. **Commits propres** : préfixe conventionnel (`feat:`, `fix:`, `refactor:`, `chore:`, `docs:`), message en présent impératif, < 72 chars titre, body explique le *pourquoi*.
7. **Pas de `console.log`** dans le code livré. Pino côté back, Sentry/logger côté front si vraiment utile, sinon supprimer.
8. **Pas de `TODO` orphelin.** Si tu marques `// TODO`, link une issue ou indique un contexte clair (`// TODO(no-live-betting): waiting on Lot 2 deploy`).

---

## 9. Quand demander confirmation à l'utilisateur

- Avant de **changer un contrat Solidity** (impacte les addresses, oblige re-deploy).
- Avant d'**ajouter une dépendance** `package.json`.
- Avant de **supprimer un fichier** qui a plus de 50 lignes.
- Avant de **changer le schéma Supabase** (nouvelle migration).
- Avant de **modifier `.env.example`** (rotation des secrets attendue).
- Avant de **modifier `CLAUDE.md` lui-même** (politique projet).

---

## 10. Convention d'usage de ce fichier

- Ce fichier est la **source de vérité projet**. Si tu remarques une incohérence (ex. règle violée massivement dans le code existant), **signale-la** plutôt que de la perpétuer.
- Sub-dossiers peuvent avoir leur propre `CLAUDE.md` qui **étend** (jamais ne contredit) celui-ci :
  - `apps/frontend/CLAUDE.md` — règles UI/UX, langage visuel détaillé, conventions React/Next.
  - `apps/backend/CLAUDE.md` — règles DDD + tsyringe + Supabase.
  - `apps/smart-contracts/CLAUDE.md` — règles Solidity + Foundry.
- Quand tu commences une session, **lis ce fichier en entier** et confirme implicitement la prise en compte en suivant les règles. Pas besoin de répondre "j'ai lu" — applique.

Dernière mise à jour : 2026-06-11 — audit complet post-passage mainnet : adresses mainnet/testnet, ChilizSwapRouter fan-token (0x72befd…), leaderboard V2, modération, deploy Fly/Vercel/CF Pages, pièges RPC/decimals/checkpoints.
