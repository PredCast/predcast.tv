import { describe, expect, it } from 'vitest';

import { canDeployMatch, canRetryMarketsSetup, type DeployableMatch } from '../MatchDeploymentPolicy';

const NOW = new Date('2026-11-07T12:00:00Z');
const IN = (seconds: number) => new Date(NOW.getTime() + seconds * 1000);
const CONTRACT = '0x00000000000000000000000000000000000000aa';

const upcoming = (over: Partial<DeployableMatch> = {}): DeployableMatch => ({
    status: 'NS',
    kickoffAt: IN(3600),
    contractAddress: null,
    hasActiveOperation: false,
    ...over,
});

describe('canDeployMatch', () => {
    it('allows an upcoming match outside the kickoff buffer', () => {
        expect(canDeployMatch(upcoming(), NOW)).toEqual({ ok: true });
    });

    it('refuses a match that already has a contract, before any other rule', () => {
        expect(canDeployMatch(upcoming({ contractAddress: CONTRACT, status: 'FT' }), NOW))
            .toEqual({ ok: false, reason: 'ALREADY_DEPLOYED' });
    });

    it('refuses while an admin operation is in flight', () => {
        expect(canDeployMatch(upcoming({ hasActiveOperation: true }), NOW))
            .toEqual({ ok: false, reason: 'OPERATION_IN_PROGRESS' });
    });

    it('refuses inside the default 120 s kickoff buffer, and honours a custom buffer', () => {
        expect(canDeployMatch(upcoming({ kickoffAt: IN(90) }), NOW)).toEqual({ ok: false, reason: 'KICKOFF_BUFFER' });
        expect(canDeployMatch(upcoming({ kickoffAt: IN(90) }), NOW, 60)).toEqual({ ok: true });
    });

    it.each([
        ['1H', 'LIVE'],
        ['HT', 'LIVE'],
        ['FT', 'FINISHED'],
        ['PEN', 'FINISHED'],
        ['PST', 'BLOCKED'],
        ['CANC', 'BLOCKED'],
        ['???', 'UNKNOWN_STATUS'],
    ])('maps status %s to %s', (status, reason) => {
        expect(canDeployMatch(upcoming({ status }), NOW)).toEqual({ ok: false, reason });
    });
});

describe('canRetryMarketsSetup', () => {
    const deployed = { status: 'NS', contractAddress: CONTRACT, hasActiveOperation: false };

    it('allows a deployed match that has not finished, even live', () => {
        expect(canRetryMarketsSetup(deployed)).toEqual({ ok: true });
        expect(canRetryMarketsSetup({ ...deployed, status: '2H' })).toEqual({ ok: true });
    });

    it('refuses without a contract, during an operation, or once finished', () => {
        expect(canRetryMarketsSetup({ ...deployed, contractAddress: null })).toEqual({ ok: false, reason: 'NOT_DEPLOYED' });
        expect(canRetryMarketsSetup({ ...deployed, hasActiveOperation: true }))
            .toEqual({ ok: false, reason: 'OPERATION_IN_PROGRESS' });
        expect(canRetryMarketsSetup({ ...deployed, status: 'AET' })).toEqual({ ok: false, reason: 'FINISHED' });
    });
});
