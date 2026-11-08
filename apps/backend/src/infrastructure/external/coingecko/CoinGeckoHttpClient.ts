import { inject, injectable } from 'tsyringe';
import axios, { type AxiosInstance } from 'axios';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';

import { env } from '../../config/environment';
import { logger } from '../../logging/logger';

const BASE_URL = 'https://api.coingecko.com/api/v3';
const TIMEOUT_MS = 10_000;
/** Monthly counter outlives the month so the last day can still be read back. */
const COUNTER_TTL_SECONDS = 40 * 24 * 60 * 60;

/**
 * Shared CoinGecko transport. Sends the Demo key when `COINGECKO_API_KEY` is set (public API
 * otherwise) and counts every upstream call per month in Redis (`metrics:coingecko:YYYY-MM`),
 * one counter per environment, to keep the Demo plan's 10k monthly credits in check.
 */
@injectable()
export class CoinGeckoHttpClient {
    private readonly http: AxiosInstance;
    private readonly keyed: boolean;

    constructor(
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {
        this.keyed = !!env.COINGECKO_API_KEY;
        this.http = axios.create({
            baseURL: BASE_URL,
            timeout: TIMEOUT_MS,
            headers: env.COINGECKO_API_KEY ? { 'x-cg-demo-api-key': env.COINGECKO_API_KEY } : {},
        });
    }

    /** GET with call accounting. `endpoint` is the logged label (no ids), e.g. `/coins/:id/market_chart`. */
    async get<T>(endpoint: string, path: string, params: Record<string, string | number>): Promise<T> {
        try {
            const { data, status } = await this.http.get<T>(path, { params });
            await this.record(endpoint, status);
            return data;
        } catch (err) {
            const status = axios.isAxiosError(err) ? err.response?.status : undefined;
            await this.record(endpoint, status ?? 0);
            throw err;
        }
    }

    private async record(endpoint: string, status: number): Promise<void> {
        const month = this.clock.now().toISOString().slice(0, 7);
        let monthCount: number | null = null;
        try {
            monthCount = await this.cache.incr(`metrics:coingecko:${month}`, COUNTER_TTL_SECONDS);
        } catch {
            // Metrics must never break a price read.
        }
        logger.info('coingecko_upstream_call', { endpoint, status, keyed: this.keyed, month, monthCount });
    }
}
