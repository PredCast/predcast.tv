# Guides PredCast (smart contracts)

Documentation en français pour l'équipe et les développeurs, avec schémas. Les schémas s'affichent directement sur GitHub, et chaque guide s'exporte en PDF.

| Guide | Pour qui | Contenu |
|---|---|---|
| [01 · Vue d'ensemble](01-vue-ensemble.md) | Toute l'équipe | Ce que font les contrats, où va l'argent, les frais, le leaderboard, le streaming, l'état de la sécurité |
| [02 · Guide développeur Chiliz](02-guide-dev-chiliz.md) | Développeurs | Adresses, appels par scénario, événements, erreurs, ce que change la PR #43, mise en production |
| [03 · Exploitation et sécurité](03-exploitation-securite.md) | Ops, gouvernance, développeurs | Rôles, clés, opérations courantes, incidents, mises à jour, vérifications de sécurité |
| [04 · Base](04-base.md) | Équipe produit, développeurs | Pools Aero, étude de liquidité, recommandations, étapes avant le mainnet |

Référence technique en anglais : [`docs/CALL_FLOWS.md`](../CALL_FLOWS.md), [`docs/PARI_MUTUEL.md`](../PARI_MUTUEL.md) et la [référence générée](../reference/src/SUMMARY.md).

## Exporter en PDF

```bash
node docs/guide/build-pdf.mjs
```

Les PDF sont écrits dans `docs/guide/pdf/` (non versionné). Il faut Node 22 ou plus et Chrome, Edge ou Chromium installé. `CHROME_PATH` indique le navigateur s'il n'est pas trouvé. Rien à installer : la page charge `marked` et `mermaid` depuis jsdelivr, à des versions fixées.

Pour ajouter un guide, créer un fichier `NN-nom.md` dans ce dossier :
- la première ligne `# Titre` devient la couverture ;
- la première ligne `> …` devient le sous-titre ;
- chaque `## Section` entre au sommaire ;
- une ligne `<!-- newpage -->` juste avant un `## ` fait commencer cette section sur une nouvelle page.
