"use client";

import { X } from "lucide-react";

import { Eyebrow } from "@/components/live/primitives";

import type { BetTokenOption } from "../../domain/tokenOption";
import { TokenOptionRow } from "./TokenOptionRow";

interface TokenSelectModalProps {
  readonly open: boolean;
  readonly tokens: ReadonlyArray<BetTokenOption>;
  readonly onPick: (token: BetTokenOption) => void;
  readonly onClose: () => void;
}

/** Stake-currency picker overlaid on the nearest positioned ancestor (the ticket). */
export function TokenSelectModal({ open, tokens, onPick, onClose }: TokenSelectModalProps) {
  if (!open) return null;
  return (
    <div
      className="absolute inset-0 z-[100] flex items-end p-2 sm:items-center sm:justify-center"
      style={{ background: "rgba(0,0,0,0.65)" }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-label="Select stake currency"
        onClick={(e) => e.stopPropagation()}
        className="flex w-full max-w-[400px] flex-col overflow-hidden rounded-2xl border border-[#1E1E1E] bg-[#0A0A0A]"
        style={{ maxHeight: "min(560px, 80dvh)" }}
      >
        <div className="flex flex-shrink-0 items-center justify-between border-b border-[#1E1E1E] px-5 py-4">
          <Eyebrow>Select stake currency</Eyebrow>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close picker"
            className="rounded text-white/45 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
          >
            <X size={13} aria-hidden />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-2">
          {tokens.map((tk) => (
            <TokenOptionRow key={tk.key} token={tk} onPick={onPick} />
          ))}
        </div>
      </div>
    </div>
  );
}
