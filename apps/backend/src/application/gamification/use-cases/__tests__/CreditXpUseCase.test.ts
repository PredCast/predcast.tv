import { describe, expect, it } from 'vitest';

import { refKeys } from '@chiliztv/domain/gamification/catalog/refKeys';

import {
    accountFixture,
    doubleXpEventFixture,
    GAMI_LAUNCH_AT,
    GAMI_NOW,
    linkedWalletFixture,
} from '../../../../testing/fixtures/gamification.fixtures';
import { buildGamificationHarness } from '../../../../testing/gamification/gamificationHarness';

const HOUR_MS = 3_600_000;

function setup(options: Parameters<typeof buildGamificationHarness>[0] = {}) {
    const h = buildGamificationHarness(options);
    const account = accountFixture();
    const wallet = linkedWalletFixture(account, { linkedAt: new Date(GAMI_NOW.getTime() - 24 * HOUR_MS) });
    h.addAccount(account, [wallet]);
    return { h, accountId: account.id, wallet: wallet.walletAddress };
}

const chat = (id: number, at: Date = GAMI_NOW) => ({
    source: 'chat_message' as const,
    refKey: refKeys.chat(`msg-${id}`),
    occurredAt: at,
    requestedXp: 1,
    progress: [{ metric: 'chat_messages' as const, delta: 1, dailyCap: 50 }],
});

describe('CreditXpUseCase', () => {
    it('resolves the wallet to the account owning it at the time of the action', async () => {
        const { h, accountId, wallet } = setup();
        const before = await h.creditXp.execute({ ...chat(1, new Date(GAMI_NOW.getTime() - 48 * HOUR_MS)), actor: { kind: 'wallet', wallet } });
        expect(before).toEqual({ status: 'skipped', reason: 'no_account' });
        const after = await h.creditXp.execute({ ...chat(2), actor: { kind: 'wallet', wallet: wallet.toUpperCase().replace('0X', '0x') } });
        expect(after).toMatchObject({ status: 'credited', accountId, xp: 1 });
        const unknown = await h.creditXp.execute({ ...chat(3), actor: { kind: 'wallet', wallet: '0x' + 'f'.repeat(40) } });
        expect(unknown).toEqual({ status: 'skipped', reason: 'no_account' });
        expect(h.store.rows).toHaveLength(1);
    });

    it('caps on base XP then multiplies: 6 chats at ×2 give 10 XP, the 6th row at 0 with daily_cap', async () => {
        const { h, accountId } = setup();
        h.store.events = [doubleXpEventFixture()];
        for (let i = 0; i < 6; i++) await h.creditXp.execute({ ...chat(i), actor: { kind: 'account', accountId } });
        expect(h.store.rows.map((r) => r.xp)).toEqual([2, 2, 2, 2, 2, 0]);
        expect(h.store.rows[5].reason).toBe('daily_cap');
        expect(h.store.profile(accountId).xpTotal).toBe(10);
        // Progress keeps counting past the XP cap.
        expect((await h.store.progress.getSnapshot(accountId)).chat_messages?.value).toBe(6);
    });

    it('never multiplies a bet source, even during an event', async () => {
        const { h, accountId } = setup();
        h.store.events = [doubleXpEventFixture()];
        const r = await h.creditXp.execute({
            actor: { kind: 'account', accountId }, source: 'bet_volume', refKey: 'bet_volume:88888:0xabc:0',
            occurredAt: GAMI_NOW, requestedXp: 30,
        });
        expect(r).toMatchObject({ status: 'credited', xp: 30 });
        expect(h.store.rows[0]).toMatchObject({ multiplier: 1, doubleXpEventId: null });
    });

    it('is idempotent on ref_key and invalidates the gami:* read models of every linked wallet', async () => {
        const { h, accountId, wallet } = setup();
        await h.creditXp.execute({ ...chat(1), actor: { kind: 'account', accountId } });
        expect(await h.creditXp.execute({ ...chat(1), actor: { kind: 'account', accountId } })).toEqual({ status: 'duplicate', accountId });
        expect(h.store.rows).toHaveLength(1);
        expect(h.cache.deletedKeys).toEqual(
            expect.arrayContaining([`gami:me:${accountId}`, `gami:card:${wallet}`, `gami:badge:${wallet}`, `gami:profile:${wallet}`]),
        );
    });

    it('CA20 · a banned account gets a 0-XP row with reason and no progress; nothing is deferred', async () => {
        const { h, accountId, wallet } = setup();
        h.ban(wallet);
        const r = await h.creditXp.execute({ ...chat(1), actor: { kind: 'account', accountId } });
        expect(r).toMatchObject({ status: 'credited', xp: 0, reason: 'banned' });
        expect(await h.store.progress.getSnapshot(accountId)).toEqual({});
        h.unban(wallet);
        // The refused credit is not replayed once the ban is lifted.
        expect(await h.creditXp.execute({ ...chat(1), actor: { kind: 'account', accountId } })).toMatchObject({ status: 'duplicate' });
        expect(h.store.profile(accountId).xpTotal).toBe(0);
    });

    it('writes suspended credits at 0 with reason suspended', async () => {
        const { h, accountId } = setup();
        h.store.setProfile(accountId, { suspendedAt: GAMI_NOW, suspendedReason: 'abuse review' });
        expect(await h.creditXp.execute({ ...chat(1), actor: { kind: 'account', accountId } })).toMatchObject({ xp: 0, reason: 'suspended' });
    });

    it('CA19 · an action dated before the launch is skipped even when processed after it', async () => {
        const { h, accountId } = setup();
        const r = await h.creditXp.execute({ ...chat(1, new Date(GAMI_LAUNCH_AT.getTime() - 1)), actor: { kind: 'account', accountId } });
        expect(r).toEqual({ status: 'skipped', reason: 'not_launched' });
        const off = setup({ launch: { enabled: false } });
        expect(await off.h.creditXp.execute({ ...chat(1), actor: { kind: 'account', accountId: off.accountId } })).toEqual({
            status: 'skipped', reason: 'disabled',
        });
        expect([...h.store.rows, ...off.h.store.rows]).toHaveLength(0);
    });
});
