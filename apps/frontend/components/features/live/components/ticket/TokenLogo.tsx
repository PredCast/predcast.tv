import type { BetTokenOption } from "../../domain/tokenOption";

interface TokenLogoProps {
  readonly token: Pick<BetTokenOption, "sym" | "logoUrl" | "logoBg" | "logoTxt">;
  readonly size?: number;
}

export function TokenLogo({ token, size = 28 }: TokenLogoProps) {
  if (token.logoUrl) {
    return (
      <span
        className="flex items-center justify-center overflow-hidden rounded-full"
        style={{ width: size, height: size, background: "#0d0d0d", border: "1px solid #2A2A2A" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- tiny local /public icons, no optimisation needed */}
        <img src={token.logoUrl} alt={token.sym} className="h-full w-full object-cover" />
      </span>
    );
  }
  return (
    <span
      className="font-display flex items-center justify-center rounded-full font-extrabold text-white"
      style={{ width: size, height: size, background: token.logoBg ?? "#1E1E1E", fontSize: Math.round(size * 0.42) }}
    >
      {token.logoTxt ?? token.sym.slice(0, 1)}
    </span>
  );
}
