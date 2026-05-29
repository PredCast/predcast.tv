import { injectable, inject } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';
import { IFootballApiService, RawMatch } from '@chiliztv/domain/shared/ports/IFootballApiService';
import { Match } from '@chiliztv/domain/matches/entities/Match';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import { FIXED_LIST_KEYS, MatchCacheKeys } from '../MatchCacheKeys';
import { logger } from '../../../infrastructure/logging/logger';

export interface SyncLiveMatchesResult {
    matchesFetched: number;
    matchesUpdated: number;
    /**
     * `apiFootballId` of matches where the halftime score transitioned from
     * null → known during this tick. The caller (job) uses this list to fire
     * `ResolveHalftimeMarketUseCase.execute` immediately instead of waiting
     * for the 60s backup cron — drops "HT whistle → claim possible" latency
     * from ~3 min to <30s.
     */
    halftimeReadyMatchIds: number[];
}

/**
 * High-frequency live-score sync (target cadence: 30s).
 *
 * Calls `/fixtures?live=all` via the adapter — ONE upstream request regardless
 * of how many fixtures are concurrently live. Updates `score`, `status`, and
 * `elapsed_minutes` only; never touches team form (it doesn't change mid-game)
 * and never deploys contracts (those are handled by SyncMatchesUseCase on the
 * 10-min cadence).
 *
 * Quota guards: short-circuits on empty fetch (no live games anywhere) and
 * skips DB writes when nothing actually changed.
 */
@injectable()
export class SyncLiveMatchesUseCase {
    constructor(
        @inject(TOKENS.IMatchRepository)
        private readonly matchRepository: IMatchRepository,
        @inject(TOKENS.IFootballApiService)
        private readonly footballApiService: IFootballApiService,
        @inject(TOKENS.IClock)
        private readonly clock: IClock,
        @inject(TOKENS.ICacheService)
        private readonly cache: ICacheService,
    ) {}

    async execute(): Promise<SyncLiveMatchesResult> {
        const live = await this.footballApiService.fetchLiveMatches();
        if (live.length === 0) {
            return { matchesFetched: 0, matchesUpdated: 0, halftimeReadyMatchIds: [] };
        }

        let matchesUpdated = 0;
        const changedMatchIds: number[] = [];
        const changedLeagueIds = new Set<number>();
        const halftimeReadyMatchIds: number[] = [];

        for (const raw of live) {
            try {
                const existing = await this.matchRepository.findByApiFootballId(raw.apiFootballId);
                // A live fixture should already exist (SyncMatchesUseCase
                // created it on the 10-min cron). If not, skip — the next
                // upcoming sync will pick it up. Avoids creating live rows
                // without a contract address.
                if (!existing) {
                    logger.warn('SyncLiveMatchesUseCase: live fixture missing in DB, skipping', {
                        apiFootballId: raw.apiFootballId,
                    });
                    continue;
                }

                const { mutated, halftimeNewlyKnown } = await this.updateLiveSnapshot(existing, raw);
                if (mutated) {
                    matchesUpdated++;
                    changedMatchIds.push(raw.apiFootballId);
                    changedLeagueIds.add(raw.leagueId);
                }
                if (halftimeNewlyKnown && existing.getBettingContractAddress()) {
                    halftimeReadyMatchIds.push(raw.apiFootballId);
                }
            } catch (err) {
                logger.warn('SyncLiveMatchesUseCase: per-match failure', {
                    apiFootballId: raw.apiFootballId,
                    error: err instanceof Error ? err.message : String(err),
                });
            }
        }

        await this.invalidateCache(changedMatchIds, changedLeagueIds);
        return { matchesFetched: live.length, matchesUpdated, halftimeReadyMatchIds };
    }

    /**
     * Diff-then-write. Score, status, elapsed, and halftime score are the only
     * fields the live payload supplies; everything else (teams, league,
     * kickoff) is invariant during a match. Monotone setters preserve the
     * previous values when the upstream briefly clears the field (HT pause).
     *
     * Returns `halftimeNewlyKnown: true` when the HT score transitioned from
     * null → known on this tick — caller uses this to trigger the HALFTIME
     * early resolution immediately.
     */
    private async updateLiveSnapshot(
        existing: Match,
        raw: RawMatch,
    ): Promise<{ mutated: boolean; halftimeNewlyKnown: boolean }> {
        const json = existing.toJSON();
        const currentScore = json.score ? { home: json.score.home, away: json.score.away } : null;
        const newScore = (raw.homeScore !== null && raw.awayScore !== null)
            ? { home: raw.homeScore, away: raw.awayScore }
            : null;

        const scoreChanged = currentScore?.home !== newScore?.home || currentScore?.away !== newScore?.away;
        const statusChanged = json.status !== raw.status;
        const elapsedChanged = raw.elapsed !== null && raw.elapsed !== json.elapsed;

        const htWasUnknown = json.htHomeScore === null || json.htAwayScore === null;
        const htNowKnown = raw.htHomeScore !== null && raw.htAwayScore !== null;
        const halftimeNewlyKnown = htWasUnknown && htNowKnown;
        const htChanged = halftimeNewlyKnown
            || (htNowKnown && (raw.htHomeScore !== json.htHomeScore || raw.htAwayScore !== json.htAwayScore));

        if (!scoreChanged && !statusChanged && !elapsedChanged && !htChanged) {
            return { mutated: false, halftimeNewlyKnown: false };
        }

        existing.updateStatus(raw.status);
        if (newScore) existing.updateScore(newScore.home, newScore.away);
        existing.setElapsed(raw.elapsed);
        existing.setHalftimeScore(raw.htHomeScore, raw.htAwayScore);

        const updated = Match.reconstitute({
            ...existing.toJSON(),
            id: json.id,
            apiFootballId: raw.apiFootballId,
            // toJSON flattens teams/league into nested objects; reconstitute
            // expects flat props, so we re-source from the raw payload (these
            // fields are invariant anyway, no risk of overwriting good data).
            homeTeamId:    raw.homeTeamId,
            homeTeamName:  raw.homeTeamName,
            homeTeamLogo:  raw.homeTeamLogo,
            awayTeamId:    raw.awayTeamId,
            awayTeamName:  raw.awayTeamName,
            awayTeamLogo:  raw.awayTeamLogo,
            leagueId:      raw.leagueId,
            leagueName:    raw.leagueName,
            leagueLogo:    raw.leagueLogo,
            leagueCountry: raw.leagueCountry,
            season:        raw.season,
            matchDate:     raw.matchDate,
            createdAt:     new Date(json.createdAt),
            updatedAt:     this.clock.now(),
        });

        await this.matchRepository.update(updated);
        return { mutated: true, halftimeNewlyKnown };
    }

    private async invalidateCache(changedMatchIds: number[], changedLeagueIds: Set<number>): Promise<void> {
        if (changedMatchIds.length === 0) return;
        const deletions: Promise<unknown>[] = [];
        for (const key of FIXED_LIST_KEYS) deletions.push(this.cache.delete(key));
        for (const leagueId of changedLeagueIds) deletions.push(this.cache.delete(MatchCacheKeys.league(leagueId)));
        for (const matchId of changedMatchIds) deletions.push(this.cache.delete(MatchCacheKeys.single(matchId)));
        await Promise.allSettled(deletions);
    }
}
