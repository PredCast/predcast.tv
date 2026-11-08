import { describe, expect, it } from 'vitest';

import { NO_PHASE_TIMES, nextPhaseTimes, phaseTimesEqual } from '../matchPhaseTimes';

const KICKOFF = new Date('2026-11-07T20:00:00Z');
const SECOND = new Date('2026-11-07T21:02:00Z');
const NOW = new Date('2026-11-07T20:47:30Z');
const NO_UPSTREAM = { firstHalfStartedAt: null, secondHalfStartedAt: null };

describe('nextPhaseTimes', () => {
    it('takes the provider period starts', () => {
        const next = nextPhaseTimes(NO_PHASE_TIMES, '2H', { firstHalfStartedAt: KICKOFF, secondHalfStartedAt: SECOND }, NOW);
        expect(next).toEqual({ firstHalfStartedAt: KICKOFF, halftimeStartedAt: null, secondHalfStartedAt: SECOND });
    });

    it('never clears a known period start when the provider omits it', () => {
        const current = { ...NO_PHASE_TIMES, firstHalfStartedAt: KICKOFF };
        expect(nextPhaseTimes(current, '1H', NO_UPSTREAM, NOW).firstHalfStartedAt).toBe(KICKOFF);
    });

    it('stamps the HT start the first time the status reads HT', () => {
        expect(nextPhaseTimes(NO_PHASE_TIMES, 'HT', NO_UPSTREAM, NOW).halftimeStartedAt).toBe(NOW);
    });

    it('keeps the first HT stamp on later ticks', () => {
        const current = { ...NO_PHASE_TIMES, halftimeStartedAt: NOW };
        const later = new Date(NOW.getTime() + 60_000);
        expect(nextPhaseTimes(current, 'HT', NO_UPSTREAM, later).halftimeStartedAt).toBe(NOW);
    });

    it('leaves the HT start unknown when the HT status was never observed', () => {
        expect(nextPhaseTimes(NO_PHASE_TIMES, '2H', NO_UPSTREAM, NOW).halftimeStartedAt).toBeNull();
    });
});

describe('phaseTimesEqual', () => {
    it('compares instants, not Date identities', () => {
        const a = { ...NO_PHASE_TIMES, firstHalfStartedAt: KICKOFF };
        const b = { ...NO_PHASE_TIMES, firstHalfStartedAt: new Date(KICKOFF.getTime()) };
        expect(phaseTimesEqual(a, b)).toBe(true);
        expect(phaseTimesEqual(a, NO_PHASE_TIMES)).toBe(false);
    });
});
