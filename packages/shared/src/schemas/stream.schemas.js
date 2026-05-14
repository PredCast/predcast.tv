"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStreamSchema = exports.getUserStreamsSchema = exports.getStreamByIdSchema = exports.endStreamSchema = exports.startStreamSchema = exports.createStreamSchema = exports.streamStatusSchema = void 0;
const zod_1 = require("zod");
const common_schemas_1 = require("./common.schemas");
exports.streamStatusSchema = zod_1.z.enum([
    'PENDING', 'LIVE', 'ENDED', 'FAILED',
]);
exports.createStreamSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: common_schemas_1.uuidSchema,
        walletAddress: common_schemas_1.ethereumAddressSchema,
        title: zod_1.z.string().min(1).max(200).trim(),
        description: zod_1.z.string().max(1000).trim().optional(),
        streamKey: zod_1.z.string().min(10).max(100),
        matchId: zod_1.z.number().int().positive().optional(),
        isMatchStream: zod_1.z.boolean().default(false),
    }),
});
exports.startStreamSchema = zod_1.z.object({
    params: zod_1.z.object({ streamId: common_schemas_1.uuidSchema }),
});
exports.endStreamSchema = zod_1.z.object({
    params: zod_1.z.object({ streamId: common_schemas_1.uuidSchema }),
});
exports.getStreamByIdSchema = zod_1.z.object({
    params: zod_1.z.object({ streamId: common_schemas_1.uuidSchema }),
});
exports.getUserStreamsSchema = zod_1.z.object({
    params: zod_1.z.object({ userId: common_schemas_1.uuidSchema }),
    query: zod_1.z.object({
        status: exports.streamStatusSchema.optional(),
        limit: zod_1.z.coerce.number().int().min(1).max(100).default(50),
        offset: zod_1.z.coerce.number().int().min(0).default(0),
    }),
});
exports.deleteStreamSchema = zod_1.z.object({
    params: zod_1.z.object({ streamId: common_schemas_1.uuidSchema }),
});
