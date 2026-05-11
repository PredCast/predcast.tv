import { apiClient } from '../client';
import { Donation, Subscription, StreamerStats } from '@/models/stream-wallet.model';

export interface PaginatedDonations {
  success: boolean;
  donations: Donation[];
  total: number;
  limit: number;
  offset: number;
}

export interface PaginatedSubscriptions {
  success: boolean;
  subscriptions: Subscription[];
  total: number;
  limit: number;
  offset: number;
}

export interface PageParams {
  limit?: number;
  offset?: number;
}

function paginationQuery(params?: PageParams): string {
  if (!params) return '';
  const search = new URLSearchParams();
  if (params.limit !== undefined) search.set('limit', String(params.limit));
  if (params.offset !== undefined) search.set('offset', String(params.offset));
  const s = search.toString();
  return s ? `?${s}` : '';
}

export const streamWalletApi = {
  getStreamerDonations: (streamerAddress: string, params?: PageParams): Promise<PaginatedDonations> =>
    apiClient.get<PaginatedDonations>(`/stream-wallet/donations/${streamerAddress}${paginationQuery(params)}`),

  getStreamerSubscriptions: (streamerAddress: string, params?: PageParams): Promise<PaginatedSubscriptions> =>
    apiClient.get<PaginatedSubscriptions>(`/stream-wallet/subscriptions/${streamerAddress}${paginationQuery(params)}`),

  getStreamerStats: (streamerAddress: string): Promise<{ success: boolean; stats: StreamerStats }> =>
    apiClient.get<{ success: boolean; stats: StreamerStats }>(`/stream-wallet/stats/${streamerAddress}`),

  getDonorHistory: (donorAddress: string, params?: PageParams): Promise<PaginatedDonations> =>
    apiClient.get<PaginatedDonations>(`/stream-wallet/donor/${donorAddress}/donations${paginationQuery(params)}`),

  getSubscriberHistory: (subscriberAddress: string, params?: PageParams): Promise<PaginatedSubscriptions> =>
    apiClient.get<PaginatedSubscriptions>(`/stream-wallet/subscriber/${subscriberAddress}/subscriptions${paginationQuery(params)}`),

  /** Self-onboards a streamer: deploys a `StreamWallet` proxy via the platform admin signer. Idempotent. */
  deployStreamerWallet: (streamerAddress: string): Promise<{ success: boolean; wallet: string; created: boolean }> =>
    apiClient.post<{ success: boolean; wallet: string; created: boolean }>(`/stream-wallet/deploy/${streamerAddress}`, {}),
};
