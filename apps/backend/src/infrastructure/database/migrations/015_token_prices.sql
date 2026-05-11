-- Migration 015 — token_prices cache
-- One row per symbol, upserted by `RefreshTokenPricesJob`. Centralises the
-- CoinGecko/Pyth fetch server-side to eliminate browser-side 429s.

CREATE TABLE IF NOT EXISTS token_prices (
    symbol           text PRIMARY KEY,
    price_usd        numeric NOT NULL CHECK (price_usd >= 0),
    change_24h_pct   numeric NULL,
    source           text    NOT NULL CHECK (source IN ('coingecko', 'pyth')),
    fetched_at       timestamptz NOT NULL DEFAULT NOW(),
    updated_at       timestamptz NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_token_prices_fetched_at
    ON token_prices (fetched_at DESC);

-- Public read (served by /api/prices without auth), write reserved to the
-- service role (the job bypasses RLS).
ALTER TABLE token_prices ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "token_prices read" ON token_prices;
CREATE POLICY "token_prices read" ON token_prices FOR SELECT USING (true);
