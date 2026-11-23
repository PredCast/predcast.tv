'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
    gamificationApi,
    type CheckInResultDto,
    type MyGamificationDto,
    type ProfileBadgeDto,
    type UpdateCosmeticsBody,
} from '@/lib/api/endpoints';
import { queryKeys } from '@/lib/query/keys';

/** Aligned on the backend Redis TTLs (§9.1). */
const PUBLIC_STALE_MS = 60_000;
const ME_STALE_MS = 15_000;
const ME_REFRESH_MS = 60_000;
const DOUBLE_XP_STALE_MS = 30_000;

const EMPTY_BADGES: ReadonlyMap<string, ProfileBadgeDto> = new Map();

/** Daily check-in; a credited call refreshes the owner view. */
export function useCheckIn() {
    const queryClient = useQueryClient();
    return useMutation<CheckInResultDto, Error, void>({
        mutationKey: queryKeys.gamification.checkIn(),
        mutationFn: () => gamificationApi.checkIn(),
        onSuccess: (result) => {
            if (result.credited) queryClient.invalidateQueries({ queryKey: queryKeys.gamification.me() });
        },
    });
}

/** Owner view; refreshed every 60 s only while the tab is visible. */
export function useMyGamification(enabled: boolean) {
    return useQuery({
        queryKey: queryKeys.gamification.me(),
        queryFn: () => gamificationApi.me(),
        enabled,
        staleTime: ME_STALE_MS,
        refetchInterval: ME_REFRESH_MS,
        refetchIntervalInBackground: false,
        retry: false,
    });
}

/** Hover card, fetched only once the card opens (`wallet` undefined until then). 404 = no card. */
export function useProfileCard(wallet: string | undefined) {
    return useQuery({
        queryKey: queryKeys.gamification.card(wallet ?? ''),
        queryFn: () => gamificationApi.card(wallet!),
        enabled: !!wallet,
        staleTime: PUBLIC_STALE_MS,
        retry: false,
    });
}

/**
 * One batched request for a whole visible list (chat, leaderboard). `wallets` must be the
 * already debounced, sorted, lowercase set. Lookup keys are lowercase.
 */
export function useProfileBadges(wallets: ReadonlyArray<string>) {
    const query = useQuery({
        queryKey: queryKeys.gamification.badges(wallets),
        queryFn: async (): Promise<ReadonlyMap<string, ProfileBadgeDto>> => {
            const { badges } = await gamificationApi.badges(wallets);
            return new Map(Object.entries(badges));
        },
        enabled: wallets.length > 0,
        staleTime: PUBLIC_STALE_MS,
        placeholderData: (previous) => previous,
        retry: false,
    });
    return query.data ?? EMPTY_BADGES;
}

export function usePublicProfile(wallet: string | undefined) {
    return useQuery({
        queryKey: queryKeys.gamification.profile(wallet ?? ''),
        queryFn: () => gamificationApi.profile(wallet!),
        enabled: !!wallet,
        staleTime: PUBLIC_STALE_MS,
        retry: false,
    });
}

export function useCurrentDoubleXp() {
    return useQuery({
        queryKey: queryKeys.gamification.doubleXp(),
        queryFn: () => gamificationApi.currentDoubleXp(),
        staleTime: DOUBLE_XP_STALE_MS,
    });
}

/** Saves title, frame and showcase; refreshes the owner view and every public read model. */
export function useUpdateCosmetics() {
    const queryClient = useQueryClient();
    return useMutation<MyGamificationDto, Error, UpdateCosmeticsBody>({
        mutationFn: (body) => gamificationApi.updateCosmetics(body),
        onSuccess: (me) => {
            queryClient.setQueryData(queryKeys.gamification.me(), me);
            queryClient.invalidateQueries({ queryKey: queryKeys.gamification.all });
        },
    });
}

export function useAckNotifications() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (ids: ReadonlyArray<number>) => gamificationApi.ackNotifications(ids),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.gamification.me() }),
    });
}
