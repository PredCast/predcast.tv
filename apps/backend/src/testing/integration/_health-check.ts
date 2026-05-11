import { spawnSync } from 'child_process';

export interface HealthCheckResult {
    ok: boolean;
    missing: ReadonlyArray<string>;
}

interface Tool {
    name: string;
    cmd: string;
    args: ReadonlyArray<string>;
    installHint: string;
}

const REQUIRED: ReadonlyArray<Tool> = [
    {
        name: 'forge',
        cmd: 'forge',
        args: ['--version'],
        installHint: 'Install Foundry: https://book.getfoundry.sh/getting-started/installation',
    },
    {
        name: 'anvil',
        cmd: 'anvil',
        args: ['--version'],
        installHint: 'Comes with Foundry: https://book.getfoundry.sh/getting-started/installation',
    },
    {
        name: 'supabase',
        cmd: 'supabase',
        args: ['--version'],
        installHint: 'Install Supabase CLI: https://supabase.com/docs/guides/cli',
    },
    {
        name: 'psql',
        cmd: 'psql',
        args: ['--version'],
        installHint: 'Install Postgres client tools (psql is bundled with libpq).',
    },
];

export function runHealthCheck(): HealthCheckResult {
    const missing: string[] = [];
    for (const tool of REQUIRED) {
        const r = spawnSync(tool.cmd, [...tool.args], { stdio: 'pipe' });
        if (r.status !== 0) {
            missing.push(`${tool.name} — ${tool.installHint}`);
        }
    }
    return { ok: missing.length === 0, missing };
}

/** Emits a clear message + exits 1 when prerequisites are missing. */
export function ensureHealthyOrExit(): void {
    const r = runHealthCheck();
    if (r.ok) return;
    console.error('Integration prerequisites missing:');
    for (const m of r.missing) console.error(`  • ${m}`);
    console.error('See apps/backend/SMOKE_integration.md for the full setup walk-through.');
    process.exit(1);
}
