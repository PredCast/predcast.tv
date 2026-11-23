'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { gamificationWatchApi, type WatchHeartbeatRequest, type WatchHeartbeatResultDto } from '@/lib/api/endpoints';
import { queryKeys } from '@/lib/query/keys';

/** One watch minute; a minute that credited XP refreshes the owner view. */
export function useWatchHeartbeatMutation() {
    const queryClient = useQueryClient();
    return useMutation<WatchHeartbeatResultDto, Error, WatchHeartbeatRequest>({
        mutationKey: queryKeys.gamification.watchHeartbeat(),
        mutationFn: (body) => gamificationWatchApi.heartbeat(body),
        onSuccess: (result) => {
            if (result.counted && result.xp > 0) queryClient.invalidateQueries({ queryKey: queryKeys.gamification.me() });
        },
    });
}
