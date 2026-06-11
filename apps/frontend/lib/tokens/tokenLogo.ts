import { getFanTokenAsset } from '@/config/fanTokenAssets';

/**
 * Resolve the local-public logo path for a token symbol.
 * - USDC / CHZ → bundled icons in `/public`.
 * - Fan tokens → existing `FAN_TOKEN_ASSETS` mapping (PSG, BAR, JUV…).
 * Returns `null` when no asset is configured — callers should render the
 * fallback initials/gradient.
 */
export function tokenLogoFor(symbol: string | undefined): string | null {
    if (!symbol) return null;
    const s = symbol.toUpperCase();
    if (s === 'USDC') return '/usdc.png';
    if (s === 'CHZ' || s === 'WCHZ') return '/chiliz_icon.png';
    const direct = getFanTokenAsset(s)?.logo;
    if (direct) return direct;
    // Kayen-wrapped (W-prefix) and legacy (-L suffix) variants reuse the
    // base token's asset.
    if (s.startsWith('W')) {
        const base = getFanTokenAsset(s.slice(1))?.logo;
        if (base) return base;
    }
    if (s.endsWith('-L')) return getFanTokenAsset(s.slice(0, -2))?.logo ?? null;
    return null;
}
