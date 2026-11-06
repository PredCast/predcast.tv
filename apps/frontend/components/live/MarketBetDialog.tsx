"use client";

import { useEffect, useMemo } from "react";
import type { Address } from "viem";
import { toast } from "sonner";

import { Dialog, DialogContent, DialogTitle } from "@chiliztv/ui";

import type { MarketSelection, MatchBettableContext } from "@/components/features/live/domain/types";
import { getMarketSpec } from "@/lib/contracts/markets";

import { BetDialogBody } from "./dialog/BetDialogBody";

interface MarketBetDialogProps {
  open: boolean;
  onClose: () => void;
  contractAddress: Address;
  walletAddress?: string;
  selection: MarketSelection | null;
  homeTeam?: string;
  awayTeam?: string;
  homeLogo?: string | null;
  awayLogo?: string | null;
  /** Match metadata for `isBettable`; `undefined` never blocks (legacy call-sites). */
  match?: MatchBettableContext;
  /** Client clock — `null` during SSR. */
  now?: Date | null;
}

/** Modal shell around the shared bet ticket. Basketball never reaches it (the list renders a placeholder). */
export function MarketBetDialog({ open, onClose, selection, homeTeam, awayTeam, now, ...rest }: MarketBetDialogProps) {
  const spec = useMemo(() => (selection ? getMarketSpec(selection.marketTypeHash) : null), [selection]);

  // A legacy market type leaking in (e.g. via deep link) has no catalog entry: warn and close.
  useEffect(() => {
    if (!open || !selection || spec) return;
    toast.warning("Market not available", {
      description: "This market type isn't supported in the predictions UI yet.",
    });
    onClose();
  }, [open, selection, spec, onClose]);

  if (!selection) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="flex w-full max-w-[540px] flex-col gap-0 overflow-hidden rounded-2xl border border-[#1E1E1E] bg-[#0A0A0A] p-0"
        style={{ maxHeight: "90dvh", boxShadow: "0 30px 80px rgba(0,0,0,0.55)" }}
      >
        <DialogTitle className="sr-only">
          Place prediction — {selection.marketLabel} on {homeTeam ?? "Home"} vs {awayTeam ?? "Away"}
        </DialogTitle>
        {open && spec ? (
          <BetDialogBody
            key={selection.marketId}
            {...rest}
            selection={selection}
            spec={spec}
            homeTeam={homeTeam}
            awayTeam={awayTeam}
            now={now ?? null}
            networkLabel="Chiliz Spicy testnet"
            onClose={onClose}
          />
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
