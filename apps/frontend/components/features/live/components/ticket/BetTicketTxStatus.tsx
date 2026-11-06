import { txExplorerUrl } from "@/lib/explorer";

import type { TxOutcome } from "../../hooks/bet-ticket/useTicketSubmit";

interface BetTicketTxStatusProps {
  readonly outcome: TxOutcome;
  readonly txHash: `0x${string}` | undefined;
  readonly onNewPrediction: () => void;
  readonly onRetry: () => void;
}

const FAILURE_TITLES = {
  rejected: "Signature rejected in wallet",
  reverted: "Prediction failed on-chain",
  unknown: "Prediction failed",
} as const;

/** Inline result of the last placeBet tx; pending states are carried by the CTA label. */
export function BetTicketTxStatus({ outcome, txHash, onNewPrediction, onRetry }: BetTicketTxStatusProps) {
  if (outcome.kind === "idle") return null;
  const success = outcome.kind === "success";
  const accent = success ? "#2dd4a4" : "#E8001D";

  return (
    <div
      role="status"
      aria-live="polite"
      className="rounded-lg px-3 py-2.5"
      style={{ border: `1px solid ${accent}55`, background: `${accent}14` }}
    >
      <div className="font-mono-ctv text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: accent }}>
        {success ? "Prediction placed" : FAILURE_TITLES[outcome.failure]}
      </div>
      {!success && outcome.reason && <p className="mt-1 text-[11px] leading-snug text-white/65">{outcome.reason}</p>}
      <div className="mt-2 flex items-center gap-3">
        {txHash && (
          <a
            href={txExplorerUrl(txHash)}
            target="_blank"
            rel="noreferrer"
            className="font-mono-ctv text-[10px] uppercase tracking-[0.14em] text-white/55 underline-offset-2 hover:text-white hover:underline"
          >
            View tx
          </a>
        )}
        <button
          type="button"
          onClick={success ? onNewPrediction : onRetry}
          className="font-mono-ctv ml-auto rounded border border-[#2A2A2A] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white hover:border-[#E8001D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
        >
          {success ? "New prediction" : "Try again"}
        </button>
      </div>
    </div>
  );
}
