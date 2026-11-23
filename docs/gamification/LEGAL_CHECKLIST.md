# Gamification — gate juridique (bloquante)

Les 8 points du §13 de la spec. **Le lancement (`GAMIFICATION_ENABLED=true` en prod) n'a lieu que lorsque chaque case « Décision » est remplie** et que les interrupteurs correspondants sont posés et déployés.

Les interrupteurs vivent dans [`packages/domain/src/gamification/catalog/legalSwitches.ts`](../../packages/domain/src/gamification/catalog/legalSwitches.ts) (`LEGAL_SWITCHES`). Changer une valeur ne demande aucun refactor : toutes les politiques le lisent par défaut. Les constantes citées sont dans `catalog/constants.ts` et `catalog/achievements.ts`. Un changement s'applique aux crédits **à venir** ; les lignes déjà écrites restent, une correction passe par des lignes d'annulation ou d'ajustement.

Valeurs actuelles (spec) : `betVolume: 'volume'`, `betWon: 'xp'`, `support: 'xp'`, `streak: 'daily'`, `doubleXp: 'enabled'`.

---

### 1. XP de volume misé

- **Mécanique** : 1 XP par USDC misé, pari d'au moins 5 USDC, plafond 1 000 XP par jour de Paris. Couverture des deux issues : seule l'issue maximale compte. Succès privé *Bet Volume* (jamais affiché publiquement).
- **Question** : incitation ou gratification encadrée par l'ANJ ?
- **Interrupteur** : `betVolume`
  - `'volume'` (actuel) ;
  - `'per_market'` (variante plus sûre) : XP fixe par marché joué, montant ignoré (`BET_VOLUME_PER_MARKET_XP`, plafond `BET_VOLUME_PER_MARKET_DAILY_CAP`) ;
  - `'disabled'` : aucune XP de volume.
- **Décision** : ☐ `volume` ☐ `per_market` ☐ `disabled` — commentaire : …………

### 2. Série quotidienne

- **Mécanique** : connexion quotidienne (+50 XP, +5 par jour de série, plafond 100), gel automatique (1 gel tous les 7 jours, 2 au plus), aucune mise requise, aucune notification push.
- **Question** : série sur un produit d'argent réel, même sans mise requise.
- **Interrupteur** : `streak`
  - `'daily'` (actuel) ;
  - `'weekly'` (variante plus sûre) : semaines de Paris consécutives avec une connexion, sans gel ;
  - `'disabled'` : connexion créditée sans bonus de série.
- **Non construit** : le « mode pause » qui gèle la série (outil de jeu responsable, voir point 7).
- **Décision** : ☐ `daily` ☐ `weekly` ☐ `disabled` — commentaire : …………

### 3. Double XP

- **Mécanique** : événement lancé à la main depuis *Admin › Gamification*. Sources non monétaires seulement (figé en base et dans le domaine : jamais `bet_volume`, `bet_won`, `support`), ×2 au plus, préavis 24 h, 72 h au plus, 4 par mois de Paris. Bannière annoncée jusqu'à 7 jours avant.
- **Question** : faut-il interdire certaines plages horaires ?
- **Interrupteur** : `doubleXp`
  - `'enabled'` (actuel) ;
  - `'disabled'` : création refusée (`DOUBLE_XP_DISABLED`), aucun multiplicateur, aucune bannière.
- **Non construit** : interdiction de plages horaires. Si elle est demandée, c'est une règle de plus dans `validateDoubleXpEvent` (domaine).
- **Décision** : ☐ `enabled` ☐ `enabled` + plages interdites : ………… ☐ `disabled`

### 4. Paris gagnants et classement

- **Mécanique** : +5 XP par marché gagné (profit net > 0 sur le compte, montant ignoré). Succès *Winning Bets* et *Leaderboard* (titres, cadres Podium et Couronne liés au classement en profit).
- **Question** : XP et récompenses liées au gain.
- **Interrupteur** : `betWon`
  - `'xp'` (actuel) ;
  - `'cosmetic_only'` (variante plus sûre) : 0 XP pour le gain et pour les paliers de ses succès ; titres et cadres conservés ;
  - `'disabled'` : aucune ligne, aucune progression.
- **Décision** : ☐ `xp` ☐ `cosmetic_only` ☐ `disabled` — commentaire : …………

### 5. Affichage public d'un statut dérivé des paris

- **Mécanique** : sur la carte au survol, le profil public et le leaderboard : niveau, rang, titre, cadre et vitrine. Certains titres et cadres viennent des paris (*Winning Bets*, *Leaderboard*, Podium, Couronne). **Aucun montant n'est jamais affiché** ; *Bet Volume* est privé (test de schéma CA15).
- **Question** : un statut public dérivé en partie des paris est-il acceptable ?
- **Leviers** (pas d'interrupteur dédié) :
  - `visibility: 'private'` sur une famille dans `achievements.ts` : elle sort de la vitrine publique et du profil public ;
  - les titres et cadres de ces familles restent équipables : les retirer demande un changement du catalogue (petit, dans le domaine) ;
  - `betWon: 'disabled'` coupe aussi la progression de *Winning Bets*.
- **Décision** : ☐ acceptable tel quel ☐ familles à passer en privé : ………… ☐ titres / cadres à retirer : …………

### 6. Non-convertibilité de l'XP et des cosmétiques

- **Mécanique** : l'XP, les niveaux, titres, cadres et succès ne s'échangent contre rien (argent, crédit de pari, réduction de frais). Le dialogue *How XP works* le dit déjà : « XP has no monetary value… ».
- **Interrupteur** : aucun, c'est une clause des CGU.
- **Clause proposée** (anglais, pour relecture juridique) :

> **Experience Points and Cosmetic Items.** PredCast may award experience points ("XP"), levels, ranks, titles, frames, badges and achievements (together, "Cosmetic Items") for using the platform. XP and Cosmetic Items are a measure of activity on PredCast and are provided for entertainment only. They have no monetary value, are not property, and cannot be sold, transferred, exchanged, or redeemed for cash, cryptocurrency, tokens, betting credit, fee reductions or any other benefit, on PredCast or elsewhere. XP is never required to place a bet and never changes the odds, payouts or fees of any market. PredCast may adjust, reverse or remove XP and Cosmetic Items, including to correct errors, cancelled markets or abuse, and may suspend a user's participation in the XP programme. PredCast may change or discontinue the XP programme at any time; no compensation is owed for any XP or Cosmetic Item that is changed or removed.

- **Décision** : ☐ clause validée ☐ clause modifiée (version finale jointe) — publiée dans les CGU le : …………

### 7. Outils de jeu responsable et contrôle d'âge

- **Mécanique** : la gamification s'ajoute à un produit de paris qui n'a ni pause, ni limites de mise, ni auto-exclusion, ni contrôle d'âge.
- **Question** : faut-il en faire un prérequis au lancement de la gamification ?
- **Interrupteur** : aucun dans le produit actuel. Le seul levier est de ne pas lancer (`GAMIFICATION_ENABLED=false`). Le « mode pause » qui gèle la série (point 2) serait le premier outil à construire.
- **Décision** : ☐ pas un prérequis ☐ prérequis : ………… (lancement repoussé)

### 8. Récompense à durée limitée *Founder*

- **Mécanique** : titre et cadre *Founder* pour un compte qui atteint le niveau 5 dans les 60 jours après `GAMIFICATION_LAUNCH_AT`.
- **Question** : risque de pression temporelle.
- **Leviers** (constantes de `catalog/constants.ts`) :
  - `FOUNDER_WINDOW_DAYS = 0` : personne ne l'obtient (désactivation) ;
  - allonger la fenêtre ou baisser `FOUNDER_LEVEL` pour réduire la pression ;
  - ne pas communiquer d'échéance dans l'UI (aujourd'hui, aucun compte à rebours n'est affiché).
- **Décision** : ☐ tel quel (60 j, niveau 5) ☐ fenêtre / niveau : ………… ☐ désactivé

---

## Validation

| | |
|---|---|
| Relu par | ………… |
| Date | ………… |
| Interrupteurs posés dans `legalSwitches.ts` (commit) | ………… |
| CGU publiées (lien) | ………… |
| Texte de *How XP works* relu | ☐ |
