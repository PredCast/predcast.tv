import { z } from 'zod';

export const PriceSourceSchema = z.enum(['coingecko', 'pyth']);
export type PriceSource = z.infer<typeof PriceSourceSchema>;

export const PriceQuoteSchema = z.object({
    symbol: z.string().min(1),
    priceUsd: z.number().nonnegative(),
    change24hPct: z.number().nullable(),
    source: PriceSourceSchema,
    fetchedAt: z.string().datetime(),
});
export type PriceQuoteDto = z.infer<typeof PriceQuoteSchema>;

export const PricesResponseSchema = z.object({
    prices: z.array(PriceQuoteSchema),
    /** Latest `fetched_at` across the table — drives "last updated N min ago". */
    updatedAt: z.string().datetime(),
});
export type PricesResponseDto = z.infer<typeof PricesResponseSchema>;
