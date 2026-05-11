# Smoke — token prices cache (CoinGecko + Pyth)

Procédure manuelle pour valider que `/prices` sert les 26 tokens depuis la DB
et que le front n'appelle plus CoinGecko.

## Préalables

- `015_token_prices.sql` appliqué sur Supabase (staging ou prod). À exécuter
  via le dashboard Supabase SQL editor ou `psql -f` avec le service role.
- `.env` du backend contient :
  ```
  PRICE_FEED_JOB_INTERVAL_MS=300000        # 5 min (default)
  PYTH_CHZ_PRICE_FEED_ID=0x...             # voir https://pyth.network/developers/price-feed-ids → CHZ/USD
  ```
- `cast` (Foundry) ou `curl` pour les tests HTTP.

## Étapes

### 1. Démarrer le backend

```bash
cd apps/backend && pnpm dev
```

Au boot, attendre le log :

```
Starting interval job: RefreshTokenPrices
Executing initial run for: RefreshTokenPrices
RefreshTokenPricesJob completed { refreshed: 26, skipped: 0, errors: 0, ms: ... }
```

Si `refreshed < 26`, lire les logs :
- `CoinGecko rate-limited` → l'IP a déjà été throttle. Attendre 1 min et retenter.
- `Pyth fetch failed` → vérifier `PYTH_CHZ_PRICE_FEED_ID`. CoinGecko prend
  le relais sur CHZ au prochain tick si le feed Pyth est définitivement KO
  (cf. limitation actuelle du fallback inter-feed dans le use case).

### 2. Vérifier la table

```sql
SELECT symbol, price_usd, source, fetched_at
FROM token_prices
ORDER BY symbol;
```

Attendu :
- 26 lignes.
- `CHZ` : `source = pyth` (si `PYTH_CHZ_PRICE_FEED_ID` est configuré et le
  feed répond).
- Les 25 autres : `source = coingecko`.
- `fetched_at` < 5 min.

### 3. Endpoint complet

```bash
curl -s http://localhost:3001/prices | jq '.prices | length'
# → 26

curl -s http://localhost:3001/prices | jq '.prices[0]'
# → { "symbol": "ACM", "priceUsd": ..., "change24hPct": ..., "source": "coingecko", "fetchedAt": "..." }

curl -s -D - http://localhost:3001/prices -o /dev/null | grep -i cache-control
# → Cache-Control: public, max-age=60
```

### 4. Endpoint single

```bash
curl -s http://localhost:3001/prices/CHZ | jq
# → { "symbol": "CHZ", "priceUsd": ..., "source": "pyth", ... }

curl -s -w "%{http_code}\n" http://localhost:3001/prices/UNKNOWN -o /dev/null
# → 404
```

### 5. Front cut net

Ouvrir `http://localhost:3000/dashboard` (wallet connecté avec des fan tokens).

Dans le DevTools → Network, filtrer sur `coingecko` :
- **Aucun appel** à `api.coingecko.com/api/v3/*`.
- Les images token (`coin-images.coingecko.com/coins/...`) sont autorisées
  (pas rate-limitées, hors scope).

Filtrer sur `prices` :
- Au moins un `GET /prices` toutes les 60s (React Query `refetchInterval`).
- Status 200, payload de 26 prices.

### 6. Portfolio s'affiche

Sur `/dashboard`, la section Portfolio affiche :
- Une valeur USD pour chaque fan token détenu (basée sur le prix retourné).
- Une valeur CHZ basée sur `source: pyth`.
- Plus de message d'erreur `429` dans la console.

### 7. Test de résilience — CoinGecko down

Couper temporairement l'accès CoinGecko (firewall local ou changement
d'URL dans `CoinGeckoPriceFeed`). Attendre 1 tick (5 min) :

- Le job logge `CoinGecko fetch failed` + retourne `errors > 0`.
- La table garde les anciennes valeurs (pas de DELETE).
- `/prices` continue de servir le dernier snapshot.
- Le portfolio dashboard reste fonctionnel (prix figés au dernier tick OK).

### 8. Test de résilience — DB down (théorique)

Si Supabase est inaccessible :
- Le job logge `Failed to upsert token prices`, `errors > 0`.
- `/prices` retourne 500 (le controller relaie l'erreur via `next(error)`).
- Le front affiche les prix de la cache React Query (jusqu'à `staleTime` = 60s),
  puis tombe sur une UI "loading" sans crash.

## Critères de succès

- 26 lignes dans `token_prices` après le 1er tick.
- `GET /prices` répond en < 200ms (PK lookup) avec `Cache-Control: max-age=60`.
- Aucun appel `api.coingecko.com/api/v3/*` dans le DevTools du dashboard.
- 0 erreur 429 dans la console pendant 1h d'usage normal.

## Critères d'échec — investiguer

- `refreshed = 0` au boot : adapter logs (probablement réseau ou env manquant).
- `source = coingecko` sur CHZ malgré `PYTH_CHZ_PRICE_FEED_ID` set : le feed
  Pyth a renvoyé un payload invalide. Vérifier le feed ID sur
  https://pyth.network/developers/price-feed-ids.
- Le front continue à appeler `api.coingecko.com/api/v3/*` : vérifier que
  `apps/frontend/services/token-price.service.ts` a bien été rebuild (Next.js
  cache `.next/` à purger si nécessaire).
