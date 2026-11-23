-- 043 — Accounts and linked wallets (identity proven by the Dynamic JWT).
--
-- An account is a Dynamic user (`sub`). Its wallets are the EVM entries of the token's
-- `verified_credentials`, synced at every /auth/token exchange. A wallet belongs to at most one
-- account at a time: the first link wins, a conflict is logged and resolved by hand. Rows are
-- never deleted, so "which account owned this wallet at time t" stays answerable.

BEGIN;

CREATE TABLE IF NOT EXISTS accounts (
    id               UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    dynamic_user_id  TEXT        NOT NULL UNIQUE CHECK (char_length(dynamic_user_id) > 0),
    primary_wallet   TEXT        CHECK (primary_wallet = lower(primary_wallet)),
    created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
    last_seen_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS account_wallets (
    wallet_address   TEXT        PRIMARY KEY CHECK (wallet_address = lower(wallet_address)),
    account_id       UUID        NOT NULL REFERENCES accounts(id),
    linked_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
    -- Set when the wallet leaves verified_credentials; activity after it no longer counts.
    unlinked_at      TIMESTAMPTZ,
    CONSTRAINT account_wallets_unlink_after_link CHECK (unlinked_at IS NULL OR unlinked_at >= linked_at)
);

CREATE INDEX IF NOT EXISTS idx_account_wallets_account_active
    ON account_wallets (account_id) WHERE unlinked_at IS NULL;

ALTER TABLE accounts        ENABLE ROW LEVEL SECURITY;
ALTER TABLE account_wallets ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON accounts, account_wallets FROM anon, authenticated;
GRANT SELECT, INSERT, UPDATE ON accounts, account_wallets TO service_role;

COMMIT;
