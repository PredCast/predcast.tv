/** Redis keys of the upstream usage counters, shared by the HTTP clients and the usage reader. */
export const apiFootballDailyKey = (now: Date): string => `metrics:apifootball:reqs:${now.toISOString().slice(0, 10)}`;
/** Plan limit last read from `x-ratelimit-requests-limit`. */
export const API_FOOTBALL_LIMIT_KEY = 'metrics:apifootball:limit';
export const coingeckoMonthlyKey = (now: Date): string => `metrics:coingecko:${now.toISOString().slice(0, 7)}`;
/** CoinGecko Demo plan: 10,000 calls per month. */
export const COINGECKO_MONTHLY_BUDGET = 10_000;
