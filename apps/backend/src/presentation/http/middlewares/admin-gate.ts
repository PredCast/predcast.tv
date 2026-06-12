import { createHmac, timingSafeEqual } from 'crypto';
import { env } from '../../../infrastructure/config/environment';

const GATE_TTL_MS = 12 * 60 * 60 * 1000;

function sign(payload: string): string {
    return createHmac('sha256', env.JWT_SECRET).update(payload).digest('hex');
}

/** Constant-time code check — null when the gate is disabled (no code configured). */
export function verifyGateCode(code: string): boolean | null {
    const expected = env.ADMIN_GATE_CODE;
    if (!expected) return null;
    const a = Buffer.from(code);
    const b = Buffer.from(expected);
    return a.length === b.length && timingSafeEqual(a, b);
}

/** HMAC gate token `expiry.signature` — stateless, bound to JWT_SECRET. */
export function issueGateToken(now: Date): string {
    const expiry = String(now.getTime() + GATE_TTL_MS);
    return `${expiry}.${sign(expiry)}`;
}

export function isGateTokenValid(token: string | undefined, now: Date): boolean {
    if (!env.ADMIN_GATE_CODE) return true; // gate disabled
    if (!token) return false;
    const [expiry, signature] = token.split('.');
    if (!expiry || !signature) return false;
    if (Number(expiry) < now.getTime()) return false;
    const expected = sign(expiry);
    const a = Buffer.from(signature);
    const b = Buffer.from(expected);
    return a.length === b.length && timingSafeEqual(a, b);
}
