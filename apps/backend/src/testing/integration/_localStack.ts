import { spawn, spawnSync } from 'child_process';
import { randomBytes, randomUUID } from 'crypto';

/** Local Supabase as `supabase status` reports it; `dbUrl` is the database PostgREST serves. */
export interface LocalSupabase {
    readonly dbUrl: string;
    readonly apiUrl: string;
    readonly serviceRoleKey: string;
    readonly anonKey: string;
}

const LOCAL_HOST = /^(postgres(?:ql)?|https?):\/\/(?:[^@/]+@)?(127\.0\.0\.1|localhost)(:\d+)?(\/|$)/;

/** Null when the stack is down, not local, or the gamification migrations (043–047) are missing. */
export function resolveLocalGamificationStack(): LocalSupabase | null {
    const r = spawnSync('supabase', ['status', '-o', 'env'], { stdio: 'pipe' });
    if (r.status !== 0) return null;
    const env = new Map<string, string>();
    for (const line of r.stdout.toString().split('\n')) {
        const m = /^([A-Z_]+)="?([^"\n]*)"?$/.exec(line.trim());
        if (m) env.set(m[1], m[2]);
    }
    const dbUrl = env.get('DB_URL');
    const apiUrl = env.get('API_URL');
    const serviceRoleKey = env.get('SERVICE_ROLE_KEY');
    const anonKey = env.get('ANON_KEY');
    if (!dbUrl || !apiUrl || !serviceRoleKey || !anonKey) return null;
    // Never point the Supabase client at anything but the local stack.
    if (!LOCAL_HOST.test(dbUrl) || !LOCAL_HOST.test(apiUrl)) return null;
    const probe = spawnSync(
        'psql',
        [dbUrl, '-At', '-c', "SELECT to_regclass('public.gamification_ledger') IS NOT NULL AND to_regclass('public.gamification_stream_sessions') IS NOT NULL"],
        { stdio: 'pipe' },
    );
    if (probe.stdout?.toString().trim() !== 't') return null;
    return { dbUrl, apiUrl, serviceRoleKey, anonKey };
}

/** Must run before any module importing the Supabase client is loaded (it reads the env once). */
export function pointSupabaseClientAt(local: LocalSupabase): void {
    process.env.SUPABASE_URL = local.apiUrl;
    process.env.SUPABASE_SERVICE_ROLE_KEY = local.serviceRoleKey;
    process.env.SUPABASE_ANON_KEY = local.anonKey;
}

export function psql(dbUrl: string, sql: string): string[] {
    const r = spawnSync('psql', [dbUrl, '-v', 'ON_ERROR_STOP=1', '-At', '-q'], { input: sql, stdio: 'pipe' });
    if (r.status !== 0) throw new Error(r.stderr.toString());
    return r.stdout.toString().split('\n').filter((line) => line.length > 0);
}

export function psqlAsync(dbUrl: string, sql: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        const child = spawn('psql', [dbUrl, '-v', 'ON_ERROR_STOP=1', '-At', '-q']);
        let out = '';
        let err = '';
        child.stdout.on('data', (d: Buffer) => (out += d.toString()));
        child.stderr.on('data', (d: Buffer) => (err += d.toString()));
        child.on('close', (code) => (code === 0 ? resolve(out.split('\n').filter((l) => l.length > 0)) : reject(new Error(err))));
        child.stdin.end(sql);
    });
}

/** Fresh lower-case wallet, so a run never meets the rows of an earlier one. */
export const randomWallet = (): string => `0x${randomBytes(20).toString('hex')}`;

/** Committed account with its wallets linked at `linkedAt`; removed by `removeTestAccounts`. */
export function createTestAccount(dbUrl: string, wallets: ReadonlyArray<string>, linkedAt: Date): string {
    const [id] = psql(dbUrl, `INSERT INTO accounts (dynamic_user_id, primary_wallet) VALUES ('it-gami-${randomUUID()}', '${wallets[0]}') RETURNING id;`);
    const values = wallets.map((w) => `('${w.toLowerCase()}', '${id}', '${linkedAt.toISOString()}')`).join(',');
    psql(dbUrl, `INSERT INTO account_wallets (wallet_address, account_id, linked_at) VALUES ${values};`);
    return id;
}

/** The ledger refuses DELETE even to its owner: the trigger is bypassed with a superuser-only role. */
export function removeTestAccounts(dbUrl: string, accountIds: ReadonlyArray<string>): void {
    if (accountIds.length === 0) return;
    const ids = accountIds.map((id) => `'${id}'`).join(',');
    psql(dbUrl, `
        SET session_replication_role = replica;
        DELETE FROM gamification_notifications WHERE account_id IN (${ids});
        DELETE FROM gamification_achievements WHERE account_id IN (${ids});
        DELETE FROM gamification_ledger WHERE account_id IN (${ids});
        DELETE FROM gamification_daily_counters WHERE account_id IN (${ids});
        DELETE FROM gamification_progress WHERE account_id IN (${ids});
        DELETE FROM gamification_profiles WHERE account_id IN (${ids});
        DELETE FROM account_wallets WHERE account_id IN (${ids});
        DELETE FROM accounts WHERE id IN (${ids});
    `);
}

/** `[rev:]source[(achievement:tier)]:xp:reason` of the account's ledger rows, in insertion order. */
export function ledgerOf(dbUrl: string, accountId: string): string[] {
    return psql(dbUrl, `
        SELECT CASE WHEN reverses_id IS NULL THEN '' ELSE 'rev:' END || source
               || CASE WHEN source = 'achievement' THEN '(' || split_part(ref_key, ':', 3) || ':' || split_part(ref_key, ':', 4) || ')' ELSE '' END
               || ':' || xp || ':' || coalesce(reason, '-')
          FROM gamification_ledger WHERE account_id = '${accountId}' ORDER BY id;
    `);
}

/** `xp_total|SUM(ledger)` of the account: the two must always match. */
export function totalsOf(dbUrl: string, accountId: string): string {
    const [line] = psql(dbUrl, `
        SELECT coalesce((SELECT xp_total FROM gamification_profiles WHERE account_id = '${accountId}'), 0)
            || '|' || coalesce((SELECT sum(xp) FROM gamification_ledger WHERE account_id = '${accountId}'), 0);
    `);
    return line;
}
