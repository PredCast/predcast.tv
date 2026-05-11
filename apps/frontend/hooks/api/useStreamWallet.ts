import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { streamWalletApi } from '@/lib/api/endpoints';
import { queryKeys } from '@/lib/query/keys';

export interface PageOptions {
  limit?: number;
  offset?: number;
}

/**
 * Pagination is opt-in: omit `params` to fetch the default server page
 * (5 rows). Pass `{ limit, offset }` for paged consumers (dashboard) or
 * `{ limit: 50 }` for aggregators that need a wider window (activity feed).
 */
export function useStreamerDonations(streamerAddress: string, params?: PageOptions) {
  return useQuery({
    queryKey: [...queryKeys.streamWallet.donations(streamerAddress), params?.limit ?? null, params?.offset ?? null],
    queryFn: () => streamWalletApi.getStreamerDonations(streamerAddress, params),
    enabled: !!streamerAddress,
    placeholderData: keepPreviousData,
  });
}

export function useStreamerSubscriptions(streamerAddress: string, params?: PageOptions) {
  return useQuery({
    queryKey: [...queryKeys.streamWallet.subscriptions(streamerAddress), params?.limit ?? null, params?.offset ?? null],
    queryFn: () => streamWalletApi.getStreamerSubscriptions(streamerAddress, params),
    enabled: !!streamerAddress,
    placeholderData: keepPreviousData,
  });
}

export function useStreamerStats(streamerAddress: string) {
  return useQuery({
    queryKey: queryKeys.streamWallet.stats(streamerAddress),
    queryFn: () => streamWalletApi.getStreamerStats(streamerAddress),
    enabled: !!streamerAddress,
  });
}

export function useDonorHistory(donorAddress: string, params?: PageOptions) {
  return useQuery({
    queryKey: [...queryKeys.streamWallet.donorDonations(donorAddress), params?.limit ?? null, params?.offset ?? null],
    queryFn: () => streamWalletApi.getDonorHistory(donorAddress, params),
    enabled: !!donorAddress,
    placeholderData: keepPreviousData,
  });
}

export function useSubscriberHistory(subscriberAddress: string, params?: PageOptions) {
  return useQuery({
    queryKey: [...queryKeys.streamWallet.subscriberSubscriptions(subscriberAddress), params?.limit ?? null, params?.offset ?? null],
    queryFn: () => streamWalletApi.getSubscriberHistory(subscriberAddress, params),
    enabled: !!subscriberAddress,
    placeholderData: keepPreviousData,
  });
}

/**
 * Self-onboards the connected user's `StreamWallet` proxy (admin-signed,
 * platform-paid gas). On success invalidates donations / subs / stats for
 * the caller so the dashboard re-renders with the deployed wallet.
 */
export function useDeployStreamerWallet(streamerAddress: string | undefined) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      if (!streamerAddress) {
        return Promise.reject(new Error('No streamer address — connect a wallet first.'));
      }
      return streamWalletApi.deployStreamerWallet(streamerAddress);
    },
    onSuccess: () => {
      if (!streamerAddress) return;
      queryClient.invalidateQueries({ queryKey: queryKeys.streamWallet.donations(streamerAddress) });
      queryClient.invalidateQueries({ queryKey: queryKeys.streamWallet.subscriptions(streamerAddress) });
      queryClient.invalidateQueries({ queryKey: queryKeys.streamWallet.stats(streamerAddress) });
    },
  });
}
