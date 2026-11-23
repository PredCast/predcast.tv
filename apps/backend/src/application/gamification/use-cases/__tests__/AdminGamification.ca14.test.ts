import { describe, expect, it } from 'vitest';

import { refKeys } from '@chiliztv/domain/gamification/catalog/refKeys';
import { BusinessRuleError } from '@chiliztv/domain/shared/errors/BusinessRuleError';
import { ConflictError } from '@chiliztv/domain/shared/errors/ConflictError';
import type { DomainError } from '@chiliztv/domain/shared/errors/DomainError';
import { NotFoundError } from '@chiliztv/domain/shared/errors/NotFoundError';
import { ValidationError } from '@chiliztv/domain/shared/errors/ValidationError';
import { AdminCreateDoubleXpBodySchema } from '@chiliztv/shared';

import type { AuditContext } from '../../../admin/AuditContext';
import { accountFixture, GAMI_NOW, linkedWalletFixture, streakFixture } from '../../../../testing/fixtures/gamification.fixtures';
import { buildGamificationAdminHarness } from '../../../../testing/gamification/gamificationAdminHarness';

const H = 3_600_000;
const ADMIN: AuditContext = { actorWallet: '0x' + 'ad'.repeat(20), actorRole: 'admin', requestId: 'req-1' };
const SOURCES = ['check_in', 'watch', 'chat_message', 'stream_time'];
const plus = (hours: number, from: Date = GAMI_NOW) => new Date(from.getTime() + hours * H);
const draft = (startsAt: Date, hours = 24, sources: ReadonlyArray<string> = SOURCES) => ({
    name: 'Matchday double XP',
    multiplier: 2,
    sources,
    startsAt,
    endsAt: plus(hours, startsAt),
});
const UUID = (n: number) => `11111111-1111-4111-8111-${n.toString().padStart(12, '0')}`;

function setup(options: Parameters<typeof buildGamificationAdminHarness>[0] = {}) {
    const h = buildGamificationAdminHarness(options);
    const account = accountFixture();
    const wallet = linkedWalletFixture(account);
    h.addAccount(account, [wallet]);
    return { h, accountId: account.id, wallet: wallet.walletAddress };
}

/** Rejects with a domain error of `type`, carrying `code` in its details. */
async function expectRejects(promise: Promise<unknown>, type: abstract new (...args: never[]) => DomainError, code?: string) {
    const error = await promise.then(() => null, (e: unknown) => e);
    expect(error).toBeInstanceOf(type);
    if (code) expect((error as DomainError).details).toMatchObject({ code });
}

const chat = (accountId: string, id: number, at: Date) => ({
    actor: { kind: 'account' as const, accountId },
    source: 'chat_message' as const,
    refKey: refKeys.chat(`msg-${id}`),
    occurredAt: at,
    requestedXp: 1,
});

describe('CA14 · double XP created from the admin', () => {
    it('×2 running: day-11 check-in earns 200 XP, chat is capped at 10 XP, bet_volume is not boosted', async () => {
        const { h, accountId } = setup();
        const event = await h.createDoubleXp.execute(draft(plus(24)), ADMIN);
        expect(event).toMatchObject({ status: 'upcoming', multiplier: 2, createdByWallet: ADMIN.actorWallet });

        h.clock.set(plus(25));
        h.store.setProfile(accountId, { streak: streakFixture({ current: 10, lastDay: '2027-03-01' }) });
        expect(await h.checkIn.execute(accountId)).toMatchObject({ credited: true, xp: 200, multiplier: 2, streak: 11 });

        for (let i = 0; i < 6; i++) await h.creditXp.execute(chat(accountId, i, h.clock.now()));
        const chatXp = h.store.rows.filter((r) => r.source === 'chat_message').reduce((sum, r) => sum + r.xp, 0);
        expect(chatXp).toBe(10);

        const bet = await h.creditXp.execute({
            actor: { kind: 'account', accountId }, source: 'bet_volume', refKey: 'bet_volume:88888:0xabc:0',
            occurredAt: h.clock.now(), requestedXp: 30,
        });
        expect(bet).toMatchObject({ status: 'credited', xp: 30 });
        expect(h.store.rows.find((r) => r.source === 'bet_volume')).toMatchObject({ multiplier: 1, doubleXpEventId: null });
    });

    it('refuses a bet source with 400, in the body schema and in the use case', async () => {
        const { h } = setup();
        const body = { name: 'Bets ×2', multiplier: 2, sources: ['bet_volume'], startsAt: plus(48).toISOString(), endsAt: plus(60).toISOString() };
        expect(AdminCreateDoubleXpBodySchema.safeParse(body).success).toBe(false);
        await expectRejects(h.createDoubleXp.execute(draft(plus(48), 12, ['check_in', 'bet_volume']), ADMIN), ValidationError, 'DOUBLE_XP_INELIGIBLE_SOURCE');
        expect(h.store.events).toHaveLength(0);
        expect(h.audits).toHaveLength(0);
    });

    it('refuses a start less than 24 h away with 400 DOUBLE_XP_NOTICE; exactly 24 h passes', async () => {
        const { h } = setup();
        await expectRejects(h.createDoubleXp.execute(draft(plus(23.99)), ADMIN), ValidationError, 'DOUBLE_XP_NOTICE');
        await expect(h.createDoubleXp.execute(draft(plus(24)), ADMIN)).resolves.toMatchObject({ status: 'upcoming' });
    });

    it('refuses an overlap with 409 DOUBLE_XP_OVERLAP; back-to-back is fine', async () => {
        const { h } = setup();
        await h.createDoubleXp.execute(draft(plus(48)), ADMIN);
        await expectRejects(h.createDoubleXp.execute(draft(plus(60)), ADMIN), ConflictError, 'DOUBLE_XP_OVERLAP');
        await expect(h.createDoubleXp.execute(draft(plus(72)), ADMIN)).resolves.toBeDefined();
    });

    it('refuses the 5th event of the Paris month with 400; the Paris month boundary opens a new quota', async () => {
        const { h } = setup();
        for (const day of [5, 10, 15, 20]) await h.createDoubleXp.execute(draft(new Date(`2027-03-${String(day).padStart(2, '0')}T09:00:00Z`)), ADMIN);
        await expectRejects(
            h.createDoubleXp.execute(draft(new Date('2027-03-25T09:00:00Z')), ADMIN),
            ValidationError,
            'DOUBLE_XP_MONTHLY_LIMIT',
        );
        // 22:30 UTC on 31 March is 00:30 on 1 April in Paris (UTC+2 since 28 March).
        await expect(h.createDoubleXp.execute(draft(new Date('2027-03-31T22:30:00Z')), ADMIN)).resolves.toBeDefined();
        const list = await h.listDoubleXp.execute(50);
        expect(list.monthlyUsage).toEqual([
            { month: '2027-03', used: 4, limit: 4 },
            { month: '2027-04', used: 1, limit: 4 },
        ]);
    });

    it('records every create and cancel in audit_log and drops the cached banner', async () => {
        const { h } = setup();
        const event = await h.createDoubleXp.execute(draft(plus(48)), ADMIN);
        await h.cancelDoubleXp.execute(event.id, 'Fixture postponed', ADMIN);
        expect(h.audits.map((a) => [a.action, a.targetType, a.targetId, a.actorWallet])).toEqual([
            ['gamification.double_xp.create', 'double_xp_event', event.id, ADMIN.actorWallet],
            ['gamification.double_xp.cancel', 'double_xp_event', event.id, ADMIN.actorWallet],
        ]);
        expect(h.audits[1]).toMatchObject({ oldValue: { status: 'upcoming' }, newValue: { note: 'Fixture postponed' }, requestId: 'req-1' });
        expect(h.cache.deletedKeys.filter((k) => k === 'gami:double-xp:current')).toHaveLength(2);
    });
});

describe('CancelDoubleXpEventUseCase', () => {
    it('stops boosting from the cancellation on, without touching XP already credited', async () => {
        const { h, accountId } = setup();
        const event = await h.createDoubleXp.execute(draft(plus(24)), ADMIN);
        h.clock.set(plus(25));
        await h.creditXp.execute(chat(accountId, 1, h.clock.now()));
        expect(await h.cancelDoubleXp.execute(event.id, 'Stopped early', ADMIN)).toMatchObject({ status: 'cancelled' });
        h.clock.advanceByMin(1);
        await h.creditXp.execute(chat(accountId, 2, h.clock.now()));
        expect(h.store.rows.map((r) => r.xp)).toEqual([2, 1]);
    });

    it('answers 404 for an unknown event, 409 when already cancelled or over', async () => {
        const { h } = setup();
        await expectRejects(h.cancelDoubleXp.execute(UUID(9), 'Nope', ADMIN), NotFoundError);
        const event = await h.createDoubleXp.execute(draft(plus(48)), ADMIN);
        await h.cancelDoubleXp.execute(event.id, 'Once', ADMIN);
        await expectRejects(h.cancelDoubleXp.execute(event.id, 'Twice', ADMIN), ConflictError, 'DOUBLE_XP_ALREADY_CANCELLED');
        const ended = await h.createDoubleXp.execute(draft(plus(96)), ADMIN);
        h.clock.set(plus(200));
        await expectRejects(h.cancelDoubleXp.execute(ended.id, 'Too late', ADMIN), ConflictError, 'DOUBLE_XP_ENDED');
    });

    it('lists events latest first with their status and the §3.6 rules', async () => {
        const { h } = setup();
        await h.createDoubleXp.execute(draft(plus(24), 24), ADMIN);
        await h.createDoubleXp.execute(draft(plus(96), 12), ADMIN);
        h.clock.set(plus(30));
        const list = await h.listDoubleXp.execute(50);
        expect(list.items.map((e) => e.status)).toEqual(['upcoming', 'running']);
        expect(list.rules).toMatchObject({
            eligibleSources: SOURCES, multipliers: [1.25, 1.5, 1.75, 2], minNoticeHours: 24, maxDurationHours: 72, maxPerMonth: 4, enabled: true,
        });
    });
});

describe('Gamification suspension (§10.2)', () => {
    it('suspends with a reason: no XP, no check-in, audited; unsuspend restores credits', async () => {
        const { h, accountId, wallet } = setup();
        expect(await h.suspension.suspend(wallet, 'Multi-account farming', ADMIN)).toEqual({ suspendedAt: GAMI_NOW.toISOString() });
        expect(await h.checkIn.execute(accountId)).toMatchObject({ credited: false, reason: 'suspended' });
        expect(await h.creditXp.execute(chat(accountId, 1, GAMI_NOW))).toMatchObject({ xp: 0, reason: 'suspended' });
        await expectRejects(h.suspension.suspend(wallet, 'Again', ADMIN), ConflictError, 'GAMIFICATION_ALREADY_SUSPENDED');

        h.clock.advanceByMin(5);
        expect(await h.suspension.unsuspend(wallet.toUpperCase().replace('0X', '0x'), 'Appeal accepted', ADMIN)).toEqual({ suspendedAt: null });
        expect(await h.creditXp.execute(chat(accountId, 2, h.clock.now()))).toMatchObject({ xp: 1, reason: null });
        await expectRejects(h.suspension.unsuspend(wallet, 'Again', ADMIN), ConflictError, 'GAMIFICATION_NOT_SUSPENDED');

        expect(h.audits.map((a) => [a.action, a.targetId])).toEqual([
            ['gamification.account.suspend', accountId],
            ['gamification.account.unsuspend', accountId],
        ]);
        expect(h.audits[0].newValue).toMatchObject({ reason: 'Multi-account farming' });
        expect(h.audits[1].oldValue).toMatchObject({ reason: 'Multi-account farming', suspendedAt: GAMI_NOW.toISOString() });
    });

    it('answers 404 for a wallet without account', async () => {
        const { h } = setup();
        await expectRejects(h.suspension.suspend('0x' + 'f'.repeat(40), 'Unknown', ADMIN), NotFoundError);
    });
});

describe('Manual XP adjustment (admin_adjustment)', () => {
    it('writes a new ledger row only, audited, idempotent on adjustmentId, bounded at 0', async () => {
        const { h, accountId, wallet } = setup();
        await h.creditXp.execute(chat(accountId, 1, GAMI_NOW));
        const before = h.store.rows.map((r) => ({ ...r }));

        const plusOne = await h.adminAdjust.execute(wallet, { xp: 500, note: 'Bug compensation', adjustmentId: UUID(1) }, ADMIN);
        expect(plusOne).toMatchObject({ status: 'credited', xp: 500 });
        expect(await h.adminAdjust.execute(wallet, { xp: 500, note: 'Retry', adjustmentId: UUID(1) }, ADMIN)).toEqual({
            status: 'duplicate', xp: null, ledgerId: null,
        });
        const minus = await h.adminAdjust.execute(wallet, { xp: -10_000, note: 'Farming removed', adjustmentId: UUID(2) }, ADMIN);
        expect(minus).toMatchObject({ status: 'credited', xp: -501 });

        expect(h.store.rows.slice(0, before.length)).toEqual(before);
        expect(h.store.rows.filter((r) => r.source === 'admin_adjustment').map((r) => r.refKey)).toEqual([`admin:${UUID(1)}`, `admin:${UUID(2)}`]);
        expect(h.store.profile(accountId).xpTotal).toBe(0);
        expect(h.audits.filter((a) => a.action === 'gamification.xp.adjust')).toHaveLength(2);
    });

    it('still applies to a suspended account, and is refused (422) while the gamification is off', async () => {
        const { h, wallet } = setup();
        await h.suspension.suspend(wallet, 'Investigation', ADMIN);
        await expect(h.adminAdjust.execute(wallet, { xp: 50, note: 'Manual fix', adjustmentId: UUID(3) }, ADMIN)).resolves.toMatchObject({ xp: 50 });

        const off = setup({ launch: { enabled: false } });
        await expectRejects(
            off.h.adminAdjust.execute(off.wallet, { xp: 50, note: 'Manual fix', adjustmentId: UUID(4) }, ADMIN),
            BusinessRuleError,
            'GAMIFICATION_CLOSED',
        );
    });
});

describe('GetAccountGamificationUseCase (player block)', () => {
    it('shows level, XP, streak, last ledger credits with the adjustment note, and the suspension', async () => {
        const { h, accountId, wallet } = setup();
        await h.checkIn.execute(accountId);
        await h.adminAdjust.execute(wallet, { xp: 450, note: 'Launch gift', adjustmentId: UUID(5) }, ADMIN);
        await h.suspension.suspend(wallet, 'Review', ADMIN);

        const view = await h.accountView.execute(wallet);
        expect(view.state).toBe('live');
        expect(view.account).toMatchObject({
            accountId, hasProfile: true, xpTotal: 500, level: 3, rankTier: 'rookie', levelStart: 300, nextLevelAt: 600,
            streak: { current: 1, best: 1, alive: true, freezes: 0, lastDay: '2027-03-01' },
            suspendedReason: 'Review', linkedWallets: [wallet],
        });
        expect(view.account?.recentLedger.map((r) => [r.source, r.xp, r.note])).toEqual([
            ['admin_adjustment', 450, 'Launch gift'],
            ['check_in', 50, null],
        ]);
    });

    it('returns no account for an unknown wallet and reports the flag state', async () => {
        const { h } = setup({ launch: { enabled: false } });
        expect(await h.accountView.execute('0x' + 'e'.repeat(40))).toEqual({ wallet: '0x' + 'e'.repeat(40), state: 'disabled', account: null });
    });
});
