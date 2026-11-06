export type StakePresetPct = 25 | 50 | 100;

export const STAKE_PRESETS_PCT: ReadonlyArray<StakePresetPct> = [25, 50, 100];

/**
 * Raw amount for a balance preset. `reserveRaw` is kept aside (gas for native CHZ),
 * applied before the percentage; never negative.
 */
export function presetAmountRaw(balanceRaw: bigint, pct: StakePresetPct, reserveRaw: bigint = BigInt(0)): bigint {
    const spendable = balanceRaw - reserveRaw;
    if (spendable <= BigInt(0)) return BigInt(0);
    return (spendable * BigInt(pct)) / BigInt(100);
}

/**
 * Decimal string of a raw amount for an input field, trimmed of trailing zeros and capped at
 * `maxFractionDigits` (truncated, never rounded up past the balance).
 */
export function toInputAmount(raw: bigint, decimals: number, maxFractionDigits = 6): string {
    if (raw <= BigInt(0)) return "0";
    const base = BigInt(10) ** BigInt(decimals);
    const whole = raw / base;
    if (decimals === 0) return whole.toString();
    const fraction = (raw % base).toString().padStart(decimals, "0").slice(0, maxFractionDigits).replace(/0+$/, "");
    return fraction ? `${whole}.${fraction}` : whole.toString();
}

/**
 * Native-gas reserve for a CHZ stake: estimate × gas price × margin, floored at `floorWei`.
 * Missing estimates fall back to the floor.
 */
export function gasReserveWei(
    gasLimit: bigint | undefined,
    gasPrice: bigint | undefined,
    marginBps: number,
    floorWei: bigint,
): bigint {
    if (gasLimit === undefined || gasPrice === undefined) return floorWei;
    const estimate = (gasLimit * gasPrice * BigInt(marginBps)) / BigInt(10_000);
    return estimate > floorWei ? estimate : floorWei;
}
