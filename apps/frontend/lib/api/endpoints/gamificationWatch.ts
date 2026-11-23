import { apiClient } from '../client';
import type { WatchHeartbeatRequest, WatchHeartbeatResultDto } from '@chiliztv/shared';

/**
 * POST /gamification/watch-heartbeat — one authenticated watch minute (JWT with `accountId`).
 * Always 200; a minute not counted is `counted: false` with a reason.
 */
export const gamificationWatchApi = {
    heartbeat: (body: WatchHeartbeatRequest): Promise<WatchHeartbeatResultDto> =>
        apiClient.post<WatchHeartbeatResultDto>('/gamification/watch-heartbeat', body),
};

export type { WatchHeartbeatRequest, WatchHeartbeatResultDto };
