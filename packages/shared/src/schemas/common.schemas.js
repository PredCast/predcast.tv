"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nonEmptyStringSchema = exports.positiveIntSchema = exports.paginationSchema = exports.uuidSchema = exports.transactionHashSchema = exports.ethereumAddressSchema = void 0;
const zod_1 = require("zod");
exports.ethereumAddressSchema = zod_1.z
    .string()
    .regex(/^0x[a-fA-F0-9]{40}$/, 'Invalid Ethereum address format');
exports.transactionHashSchema = zod_1.z
    .string()
    .regex(/^0x[a-fA-F0-9]{64}$/, 'Invalid transaction hash format');
exports.uuidSchema = zod_1.z.string().uuid('Invalid UUID format');
exports.paginationSchema = zod_1.z.object({
    limit: zod_1.z.coerce.number().int().min(1).max(100).default(50),
    offset: zod_1.z.coerce.number().int().min(0).default(0),
});
exports.positiveIntSchema = zod_1.z.number().int().positive();
exports.nonEmptyStringSchema = zod_1.z.string().min(1).trim();
