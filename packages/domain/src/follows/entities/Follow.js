"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Follow = void 0;
class Follow {
    props;
    constructor(props) {
        this.props = props;
    }
    static create(props) {
        return new Follow({
            ...props,
            id: crypto.randomUUID(),
            createdAt: new Date(),
        });
    }
    static reconstitute(props) {
        return new Follow(props);
    }
    getId() {
        return this.props.id;
    }
    toJSON() {
        return { ...this.props };
    }
}
exports.Follow = Follow;
