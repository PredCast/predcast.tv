import { generateKeyPairSync, type KeyObject } from 'node:crypto';
import jwt from 'jsonwebtoken';
import { describe, expect, it, vi } from 'vitest';

import { MockClock } from '../../../testing/clock/MockClock';
import { DynamicJwtVerifier, type Jwk } from '../DynamicJwtVerifier';

const ENV = '8d9de814-ed4b-479a-ab44-277b7ca94076';
const OTHER_ENV = 'e25c3a74-6db2-4f48-960c-cf885a4c25bc';
const NOW = new Date('2026-11-23T12:00:00Z');
const iat = Math.floor(NOW.getTime() / 1000);
const WALLET = '0x0A5a9A0D53De4cbD8AD8a1Cc28b563C5D6AD2a9F';

const pair = () => generateKeyPairSync('rsa', { modulusLength: 2048 });
const signing = pair();
const intruder = pair();
const jwkOf = (key: KeyObject, kid: string): Jwk => ({ ...key.export({ format: 'jwk' }), kid, alg: 'RS256', use: 'sig' });

const claims = (over: Record<string, unknown> = {}) => ({
    sub: 'dyn-user-1',
    iss: `app.dynamicauth.com/${ENV}`,
    environment_id: ENV,
    aud: 'http://localhost:3000',
    scope: 'user:basic',
    iat,
    exp: iat + 7200,
    verified_credentials: [
        { format: 'blockchain', chain: 'eip155', address: WALLET, wallet_name: 'metamask' },
        { format: 'email', email: 'fan@example.com' },
    ],
    ...over,
});
const sign = (payload: object, key: KeyObject = signing.privateKey, kid = 'k1') => jwt.sign(payload, key, { algorithm: 'RS256', keyid: kid });

function verifier(environmentId: string | null = ENV) {
    const fetchJwks = vi.fn(async () => [jwkOf(signing.publicKey, 'k1')]);
    const v = new DynamicJwtVerifier({ environmentId, allowedAudiences: ['http://localhost:3000/'], fetchJwks }, new MockClock(NOW));
    return { v, fetchJwks };
}

describe('DynamicJwtVerifier', () => {
    it('accepts a valid token and returns the lower-cased EVM wallets only', async () => {
        const result = await verifier().v.verify(sign(claims()));
        expect(result).toEqual({ ok: true, identity: { subject: 'dyn-user-1', wallets: [WALLET.toLowerCase()], email: null } });
    });

    it.each([
        ['expired', claims({ exp: iat - 1, iat: iat - 7200 })],
        ['wrong_issuer', claims({ iss: 'app.dynamicauth.com/evil' })],
        ['wrong_issuer', claims({ iss: `app.dynamicauth.com/${OTHER_ENV}`, environment_id: OTHER_ENV })],
        ['wrong_environment', claims({ environment_id: OTHER_ENV })],
        ['wrong_audience', claims({ aud: 'https://phishing.example' })],
        ['missing_scope', claims({ scope: '' })],
        ['additional_auth_required', claims({ scope: 'user:basic requiresAdditionalAuth' })],
    ])('rejects %s', async (reason, payload) => {
        expect(await verifier().v.verify(sign(payload))).toEqual({ ok: false, reason });
    });

    it('rejects a token signed by another key under a known kid', async () => {
        expect(await verifier().v.verify(sign(claims(), intruder.privateKey, 'k1'))).toEqual({ ok: false, reason: 'bad_signature' });
    });

    it('rejects an unknown kid after one JWKS refresh', async () => {
        const { v, fetchJwks } = verifier();
        expect(await v.verify(sign(claims(), signing.privateKey, 'k9'))).toEqual({ ok: false, reason: 'unknown_key' });
        expect(fetchJwks).toHaveBeenCalledTimes(1);
    });

    it('caches the JWKS between verifications', async () => {
        const { v, fetchJwks } = verifier();
        await v.verify(sign(claims()));
        await v.verify(sign(claims()));
        expect(fetchJwks).toHaveBeenCalledTimes(1);
    });

    it('rejects everything when no environment is configured, and malformed input', async () => {
        expect(await verifier(null).v.verify(sign(claims()))).toEqual({ ok: false, reason: 'not_configured' });
        expect(await verifier().v.verify('not-a-jwt')).toEqual({ ok: false, reason: 'malformed' });
    });

    it('reports an unreachable JWKS endpoint', async () => {
        const v = new DynamicJwtVerifier(
            { environmentId: ENV, allowedAudiences: [], fetchJwks: async () => { throw new Error('down'); } },
            new MockClock(NOW),
        );
        expect(await v.verify(sign(claims()))).toEqual({ ok: false, reason: 'keys_unavailable' });
    });
});
