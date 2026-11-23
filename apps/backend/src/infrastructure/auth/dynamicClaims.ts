import { z } from 'zod';

import type { IdentityVerification } from '@chiliztv/domain/identity/ports/IIdentityTokenVerifier';

const EVM_ADDRESS = /^0x[0-9a-fA-F]{40}$/;

const DynamicClaimsSchema = z.object({
    sub: z.string().min(1),
    iss: z.string(),
    environment_id: z.string(),
    aud: z.union([z.string(), z.array(z.string())]),
    scope: z.string().default(''),
    email: z.string().nullable().optional(),
    verified_credentials: z
        .array(z.object({ format: z.string(), chain: z.string().optional(), address: z.string().optional() }).passthrough())
        .default([]),
});

const stripSlash = (url: string) => url.replace(/\/+$/, '');

/** Claim checks of a signature-verified Dynamic JWT (`legacyToken`, the one carrying verified_credentials). */
export function checkDynamicClaims(
    payload: unknown,
    environmentId: string,
    allowedAudiences: ReadonlyArray<string>,
): IdentityVerification {
    const parsed = DynamicClaimsSchema.safeParse(payload);
    if (!parsed.success) return { ok: false, reason: 'malformed' };
    const claims = parsed.data;

    if (claims.iss !== `app.dynamicauth.com/${environmentId}`) return { ok: false, reason: 'wrong_issuer' };
    if (claims.environment_id !== environmentId) return { ok: false, reason: 'wrong_environment' };

    const audiences = (Array.isArray(claims.aud) ? claims.aud : [claims.aud]).map(stripSlash);
    const allowed = new Set(allowedAudiences.map(stripSlash));
    if (allowed.size > 0 && !audiences.some((a) => allowed.has(a))) return { ok: false, reason: 'wrong_audience' };

    const scopes = claims.scope.split(/\s+/).filter(Boolean);
    if (scopes.includes('requiresAdditionalAuth')) return { ok: false, reason: 'additional_auth_required' };
    if (!scopes.includes('user:basic')) return { ok: false, reason: 'missing_scope' };

    const wallets = [...new Set(
        claims.verified_credentials
            .filter((c) => c.format === 'blockchain' && c.chain === 'eip155' && EVM_ADDRESS.test(c.address ?? ''))
            .map((c) => (c.address ?? '').toLowerCase()),
    )];
    return { ok: true, identity: { subject: claims.sub, wallets, email: claims.email ?? null } };
}
