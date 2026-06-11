/**
 * Canonical mapping `symbol → external identifiers`. Source of truth for
 * `RefreshTokenPricesJob` (backend) and portfolio display (frontend).
 * Every token in `chiliz.config.ts` must have a matching entry here.
 */
export interface PriceCatalogEntry {
    readonly symbol: string;
    readonly coingeckoId: string;
    readonly pythPriceFeedId?: string;
    readonly displayName: string;
}

export const PRICE_CATALOG: ReadonlyArray<PriceCatalogEntry> = [
    // Native Chiliz
    { symbol: 'CHZ',    coingeckoId: 'chiliz',                            displayName: 'Chiliz' },

    // Football — Europe
    { symbol: 'PSG',    coingeckoId: 'paris-saint-germain-fan-token',     displayName: 'Paris Saint-Germain' },
    { symbol: 'BAR',    coingeckoId: 'fc-barcelona-fan-token',            displayName: 'FC Barcelona' },
    { symbol: 'JUV',    coingeckoId: 'juventus-fan-token',                displayName: 'Juventus' },
    { symbol: 'INTER',  coingeckoId: 'internazionale-milan-fan-token',    displayName: 'Inter Milan' },
    { symbol: 'ACM',    coingeckoId: 'ac-milan-fan-token',                displayName: 'AC Milan' },
    { symbol: 'ATM',    coingeckoId: 'atletico-madrid',                   displayName: 'Atlético Madrid' },
    { symbol: 'CITY',   coingeckoId: 'manchester-city-fan-token',         displayName: 'Manchester City' },
    { symbol: 'AFC',    coingeckoId: 'arsenal-fan-token',                 displayName: 'Arsenal' },
    { symbol: 'ASR',    coingeckoId: 'as-roma-fan-token',                 displayName: 'AS Roma' },
    { symbol: 'POR',    coingeckoId: 'fc-porto',                          displayName: 'FC Porto' },
    { symbol: 'GAL',    coingeckoId: 'galatasaray-fan-token',             displayName: 'Galatasaray' },
    { symbol: 'TRA',    coingeckoId: 'trabzonspor-fan-token',             displayName: 'Trabzonspor' },
    { symbol: 'NAP',    coingeckoId: 'napoli-fan-token',                  displayName: 'Napoli' },
    { symbol: 'VCF',    coingeckoId: 'valencia-cf-fan-token',             displayName: 'Valencia CF' },
    { symbol: 'SPURS',  coingeckoId: 'tottenham-hotspur-fan-token',       displayName: 'Tottenham Hotspur' },
    { symbol: 'EFC',    coingeckoId: 'everton-fan-token',                 displayName: 'Everton' },
    { symbol: 'ASM',    coingeckoId: 'as-monaco-fan-token',               displayName: 'AS Monaco' },
    { symbol: 'LUFC',   coingeckoId: 'leeds-united-fan-token',            displayName: 'Leeds United' },
    { symbol: 'AVL',    coingeckoId: 'aston-villa-fan-token',             displayName: 'Aston Villa' },

    // Football — Brazil
    { symbol: 'MENGO',  coingeckoId: 'flamengo-fan-token',                displayName: 'Flamengo' },
    { symbol: 'VERDAO', coingeckoId: 'palmeiras',                         displayName: 'Palmeiras' },
    { symbol: 'SPFC',   coingeckoId: 'sao-paulo-fc-fan-token',            displayName: 'São Paulo FC' },
    { symbol: 'SCCP',   coingeckoId: 'corinthians-fan-token',             displayName: 'Corinthians' },

    // Kayen-wrapped variants + legacy PSG — same market price as the base token
    { symbol: 'WSCCP',   coingeckoId: 'corinthians-fan-token',             displayName: 'Wrapped Corinthians' },
    { symbol: 'WPSG',    coingeckoId: 'paris-saint-germain-fan-token',     displayName: 'Wrapped Paris Saint-Germain' },
    { symbol: 'WSAUBER', coingeckoId: 'alfa-romeo-racing-orlen-fan-token', displayName: 'Wrapped Sauber F1 Team' },
    { symbol: 'WBAR',    coingeckoId: 'fc-barcelona-fan-token',            displayName: 'Wrapped FC Barcelona' },
    { symbol: 'WLUFC',   coingeckoId: 'leeds-united-fan-token',            displayName: 'Wrapped Leeds United' },
    { symbol: 'WCITY',   coingeckoId: 'manchester-city-fan-token',         displayName: 'Wrapped Manchester City' },
    { symbol: 'PSG-L',   coingeckoId: 'paris-saint-germain-fan-token',     displayName: 'Paris Saint-Germain (Legacy)' },

    // Other sports
    { symbol: 'SAUBER', coingeckoId: 'alfa-romeo-racing-orlen-fan-token', displayName: 'Sauber F1 Team' },
    { symbol: 'OG',     coingeckoId: 'og-fan-token',                      displayName: 'OG Esports' },
    { symbol: 'UFC',    coingeckoId: 'ufc-fan-token',                     displayName: 'UFC' },
];

const CATALOG_BY_SYMBOL: ReadonlyMap<string, PriceCatalogEntry> = new Map(
    PRICE_CATALOG.map((e) => [e.symbol.toUpperCase(), e]),
);

const CATALOG_BY_COINGECKO_ID: ReadonlyMap<string, PriceCatalogEntry> = new Map(
    PRICE_CATALOG.map((e) => [e.coingeckoId, e]),
);

export function getCatalogEntry(symbol: string): PriceCatalogEntry | undefined {
    return CATALOG_BY_SYMBOL.get(symbol.toUpperCase());
}

export function getCatalogEntryByCoingeckoId(id: string): PriceCatalogEntry | undefined {
    return CATALOG_BY_COINGECKO_ID.get(id);
}

export function getCatalogSymbols(): ReadonlyArray<string> {
    return PRICE_CATALOG.map((e) => e.symbol);
}

export function getCoingeckoIds(): ReadonlyArray<string> {
    return PRICE_CATALOG.map((e) => e.coingeckoId);
}

// Pyth feed IDs live in env (`PYTH_CHZ_PRICE_FEED_ID`) rather than this file
// so they can rotate without rebuild.
