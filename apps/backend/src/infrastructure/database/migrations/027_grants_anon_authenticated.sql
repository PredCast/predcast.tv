-- 027_grants_anon_authenticated.sql
-- Mirror of 026 for the public anon / authenticated roles. Without these
-- table-level grants Postgres rejects every query from the frontend
-- (publishable key → anon JWT) with `permission denied for table X` —
-- before RLS policies are even consulted. RLS stays enabled on the
-- sensitive tables, so this grant does not widen exposure beyond what
-- the existing policies already allow.
--
-- Idempotent: re-running issues the same grants and is a no-op.

BEGIN;

GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES    IN SCHEMA public TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES    IN SCHEMA public TO authenticated;
GRANT USAGE, SELECT, UPDATE                 ON ALL SEQUENCES IN SCHEMA public TO anon;
GRANT USAGE, SELECT, UPDATE                 ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT EXECUTE                                ON ALL FUNCTIONS IN SCHEMA public TO anon;
GRANT EXECUTE                                ON ALL FUNCTIONS IN SCHEMA public TO authenticated;

-- Future tables/sequences/functions inherit the same grants without a
-- repeat sweep migration each time a feature lands.
ALTER DEFAULT PRIVILEGES IN SCHEMA public
    GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO anon, authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA public
    GRANT USAGE, SELECT, UPDATE ON SEQUENCES TO anon, authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA public
    GRANT EXECUTE ON FUNCTIONS TO anon, authenticated;

COMMIT;
