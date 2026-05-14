"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectedUser = void 0;
class ConnectedUser {
    props;
    constructor(props) {
        this.props = props;
    }
    static create(props) {
        const now = new Date();
        return new ConnectedUser({
            ...props,
            id: crypto.randomUUID(),
            connectedAt: now,
            lastActivity: now,
        });
    }
    static reconstitute(props) {
        return new ConnectedUser(props);
    }
    updateActivity() {
        this.props.lastActivity = new Date();
    }
    getId() {
        return this.props.id;
    }
    getMatchId() {
        return this.props.matchId;
    }
    getUserId() {
        return this.props.userId;
    }
    toJSON() {
        return {
            id: this.props.id,
            matchId: this.props.matchId,
            userId: this.props.userId,
            username: this.props.username,
            connectedAt: this.props.connectedAt.getTime(),
            lastActivity: this.props.lastActivity.getTime(),
        };
    }
}
exports.ConnectedUser = ConnectedUser;
