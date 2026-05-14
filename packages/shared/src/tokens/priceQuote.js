"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricesResponseSchema = exports.PriceQuoteSchema = exports.PriceSourceSchema = void 0;
const zod_1 = require("zod");
exports.PriceSourceSchema = zod_1.z.enum(['coingecko', 'pyth']);
exports.PriceQuoteSchema = zod_1.z.object({
    symbol: zod_1.z.string().min(1),
    priceUsd: zod_1.z.number().nonnegative(),
    change24hPct: zod_1.z.number().nullable(),
    source: exports.PriceSourceSchema,
    fetchedAt: zod_1.z.string().datetime(),
});
exports.PricesResponseSchema = zod_1.z.object({
    prices: zod_1.z.array(exports.PriceQuoteSchema),
    /** Latest `fetched_at` across the table — drives "last updated N min ago". */
    updatedAt: zod_1.z.string().datetime(),
});
