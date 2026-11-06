"use client";

import { useMemo } from "react";
import { parseUnits, type Address } from "viem";
import { useBalance } from "wagmi";

import { chilizConfig } from "@/config/chiliz.config";
import { useBetTokenBalances } from "@/hooks/useBetTokenBalances";
import { usePoolDecimals } from "@/hooks/usePoolDecimals";
import { useSwapRouterTokenAvailability, type TokenRouteStatus } from "@/hooks/useSwapRouterTokenAvailability";
import { tokenLogoFor } from "@/lib/tokens/tokenLogo";

import { fixedTokenDecimals, tokenLabel, type BetToken } from "../../domain/betTicket";
import type { BetTokenOption } from "../../domain/tokenOption";

export type TicketTokenOption = BetTokenOption & { readonly kind: BetToken["kind"]; readonly address?: Address };

const UNAVAILABLE_COPY: Record<Exclude<TokenRouteStatus, "available">, string> = {
  checking: "Checking route…",
  unavailable: "Quote unavailable",
};

function reasonFor(status: TokenRouteStatus): string | undefined {
  return status === "available" ? undefined : UNAVAILABLE_COPY[status];
}

/** Stake currency side of the ticket: balances, on-chain decimals, parsed amount and picker options. */
export function useTicketToken(token: BetToken, amount: string, walletAddress: Address | undefined, enabled: boolean) {
  const { assetDecimals: usdcDecimals } = usePoolDecimals();
  const { byAddress: holdings, chzBalance } = useBetTokenBalances(walletAddress, enabled);
  const { statusOf } = useSwapRouterTokenAvailability();

  const erc20Decimals = token.kind === "ERC20" ? holdings.get(token.address.toLowerCase())?.decimals : undefined;
  // Fan tokens parse with contract-reported decimals only; `undefined` keeps the amount at 0 while they load.
  const decimals = token.kind === "ERC20" ? erc20Decimals : fixedTokenDecimals(token, usdcDecimals);
  const numericAmount = Number(amount);
  const isValidAmount = !Number.isNaN(numericAmount) && numericAmount > 0;
  const parsedAmount = isValidAmount && decimals !== undefined ? safeParseUnits(amount, decimals) : BigInt(0);

  const erc20Address: Address | undefined =
    token.kind === "USDC" ? chilizConfig.usdc : token.kind === "ERC20" ? token.address : undefined;

  const { data: erc20Balance } = useBalance({
    address: walletAddress,
    token: erc20Address,
    chainId: chilizConfig.chainId,
    query: { enabled: enabled && !!walletAddress && !!erc20Address },
  });
  const { data: nativeBalance } = useBalance({
    address: token.kind === "CHZ" ? walletAddress : undefined,
    chainId: chilizConfig.chainId,
    query: { enabled: enabled && token.kind === "CHZ" && !!walletAddress },
  });
  const balanceSource = token.kind === "CHZ" ? nativeBalance : erc20Balance;
  const balance = balanceSource ? Number(balanceSource.formatted) : 0;
  const balanceRaw = balanceSource?.value;

  const options = useMemo<ReadonlyArray<TicketTokenOption>>(() => {
    const usdc: TicketTokenOption = {
      kind: "USDC",
      key: "USDC",
      sym: "USDC",
      name: "USD Coin",
      balance: holdings.get(chilizConfig.usdc.toLowerCase())?.balance ?? 0,
      decimals: usdcDecimals,
      needsSwap: false,
      logoTxt: "$",
      logoBg: "#2775CA",
      logoUrl: tokenLogoFor("USDC") ?? undefined,
    };
    const chz: TicketTokenOption = {
      kind: "CHZ",
      key: "CHZ",
      sym: "CHZ",
      name: "Chiliz",
      balance: chzBalance,
      decimals: 4,
      needsSwap: true,
      logoTxt: "C",
      logoBg: "#E8001D",
      logoUrl: tokenLogoFor("CHZ") ?? undefined,
      unavailableReason: reasonFor(statusOf(chilizConfig.wchz)),
    };
    const fanTokens = chilizConfig.tokens
      .filter((t) => !!t.tokenAddress)
      .map<TicketTokenOption>((t) => {
        const address = t.tokenAddress as Address;
        const holding = holdings.get(address.toLowerCase());
        return {
          kind: "ERC20",
          address,
          key: t.symbol,
          sym: t.symbol,
          name: t.name,
          balance: holding?.balance ?? 0,
          decimals: holding?.decimals ?? 4,
          needsSwap: true,
          logoUrl: tokenLogoFor(t.symbol) ?? undefined,
          unavailableReason: reasonFor(statusOf(address)),
        };
      });
    return [usdc, chz, ...fanTokens];
  }, [holdings, chzBalance, usdcDecimals, statusOf]);

  const current = options.find((o) => o.key === tokenLabel(token)) ?? options[0];

  return {
    usdcDecimals,
    decimals,
    numericAmount,
    isValidAmount,
    parsedAmount,
    erc20Address,
    balance,
    balanceRaw,
    options,
    current: { ...current, balance },
    insufficientBalance: parsedAmount > BigInt(0) && balance < numericAmount,
    usdcZeroBalance: token.kind === "USDC" && balance <= 0,
  };
}

export type TicketToken = ReturnType<typeof useTicketToken>;

function safeParseUnits(value: string, decimals: number): bigint {
  try {
    return parseUnits(value, decimals);
  } catch {
    return BigInt(0);
  }
}

/** Maps a picker row back to the ticket token union; `null` when the row is disabled. */
export function tokenFromOption(option: TicketTokenOption): BetToken | null {
  if (option.unavailableReason) return null;
  if (option.kind === "USDC") return { kind: "USDC" };
  if (option.kind === "CHZ") return { kind: "CHZ" };
  if (!option.address) return null;
  return { kind: "ERC20", address: option.address, symbol: option.sym, name: option.name };
}
