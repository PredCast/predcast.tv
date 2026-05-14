"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = void 0;
class UserProfile {
    props;
    constructor(props) {
        this.props = props;
    }
    static create(props) {
        if (!props.walletAddress.startsWith('0x') || props.walletAddress.length !== 42) {
            throw new Error('UserProfile: walletAddress must be a valid 0x-prefixed 20-byte hex string');
        }
        return new UserProfile({
            ...props,
            walletAddress: props.walletAddress.toLowerCase(),
        });
    }
    get walletAddress() {
        return this.props.walletAddress;
    }
    get username() {
        return this.props.username;
    }
    get avatarUrl() {
        return this.props.avatarUrl;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    toJSON() {
        return { ...this.props };
    }
}
exports.UserProfile = UserProfile;
