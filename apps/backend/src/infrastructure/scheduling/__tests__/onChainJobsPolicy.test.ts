import { describe, expect, it } from 'vitest';

import { onChainJobsEnabled } from '../onChainJobsPolicy';

describe('onChainJobsEnabled', () => {
    it('runs on-chain jobs by default in production only', () => {
        expect(onChainJobsEnabled('production', undefined)).toBe(true);
        expect(onChainJobsEnabled('development', undefined)).toBe(false);
        expect(onChainJobsEnabled('test', undefined)).toBe(false);
    });

    it('lets the flag override the default either way', () => {
        expect(onChainJobsEnabled('development', true)).toBe(true);
        expect(onChainJobsEnabled('production', false)).toBe(false);
    });
});
