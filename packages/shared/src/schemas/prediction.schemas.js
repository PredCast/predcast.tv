"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settlePredictionSchema = exports.getUserStatsSchema = exports.getPredictionByIdSchema = exports.getUserPredictionsSchema = exports.createPredictionSchema = exports.predictionStatusSchema = exports.predictionTypeSchema = void 0;
const zod_1 = require("zod");
const common_schemas_1 = require("./common.schemas");
exports.predictionTypeSchema = zod_1.z.enum([
    'WIN_HOME', 'WIN_AWAY', 'DRAW', 'OVER', 'UNDER',
]);
exports.predictionStatusSchema = zod_1.z.enum([
    'PENDING', 'IN_PROGRESS', 'WON', 'LOST', 'CANCELLED',
]);
exports.createPredictionSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: common_schemas_1.uuidSchema,
        walletAddress: common_schemas_1.ethereumAddressSchema,
        username: zod_1.z.string().min(1).max(50).trim(),
        matchId: zod_1.z.number().int().positive(),
        matchName: zod_1.z.string().min(1).max(200).trim(),
        predictionType: exports.predictionTypeSchema,
        predictionValue: zod_1.z.string().min(1).max(50),
        predictedTeam: zod_1.z.string().min(1).max(100).trim(),
        odds: zod_1.z.number().positive().max(100),
        transactionHash: common_schemas_1.transactionHashSchema,
        matchStartTime: zod_1.z.coerce.date().refine((date) => date > new Date(), 'Match start time must be in the future'),
    }),
});
exports.getUserPredictionsSchema = zod_1.z.object({
    params: zod_1.z.object({ userId: common_schemas_1.uuidSchema }),
    query: common_schemas_1.paginationSchema.extend({
        status: exports.predictionStatusSchema.optional(),
    }),
});
exports.getPredictionByIdSchema = zod_1.z.object({
    params: zod_1.z.object({ predictionId: common_schemas_1.uuidSchema }),
});
exports.getUserStatsSchema = zod_1.z.object({
    params: zod_1.z.object({ userId: common_schemas_1.uuidSchema }),
    query: zod_1.z.object({}),
});
exports.settlePredictionSchema = zod_1.z.object({
    params: zod_1.z.object({ predictionId: common_schemas_1.uuidSchema }),
    body: zod_1.z.object({
        finalScore: zod_1.z.object({
            home: zod_1.z.number().int().min(0),
            away: zod_1.z.number().int().min(0),
        }),
        result: zod_1.z.enum(['WON', 'LOST']),
    }),
});
