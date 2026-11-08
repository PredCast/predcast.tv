import { describe, expect, it } from 'vitest';

import { deploymentTierOf } from '../ports/IRuntimeEnvironment';

describe('deploymentTierOf', () => {
    it('reads production on mainnet as prod', () => {
        expect(deploymentTierOf('production', 'mainnet')).toBe('production');
    });

    it('reads production on testnet as staging', () => {
        expect(deploymentTierOf('production', 'testnet')).toBe('staging');
    });

    it('reads any non-production run as local, whatever the network', () => {
        expect(deploymentTierOf('development', 'testnet')).toBe('local');
        expect(deploymentTierOf('development', 'mainnet')).toBe('local');
        expect(deploymentTierOf('test', 'testnet')).toBe('local');
    });
});
