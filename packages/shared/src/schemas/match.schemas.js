"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveMatchSchema = exports.updateMatchOddsSchema = exports.deployBettingContractSchema = exports.getMatchByIdSchema = exports.syncMatchesSchema = exports.matchStatusSchema = void 0;
const zod_1 = require("zod");
const common_schemas_1 = require("./common.schemas");
exports.matchStatusSchema = zod_1.z.enum([
    'TBD', 'NS', '1H', 'HT', '2H', 'ET', 'P', 'FT',
    'AET', 'PEN', 'BT', 'SUSP', 'INT', 'PST', 'CANC',
    'ABD', 'AWA', 'WO', 'LIVE',
]);
exports.syncMatchesSchema = zod_1.z.object({
    body: zod_1.z.object({
        date: zod_1.z.coerce.date().optional(),
        league: zod_1.z.number().int().positive().optional(),
        season: zod_1.z.number().int().min(2020).max(2030).optional(),
    }),
});
exports.getMatchByIdSchema = zod_1.z.object({
    params: zod_1.z.object({
        matchId: common_schemas_1.positiveIntSchema,
    }),
});
exports.deployBettingContractSchema = zod_1.z.object({
    params: zod_1.z.object({ matchId: common_schemas_1.positiveIntSchema }),
    body: zod_1.z.object({
        odds: zod_1.z.object({
            home: zod_1.z.number().positive(),
            draw: zod_1.z.number().positive(),
            away: zod_1.z.number().positive(),
        }),
    }),
});
exports.updateMatchOddsSchema = zod_1.z.object({
    params: zod_1.z.object({ matchId: common_schemas_1.positiveIntSchema }),
    body: zod_1.z.object({
        odds: zod_1.z.object({
            home: zod_1.z.number().positive(),
            draw: zod_1.z.number().positive(),
            away: zod_1.z.number().positive(),
        }),
    }),
});
exports.resolveMatchSchema = zod_1.z.object({
    params: zod_1.z.object({ matchId: common_schemas_1.positiveIntSchema }),
    body: zod_1.z.object({
        finalScore: zod_1.z.object({
            home: zod_1.z.number().int().min(0),
            away: zod_1.z.number().int().min(0),
        }),
        status: zod_1.z.enum(['FT', 'AET', 'PEN']),
        bettingContractAddress: common_schemas_1.ethereumAddressSchema.optional(),
    }),
});
