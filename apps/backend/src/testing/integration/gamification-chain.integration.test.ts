import 'reflect-metadata';
import { keccak256, toBytes, type Hex } from 'viem';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import { MockClock } from '../clock/MockClock';
import { FIXTURE_CHAIN_ID, GAMI_LAUNCH_AT, GAMI_NOW, usdcRaw } from '../fixtures/gamification.fixtures';
import { matchFixture, nextTestMatchId, skipTakenTestMatchIds } from '../fixtures/match.fixtures';
import { InMemoryCursors } from '../gamification/InMemorySourceAdapters';
import { anvilAvailable, PariMatchLogEmitter, startAnvil, stopAnvil, type AnvilChain } from './_anvilEmitter';
import { buildLocalGamificationStack, buildLocalPariMatchIndexer } from './_gamificationStack';
import {
    createTestAccount,
    ledgerOf,
    pointSupabaseClientAt,
    psql,
    randomWallet,
    removeTestAccounts,
    resolveLocalGamificationStack,
    totalsOf,
} from './_localStack';

/**
 * L4 chain path (§11.2): PariMatch events on a local Anvil chain → the app's PariMatchEventIndexer
 * (real getLogs decoding, `bets` / `market_events` through PostgREST) → GamificationChainProcessor
 * on the Supabase adapters → `gamification_ledger`. The contract is a log emitter speaking the
 * FootballPariMatch ABI (no deploy harness yet). Rows are scoped to this run and removed after it.
 */
const local = resolveLocalGamificationStack();
if (local) pointSupabaseClientAt(local);
const ready = local !== null && anvilAvailable();

const HOME = BigInt(0);
const AWAY = BigInt(2);
const YES = BigInt(0);
const WINNER = BigInt(0);
const BTTS = BigInt(1);
const marketType = (name: string): Hex => keccak256(toBytes(name));

// Steps share the chain and the ledger: a retried step would replay its transactions.
describe.skipIf(!ready)('integration · gamification chain (Anvil → indexer → chain processor → ledger)', { retry: 0 }, () => {
    const db = local?.dbUrl ?? '';
    const clock = new MockClock(new Date(GAMI_NOW.getTime() + 3_600_000));
    const contract = randomWallet() as Hex;
    const wallet = { a1: randomWallet(), a2: randomWallet(), b: randomWallet() };
    const accounts: string[] = [];
    let anvil: AnvilChain | null = null;
    let emitter: PariMatchLogEmitter;
    let matchId = 0;
    let baselineBetId = 0;
    let indexer: Awaited<ReturnType<typeof buildLocalPariMatchIndexer>>;
    let processor: ReturnType<Awaited<ReturnType<typeof buildLocalGamificationStack>>['chainProcessor']>;
    const cursors = new InMemoryCursors();
    const pools = new Map<string, bigint>();

    /** PositionTaken with the running pools the contract would report. */
    async function bet(marketId: bigint, user: string, outcome: bigint, usdc: number): Promise<void> {
        const stake = usdcRaw(usdc);
        const outcomeKey = `${marketId}:${outcome}`;
        const totalKey = `${marketId}`;
        pools.set(outcomeKey, (pools.get(outcomeKey) ?? BigInt(0)) + stake);
        pools.set(totalKey, (pools.get(totalKey) ?? BigInt(0)) + stake);
        await emitter.emit('PositionTaken', [marketId, user, outcome, stake, pools.get(outcomeKey), pools.get(totalKey)]);
    }

    const contractRows = () =>
        psql(db, `SELECT (SELECT count(*) FROM bets WHERE contract_address = '${contract}')
                      || '|' || (SELECT count(*) FROM market_events WHERE contract_address = '${contract}');`)[0];
    const accountRows = () => accounts.map((a) => ledgerOf(db, a));

    beforeAll(async () => {
        anvil = await startAnvil(GAMI_NOW);
        emitter = new PariMatchLogEmitter(anvil, contract);
        await emitter.install();
        accounts.push(createTestAccount(db, [wallet.a1, wallet.a2], GAMI_LAUNCH_AT));
        accounts.push(createTestAccount(db, [wallet.b], GAMI_LAUNCH_AT));

        const { SupabaseMatchRepository } = await import('../../infrastructure/persistence/repositories/SupabaseMatchRepository');
        await skipTakenTestMatchIds(async (id) => psql(db, `SELECT 1 FROM matches WHERE api_football_id = ${id};`).length > 0);
        matchId = nextTestMatchId();
        // Unpublished and days away: no app surface and no on-chain job of a running dev worker acts on it.
        await new SupabaseMatchRepository(clock).save(matchFixture.deployedUnpublished({
            apiFootballId: matchId,
            kickoffAt: new Date(clock.now().getTime() + 3 * 86_400_000),
            bettingContractAddress: contract,
            bettingChainId: FIXTURE_CHAIN_ID,
        }));

        indexer = await buildLocalPariMatchIndexer(anvil.rpcUrl, clock);
        processor = (await buildLocalGamificationStack(clock, GAMI_LAUNCH_AT)).chainProcessor(contract, cursors);
        baselineBetId = Number(psql(db, 'SELECT coalesce(max(id), 0) FROM bets;')[0]);
        await cursors.set('bets', { lastId: baselineBetId });
    });

    afterAll(async () => {
        await stopAnvil(anvil);
        if (!local) return;
        removeTestAccounts(db, accounts);
        psql(db, `
            DELETE FROM bets WHERE contract_address = '${contract}';
            DELETE FROM market_events WHERE contract_address = '${contract}';
            DELETE FROM matches WHERE api_football_id = ${matchId};
        `);
    });

    it('indexes the bets and credits volume once per bet, hedge at 0, under 5 USDC nothing', async () => {
        await emitter.emit('MarketCreated', [WINNER, marketType('WINNER'), 0, 2, 0]);
        await emitter.emit('MarketCreated', [BTTS, marketType('BOTH_SCORE'), 0, 1, 0]);
        await bet(WINNER, wallet.a1, HOME, 40);
        await bet(WINNER, wallet.a2, AWAY, 10);
        await bet(WINNER, wallet.b, HOME, 4);
        await bet(WINNER, wallet.b, AWAY, 25);
        await bet(BTTS, wallet.a1, YES, 20);
        await emitter.mine(6);

        await indexer.tick();
        expect(contractRows()).toBe('5|2');

        expect(await processor.execute()).toMatchObject({ status: 'done', bets: 5 });
        const [alice, bob] = accountRows();
        // 60 USDC counted: first Bet Volume tier, from the touched-account evaluation.
        expect(alice).toEqual(['bet_volume:40:-', 'bet_volume:0:hedge', 'bet_volume:20:-', 'achievement(bet_volume:1):10:-']);
        expect(bob).toEqual(['bet_volume:25:-']);
    });

    it('credits the win once and reverses the cancelled market with new rows only', async () => {
        const total = pools.get(`${WINNER}`) ?? BigInt(0);
        const fee = (total * BigInt(200)) / BigInt(10_000);
        await emitter.emit('MarketResolved', [WINNER, HOME, total, fee, total - fee]);
        await emitter.emit('MarketCancelled', [BTTS, 'match abandoned']);
        await emitter.mine(6);

        await indexer.tick();
        expect(contractRows()).toBe('5|4');
        expect(psql(db, `SELECT DISTINCT status FROM bets WHERE contract_address = '${contract}' AND market_id = ${BTTS};`)).toEqual(['REFUNDED']);

        await processor.execute();
        const [alice, bob] = accountRows();
        expect(alice).toEqual([
            'bet_volume:40:-',
            'bet_volume:0:hedge',
            'bet_volume:20:-',
            'achievement(bet_volume:1):10:-',
            'bet_won:5:-',
            'rev:bet_volume:-20:market_cancelled',
            // An unlocked tier stays after the reversal (§3.1 rule 8).
            'achievement(winning_bets:1):10:-',
        ]);
        expect(bob).toEqual(['bet_volume:25:-']);
        const [volume] = psql(db, `SELECT value FROM gamification_progress WHERE account_id = '${accounts[0]}' AND metric = 'bet_volume_usdc';`);
        expect(Number(volume)).toBe(40);
        for (const account of accounts) {
            const [stored, ledger] = totalsOf(db, account).split('|');
            expect(stored).toBe(ledger);
        }
    });

    it('rewinding the indexer and the processor over the same blocks adds nothing (CA18)', async () => {
        const rows = accountRows();
        const totals = accounts.map((a) => totalsOf(db, a));

        indexer.checkpoints.lastBlock = BigInt(0);
        await indexer.tick();
        expect(contractRows()).toBe('5|4');

        cursors.positions.clear();
        await cursors.set('bets', { lastId: baselineBetId });
        expect(await processor.execute()).toMatchObject({ status: 'done', bets: 5, settlements: 2 });
        expect(accountRows()).toEqual(rows);
        expect(accounts.map((a) => totalsOf(db, a))).toEqual(totals);
    });
});
