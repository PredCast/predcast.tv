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
    expect(() => MatchResponseDtoSchema.parse(toMatchResponseDto(match, false))).not.toThrow();
  });

  it('keeps a null score before kick-off', () => {
    expect(toMatchResponseDto(matchFixture.upcoming(), false).score).toBeNull();
  });

  it('resolves each side to its fan token', () => {
    const dto = toMatchResponseDto(matchFixture.upcoming({ homeTeam: TEAM_FIXTURES.PSG, awayTeam: TEAM_FIXTURES.LENS }), true);
    expect(dto).toMatchObject({ homeFanToken: 'PSG', awayFanToken: null, dataStale: true });
  });

  it('exposes the penalty winner after a shootout', () => {
    const match = matchFixture.afterPenalties({ aetScore: { home: 2, away: 2 }, penScore: { home: 5, away: 4 } });
    expect(toMatchResponseDto(match, false).penaltyWinner).toBe('home');
  });
});
