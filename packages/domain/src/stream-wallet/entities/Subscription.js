"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
class Subscription {
    props;
    constructor(props) {
        this.props = props;
    }
    static create(props) {
        return new Subscription({
            ...props,
            id: crypto.randomUUID(),
        });
    }
    static reconstitute(props) {
        return new Subscription(props);
    }
    isActive() {
        const now = new Date();
        return this.props.startDate <= now && now <= this.props.endDate;
    }
    toJSON() {
        return {
            id: this.props.id,
            streamerAddress: this.props.streamerAddress,
            subscriberAddress: this.props.subscriberAddress,
            streamWalletAddress: this.props.streamWalletAddress,
            durationSeconds: this.props.durationSeconds,
            amount: this.props.amount,
            platformFee: this.props.platformFee,
            streamerAmount: this.props.streamerAmount,
            startDate: this.props.startDate,
            endDate: this.props.endDate,
            transactionHash: this.props.transactionHash,
            status: this.props.status,
            isActive: this.isActive(),
        };
    }
}
exports.Subscription = Subscription;
