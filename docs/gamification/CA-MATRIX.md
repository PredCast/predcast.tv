# Gamification — matrice des critères d'acceptation (CA1 à CA23)

Chaque critère du §11.1 de la spec et la preuve qui le couvre, sur la branche `feat/gamification-launch` (toutes les étapes réunies).

Chemins abrégés :
- `uc/` = `apps/backend/src/application/gamification/use-cases/`
- `dom/` = `packages/domain/src/gamification/__tests__/`
- `it/` = `apps/backend/src/testing/integration/`
- `fe/` = `apps/frontend/components/`

| CA | Critère (court) | Preuve | Statut |
|---|---|---|---|
| CA1 | JWT sans `dynamicJwt` : pas d'`accountId` ; routes `/gamification/*` → 401 `ACCOUNT_REQUIRED` | `apps/backend/src/application/auth/use-cases/__tests__/ExchangeDynamicTokenUseCase.test.ts` (« keeps the legacy flow… no account in the token ») ; `apps/backend/src/presentation/http/middlewares/__tests__/accountIdentity.test.ts` (« requireAccount (CA1) ») | prouvé |
| CA2 | 1ʳᵉ connexion du jour +50, 2ᵉ refusée, deux appels simultanés = une ligne | `uc/__tests__/CheckInUseCase.test.ts` (CA2 ×2) ; SQL réel : `it/gamification-sql.integration.test.ts` (« counts two (and five) simultaneous check-ins once ») | prouvé |
| CA3 | Jours 11 et 12 à 100 XP ; gel au 7ᵉ ; stock 2 au 21ᵉ | `dom/streakPolicy.test.ts` (CA3 ×2) ; `uc/__tests__/CheckInUseCase.test.ts` (CA3) | prouvé |
| CA4 | 1 jour manqué + 1 gel : série continue ; 2 jours : série à 1, gel gardé | `dom/streakPolicy.test.ts` (CA4 ×2) ; `uc/__tests__/CheckInUseCase.test.ts` (CA4 ×2) | prouvé |
| CA5 | Jours de Paris exacts à minuit et aux changements d'heure 2027 | `dom/parisDay.test.ts` (CA5, 28/03 et 31/10) | prouvé |
| CA6 | 4,99 USDC : rien ; 5,00 USDC : 5 XP | `dom/volumeCredit.test.ts` (CA6) ; `uc/chain/__tests__/ChainProcessor.test.ts` (CA6) ; bout en bout : `it/gamification-chain.integration.test.ts` (pari de 4 USDC ignoré) | prouvé |
| CA7 | Deux wallets du compte sur Home et Away : 30 XP, 2ᵉ ligne à 0 `hedge` | `dom/volumeCredit.test.ts` (CA7) ; `uc/chain/__tests__/ChainProcessor.test.ts` (CA7) ; `it/gamification-chain.integration.test.ts` (ligne `hedge`) | prouvé |
| CA8 | 1 200 USDC dans la journée : 1 000 XP, reste `daily_cap` ; lendemain repaie | `dom/volumeCredit.test.ts` (CA8) ; `uc/chain/__tests__/ChainProcessor.test.ts` (CA8) | prouvé |
| CA9 | Marché annulé : lignes annulées, `xp_total` et `bet_volume_usdc` baissent, paliers gardés | `uc/chain/__tests__/ChainProcessor.test.ts` (CA9) ; `apps/backend/src/testing/scenarios/__tests__/gamification-cancel.scenario.test.ts` ; `it/gamification-chain.integration.test.ts` (annulation, progression à 40, palier conservé) | prouvé |
| CA10 | Un seul gain par compte ; couverture proportionnelle non gagnante ; 4 + 5 USDC non gagnant | `dom/winPolicy.test.ts` (CA10 ×3) ; `uc/chain/__tests__/ChainProcessor.test.ts` (CA10 ×3) | prouvé |
| CA11 | 6 messages : 5 XP ; retrait : −1 ; doublon ou < 20 s : 0 ligne | `dom/chatPolicy.test.ts` ; `uc/__tests__/SocialSources.test.ts` (CA11 ×3) ; concurrence réelle : `it/gamification-credit.integration.test.ts` (20 messages en parallèle → 5 XP) | prouvé |
| CA12 | Deux onglets : 1 min ; 100 min : 10 XP, 110ᵉ : rien ; match non commencé : `not_live` | `dom/watchAndStream.test.ts` (CA12) ; `uc/__tests__/RecordWatchHeartbeatUseCase.test.ts` (CA12 ×2) ; SQL : `it/gamification-watch-sql.integration.test.ts` | prouvé |
| CA13 | Stream sans spectateur éligible après 60 min : 0 ; avec : 10 XP/h, 40/jour ; `stop_stream` annule | `dom/watchAndStream.test.ts` (CA13 ×2) ; `uc/streams/__tests__/StreamMinutes.test.ts` (« counted minutes (CA13) », « stop_stream moderation (CA13) ») ; SQL : `it/gamification-streams-sql.integration.test.ts` | prouvé |
| CA14 | Double XP ×2 : connexion 200, chat 10, volume inchangé ; refus 400 / 409 ; audit | `dom/doubleXpPolicy.test.ts` (CA14 ×2) ; `uc/__tests__/AdminGamification.ca14.test.ts` (15 cas, audit inclus) | prouvé |
| CA15 | Carte publique sans JWT, sans montant ni *Bet Volume* (test de schéma) | `uc/__tests__/PublicReadModels.ca15.test.ts` (clés `amount\|stake\|pnl\|volume` interdites) ; captures du profil public (étape 07) | prouvé |
| CA16 | Cosmétiques : titre non possédé, 3 tuiles au niveau 9, tuile *Bet Volume* → 422 | `dom/cosmetics.test.ts` (« validateCosmetics (CA16) ») ; `uc/__tests__/GamificationReads.test.ts` (« PUT /gamification/me/cosmetics (CA16) ») | prouvé |
| CA17 | Une montée de niveau = un toast, plus rien après l'ack, rien à la baisse | `dom/notificationToasts.test.ts` (CA17) ; `uc/__tests__/CheckInUseCase.test.ts` (CA17) | prouvé ; rendu du toast : manuel |
| CA18 | Curseur `bets` remis à zéro puis rejeu : aucune ligne, totaux inchangés | `uc/chain/__tests__/ChainProcessor.test.ts` (CA18) ; bout en bout avec l'indexeur rembobiné : `it/gamification-chain.integration.test.ts` (CA18) | prouvé |
| CA19 | Rien d'antérieur à `GAMIFICATION_LAUNCH_AT` | `uc/__tests__/CreditXpUseCase.test.ts`, `CheckInUseCase.test.ts`, `RecordWatchHeartbeatUseCase.test.ts`, `uc/chain/__tests__/ChainProcessor.test.ts` (CA19) ; cycles : `uc/cycles/__tests__/SnapshotCycleRanks.test.ts` (cycle d'avant le lancement ignoré) | prouvé |
| CA20 | Ban d'un wallet lié : connexion refusée `banned`, ni chat ni visionnage | `uc/__tests__/CheckInUseCase.test.ts`, `CreditXpUseCase.test.ts`, `SocialSources.test.ts`, `RecordWatchHeartbeatUseCase.test.ts` (CA20) ; `dom/watchAndStream.test.ts` | prouvé |
| CA21 | Top 100 photographié moins d'une heure après `EpochAdvanced` ; Couronne jusqu'au cycle suivant ; XP du palier V une fois | `uc/cycles/__tests__/SnapshotCycleRanks.test.ts` (CA21, « hands the Crown… pays tier XP once for life », « an empty cycle ends the Crown ») | prouvé |
| CA22 | Chat : or `isFeatured` conservé, pastille distincte | `fe/live/chat/ChatAuthor.tsx`, `ChatMessageItem.tsx`, `fe/features/gamification/components/LevelPill.tsx` ; captures Playwright de l'étape 06 | manuel : à recapturer au test final (abonné actif + pastille) |
| CA23 | Carte au clavier (focus ouvre, Échap ferme) ; `prefers-reduced-motion` ; contrastes AA | `fe/features/gamification/components/ProfileHoverTrigger.tsx`, `ProfileHoverCard.tsx`, `FrameRing.tsx` ; vérifié à l'étape 06 (focus, Échap, `spin` → `none`) | manuel : clavier, mouvement réduit et contrastes à refaire au test final |

**Résultat** : 21 critères prouvés par des tests automatisés, CA22 et CA23 vérifiés à la main à l'étape 06 et à refaire au test final. Aucun trou.
