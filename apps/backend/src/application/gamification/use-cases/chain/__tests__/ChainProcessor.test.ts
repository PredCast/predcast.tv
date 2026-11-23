import { describe, expect, it } from 'vitest';

import {
    accountFixture,
    betRowFixture,
    FIXTURE_CONTRACT,
    GAMI_LAUNCH_AT,
    GAMI_NOW,
    linkedWalletFixture,
    marketCancelledFixture,
    marketResolvedFixture,
    netPoolOf,
    supportEventFixture,
} from '../../../../../testing/fixtures/gamification.fixtures';
import { buildSourcesHarness } from '../../../../../testing/gamification/sourcesHarness';

const HOME = 0;
const DRAW = 1;
const AWAY = 2;
const DAY_MS = 86_400_000;
const WALLET = {
    a1: '0x' + 'a1'.repeat(20),
    a2: '0x' + 'a2'.repeat(20),
    b: '0x' + 'b0'.repeat(20),
    streamer: '0x' + '5e'.repeat(20),
};

function setup(options: Parameters<typeof buildSourcesHarness>[0] = {}) {
    const h = buildSourcesHarness(options);
    const alice = accountFixture();
    const bob = accountFixture();
    const streamer = accountFixture();
    h.addAccount(alice, [
        linkedWalletFixture(alice, { walletAddress: WALLET.a1 }),
        linkedWalletFixture(alice, { walletAddress: WALLET.a2 }),
    ]);
    h.addAccount(bob, [linkedWalletFixture(bob, { walletAddress: WALLET.b })]);
    h.addAccount(streamer, [linkedWalletFixture(streamer, { walletAddress: WALLET.streamer })]);
    h.source.contractMatches.push({ contract: FIXTURE_CONTRACT, matchId: 999_100, leagueId: 135, bettingChainId: null });
    for (let m = 0; m < 5; m++) h.source.marketKinds.set(`${FIXTURE_CONTRACT}:${m}`, { marketType: 'WINNER', line: 0 });
    return { h, alice: alice.id, bob: bob.id, streamer: streamer.id };
}

describe('GamificationChainProcessor — bet volume', () => {
    it('CA6 — 4.99 USDC creates no row, 5.00 USDC creates bet_volume at 5 XP', async () => {
        const { h, alice } = setup();
        h.source.bets.push(betRowFixture({ stakeUsdc: 4.99, outcome: HOME, wallet: WALLET.a1 }));
        h.source.bets.push(betRowFixture({ stakeUsdc: 5, outcome: HOME, wallet: WALLET.a1, marketId: 1 }));
        await h.chain.execute();
        const rows = h.rowsOf('bet_volume');
        expect(rows.map((r) => [r.xp, r.metadata.marketKind, r.metadata.leagueId, r.metadata.chainId])).toEqual([[5, 'WINNER:0', 135, 88882]]);
        const snapshot = await h.store.progress.getSnapshot(alice);
        expect(snapshot.bet_volume_usdc?.value).toBe(5);
        expect(snapshot.market_kinds?.items).toEqual(['WINNER:0']);
        expect(snapshot.leagues?.items).toEqual(['135']);
    });

    it('CA7 — 30 Home on wallet A then 30 Away on wallet B of the same account: 30 XP, the second at 0 (hedge)', async () => {
        const { h, alice } = setup();
        h.source.bets.push(betRowFixture({ stakeUsdc: 30, outcome: HOME, wallet: WALLET.a1 }));
        h.source.bets.push(betRowFixture({ stakeUsdc: 30, outcome: AWAY, wallet: WALLET.a2 }));
        await h.chain.execute();
        expect(h.rowsOf('bet_volume').map((r) => [r.xp, r.reason])).toEqual([[30, null], [0, 'hedge']]);
        expect(h.store.profile(alice).xpTotal).toBe(h.store.sumXp(alice));
    });

    it('CA8 — 1 200 USDC in a day: 1 000 XP, the rest at 0 (daily_cap); the next day pays again', async () => {
        const { h } = setup();
        for (let m = 0; m < 3; m++) h.source.bets.push(betRowFixture({ stakeUsdc: 400, outcome: HOME, wallet: WALLET.a1, marketId: m }));
        h.source.bets.push(betRowFixture({ stakeUsdc: 50, outcome: HOME, wallet: WALLET.a1, marketId: 3, at: new Date(GAMI_NOW.getTime() + DAY_MS) }));
        await h.chain.execute();
        expect(h.rowsOf('bet_volume').map((r) => [r.xp, r.reason])).toEqual([[400, null], [400, null], [200, 'daily_cap'], [50, null]]);
    });

    it('CA9 — a cancelled market reverses its volume rows; tiers stay; late bets are ignored', async () => {
        const { h, alice } = setup();
        h.source.bets.push(betRowFixture({ stakeUsdc: 120, outcome: HOME, wallet: WALLET.a1 }));
        await h.chain.execute();
        const unlocked = h.store.achievements.length;
        const xpBefore = h.store.profile(alice).xpTotal;

        h.source.settlements.push(marketCancelledFixture());
        h.source.bets.push(betRowFixture({ stakeUsdc: 50, outcome: HOME, wallet: WALLET.a1 }));
        await h.chain.execute();

        const reversal = h.store.rows.find((r) => r.refKey.startsWith('rev:bet_volume'));
        expect(reversal).toMatchObject({ xp: -120, reason: 'market_cancelled' });
        expect(h.store.profile(alice).xpTotal).toBe(xpBefore - 120);
        expect((await h.store.progress.getSnapshot(alice)).bet_volume_usdc?.value).toBe(0);
        expect(h.store.achievements).toHaveLength(unlocked);
        expect(h.rowsOf('bet_volume').filter((r) => r.reversesId === null)).toHaveLength(1);
    });

    it('CA18 — resetting the cursors and replaying adds no row and keeps the totals', async () => {
        const { h, alice, bob } = setup();
        const bets = [
            betRowFixture({ stakeUsdc: 30, outcome: HOME, wallet: WALLET.a1 }),
            betRowFixture({ stakeUsdc: 20, outcome: AWAY, wallet: WALLET.b }),
        ];
        h.source.bets.push(...bets);
        h.source.settlements.push(marketResolvedFixture({ result: HOME, resolvedNetPoolRaw: netPoolOf(bets) }));
        h.source.support.push(supportEventFixture({ supporterWallet: WALLET.b, streamerWallet: WALLET.streamer }));
        await h.chain.execute();
        const rows = h.store.rows.length;
        const totals = [h.store.profile(alice).xpTotal, h.store.profile(bob).xpTotal];

        h.cursors.positions.clear();
        await h.chain.execute();
        expect(h.store.rows).toHaveLength(rows);
        expect([h.store.profile(alice).xpTotal, h.store.profile(bob).xpTotal]).toEqual(totals);
    });

    it('CA19 — bets and resolutions before the launch are not credited', async () => {
        const { h } = setup();
        const before = new Date(GAMI_LAUNCH_AT.getTime() - 60_000);
        const bets = [
            betRowFixture({ stakeUsdc: 30, outcome: HOME, wallet: WALLET.a1, at: before }),
            betRowFixture({ stakeUsdc: 30, outcome: AWAY, wallet: WALLET.b, at: before }),
        ];
        h.source.bets.push(...bets);
        h.source.settlements.push(marketResolvedFixture({ result: HOME, resolvedNetPoolRaw: netPoolOf(bets), at: before }));
        await h.chain.execute();
        expect(h.store.rows).toHaveLength(0);
    });

    it('exits at once when the gamification is disabled', async () => {
        const { h } = setup({ launch: { enabled: false } });
        h.source.bets.push(betRowFixture({ stakeUsdc: 30, outcome: HOME, wallet: WALLET.a1 }));
        expect(await h.chain.execute()).toEqual({ status: 'skipped', reason: 'disabled' });
        expect(h.cursors.positions.size).toBe(0);
    });

    it('a banned account gets a 0 row that a cancellation does not reverse', async () => {
        const { h } = setup();
        h.ban(WALLET.a2);
        h.source.bets.push(betRowFixture({ stakeUsdc: 30, outcome: HOME, wallet: WALLET.a1 }));
        await h.chain.execute();
        h.source.settlements.push(marketCancelledFixture());
        await h.chain.execute();
        expect(h.store.rows.map((r) => [r.refKey.slice(0, 4), r.xp, r.reason])).toEqual([['bet_', 0, 'banned']]);
    });
});

describe('GamificationChainProcessor — winning bets (D10)', () => {
    it('CA10 — one bet_won per account even with two winning wallets', async () => {
        const { h, alice } = setup();
        const bets = [
            betRowFixture({ stakeUsdc: 10, outcome: HOME, wallet: WALLET.a1 }),
            betRowFixture({ stakeUsdc: 10, outcome: HOME, wallet: WALLET.a2 }),
            betRowFixture({ stakeUsdc: 40, outcome: AWAY, wallet: WALLET.b }),
        ];
        h.source.bets.push(...bets);
        h.source.settlements.push(marketResolvedFixture({ result: HOME, resolvedNetPoolRaw: netPoolOf(bets) }));
        await h.chain.execute();
        const won = h.rowsOf('bet_won');
        expect(won.map((r) => [r.accountId, r.xp])).toEqual([[alice, 5]]);
        expect((await h.store.progress.getSnapshot(alice)).bets_won?.value).toBe(1);
    });

    it('CA10 — a hedge proportional to the pool is not a win', async () => {
        const { h } = setup();
        const bets = [HOME, DRAW, AWAY].map((outcome) => betRowFixture({ stakeUsdc: 10, outcome, wallet: WALLET.a1 }));
        h.source.bets.push(...bets);
        h.source.settlements.push(marketResolvedFixture({ result: HOME, resolvedNetPoolRaw: netPoolOf(bets) }));
        await h.chain.execute();
        expect(h.rowsOf('bet_won')).toHaveLength(0);
    });

    it('CA10 — 4 USDC on the winner plus 5 USDC on a loser is not a win', async () => {
        const { h } = setup();
        const bets = [
            betRowFixture({ stakeUsdc: 4, outcome: HOME, wallet: WALLET.a1 }),
            betRowFixture({ stakeUsdc: 5, outcome: AWAY, wallet: WALLET.a1 }),
            betRowFixture({ stakeUsdc: 100, outcome: AWAY, wallet: WALLET.b }),
        ];
        h.source.bets.push(...bets);
        h.source.settlements.push(marketResolvedFixture({ result: HOME, resolvedNetPoolRaw: netPoolOf(bets) }));
        await h.chain.execute();
        expect(h.rowsOf('bet_won')).toHaveLength(0);
    });
});

describe('GamificationChainProcessor — support', () => {
    it('credits 5 XP once per streamer and Paris day, ≥ 1 USDC, never oneself', async () => {
        const { h, bob, streamer } = setup();
        h.source.support.push(
            supportEventFixture({ supporterWallet: WALLET.b, streamerWallet: WALLET.streamer }),
            supportEventFixture({ kind: 'subscription', supporterWallet: WALLET.b, streamerWallet: WALLET.streamer, amountUsdc: 3, createdAt: new Date(GAMI_NOW.getTime() + 60_000) }),
            supportEventFixture({ supporterWallet: WALLET.b, streamerWallet: WALLET.a1, amountUsdc: 0.5, createdAt: new Date(GAMI_NOW.getTime() + 120_000) }),
            supportEventFixture({ supporterWallet: WALLET.streamer, streamerWallet: WALLET.streamer, amountUsdc: 10, createdAt: new Date(GAMI_NOW.getTime() + 180_000) }),
            supportEventFixture({ supporterWallet: WALLET.b, streamerWallet: WALLET.streamer, createdAt: new Date(GAMI_NOW.getTime() + DAY_MS) }),
        );
        await h.chain.execute();
        const rows = h.rowsOf('support');
        expect(rows.map((r) => [r.accountId, r.xp, r.day])).toEqual([[bob, 5, '2027-03-01'], [bob, 5, '2027-03-02']]);
        expect(rows.some((r) => r.accountId === streamer)).toBe(false);
        expect((await h.store.progress.getSnapshot(bob)).support_actions?.value).toBe(2);
    });
});
