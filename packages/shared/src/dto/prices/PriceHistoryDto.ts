import { z } from 'zod';

import { PRICE_HISTORY_RANGES } from '@chiliztv/domain/prices/priceHistory';

export const PriceHistoryRangeSchema = z.enum(PRICE_HISTORY_RANGES);

/** Query of `GET /prices/:symbol/history`. */
export const PriceHistoryQuerySchema = z.object({
    range: PriceHistoryRangeSchema.default('24h'),
});

export const PricePointSchema = z.object({
    /** Epoch milliseconds. */
    t: z.number().int(),
    p: z.number().nonnegative(),
});

/**
 * Market price history of a fan token, in USD. `stale` is true when the upstream failed and
 * the last good copy is served instead; `updatedAt` is when that copy was fetched.
 */
export const PriceHistoryDtoSchema = z.object({
    symbol: z.string(),
    quote: z.literal('USD'),
    range: PriceHistoryRangeSchema,
    source: z.string(),
    stale: z.boolean(),
    updatedAt: z.string().datetime(),
    points: z.array(PricePointSchema),
});

export type PriceHistoryRangeDto = z.infer<typeof PriceHistoryRangeSchema>;
export type PricePointDto = z.infer<typeof PricePointSchema>;
export type PriceHistoryDto = z.infer<typeof PriceHistoryDtoSchema>;
