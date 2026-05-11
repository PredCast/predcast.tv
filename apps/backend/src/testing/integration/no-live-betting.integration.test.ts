import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { setupIntegrationEnv, teardownIntegrationEnv, type IntegrationContext } from './_setup';
import { runHealthCheck } from './_health-check';

/**
 * No-live-betting integration suite. Mirrors the checks in
 * `apps/backend/SMOKE_no_live_betting.md` — when the harness is fully wired,
 * each `it.todo` below becomes a real assertion against Anvil + Supabase.
 *
 * Today the suite only:
 *   1. verifies the harness boots (anvil + migrations + clock)
 *   2. reserves the test names so a regression on missing coverage is visible
 */

const skipSuite = !runHealthCheck().ok;

describe.skipIf(skipSuite)('integration · no-live-betting', () => {
    let ctx: IntegrationContext;

    beforeAll(async () => {
        ctx = await setupIntegrationEnv();
    });

    afterAll(async () => {
        if (ctx) await teardownIntegrationEnv(ctx);
    });

    it('harness boots Anvil + reaches Supabase + builds a MockClock', () => {
        expect(ctx.anvilRpcUrl).toMatch(/^http:\/\//);
        expect(ctx.supabaseDbUrl).toMatch(/^postgres(?:ql)?:\/\//);
        expect(ctx.clock.now()).toBeInstanceOf(Date);
    });

    it.todo('closes markets when match transitions NS → 1H');
    it.todo('closes markets at kickoff - bufferSec (T-90s)');
    it.todo('rejects bet on a closed market with InvalidMarketState');
    it.todo('keeps Closed across HT → 2H transitions');
});
