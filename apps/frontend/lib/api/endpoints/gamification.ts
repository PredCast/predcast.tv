import { apiClient } from '../client';
import type { CheckInResultDto } from '@chiliztv/shared';

/**
 * Gamification routes (JWT with `accountId`, else 401 ACCOUNT_REQUIRED and the token is re-exchanged).
 *   POST /gamification/check-in — daily check-in; always 200, `credited: false` with a reason otherwise
 */
export const gamificationApi = {
    checkIn: (): Promise<CheckInResultDto> => apiClient.post<CheckInResultDto>('/gamification/check-in'),
};

export type { CheckInResultDto };
