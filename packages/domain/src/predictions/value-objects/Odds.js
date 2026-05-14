"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Odds = void 0;
const ValidationError_1 = require("../../shared/errors/ValidationError");
class Odds {
    value;
    constructor(value) {
        this.value = value;
    }
    static create(value) {
        if (typeof value !== 'number' || isNaN(value)) {
            throw new ValidationError_1.ValidationError('Odds must be a valid number');
        }
        if (value <= 1) {
            throw new ValidationError_1.ValidationError('Odds must be greater than 1');
        }
        if (value > 1000) {
            throw new ValidationError_1.ValidationError('Odds seem unrealistic (max 1000)');
        }
        return new Odds(value);
    }
    getValue() {
        return this.value;
    }
    equals(other) {
        return this.value === other.value;
    }
}
exports.Odds = Odds;
