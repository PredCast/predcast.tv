import { describe, expect, it } from 'vitest';

import { UnsupportedCronError, cronCadenceMs, nextCronRun, parseCron } from '../policies/cron';

// The scheduler runs cron tasks in UTC.
const at = (h: number, m: number, s = 0) => new Date(Date.UTC(2026, 10, 8, h, m, s));

describe('parseCron', () => {
    it.each(['* * * * *', '*/10 * * * *', '0 * * * *', '7 * * * *', '0 3 * * *', '*/3 * * * *', '15 */2 * * *'])(
        'accepts the scheduler syntax %s',
        (expr) => expect(() => parseCron(expr)).not.toThrow(),
    );

    it.each([
        ['1-5 * * * *', 'range'],
        ['0,30 * * * *', 'list'],
        ['0 3 * * 1', 'day-of-week'],
        ['0 3 1 * *', 'day-of-month'],
        ['0 0 * JAN *', 'month name'],
        ['60 * * * *', 'minute out of range'],
        ['*/0 * * * *', 'zero step'],
        ['* * * *', 'four fields'],
        ['0 0 * * * *', 'six fields (seconds)'],
    ])('throws on %s (%s)', (expr) => {
        expect(() => parseCron(expr)).toThrow(UnsupportedCronError);
    });
});

describe('nextCronRun', () => {
    it('fires at the next minute for * * * * *', () => {
        expect(nextCronRun('* * * * *', at(14, 15, 2))).toEqual(at(14, 16));
    });

    it('is strictly after the reference even on an exact fire time', () => {
        expect(nextCronRun('*/10 * * * *', at(14, 20))).toEqual(at(14, 30));
    });

    it('follows */n steps from minute 0', () => {
        expect(nextCronRun('*/10 * * * *', at(14, 15, 30))).toEqual(at(14, 20));
        expect(nextCronRun('*/3 * * * *', at(14, 58))).toEqual(at(15, 0));
    });

    it('handles fixed minutes and hours, across midnight', () => {
        expect(nextCronRun('7 * * * *', at(14, 7))).toEqual(at(15, 7));
        expect(nextCronRun('0 3 * * *', at(14, 0))).toEqual(new Date(Date.UTC(2026, 10, 9, 3, 0)));
    });
});

describe('cronCadenceMs', () => {
    it('reads the period of each supported shape', () => {
        expect(cronCadenceMs('* * * * *')).toBe(60_000);
        expect(cronCadenceMs('*/10 * * * *')).toBe(600_000);
        expect(cronCadenceMs('7 * * * *')).toBe(3_600_000);
        expect(cronCadenceMs('15 */2 * * *')).toBe(7_200_000);
        expect(cronCadenceMs('0 3 * * *')).toBe(86_400_000);
    });
});
