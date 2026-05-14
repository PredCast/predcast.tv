"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redeemAccessCodeSchema = void 0;
const zod_1 = require("zod");
exports.redeemAccessCodeSchema = zod_1.z.object({
    code: zod_1.z.string().min(4).max(128).trim(),
    company: zod_1.z.string().max(0).optional(), // honeypot — must stay empty
});
