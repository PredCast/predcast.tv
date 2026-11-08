"use client";

import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

import { useRequireChain } from "@/hooks/useRequireChain";

import type { TicketCta } from "../../domain/ticketCta";
import { ticketCtaCopy } from "../../domain/ticketCtaCopy";

interface BetTicketCtaProps {
  readonly cta: TicketCta;
  readonly tokenSymbol: string;
  readonly policyMessage: string;
  readonly onSubmit: () => void;
}

export function BetTicketCta({ cta, tokenSymbol, policyMessage, onSubmit }: BetTicketCtaProps) {
  const { setShowAuthFlow } = useDynamicContext();
  const { switchToTarget, isSwitching } = useRequireChain();
  const copy = ticketCtaCopy(cta, tokenSymbol, policyMessage);

  const onClick = () => {
    if (cta.kind === "connect") return setShowAuthFlow(true);
    if (cta.kind === "switch-network") return switchToTarget();
    onSubmit();
  };
  const busy = cta.kind === "approving" || cta.kind === "confirming" || isSwitching;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!copy.enabled || busy}
      aria-busy={busy}
      className="w-full rounded-md bg-[#E8001D] px-4 py-3.5 text-[13px] font-bold uppercase tracking-[0.06em] text-white transition-all hover:-translate-y-px hover:bg-[#FF1737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111] disabled:translate-y-0 disabled:cursor-not-allowed disabled:bg-[#1A1A1A] disabled:text-white/45 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      style={copy.enabled && !busy ? { boxShadow: "0 8px 32px rgba(232,0,29,0.25)" } : undefined}
    >
      {copy.label}
    </button>
  );
}
