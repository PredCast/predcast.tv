import { describe, expect, it } from 'vitest';
import {
    BLOCKED_STATUSES,
    FINISHED_STATUSES,
    LIVE_STATUSES,
    UPCOMING_STATUSES,
    classifyStatus,
    isBettable,
    isHalftime,
} from '../BettablePolicy';

const NOW = new Date('2026-05-11T14:00:00Z');

function ko(offsetMin: number): string {
    return new Date(NOW.getTime() + offsetMin * 60_000).toISOString();
}

describe('LIVE_STATUSES', () => {
    it('includes HT alongside 1H/2H', () => {
        expect(LIVE_STATUSES).toContain('HT');
        expect(LIVE_STATUSES).toContain('1H');
        expect(LIVE_STATUSES).toContain('2H');
    });

    it('includes SUSP/INT (suspended/interrupted)', () => {
        expect(LIVE_STATUSES).toContain('SUSP');
        expect(LIVE_STATUSES).toContain('INT');
    });

    it('includes BT (break time) and P (penalty shootout)', () => {
        expect(LIVE_STATUSES).toContain('BT');
        expect(LIVE_STATUSES).toContain('P');
    });
});

describe('classifyStatus', () => {
    it.each(UPCOMING_STATUSES)('%s → upcoming', (s) => {
        expect(classifyStatus(s)).toBe('upcoming');
    });
    it.each(LIVE_STATUSES)('%s → live', (s) => {
        expect(classifyStatus(s)).toBe('live');
    });
    it.each(FINISHED_STATUSES)('%s → finished', (s) => {
        expect(classifyStatus(s)).toBe('finished');
    });
    it.each(BLOCKED_STATUSES)('%s → blocked', (s) => {
        expect(classifyStatus(s)).toBe('blocked');
    });
    it('unknown code → unknown', () => {
        expect(classifyStatus('XYZ')).toBe('unknown');
    });
});

describe('isHalftime', () => {
    it('true for HT only', () => {
        expect(isHalftime('HT')).toBe(true);
        expect(isHalftime('1H')).toBe(false);
        expect(isHalftime('2H')).toBe(false);
        expect(isHalftime('BT')).toBe(false);
    });
});

describe('isBettable — kickoff buffer (upcoming matches)', () => {
    const buffer = { kickoffBufferSec: 120 };

    it('NS, T-3min → ok', () => {
        expect(isBettable({ status: 'NS', kickoffAt: ko(3) }, NOW, buffer)).toEqual({ ok: true });
    });

    it('NS, T-90s → blocked KICKOFF_BUFFER', () => {
        expect(isBettable({ status: 'NS', kickoffAt: ko(1.5) }, NOW, buffer)).toEqual({
            ok: false,
            reason: 'KICKOFF_BUFFER',
        });
    });

    it('NS, kickoff exact (T=0) → blocked KICKOFF_BUFFER', () => {
        expect(isBettable({ status: 'NS', kickoffAt: ko(0) }, NOW, buffer)).toEqual({
            ok: false,
            reason: 'KICKOFF_BUFFER',
        });
    });

    it('TBD, T-3min → ok (TBD is upcoming)', () => {
        expect(isBettable({ status: 'TBD', kickoffAt: ko(3) }, NOW, buffer)).toEqual({ ok: true });
    });

    it('invalid kickoffAt → blocked UNKNOWN', () => {
        expect(isBettable({ status: 'NS', kickoffAt: 'not-a-date' }, NOW, buffer)).toEqual({
            ok: false,
            reason: 'UNKNOWN',
        });
    });

    it('Date instance accepted as kickoffAt', () => {
        const koDate = new Date(NOW.getTime() + 3 * 60_000);
        expect(isBettable({ status: 'NS', kickoffAt: koDate }, NOW, buffer)).toEqual({ ok: true });
    });

    it('buffer 0 → bettable until exact kickoff', () => {
        expect(isBettable({ status: 'NS', kickoffAt: ko(0.01) }, NOW, { kickoffBufferSec: 0 })).toEqual({
            ok: true,
        });
    });
});

describe('isBettable — live statuses block (HT explicitly differentiated)', () => {
    const opts = { kickoffBufferSec: 120 };

    it('1H → blocked LIVE', () => {
        expect(isBettable({ status: '1H', kickoffAt: ko(-10) }, NOW, opts)).toEqual({
            ok: false,
            reason: 'LIVE',
        });
    });

    it('HT → blocked HALFTIME (distinct from LIVE)', () => {
        expect(isBettable({ status: 'HT', kickoffAt: ko(-50) }, NOW, opts)).toEqual({
            ok: false,
            reason: 'HALFTIME',
        });
    });

    it('2H → blocked LIVE', () => {
        expect(isBettable({ status: '2H', kickoffAt: ko(-70) }, NOW, opts)).toEqual({
            ok: false,
            reason: 'LIVE',
        });
    });

    it.each(['ET', 'BT', 'P', 'LIVE', 'SUSP', 'INT'])('%s → blocked LIVE', (status) => {
        expect(isBettable({ status, kickoffAt: ko(-100) }, NOW, opts)).toEqual({
            ok: false,
            reason: 'LIVE',
        });
    });
});

describe('isBettable — finished + blocked + unknown', () => {
    const opts = { kickoffBufferSec: 120 };

    it.each(['FT', 'AET', 'PEN', 'AWD', 'WO'])('%s → blocked FINISHED', (status) => {
        expect(isBettable({ status, kickoffAt: ko(-120) }, NOW, opts)).toEqual({
            ok: false,
            reason: 'FINISHED',
        });
    });

    it.each(['PST', 'CANC', 'ABD'])('%s → blocked POSTPONED', (status) => {
        expect(isBettable({ status, kickoffAt: ko(-10) }, NOW, opts)).toEqual({
            ok: false,
            reason: 'POSTPONED',
        });
    });

    it('unknown code → blocked UNKNOWN (safe default)', () => {
        expect(isBettable({ status: 'XYZ', kickoffAt: ko(3) }, NOW, opts)).toEqual({
            ok: false,
            reason: 'UNKNOWN',
        });
    });
});
