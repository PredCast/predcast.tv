"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionHash = void 0;
const ValidationError_1 = require("../../shared/errors/ValidationError");
class TransactionHash {
    value;
    constructor(value) {
        this.value = value;
    }
    static create(value) {
        if (!value || typeof value !== 'string') {
            throw new ValidationError_1.ValidationError('Transaction hash is required');
        }
        if (!/^0x[a-fA-F0-9]{64}$/.test(value)) {
            throw new ValidationError_1.ValidationError('Invalid transaction hash format');
        }
        return new TransactionHash(value);
    }
    getValue() {
        return this.value;
    }
    equals(other) {
        return this.value === other.value;
    }
}
exports.TransactionHash = TransactionHash;
