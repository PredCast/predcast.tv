"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaitlistEntry = void 0;
class WaitlistEntry {
    props;
    constructor(props) {
        this.props = props;
    }
    static create(props) {
        return new WaitlistEntry({
            ...props,
            id: crypto.randomUUID(),
            createdAt: new Date(),
        });
    }
    static reconstitute(props) {
        return new WaitlistEntry(props);
    }
    getId() { return this.props.id; }
    getEmail() { return this.props.email; }
    getWalletAddress() { return this.props.walletAddress; }
    toJSON() {
        return {
            id: this.props.id,
            email: this.props.email,
            walletAddress: this.props.walletAddress,
            createdAt: this.props.createdAt,
        };
    }
}
exports.WaitlistEntry = WaitlistEntry;
