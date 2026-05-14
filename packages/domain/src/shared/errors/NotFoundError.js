"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const DomainError_1 = require("./DomainError");
class NotFoundError extends DomainError_1.DomainError {
    constructor(resource, identifier) {
        super(`${resource} with identifier '${identifier}' not found`, 'NOT_FOUND', 404, { resource, identifier });
    }
}
exports.NotFoundError = NotFoundError;
