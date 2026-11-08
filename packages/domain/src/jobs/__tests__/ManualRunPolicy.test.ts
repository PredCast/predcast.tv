import { describe, expect, it } from 'vitest';

import { canRunManually, cooldownRemainingMs, requiresConfirmation } from '../policies/ManualRunPolicy';

describe('canRunManually', () => {
    it('lets admins run safe jobs', () => {
        expect(canRunManually('admin', 'safe')).toBe(true);
        expect(canRunManually('super_admin', 'safe')).toBe(true);
    });

    it('keeps on-chain and quota jobs to super_admin', () => {
        expect(canRunManually('admin', 'on_chain')).toBe(false);
        expect(canRunManually('admin', 'quota')).toBe(false);
        expect(canRunManually('super_admin', 'on_chain')).toBe(true);
        expect(canRunManually('super_admin', 'quota')).toBe(true);
    });

    it('refuses moderator and finance', () => {
        expect(canRunManually('moderator', 'safe')).toBe(false);
        expect(canRunManually('finance', 'safe')).toBe(false);
    });
});

describe('requiresConfirmation', () => {
    it('asks for confirm on anything but safe jobs', () => {
        expect(requiresConfirmation('safe')).toBe(false);
        expect(requiresConfirmation('on_chain')).toBe(true);
        expect(requiresConfirmation('quota')).toBe(true);
    });
});

describe('cooldownRemainingMs', () => {
    const now = new Date('2026-11-08T14:00:00Z');

    it('is 0 without a previous request or after 60 s', () => {
        expect(cooldownRemainingMs(null, now)).toBe(0);
        expect(cooldownRemainingMs(new Date('2026-11-08T13:58:59Z'), now)).toBe(0);
    });

    it('returns the time left inside the window', () => {
        expect(cooldownRemainingMs(new Date('2026-11-08T13:59:30Z'), now)).toBe(30_000);
    });
});
