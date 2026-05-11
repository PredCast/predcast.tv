/**
 * Détail d'un incident "bet posé sur match in-play" — déclenché par
 * `BettingMatchEventIndexer` quand un event `BetPlaced` arrive alors que le
 * match n'est plus dans un état pari-able (`classifyStatus` renvoie `live` ou
 * `blocked`). Signal opérationnel : si > 1×/semaine, le `CloseLiveMarketsJob`
 * a un problème (lag RPC, nonce stuck, etc.).
 */
export interface LiveBetIncidentDetails {
    readonly txHash: string;
    readonly blockNumber: number;
    readonly blockTimestamp: Date;
    readonly user: string;
    readonly amount: string;
    readonly contractAddress: string;
    readonly marketId: number;
    readonly matchId: number | null;
    readonly matchStatus: string;
}

/**
 * Port pour reporter un incident à un système externe (Sentry, Better Stack,
 * etc.). L'implémentation par défaut (`LogIncidentReporter`) écrit un log
 * structuré ; une vraie destination est branchée plus tard sans toucher au
 * use case.
 */
export interface IIncidentReporter {
    reportLiveBetIncident(details: LiveBetIncidentDetails): Promise<void>;
}
