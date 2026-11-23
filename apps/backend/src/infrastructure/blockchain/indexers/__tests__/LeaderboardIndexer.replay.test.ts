import 'reflect-metadata';
import { describe, expect, it, vi } from 'vitest';

import type { IIndexerCheckpointRepository } from '@chiliztv/domain/blockchain-indexing/repositories/IIndexerCheckpointRepository';
import type { ILeaderboardClaimRepository } from '@chiliztv/domain/leaderboard/repositories/ILeaderboardClaimRepository';
import type { ILeaderboardEpochRepository } from '@chiliztv/domain/leaderboard/repositories/ILeaderboardEpochRepository';
import type {
    ILeaderboardScoreRepository,
    LeaderboardWinEvent,
} from '@chiliztv/domain/leaderboard/repositories/ILeaderboardScoreRepository';
import type { ILockService } from '@chiliztv/domain/shared/ports/ILockService';
import type { INetworkConfig } from '@chiliztv/domain/shared/ports/INetworkConfig';

import { LeaderboardIndexer } from '../LeaderboardIndexer';

const ALICE = '0x00000000000000000000000000000000000a11ce';
const BOB = '0x0000000000000000000000000000000000000b0b';

interface WinLog {
    readonly block: bigint;
    readonly logIndex: number;
    readonly user: string;
    readonly epochId: bigint;
    readonly delta: bigint;
    readonly newEpochScore: bigint;
}

const win = (block: number, logIndex: number, user: string, epochId: number, delta: number, newEpochScore: number): WinLog => ({
    block: BigInt(block), logIndex, user, epochId: BigInt(epochId), delta: BigInt(delta), newEpochScore: BigInt(newEpochScore),
});

/** Same rule as `record_leaderboard_win` (migration 046): latest chain position wins, lifetime = sum. */
class InMemoryScores {
    readonly cycle = new Map<string, { score: bigint; block: bigint; logIndex: number }>();

    lifetime(user: string): bigint {
        let total = BigInt(0);
        for (const [key, row] of this.cycle) if (key.endsWith(`:${user}`)) total += row.score;
        return total;
    }

    readonly repo = {
        recordWin: vi.fn(async (e: LeaderboardWinEvent) => {
            const key = `${e.cycleId}:${e.userAddress}`;
            const row = this.cycle.get(key);
            const newer = !row || e.blockNumber > row.block || (e.blockNumber === row.block && e.logIndex > row.logIndex);
            if (newer) this.cycle.set(key, { score: e.newEpochScore, block: e.blockNumber, logIndex: e.logIndex });
            return newer;
        }),
    } as unknown as ILeaderboardScoreRepository & { recordWin: ReturnType<typeof vi.fn> };
}

function buildIndexer(logs: ReadonlyArray<WinLog>) {
    const scores = new InMemoryScores();
    const network = { rpcUrl: 'http://127.0.0.1:1', leaderboardRewardsAddress: `0x${'4'.repeat(40)}` } as INetworkConfig;
    const indexer = new LeaderboardIndexer(
        {} as IIndexerCheckpointRepository,
        network,
        {} as ILockService,
        scores.repo,
        {} as ILeaderboardEpochRepository,
        {} as ILeaderboardClaimRepository,
    );
    const client = {
        getLogs: vi.fn(async ({ fromBlock, toBlock }: { fromBlock: bigint; toBlock: bigint }) =>
            logs
                .filter((l) => l.block >= fromBlock && l.block <= toBlock)
                .map((l) => ({
                    eventName: 'WinRecorded',
                    blockNumber: l.block,
                    logIndex: l.logIndex,
                    transactionHash: `0x${l.block.toString(16).padStart(64, '0')}`,
                    args: { match_: `0x${'9'.repeat(40)}`, user: l.user, epochId: l.epochId, delta: l.delta, newEpochScore: l.newEpochScore },
                })),
        ),
        getBlock: vi.fn(async ({ blockNumber }: { blockNumber: bigint }) => ({ timestamp: blockNumber })),
    };
    // The viem client is built in the constructor; the test swaps in a fake one.
    (indexer as unknown as { client: unknown }).client = client;
    const processBatch = (from: number, to: number) =>
        (indexer as unknown as { processBatch: (f: bigint, t: bigint) => Promise<void> }).processBatch(BigInt(from), BigInt(to));
    return { scores, processBatch };
}

const CHAIN: ReadonlyArray<WinLog> = [
    win(100, 0, ALICE, 3, 40, 40),
    win(100, 1, BOB, 3, 25, 25),
    win(150, 4, ALICE, 3, 10, 50),
    win(220, 2, ALICE, 4, 7, 7),
    win(230, 0, BOB, 3, 5, 30),
];

describe('LeaderboardIndexer — WinRecorded replay (D6)', () => {
    it('forwards the chain position and the post-event epoch score, never the delta', async () => {
        const { scores, processBatch } = buildIndexer(CHAIN);
        await processBatch(0, 300);
        expect(scores.repo.recordWin).toHaveBeenNthCalledWith(1, {
            cycleId: BigInt(3), userAddress: ALICE, newEpochScore: BigInt(40), blockNumber: BigInt(100), logIndex: 0,
        });
        expect(scores.cycle.get(`3:${ALICE}`)?.score).toBe(BigInt(50));
        expect(scores.cycle.get(`3:${BOB}`)?.score).toBe(BigInt(30));
        expect(scores.lifetime(ALICE)).toBe(BigInt(57));
    });

    it('keeps the same scores after a rewind and a re-scan of overlapping ranges', async () => {
        const { scores, processBatch } = buildIndexer(CHAIN);
        await processBatch(0, 300);
        const before = new Map(scores.cycle);

        await processBatch(0, 300); // checkpoint rewound to 0
        await processBatch(140, 300); // tail overlap re-scan
        await processBatch(200, 240);

        expect(scores.cycle).toEqual(before);
        expect(scores.lifetime(ALICE)).toBe(BigInt(57));
        expect(scores.lifetime(BOB)).toBe(BigInt(30));
    });

    it('converges to the latest on-chain score when an older range is replayed after a newer one', async () => {
        const { scores, processBatch } = buildIndexer(CHAIN);
        await processBatch(200, 300);
        await processBatch(0, 199);
        expect(scores.cycle.get(`3:${ALICE}`)?.score).toBe(BigInt(50));
        expect(scores.cycle.get(`3:${BOB}`)?.score).toBe(BigInt(30));
    });
});
