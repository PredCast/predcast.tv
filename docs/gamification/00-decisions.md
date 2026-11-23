# Décisions gamification

Ce fichier liste les réponses de l'utilisateur aux questions ouvertes de `01-proposition-gamification.md` (§15). Une décision listée ici l'emporte sur la recommandation du document.

## 21/11/2026

| Question (§15) | Décision | Conséquence pour la spec |
|---|---|---|
| 1. Identité du profil | **Le profil est rattaché au compte**, lui-même lié au wallet | L'XP, les succès et les séries s'agrègent par compte. Les paris de tous les wallets liés au compte comptent. Il faut un lien compte ↔ wallet fiable côté backend : aujourd'hui, le JWT ne porte que le wallet. |
| 2. Mise minimale comptée | **5 USDC** | Un pari sous 5 USDC ne rapporte ni XP monétaire ni progression des succès de paris. Les pronostics gratuits et les actions non monétaires restent la voie des petits joueurs. |
| 5. Série | **Quotidienne**, façon Duolingo | La série doit pouvoir se tenir sans miser (pronostic gratuit, visionnage, connexion), y compris les jours sans match, sinon elle pousse à parier chaque jour. Gel de série à prévoir. ⚠ à valider juridiquement |
| 6. Double XP | **Activé manuellement par l'équipe** (admin) | Interrupteur dans `apps/admin` : début, fin et multiplicateur. Le périmètre du multiplicateur (sources non monétaires seulement ou non) reste une question juridique. |
| 3. Famille Volume | **Volume total misé**, sans plafond par marché | Remplace M2 (barème logarithmique par marché) et le plafond de 500 XP monétaires par semaine. Calibrage proposé ci-dessous, en attente de validation. |
| 7. Pronostics gratuits | **Non pour l'instant** | Pas de `free_picks`. La série de justesse et les sources N5, J3 sortent du MVP. Idée « paper pronostic » notée pour plus tard. |
| 8. Pronostics justes | **Une seule famille « Paris gagnants »** | Seuls les paris misés (≥ 5 USDC) comptent. |
| 16. Niveau maximum | **60**, la suite plus tard | Pas de prestige au MVP. |
| 17. NFT | **Plus tard**, éventuellement comme badge ultime ou badge partenaire | Rien au MVP. |
| 19. Calendriers (basket, nouveaux marchés) | **En attente** | Palier « catalogue complet » dynamique en attendant. |
| 4. Carte au survol | **Validée** : niveau, rang, titre, vitrine. Jamais de montant | — |
| 9. Langue | **Anglais**, autres langues plus tard | Clés de traduction dès le départ. |
| 18. Notifications | **Dans l'app seulement** | Push quand l'application mobile existera. |
| 10. Rétroactivité | **Non** | Tout le monde part de zéro au lancement. |
| 11. Cycle du leaderboard | **30 jours** | Les succès de classement suivent ce cycle. |
| 12. Pics de spectateurs | **Rien pour l'instant** | Famille « Streamer · public » retirée du MVP. Les heures streamées restent. |
| 13. Vérification d'identité | **Aucune** (modèle Polymarket) | Pas de KYC dans l'anti-abus du MVP. |
| 20. Présence du chat (`connected_users`) | **Hors sujet pour l'instant** | — |

## Calibrage proposé (21/11/2026, à valider)

Deux sources seulement pour mesurer la progression : la connexion quotidienne et le volume. Les paris gagnants et les succès s'ajoutent par-dessus et accélèrent d'environ 15 à 25 %.

- **Connexion quotidienne** : 50 XP le 1er jour, +5 XP par jour de série, plafonné à 100 XP par jour à partir du 11e jour consécutif.
- **Volume** : 1 XP par USDC misé (paris ≥ 5 USDC), plafonné à 1 000 XP par jour.
- **Courbe** inchangée : `XP(L) = 50 × L × (L − 1)`, soit 177 000 XP pour le niveau 60.

## À faire plus tard

- « Paper pronostic » : pronostics sans mise.
- Calendriers des matchs (basket, nouveaux marchés).
- Notifications push (avec l'application mobile).
- Succès de pic de spectateurs.
- NFT : badge ultime ou partenaire.
- Traductions des titres et succès.
- Prestige au-delà du niveau 60.
