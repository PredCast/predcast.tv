import { describe, expect, it } from 'vitest';

import { MatchResponseDtoSchema } from '@chiliztv/shared';

import { matchFixture } from '../../../../testing/fixtures/match.fixtures';
import { TEAM_FIXTURES } from '../../../../testing/fixtures/team.fixtures';
import { toMatchResponseDto } from '../toMatchResponseDto';

describe('toMatchResponseDto', () => {
  it.each([
    ['upcoming', matchFixture.upcoming()],
    ['halftime', matchFixture.halftime({ score: { home: 3, away: 2 } })],
    ['after penalties', matchFixture.afterPenalties({ aetScore: { home: 2, away: 2 }, penScore: { home: 5, away: 4 } })],
    ['deployed', matchFixture.upcoming({ bettingContractAddress: '0x0000000000000000000000000000000000000001' })],
  ])('produces a payload the shared schema accepts (%s)', (_label, match) => {
    expect(() => MatchResponseDtoSchema.parse(toMatchResponseDto(match, false, 88882))).not.toThrow();
  });

  it('keeps a null score before kick-off', () => {
    expect(toMatchResponseDto(matchFixture.upcoming(), false, 88882).score).toBeNull();
  });

  it('resolves each side to its fan token', () => {
    const dto = toMatchResponseDto(matchFixture.upcoming({ homeTeam: TEAM_FIXTURES.PSG, awayTeam: TEAM_FIXTURES.LENS }), true, 88882);
    expect(dto).toMatchObject({ homeFanToken: 'PSG', awayFanToken: null, dataStale: true });
  });

  it('resolves the chain of a legacy contract to the current network and keeps it null without one', () => {
    expect(toMatchResponseDto(matchFixture.upcoming({ bettingContractAddress: '0x0000000000000000000000000000000000000001' }), false, 88882).bettingChainId).toBe(88882);
    expect(toMatchResponseDto(matchFixture.deployedPublished({ bettingChainId: 88888 }), false, 88882).bettingChainId).toBe(88888);
    expect(toMatchResponseDto(matchFixture.notDeployed(), false, 88882).bettingChainId).toBeNull();
  });

  it('serialises the phase start times as ISO strings', () => {
    const dto = toMatchResponseDto(matchFixture.secondHalf({ kickoffAt: new Date('2026-11-07T20:00:00Z') }), false, 88882);
    expect(dto).toMatchObject({
      firstHalfStartedAt: '2026-11-07T20:00:00.000Z',
      halftimeStartedAt: '2026-11-07T20:47:00.000Z',
      secondHalfStartedAt: '2026-11-07T21:02:00.000Z',
    });
  });

  it('exposes the penalty winner after a shootout', () => {
    const match = matchFixture.afterPenalties({ aetScore: { home: 2, away: 2 }, penScore: { home: 5, away: 4 } });
    expect(toMatchResponseDto(match, false, 88882).penaltyWinner).toBe('home');
  });
});
