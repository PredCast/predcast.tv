"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Donation = void 0;
class Donation {
    props;
    constructor(props) {
        this.props = props;
    }
    static create(props) {
        return new Donation({
            ...props,
            id: crypto.randomUUID(),
        });
    }
    static reconstitute(props) {
        return new Donation(props);
    }
    toJSON() {
        return {
            id: this.props.id,
            streamerAddress: this.props.streamerAddress,
            donorAddress: this.props.donorAddress,
            streamWalletAddress: this.props.streamWalletAddress,
            amount: this.props.amount,
            platformFee: this.props.platformFee,
            streamerAmount: this.props.streamerAmount,
            message: this.props.message,
            transactionHash: this.props.transactionHash,
            timestamp: this.props.timestamp,
        };
    }
}
exports.Donation = Donation;
