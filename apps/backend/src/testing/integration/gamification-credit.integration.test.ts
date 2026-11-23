import 'reflect-metadata';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import { MockClock } from '../clock/MockClock';
import { GAMI_LAUNCH_AT, GAMI_NOW } from '../fixtures/gamification.fixtures';
import { buildLocalGamificationStack } from './_gamificationStack';
import {
    createTestAccount,
    pointSupabaseClientAt,
    psql,
    randomWallet,
    removeTestAccounts,
    resolveLocalGamificationStack,
    totalsOf,
} from './_localStack';

/**
 * L4 credit path (§11.2) through the app: RecordChatXpUseCase → CreditXpUseCase → Supabase
 * adapters → `gamification_credit`. The SQL-only cases live in gamification-sql.integration.test.ts.
 */
const local = resolveLocalGamificationStack();
if (local) pointSupabaseClientAt(local);

describe.skipIf(!local)('integration · gamification credit (use cases → PostgREST → SQL)', { retry: 0 }, () => {
    const db = local?.dbUrl ?? '';
    const clock = new MockClock(new Date(GAMI_NOW.getTime() + 3_600_000));
    const accounts: string[] = [];
    let stack: Awaited<ReturnType<typeof buildLocalGamificationStack>>;

    beforeAll(async () => {
        stack = await buildLocalGamificationStack(clock, GAMI_LAUNCH_AT);
    });

    afterAll(() => {
        if (local) removeTestAccounts(db, accounts);
    });

    it('20 chat messages credited in parallel end exactly on the 5 XP daily cap', async () => {
        const account = createTestAccount(db, [randomWallet()], GAMI_LAUNCH_AT);
        accounts.push(account);

        const outcomes = await Promise.all(
            Array.from({ length: 20 }, (_, i) =>
                stack.chatXp.execute({
                    accountId: account,
                    messageId: `it-credit-${account}-${i}`,
                    matchId: 999_999,
                    messageType: 'REGULAR',
                    text: `great save number ${i}`,
                }),
            ),
        );
        // Concurrent requests may all pass the 20 s anti-spam read; the SQL cap is what holds.
        expect(outcomes.every((o) => o.status === 'credited' || o.status === 'rejected')).toBe(true);

        const [chatXp] = psql(db, `SELECT coalesce(sum(xp), 0) FROM gamification_ledger WHERE account_id = '${account}' AND source = 'chat_message';`);
        expect(Number(chatXp)).toBe(5);
        const [step] = psql(db, `SELECT count(*) FROM gamification_ledger WHERE account_id = '${account}' AND source = 'onboarding_step' AND ref_key LIKE '%:chat';`);
        expect(Number(step)).toBe(1);
        const [stored, ledger] = totalsOf(db, account).split('|');
        expect(stored).toBe(ledger);
    });

    it('the service role cannot UPDATE or DELETE ledger rows through PostgREST', async () => {
        const account = createTestAccount(db, [randomWallet()], GAMI_LAUNCH_AT);
        accounts.push(account);
        await stack.chatXp.execute({
            accountId: account, messageId: `it-credit-ro-${account}`, matchId: 999_999, messageType: 'REGULAR', text: 'what a goal',
        });
        const before = psql(db, `SELECT id || ':' || xp FROM gamification_ledger WHERE account_id = '${account}' ORDER BY id;`);
        expect(before.length).toBeGreaterThan(0);

        const { supabaseClient } = await import('../../infrastructure/database/supabase/client');
        const update = await supabaseClient.from('gamification_ledger').update({ xp: 999 }).eq('account_id', account);
        const remove = await supabaseClient.from('gamification_ledger').delete().eq('account_id', account);
        expect(update.error).not.toBeNull();
        expect(remove.error).not.toBeNull();
        expect(psql(db, `SELECT id || ':' || xp FROM gamification_ledger WHERE account_id = '${account}' ORDER BY id;`)).toEqual(before);
    });
});
