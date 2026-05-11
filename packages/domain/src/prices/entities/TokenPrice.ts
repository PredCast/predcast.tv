export type PriceSource = 'coingecko' | 'pyth';

export interface TokenPriceProps {
    /** Uppercase canonical symbol (PSG, CHZ, BAR, …). */
    symbol: string;
    priceUsd: number;
    /** Null when the upstream API does not expose 24h change. */
    change24hPct: number | null;
    source: PriceSource;
    fetchedAt: Date;
}

/** Current snapshot — one row per symbol, no history. */
export class TokenPrice {
    private constructor(private readonly props: TokenPriceProps) {}

    static create(props: TokenPriceProps): TokenPrice {
        if (!props.symbol || props.symbol.length === 0) {
            throw new Error('TokenPrice.symbol must not be empty');
        }
        if (props.priceUsd < 0 || !Number.isFinite(props.priceUsd)) {
            throw new Error(`TokenPrice.priceUsd invalid: ${props.priceUsd}`);
        }
        return new TokenPrice({ ...props, symbol: props.symbol.toUpperCase() });
    }

    static reconstitute(props: TokenPriceProps): TokenPrice {
        return new TokenPrice({ ...props, symbol: props.symbol.toUpperCase() });
    }

    get symbol(): string { return this.props.symbol; }
    get priceUsd(): number { return this.props.priceUsd; }
    get change24hPct(): number | null { return this.props.change24hPct; }
    get source(): PriceSource { return this.props.source; }
    get fetchedAt(): Date { return this.props.fetchedAt; }

    toJSON(): TokenPriceProps {
        return { ...this.props };
    }
}
