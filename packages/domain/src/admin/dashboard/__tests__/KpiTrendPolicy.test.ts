import { describe, expect, it } from 'vitest';

import { trendOf } from '../KpiTrendPolicy';

describe('trendOf', () => {
    it('reads growth with an absolute and a relative change', () => {
        expect(trendOf(48_200, 40_710)).toEqual({ dir: 'up', absolute: 7_490, percent: 18.4 });
    });

    it('reads a drop', () => {
        expect(trendOf(3, 4)).toEqual({ dir: 'down', absolute: 1, percent: 25 });
    });

    it('is flat without change and has no percentage from zero', () => {
        expect(trendOf(0, 0)).toEqual({ dir: 'flat', absolute: 0, percent: null });
        expect(trendOf(5, 0)).toEqual({ dir: 'up', absolute: 5, percent: null });
    });
});
