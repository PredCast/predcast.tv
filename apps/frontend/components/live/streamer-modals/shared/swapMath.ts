const BPS = BigInt(10_000);

function ceilDiv(a: bigint, b: bigint): bigint {
  return (a + b - BigInt(1)) / b;
}

/** Quote minus slippage, never below 1 raw unit: the router rejects a 0 minimum. */
export function slippageFloor(quoted: bigint, slippageBps: number): bigint {
  const min = (quoted * (BPS - BigInt(slippageBps))) / BPS;
  return min > BigInt(0) ? min : BigInt(1);
}

/**
 * Token amount (atomic units) expected to swap into at least `targetUsdc`, from the price of
 * one whole token. Rounded up to `fractionDigits` so 0-dp tokens never carry a fraction.
 * Returns 0 when the unit price is unknown.
 */
export function tokenAmountForUsdc(args: {
  readonly targetUsdc: bigint;
  readonly unitPriceUsdc: bigint;
  readonly decimals: number;
  readonly fractionDigits: number;
}): bigint {
  const { targetUsdc, unitPriceUsdc, decimals, fractionDigits } = args;
  if (unitPriceUsdc <= BigInt(0) || targetUsdc <= BigInt(0)) return BigInt(0);
  const raw = ceilDiv(targetUsdc * BigInt(10) ** BigInt(decimals), unitPriceUsdc);
  const step = BigInt(10) ** BigInt(Math.max(0, decimals - Math.min(fractionDigits, decimals)));
  return ceilDiv(raw, step) * step;
}

/** `amount` scaled up by `bps` basis points. */
export function withMarginBps(amount: bigint, bps: number): bigint {
  return ceilDiv(amount * (BPS + BigInt(bps)), BPS);
}
