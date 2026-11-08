import type { RawMatch } from '@chiliztv/domain/shared/ports/IFootballApiService';
import { Match } from '@chiliztv/domain/matches/entities/Match';
import { isKnockoutMatch } from '@chiliztv/domain/matches/policies/KnockoutMatchPolicy';
import { nextPhaseTimes, phaseTimesEqual } from '@chiliztv/domain/matches/policies/matchPhaseTimes';

export interface MergedMatch {
    readonly updated: Match;
    /** Score, status, form or phase times changed: read caches must be dropped. */
    readonly mutated: boolean;
    /** The fresh payload classifies the knockout flag differently from the frozen one. */
    readonly knockoutDrift: { readonly fresh: boolean; readonly stored: boolean } | null;
}

/** Merges a fresh API-Football snapshot into a stored match, preserving every monotone field. */
export function mergeSyncedMatch(
    existing: Match,
    raw: RawMatch,
    forms: { readonly home: string | null; readonly away: string | null },
    now: Date,
): MergedMatch {
    const existingJson = existing.toJSON();
    const existingScore = existingJson.score
        ? { home: existingJson.score.home, away: existingJson.score.away }
        : null;
    const rawScore = (raw.homeScore !== null && raw.awayScore !== null && raw.homeScore !== undefined && raw.awayScore !== undefined)
        ? { home: raw.homeScore, away: raw.awayScore }
        : null;
    const scoreChanged =
        existingScore?.home !== rawScore?.home ||
        existingScore?.away !== rawScore?.away;
    const statusChanged = existingJson.status !== raw.status;
    const formChanged = existingJson.homeForm !== forms.home || existingJson.awayForm !== forms.away;
    const currentPhases = existing.getPhaseTimes();
    const phases = nextPhaseTimes(currentPhases, raw.status, raw, now);
    const mutated = scoreChanged || statusChanged || formChanged || !phaseTimesEqual(currentPhases, phases);

    // Preserve last-known elapsed when the upstream returns null (HT, post-FT)
    // so the 10-min cron doesn't erase the value that SyncLiveMatchesUseCase
    // wrote on its 30s tick. Same null-guard for HT score.
    const elapsedToPersist = raw.elapsed ?? existingJson.elapsed ?? null;
    const htHomeToPersist  = raw.htHomeScore ?? existingJson.htHomeScore ?? null;
    const htAwayToPersist  = raw.htAwayScore ?? existingJson.htAwayScore ?? null;

    // Drift detection — recompute the knockout flag from the fresh API
    // payload. The stored value is NEVER updated on re-sync: the on-chain proxy
    // is already deployed with or without the FULL_TIME_WINNER market and
    // can't be retro-fitted. Drift typically means API-Football reclassified
    // a fixture (rare — happens on competition format changes mid-season).
    const freshKnockout = isKnockoutMatch({
        league: {
            id: raw.leagueId,
            type: raw.leagueType ?? undefined,
            round: raw.leagueRound ?? undefined,
        },
    });
    const existingIsKnockout = existingJson.isKnockout === true;

    // Preserve AET/PEN scores monotonically across re-sync ticks — the
    // upstream sometimes briefly nulls these between the live and
    // post-FT cleanups (same pattern as ht_*_score and elapsed).
    const aetHomeToPersist = raw.aetHomeScore ?? existingJson.aetHomeScore ?? null;
    const aetAwayToPersist = raw.aetAwayScore ?? existingJson.aetAwayScore ?? null;
    const penHomeToPersist = raw.penHomeScore ?? existingJson.penHomeScore ?? null;
    const penAwayToPersist = raw.penAwayScore ?? existingJson.penAwayScore ?? null;

    const updated = Match.reconstitute({
        // Base keeps the admin-owned fields (chain, opening, publication) on the entity.
        ...existing.toRaw(),
        id:                     existingJson.id,
        apiFootballId:          raw.apiFootballId,
        homeTeamId:             raw.homeTeamId,
        homeTeamName:           raw.homeTeamName,
        homeTeamLogo:           raw.homeTeamLogo,
        awayTeamId:             raw.awayTeamId,
        awayTeamName:           raw.awayTeamName,
        awayTeamLogo:           raw.awayTeamLogo,
        leagueId:               raw.leagueId,
        leagueName:             raw.leagueName,
        leagueLogo:             raw.leagueLogo,
        leagueCountry:          raw.leagueCountry,
        season:                 raw.season,
        status:                 raw.status,
        matchDate:              raw.matchDate,
        venue:                  raw.venue,
        homeScore:              raw.homeScore ?? undefined,
        awayScore:              raw.awayScore ?? undefined,
        homeForm:               forms.home,
        awayForm:               forms.away,
        elapsed:                elapsedToPersist,
        htHomeScore:            htHomeToPersist,
        htAwayScore:            htAwayToPersist,
        aetHomeScore:           aetHomeToPersist,
        aetAwayScore:           aetAwayToPersist,
        penHomeScore:           penHomeToPersist,
        penAwayScore:           penAwayToPersist,
        // Frozen at create — DO NOT recompute from `raw` here.
        isKnockout:             existingIsKnockout,
        ...phases,
        bettingContractAddress: existing.getBettingContractAddress(),
        createdAt:              existingJson.createdAt,
        updatedAt:              now,
    });

    return {
        updated,
        mutated,
        knockoutDrift: existingIsKnockout !== freshKnockout ? { fresh: freshKnockout, stored: existingIsKnockout } : null,
    };
}
