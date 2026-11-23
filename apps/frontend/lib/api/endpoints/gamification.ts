import { apiClient } from '../client';
import type {
    AckNotificationsResponse,
    CheckInResultDto,
    DoubleXpPublicDto,
    MyGamificationDto,
    ProfileBadgeDto,
    ProfileBadgesResponse,
    ProfileCardDto,
    PublicProfileDto,
    UpdateCosmeticsBody,
} from '@chiliztv/shared';

/**
 * Gamification routes. Public reads need no JWT; `/me*` and check-in need an `accountId`
 * (else 401 ACCOUNT_REQUIRED and the token is re-exchanged).
 *   POST /gamification/check-in              — daily check-in; always 200, `credited: false` with a reason otherwise
 *   GET  /gamification/cards/:wallet         — hover card, 404 without account / profile / launch
 *   POST /gamification/cards/badges          — ≤ 100 wallets → `{ badges: Record<wallet, badge> }`
 *   GET  /gamification/profiles/:wallet      — public profile
 *   GET  /gamification/double-xp/current     — running or announced event, else null
 *   GET  /gamification/me                    — owner view
 *   PUT  /gamification/me/cosmetics          — 422 when a cosmetic is not owned
 *   POST /gamification/me/notifications/ack
 */
export const gamificationApi = {
    checkIn: (): Promise<CheckInResultDto> => apiClient.post<CheckInResultDto>('/gamification/check-in'),
    card: (wallet: string): Promise<ProfileCardDto> =>
        apiClient.get<ProfileCardDto>(`/gamification/cards/${wallet.toLowerCase()}`),
    badges: (wallets: ReadonlyArray<string>): Promise<ProfileBadgesResponse> =>
        apiClient.post<ProfileBadgesResponse>('/gamification/cards/badges', { wallets }),
    profile: (wallet: string): Promise<PublicProfileDto> =>
        apiClient.get<PublicProfileDto>(`/gamification/profiles/${wallet.toLowerCase()}`),
    currentDoubleXp: (): Promise<DoubleXpPublicDto | null> =>
        apiClient.get<DoubleXpPublicDto | null>('/gamification/double-xp/current'),
    me: (): Promise<MyGamificationDto> => apiClient.get<MyGamificationDto>('/gamification/me'),
    updateCosmetics: (body: UpdateCosmeticsBody): Promise<MyGamificationDto> =>
        apiClient.put<MyGamificationDto>('/gamification/me/cosmetics', body),
    ackNotifications: (ids: ReadonlyArray<number>): Promise<AckNotificationsResponse> =>
        apiClient.post<AckNotificationsResponse>('/gamification/me/notifications/ack', { ids }),
};

export type {
    CheckInResultDto,
    DoubleXpPublicDto,
    MyGamificationDto,
    ProfileBadgeDto,
    ProfileBadgesResponse,
    ProfileCardDto,
    PublicProfileDto,
    UpdateCosmeticsBody,
};
