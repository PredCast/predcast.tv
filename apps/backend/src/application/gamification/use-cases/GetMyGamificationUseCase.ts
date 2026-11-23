import { inject, injectable } from 'tsyringe';

import { countersFromProgress } from '@chiliztv/domain/gamification/policies/achievementCounters';
import { describeAchievementProgress } from '@chiliztv/domain/gamification/policies/achievementEvaluator';
import { ownedFrames, ownedTitles } from '@chiliztv/domain/gamification/policies/cosmetics';
import { parisDayOf } from '@chiliztv/domain/gamification/policies/parisDay';
import {
    buildProfileCard,
    cosmeticsContextOf,
    emptyProfile,
    visibleUnlocks,
} from '@chiliztv/domain/gamification/policies/profileCard';
import type { IGamificationNotificationRepository } from '@chiliztv/domain/gamification/repositories/IGamificationNotificationRepository';
import type { IGamificationProgressRepository } from '@chiliztv/domain/gamification/repositories/IGamificationProgressRepository';
import type { IGamificationReadRepository } from '@chiliztv/domain/gamification/repositories/IGamificationReadRepository';
import { NotFoundError } from '@chiliztv/domain/shared/errors/NotFoundError';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { MyGamificationDto } from '@chiliztv/shared';

import { GAMIFICATION_CACHE_TTL, gamificationCacheKeys } from '../cache/gamificationCacheKeys';
import { toCardDto } from '../mappers/readModelDtos';
import { GamificationReadModels } from '../services/GamificationReadModels';
import { GetCurrentDoubleXpUseCase } from './GetCurrentDoubleXpUseCase';

/** Unseen notifications carried by `/me` (§9.2). */
export const MY_UNSEEN_NOTIFICATIONS = 10;

/** GET /gamification/me — owner view: card + private progress, today's XP, notifications. */
@injectable()
export class GetMyGamificationUseCase {
    constructor(
        @inject(TOKENS.IGamificationReadRepository) private readonly reads: IGamificationReadRepository,
        @inject(TOKENS.IGamificationProgressRepository) private readonly progress: IGamificationProgressRepository,
        @inject(TOKENS.IGamificationNotificationRepository)
        private readonly notifications: IGamificationNotificationRepository,
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        private readonly readModels: GamificationReadModels,
        private readonly doubleXp: GetCurrentDoubleXpUseCase,
    ) {}

    async execute(accountId: string, wallet: string): Promise<MyGamificationDto> {
        if (!this.readModels.isOpen()) throw new NotFoundError('Gamification profile', accountId);
        const me = await this.cache.getOrLoad<MyGamificationDto>({
            key: gamificationCacheKeys.me(accountId),
            ttlSeconds: GAMIFICATION_CACHE_TTL.me,
            loader: () => this.load(accountId, wallet),
        });
        if (!me) throw new NotFoundError('Gamification profile', accountId);
        return me;
    }

    private async load(accountId: string, wallet: string): Promise<MyGamificationDto | null> {
        const [source, ctx, snapshot, unseen, doubleXp] = await Promise.all([
            this.reads.findCardSourceOfAccount(accountId, wallet),
            this.readModels.context(),
            this.progress.getSnapshot(accountId),
            this.notifications.listUnseen(accountId, MY_UNSEEN_NOTIFICATIONS),
            this.doubleXp.load(),
        ]);
        if (!source) return null;
        const profile = source.profile ?? emptyProfile(accountId, source.accountCreatedAt);
        const today = parisDayOf(ctx.now);
        const cosmetics = cosmeticsContextOf(profile, source, ctx);
        const counters = countersFromProgress(snapshot, profile.streak.best, source.bestCycleRank);
        const todayXp = await this.reads.sumXpBySourceOnDay(accountId, today);
        return {
            ...toCardDto(buildProfileCard(source, profile, ctx)),
            streakFreezes: profile.streak.freezes,
            checkedInToday: profile.streak.lastDay === today,
            ownedTitleIds: [...ownedTitles(cosmetics)],
            ownedFrameIds: [...ownedFrames(cosmetics)],
            achievements: describeAchievementProgress(counters, visibleUnlocks(source.unlocked)).map((a) => ({ ...a })),
            todayXpBySource: { ...todayXp },
            activeDoubleXp: doubleXp?.isActive ? doubleXp : null,
            unseenNotifications: unseen.map((n) => ({
                id: n.id,
                kind: n.payload.kind,
                payload: { ...n.payload },
                createdAt: n.createdAt.toISOString(),
            })),
        };
    }
}
