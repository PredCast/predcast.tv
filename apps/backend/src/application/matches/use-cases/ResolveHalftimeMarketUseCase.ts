import { injectable, inject } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';
import { Match } from '@chiliztv/domain/matches/entities/Match';
import { IBlockchainService, MarketState } from '@chiliztv/domain/shared/ports/IBlockchainService';
import { HALFTIME_MARKET_ID } from '@chiliztv/domain/markets/DefaultMarkets';
import { LIVE_STATUSES } from '@chiliztv/domain/matches/policies/BettablePolicy';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { logger } from '../../../infrastructure/logging/logger';

const LIVE_OR_LATER = new Set<string>(LIVE_STATUSES);
const DEFAULT_VOID_AFTER_2H_SECONDS = 900;
const VOID_REASON = 'halftime score unavailable';

/** Status codes where the 2H period has clearly started (HT void timer
 *  arms from `2H` onward — `HT` itself just waits for the score). */
const POST_HT_STATUSES: ReadonlySet<string> = new Set(['2H', 'ET', 'BT', 'P', 'LIVE']);

export interface ResolveHalftimeMarketResult {
    /** Markets transitioned to Resolved on this run. */
    readonly resolved: number;
    /** Markets cancelled on this run (15-min void path). */
    readonly voided: number;
    /** Matches scanned. */
    readonly scanned: number;
}

/**
 * Resolves the HALFTIME market (marketId=1) as soon as the halftime score is
 * known — without waiting for FT. Closes ONLY marketId=1 then calls
 * `resolveByScore`; the other 7 markets stay Open for live betting.
 *
 * Triggered two ways:
 *  - **Event-driven** (hot path): {@link SyncLiveMatchesUseCase} detects a
 *    null → known HT score transition and calls `execute(contract)` for
 *    that specific contract — latency HT whistle → claim possible drops to
 *    <30s.
 *  - **Cron backup** (cold path): {@link ResolveHalftimeMarketsJob} runs
 *    every 60s and calls `executeAll()` to rattrape any contract where the
 *    event-driven path was missed (worker restart, lock contention).
 *
 * Also owns the **void path** at the configurable threshold (default 15 min
 * into 2H) — if no HT score ever arrived, cancel the market so stakers can
 * claimRefund instead of waiting until FT.
 */
@injectable()
export class ResolveHalftimeMarketUseCase {
    /** Per-contract guard against the hot+cold paths firing concurrently. */
    private readonly inFlight = new Set<string>();

    constructor(
        @inject(TOKENS.IMatchRepository)
        private readonly matchRepository: IMatchRepository,
        @inject(TOKENS.IBlockchainService)
        private readonly blockchainService: IBlockchainService,
        @inject(TOKENS.IClock)
        private readonly clock: IClock,
    ) {}

    /**
     * Single-match path — called by {@link SyncLiveMatchesUseCase} right
     * after it learnt the HT score for `apiFootballId`. Avoids the full
     * `findAll` scan of the cron path.
     */
    async execute(apiFootballId: number): Promise<ResolveHalftimeMarketResult> {
        const match = await this.matchRepository.findByApiFootballId(apiFootballId);
        if (!match) return { resolved: 0, voided: 0, scanned: 0 };
        const json = match.toJSON();
        const contract = json.bettingContractAddress;
        if (!contract) return { resolved: 0, voided: 0, scanned: 0 };
        const addr = contract.toLowerCase();
        if (this.inFlight.has(addr)) return { resolved: 0, voided: 0, scanned: 0 };
        this.inFlight.add(addr);
        try {
            const handled = await this.handleMatch(match);
            return { resolved: handled.resolved, voided: handled.voided, scanned: 1 };
        } finally {
            this.inFlight.delete(addr);
        }
    }

    /**
     * Bulk path — called by {@link ResolveHalftimeMarketsJob} on its 60s
     * tick. Walks every match in a status that warrants HALFTIME resolution
     * (live + post-FT for the void path safety net).
     */
    async executeAll(): Promise<ResolveHalftimeMarketResult> {
        const all = await this.matchRepository.findAll();
        let resolved = 0;
        let voided = 0;
        let scanned = 0;
        for (const match of all) {
            const json = match.toJSON();
            if (!json.bettingContractAddress) continue;
            if (!LIVE_OR_LATER.has(json.status)) continue;
            scanned++;
            const addr = json.bettingContractAddress.toLowerCase();
            if (this.inFlight.has(addr)) continue;
            this.inFlight.add(addr);
            try {
                const result = await this.handleMatch(match);
                resolved += result.resolved;
                voided += result.voided;
            } catch (err) {
                logger.warn('ResolveHalftimeMarketUseCase: per-match failure', {
                    matchId: json.id,
                    contract: json.bettingContractAddress,
                    error: err instanceof Error ? err.message : String(err),
                });
            } finally {
                this.inFlight.delete(addr);
            }
        }
        return { resolved, voided, scanned };
    }

    private async handleMatch(match: Match): Promise<{ resolved: number; voided: number }> {
        const json = match.toJSON();
        const contract = json.bettingContractAddress!;

        // Pre-flight state check — avoids a wasted tx if another instance
        // (event-driven trigger from SyncLive) already closed+resolved this.
        const state = await this.blockchainService.getMarketState(contract, BigInt(HALFTIME_MARKET_ID));
        if (state !== MarketState.Open) return { resolved: 0, voided: 0 };

        const htHome = json.htHomeScore;
        const htAway = json.htAwayScore;

        if (htHome !== null && htHome !== undefined && htAway !== null && htAway !== undefined) {
            return this.closeAndResolve(contract, htHome, htAway);
        }

        // No HT score yet — consider the void path if we've been in the 2H
        // window long enough that the upstream has clearly failed us.
        if (this.shouldVoid(json.status, json.matchDate)) {
            const cancelled = await this.blockchainService.cancelMarket(
                contract,
                BigInt(HALFTIME_MARKET_ID),
                VOID_REASON,
            );
            if (cancelled.cancelled > 0) {
                logger.warn('HALFTIME market voided — no halftime score after threshold', {
                    matchId: json.id,
                    contract,
                    status: json.status,
                    thresholdSec: this.voidAfterSeconds(),
                });
            }
            return { resolved: 0, voided: cancelled.cancelled };
        }

        return { resolved: 0, voided: 0 };
    }

    private async closeAndResolve(contract: string, htHome: number, htAway: number): Promise<{ resolved: number; voided: number }> {
        // Close only marketId=1 so the 7 other markets stay Open.
        const closed = await this.blockchainService.closeMarketsByIds(contract, [BigInt(HALFTIME_MARKET_ID)]);
        if (closed.closed === 0) {
            logger.debug('HALFTIME close skipped — already non-Open', { contract });
            return { resolved: 0, voided: 0 };
        }

        // CRITICAL: use `resolveAlreadyClosedMarkets`, NOT `resolveMarketsByScore`.
        // The latter calls `closeOpenMarketsForMatch` internally (closes ALL
        // Open markets) before calling resolveByScore — which would resolve
        // the 7 other markets prematurely. The former only invokes
        // `resolveByScore` on-chain; since marketId=1 is the only Closed
        // market at this point, only HALFTIME transitions.
        //
        // homeGoals/awayGoals are required by the input shape but the
        // HALFTIME branch in the Solidity resolver reads htHomeGoals /
        // htAwayGoals — pass HT values everywhere defensively.
        const resolved = await this.blockchainService.resolveAlreadyClosedMarkets(contract, {
            homeGoals: htHome,
            awayGoals: htAway,
            htHomeGoals: htHome,
            htAwayGoals: htAway,
        });
        logger.info('HALFTIME market resolved early', {
            contract,
            resolved,
            htHomeScore: htHome,
            htAwayScore: htAway,
        });
        return { resolved, voided: 0 };
    }

    private shouldVoid(status: string, matchDate: Date | string): boolean {
        if (!POST_HT_STATUSES.has(status)) return false;
        const kickoff = matchDate instanceof Date ? matchDate : new Date(matchDate);
        // Assume 2H starts ~T+47min (kickoff + first half + ~2min HT break).
        // The threshold counts from there, not from kickoff, so a quick HT
        // (rare) doesn't shorten the void window.
        const secondHalfStart = kickoff.getTime() + 47 * 60_000;
        const ageMs = this.clock.now().getTime() - secondHalfStart;
        return ageMs >= this.voidAfterSeconds() * 1000;
    }

    private voidAfterSeconds(): number {
        const raw = process.env.HALFTIME_VOID_AFTER_2H_SECONDS;
        if (!raw) return DEFAULT_VOID_AFTER_2H_SECONDS;
        const n = Number(raw);
        if (!Number.isFinite(n) || n < 0) return DEFAULT_VOID_AFTER_2H_SECONDS;
        return n;
    }
}
