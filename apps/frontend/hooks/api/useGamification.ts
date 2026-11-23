'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { gamificationApi, type CheckInResultDto } from '@/lib/api/endpoints';
import { queryKeys } from '@/lib/query/keys';

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
