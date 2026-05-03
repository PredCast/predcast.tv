/**
 * Hook for user interactions with a specific BettingMatch (FootballMatch) contract V2
 * Used to place bets, claim winnings, and view match information
 */

import { useCallback, useEffect } from 'react';
import {
  useBettingMatchWritePlaceBetUsdc,
  useBettingMatchWriteClaim,
  useBettingMatchWriteClaimRefund,
  useBettingMatchWriteClaimAll,
  useBettingMatchReadGetMarketInfo,
  useBettingMatchReadGetUserBets,
  useBettingMatchReadMatchName,
  useBettingMatchReadMarketCount,
  useBettingMatchReadPaused,
  useBettingMatchReadUsdcToken,
} from '@/lib/contracts/generated';
import { useWaitForTransactionReceipt } from 'wagmi';
import { Address } from 'viem';

// Pin contract reads to Chiliz Spicy testnet so they don't depend on the
// connected wallet's active chain (otherwise the request never fires).
const BETTING_CHAIN_ID = 88882 as const;

// Market state enum (matches BettingMatch.MarketState)
export enum MarketState {
  Inactive = 0,
  Open = 1,
  Suspended = 2,
  Closed = 3,
  Resolved = 4,
  Cancelled = 5,
}

export interface MarketInfo {
  marketType: string;
  odds: bigint;
  state: MarketState;
  result: bigint;
}

export interface UserBet {
  amount: bigint;
  selection: bigint;
  claimed: boolean;
}

export interface UserBetWithIndex extends UserBet {
  betIndex: number;
}

interface BetState {
  isPending: boolean;
  isConfirming: boolean;
  isSuccess: boolean;
  error: Error | null;
  txHash?: `0x${string}`;
}

export interface UseBettingMatchReturn {
  // Write functions
  placeBet: (marketId: number, selection: number, grossAmountUsdcRaw: bigint) => void;
  claim: (marketId: number, betIndex: number) => void;
  claimAll: (marketId: number) => void;
  claimRefund: (marketId: number, betIndex: number) => void;

  // Read functions - Match metadata
  usdcToken: Address | undefined;

  // Read functions - Market data
  getMarket: (marketId: number) => MarketInfo | undefined;
  marketCount: number | undefined;
  matchName: string | undefined;
  isPaused: boolean | undefined;

  // Read functions - User data
  getUserBet: (marketId: number, userAddress: Address) => UserBet | undefined;
  getUserBets: (marketId: number, userAddress: Address) => UserBetWithIndex[] | undefined;

  // States
  betState: BetState;
  claimState: BetState;
  claimAllState: BetState;
  refundState: BetState;

  // Loading states
  isLoadingMatchInfo: boolean;

  // Refetch functions
  refetchMarket: () => void;
  refetchUserBet: () => void;
}

export function useBettingMatch(
  matchAddress: Address,
  userAddress?: Address,
  marketId: number = 0 // Default to Winner market
): UseBettingMatchReturn {
  // ============================================
  // Write Hooks - Place Bet
  // ============================================
  const {
    writeContract: writePlaceBet,
    data: betTxHash,
    isPending: isBetPending,
    error: betWriteError,
  } = useBettingMatchWritePlaceBetUsdc();

  const {
    isLoading: isBetConfirming,
    isSuccess: isBetSuccess,
  } = useWaitForTransactionReceipt({
    hash: betTxHash,
  });

  // ============================================
  // Write Hooks - Claim Winnings
  // ============================================
  const {
    writeContract: writeClaim,
    data: claimTxHash,
    isPending: isClaimPending,
    error: claimWriteError,
  } = useBettingMatchWriteClaim();

  const {
    isLoading: isClaimConfirming,
    isSuccess: isClaimSuccess,
  } = useWaitForTransactionReceipt({
    hash: claimTxHash,
  });

  // ============================================
  // Write Hooks - Claim All
  // ============================================
  const {
    writeContract: writeClaimAll,
    data: claimAllTxHash,
    isPending: isClaimAllPending,
    error: claimAllWriteError,
  } = useBettingMatchWriteClaimAll();

  const {
    isLoading: isClaimAllConfirming,
    isSuccess: isClaimAllSuccess,
  } = useWaitForTransactionReceipt({
    hash: claimAllTxHash,
  });

  // ============================================
  // Write Hooks - Claim Refund
  // ============================================
  const {
    writeContract: writeRefund,
    data: refundTxHash,
    isPending: isRefundPending,
    error: refundWriteError,
  } = useBettingMatchWriteClaimRefund();

  const {
    isLoading: isRefundConfirming,
    isSuccess: isRefundSuccess,
  } = useWaitForTransactionReceipt({
    hash: refundTxHash,
  });

  // ============================================
  // Read Hooks - Match Info
  // ============================================
  const {
    data: matchNameData,
    isLoading: isLoadingMatchName,
  } = useBettingMatchReadMatchName({
    address: matchAddress,
    chainId: BETTING_CHAIN_ID,
  });

  const {
    data: marketCountData,
  } = useBettingMatchReadMarketCount({
    address: matchAddress,
    chainId: BETTING_CHAIN_ID,
  });

  const {
    data: isPausedData,
  } = useBettingMatchReadPaused({
    address: matchAddress,
    chainId: BETTING_CHAIN_ID,
  });

  const {
    data: marketData,
    refetch: refetchMarket,
  } = useBettingMatchReadGetMarketInfo({
    address: matchAddress,
    args: [BigInt(marketId)],
    chainId: BETTING_CHAIN_ID,
  });

  const { data: usdcTokenAddr } = useBettingMatchReadUsdcToken({
    address: matchAddress,
    chainId: BETTING_CHAIN_ID,
  });

  // ============================================
  // Read Hooks - User Bets
  // ============================================
  const {
    data: userBetsData,
    refetch: refetchUserBet,
  } = useBettingMatchReadGetUserBets({
    address: matchAddress,
    args: userAddress ? [BigInt(marketId), userAddress] : undefined,
    chainId: BETTING_CHAIN_ID,
    query: {
      enabled: !!userAddress,
    },
  });

  // ============================================
  // Write Functions
  // ============================================
  const placeBet = useCallback(
    (marketId: number, selection: number, grossAmountUsdcRaw: bigint) => {
      if (!writePlaceBet) {
        console.error('writePlaceBet is not available');
        return;
      }
      writePlaceBet({
        address: matchAddress,
        args: [BigInt(marketId), BigInt(selection), grossAmountUsdcRaw],
      });
    },
    [writePlaceBet, matchAddress]
  );

  const claim = useCallback(
    (marketId: number, betIndex: number) => {
      if (!writeClaim) {
        console.error('writeClaim is not available');
        return;
      }
      writeClaim({
        address: matchAddress,
        args: [BigInt(marketId), BigInt(betIndex)],
      });
    },
    [writeClaim, matchAddress]
  );

  const claimAll = useCallback(
    (marketId: number) => {
      if (!writeClaimAll) {
        console.error('writeClaimAll is not available');
        return;
      }
      writeClaimAll({
        address: matchAddress,
        args: [BigInt(marketId)],
      });
    },
    [writeClaimAll, matchAddress]
  );

  const claimRefund = useCallback(
    (marketId: number, betIndex: number) => {
      if (!writeRefund) {
        console.error('writeRefund is not available');
        return;
      }
      writeRefund({
        address: matchAddress,
        args: [BigInt(marketId), BigInt(betIndex)],
      });
    },
    [writeRefund, matchAddress]
  );

  // ============================================
  // Helper Functions
  // ============================================
  const getMarket = useCallback(
    (_marketId: number): MarketInfo | undefined => {
      if (!marketData) return undefined;

      // getMarketInfo returns: (bytes32 marketType, uint8 state, uint32 currentOdds, uint64 result, uint256 totalPool)
      const [marketType, state, currentOdds, result] = marketData as readonly [
        `0x${string}`,
        number,
        number,
        bigint,
        bigint,
      ];
      return {
        marketType,
        odds: BigInt(currentOdds),
        state: state as MarketState,
        result,
      };
    },
    [marketData]
  );

  const getUserBets = useCallback(
    (_marketId: number, _userAddress: Address): UserBetWithIndex[] | undefined => {
      if (!userBetsData) return undefined;

      const bets = userBetsData as readonly {
        amount: bigint;
        selection: bigint;
        oddsIndex: number;
        timestamp: number;
        claimed: boolean;
      }[];
      return [...bets].map((bet, index) => ({
        amount: bet.amount,
        selection: bet.selection,
        claimed: bet.claimed,
        betIndex: index,
      }));
    },
    [userBetsData]
  );

  const getUserBet = useCallback(
    (marketId: number, userAddress: Address): UserBet | undefined => {
      const bets = getUserBets(marketId, userAddress);
      if (!bets || bets.length === 0) return undefined;
      // Return first unclaimed bet for backward compatibility, or first bet
      const firstUnclaimed = bets.find((b) => !b.claimed);
      const bet = firstUnclaimed ?? bets[0];
      return {
        amount: bet.amount,
        selection: bet.selection,
        claimed: bet.claimed,
      };
    },
    [getUserBets]
  );

  // ============================================
  // Auto-refetch after successful transactions
  // ============================================
  useEffect(() => {
    if (isBetSuccess || isClaimSuccess || isClaimAllSuccess || isRefundSuccess) {
      refetchMarket();
      refetchUserBet();
    }
  }, [
    isBetSuccess,
    isClaimSuccess,
    isClaimAllSuccess,
    isRefundSuccess,
    refetchMarket,
    refetchUserBet,
  ]);

  // ============================================
  // Return Hook Data
  // ============================================
  return {
    // Write functions
    placeBet,
    claim,
    claimAll,
    claimRefund,

    // Read functions - Match metadata
    usdcToken: usdcTokenAddr as Address | undefined,

    // Read functions - Market data
    getMarket,
    marketCount: marketCountData ? Number(marketCountData) : undefined,
    matchName: matchNameData as string | undefined,
    isPaused: isPausedData,

    // Read functions - User data
    getUserBet,
    getUserBets,

    // States
    betState: {
      isPending: isBetPending,
      isConfirming: isBetConfirming,
      isSuccess: isBetSuccess,
      error: betWriteError,
      txHash: betTxHash,
    },
    claimState: {
      isPending: isClaimPending,
      isConfirming: isClaimConfirming,
      isSuccess: isClaimSuccess,
      error: claimWriteError,
      txHash: claimTxHash,
    },
    claimAllState: {
      isPending: isClaimAllPending,
      isConfirming: isClaimAllConfirming,
      isSuccess: isClaimAllSuccess,
      error: claimAllWriteError,
      txHash: claimAllTxHash,
    },
    refundState: {
      isPending: isRefundPending,
      isConfirming: isRefundConfirming,
      isSuccess: isRefundSuccess,
      error: refundWriteError,
      txHash: refundTxHash,
    },

    // Loading states
    isLoadingMatchInfo: isLoadingMatchName,

    // Refetch functions
    refetchMarket,
    refetchUserBet,
  };
}
