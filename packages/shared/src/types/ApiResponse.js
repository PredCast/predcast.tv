"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successResponse = successResponse;
exports.errorResponse = errorResponse;
function successResponse(data) {
    return { success: true, data, timestamp: new Date().toISOString() };
}
function errorResponse(code, message, details) {
    return {
        success: false,
        error: { code, message, ...(details !== undefined ? { details } : {}) },
        timestamp: new Date().toISOString(),
    };
}
