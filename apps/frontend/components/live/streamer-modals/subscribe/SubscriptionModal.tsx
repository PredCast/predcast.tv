"use client";

import { useEffect, useMemo, useState } from "react";
import { formatUnits, type Address } from "viem";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

import { useNetworkRouter } from "@/hooks/useNetworkRouter";
import { useTokenDecimals } from "@/hooks/useTokenDecimals";
import { usePoolDecimals } from "@/hooks/usePoolDecimals";
import { useFanTokens } from "@/hooks/useFanTokens";
import { useStreamWallet } from "@/hooks/useStreamWallet";
import { decodeContractError } from "@/lib/contracts/errors";

import {
  Eyebrow,
  FeeBreakdown,
  InsufficientBalanceBanner,
  ModalAlert,
  SettlementFooter,
  StreamerModalHeader,
  StreamerModalShell,
  StreamerStrip,
  SwapQuotePanel,
  TokenPickerSheet,
  buildStreamerTokenList,
  decimalsFor,
  symbolFor,
  toRouterToken,
  useRouterApproval,
  type StreamerTokenView,
} from "../shared";
import { AlreadySubscribedNotice } from "./AlreadySubscribedNotice";
import { DurationGrid } from "./DurationGrid";
import { SubscriptionPerks } from "./SubscriptionPerks";
import { SubscriptionsClosedNotice } from "./SubscriptionsClosedNotice";
import { SubscriptionSuccess, type SubscriptionSnapshot } from "./SubscriptionSuccess";
import { SubscriptionSummary } from "./SubscriptionSummary";
import { useSubscriptionPayment } from "./useSubscriptionPayment";
import { useSubscriptionPricing } from "./useSubscriptionPricing";

interface SubscriptionModalProps {
  open: boolean;
  onClose: () => void;
  streamerAddress: Address;
  streamerName: string;
  streamerHandle?: string;
  streamerAvatarUrl?: string;
}

const PLATFORM_FEE_BPS = 500;
const DEADLINE_MIN = 20;
const DEFAULT_SLIPPAGE_BPS = 50;
const SECONDS_PER_MONTH = BigInt(30 * 24 * 60 * 60);

const fmtUsd = (n: number) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtTok = (n: number, dp: number) =>
  n.toLocaleString("en-US", { minimumFractionDigits: dp, maximumFractionDigits: dp });

/**
 * Streamer subscription modal on top of `NetworkRouter.subscribe*`. The price comes from the
 * streamer's StreamWallet (`subscriptionCost(duration)`); subscribing is disabled while unset.
 */
export function SubscriptionModal({
  open,
  onClose,
  streamerAddress,
  streamerName,
  streamerHandle,
  streamerAvatarUrl,
}: SubscriptionModalProps) {
  const tokens = useMemo(() => buildStreamerTokenList(), []);
  const [selectedToken, setSelectedToken] = useState<StreamerTokenView>(tokens[0]);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [months, setMonths] = useState<number>(3);
  const [slippageBps, setSlippageBps] = useState<number>(DEFAULT_SLIPPAGE_BPS);
  const [successSnapshot, setSuccessSnapshot] = useState<SubscriptionSnapshot | null>(null);

  const { subscribe, subscribeState, routerAddress } = useNetworkRouter();
  const { assetDecimals: usdcDecimals } = usePoolDecimals();
  const { primaryWallet } = useDynamicContext();
  const userAddress = primaryWallet?.address as Address | undefined;
  const { tokenBalances } = useFanTokens(userAddress, !!userAddress);

  const { subscription, streamWalletAddress } = useStreamWallet({ streamerAddress });
  const isAlreadySubscribed = !!subscription?.isSubscribed;

  const durationSeconds = useMemo(() => SECONDS_PER_MONTH * BigInt(months), [months]);
  const pricing = useSubscriptionPricing(streamWalletAddress, durationSeconds);
  const cost = pricing.status === "priced" ? pricing.cost : undefined;
  const toUsd = (raw: bigint) => (usdcDecimals !== undefined ? Number(formatUnits(raw, usdcDecimals)) : null);
  const monthlyUsd =
    pricing.status === "priced" ? toUsd((pricing.price * SECONDS_PER_MONTH) / pricing.period) : null;
  const totalUsd = cost !== undefined ? toUsd(cost) : null;

  const tokenKind = selectedToken.token;
  const tokenSymbol = symbolFor(tokenKind);
  const erc20Decimals = useTokenDecimals(tokenKind.kind === "ERC20" ? tokenKind.address : undefined);
  const decimals = decimalsFor(tokenKind, usdcDecimals, erc20Decimals);

  const payment = useSubscriptionPayment({ token: tokenKind, decimals, cost, slippageBps });
  const approval = useRouterApproval(tokenKind, userAddress, routerAddress, payment.parsedAmount);

  const balanceMap = useMemo(() => {
    const map: Record<string, number | undefined> = {};
    for (const tb of tokenBalances) map[tb.symbol] = tb.balance;
    return map;
  }, [tokenBalances]);
  const tokenBalance = balanceMap[tokenSymbol];
  const insufficient =
    tokenBalance !== undefined && payment.parsedAmount > BigInt(0) && payment.tokenAmount > tokenBalance;

  const txError = subscribeState.error ?? approval.approveError;
  const decodedError = txError ? decodeContractError(txError) : null;
  const errorMessage = decodedError
    ? decodedError.description ? `${decodedError.title} — ${decodedError.description}` : decodedError.title
    : null;

  // Snapshot at tx confirm so the success view stays stable across resets.
  useEffect(() => {
    if (subscribeState.isSuccess && !successSnapshot) {
      setSuccessSnapshot({ months, totalUsd, tokenSymbol, txHash: subscribeState.txHash });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subscribeState.isSuccess]);

  const isLoading =
    subscribeState.isPending ||
    subscribeState.isConfirming ||
    approval.isApprovePending ||
    approval.isApproveConfirming;

  const handleSubmit = () => {
    if (payment.parsedAmount === BigInt(0)) return;
    if (approval.needsApproval) return approval.approve();
    if (!payment.ready) return;
    subscribe({
      token: toRouterToken(tokenKind),
      streamer: streamerAddress,
      duration: durationSeconds,
      amount: payment.parsedAmount,
      amountOutMin: payment.amountOutMin,
      deadline: BigInt(Math.floor(Date.now() / 1000) + DEADLINE_MIN * 60),
    });
  };

  const ctaLabel =
    pricing.status === "unpriced"
      ? "Subscriptions not open"
      : approval.isApprovePending
        ? "Confirm approval…"
        : approval.isApproveConfirming
          ? `Approving ${tokenSymbol}…`
          : subscribeState.isPending
            ? "Confirm in wallet…"
            : subscribeState.isConfirming
              ? "Subscribing…"
              : approval.needsApproval
                ? `Approve ${tokenSymbol} →`
                : totalUsd !== null
                  ? `Subscribe · ${fmtUsd(totalUsd)} →`
                  : "Subscribe →";

  const tokenDp = tokenSymbol === "CHZ" ? 0 : 2;
  const tokenAmountSubLabel =
    tokenKind.kind === "USDC"
      ? totalUsd !== null ? `≈ ${fmtTok(totalUsd, 2)} USDC` : "Loading price…"
      : payment.tokenAmount > 0
        ? `≈ ${fmtTok(payment.tokenAmount, tokenDp)} $${tokenSymbol}`
        : "FanX quote pending…";

  if (successSnapshot) {
    return (
      <SubscriptionSuccess
        open={open}
        streamerName={streamerName}
        snapshot={successSnapshot}
        onAnother={() => setSuccessSnapshot(null)}
        onClose={() => {
          setSuccessSnapshot(null);
          onClose();
        }}
      />
    );
  }

  return (
    <StreamerModalShell open={open} onClose={onClose} ariaTitle="Subscribe to streamer">
      <StreamerModalHeader
        eyebrow="Subscription · monthly"
        title={
          <>
            Support <span className="text-[#E8001D]">{streamerName}.</span>
          </>
        }
        sub="Unlock perks for the duration you choose. Funds vest in their StreamWallet — no auto-renew."
        onClose={onClose}
      />

      <StreamerStrip name={streamerName} handle={streamerHandle} avatarUrl={streamerAvatarUrl} />

      {isAlreadySubscribed && <AlreadySubscribedNotice expiryLabel={subscription?.expiryTime} />}

      {!isAlreadySubscribed && (
        <div className="px-7">
          <Eyebrow dim>Duration</Eyebrow>
          <DurationGrid months={months} monthlyUsd={monthlyUsd} onPick={setMonths} />

          {pricing.status === "unpriced" && <SubscriptionsClosedNotice streamerName={streamerName} />}

          <div className="mt-5">
            <SubscriptionSummary
              totalUsd={totalUsd}
              tokenAmountSubLabel={tokenAmountSubLabel}
              months={months}
              selectedToken={selectedToken}
              onOpenPicker={() => setPickerOpen(true)}
            />
          </div>

          {tokenKind.kind !== "USDC" && payment.parsedAmount > BigInt(0) && (
            <SwapQuotePanel
              amountOutMin={payment.amountOutMin}
              usdcDecimals={usdcDecimals}
              slippageBps={slippageBps}
              onSlippageChange={setSlippageBps}
            />
          )}

          <div className="mt-5">
            <SubscriptionPerks />
          </div>

          {totalUsd !== null && monthlyUsd !== null && (
            <div className="mt-5">
              <FeeBreakdown
                rows={[
                  { label: `${months} × monthly · ${fmtUsd(monthlyUsd)}`, value: fmtUsd(totalUsd) },
                  { label: "Platform fee · 5%", value: `− ${fmtUsd((totalUsd * PLATFORM_FEE_BPS) / 10_000)}` },
                  {
                    label: <span className="text-white/85">Streamer receives</span>,
                    value: fmtUsd(totalUsd - (totalUsd * PLATFORM_FEE_BPS) / 10_000),
                    accent: true,
                  },
                ]}
              />
            </div>
          )}

          {payment.swapPathMissing && (
            <ModalAlert className="mt-4">
              No FanX/Kayen liquidity for {tokenSymbol} → USDC. Pick another token.
            </ModalAlert>
          )}
          {payment.quoteBelowCost && !payment.swapPathMissing && (
            <ModalAlert className="mt-4">
              The FanX quote for {tokenSymbol} is below the subscription price. Try again in a moment.
            </ModalAlert>
          )}
        </div>
      )}

      {!isAlreadySubscribed ? (
        <SettlementFooter
          ctaLabel={ctaLabel}
          onSubmit={handleSubmit}
          loading={isLoading}
          disabled={
            pricing.status !== "priced" ||
            payment.parsedAmount === BigInt(0) ||
            insufficient ||
            (!approval.needsApproval && !payment.ready)
          }
          note="One-shot tx · no auto-renew"
          alert={
            <>
              {insufficient && tokenBalance !== undefined && (
                <InsufficientBalanceBanner
                  symbol={tokenSymbol}
                  shortfall={fmtTok(payment.tokenAmount - tokenBalance, tokenDp)}
                />
              )}
              {errorMessage && !insufficient && <ModalAlert className="mb-3">{errorMessage}</ModalAlert>}
            </>
          }
        />
      ) : (
        <div className="border-t border-[#1F1F1F] bg-[#0a0a0a] px-7 py-5">
          <button
            type="button"
            onClick={onClose}
            className="font-display w-full rounded-xl border border-[#262626] bg-[#161616] py-3 text-[13px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:border-[#3A3A3A]"
          >
            Close
          </button>
        </div>
      )}

      <TokenPickerSheet
        open={pickerOpen}
        selectedSymbol={selectedToken.symbol}
        tokens={tokens}
        balances={balanceMap}
        onPick={(t) => {
          setSelectedToken(t);
          setPickerOpen(false);
        }}
        onClose={() => setPickerOpen(false)}
      />
    </StreamerModalShell>
  );
}
