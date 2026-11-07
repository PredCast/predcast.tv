import 'reflect-metadata';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { SyncMatchesUseCase } from '../SyncMatchesUseCase';
import { MatchCacheKeys, FIXED_LIST_KEYS } from '../../MatchCacheKeys';
import { InMemoryCache } from '../../../../testing/cache/InMemoryCache';
import { matchFixture, __resetTestMatchIdForTesting } from '../../../../testing/fixtures/match.fixtures';
import { MockClock } from '../../../../testing/clock/MockClock';
import type { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';
import type {
  IFootballApiService,
  RawMatch,
} from '@chiliztv/domain/shared/ports/IFootballApiService';
import { Match } from '@chiliztv/domain/matches/entities/Match';

const MATCH_ID = 4242;
const LEAGUE_ID = 135;
const HOUR = 60 * 60 * 1_000;
const FIXED_NOW = new Date('2026-05-16T12:00:00.000Z');

function rawMatchAt(score: { home: number; away: number } | null, status = '2H', apiFootballId = MATCH_ID): RawMatch {
  return {
    apiFootballId,
    homeTeamId: 5,
    homeTeamName: 'Inter',
    homeTeamLogo: '',
    awayTeamId: 7,
    awayTeamName: 'AC Milan',
    awayTeamLogo: '',
    leagueId: LEAGUE_ID,
    leagueName: 'Serie A',
    leagueLogo: '',
    leagueCountry: 'Italy',
    season: 2026,
    status,
    matchDate: new Date(FIXED_NOW.getTime() - 30 * 60_000),
    venue: 'San Siro',
    homeScore: score?.home ?? null,
    awayScore: score?.away ?? null,
    elapsed: null,
    htHomeScore: null,
    htAwayScore: null,
    aetHomeScore: null,
    aetAwayScore: null,
    penHomeScore: null,
    penAwayScore: null,
    firstHalfStartedAt: null,
    secondHalfStartedAt: null,
  };
}

function fakeFootballApi(impl: { matches: RawMatch[]; forms?: Map<number, string | null>; liveMatches?: RawMatch[] }): IFootballApiService {
  return {
    fetchMatches: vi.fn().mockResolvedValue(impl.matches),
    fetchLiveMatches: vi.fn().mockResolvedValue(impl.liveMatches ?? []),
    getTeamForm: vi.fn(async (teamId: number) => impl.forms?.get(teamId) ?? null),
    isDataStale: vi.fn().mockReturnValue(false),
  };
}

function fakeRepo(initial: Match | null): IMatchRepository {
  const state: { current: Match | null } = { current: initial };
  return {
    findByApiFootballId: vi.fn(async () => state.current),
    update: vi.fn(async (m: Match) => {
      state.current = m;
      return m;
    }),
    save: vi.fn(async (m: Match) => m),
    findAll: vi.fn(async () => []),
    findByDateRange: vi.fn(),
    findVisibleFromDate: vi.fn(),
    findById: vi.fn(),
    findByBettingContractAddress: vi.fn(),
    findLive: vi.fn(),
    findUpcoming: vi.fn(),
    findByLeagueId: vi.fn(),
    getStats: vi.fn(),
    listBettingContractAddresses: vi.fn(),
    deleteFinishedBefore: vi.fn(),
  } as unknown as IMatchRepository;
}

describe('SyncMatchesUseCase — cache invalidation hook', () => {
  let cache: InMemoryCache;

  beforeEach(() => {
    __resetTestMatchIdForTesting();
    cache = new InMemoryCache();
  });

  it('drops fixed list keys + per-match + per-league keys when a score changes mid-game', async () => {
    // Existing match with score 1-0, the API now reports 2-0 (a goal landed).
    const existing = matchFixture.secondHalf({
      apiFootballId: MATCH_ID,
      league: { id: LEAGUE_ID, name: 'Serie A' },
      score: { home: 1, away: 0 },
    });
    const repo = fakeRepo(existing);
    const api = fakeFootballApi({ matches: [rawMatchAt({ home: 2, away: 0 })] });
    const uc = new SyncMatchesUseCase(
      repo,
      api,
      new MockClock(FIXED_NOW),
      cache,
    );

    // Pre-seed the cache as if a previous read had warmed it.
    await cache.set(MatchCacheKeys.listLive, [], 30);
    await cache.set(MatchCacheKeys.listBrowse, { success: true, leagues: [] }, 60);
    await cache.set(MatchCacheKeys.single(MATCH_ID), { stale: true }, 30);
    await cache.set(MatchCacheKeys.league(LEAGUE_ID), [], 60);

    await uc.execute();

    // Every fixed list key must have been deleted.
    for (const key of FIXED_LIST_KEYS) {
      expect(cache.deletedKeys).toContain(key);
    }
    // The per-match and per-league keys for the changed match must be gone too.
    expect(cache.deletedKeys).toContain(MatchCacheKeys.single(MATCH_ID));
    expect(cache.deletedKeys).toContain(MatchCacheKeys.league(LEAGUE_ID));
  });

  it('does not touch the cache when fetched data is identical (no diff)', async () => {
    // Build the existing match manually with no odds so the diff detector has
    // nothing to flag — the API converter only emits the `winner` market, so
    // a fixture preloaded with halftime/goalsTotal/etc. would always diff.
    const existing = Match.reconstitute({
      id: MATCH_ID,
      apiFootballId: MATCH_ID,
      homeTeamId: 5,
      homeTeamName: 'Inter',
      awayTeamId: 7,
      awayTeamName: 'AC Milan',
      leagueId: LEAGUE_ID,
      leagueName: 'Serie A',
      leagueCountry: 'Italy',
      season: 2026,
      status: '2H',
      matchDate: new Date(FIXED_NOW.getTime() - 30 * 60_000),
      venue: 'San Siro',
      homeScore: 1,
      awayScore: 1,
      createdAt: new Date(FIXED_NOW.getTime() - HOUR),
      updatedAt: new Date(FIXED_NOW.getTime() - 5 * 60_000),
    });
    const repo = fakeRepo(existing);
    // Same score, same status, no odds on either side — nothing changed.
    const api = fakeFootballApi({ matches: [rawMatchAt({ home: 1, away: 1 })] });
    const uc = new SyncMatchesUseCase(
      repo,
      api,
      new MockClock(FIXED_NOW),
      cache,
    );

    await cache.set(MatchCacheKeys.listLive, ['warm'], 30);
    await cache.set(MatchCacheKeys.single(MATCH_ID), { warm: true }, 30);

    await uc.execute();

    expect(cache.deletedKeys).toHaveLength(0);
  });

  it('invalidates on status-only transitions (e.g. 2H → FT) even without score diff', async () => {
    const existing = matchFixture.secondHalf({
      apiFootballId: MATCH_ID,
      league: { id: LEAGUE_ID, name: 'Serie A' },
      score: { home: 2, away: 1 },
    });
    const repo = fakeRepo(existing);
    const api = fakeFootballApi({ matches: [rawMatchAt({ home: 2, away: 1 }, 'FT')] });
    const uc = new SyncMatchesUseCase(
      repo,
      api,
      new MockClock(FIXED_NOW),
      cache,
    );

    await uc.execute();

    expect(cache.deletedKeys).toContain(MatchCacheKeys.listLive);
    expect(cache.deletedKeys).toContain(MatchCacheKeys.single(MATCH_ID));
  });
});

describe('SyncMatchesUseCase — no automatic deployment', () => {
  beforeEach(() => __resetTestMatchIdForTesting());

  it('persists a newly synced match without a contract and counts it as created', async () => {
    const repo = fakeRepo(null);
    const api = fakeFootballApi({ matches: [rawMatchAt(null, 'NS')] });
    const uc = new SyncMatchesUseCase(repo, api, new MockClock(FIXED_NOW), new InMemoryCache());

    const result = await uc.execute();

    expect(result).toMatchObject({ matchesFetched: 1, matchesStored: 1, matchesCreated: 1, formsRefreshed: 0 });
    const saved = (repo.save as ReturnType<typeof vi.fn>).mock.calls[0]![0] as Match;
    expect(saved.getBettingContractAddress()).toBeUndefined();
    expect(saved.getPublishedAt()).toBeNull();
  });

  it('fetches team forms only for the teams of deployed matches', async () => {
    const deployed = matchFixture.deployedPublished({
      apiFootballId: MATCH_ID,
      homeTeam: { id: 5, name: 'Inter' },
      awayTeam: { id: 7, name: 'AC Milan' },
    });
    const undeployed = matchFixture.notDeployed({ apiFootballId: 5151, homeTeam: { id: 40, name: 'Liverpool' }, awayTeam: { id: 33, name: 'Man United' } });
    const byId = new Map<number, Match>([[MATCH_ID, deployed], [5151, undeployed]]);
    const repo = {
      ...fakeRepo(null),
      findByApiFootballId: vi.fn(async (id: number) => byId.get(id) ?? null),
    } as unknown as IMatchRepository;
    const forms = new Map<number, string | null>([[5, 'WWDLW'], [7, 'LLDWW'], [40, 'WWWWW'], [33, 'LLLLL']]);
    const api = fakeFootballApi({
      matches: [rawMatchAt(null, 'NS'), { ...rawMatchAt(null, 'NS', 5151), homeTeamId: 40, awayTeamId: 33 }],
      forms,
    });
    const uc = new SyncMatchesUseCase(repo, api, new MockClock(FIXED_NOW), new InMemoryCache());

    const result = await uc.execute();

    const asked = (api.getTeamForm as ReturnType<typeof vi.fn>).mock.calls.map(([id]) => id).sort();
    expect(asked).toEqual([5, 7]);
    expect(result.formsRefreshed).toBe(2);
  });
});
