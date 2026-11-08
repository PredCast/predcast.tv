import { inject, injectable } from 'tsyringe';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { IUpstreamUsageReader, UpstreamUsage } from '@chiliztv/domain/shared/ports/IUpstreamUsageReader';

import { API_FOOTBALL_LIMIT_KEY, COINGECKO_MONTHLY_BUDGET, apiFootballDailyKey, coingeckoMonthlyKey } from './usageKeys';

@injectable()
export class RedisUpstreamUsageReader implements IUpstreamUsageReader {
    constructor(@inject(TOKENS.ICacheService) private readonly cache: ICacheService) {}

    async read(now: Date): Promise<UpstreamUsage> {
        const [daily, limit, monthly] = await Promise.all([
            this.number(apiFootballDailyKey(now)),
            this.number(API_FOOTBALL_LIMIT_KEY),
            this.number(coingeckoMonthlyKey(now)),
        ]);
        return {
            // A missing daily key means no call yet today (the counter only exists once INCR ran).
            apiFootball: { usedToday: daily ?? 0, dailyLimit: limit },
            coingecko: { usedThisMonth: monthly ?? 0, monthlyBudget: COINGECKO_MONTHLY_BUDGET },
        };
    }

    private async number(key: string): Promise<number | null> {
        const hit = await this.cache.get<number | string>(key);
        if (!hit.hit) return null;
        const value = Number(hit.value);
        return Number.isFinite(value) ? value : null;
    }
}
