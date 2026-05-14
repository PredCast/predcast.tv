"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTokenSchema = void 0;
const zod_1 = require("zod");
const common_schemas_1 = require("./common.schemas");
exports.generateTokenSchema = zod_1.z.object({
    body: zod_1.z
        .object({
        email: zod_1.z.string().email().optional(),
        walletAddress: common_schemas_1.ethereumAddressSchema.optional(),
    })
        .refine((data) => data.email || data.walletAddress, {
        message: 'Either email or walletAddress is required',
    }),
});
