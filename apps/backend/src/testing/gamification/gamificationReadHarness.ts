import type { GamificationLaunchConfig } from '@chiliztv/domain/gamification/policies/launchPolicy';
import type { CardSource, IGamificationReadRepository } from '@chiliztv/domain/gamification/repositories/IGamificationReadRepository';
import type { Account, WalletLink } from '@chiliztv/domain/identity/entities/Account';
import type { IAccountRepository } from '@chiliztv/domain/identity/repositories/IAccountRepository';
import type { ILogger } from '@chiliztv/domain/shared/ports/ILogger';

import { GamificationAfterCredit } from '../../application/gamification/services/GamificationAfterCredit';
import { GamificationReadModels } from '../../application/gamification/services/GamificationReadModels';
import { AckNotificationsUseCase } from '../../application/gamification/use-cases/AckNotificationsUseCase';
import { GetCurrentDoubleXpUseCase } from '../../application/gamification/use-cases/GetCurrentDoubleXpUseCase';
import { GetMyGamificationUseCase } from '../../application/gamification/use-cases/GetMyGamificationUseCase';
import { GetProfileBadgesUseCase } from '../../application/gamification/use-cases/GetProfileBadgesUseCase';
import { GetProfileCardUseCase } from '../../application/gamification/use-cases/GetProfileCardUseCase';
import { GetPublicProfileUseCase } from '../../application/gamification/use-cases/GetPublicProfileUseCase';
import { UpdateCosmeticsUseCase } from '../../application/gamification/use-cases/UpdateCosmeticsUseCase';
import { InMemoryCache } from '../cache/InMemoryCache';
import { MockClock } from '../clock/MockClock';
import { GAMI_LAUNCH_AT, GAMI_NOW } from '../fixtures/gamification.fixtures';
import { FakeRateLimiter } from './gamificationHarness';
import { InMemoryGamificationStore } from './InMemoryGamificationStore';

const silentLogger: ILogger = { info: () => undefined, warn: () => undefined, error: () => undefined, debug: () => undefined };

export interface ReadHarnessOptions {
    readonly launch?: Partial<GamificationLaunchConfig>;
}

/** Read use cases of step 06 on the in-memory store; counts the batched source loads. */
export function buildGamificationReadHarness(options: ReadHarnessOptions = {}) {
    const clock = new MockClock(GAMI_NOW);
    const store = new InMemoryGamificationStore(GAMI_LAUNCH_AT);
    const cache = new InMemoryCache();
    const rateLimit = new FakeRateLimiter(clock);
    const config = { launch: { enabled: true, launchAt: GAMI_LAUNCH_AT, ...options.launch } };
    const accounts = new Map<string, Account>();
    const links: WalletLink[] = [];
    const users = new Map<string, { username: string | null; avatarUrl: string | null }>();
    const ledgerXp = new Map<string, Record<string, number>>();
    const loads: string[][] = [];
    let crownAccountId: string | null = null;

    const accountRepo = {
        findActiveLinksOfAccount: async (id: string) => links.filter((l) => l.accountId === id && l.unlinkedAt === null),
    } as unknown as IAccountRepository;

    const sourceOf = (wallet: string, accountId: string): CardSource | null => {
        const account = accounts.get(accountId);
        if (!account) return null;
        const user = users.get(wallet);
        return {
            wallet,
            accountId,
            accountCreatedAt: account.createdAt,
            displayName: user?.username ?? null,
            avatarUrl: user?.avatarUrl ?? null,
            profile: store.profileMap.get(accountId) ?? null,
            unlocked: store.achievements.filter((a) => a.accountId === accountId),
            bestCycleRank: bestRankOf(accountId),
            lastWonCycleId: lastWonCycleOf(accountId),
            streamMinutes: store.progressMap.get(accountId)?.get('stream_minutes')?.value ?? 0,
        };
    };

    const ranksOf = (accountId: string) => store.cycleRankRows.filter((r) => r.accountId === accountId);
    const bestRankOf = (accountId: string): number | null =>
        ranksOf(accountId).reduce<number | null>((best, r) => (best === null || r.rank < best ? r.rank : best), null);
    const lastWonCycleOf = (accountId: string): number | null =>
        ranksOf(accountId).filter((r) => r.rank === 1).reduce<number | null>((last, r) => (last === null || r.cycleId > last ? r.cycleId : last), null);

    const reads: IGamificationReadRepository = {
        findCardSources: async (wallets) => {
            loads.push([...wallets]);
            return wallets.flatMap((w) => {
                const link = links.find((l) => l.walletAddress === w.toLowerCase() && l.unlinkedAt === null);
                const source = link ? sourceOf(link.walletAddress, link.accountId) : null;
                return source ? [source] : [];
            });
        },
        findCardSourceOfAccount: async (accountId, wallet) => sourceOf(wallet.toLowerCase(), accountId),
        sumXpBySourceOnDay: async (accountId) => ledgerXp.get(accountId) ?? {},
    };

    const profiles = {
        ...store.profiles,
        updateCosmetics: async (accountId: string, c: { titleId: string | null; frameId: string | null; showcase: ReadonlyArray<string> }) => {
            store.setProfile(accountId, { selectedTitleId: c.titleId, selectedFrameId: c.frameId, showcase: c.showcase });
        },
    };
    const notifications = {
        ...store.notifications,
        markSeen: async (accountId: string, ids: ReadonlyArray<number>, at: Date) => {
            let n = 0;
            store.notificationRows.forEach((row, i) => {
                if (row.accountId !== accountId || row.seenAt !== null || !ids.includes(row.id)) return;
                store.notificationRows[i] = { ...row, seenAt: at };
                n += 1;
            });
            return n;
        },
    };
    const cycleRanks = { ...store.cycleRanks, findCrownHolder: async () => (crownAccountId ? { cycleId: 1, accountId: crownAccountId } : null) };

    const readModels = new GamificationReadModels(config, clock, reads, cycleRanks);
    const afterCredit = new GamificationAfterCredit(store.notifications, accountRepo, cache, silentLogger);
    const doubleXp = new GetCurrentDoubleXpUseCase(config, clock, store.doubleXp, cache);
    const me = new GetMyGamificationUseCase(reads, store.progress, notifications, cache, readModels, doubleXp);

    return {
        clock, store, cache, rateLimit, config, loads,
        badges: new GetProfileBadgesUseCase(cache, rateLimit, readModels),
        card: new GetProfileCardUseCase(cache, readModels),
        profile: new GetPublicProfileUseCase(cache, readModels),
        doubleXp,
        me,
        cosmetics: new UpdateCosmeticsUseCase(clock, reads, profiles, readModels, afterCredit, me),
        ack: new AckNotificationsUseCase(clock, notifications, cache),
        addAccount(account: Account, wallets: ReadonlyArray<WalletLink>, username: string | null = null): void {
            accounts.set(account.id, account);
            links.push(...wallets);
            for (const w of wallets) users.set(w.walletAddress, { username, avatarUrl: null });
        },
        setCrown(accountId: string | null): void { crownAccountId = accountId; },
        setTodayXp(accountId: string, xp: Record<string, number>): void { ledgerXp.set(accountId, xp); },
    };
}

export type GamificationReadHarness = ReturnType<typeof buildGamificationReadHarness>;
