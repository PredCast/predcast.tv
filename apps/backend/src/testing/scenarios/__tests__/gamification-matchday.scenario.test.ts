import { describe, expect, it } from 'vitest';

import {
    accountFixture,
    betRowFixture,
    FIXTURE_CONTRACT,
    linkedWalletFixture,
    marketResolvedFixture,
    netPoolOf,
} from '../../fixtures/gamification.fixtures';
import { buildSourcesHarness } from '../../gamification/sourcesHarness';

/**
 * Matchday scenario (§11.2): two accounts, a hedge, a 4 USDC bet and a resolution, then the
 * ledger. In-memory: the CLI scenarios seed matches only, not accounts or indexed bets.
 */
describe('gamification matchday scenario', () => {
    it('credits volume, hedge and win exactly once and keeps xp_total = SUM(ledger)', async () => {
        const h = buildSourcesHarness();
        const alice = accountFixture();
        const bob = accountFixture();
        const a1 = '0x' + '1a'.repeat(20);
        const a2 = '0x' + '2a'.repeat(20);
        const b1 = '0x' + '1b'.repeat(20);
        h.addAccount(alice, [linkedWalletFixture(alice, { walletAddress: a1 }), linkedWalletFixture(alice, { walletAddress: a2 })]);
        h.addAccount(bob, [linkedWalletFixture(bob, { walletAddress: b1 })]);
        h.source.contractMatches.push({ contract: FIXTURE_CONTRACT, matchId: 999_200, leagueId: 61, bettingChainId: 88882 });
        h.source.marketKinds.set(`${FIXTURE_CONTRACT}:0`, { marketType: 'WINNER', line: 0 });

        const bets = [
            betRowFixture({ stakeUsdc: 40, outcome: 0, wallet: a1 }),
            betRowFixture({ stakeUsdc: 10, outcome: 2, wallet: a2 }),
            betRowFixture({ stakeUsdc: 4, outcome: 0, wallet: b1 }),
            betRowFixture({ stakeUsdc: 25, outcome: 2, wallet: b1 }),
        ];
        h.source.bets.push(...bets);
        h.source.settlements.push(marketResolvedFixture({ result: 0, resolvedNetPoolRaw: netPoolOf(bets) }));

        await h.chain.execute();
        await h.chain.execute();

        const ledger = h.store.rows.map((r) => `${r.accountId === alice.id ? 'alice' : 'bob'}:${r.source}:${r.xp}:${r.reason ?? '-'}`);
        expect(ledger).toEqual([
            'alice:bet_volume:40:-',
            'alice:bet_volume:0:hedge',
            'bob:bet_volume:25:-',
            'alice:bet_won:5:-',
            // First tier of Winning Bets, unlocked by the touched-account evaluation.
            'alice:achievement:10:-',
        ]);
        expect(h.store.achievements.map((a) => `${a.achievementId}:${a.tier}`)).toEqual(['winning_bets:1']);
        for (const account of [alice.id, bob.id]) expect(h.store.profile(account).xpTotal).toBe(h.store.sumXp(account));
    });
});
