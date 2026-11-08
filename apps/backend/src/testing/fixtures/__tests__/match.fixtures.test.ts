import { beforeEach, describe, expect, it } from 'vitest';
import {
    __resetTestMatchIdForTesting,
    matchFixture,
    nextTestMatchId,
    skipTakenTestMatchIds,
    type FixtureName,
} from '../match.fixtures';
import { TEAM_FIXTURES } from '../team.fixtures';

const FIXTURE_NAMES: ReadonlyArray<FixtureName> = [
    'upcoming', 'kickoffImminent', 'firstHalf', 'halftime', 'secondHalf',
    'extraTime', 'breakTime', 'penalty', 'suspended', 'interrupted',
    'fullTime', 'afterExtraTime', 'afterPenalties',
    'postponed', 'cancelled', 'abandoned', 'awarded', 'walkover',
];

const EXPECTED_STATUS: Record<FixtureName, string> = {
    upcoming: 'NS', kickoffImminent: 'NS',
    firstHalf: '1H', halftime: 'HT', secondHalf: '2H',
    extraTime: 'ET', breakTime: 'BT', penalty: 'P',
    suspended: 'SUSP', interrupted: 'INT',
    fullTime: 'FT', afterExtraTime: 'AET', afterPenalties: 'PEN',
    postponed: 'PST', cancelled: 'CANC', abandoned: 'ABD',
    awarded: 'AWD', walkover: 'WO',
};

beforeEach(() => {
    __resetTestMatchIdForTesting();
});

describe('matchFixture — coverage', () => {
    it.each(FIXTURE_NAMES)('%s returns a valid Match with the expected status', (name) => {
        const match = matchFixture[name]();
        const json = match.toJSON();
        expect(json.status).toBe(EXPECTED_STATUS[name]);
        expect(json.id).toBeGreaterThanOrEqual(999000);
        expect(json.homeTeam.name).toBeTypeOf('string');
        expect(json.awayTeam.name).toBeTypeOf('string');
        expect(json.matchDate).toBeInstanceOf(Date);
    });
});

describe('matchFixture — override', () => {
    it('applies score override on a halftime fixture', () => {
        const match = matchFixture.halftime({ score: { home: 3, away: 2 } });
        const json = match.toJSON();
        expect(json.score).toEqual({ home: 3, away: 2 });
    });

    it('applies team override', () => {
        const match = matchFixture.firstHalf({ homeTeam: { name: 'PSG' }, awayTeam: { name: 'OM' } });
        const json = match.toJSON();
        expect(json.homeTeam.name).toBe('PSG');
        expect(json.awayTeam.name).toBe('OM');
    });

    it('applies kickoffAt override', () => {
        const kickoff = new Date('2026-08-12T18:00:00Z');
        const match = matchFixture.upcoming({ kickoffAt: kickoff });
        expect(match.toJSON().matchDate).toEqual(kickoff);
    });

    it('applies bettingContractAddress override', () => {
        const match = matchFixture.firstHalf({ bettingContractAddress: '0xABC' });
        expect(match.toJSON().bettingContractAddress).toBe('0xABC');
    });

    it('lets caller pin apiFootballId without bumping the counter', () => {
        __resetTestMatchIdForTesting();
        const a = matchFixture.upcoming({ apiFootballId: 999500 });
        const b = matchFixture.upcoming();
        expect(a.toJSON().id).toBe(999500);
        expect(b.toJSON().id).toBe(999000);
    });
});

describe('nextTestMatchId', () => {
    it('returns strictly increasing IDs in the 999xxx range', () => {
        __resetTestMatchIdForTesting();
        const a = nextTestMatchId();
        const b = nextTestMatchId();
        const c = nextTestMatchId();
        expect(a).toBe(999000);
        expect(b).toBe(999001);
        expect(c).toBe(999002);
    });

    it('resets to 999000 via __resetTestMatchIdForTesting', () => {
        nextTestMatchId();
        nextTestMatchId();
        __resetTestMatchIdForTesting();
        expect(nextTestMatchId()).toBe(999000);
    });
});

describe('matchFixture — real team identities', () => {
    it('keeps the API-Football team ids used by the fan-token mapping', () => {
        const json = matchFixture.upcoming({ homeTeam: TEAM_FIXTURES.PSG, awayTeam: TEAM_FIXTURES.OM }).toJSON();
        expect(json.homeTeam).toMatchObject({ id: 85, name: 'Paris Saint-Germain' });
        expect(json.awayTeam).toMatchObject({ id: 81, name: 'Olympique de Marseille' });
    });
});

describe('matchFixture — phase start times', () => {
    const kickoffAt = new Date('2026-11-07T20:00:00Z');

    it('has no phase times before kick-off', () => {
        expect(matchFixture.upcoming({ kickoffAt }).getPhaseTimes()).toEqual({
            firstHalfStartedAt: null, halftimeStartedAt: null, secondHalfStartedAt: null,
        });
    });

    it('starts the first half at kick-off and leaves the break unknown in 1H', () => {
        const phases = matchFixture.firstHalf({ kickoffAt }).getPhaseTimes();
        expect(phases.firstHalfStartedAt).toEqual(kickoffAt);
        expect(phases.halftimeStartedAt).toBeNull();
    });

    it('records the break and the second half once 2H is reached', () => {
        const phases = matchFixture.secondHalf({ kickoffAt }).getPhaseTimes();
        expect(phases.halftimeStartedAt).toEqual(new Date('2026-11-07T20:47:00Z'));
        expect(phases.secondHalfStartedAt).toEqual(new Date('2026-11-07T21:02:00Z'));
    });
});

describe('skipTakenTestMatchIds', () => {
    it('skips IDs already persisted by a previous run', async () => {
        const taken = new Set([999000, 999001, 999002]);
        await skipTakenTestMatchIds(async (id) => taken.has(id));
        expect(nextTestMatchId()).toBe(999003);
    });

    it('leaves the counter untouched when nothing is persisted', async () => {
        await skipTakenTestMatchIds(async () => false);
        expect(nextTestMatchId()).toBe(999000);
    });
});
