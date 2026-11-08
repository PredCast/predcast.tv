import { formatTokenBalance, formatUsdValue, type BetTokenOption } from "../../domain/tokenOption";
import { TokenLogo } from "./TokenLogo";

interface TokenOptionRowProps {
  readonly token: BetTokenOption;
  readonly onPick: (token: BetTokenOption) => void;
}

export function TokenOptionRow({ token, onPick }: TokenOptionRowProps) {
  const unavailable = !!token.unavailableReason;
  const dim = token.balance === 0 || unavailable;
  return (
    <button
      type="button"
      onClick={() => onPick(token)}
      disabled={unavailable}
      className={`flex w-full items-center gap-3 rounded-md px-3 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] ${
        unavailable ? "cursor-not-allowed" : "hover:bg-[#111]"
      } ${dim ? "opacity-45" : ""}`}
    >
      <TokenLogo token={token} size={32} />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-display text-[14px] font-bold uppercase text-white">${token.sym}</span>
          {unavailable ? (
            <span className="font-mono-ctv text-[8px] uppercase tracking-[0.16em] text-[#F5C518]">{token.unavailableReason}</span>
          ) : token.needsSwap ? (
            <span className="font-mono-ctv text-[8px] uppercase tracking-[0.16em] text-[#E8001D]/70">Swaps via Kayen</span>
          ) : null}
        </div>
        <div className="font-mono-ctv text-[10px] uppercase tracking-[0.16em] text-white/45">{token.name}</div>
      </div>
      <div className="text-right">
        <div className="font-mono-ctv text-[12px] font-semibold tabular-nums text-white">
          {formatTokenBalance(token.balance, token.decimals > 2 ? 2 : token.decimals)}
        </div>
        {token.usdRate && token.balance > 0 && (
          <div className="font-mono-ctv text-[9px] uppercase tracking-[0.16em] text-white/40">
            ≈ {formatUsdValue(token.balance * token.usdRate)}
          </div>
        )}
      </div>
    </button>
  );
}
