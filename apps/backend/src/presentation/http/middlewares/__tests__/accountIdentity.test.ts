import type { NextFunction, Request, Response } from 'express';
import { describe, expect, it, vi } from 'vitest';

const flags = vi.hoisted(() => ({ AUTH_REQUIRE_DYNAMIC_JWT: false }));
vi.mock('../../../../infrastructure/config/environment', () => ({ env: flags }));
vi.mock('../../../../infrastructure/logging/logger', () => ({ logger: { warn: vi.fn(), info: vi.fn() } }));

import { AccountRequiredError } from '@chiliztv/domain/identity/errors/AccountRequiredError';

import { sessionDynamicUserId } from '../../helpers/sessionIdentity';
import { requireAccount } from '../require-account.middleware';

const req = (user: Request['user']): Request => ({ user, path: '/follows' } as Request);
const legacy = { email: null, walletAddress: '0xabc', role: 'USER' };
const proven = { ...legacy, accountId: 'acc-1', dynamicUserId: 'dyn-1' };

describe('requireAccount (CA1)', () => {
    it('answers 401 ACCOUNT_REQUIRED for a JWT without accountId', () => {
        const next = vi.fn() as unknown as NextFunction;
        requireAccount(req(legacy), {} as Response, next);
        const err = (next as unknown as ReturnType<typeof vi.fn>).mock.calls[0][0];
        expect(err).toBeInstanceOf(AccountRequiredError);
        expect(err).toMatchObject({ statusCode: 401, code: 'ACCOUNT_REQUIRED' });
    });

    it('lets an account-linked JWT through', () => {
        const next = vi.fn() as unknown as NextFunction;
        requireAccount(req(proven), {} as Response, next);
        expect(next).toHaveBeenCalledWith();
    });
});

describe('sessionDynamicUserId (D3)', () => {
    it('takes the identity from the JWT and ignores what the client sent', () => {
        expect(sessionDynamicUserId(req(proven), 'someone-else')).toBe('dyn-1');
    });

    it('falls back to the claimed id for a legacy token while the flag is off', () => {
        flags.AUTH_REQUIRE_DYNAMIC_JWT = false;
        expect(sessionDynamicUserId(req(legacy), 'dyn-legacy')).toBe('dyn-legacy');
    });

    it('refuses a legacy token once AUTH_REQUIRE_DYNAMIC_JWT is on', () => {
        flags.AUTH_REQUIRE_DYNAMIC_JWT = true;
        expect(() => sessionDynamicUserId(req(legacy), 'dyn-legacy')).toThrow(AccountRequiredError);
        flags.AUTH_REQUIRE_DYNAMIC_JWT = false;
    });
});
