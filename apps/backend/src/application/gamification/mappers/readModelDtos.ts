import type { DoubleXpEvent } from '@chiliztv/domain/gamification/entities/DoubleXpEvent';
import type { AnnouncedDoubleXp } from '@chiliztv/domain/gamification/policies/doubleXpAnnouncement';
import type {
    ProfileBadgeView,
    ProfileCardView,
    PublicAchievementView,
    ShowcaseItemView,
} from '@chiliztv/domain/gamification/policies/profileCard';
import type {
    DoubleXpPublicDto,
    DoubleXpSourceDto,
    ProfileBadgeDto,
    ProfileCardDto,
    PublicAchievementDto,
    ShowcaseItemDto,
} from '@chiliztv/shared';

/** Domain read models → mutable DTO shapes (the Zod schemas re-check them in the controller). */
export function toBadgeDto(view: ProfileBadgeView): ProfileBadgeDto {
    return { ...view, tags: [...view.tags] };
}

const toShowcaseDto = (item: ShowcaseItemView): ShowcaseItemDto => ({
    achievementId: item.achievementId,
    tier: item.tier,
    context: item.context ? { ...item.context } : null,
});

export function toCardDto(view: ProfileCardView): ProfileCardDto {
    return {
        ...toBadgeDto(view),
        displayName: view.displayName,
        avatarUrl: view.avatarUrl,
        xp: { ...view.xp },
        streak: { ...view.streak },
        showcase: view.showcase.map(toShowcaseDto),
        showcaseSlots: view.showcaseSlots,
        streamedHours: view.streamedHours,
        memberSince: view.memberSince,
    };
}

export function toPublicAchievementDto(view: PublicAchievementView): PublicAchievementDto {
    return { ...toShowcaseDto(view), unlockedAt: view.unlockedAt };
}

export function toDoubleXpDto(announced: AnnouncedDoubleXp<DoubleXpEvent>): DoubleXpPublicDto {
    const { event } = announced;
    return {
        name: event.name,
        multiplier: event.multiplier,
        // The SQL CHECK restricts stored sources to the double XP perimeter.
        sources: event.sources as DoubleXpSourceDto[],
        startsAt: event.startsAt.toISOString(),
        endsAt: event.endsAt.toISOString(),
        isActive: announced.isActive,
    };
}
