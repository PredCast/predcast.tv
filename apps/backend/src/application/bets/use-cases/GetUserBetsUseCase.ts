import { injectable, inject } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { BetCounts, BetFilter, IBetRepository } from '@chiliztv/domain/blockchain-indexing/repositories/IBetRepository';
import { BetWithMatchInfo } from '@chiliztv/domain/blockchain-indexing/entities/BetWithMatchInfo';
import { IBlockchainService } from '@chiliztv/domain/shared/ports/IBlockchainService';
import { IMarketEventRepository } from '@chiliztv/domain/blockchain-indexing/repositories/IMarketEventRepository';
import { logger } from '../../../infrastructure/logging/logger';

export interface GetUserBetsQuery {
    readonly userAddress: string;
    readonly limit: number;
    readonly offset: number;
    readonly filter?: BetFilter;
}

export interface GetUserBetsResult {
    readonly items: BetWithMatchInfo[];
    /** Total rows matching the filter — independent of limit/offset. */
    readonly total: number;
    /** Counts per filter bucket — feeds the My Bets `TabPill` badges. */
    readonly statusCounts: BetCounts;
}

/** Cap RPC fan-out when many contracts are missing MarketCreated rows. */
const SELF_HEAL_MAX_KEYS_PER_REQUEST = 12;

@injectable()
export class GetUserBetsUseCase {
    constructor(
        @inject(TOKENS.IBetRepository)
        private readonly bets: IBetRepository,
        @inject(TOKENS.IBlockchainService)
        private readonly blockchain: IBlockchainService,
        @inject(TOKENS.IMarketEventRepository)
        private readonly marketEvents: IMarketEventRepository,
    ) {}

    async execute(query: GetUserBetsQuery): Promise<GetUserBetsResult> {
        // Listing + total + per-status counts in parallel. statusCounts ignores
        // limit/offset by design — that's the count behind the `TabPill` badges.
        const [rows, total, statusCounts] = await Promise.all([
            this.bets.findByUserWithMatchInfo(query.userAddress, {
                limit: query.limit,
                offset: query.offset,
                filter: query.filter,
            }),
            this.bets.countByUser(query.userAddress, query.filter),
            this.bets.countByUserStatuses(query.userAddress),
        ]);

        // Bets placed before MarketCreated was indexed (deploy block < indexer
        // checkpoint) come back with `marketContext = null` and render as
        // "Selection #1" / "Draw" / etc. Read on-chain + persist a synthetic
        // MarketCreated row so the next refresh has the right label.
        const missing = new Map<string, { contractAddress: string; marketId: bigint }>();
        for (const r of rows) {
            if (r.marketContext) continue;
            const key = `${r.bet.contractAddress.toLowerCase()}:${r.bet.marketId.toString()}`;
            if (!missing.has(key)) missing.set(key, { contractAddress: r.bet.contractAddress, marketId: r.bet.marketId });
            if (missing.size >= SELF_HEAL_MAX_KEYS_PER_REQUEST) break;
        }
        if (missing.size === 0) return { items: rows, total, statusCounts };

        const healed = new Map<string, { marketType: string; line: number | null }>();
        await Promise.all(Array.from(missing.values()).map(async ({ contractAddress, marketId }) => {
            try {
                const onchain = await this.blockchain.readFootballMarket(contractAddress, marketId);
                if (!onchain.marketType) return;
                const line = onchain.line || null;
                await this.marketEvents.upsertSyntheticMarketCreated({
                    contractAddress, marketId,
                    marketType: onchain.marketType, line, maxSelections: onchain.maxSelections,
                    blockNumber: 0n,
                });
                healed.set(`${contractAddress.toLowerCase()}:${marketId.toString()}`, { marketType: onchain.marketType, line });
            } catch (err) {
                logger.debug('GetUserBetsUseCase: self-heal failed', {
                    contractAddress, marketId: marketId.toString(),
                    error: err instanceof Error ? err.message : String(err),
                });
            }
        }));

        if (healed.size === 0) return { items: rows, total, statusCounts };
        const items = rows.map((r) => {
            if (r.marketContext) return r;
            const key = `${r.bet.contractAddress.toLowerCase()}:${r.bet.marketId.toString()}`;
            const ctx = healed.get(key);
            return ctx ? { ...r, marketContext: ctx } : r;
        });
        return { items, total, statusCounts };
    }
}
