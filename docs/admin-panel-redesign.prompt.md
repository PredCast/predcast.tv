# Prompt — Redesign complet du panel admin PredCast (`apps/admin`)

> À coller dans une session Claude dédiée design, lancée à la racine du monorepo.

---

Tu es chargé du **redesign visuel complet** du back-office admin PredCast (`apps/admin`, Next.js 16 App Router + Tailwind v4). La logique fonctionne — auth, RBAC, data fetching, mutations — et **ne doit pas changer**. Ton travail porte uniquement sur la couche présentation : layout, hiérarchie visuelle, densité, micro-interactions, états vides/chargement/erreur.

## Contexte produit

PredCast (predcast.tv) est une plateforme Web3 de streaming football + paris pari-mutuel sur Chiliz Chain. Le panel admin est l'outil interne des opérateurs : modération communautaire pendant les lives (Coupe du Monde en cours — usage sous pression, sessions courtes, décisions rapides), supervision des joueurs/marchés, et bientôt finance/analytics. Utilisateurs : 2-5 admins de confiance, écran large, desktop only (pas de responsive mobile requis, mais ne pas casser en dessous de 1280px).

## Parcours et écrans existants (tous à redesigner)

**Flux de connexion (3 étapes, séquentiel) :**
1. `GateScreen` — saisie du code d'accès (étape pré-wallet). Carte centrée, input password, erreurs 403/429/réseau différenciées.
2. `ConnectWalletScreen` — connexion wallet via Dynamic Labs (`DynamicConnectButton`).
3. Signature d'un message one-time (écran `AdminLoadingScreen` pendant la vérification) → puis le shell.
   États terminaux : `AccessDeniedScreen` (wallet sans grant, bouton "Use another wallet"), `AuthErrorScreen` (échec, bouton retour).

**Shell :** `AdminShell` (sidebar 208px + `TopBar`). TopBar : logo PredCast + chip "Admin", badge rôle coloré (super_admin rouge / admin gold / moderator vert / finance bleu), wallet courte, bouton Disconnect. `SidebarNav` filtrée par rôle.

**Pages :**
- `/` Dashboard — quasi vide aujourd'hui (placeholder). Proposer un vrai dashboard : raccourcis, compteurs (reports open, bans actifs, matchs live), dernière activité.
- `/moderation` — file de reports (filtres statut, badges sévérité S1-S5, pagination keyset "Next page").
- `/moderation/reports/[id]` — détail report + action déclenchée + verdict dismiss/close + reverse.
- `/moderation/bans` — zone danger "Manual ban" (wallet + raison + select durée 24h→permanent), table des bans, flow lift inline avec note.
- `/moderation/config` — 6 champs numériques de politique de modération (lecture seule pour moderator).
- `/players` + `/players/streamers` (tabs) — agrégats joueurs (pseudo, wallet copiable, mises, payouts, W·L·P) / revenus streamers. Pagination offset "1–25 of N".
- `/players/[wallet]` — fiche joueur : pseudo + wallet + 5 stat cards + table des 25 derniers paris.
- `/markets` — matchs (logos équipes, score, statut, contrat copiable ou badge "Missing", volume USDC, kickoff) + actions par ligne (Deploy / Close markets, confirmation deux-temps).

## Langage visuel — contraintes NON négociables

Identité Chiliz-rouge stricte (cf. `CLAUDE.md` §5, source de vérité) :

```
bg-page #0A0A0A · cards #111/#141414 · elevated #1A1A1A
borders #1E1E1E / #2A2A2A / hover #3A3A3A
accent #E8001D (hover #FF1737, dark #B0001A)
success/PnL+ #2dd4a4 · pending/fee #F5C518
text #fff / rgba(255,255,255,.65) / rgba(255,255,255,.45)
.font-display = Barlow Condensed uppercase 700-800
.font-mono-ctv = JetBrains Mono uppercase tracking 0.14-0.32em
```

- **Interdit** : `bg-zinc-*`, `bg-purple-*`, `bg-blue-*`, `bg-emerald-*`, `bg-gray-*`, gradients legacy. Vérifier `grep -rE "bg-(zinc|purple|blue|emerald|gray)-" apps/admin/` avant de conclure.
- Eyebrow rouge avec barre (pattern signature, voir `PageHeader`), bento cards `rounded-xl border-[#1E1E1E] bg-[#111]`.
- Back-office dense : corps de table 13px, headers de colonne style eyebrow 10px, rows 38-40px, pas de zébrage. Sémantique constante : vert = sain/résolu, gold = pending, rouge = danger/sévérité.
- Zones dangereuses : `border-[#E8001D]/30` + fond rouge 5%.
- A11y : `aria-label` sur les boutons icon-only, `focus-visible:ring-2 ring-[#E8001D]`, contrastes AA, `prefers-reduced-motion` respecté.
- Les écrans guard (gate/connect/denied/error) peuvent être plus théâtraux (le `SmokeBackground` de `@chiliztv/ui` y est autorisé, PAS sur les écrans de travail).

## Contraintes techniques dures

- **Zéro nouvelle dépendance** (pas de bibliothèque de composants, pas d'icônes en plus — lucide-react est déjà dispo dans le monorepo mais PAS encore dans apps/admin : ne pas l'ajouter sans validation).
- **Un composant React = un fichier** (règle CLAUDE.md §3.3bis). Pas de sous-composants inline > 15 lignes.
- Ne PAS toucher : `hooks/api/*`, `lib/api/*`, `lib/query/*`, `providers/*`, la machine d'états `AdminGuard` (tu peux restyler les écrans qu'elle rend, pas sa logique), les schémas de données.
- Composants présentation stateless ; le state reste dans les hooks existants.
- Build de validation : `cd apps/admin && pnpm lint && pnpm build` doit rester vert.
- Assets dispo : `public/predcast-logo-white.svg`, `public/predcast-mark.svg`.

## Attendus

1. **Audit rapide** (10 lignes max) : ce qui fonctionne, ce qui est faible (hiérarchie, rythme vertical, cohérence des espacements, feedback des actions).
2. **Plan de redesign ordonné** par lots (guard flow → shell/nav → tables communes → pages), validé avant de coder.
3. **Implémentation** lot par lot, avec build vert à chaque lot et commits `style(admin): …`.
4. Soigner particulièrement : les états vides (premier lancement = base vide), les transitions du guard flow (3 étapes doivent se sentir comme UN parcours), la lisibilité des tables denses, et la distinction visuelle lecture vs action dangereuse.

Le code existant est la spec fonctionnelle. En cas de doute entre beauté et conformité au langage visuel : conformité.
