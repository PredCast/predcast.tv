import { injectable, inject } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';
import { IFootballApiService, RawMatch } from '@chiliztv/domain/shared/ports/IFootballApiService';
import { MatchFetchWindow } from '@chiliztv/domain/matches/value-objects/MatchFetchWindow';
import { Match } from '@chiliztv/domain/matches/entities/Match';
import { isKnockoutMatch } from '@chiliztv/domain/matches/policies/KnockoutMatchPolicy';
import { NO_PHASE_TIMES, nextPhaseTimes } from '@chiliztv/domain/matches/policies/matchPhaseTimes';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import { FIXED_LIST_KEYS, MatchCacheKeys } from '../MatchCacheKeys';
import { fetchTeamForms } from '../sync/fetchTeamForms';
import { mergeSyncedMatch } from '../sync/mergeSyncedMatch';
import { logger } from '../../../infrastructure/logging/logger';

export interface SyncMatchesResult {
    matchesFetched: number;
    matchesStored: number;
    matchesCreated: number;
    /** Teams whose form was refreshed: only the teams of deployed matches. */
    formsRefreshed: number;
}

/**
 * SyncMatchesUseCase
 * Orchestrates match synchronization:
 *  1. Fetch raw matches from IFootballApiService (domain port)
 *  2. Refresh the W/D/L form of the teams of deployed matches only (paid quota)
 *  3. Persist matches via IMatchRepository
 *
 * Never deploys a betting contract: matches are deployed by hand from the admin.
 */
@injectable()
export class SyncMatchesUseCase {
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

    async execute(): Promise<SyncMatchesResult> {
        const rawMatches = await this.footballApiService.fetchMatches(MatchFetchWindow.FETCH_DAYS_AHEAD);

        if (rawMatches.length === 0) {
            return { matchesFetched: 0, matchesStored: 0, matchesCreated: 0, formsRefreshed: 0 };
        }

        const existingById = new Map<number, Match>();
        for (const raw of rawMatches) {
            try {
                const existing = await this.matchRepository.findByApiFootballId(raw.apiFootballId);
                if (existing) existingById.set(raw.apiFootballId, existing);
            } catch {
                // A failed lookup only skips this match below.
            }
        }

        const deployedRaws = rawMatches.filter((raw) => existingById.get(raw.apiFootballId)?.getBettingContractAddress());
        const formByTeam = await fetchTeamForms(
            this.footballApiService,
            deployedRaws.flatMap((raw) => [raw.homeTeamId, raw.awayTeamId]),
        );

        let matchesStored  = 0;
        let matchesCreated = 0;
        const changedMatchIds: number[] = [];
        const changedLeagueIds = new Set<number>();

        for (const raw of rawMatches) {
            try {
                const existing = existingById.get(raw.apiFootballId);

                if (existing) {
                    // Teams of undeployed matches keep their stored form (no API call for them).
                    const homeForm = formByTeam.has(raw.homeTeamId) ? formByTeam.get(raw.homeTeamId) ?? null : existing.getHomeForm();
                    const awayForm = formByTeam.has(raw.awayTeamId) ? formByTeam.get(raw.awayTeamId) ?? null : existing.getAwayForm();
                    const mutated = await this.updateExistingMatch(existing, raw, homeForm, awayForm);
                    matchesStored++;
                    if (mutated) {
                        changedMatchIds.push(raw.apiFootballId);
                        changedLeagueIds.add(raw.leagueId);
                    }
                } else {
                    await this.createNewMatch(raw);
                    matchesStored++;
                    matchesCreated++;
                    changedMatchIds.push(raw.apiFootballId);
                    changedLeagueIds.add(raw.leagueId);
                }
            } catch {
                // Individual match failures do not abort the full sync
            }
        }

        await this.invalidateCache(changedMatchIds, changedLeagueIds);

        return { matchesFetched: rawMatches.length, matchesStored, matchesCreated, formsRefreshed: formByTeam.size };
    }

    /**
     * Drops every read-side cache key impacted by this sync run. Fixed list
     * keys are always purged when at least one match changed (the lists
     * themselves don't carry per-match granularity). Per-match and per-league
     * keys are purged selectively to avoid wiping unrelated buckets.
     *
     * Note: the freshness of in-game scores is bounded by the cadence of the
     * caller job (SyncMatchesJob, every 10 min by default) and the
     * API-Football indexing delay. This hook ensures the cache never *adds*
     * staleness on top of that floor; it does not reduce it. A sub-minute
     * score push would require a separate source (webhook or real-time feed).
     */
    private async invalidateCache(changedMatchIds: number[], changedLeagueIds: Set<number>): Promise<void> {
        if (changedMatchIds.length === 0) return;

        const deletions: Promise<unknown>[] = [];
        for (const key of FIXED_LIST_KEYS) deletions.push(this.cache.delete(key));
        for (const leagueId of changedLeagueIds) deletions.push(this.cache.delete(MatchCacheKeys.league(leagueId)));
        for (const matchId of changedMatchIds) deletions.push(this.cache.delete(MatchCacheKeys.single(matchId)));

        await Promise.allSettled(deletions);
    }

    private async updateExistingMatch(
        existing: Match,
        raw: RawMatch,
        homeForm: string | null,
        awayForm: string | null,
    ): Promise<boolean> {
        const { updated, mutated, knockoutDrift } = mergeSyncedMatch(
            existing, raw, { home: homeForm, away: awayForm }, this.clock.now(),
        );
        if (knockoutDrift) {
            logger.warn('Match knockout flag drift detected — API-Football changed league.round after match creation', {
                apiFootballId: raw.apiFootballId,
                leagueId: raw.leagueId,
                newRound: raw.leagueRound,
                newType: raw.leagueType,
                oldKnockout: knockoutDrift.stored,
                freshKnockout: knockoutDrift.fresh,
            });
        }
        await this.matchRepository.update(updated);
        return mutated;
    }

    /** Persists a newly synced match. It stays undeployed and hidden until the admin deploys it. */
    private async createNewMatch(raw: RawMatch): Promise<void> {
        // Compute the knockout flag ONCE here, at create. The result is
        // frozen on the row (migration 035 — `is_knockout`) and never updated
        // on subsequent re-syncs to avoid entity↔contract drift (the proxy
        // is seeded with or without the FULL_TIME_WINNER market at this
        // moment and cannot be retro-fitted later).
        const isKnockout = isKnockoutMatch({
            league: {
                id: raw.leagueId,
                type: raw.leagueType ?? undefined,
                round: raw.leagueRound ?? undefined,
            },
        });

        const newMatch = Match.create({
            id:            raw.apiFootballId,
            apiFootballId: raw.apiFootballId,
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
            status:        raw.status,
            matchDate:     raw.matchDate,
            venue:         raw.venue,
            homeScore:     raw.homeScore ?? undefined,
            awayScore:     raw.awayScore ?? undefined,
            homeForm:      null,
            awayForm:      null,
            elapsed:       raw.elapsed ?? null,
            htHomeScore:   raw.htHomeScore ?? null,
            htAwayScore:   raw.htAwayScore ?? null,
            aetHomeScore:  raw.aetHomeScore ?? null,
            aetAwayScore:  raw.aetAwayScore ?? null,
            penHomeScore:  raw.penHomeScore ?? null,
            penAwayScore:  raw.penAwayScore ?? null,
            isKnockout,
            ...nextPhaseTimes(NO_PHASE_TIMES, raw.status, raw, this.clock.now()),
        });

        await this.matchRepository.save(newMatch);
    }
}
