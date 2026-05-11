import { Request, Response, NextFunction } from 'express';
import { injectable, inject } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { GetUserBetsUseCase } from '../../../application/bets/use-cases/GetUserBetsUseCase';
import { BetWithMatchInfo } from '@chiliztv/domain/blockchain-indexing/entities/BetWithMatchInfo';
import { BetFilter } from '@chiliztv/domain/blockchain-indexing/repositories/IBetRepository';
import { parsePagination } from '../helpers/parsePagination';

const ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/;
const ALLOWED_FILTERS = new Set<BetFilter>(['all', 'pending', 'won', 'lost', 'refunded', 'claimable', 'refundable']);

function serializeBet(entry: BetWithMatchInfo): Record<string, unknown> {
    const { bet, match, marketContext } = entry;
    return {
        txHash: bet.coordinates.transactionHash,
        logIndex: bet.coordinates.logIndex,
        contractAddress: bet.contractAddress,
        marketId: bet.marketId.toString(),
        betIndex: bet.betIndex.toString(),
        userAddress: bet.userAddress,
        selection: bet.selection.toString(),
        netStake: bet.netStake.toString(),
        grossStake: bet.grossStake?.toString() ?? null,
        oddsX10000: bet.oddsX10000,
        oddsIndex: bet.oddsIndex,
        status: bet.status,
        payout: bet.payout?.toString() ?? null,
        refundAmount: bet.refundAmount?.toString() ?? null,
        blockNumber: bet.coordinates.blockNumber.toString(),
        blockTimestamp: bet.coordinates.blockTimestamp.toISOString(),
        placedAt: bet.placedAt.toISOString(),
        resolvedAt: bet.resolvedAt?.toISOString() ?? null,
        claimedAt: bet.claimedAt?.toISOString() ?? null,
        refundedAt: bet.refundedAt?.toISOString() ?? null,
        // Market context (Lot 5) — short-name string ("WINNER", "GOALS_TOTAL"…)
        // and tenths-of-goal `line` (25 = 2.5). Null when MarketCreated event
        // wasn't indexed for this market — front falls back to `Selection #N`.
        marketType: marketContext?.marketType ?? null,
        line: marketContext?.line ?? null,
        match: match
            ? {
                  apiFootballId: match.apiFootballId,
                  homeTeamName: match.homeTeamName,
                  awayTeamName: match.awayTeamName,
                  leagueName: match.leagueName,
                  matchDate: match.matchDate.toISOString(),
              }
            : null,
    };
}

@injectable()
export class BetController {
    constructor(
        @inject(GetUserBetsUseCase)
        private readonly getUserBetsUseCase: GetUserBetsUseCase,
        @inject(TOKENS.IClock)
        private readonly clock: IClock,
    ) {}

    async getUserBets(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const userParam = (req.query.user as string | undefined)?.trim();
            if (!userParam || !ADDRESS_REGEX.test(userParam)) {
                res.status(400).json({ success: false, error: 'Missing or invalid `user` query parameter (expected 0x-prefixed address).' });
                return;
            }

            const filterParam = (req.query.filter as string | undefined)?.toLowerCase();
            let filter: BetFilter | undefined;
            if (filterParam !== undefined && filterParam !== '') {
                if (!ALLOWED_FILTERS.has(filterParam as BetFilter)) {
                    res.status(400).json({ success: false, error: 'Invalid `filter`. Use all | pending | won | lost | refunded | claimable | refundable.' });
                    return;
                }
                filter = filterParam as BetFilter;
            }

            const { limit, offset } = parsePagination(req);

            const { items, total, statusCounts } = await this.getUserBetsUseCase.execute({
                userAddress: userParam.toLowerCase(),
                limit,
                offset,
                filter,
            });

            res.json({
                success: true,
                bets: items.map(serializeBet),
                total,
                statusCounts,
                limit,
                offset,
                timestamp: this.clock.now().getTime(),
            });
        } catch (error) {
            next(error);
        }
    }
}
