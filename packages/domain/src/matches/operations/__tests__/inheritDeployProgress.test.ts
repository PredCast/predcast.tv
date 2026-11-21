import { describe, expect, it } from 'vitest';

import type { MatchOperation } from '../MatchOperation';
import { inheritDeployProgress } from '../inheritDeployProgress';

const AT = new Date('2026-11-21T15:00:00Z');

function op(over: Partial<MatchOperation> = {}): MatchOperation {
    return {
        id: 'op', matchId: 999000, kind: 'deploy', status: 'failed', chainId: 88882, params: {},
        progress: { deployTxHash: '0xhash', deployNonce: 16 }, error: 'timeout', requestedBy: '0xadmin', attempts: 1,
        createdAt: AT, startedAt: AT, heartbeatAt: AT, finishedAt: AT, ...over,
    };
}

describe('inheritDeployProgress', () => {
    it('hands over the tx of a failed deploy that never saw its contract', () => {
        expect(inheritDeployProgress(op(), 88882)).toEqual({ deployTxHash: '0xhash', deployNonce: 16 });
    });

    it('keeps the hash alone when the nonce was not recorded', () => {
        expect(inheritDeployProgress(op({ progress: { deployTxHash: '0xhash' } }), 88882)).toEqual({ deployTxHash: '0xhash' });
    });

    it('starts fresh without a previous failed deploy on the same chain', () => {
        expect(inheritDeployProgress(undefined, 88882)).toEqual({});
        expect(inheritDeployProgress(op({ status: 'succeeded' }), 88882)).toEqual({});
        expect(inheritDeployProgress(op({ kind: 'retry_setup' }), 88882)).toEqual({});
        expect(inheritDeployProgress(op(), 8453)).toEqual({});
    });

    it('starts fresh when the failed deploy never sent a tx or already has its contract', () => {
        expect(inheritDeployProgress(op({ progress: {} }), 88882)).toEqual({});
        expect(inheritDeployProgress(op({ progress: { deployTxHash: '0xhash', contractAddress: '0xc0' } }), 88882)).toEqual({});
    });
});
