"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredictionStatus = void 0;
var PredictionStatus;
(function (PredictionStatus) {
    PredictionStatus["PENDING"] = "PENDING";
    PredictionStatus["IN_PROGRESS"] = "IN_PROGRESS";
    PredictionStatus["WON"] = "WON";
    PredictionStatus["LOST"] = "LOST";
    PredictionStatus["CANCELLED"] = "CANCELLED";
})(PredictionStatus || (exports.PredictionStatus = PredictionStatus = {}));
