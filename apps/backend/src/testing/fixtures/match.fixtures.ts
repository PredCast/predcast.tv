import { Match } from '@chiliztv/domain/matches/entities/Match';
import { NO_PHASE_TIMES, type MatchPhaseTimes } from '@chiliztv/domain/matches/policies/matchPhaseTimes';

export interface MatchFixtureOverride {
    apiFootballId?: number;
    homeTeam?: { id?: number; name: string; logo?: string };
    awayTeam?: { id?: number; name: string; logo?: string };
    league?: { id?: number; name: string; country?: string; logo?: string };
    kickoffAt?: Date;
    score?: { home: number; away: number };
    /** Aggregate score after extra time — needed for AET / PEN fixtures to drive FULL_TIME_WINNER. */
    aetScore?: { home: number; away: number };
    /** Penalty shootout result — needed for PEN fixtures. */
    penScore?: { home: number; away: number };
    bettingContractAddress?: string;
    homeForm?: string | null;
    awayForm?: string | null;
    venue?: string;
    /** When true, the seeded proxy includes the FULL_TIME_WINNER market (9 markets instead of 8). */
    isKnockout?: boolean;
    bettingChainId?: number | null;
    bettingOpenedAt?: Date | null;
    /** Null hides the match from app users. */
    publishedAt?: Date | null;
}

const FIXTURE_ID_START = 999000;
let nextId = FIXTURE_ID_START;

export function nextTestMatchId(): number {
    return nextId++;
}

/**
 * Moves the counter past IDs already persisted — the counter restarts at 999000
 * in every CLI process, and `matches` inserts would otherwise collide.
 */
export async function skipTakenTestMatchIds(isTaken: (id: number) => Promise<boolean>): Promise<void> {
    while (await isTaken(nextId)) nextId++;
}

/** Resets the in-module counter — call from `beforeEach` to keep tests isolated. */
export function __resetTestMatchIdForTesting(): void {
    nextId = FIXTURE_ID_START;
}

interface BuildArgs {
    status: string;
    kickoffOffsetMs: number;
    score?: { home: number; away: number };
    /** Default knockout flag for this fixture kind — overridable per call via MatchFixtureOverride.isKnockout. */
    isKnockout?: boolean;
    /** Last phase reached, so the phase start times match what the sync would have recorded. */
    reached?: 'first' | 'half' | 'second';
}

const HALFTIME_AFTER_MS = 47 * 60_000;
const SECOND_HALF_AFTER_MS = 62 * 60_000;

function phaseTimesFor(kickoff: Date, reached: BuildArgs['reached']): MatchPhaseTimes {
    if (!reached) return NO_PHASE_TIMES;
    const at = (offsetMs: number) => new Date(kickoff.getTime() + offsetMs);
    return {
        firstHalfStartedAt: kickoff,
        halftimeStartedAt: reached === 'first' ? null : at(HALFTIME_AFTER_MS),
        secondHalfStartedAt: reached === 'second' ? at(SECOND_HALF_AFTER_MS) : null,
    };
}

const DEFAULT_HOME = { id: 5, name: 'Inter', logo: '' };
const DEFAULT_AWAY = { id: 7, name: 'AC Milan', logo: '' };
const DEFAULT_LEAGUE = { id: 135, name: 'Serie A', country: 'Italy', logo: '' };
const DEFAULT_VENUE = 'San Siro';

function buildMatch(args: BuildArgs, override?: MatchFixtureOverride): Match {
    const id = override?.apiFootballId ?? nextTestMatchId();
    const homeTeam = { ...DEFAULT_HOME, ...override?.homeTeam };
    const awayTeam = { ...DEFAULT_AWAY, ...override?.awayTeam };
    const league   = { ...DEFAULT_LEAGUE, ...override?.league };
    const kickoff  = override?.kickoffAt ?? new Date(Date.now() + args.kickoffOffsetMs);
    const score    = override?.score ?? args.score;

    return Match.create({
        id,
        apiFootballId: id,
        homeTeamId: homeTeam.id ?? DEFAULT_HOME.id,
        homeTeamName: homeTeam.name,
        homeTeamLogo: homeTeam.logo,
        awayTeamId: awayTeam.id ?? DEFAULT_AWAY.id,
        awayTeamName: awayTeam.name,
        awayTeamLogo: awayTeam.logo,
        leagueId: league.id ?? DEFAULT_LEAGUE.id,
        leagueName: league.name,
        leagueLogo: league.logo,
        leagueCountry: league.country,
        season: kickoff.getFullYear(),
        status: args.status,
        matchDate: kickoff,
        venue: override?.venue ?? DEFAULT_VENUE,
        homeScore: score?.home,
        awayScore: score?.away,
        aetHomeScore: override?.aetScore?.home ?? null,
        aetAwayScore: override?.aetScore?.away ?? null,
        penHomeScore: override?.penScore?.home ?? null,
        penAwayScore: override?.penScore?.away ?? null,
        isKnockout: override?.isKnockout ?? args.isKnockout ?? false,
        homeForm: override?.homeForm ?? null,
        awayForm: override?.awayForm ?? null,
        ...phaseTimesFor(kickoff, args.reached),
        bettingContractAddress: override?.bettingContractAddress,
        bettingChainId: override?.bettingChainId ?? null,
        bettingOpenedAt: override?.bettingOpenedAt ?? null,
        publishedAt: override?.publishedAt ?? null,
    });
}

const FIXTURE_CONTRACT = '0x00000000000000000000000000000000000f1e7e';
const FIXTURE_CHAIN_ID = 88882;
const DEPLOYED_AT = new Date('2026-01-01T00:00:00Z');
const DEPLOYED: MatchFixtureOverride = {
    bettingContractAddress: FIXTURE_CONTRACT,
    bettingChainId: FIXTURE_CHAIN_ID,
    bettingOpenedAt: DEPLOYED_AT,
    publishedAt: DEPLOYED_AT,
};

const MIN  = 60_000;
const HOUR = 60 * MIN;

/**
 * Fixtures cover every `MatchStatusKind` the codebase classifies. Defaults
 * mirror what `SyncMatchesUseCase.createNewMatch` would produce in prod —
 * keep this list in sync when `Match.create` shape evolves.
 */
export const matchFixture = {
    upcoming:        (o?: MatchFixtureOverride) => buildMatch({ status: 'NS',  kickoffOffsetMs:  60 * MIN }, o),
    kickoffImminent: (o?: MatchFixtureOverride) => buildMatch({ status: 'NS',  kickoffOffsetMs:  90_000 }, o),
    firstHalf:       (o?: MatchFixtureOverride) => buildMatch({ status: '1H',  kickoffOffsetMs: -10 * MIN, score: { home: 0, away: 0 }, reached: 'first' }, o),
    halftime:        (o?: MatchFixtureOverride) => buildMatch({ status: 'HT',  kickoffOffsetMs: -50 * MIN, score: { home: 1, away: 0 }, reached: 'half' }, o),
    secondHalf:      (o?: MatchFixtureOverride) => buildMatch({ status: '2H',  kickoffOffsetMs: -70 * MIN, score: { home: 1, away: 1 }, reached: 'second' }, o),
    extraTime:       (o?: MatchFixtureOverride) => buildMatch({ status: 'ET',  kickoffOffsetMs: -95 * MIN, score: { home: 1, away: 1 }, reached: 'second' }, o),
    breakTime:       (o?: MatchFixtureOverride) => buildMatch({ status: 'BT',  kickoffOffsetMs: -91 * MIN, score: { home: 1, away: 1 }, reached: 'second' }, o),
    penalty:         (o?: MatchFixtureOverride) => buildMatch({ status: 'P',   kickoffOffsetMs: -120 * MIN, score: { home: 2, away: 2 }, reached: 'second' }, o),
    suspended:       (o?: MatchFixtureOverride) => buildMatch({ status: 'SUSP',kickoffOffsetMs: -25 * MIN, score: { home: 0, away: 0 }, reached: 'first' }, o),
    interrupted:     (o?: MatchFixtureOverride) => buildMatch({ status: 'INT', kickoffOffsetMs: -25 * MIN, score: { home: 0, away: 0 }, reached: 'first' }, o),
    fullTime:        (o?: MatchFixtureOverride) => buildMatch({ status: 'FT',  kickoffOffsetMs: -2 * HOUR, score: { home: 2, away: 1 }, reached: 'second' }, o),
    // AET / PEN fixtures default `isKnockout: true` since these statuses only
    // occur in knockout fixtures. Override to false on a per-call basis if a
    // test needs to exercise the "AET on a non-knockout proxy" edge.
    afterExtraTime:  (o?: MatchFixtureOverride) => buildMatch({ status: 'AET', kickoffOffsetMs: -3 * HOUR, score: { home: 2, away: 2 }, isKnockout: true, reached: 'second' }, o),
    afterPenalties:  (o?: MatchFixtureOverride) => buildMatch({ status: 'PEN', kickoffOffsetMs: -3 * HOUR, score: { home: 3, away: 2 }, isKnockout: true, reached: 'second' }, o),
    /** Knockout fixture in NS — useful to exercise the 9-market seed lineup without waiting for AET/PEN status. */
    upcomingKnockout: (o?: MatchFixtureOverride) => buildMatch({ status: 'NS', kickoffOffsetMs: 60 * MIN, isKnockout: true }, o),
    postponed:       (o?: MatchFixtureOverride) => buildMatch({ status: 'PST', kickoffOffsetMs: 24 * HOUR }, o),
    cancelled:       (o?: MatchFixtureOverride) => buildMatch({ status: 'CANC',kickoffOffsetMs: -30 * MIN }, o),
    abandoned:       (o?: MatchFixtureOverride) => buildMatch({ status: 'ABD', kickoffOffsetMs: -30 * MIN, score: { home: 1, away: 1 }, reached: 'first' }, o),
    awarded:         (o?: MatchFixtureOverride) => buildMatch({ status: 'AWD', kickoffOffsetMs: -2 * HOUR, score: { home: 3, away: 0 } }, o),
    walkover:        (o?: MatchFixtureOverride) => buildMatch({ status: 'WO',  kickoffOffsetMs: -2 * HOUR, score: { home: 3, away: 0 } }, o),
    /** Upcoming, deployed by the admin and published: what app users see. */
    deployedPublished:   (o?: MatchFixtureOverride) => buildMatch({ status: 'NS', kickoffOffsetMs: 60 * MIN }, { ...DEPLOYED, ...o }),
    /** Deployed then hidden by the admin: gone from the app, bets still claimable. */
    deployedUnpublished: (o?: MatchFixtureOverride) => buildMatch({ status: 'NS', kickoffOffsetMs: 60 * MIN }, { ...DEPLOYED, publishedAt: null, ...o }),
    /** Synced from API-Football, never deployed: only the admin sees it. */
    notDeployed:         (o?: MatchFixtureOverride) => buildMatch({ status: 'NS', kickoffOffsetMs: 3 * HOUR }, o),
} as const;

export type FixtureName = keyof typeof matchFixture;
