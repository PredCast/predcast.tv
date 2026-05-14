"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictError = void 0;
const DomainError_1 = require("./DomainError");
class ConflictError extends DomainError_1.DomainError {
    constructor(message, details) {
        super(message, 'CONFLICT', 409, details);
    }
}
exports.ConflictError = ConflictError;
