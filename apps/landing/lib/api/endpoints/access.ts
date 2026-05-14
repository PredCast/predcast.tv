import { apiClient } from '../client';

export const accessApi = {
  redeem: (code: string): Promise<{ success: boolean }> =>
    apiClient.post<{ success: boolean }>('/access/redeem', { code }),
};
