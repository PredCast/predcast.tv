# Prompt — Refonte UX/UI du Dashboard (Profile) en langage landing + repenser le contenu

> À coller à Claude Design. Le but : refaire la page **`/dashboard`** dans le même esprit que la landing et la page Discover récemment refondues, **et** repenser ce qui s'y affiche maintenant que le projet a une LiquidityPool, des bets multi-token via swap router, et un système de streamers/donations/subs en USDC. Le dashboard actuel est resté sur l'ancienne charte (gradients gris-noir, font système, shadcn `Card`/`Tabs` brut, accent `bg-primary` Tailwind par défaut, badges colorés "VIP Member") — il jure visuellement avec le reste du site et passe à côté de plusieurs features critiques.

---

## 1. Contexte & contraintes

Monorepo `pnpm` + `turbo`. Front : Next.js 15 / React 19 / Tailwind v4 / framer-motion / lucide-react / dynamic-labs / wagmi.

La landing et la page Discover (`/browse`) utilisent déjà le langage cible :
- Fond `#0A0A0A`, cartes `#111` / `#141414`, bordures `#1E1E1E` / `#2A2A2A` / `#3A3A3A`
- Accent rouge **`#E8001D`** (hover `#FF1737`, dark `#B0001A`)
- Vert PnL `#2dd4a4` ou `#00C853`, or `#F5C518`
- Typo : `.font-display` (Barlow Condensed, uppercase, tracking serré, 700-800) + `.font-mono-ctv` (JetBrains Mono, uppercase, letter-spacing 0.14-0.32em, taille 10-12 pour eyebrows)
- Patterns : eyebrow rouge avec barre `h-0.5 w-4 bg-[#E8001D]`, CTA primaires rouges avec ombre rouge, bento `rounded-xl border bg-[#111]`, marquee `.ctv-marquee`, `BackgroundFX`, `SectionHead`

Composants à **réutiliser** depuis `components/landing/` ou `components/features/discover/sections/` :
- `BackgroundFX`, `SectionHead`, `Eyebrow` (déjà extraits dans `discover/components/Eyebrow.tsx`)
- Boutons / pills déjà stylés dans la `FilterBar` Discover

---

## 2. État actuel du dashboard — ce qu'il y a

Route : `app/dashboard/page.tsx` → `<Dashboard />` dans `components/features/dashboard/Dashboard.tsx`.

Architecture déjà clean (sections / components / hooks / utils), seul le **style** est legacy. Tu **gardes** la structure, tu **refais** le visuel et tu **revois** le contenu.

```
components/features/dashboard/
├── Dashboard.tsx                          ← orchestrateur "use client"
├── sections/
│   ├── DashboardHeader.tsx                ← "Profile / Welcome back…" + badge VIP + bouton "Verify to Withdraw" (Self Protocol)
│   ├── UserProfileCard.tsx                ← avatar Unsplash hardcodé, username editable, wallet truncate, win rate, followers/subs/earned
│   ├── StatsCardsSection.tsx              ← 3 cards : Fan Tokens balance / Portfolio Value (USD) / Active Predictions
│   ├── StreamerSection.tsx                ← (existe mais PAS importé dans Dashboard.tsx — code mort ?) Followers / Subscribers / Total Earned
│   ├── FanTokensTab.tsx                   ← grille de TokenCard (logo, qty, price, 24h change, total)
│   ├── PredictionsTab.tsx                 ← table : Date / Match / Prediction / Odds / Status (Pending/Won/Lost)
│   ├── TransactionsTab.tsx                ← table combinée donations + subscriptions sortie chrono
│   ├── SubscriptionsTab.tsx               ← table avec filter Active/Expired
│   └── FollowingTab.tsx                   ← liste streamers suivis + subscribed
├── components/
│   ├── StatCard.tsx                       ← carte stat générique (titre + valeur + icône dans rond gris)
│   └── TokenCard.tsx                      ← carte fan token avec qty/price/change
├── hooks/usePortfolioCalculation.ts       ← calcule portfolio value en agrégeant CHZ + fan tokens × prix
└── utils/portfolio.utils.ts
```

Hooks de données utilisés (à conserver) :
- `useFanTokens(walletAddress)` — soldes fan tokens
- `useBalance({ address })` (wagmi) — solde CHZ natif
- `useUserPredictions(userId)` + `useUserPredictionStats(userId)` — historique + stats prédictions (API back)
- `useDonorHistory(walletAddress)` + `useSubscriberHistory(walletAddress)` — transactions
- `useFollowedStreamers(userId)` + `useUnfollowMutation`
- `useFollowerCount(userId)` + `useStreamerStats(walletAddress)`
- `usePortfolioCalculation` (custom)

---

## 3. Diagnostic visuel — pourquoi ça ne va pas

| Symptôme | Détail |
|---|---|
| **Hors charte** | Fond `bg-black` au lieu de `#0A0A0A`, cards `from-[#1a1919] to-[#0f0f0f]` (gradient gris jamais utilisé ailleurs), aucune typo Barlow/JetBrains, aucun eyebrow rouge, pas de `BackgroundFX`. |
| **Composants shadcn brut** | `<Tabs>` shadcn par défaut, `<Card>`/`<CardHeader>`/`<CardContent>`, `<Badge>` colorés en `bg-purple-500/20` etc. — palette dispersée et incohérente (jaune trophy, vert subs, violet donations, indigo subscriptions, rouge primary qui ne matche pas le `#E8001D`). |
| **Avatar pété** | URL Unsplash hardcodée d'une femme aléatoire pour tous les utilisateurs — embarrassant, à virer. |
| **Hiérarchie typographique faible** | Tout est en font système, tailles `text-xl`/`text-2xl`/`text-3xl` ; rien ne ressort comme la landing où le hero est 56-108px en Barlow Condensed. |
| **Tabs alignées sur 5 colonnes égales** | `grid-cols-5` casse sur mobile, et la 5e tab "Following" n'a aucune raison d'avoir le même poids que "Fan Tokens" / "Predictions". |
| **Stats cards plates** | 3 cards alignées avec icône à droite — pas de hiérarchie, pas de "headline number" comme dans `StatsStrip` de la landing. |
| **Tables shadcn brutes** | Bordures `border-white/10`, badges colorés discordants, liens `chiliscan` non monospaced, hash truncate maison. |
| **Pas de `BackgroundFX` ni d'arrière-plan animé** | Le dashboard sort comme une page d'admin Bootstrap, pas comme une page d'un produit qui se présente "live football streams + on-chain prediction markets". |
| **Verify to Withdraw** | Texte cryptique, mal placé, sans contexte — un user qui ne sait pas ce qu'est Self Protocol ne comprend pas. |

---

## 4. Diagnostic contenu — ce qu'il manque, ce qu'il faut retirer

### 4.1 À AJOUTER (gros manques, prioritaires)

Le projet a maintenant un `LiquidityPool` ERC-4626 + des bets multi-token via `ChilizSwapRouter` + des claims on-chain. Le dashboard n'expose **rien** de ça. C'est la régression la plus grave.

1. **My LP Position (NOUVEAU — section principale)**
   Si l'utilisateur a déposé dans la pool :
   - Shares détenues (`balanceOf`) + valeur USDC convertie (`convertToAssets`)
   - Cost basis (`costBasis(holder)` on-chain)
   - Unrealized gain : `assetsValue − costBasis`, en absolu et en %
   - Withdrawal cooldown : countdown depuis `lastDepositAt + depositCooldownSeconds`, badge "Locked X min" ou "Free to withdraw"
   - Withdrawal fee preview : `gain × lpWithdrawalFeeBps / 10000` (affiché comme "you'll pay $X.XX in fee on exit")
   - APY backend (lot APY déjà en cours, endpoint `/api/pool/apy`)
   - CTA "Deposit more" / "Withdraw" qui ouvre le `PoolDepositDialog` existant
   - Empty state si shares = 0 : pitch court "Become the house — earn yield from every losing bet" + CTA "Open the pool"

2. **My Bets (NOUVEAU — la "PredictionsTab" est obsolète)**
   La `PredictionsTab` actuelle lit l'API back (`useUserPredictions`) qui contient des données legacy (CHZ, status texte). Avec les nouveaux contrats il faut :
   - Liste lue depuis la nouvelle table `bets` (cf. plan d'intégration en cours) ou via `useBettingMatchReadGetUserBets` en fallback
   - Colonnes : Match · Market type (Winner / O/U / BTTS) · Selection · Stake (USDC + symbol token original si swap) · Odds locked × × · Status (Pending / Won / Lost / Refunded) · Action
   - Action : bouton **Claim** rouge si `Won && !claimed`, **Refund** ghost si `Refunded && !claimed`, sinon état badge
   - Filtres : All / Pending / Won / Lost / Claimable (subset Won-not-claimed) / Refundable
   - Si `Claimable.count > 0` → bandeau eyebrow rouge en haut "X winnings ready to claim · $Y.YY USDC" + CTA "Claim all"

3. **PnL panel (NOUVEAU)**
   Au-dessus ou à côté de "My Bets" :
   - Total wagered all-time (USDC)
   - Total won (USDC)
   - Net PnL (USDC + %, vert si > 0, rouge si < 0)
   - Win rate (déjà calculé) + Average odds played
   - Mini-graph : courbe PnL cumulée (recharts est déjà installé)
   - Ces metrics se calculent depuis la table `bets` (Lot 1 du plan d'intégration)

4. **Token swap inline (OPTIONNEL mais utile)**
   Carte raccourci "Swap → USDC" qui ouvre un mini-dialog wagmi via `ChilizSwapRouter` (pas de bet, juste swap). Permet à l'utilisateur de convertir ses fan tokens en USDC pour deposit ou bet sans quitter la page. **À envisager phase 2** si trop lourd.

5. **Streamer panel — uniquement si l'utilisateur EST streamer**
   - Détecter via `useStreamWalletFactoryReadHasWallet(userAddress)` (le walletFactory a un mapping streamer → wallet)
   - Si oui :
     - Total revenue (`useStreamWalletReadTotalRevenue` ou via API backend)
     - Available balance (USDC withdrawable)
     - Followers + Subscribers actifs (déjà calculé)
     - Recent donations (last 5)
     - CTA "Withdraw revenue" → `useStreamWalletWriteWithdrawRevenue`
     - CTA "Manage stream" → route `/dashboard/streamer` ou un drawer
   - Si non : ne pas afficher du tout (aujourd'hui c'est mélangé dans `UserProfileCard` même pour les non-streamers)

6. **Quick actions strip**
   Carte horizontale en haut avec 3-4 raccourcis : "Discover matches" (→ `/browse`), "Open the pool" (→ ouvre `PoolDepositDialog`), "My bets", "Withdraw revenue" (si streamer). Pattern type "FilterBar" Discover, full-width sous le hero.

### 4.2 À RETIRER ou RETRAVAILLER

| Élément actuel | Décision | Pourquoi |
|---|---|---|
| **Avatar Unsplash hardcodé** | RETIRER | URL d'une random photo. Remplacer par `<Avatar>` initiales + dégradé déterministe basé sur l'adresse (cf. `StreamCard` discover qui fait déjà ça). |
| **Badge "VIP Member"** | RETIRER | Sans logique (tout le monde est "VIP" = ça veut rien dire). Si tu veux un tier, base-le sur `costBasis` LP ou volume bet. |
| **Bouton "Verify to Withdraw" (Self Protocol)** | DÉPLACER + RENOMMER | Pas dans le header. Le mettre dans un panneau "Verification" dédié dans la section LP (où c'est utile pour le retrait > seuil). Renommer en "Verify identity (KYC)" avec explication courte. |
| **Tab "Following"** | DÉPLACER en bas-de-page ou DRAWER | Faible valeur produit pour la majorité des users, occupe une tab full-width. La compresser : section "Streamers you follow" en une rangée scrollable horizontale (12 avatars max) avec lien "View all". |
| **Tab "Subscriptions"** | FUSIONNER avec Transactions | "Subscriptions" actives ↔ rows de "Transactions" type subscription. Les fusionner en un seul tab "Activity" (donations + subs + bets + LP deposits/withdraws) chronologique avec filtres par type. |
| **Tab "Transactions"** | RENOMMER + ÉLARGIR | → "Activity" (cf. ci-dessus). Inclure aussi les LP deposits/withdraws (depuis `useLiquidityPoolWatchDeposit/Withdraw` ou la table `pool_events` du back) et les bets (table `bets`). |
| **3 stats cards alignées** | REMPLACER par bento landing-style | Style `StatsStrip` ou `FeatureBento` avec une "hero stat" dominante (Portfolio Value en grand, 56-72px) + 3 secondaires + delta vert. Cf. landing `StatsStrip` pour pattern exact. |
| **`StreamerSection.tsx`** (code mort, pas importé) | SOIT supprimer SOIT intégrer dans le streamer panel conditionnel ci-dessus | Vérifier avec `grep -rn "StreamerSection"` qu'il n'est nulle part importé. |
| **"Win Rate" affiché en pourcent dans `UserProfileCard`** | GARDER mais STYLISER | Tableau visuel : barre horizontale rouge pleine sur la portion `winRate / 100`. Pattern landing. |
| **"Total Predictions: N"** | INTÉGRER dans le PnL panel | Dispersé pour rien dans le profile card. |
| **Couleurs aléatoires (purple/indigo/yellow/green)** | UNIFIER sur la palette landing | Rouge `#E8001D` pour accent, vert `#2dd4a4` pour PnL positif/win/active, gris `text-white/45` pour idle, or `#F5C518` pour pending/warning. Bannir les `bg-purple-500/20`, `bg-indigo-500/20`, etc. |

### 4.3 À CONSERVER (mais restyler)

- `FanTokensTab` + `TokenCard` : utile, à garder. Restyle bento, ajouter mini-sparkline 24h via recharts si possible, ajouter CTA "Bet with this token" qui ouvre `MarketBetDialog` pré-rempli (passe le `token` au dialog).
- `useUserPredictions` / `useUserPredictionStats` : garder en attendant que les indexers du Lot 1 peuplent la table `bets` ; ajouter un fallback sur `bets` quand dispo.
- `useDonorHistory` / `useSubscriberHistory` : garder (consommés par le tab Activity).
- `usePortfolioCalculation` : garder, étendre pour inclure aussi shares LP × PPS dans le portfolio total.

---

## 5. Structure cible — Layout proposé

```
<Header />                                          (existe déjà)
<BackgroundFX />                                    (réutiliser landing)

┌── Hero strip ────────────────────────────────────────────────┐
│ Eyebrow rouge · "Account · On-chain"                          │
│ font-display "Hello, <username>" 56-72px · wallet truncate    │
│ + bouton "edit username" inline                               │
│ + bouton "Verify identity (KYC)" minor (secondary)            │
│ → Pas de "VIP Member" badge.                                  │
└──────────────────────────────────────────────────────────────┘

┌── Quick actions strip ───────────────────────────────────────┐
│ [Discover matches] [Open the pool] [My bets]  [Withdraw rev] │
│  pills mono uppercase border #2A2A2A hover #E8001D           │
└──────────────────────────────────────────────────────────────┘

┌── Stats hero (bento landing-style) ──────────────────────────┐
│ ┌──────────────┐ ┌────────────┐ ┌────────────┐ ┌───────────┐│
│ │ Portfolio    │ │ Net PnL    │ │ Win rate   │ │ Open bets ││
│ │  $12,418     │ │ +$842 (7%) │ │  62%       │ │   3       ││
│ │ Barlow 56-72 │ │ green/red  │ │ bar rouge  │ │           ││
│ └──────────────┘ └────────────┘ └────────────┘ └───────────┘│
│ Hero stat full-width à gauche (3 col) + 3 secondaires (1 col)│
└──────────────────────────────────────────────────────────────┘

┌── My LP Position (si shares > 0) ────────────────────────────┐
│ Eyebrow rouge "Liquidity provider · Pool"                     │
│ Bento style FeatureBento landing :                            │
│  - card primary 4×2 : "Your shares" en hero, USDC value,      │
│    cost basis, unrealized gain badge vert/rouge               │
│  - card 2×1 : APY 7d (depuis backend) + sparkline             │
│  - card 2×1 : Withdrawal cooldown ou "Free to withdraw" +     │
│    CTA "Withdraw" + preview fee                                │
│  - card 2×1 : "Pool TVL" partagée + "Your share %"            │
│  CTA primary "Deposit more"                                    │
└──────────────────────────────────────────────────────────────┘

┌── My Bets (anciennement Predictions) ────────────────────────┐
│ Eyebrow rouge "Bets · Markets"                                │
│ Bandeau si claimable > 0 : "X wins ready · $Y.YY USDC ready" │
│   + CTA "Claim all"                                            │
│ Filtres : All / Pending / Won / Lost / Claimable / Refundable │
│ Table style Discover : border #1E1E1E, font-mono headers,     │
│ status pills landing palette                                   │
└──────────────────────────────────────────────────────────────┘

┌── Tabs (réduites de 5 à 3) ───────────────────────────────────┐
│  [ Fan Tokens ]  [ Activity ]  [ Streamers ]                  │
│   pills mono uppercase, active = border #E8001D + bg rouge 8% │
│                                                                │
│ Fan Tokens   → grille bento de TokenCard restylées,           │
│                CTA "Bet with X" pré-rempli                     │
│ Activity     → fusion donations + subs + bets + LP events,    │
│                filtres par type, chrono desc                   │
│ Streamers    → "Followed" (rangée avatars compacts) +         │
│                "Subscribed" (rangée avatars + countdown jour)  │
└──────────────────────────────────────────────────────────────┘

┌── Streamer panel (conditionnel — uniquement si streamer) ────┐
│ Eyebrow rouge "Streamer · Revenue"                            │
│ Bento : Total revenue · Available balance · Followers · Subs  │
│ CTA "Withdraw revenue" → useStreamWalletWriteWithdrawRevenue  │
│ Recent donations list (last 5)                                │
└──────────────────────────────────────────────────────────────┘

<Footer />
```

---

## 6. Design system à appliquer (rappel concentré)

```css
/* Couleurs */
--bg-page:        #0A0A0A;
--bg-card-1:      #111;       /* primary */
--bg-card-2:      #141414;    /* secondary */
--border-subtle:  #1E1E1E;
--border-default: #2A2A2A;
--border-hover:   #3A3A3A;
--accent-red:     #E8001D;
--accent-red-h:   #FF1737;
--accent-red-d:   #B0001A;
--green-pnl:      #2dd4a4;    /* ou #00C853 */
--gold:           #F5C518;
--text-primary:   #fff;
--text-body:      rgba(255,255,255,0.65);
--text-meta:      rgba(255,255,255,0.45);

/* Typo */
.font-display    /* Barlow Condensed, uppercase, tracking serré, 700-800 */
.font-mono-ctv   /* JetBrains Mono, uppercase, letter-spacing 0.14-0.32em */

/* Eyebrow */
<div className="font-mono-ctv inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#E8001D]">
  <span aria-hidden className="block h-0.5 w-4 bg-[#E8001D]" />
  Eyebrow text
</div>

/* CTA primary */
className="rounded-md bg-[#E8001D] px-7 py-4 text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-all hover:-translate-y-px hover:bg-[#FF1737]"
style={{ boxShadow: "0 8px 32px rgba(232,0,29,0.25)" }}

/* CTA secondary */
className="rounded-md border border-[#2A2A2A] bg-transparent px-7 py-4 text-[14px] font-bold uppercase tracking-[0.06em] text-white hover:border-[#E8001D]"

/* Bento card */
className="rounded-xl border border-[#1E1E1E] bg-[#111] p-7 transition-colors hover:border-[#2A2A2A]"

/* Stat hero */
<div className="font-display text-[64px] font-extrabold leading-none tracking-[-0.02em] text-white">
  $12,418
</div>
```

Composants réutilisables à importer (NE PAS dupliquer) :
- `<BackgroundFX />` depuis `components/landing/BackgroundFX.tsx` (ou `discover/sections/BackgroundFX.tsx`)
- `<SectionHead title=… lead=… eyebrow=… />` depuis `discover/sections/SectionHead.tsx`
- `<Eyebrow>` depuis `discover/components/Eyebrow.tsx`

---

## 7. Architecture fichiers — clean code

Garde la structure clean architecture déjà en place. Pas de dossier `components/dashboard/` legacy (le shim `Dashboard.tsx` à 1 ligne peut rester si import historique, sinon supprime-le et update `app/dashboard/page.tsx` pour pointer direct).

```
components/features/dashboard/
├── DashboardPage.tsx                      ← orchestrateur "use client" (renommé depuis Dashboard.tsx)
├── sections/
│   ├── DashboardHero.tsx                  ← (remplace DashboardHeader + UserProfileCard)
│   ├── QuickActionsStrip.tsx              ← NOUVEAU
│   ├── StatsHero.tsx                      ← (remplace StatsCardsSection)
│   ├── LpPositionPanel.tsx                ← NOUVEAU — utilise useLpPosition (cf. plan contrats Lot 3)
│   ├── MyBetsSection.tsx                  ← NOUVEAU — utilise useMyBets (cf. plan contrats Lot 4)
│   ├── ActivityTab.tsx                    ← (remplace + élargit TransactionsTab + SubscriptionsTab)
│   ├── FanTokensTab.tsx                   ← restyle, garde la logique
│   ├── StreamersTab.tsx                   ← (remplace FollowingTab + compresse)
│   └── StreamerRevenuePanel.tsx           ← NOUVEAU, conditionnel
├── components/
│   ├── PnlBadge.tsx                       ← NOUVEAU — pill +X% / -X% colorisée
│   ├── HeroStatCard.tsx                   ← NOUVEAU — bento stat hero (taille XL)
│   ├── SecondaryStatCard.tsx              ← NOUVEAU — bento stat secondaire
│   ├── ClaimAllBanner.tsx                 ← NOUVEAU — bandeau "X claimable wins"
│   ├── BetRow.tsx                         ← NOUVEAU — ligne table bets
│   ├── ActivityRow.tsx                    ← NOUVEAU — ligne table activity unifiée
│   ├── TokenCard.tsx                      ← restyle landing
│   ├── StreamerAvatarPill.tsx             ← NOUVEAU — avatar compact pour rangée scrollable
│   └── states/{LoadingSkeleton,EmptyState,ErrorState}.tsx
├── hooks/
│   ├── usePortfolioCalculation.ts         ← garde, étend avec LP shares
│   ├── useDashboardData.ts                ← agrège toutes les sources (predictions, bets, LP, streamer)
│   └── useIsStreamer.ts                   ← détecte via useStreamWalletFactoryReadHasWallet
└── domain/
    ├── pnl.ts                             ← computePnl, winRate, avgOdds (purs, testables)
    ├── activity.ts                        ← unifyActivity(donations, subs, bets, lpEvents)
    └── types.ts                           ← types partagés
```

### Règles non-négociables
- **TS strict, zéro `any`.** Les types métier viennent de `@chiliztv/shared/dto/*` ou `@chiliztv/domain` quand existants.
- **Logique pure dans `domain/`.** `computePnl`, `unifyActivity`, `groupByMonth`, `formatPnl` ne touchent ni au DOM ni à React.
- **Pas de `useState` dérivable.** `useMemo` pour tout calcul à partir de `data + filtres`.
- **Composants présentation = stateless.** State dans hooks ou orchestrateur.
- **Aucune nouvelle dépendance** (recharts est déjà là pour les sparklines).
- **Server vs client** : `app/dashboard/page.tsx` reste server. Seuls les composants qui consomment des hooks sont `"use client"`. Le hero (text + eyebrow) peut rester server.
- **Composants existants réutilisés**, pas dupliqués (`BackgroundFX`, `SectionHead`, `Eyebrow`, `MarketBetDialog`, `PoolDepositDialog`).
- **Aucune URL Unsplash, aucun avatar hardcodé.** Avatar = initiales sur dégradé déterministe basé sur `keccak256(walletAddress)`.
- **A11y** : `aria-label` sur boutons icon-only, `focus-visible:ring-2 focus-visible:ring-[#E8001D]`, contraste ≥ AA, skeletons (pas spinners) pendant loading.
- **i18n-ready** : libellés extraits dans `const COPY` par fichier, pas hard-codés dans le JSX.

---

## 8. États à gérer

- **Loading initial** : skeleton landing-style (rectangles `bg-[#1E1E1E] animate-pulse`), pas de spinner centré façon `<RefreshCw />`.
- **Wallet non connecté** : remplacer le hero par un panneau "Connect your wallet to view your dashboard" + CTA Dynamic. Cacher tout le reste.
- **Aucune donnée** (user vient juste de se connecter) :
  - Stats hero affichent 0 / `—`
  - LP Position : empty state "Become the house" + CTA pool
  - My bets : empty state "Place your first bet" + CTA Discover
  - Activity : empty state "Your on-chain history will live here"
- **Erreur API back** (predictions/donations API down) : bandeau soft eyebrow rouge + bouton "Retry", **mais** continuer à afficher les données on-chain (LP, bets via getUserBets fallback).

---

## 9. Tests de non-régression à valider

```bash
pnpm -F @chiliztv.com/frontend type-check
pnpm -F @chiliztv.com/frontend lint
pnpm -F @chiliztv.com/frontend build
```

Manuellement :
- Wallet déconnecté → page minimale avec CTA login
- Wallet connecté zéro activité → empty states clairs partout
- Wallet avec LP shares → LpPositionPanel s'affiche, valeurs cohérentes avec `cast call $POOL "convertToAssets(uint256)" ...`
- Wallet avec bets → My Bets table peuplée, claim ouvre tx, état update post-confirm
- Wallet avec donations/subs → Activity tab consolidée
- Wallet streamer → StreamerRevenuePanel s'affiche, withdraw revenue tx OK
- Mobile : tabs pliables, hero stat se réorganise en stack vertical, quick actions strip scrollable horizontalement
- Aucune URL Unsplash dans le DOM (`grep -r "unsplash"` doit retourner 0 dans `components/features/dashboard/`)

---

## 10. Livrable attendu

1. Refonte visuelle complète du dashboard en langage landing (palette + typo + patterns).
2. Renommage `Dashboard.tsx` → `DashboardPage.tsx`, ajout de `BackgroundFX`, `SectionHead`, restyle de tous les sub-composants.
3. **Suppression** : avatar Unsplash hardcodé, badge "VIP Member", `StreamerSection.tsx` (mort), tabs "Subscriptions" séparée, palette purple/indigo/yellow legacy.
4. **Nouveaux composants** : `LpPositionPanel`, `MyBetsSection`, `StreamerRevenuePanel`, `QuickActionsStrip`, `ClaimAllBanner`, `PnlBadge`, hero stats bento.
5. **Refactor** : `TransactionsTab` + `SubscriptionsTab` + activity bets/LP → `ActivityTab` unifié.
6. **Domain pur** : `computePnl`, `unifyActivity`, `useIsStreamer`.
7. Conserver tous les hooks d'API existants (sans casser leur signature).
8. Aucun changement dans `packages/`, `apps/backend`, hooks `lib/contracts/generated.ts`, `useChilizSwapRouter`, `useLiquidityPool` (l'enrichissement de `useLiquidityPool` est planifié dans le Lot 3 du plan d'intégration des contrats — synchronise-toi avec lui si tu codes en parallèle).
9. `pnpm type-check` et `pnpm lint` verts.
10. Commit propre, par exemple :
    `refactor(dashboard): redesign in landing language, add LP position + my bets + streamer panel, unify activity tab`

---

## 11. Si tu hésites

- Tranche en faveur de **moins de chrome, plus de hiérarchie typo**, comme la landing.
- Si une feature dépend d'un Lot du plan d'intégration des contrats (LP position détaillée, table `bets`), **scaffold le composant avec un mock data + TODO** et un commentaire `// TODO(contracts-integration-lot-3): wire to useLpPosition` plutôt que de bloquer.
- Si tu doutes sur le contenu (ex. "garder le tab Subscriptions séparé ou fusionner ?"), tranche fusion + garde un filtre dans Activity.
- Si une dépendance design te manque (par ex. un graph plus complexe), utilise recharts (déjà installé) — pas de nouvelle lib.

Bonne refonte 🔴
