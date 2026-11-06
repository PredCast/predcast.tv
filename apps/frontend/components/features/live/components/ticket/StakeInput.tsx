import { ChevronDown } from "lucide-react";

import type { TicketTokenOption } from "../../hooks/bet-ticket/useTicketToken";
import { TokenLogo } from "./TokenLogo";

interface StakeInputProps {
  readonly amount: string;
  readonly token: TicketTokenOption;
  readonly disabled: boolean;
  readonly onAmountChange: (value: string) => void;
  readonly onOpenTokenPicker: () => void;
}

const DECIMAL_INPUT = /^\d*(?:\.\d*)?$/;

export function StakeInput({ amount, token, disabled, onAmountChange, onOpenTokenPicker }: StakeInputProps) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-[#2A2A2A] bg-[#0d0d0d] px-3 py-2 focus-within:border-[#E8001D]">
      <label htmlFor="bet-ticket-amount" className="sr-only">
        Stake amount in {token.sym}
      </label>
      <input
        id="bet-ticket-amount"
        inputMode="decimal"
        autoComplete="off"
        placeholder="0.00"
        value={amount}
        disabled={disabled}
        onChange={(e) => {
          if (DECIMAL_INPUT.test(e.target.value)) onAmountChange(e.target.value);
        }}
        className="font-display min-w-0 flex-1 bg-transparent text-[26px] font-extrabold leading-none text-white outline-none placeholder:text-white/15 disabled:opacity-50"
      />
      <button
        type="button"
        onClick={onOpenTokenPicker}
        disabled={disabled}
        aria-label={`Stake currency: ${token.sym}. Change currency`}
        className="flex shrink-0 items-center gap-1.5 rounded-md border border-[#2A2A2A] bg-[#141414] px-2 py-1.5 hover:border-[#3A3A3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] disabled:opacity-50"
      >
        <TokenLogo token={token} size={18} />
        <span className="font-mono-ctv text-[11px] font-bold uppercase text-white">{token.sym}</span>
        <ChevronDown size={12} className="text-white/55" aria-hidden />
      </button>
    </div>
  );
}
