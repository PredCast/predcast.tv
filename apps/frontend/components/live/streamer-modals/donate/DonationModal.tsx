"use client";

import { useEffect, useMemo, useState } from "react";
import { formatUnits, parseUnits, type Address } from "viem";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

import { useNetworkRouter } from "@/hooks/useNetworkRouter";
import { useTokenDecimals } from "@/hooks/useTokenDecimals";
import { usePoolDecimals } from "@/hooks/usePoolDecimals";
import { useFanTokens } from "@/hooks/useFanTokens";
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
  TokenChipDisplay,
  TokenPickerSheet,
  buildStreamerTokenList,
  decimalsFor,
  symbolFor,
  toRouterToken,
  useRouterApproval,
  useStreamerSwapQuote,
  type StreamerTokenView,
} from "../shared";
import { BigTipBanner } from "./BigTipBanner";
import { DonationAmountInput } from "./DonationAmountInput";
import { DonationMessageField } from "./DonationMessageField";
import { DonationPresetGrid } from "./DonationPresetGrid";
import { DonationSuccess, type DonationSnapshot } from "./DonationSuccess";

interface DonationModalProps {
  open: boolean;
  onClose: () => void;
  streamerAddress: Address;
  streamerName: string;
  streamerHandle?: string;
  streamerAvatarUrl?: string;
}

const PLATFORM_FEE_BPS = 500; // 5% — display only; the contract owns the real number
const DEADLINE_MIN = 20;
const DEFAULT_SLIPPAGE_BPS = 50;

const fmtUsd = (n: number) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtTok = (n: number, dp: number) =>
  n.toLocaleString("en-US", { minimumFractionDigits: dp, maximumFractionDigits: dp });

/**
 * Streamer donation modal on top of `NetworkRouter.donate*`. Supports USDC direct,
 * native CHZ, and any ERC-20 fan token via FanX/Kayen quote + slippage.
 */
export function DonationModal({
  open,
  onClose,
  streamerAddress,
  streamerName,
  streamerHandle,
  streamerAvatarUrl,
}: DonationModalProps) {
  const tokens = useMemo(() => buildStreamerTokenList(), []);
  const [selectedToken, setSelectedToken] = useState<StreamerTokenView>(tokens[0]);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [amount, setAmount] = useState<string>("5");
  const [message, setMessage] = useState<string>("");
  const [slippageBps, setSlippageBps] = useState<number>(DEFAULT_SLIPPAGE_BPS);
  const [successSnapshot, setSuccessSnapshot] = useState<DonationSnapshot | null>(null);

  const { donate, donateState, routerAddress } = useNetworkRouter();
  const { assetDecimals: usdcDecimals } = usePoolDecimals();
  const { primaryWallet } = useDynamicContext();
  const userAddress = primaryWallet?.address as Address | undefined;
  const { tokenBalances } = useFanTokens(userAddress, !!userAddress);

  const tokenKind = selectedToken.token;
  const tokenSymbol = symbolFor(tokenKind);
  const erc20Decimals = useTokenDecimals(tokenKind.kind === "ERC20" ? tokenKind.address : undefined);
  const decimals = decimalsFor(tokenKind, usdcDecimals, erc20Decimals);

  const parsedAmount: bigint = useMemo(() => {
    if (!amount || decimals === undefined) return BigInt(0);
    try {
      return parseUnits(amount, decimals);
    } catch {
      return BigInt(0);
    }
  }, [amount, decimals]);

  const balanceMap = useMemo(() => {
    const map: Record<string, number | undefined> = {};
    for (const tb of tokenBalances) map[tb.symbol] = tb.balance;
    return map;
  }, [tokenBalances]);

  const approval = useRouterApproval(tokenKind, userAddress, routerAddress, parsedAmount);
  const { quotedUsdcOut, amountOutMin, swapPathMissing, swapReady } = useStreamerSwapQuote(
    tokenKind,
    parsedAmount,
    slippageBps,
  );

  const numericAmount = Number(amount) || 0;
  const tokenBalance = balanceMap[tokenSymbol];
  const insufficient =
    tokenBalance !== undefined && parsedAmount > BigInt(0) && numericAmount > tokenBalance;

  // USDC path: the input itself; swap paths: the live quote once priced.
  const usdcEquivalent =
    tokenKind.kind === "USDC"
      ? numericAmount
      : quotedUsdcOut !== undefined && usdcDecimals !== undefined
        ? Number(formatUnits(quotedUsdcOut, usdcDecimals))
        : null;
  const platformFeeUsd = usdcEquivalent !== null ? (usdcEquivalent * PLATFORM_FEE_BPS) / 10_000 : null;
  const streamerGetsUsd =
    usdcEquivalent !== null && platformFeeUsd !== null ? usdcEquivalent - platformFeeUsd : null;

  const txError = donateState.error ?? approval.approveError;
  const decodedError = txError ? decodeContractError(txError) : null;
  const errorMessage = decodedError
    ? decodedError.description ? `${decodedError.title} — ${decodedError.description}` : decodedError.title
    : null;

  // Snapshot at tx confirm so the success view stays stable across resets.
  useEffect(() => {
    if (donateState.isSuccess && !successSnapshot) {
      setSuccessSnapshot({
        amountUsd: usdcEquivalent,
        tokenAmount: numericAmount,
        tokenSymbol,
        message,
        txHash: donateState.txHash,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [donateState.isSuccess]);

  const resetForm = () => {
    setSuccessSnapshot(null);
    setAmount("5");
    setMessage("");
  };

  const isLoading =
    donateState.isPending ||
    donateState.isConfirming ||
    approval.isApprovePending ||
    approval.isApproveConfirming;

  const handleSubmit = () => {
    if (approval.needsApproval) return approval.approve();
    if (!swapReady) return;
    donate({
      token: toRouterToken(tokenKind),
      streamer: streamerAddress,
      message,
      amount: parsedAmount,
      amountOutMin,
      deadline: BigInt(Math.floor(Date.now() / 1000) + DEADLINE_MIN * 60),
    });
  };

  const ctaLabel = approval.isApprovePending
    ? "Confirm approval…"
    : approval.isApproveConfirming
      ? `Approving ${tokenSymbol}…`
      : donateState.isPending
        ? "Confirm in wallet…"
        : donateState.isConfirming
          ? "Sending donation…"
          : approval.needsApproval
            ? `Approve ${tokenSymbol} →`
            : usdcEquivalent !== null
              ? `Donate ${fmtUsd(usdcEquivalent)} →`
              : `Donate ${tokenSymbol} →`;

  const subLabel =
    tokenKind.kind === "USDC"
      ? undefined
      : usdcEquivalent !== null
        ? `≈ ${fmtUsd(usdcEquivalent)} USDC`
        : "FanX quote pending…";

  if (successSnapshot) {
    return (
      <DonationSuccess
        open={open}
        streamerName={streamerName}
        snapshot={successSnapshot}
        onAnother={resetForm}
        onClose={() => {
          resetForm();
          onClose();
        }}
      />
    );
  }

  return (
    <StreamerModalShell open={open} onClose={onClose} ariaTitle="Donate to streamer">
      <StreamerModalHeader
        eyebrow="Direct support · on-chain"
        title={
          <>
            Tip the <span className="text-[#E8001D]">streamer.</span>
          </>
        }
        sub="Funds land in their StreamWallet within seconds. Optional message shows on the live overlay."
        onClose={onClose}
      />

      <StreamerStrip name={streamerName} handle={streamerHandle} avatarUrl={streamerAvatarUrl} />

      <div className="px-7">
        <div className="mb-3 flex items-center justify-between">
          <Eyebrow dim>Amount · {tokenKind.kind === "USDC" ? "USD" : tokenSymbol}</Eyebrow>
          <TokenChipDisplay token={selectedToken} onClick={() => setPickerOpen(true)} />
        </div>

        {tokenKind.kind === "USDC" && (
          <DonationPresetGrid amount={numericAmount} onPick={(p) => setAmount(String(p))} />
        )}

        <div className={tokenKind.kind === "USDC" ? "mt-4" : ""}>
          <DonationAmountInput
            amount={amount}
            onChange={setAmount}
            prefix={tokenKind.kind === "USDC" ? "$" : `$${tokenSymbol}`}
            subLabel={subLabel}
            onMax={tokenBalance !== undefined && tokenBalance > 0 ? () => setAmount(String(tokenBalance)) : undefined}
            maxLabel={
              tokenBalance !== undefined
                ? `Max · ${fmtTok(tokenBalance, tokenSymbol === "CHZ" ? 0 : 2)} ${tokenSymbol}`
                : "Max"
            }
          />
        </div>

        <div className="mt-4">
          <DonationMessageField message={message} onChange={setMessage} />
        </div>

        {usdcEquivalent !== null && usdcEquivalent >= 50 && (
          <div className="mt-4">
            <BigTipBanner amount={usdcEquivalent} />
          </div>
        )}

        {tokenKind.kind !== "USDC" && parsedAmount > BigInt(0) && (
          <SwapQuotePanel
            showQuote
            quotedUsdcOut={quotedUsdcOut}
            amountOutMin={amountOutMin}
            usdcDecimals={usdcDecimals}
            slippageBps={slippageBps}
            onSlippageChange={setSlippageBps}
          />
        )}

        {usdcEquivalent !== null && (
          <div className="mt-5">
            <FeeBreakdown
              rows={[
                { label: "You send", value: fmtUsd(usdcEquivalent) },
                { label: "Platform fee · 5%", value: `− ${fmtUsd(platformFeeUsd ?? 0)}` },
                {
                  label: (
                    <>
                      <span className="text-white/35">→ </span>
                      <span className="text-white/85">Streamer receives</span>
                    </>
                  ),
                  value: fmtUsd(streamerGetsUsd ?? 0),
                  accent: true,
                },
              ]}
            />
          </div>
        )}

        {swapPathMissing && (
          <ModalAlert className="mt-4">
            No FanX/Kayen liquidity for {tokenSymbol} → USDC. Pick another token.
          </ModalAlert>
        )}
      </div>

      <SettlementFooter
        ctaLabel={ctaLabel}
        onSubmit={handleSubmit}
        loading={isLoading}
        disabled={
          parsedAmount === BigInt(0) ||
          swapPathMissing ||
          insufficient ||
          (!approval.needsApproval && !swapReady)
        }
        note="Settled on Chiliz · non-custodial"
        alert={
          <>
            {insufficient && tokenBalance !== undefined && (
              <InsufficientBalanceBanner
                symbol={tokenSymbol}
                shortfall={fmtTok(numericAmount - tokenBalance, tokenSymbol === "CHZ" ? 0 : 2)}
              />
            )}
            {errorMessage && !insufficient && <ModalAlert className="mb-3">{errorMessage}</ModalAlert>}
          </>
        }
      />

      <TokenPickerSheet
        open={pickerOpen}
        selectedSymbol={selectedToken.symbol}
        tokens={tokens}
        balances={balanceMap}
        onPick={(t) => {
          setSelectedToken(t);
          setPickerOpen(false);
          setAmount(t.token.kind === "USDC" ? "5" : "");
        }}
        onClose={() => setPickerOpen(false)}
      />
    </StreamerModalShell>
  );
}
