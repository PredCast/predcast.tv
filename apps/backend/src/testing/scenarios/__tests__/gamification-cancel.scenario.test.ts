import { describe, expect, it } from 'vitest';

import {
    accountFixture,
    betRowFixture,
    FIXTURE_CONTRACT,
    GAMI_NOW,
    linkedWalletFixture,
    marketCancelledFixture,
} from '../../fixtures/gamification.fixtures';
import { buildSourcesHarness } from '../../gamification/sourcesHarness';

/**
 * Cancel scenario (§3.8, §11.2): volume credited, market cancelled, then a late bet. In-memory
 * twin of the `gamification-cancel` CLI scenario, which seeds the match only.
 */
describe('gamification cancel scenario', () => {
    it('reverses the volume with new rows, ignores late bets and replays without duplicates', async () => {
        const h = buildSourcesHarness();
        const alice = accountFixture();
        const bob = accountFixture();
        const a1 = '0x' + '3a'.repeat(20);
        const b1 = '0x' + '3b'.repeat(20);
        h.addAccount(alice, [linkedWalletFixture(alice, { walletAddress: a1 })]);
        h.addAccount(bob, [linkedWalletFixture(bob, { walletAddress: b1 })]);
        h.source.contractMatches.push({ contract: FIXTURE_CONTRACT, matchId: 999_201, leagueId: 39, bettingChainId: 88882 });
        h.source.marketKinds.set(`${FIXTURE_CONTRACT}:0`, { marketType: 'WINNER', line: 0 });

        h.source.bets.push(
            betRowFixture({ stakeUsdc: 30, outcome: 0, wallet: a1 }),
            betRowFixture({ stakeUsdc: 12, outcome: 2, wallet: b1 }),
        );
        await h.chain.execute();

        h.source.settlements.push(marketCancelledFixture({ marketId: 0 }));
        await h.chain.execute();

        h.source.bets.push(betRowFixture({ stakeUsdc: 50, outcome: 1, wallet: b1, at: new Date(GAMI_NOW.getTime() + 60_000) }));
        await h.chain.execute();
        await h.chain.execute();

        const ledger = h.store.rows.map(
            (r) => `${r.accountId === alice.id ? 'alice' : 'bob'}:${r.source}:${r.xp}:${r.reason ?? '-'}`,
        );
        expect(ledger).toEqual([
            'alice:bet_volume:30:-',
            'bob:bet_volume:12:-',
            'alice:bet_volume:-30:market_cancelled',
            'bob:bet_volume:-12:market_cancelled',
        ]);
        for (const account of [alice.id, bob.id]) {
            expect(h.store.profile(account).xpTotal).toBe(0);
            expect(h.store.profile(account).xpTotal).toBe(h.store.sumXp(account));
        }
    });
});
