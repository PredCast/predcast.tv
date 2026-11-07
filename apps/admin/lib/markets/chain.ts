import type { BettingChainDto } from '@chiliztv/shared';

const WEI_PER_CENTI = BigInt('10000000000000000'); // 1e16: CHZ with 2 decimals

/** Wei decimal string → "1,234.56" (2 decimals, truncated). Display only. */
export function weiToChz(wei: string): string {
  const centi = Number(BigInt(wei) / WEI_PER_CENTI) / 100;
  return centi.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export const explorerTxUrl = (chain: BettingChainDto, hash: string) => `${chain.explorerUrl}/tx/${hash}`;
export const explorerAddressUrl = (chain: BettingChainDto, address: string) => `${chain.explorerUrl}/address/${address}`;

/** Link to the match page of the app; null until NEXT_PUBLIC_APP_URL is configured for the admin. */
export function appLiveUrl(apiFootballId: number): string | null {
  const base = process.env.NEXT_PUBLIC_APP_URL;
  return base ? `${base.replace(/\/$/, '')}/live/${apiFootballId}` : null;
}
