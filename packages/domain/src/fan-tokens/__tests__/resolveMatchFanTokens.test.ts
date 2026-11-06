import { describe, expect, it } from 'vitest';
import { crossPairLabel, resolveMatchFanTokens } from '../policies/resolveMatchFanTokens';

const MAPPING: ReadonlyMap<number, string> = new Map([
    [85, 'PSG'],
    [81, 'OM'],
    [529, 'BAR'],
]);

describe('resolveMatchFanTokens', () => {
    it('resolves both sides when both clubs have a token', () => {
        expect(resolveMatchFanTokens(85, 81, MAPPING)).toEqual({ home: 'PSG', away: 'OM' });
    });

    it('keeps the side order (home first)', () => {
        expect(resolveMatchFanTokens(81, 85, MAPPING)).toEqual({ home: 'OM', away: 'PSG' });
    });

    it('returns null for a club without token', () => {
        expect(resolveMatchFanTokens(85, 116, MAPPING)).toEqual({ home: 'PSG', away: null });
        expect(resolveMatchFanTokens(116, 81, MAPPING)).toEqual({ home: null, away: 'OM' });
    });

    it('returns nulls when neither club has a token', () => {
        expect(resolveMatchFanTokens(79, 94, MAPPING)).toEqual({ home: null, away: null });
    });

    it('handles missing team ids', () => {
        expect(resolveMatchFanTokens(undefined, null, MAPPING)).toEqual({ home: null, away: null });
    });

    it('never returns the same token on both sides', () => {
        const dup: ReadonlyMap<number, string> = new Map([[1, 'PSG'], [2, 'PSG']]);
        expect(resolveMatchFanTokens(1, 2, dup)).toEqual({ home: 'PSG', away: null });
    });
});

describe('crossPairLabel', () => {
    it('builds HOME/AWAY when both sides have a token', () => {
        expect(crossPairLabel({ home: 'PSG', away: 'OM' })).toBe('PSG/OM');
    });

    it('is null with a single token', () => {
        expect(crossPairLabel({ home: 'PSG', away: null })).toBeNull();
        expect(crossPairLabel({ home: null, away: 'OM' })).toBeNull();
    });
});
