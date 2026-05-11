#!/usr/bin/env ts-node
/**
 * Applies every `NNN_*.sql` file under
 * `src/infrastructure/database/migrations/` in numeric order against the
 * Postgres URL passed via `DATABASE_URL` (or `SUPABASE_DB_URL` as a fallback).
 *
 * Shells out to `psql` so no new dep is required. Use against a **local**
 * Supabase instance — the migration files are not idempotent on every edge
 * (e.g. `CREATE POLICY`), but each one ships its own `IF NOT EXISTS` /
 * `DROP POLICY IF EXISTS` guards.
 *
 * Usage:
 *   DATABASE_URL=postgresql://... pnpm db:migrate
 */

import { spawnSync } from 'child_process';
import { readdirSync, statSync } from 'fs';
import { resolve, join } from 'path';

const MIGRATIONS_DIR = resolve(__dirname, '../src/infrastructure/database/migrations');

function listMigrationFiles(): string[] {
    const entries = readdirSync(MIGRATIONS_DIR);
    return entries
        .filter((f) => /^\d+_.+\.sql$/.test(f))
        .filter((f) => statSync(join(MIGRATIONS_DIR, f)).isFile())
        .sort();
}

function applyOne(file: string, dbUrl: string): void {
    const path = join(MIGRATIONS_DIR, file);
    const result = spawnSync('psql', [dbUrl, '-v', 'ON_ERROR_STOP=1', '-f', path], {
        stdio: 'inherit',
    });
    if (result.status !== 0) {
        throw new Error(`Migration ${file} failed (psql exit ${result.status})`);
    }
}

function checkPsqlAvailable(): void {
    const result = spawnSync('psql', ['--version'], { stdio: 'pipe' });
    if (result.status !== 0) {
        throw new Error('psql is not on PATH. Install via your OS package manager or use the Postgres bundled with Supabase CLI.');
    }
}

function main(): void {
    const dbUrl = process.env.DATABASE_URL ?? process.env.SUPABASE_DB_URL;
    if (!dbUrl) {
        console.error('DATABASE_URL (or SUPABASE_DB_URL) is required. For local Supabase, run `supabase status` and copy `DB URL`.');
        process.exit(1);
    }
    checkPsqlAvailable();
    const files = listMigrationFiles();
    if (files.length === 0) {
        console.warn(`No migration files found in ${MIGRATIONS_DIR}`);
        return;
    }
    console.log(`Applying ${files.length} migration(s)…`);
    for (const file of files) {
        console.log(`  → ${file}`);
        applyOne(file, dbUrl);
    }
    console.log('Migrations applied.');
}

try {
    main();
    process.exit(0);
} catch (err) {
    console.error(err instanceof Error ? err.message : String(err));
    process.exit(1);
}
