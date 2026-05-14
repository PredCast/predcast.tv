"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenPrice = void 0;
/** Current snapshot — one row per symbol, no history. */
class TokenPrice {
    props;
    constructor(props) {
        this.props = props;
    }
    static create(props) {
        if (!props.symbol || props.symbol.length === 0) {
            throw new Error('TokenPrice.symbol must not be empty');
        }
        if (props.priceUsd < 0 || !Number.isFinite(props.priceUsd)) {
            throw new Error(`TokenPrice.priceUsd invalid: ${props.priceUsd}`);
        }
        return new TokenPrice({ ...props, symbol: props.symbol.toUpperCase() });
    }
    static reconstitute(props) {
        return new TokenPrice({ ...props, symbol: props.symbol.toUpperCase() });
    }
    get symbol() { return this.props.symbol; }
    get priceUsd() { return this.props.priceUsd; }
    get change24hPct() { return this.props.change24hPct; }
    get source() { return this.props.source; }
    get fetchedAt() { return this.props.fetchedAt; }
    toJSON() {
        return { ...this.props };
    }
}
exports.TokenPrice = TokenPrice;
