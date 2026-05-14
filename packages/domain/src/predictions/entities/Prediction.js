"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prediction = void 0;
const PredictionStatus_1 = require("../value-objects/PredictionStatus");
const ValidationError_1 = require("../../shared/errors/ValidationError");
class Prediction {
    props;
    constructor(props) {
        this.props = props;
    }
    static create(props) {
        const now = new Date();
        if (!props.userId || !props.walletAddress) {
            throw new ValidationError_1.ValidationError('User ID and wallet address are required');
        }
        if (!props.matchId || !props.matchName) {
            throw new ValidationError_1.ValidationError('Match ID and name are required');
        }
        if (props.matchStartTime < now) {
            throw new ValidationError_1.ValidationError('Cannot place prediction on past matches');
        }
        return new Prediction({
            ...props,
            placedAt: now,
            createdAt: now,
            updatedAt: now,
        });
    }
    static reconstitute(props) {
        return new Prediction(props);
    }
    settle(actualResult, isWin) {
        if (this.props.status !== PredictionStatus_1.PredictionStatus.PENDING && this.props.status !== PredictionStatus_1.PredictionStatus.IN_PROGRESS) {
            throw new ValidationError_1.ValidationError('Can only settle pending or in-progress predictions');
        }
        this.props.actualResult = actualResult;
        this.props.status = isWin ? PredictionStatus_1.PredictionStatus.WON : PredictionStatus_1.PredictionStatus.LOST;
        this.props.settledAt = new Date();
        this.props.updatedAt = new Date();
    }
    cancel() {
        if (this.props.status !== PredictionStatus_1.PredictionStatus.PENDING) {
            throw new ValidationError_1.ValidationError('Can only cancel pending predictions');
        }
        this.props.status = PredictionStatus_1.PredictionStatus.CANCELLED;
        this.props.updatedAt = new Date();
    }
    markInProgress() {
        if (this.props.status !== PredictionStatus_1.PredictionStatus.PENDING) {
            throw new ValidationError_1.ValidationError('Can only mark pending predictions as in-progress');
        }
        this.props.status = PredictionStatus_1.PredictionStatus.IN_PROGRESS;
        this.props.updatedAt = new Date();
    }
    getId() {
        return this.props.id;
    }
    getUserId() {
        return this.props.userId;
    }
    getWalletAddress() {
        return this.props.walletAddress;
    }
    getMatchId() {
        return this.props.matchId;
    }
    getPredictionType() {
        return this.props.predictionType;
    }
    getPredictionValue() {
        return this.props.predictionValue;
    }
    getTransactionHash() {
        return this.props.transactionHash;
    }
    getStatus() {
        return this.props.status;
    }
    getOdds() {
        return this.props.odds;
    }
    getMatchStartTime() {
        return this.props.matchStartTime;
    }
    toJSON() {
        return {
            id: this.props.id,
            userId: this.props.userId,
            walletAddress: this.props.walletAddress,
            username: this.props.username,
            matchId: this.props.matchId,
            matchName: this.props.matchName,
            predictionType: this.props.predictionType,
            predictionValue: this.props.predictionValue,
            predictedTeam: this.props.predictedTeam,
            odds: this.props.odds.getValue(),
            status: this.props.status,
            actualResult: this.props.actualResult,
            transactionHash: this.props.transactionHash.getValue(),
            placedAt: this.props.placedAt,
            matchStartTime: this.props.matchStartTime,
            settledAt: this.props.settledAt,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
        };
    }
}
exports.Prediction = Prediction;
