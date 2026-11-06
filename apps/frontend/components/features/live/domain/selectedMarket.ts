import { getMarketSpec, isHiddenMarket, type MarketPoolSnapshot } from "@/lib/contracts/markets";

/** Double Chance variant carried in `line` (DefaultMarkets: 0 = 1X, 1 = 12, 2 = 2X). */
const DOUBLE_CHANCE_VARIANTS: Readonly<Record<number, string>> = { 0: "1X", 1: "12", 2: "2X" };

/** Markets the ticket can show: catalogued, not legacy-hidden, and bettable by type. */
export function ticketMarkets(markets: ReadonlyArray<MarketPoolSnapshot>): MarketPoolSnapshot[] {
  return markets.filter((m) => !isHiddenMarket(m.marketType) && !!getMarketSpec(m.marketType)?.supportsBetting);
}

/** Explicit choice when still listed, otherwise the 1X2 market, otherwise the first one. */
export function resolveSelectedMarket(
  markets: ReadonlyArray<MarketPoolSnapshot>,
  marketId: number | null,
): MarketPoolSnapshot | undefined {
  const explicit = marketId === null ? undefined : markets.find((m) => Number(m.marketId) === marketId);
  return explicit ?? markets.find((m) => getMarketSpec(m.marketType)?.key === "winner") ?? markets[0];
}

/** Short chip label for the market selector (e.g. "O/U 2.5", "Double chance · 1X"). */
export function marketChipLabel(
  market: Pick<MarketPoolSnapshot, "marketType" | "line">,
  homeTeam?: string,
  awayTeam?: string,
): string {
  const spec = getMarketSpec(market.marketType);
  if (!spec) return "Market";
  switch (spec.key) {
    case "winner":
      return "1X2";
    case "halftime":
      return "Half-time";
    case "goalstotal":
      return `O/U ${(market.line / 10).toFixed(1)}`;
    case "bothscore":
      return "BTTS";
    case "fulltimewinner":
      return "To qualify";
    case "doublechance": {
      const variant = DOUBLE_CHANCE_VARIANTS[market.line];
      if (variant) return `DC ${variant}`;
      const yes = spec.getOutcomes(market.line, homeTeam, awayTeam).find((o) => o.selection === 1);
      return yes ? yes.label.replace(/ — Yes$/i, "") : "Double chance";
    }
    default:
      return spec.label;
  }
}
