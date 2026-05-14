"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessage = exports.MessageType = void 0;
var MessageType;
(function (MessageType) {
    MessageType["REGULAR"] = "REGULAR";
    MessageType["BET"] = "BET";
    MessageType["SYSTEM"] = "SYSTEM";
    MessageType["DONATION"] = "DONATION";
})(MessageType || (exports.MessageType = MessageType = {}));
class ChatMessage {
    props;
    constructor(props) {
        this.props = props;
    }
    /**
     * Invariant — bet notifications (`type=SYSTEM, systemType='bet'`) must
     * target the per-match general channel only (`streamId` null/undefined).
     */
    static create(props) {
        if (props.systemType === 'bet' && props.streamId != null) {
            throw new Error('ChatMessage invariant: bet notifications must target the general match channel (streamId === null).');
        }
        return new ChatMessage({
            ...props,
            id: crypto.randomUUID(),
            timestamp: new Date(),
        });
    }
    static reconstitute(props) {
        return new ChatMessage(props);
    }
    getId() {
        return this.props.id;
    }
    getMatchId() {
        return this.props.matchId;
    }
    getStreamId() {
        return this.props.streamId;
    }
    getUserId() {
        return this.props.userId;
    }
    isBetMessage() {
        return this.props.type === MessageType.BET;
    }
    toJSON() {
        return {
            id: this.props.id,
            matchId: this.props.matchId,
            streamId: this.props.streamId ?? null,
            userId: this.props.userId,
            walletAddress: this.props.walletAddress,
            username: this.props.username,
            message: this.props.message,
            timestamp: this.props.timestamp.getTime(),
            type: this.props.type,
            isFeatured: this.props.isFeatured,
            ...(this.props.systemType && { systemType: this.props.systemType }),
            ...(this.props.betType && { betType: this.props.betType }),
            ...(this.props.betSubType && { betSubType: this.props.betSubType }),
            ...(this.props.amount && { amount: this.props.amount }),
            ...(this.props.odds && { odds: this.props.odds }),
        };
    }
}
exports.ChatMessage = ChatMessage;
