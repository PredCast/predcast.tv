import type { AdminContextDto } from '@chiliztv/shared';

import { apiClient } from '../client';

/** Signed-in operator: wallet, role, grant label and the backend environment. */
export type AdminSession = AdminContextDto;

export const adminApi = {
  gate: (code: string) =>
    apiClient.post<{ success: boolean; data: { gateToken: string; disabled?: boolean } }>('/admin/gate', { code }),
  challenge: (walletAddress: string) =>
    apiClient.post<{ success: boolean; data: { message: string } }>('/admin/auth/challenge', { walletAddress }),
  verify: (walletAddress: string, signature: string) =>
    apiClient.post<{ success: boolean; token: string }>('/admin/auth/verify', { walletAddress, signature }),
  me: () => apiClient.get<{ success: boolean; data: AdminSession }>('/admin/me'),
};
