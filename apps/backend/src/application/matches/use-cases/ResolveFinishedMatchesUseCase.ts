import { injectable, inject } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';
import { IBlockchainService } from '@chiliztv/domain/shared/ports/IBlockchainService';

export interface ResolveFinishedMatchesResult {
    matchesProcessed: number;
    marketsResolved: number;
}

/**
 * ResolveFinishedMatchesUseCase
 * Resolves on-chain betting markets for finished matches.
 * Uses IBlockchainService port — no infrastructure imports.
 */
@injectable()
export class ResolveFinishedMatchesUseCase {
    /** Per-contract guard — SyncMatchesJob and ResolveMarketsJob both fire on startup and race on `resolveMarketsBatch`. */
    private readonly inFlight = new Set<string>();

    constructor(
        @inject(TOKENS.IMatchRepository)
        private readonly matchRepository: IMatchRepository,
        @inject(TOKENS.IBlockchainService)
        private readonly blockchainService: IBlockchainService
    ) {}

    async execute(): Promise<ResolveFinishedMatchesResult> {
        const allMatches = await this.matchRepository.findAll();

        const toResolve = allMatches.filter(match => {
            const json = match.toJSON();
            return (
                json.status === 'FT' &&
                json.score?.home != null &&
                json.score?.away != null &&
                json.bettingContractAddress &&
                String(json.bettingContractAddress).trim() !== ''
            );
        });

        if (toResolve.length === 0) {
            return { matchesProcessed: 0, marketsResolved: 0 };
        }

        let marketsResolved = 0;
        let matchesProcessed = 0;

        for (const match of toResolve) {
            const json = match.toJSON();
            const addr = json.bettingContractAddress!.toLowerCase();
            if (this.inFlight.has(addr)) continue;
            this.inFlight.add(addr);
            try {
                // Pass HT scores when known so the HALFTIME market resolves
                // here in the FT fallback path (if SyncLiveMatchesJob /
                // ResolveHalftimeMarketsJob both missed it). When HT scores
                // are still null, the adapter defaults them to 0 — the
                // contract void-protects the HALFTIME market on a 0-0 ghost
                // resolve (winningPool == 0 → Cancelled, stakers refund).
                const count = await this.blockchainService.resolveMarketsByScore(
                    json.bettingContractAddress!,
                    {
                        homeGoals: json.score!.home!,
                        awayGoals: json.score!.away!,
                        htHomeGoals: json.htHomeScore ?? undefined,
                        htAwayGoals: json.htAwayScore ?? undefined,
                    },
                );
                marketsResolved += count;
                matchesProcessed += 1;
            } catch {
                // Non-fatal: continue resolving other matches
            } finally {
                this.inFlight.delete(addr);
            }
        }

        return { matchesProcessed, marketsResolved };
    }
}
