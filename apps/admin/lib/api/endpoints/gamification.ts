import type {
  AdminAccountGamificationDto,
  AdminAdjustXpBody,
  AdminAdjustXpResultDto,
  AdminCreateDoubleXpBody,
  AdminDoubleXpEventDto,
  AdminDoubleXpListDto,
  AdminSuspensionDto,
} from '@chiliztv/shared';

import { apiClient } from '../client';

interface Envelope<T> {
  success: boolean;
  data: T;
}

const account = (wallet: string) => `/admin/gamification/accounts/${wallet.toLowerCase()}`;

/** Admin gamification (G18): double XP events, suspension, manual XP adjustment, player block. */
export const gamificationApi = {
  listDoubleXp: (limit: number) => apiClient.get<Envelope<AdminDoubleXpListDto>>(`/admin/gamification/double-xp?limit=${limit}`),
  createDoubleXp: (body: AdminCreateDoubleXpBody) =>
    apiClient.post<Envelope<AdminDoubleXpEventDto>>('/admin/gamification/double-xp', body),
  cancelDoubleXp: (id: string, note: string) =>
    apiClient.post<Envelope<AdminDoubleXpEventDto>>(`/admin/gamification/double-xp/${id}/cancel`, { note }),

  getAccount: (wallet: string) => apiClient.get<Envelope<AdminAccountGamificationDto>>(account(wallet)),
  suspend: (wallet: string, reason: string) => apiClient.post<Envelope<AdminSuspensionDto>>(`${account(wallet)}/suspend`, { reason }),
  unsuspend: (wallet: string, reason: string) =>
    apiClient.post<Envelope<AdminSuspensionDto>>(`${account(wallet)}/unsuspend`, { reason }),
  adjustXp: (wallet: string, body: AdminAdjustXpBody) =>
    apiClient.post<Envelope<AdminAdjustXpResultDto>>(`${account(wallet)}/adjust`, body),
};
