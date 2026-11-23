import type { DoubleXpEvent } from '@chiliztv/domain/gamification/entities/DoubleXpEvent';
import type { GamificationNotification } from '@chiliztv/domain/gamification/entities/GamificationNotification';
import type { GamificationProfile } from '@chiliztv/domain/gamification/entities/GamificationProfile';
import type { LedgerEntry } from '@chiliztv/domain/gamification/entities/LedgerEntry';
import type { ProgressValue, UnlockedAchievement } from '@chiliztv/domain/gamification/entities/Progress';
import type { ProgressMetric } from '@chiliztv/domain/gamification/catalog/sources';
import { levelOf } from '@chiliztv/domain/gamification/policies/levelCurve';
import { EMPTY_STREAK } from '@chiliztv/domain/gamification/policies/streakPolicy';
import type { ICycleRankRepository } from '@chiliztv/domain/gamification/repositories/ICycleRankRepository';
import type { IDoubleXpEventRepository } from '@chiliztv/domain/gamification/repositories/IDoubleXpEventRepository';
import type {
    CheckInWrite,
    CreditRequest,
    IGamificationLedgerRepository,
} from '@chiliztv/domain/gamification/repositories/IGamificationLedgerRepository';
import type { IGamificationNotificationRepository } from '@chiliztv/domain/gamification/repositories/IGamificationNotificationRepository';
import type { IGamificationProfileRepository } from '@chiliztv/domain/gamification/repositories/IGamificationProfileRepository';
import type { IGamificationProgressRepository } from '@chiliztv/domain/gamification/repositories/IGamificationProgressRepository';
import { ConflictError } from '@chiliztv/domain/shared/errors/ConflictError';

const unsupported = (name: string) => async (): Promise<never> => {
    throw new Error(`InMemoryGamificationStore: ${name} is not used by these tests`);
};

/**
 * Same semantics as the SQL functions of migration 044 (idempotent ref_key, cap on base XP then
 * multiplier, compare-and-set check-in, level_peak). Each write is synchronous, hence atomic
 * between two awaits — like the per-account row lock.
 */
export class InMemoryGamificationStore {
    readonly rows: LedgerEntry[] = [];
    readonly profileMap = new Map<string, GamificationProfile>();
    readonly counters = new Map<string, number>();
    readonly progressMap = new Map<string, Map<ProgressMetric, ProgressValue>>();
    readonly achievements: UnlockedAchievement[] = [];
    readonly notificationRows: GamificationNotification[] = [];
    events: DoubleXpEvent[] = [];
    bestRank: number | null = null;

    constructor(private readonly epoch: Date) {}

    profile(accountId: string): GamificationProfile {
        const existing = this.profileMap.get(accountId);
        if (existing) return existing;
        const created: GamificationProfile = {
            accountId, xpTotal: 0, level: 1, levelPeak: 1, streak: EMPTY_STREAK, selectedTitleId: null,
            selectedFrameId: null, showcase: [], suspendedAt: null, suspendedReason: null,
            createdAt: this.epoch, updatedAt: this.epoch,
        };
        this.profileMap.set(accountId, created);
        return created;
    }

    setProfile(accountId: string, patch: Partial<GamificationProfile>): void {
        this.profileMap.set(accountId, { ...this.profile(accountId), ...patch });
    }

    sumXp(accountId: string): number {
        return this.rows.filter((r) => r.accountId === accountId).reduce((a, r) => a + r.xp, 0);
    }

    private creditSync(req: CreditRequest) {
        const before = this.profile(req.accountId);
        if (this.rows.some((r) => r.refKey === req.refKey)) {
            return { inserted: false as const, newTotal: before.xpTotal, level: before.level };
        }
        let base = req.source === 'admin_adjustment' ? req.requestedXp : Math.max(req.requestedXp, 0);
        let reason = req.reason;
        if (reason !== null) base = 0;
        else if (req.dailyCap !== null) {
            const key = `${req.accountId}|${req.day}|xp:${req.source}`;
            const used = this.counters.get(key) ?? 0;
            base = Math.min(base, Math.max(req.dailyCap - used, 0));
            if (base < req.requestedXp) reason = 'daily_cap';
            this.counters.set(key, used + base);
        }
        let xp = Math.floor(base * req.multiplier);
        if (xp < 0 && before.xpTotal + xp < 0) xp = -before.xpTotal;
        const id = this.rows.length + 1;
        this.rows.push({
            id, accountId: req.accountId, source: req.source, refKey: req.refKey, day: req.day, occurredAt: req.occurredAt,
            requestedXp: req.requestedXp, baseXp: base, multiplier: req.multiplier, xp,
            doubleXpEventId: req.multiplier > 1 ? req.doubleXpEventId : null, reversesId: null, reason,
            metadata: req.metadata, createdAt: req.occurredAt,
        });
        for (const p of req.progress) {
            const metrics = this.progressMap.get(req.accountId) ?? new Map<ProgressMetric, ProgressValue>();
            const current = metrics.get(p.metric) ?? { value: 0, items: [] };
            if ('item' in p) {
                if (!current.items.includes(p.item)) metrics.set(p.metric, { value: current.value + 1, items: [...current.items, p.item] });
            } else {
                metrics.set(p.metric, { value: Math.max(current.value + p.delta, 0), items: current.items });
            }
            this.progressMap.set(req.accountId, metrics);
        }
        const total = before.xpTotal + xp;
        const level = levelOf(total);
        this.setProfile(req.accountId, { xpTotal: total, level, levelPeak: Math.max(before.levelPeak, level) });
        return {
            inserted: true as const, ledgerId: id, creditedXp: xp, newTotal: total,
            oldLevel: before.level, newLevel: level, previousPeak: before.levelPeak,
        };
    }

    private checkInSync(write: CheckInWrite) {
        const p = this.profile(write.accountId);
        if (p.streak.lastDay !== write.expectedLastDay || (p.streak.lastDay !== null && p.streak.lastDay >= write.day)) {
            return { applied: false as const };
        }
        this.setProfile(write.accountId, { streak: write.streak });
        const r = this.creditSync({
            accountId: write.accountId, source: 'check_in', refKey: `check_in:${write.accountId}:${write.day}`,
            day: write.day, occurredAt: write.now, requestedXp: write.xp, dailyCap: 100, multiplier: write.multiplier,
            doubleXpEventId: write.doubleXpEventId, reason: null, metadata: { streak: write.streak.current }, progress: [],
        });
        if (!r.inserted) throw new Error('check-in already in the ledger while the streak moved');
        return { applied: true as const, ...r };
    }

    readonly ledger: IGamificationLedgerRepository = {
        credit: async (req) => this.creditSync(req),
        checkIn: async (write) => this.checkInSync(write),
        reverse: unsupported('reverse'),
        findByRefKey: async (refKey) => this.rows.find((r) => r.refKey === refKey) ?? null,
        findLastCredited: unsupported('findLastCredited'),
        listReversibleByMarket: unsupported('listReversibleByMarket'),
        listReversibleByStream: unsupported('listReversibleByStream'),
        sumXpBySourceOnDay: unsupported('sumXpBySourceOnDay'),
        listForAccount: async (accountId, _beforeId, limit) =>
            this.rows.filter((r) => r.accountId === accountId).reverse().slice(0, limit),
    };

    readonly profiles: IGamificationProfileRepository = {
        findByAccountId: async (accountId) => this.profileMap.get(accountId) ?? null,
        findByAccountIds: async (ids) => ids.flatMap((id) => this.profileMap.get(id) ?? []),
        updateCosmetics: unsupported('updateCosmetics'),
        suspend: async (accountId, reason, at) => {
            if (this.profile(accountId).suspendedAt !== null) return false;
            this.setProfile(accountId, { suspendedAt: at, suspendedReason: reason, updatedAt: at });
            return true;
        },
        unsuspend: async (accountId, at) => {
            if (this.profileMap.get(accountId)?.suspendedAt == null) return false;
            this.setProfile(accountId, { suspendedAt: null, suspendedReason: null, updatedAt: at });
            return true;
        },
        rebuildFromLedger: async (apply) =>
            [...this.profileMap.values()].flatMap((p) => {
                const ledgerTotal = Math.max(this.sumXp(p.accountId), 0);
                const ledgerLevel = levelOf(ledgerTotal);
                if (ledgerTotal === p.xpTotal && ledgerLevel === p.level) return [];
                if (apply) this.setProfile(p.accountId, { xpTotal: ledgerTotal, level: ledgerLevel, levelPeak: Math.max(p.levelPeak, ledgerLevel) });
                return [{ accountId: p.accountId, storedTotal: p.xpTotal, ledgerTotal, storedLevel: p.level, ledgerLevel }];
            }),
    };

    readonly progress: IGamificationProgressRepository = {
        getSnapshot: async (accountId) => Object.fromEntries(this.progressMap.get(accountId) ?? new Map()),
        getDailyCounter: async (accountId, day, bucket) => this.counters.get(`${accountId}|${day}|${bucket}`) ?? 0,
        listAchievements: async (accountId) => this.achievements.filter((a) => a.accountId === accountId),
        unlockAchievement: async (w) => {
            if (this.achievements.some((a) => a.accountId === w.accountId && a.achievementId === w.achievementId && a.tier === w.tier)) return false;
            this.achievements.push({ ...w });
            return true;
        },
    };

    readonly notifications: IGamificationNotificationRepository = {
        create: async (accountId, payload, at) => {
            const n: GamificationNotification = { id: this.notificationRows.length + 1, accountId, payload, createdAt: at, seenAt: null };
            this.notificationRows.push(n);
            return n;
        },
        listUnseen: async (accountId) => this.notificationRows.filter((n) => n.accountId === accountId && n.seenAt === null),
        markSeen: unsupported('markSeen'),
        purgeSeenBefore: unsupported('purgeSeenBefore'),
    };

    readonly doubleXp: IDoubleXpEventRepository = {
        // Mirrors the `dxp_no_overlap` exclusion constraint (non-cancelled events only).
        create: async (input) => {
            if (this.events.some((e) => e.cancelledAt === null && e.startsAt < input.endsAt && input.startsAt < e.endsAt)) {
                throw new ConflictError('Double XP event overlaps another one', { code: 'DOUBLE_XP_OVERLAP' });
            }
            const event: DoubleXpEvent = {
                ...input,
                id: `00000000-0000-4000-9000-${(this.events.length + 1).toString(16).padStart(12, '0')}`,
                createdByWallet: input.createdByWallet.toLowerCase(),
                cancelledAt: null,
                cancelledByWallet: null,
            };
            this.events.push(event);
            return event;
        },
        cancel: async (id, byWallet, at) => {
            const index = this.events.findIndex((e) => e.id === id && e.cancelledAt === null);
            if (index < 0) return null;
            this.events[index] = { ...this.events[index], cancelledAt: at, cancelledByWallet: byWallet.toLowerCase() };
            return this.events[index];
        },
        findById: async (id) => this.events.find((e) => e.id === id) ?? null,
        listIntersecting: async (from, to) => this.events.filter((e) => e.startsAt < to && e.endsAt > from),
        listForAdmin: async (limit) =>
            [...this.events].sort((a, b) => b.startsAt.getTime() - a.startsAt.getTime()).slice(0, limit),
    };

    readonly cycleRanks: ICycleRankRepository = {
        saveSnapshot: unsupported('saveSnapshot'),
        findLastSnapshottedCycleId: unsupported('findLastSnapshottedCycleId'),
        findBestRankForAccount: async () => (this.bestRank === null ? null : { cycleId: 1, rank: this.bestRank }),
        findCrownHolder: unsupported('findCrownHolder'),
        listWonCycles: unsupported('listWonCycles'),
    };
}
