import { apiClient } from '../client';

import type { BanStatusResponseDto } from '@chiliztv/shared';

export const bansApi = {
  /** GET /bans/me — always 200, `ban: null` when the caller is clean. */
  me: (): Promise<{ success: boolean } & BanStatusResponseDto> =>
    apiClient.get('/bans/me'),
};
