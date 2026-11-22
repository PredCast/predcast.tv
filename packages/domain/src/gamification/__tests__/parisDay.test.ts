import { describe, expect, it } from 'vitest';

import {
    addDays,
    daysBetween,
    parisDayOf,
    parisMonthOf,
    weekStartOf,
    weeksBetween,
} from '../policies/parisDay';

describe('parisDayOf', () => {
    it('splits days at Paris midnight in winter (UTC+1)', () => {
        expect(parisDayOf(new Date('2027-01-15T22:59:00Z'))).toBe('2027-01-15');
        expect(parisDayOf(new Date('2027-01-15T23:01:00Z'))).toBe('2027-01-16');
    });

    it('splits days at Paris midnight in summer (UTC+2)', () => {
        expect(parisDayOf(new Date('2027-07-15T21:59:00Z'))).toBe('2027-07-15');
        expect(parisDayOf(new Date('2027-07-15T22:01:00Z'))).toBe('2027-07-16');
    });

    it('CA5 — 23:59 then 00:01 Paris time are two days around the 2027-03-28 change', () => {
        // 2027-03-27 23:59 CET = 22:59Z ; 2027-03-28 00:01 CET = 23:01Z (switch to CEST at 01:00Z).
        expect(parisDayOf(new Date('2027-03-27T22:59:00Z'))).toBe('2027-03-27');
        expect(parisDayOf(new Date('2027-03-27T23:01:00Z'))).toBe('2027-03-28');
        // 2027-03-28 23:59 CEST = 21:59Z ; 2027-03-29 00:01 CEST = 22:01Z.
        expect(parisDayOf(new Date('2027-03-28T21:59:00Z'))).toBe('2027-03-28');
        expect(parisDayOf(new Date('2027-03-28T22:01:00Z'))).toBe('2027-03-29');
        // Instants on both sides of the 02:00 → 03:00 jump stay on the same day.
        expect(parisDayOf(new Date('2027-03-28T00:59:00Z'))).toBe('2027-03-28');
        expect(parisDayOf(new Date('2027-03-28T01:01:00Z'))).toBe('2027-03-28');
    });

    it('CA5 — 23:59 then 00:01 Paris time are two days around the 2027-10-31 change', () => {
        // 2027-10-30 23:59 CEST = 21:59Z ; 2027-10-31 00:01 CEST = 22:01Z (switch to CET at 01:00Z).
        expect(parisDayOf(new Date('2027-10-30T21:59:00Z'))).toBe('2027-10-30');
        expect(parisDayOf(new Date('2027-10-30T22:01:00Z'))).toBe('2027-10-31');
        // 2027-10-31 23:59 CET = 22:59Z ; 2027-11-01 00:01 CET = 23:01Z.
        expect(parisDayOf(new Date('2027-10-31T22:59:00Z'))).toBe('2027-10-31');
        expect(parisDayOf(new Date('2027-10-31T23:01:00Z'))).toBe('2027-11-01');
        // The repeated 02:00–03:00 hour belongs to the same day.
        expect(parisDayOf(new Date('2027-10-31T00:30:00Z'))).toBe('2027-10-31');
        expect(parisDayOf(new Date('2027-10-31T01:30:00Z'))).toBe('2027-10-31');
    });

    it('gives the Paris month, not the UTC month', () => {
        expect(parisMonthOf(new Date('2027-04-30T22:30:00Z'))).toBe('2027-05');
        expect(parisMonthOf(new Date('2027-04-30T21:30:00Z'))).toBe('2027-04');
    });
});

describe('day arithmetic', () => {
    it('adds and diffs calendar days across DST and months', () => {
        expect(addDays('2027-03-27', 2)).toBe('2027-03-29');
        expect(addDays('2027-03-01', -1)).toBe('2027-02-28');
        expect(addDays('2028-02-28', 1)).toBe('2028-02-29');
        expect(daysBetween('2027-10-30', '2027-11-01')).toBe(2);
        expect(daysBetween('2027-01-10', '2027-01-08')).toBe(-2);
        expect(() => addDays('2027/01/01', 1)).toThrow(RangeError);
    });

    it('computes ISO weeks starting on Monday', () => {
        expect(weekStartOf('2027-03-28')).toBe('2027-03-22'); // Sunday
        expect(weekStartOf('2027-03-29')).toBe('2027-03-29'); // Monday
        expect(weeksBetween('2027-03-28', '2027-03-29')).toBe(1);
        expect(weeksBetween('2027-03-22', '2027-03-28')).toBe(0);
        expect(weeksBetween('2027-03-22', '2027-04-06')).toBe(2);
    });
});
