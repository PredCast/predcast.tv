import { createPublicKey, type JsonWebKey, type KeyObject } from 'node:crypto';
import jwt from 'jsonwebtoken';

import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { IIdentityTokenVerifier, IdentityVerification } from '@chiliztv/domain/identity/ports/IIdentityTokenVerifier';

import { checkDynamicClaims } from './dynamicClaims';

export type Jwk = JsonWebKey & { kid?: string };

export interface DynamicJwtVerifierOptions {
    /** Null disables account linking: every token is rejected as `not_configured`. */
    readonly environmentId: string | null;
    /** Origins the token's `aud` must match (the app's ALLOWED_ORIGINS); empty skips the check. */
    readonly allowedAudiences: ReadonlyArray<string>;
    readonly fetchJwks: (environmentId: string) => Promise<ReadonlyArray<Jwk>>;
}

const JWKS_TTL_MS = 60 * 60_000;
/** An unknown `kid` (key rotation) triggers at most one refresh per minute. */
const UNKNOWN_KID_REFRESH_MS = 60_000;

/** Verifies Dynamic session JWTs: RS256 signature against the environment JWKS, then the claims. */
export class DynamicJwtVerifier implements IIdentityTokenVerifier {
    private keys = new Map<string, KeyObject>();
    private fetchedAt = Number.NEGATIVE_INFINITY;

    constructor(
        private readonly options: DynamicJwtVerifierOptions,
        private readonly clock: IClock,
    ) {}

    async verify(token: string): Promise<IdentityVerification> {
        const environmentId = this.options.environmentId;
        if (!environmentId) return { ok: false, reason: 'not_configured' };

        const decoded = jwt.decode(token, { complete: true });
        if (!decoded || typeof decoded.payload === 'string' || !decoded.header.kid) return { ok: false, reason: 'malformed' };

        let key: KeyObject | null;
        try {
            key = await this.keyFor(environmentId, decoded.header.kid);
        } catch {
            return { ok: false, reason: 'keys_unavailable' };
        }
        if (!key) return { ok: false, reason: 'unknown_key' };

        let payload: unknown;
        try {
            payload = jwt.verify(token, key, {
                algorithms: ['RS256'],
                clockTimestamp: Math.floor(this.clock.now().getTime() / 1000),
            });
        } catch (err) {
            return { ok: false, reason: err instanceof jwt.TokenExpiredError ? 'expired' : 'bad_signature' };
        }
        return checkDynamicClaims(payload, environmentId, this.options.allowedAudiences);
    }

    private async keyFor(environmentId: string, kid: string): Promise<KeyObject | null> {
        const age = this.clock.now().getTime() - this.fetchedAt;
        if (age > JWKS_TTL_MS || (!this.keys.has(kid) && age > UNKNOWN_KID_REFRESH_MS)) {
            const jwks = await this.options.fetchJwks(environmentId);
            this.keys = new Map(
                jwks.flatMap((k) => (k.kid && k.kty === 'RSA' ? [[k.kid, createPublicKey({ key: k, format: 'jwk' })] as const] : [])),
            );
            this.fetchedAt = this.clock.now().getTime();
        }
        return this.keys.get(kid) ?? null;
    }
}
