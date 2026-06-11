const USDC_DECIMALS = 1_000_000;

/**
 * Raw 6-decimals USDC string → compact dollar display ("$1,240", "$12.4K",
 * "$1.2M"). Returns null on missing/garbage input so callers can fall back
 * to a placeholder.
 */
export function formatUsdcCompact(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const value = Number(raw) / USDC_DECIMALS;
  if (!Number.isFinite(value) || value < 0) return null;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 10_000) return `$${(value / 1_000).toFixed(1)}K`;
  return `$${value.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
}
