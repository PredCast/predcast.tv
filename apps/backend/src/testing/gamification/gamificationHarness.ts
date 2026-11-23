import type { IAuditTrail, AuditEntry } from '@chiliztv/domain/admin/ports/IAuditTrail';
import type { GamificationLaunchConfig } from '@chiliztv/domain/gamification/policies/launchPolicy';
import type { Account, WalletLink } from '@chiliztv/domain/identity/entities/Account';
import type { IAccountRepository } from '@chiliztv/domain/identity/repositories/IAccountRepository';
import type { Ban } from '@chiliztv/domain/reporting/entities/Ban';
import type { IBanRepository } from '@chiliztv/domain/reporting/repositories/IBanRepository';
import type { ILogger } from '@chiliztv/domain/shared/ports/ILogger';
import type { IRateLimitService, RateLimitCheckOptions, RateLimitDecision } from '@chiliztv/domain/shared/ports/IRateLimitService';

import { IsAccountBannedUseCase } from '../../application/identity/use-cases/IsAccountBannedUseCase';
import { GamificationAfterCredit } from '../../application/gamification/services/GamificationAfterCredit';
import { AdjustXpUseCase } from '../../application/gamification/use-cases/AdjustXpUseCase';
import { CheckInUseCase } from '../../application/gamification/use-cases/CheckInUseCase';
import { CreditXpUseCase } from '../../application/gamification/use-cases/CreditXpUseCase';
import { EvaluateAchievementsUseCase } from '../../application/gamification/use-cases/EvaluateAchievementsUseCase';
import { RebuildProfilesUseCase } from '../../application/gamification/use-cases/RebuildProfilesUseCase';
import { InMemoryCache } from '../cache/InMemoryCache';
import { MockClock } from '../clock/MockClock';
import { GAMI_LAUNCH_AT, GAMI_NOW } from '../fixtures/gamification.fixtures';
import { InMemoryGamificationStore } from './InMemoryGamificationStore';

/** Fixed-window limiter on the MockClock, like RedisRateLimitService; `open` lets every call through. */
export class FakeRateLimiter implements IRateLimitService {
    open = false;
    private readonly hits = new Map<string, { count: number; resetAt: number }>();
    constructor(private readonly clock: MockClock) {}
    async check(opts: RateLimitCheckOptions): Promise<RateLimitDecision> {
        const now = this.clock.now().getTime();
        const key = `${opts.bucket}:${opts.identifier}`;
        const hit = this.hits.get(key);
        const window = hit && hit.resetAt > now ? hit : { count: 0, resetAt: now + opts.windowSeconds * 1000 };
        window.count += 1;
        this.hits.set(key, window);
        if (!this.open && window.count > opts.limit) return { allowed: false, retryAfterSeconds: 1 };
        return { allowed: true, remaining: Math.max(0, opts.limit - window.count), resetAt: new Date(window.resetAt) };
    }
}

const silentLogger: ILogger = { info: () => undefined, warn: () => undefined, error: () => undefined, debug: () => undefined };

export interface HarnessOptions {
    readonly now?: Date;
    readonly launch?: Partial<GamificationLaunchConfig>;
}

/** Use cases of steps 03 wired on in-memory adapters and a MockClock. */
export function buildGamificationHarness(options: HarnessOptions = {}) {
    const clock = new MockClock(options.now ?? GAMI_NOW);
    const store = new InMemoryGamificationStore(GAMI_LAUNCH_AT);
    const cache = new InMemoryCache();
    const rateLimit = new FakeRateLimiter(clock);
    const accountsById = new Map<string, Account>();
    const links: WalletLink[] = [];
    const bannedWallets = new Set<string>();
    const audits: AuditEntry[] = [];
    const config = { launch: { enabled: true, launchAt: GAMI_LAUNCH_AT, ...options.launch } };

    const accounts: IAccountRepository = {
        findById: async (id) => accountsById.get(id) ?? null,
        findLinks: async (wallets) => links.filter((l) => wallets.map((w) => w.toLowerCase()).includes(l.walletAddress)),
        findActiveLinksOfAccount: async (id) => links.filter((l) => l.accountId === id && l.unlinkedAt === null),
        upsertByDynamicUserId: async () => { throw new Error('unused'); },
        link: async () => { throw new Error('unused'); },
        relink: async () => { throw new Error('unused'); },
        unlink: async () => { throw new Error('unused'); },
    };
    // Only the presence of an active ban matters to IsAccountBannedUseCase.
    const bans = {
        findActiveBan: async (wallet: string) => (bannedWallets.has(wallet) ? ({} as Ban) : null),
    } as unknown as IBanRepository;
    const audit: IAuditTrail = { record: async (entry) => { audits.push(entry); } };

    const isBanned = new IsAccountBannedUseCase(accounts, bans);
    const afterCredit = new GamificationAfterCredit(store.notifications, accounts, cache, silentLogger);
    const creditXp = new CreditXpUseCase(config, accounts, store.profiles, store.ledger, store.doubleXp, isBanned, afterCredit);
    const evaluate = new EvaluateAchievementsUseCase(config, store.profiles, store.progress, store.cycleRanks, store.notifications, creditXp);
    const checkIn = new CheckInUseCase(
        config, clock, rateLimit, store.profiles, store.ledger, store.doubleXp, store.notifications, silentLogger,
        isBanned, afterCredit, evaluate,
    );
    const adjustXp = new AdjustXpUseCase(accounts, audit, clock, creditXp);
    const rebuild = new RebuildProfilesUseCase(store.profiles, afterCredit);

    return {
        clock, store, cache, rateLimit, config, audits, creditXp, evaluate, checkIn, adjustXp, rebuild,
        addAccount(account: Account, wallets: ReadonlyArray<WalletLink>): void {
            accountsById.set(account.id, account);
            links.push(...wallets);
        },
        ban(wallet: string): void { bannedWallets.add(wallet.toLowerCase()); },
        unban(wallet: string): void { bannedWallets.delete(wallet.toLowerCase()); },
        /** Next call after the rate-limit window. */
        advanceMinutes(minutes: number): void { clock.advanceByMin(minutes); },
    };
}

export type GamificationHarness = ReturnType<typeof buildGamificationHarness>;
