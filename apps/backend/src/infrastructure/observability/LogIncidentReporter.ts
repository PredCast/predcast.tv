import { injectable } from 'tsyringe';
import { IIncidentReporter, LiveBetIncidentDetails } from '@chiliztv/domain/shared/ports/IIncidentReporter';
import { logger } from '../logging/logger';

/**
 * Implémentation par défaut : log structuré `event=live_bet_incident` en
 * `error`. Pas de destination externe (Sentry / Better Stack non installés —
 * acté D4 du plan). Parsable par n'importe quel log shipper plus tard.
 */
@injectable()
export class LogIncidentReporter implements IIncidentReporter {
    async reportLiveBetIncident(details: LiveBetIncidentDetails): Promise<void> {
        logger.error('event=live_bet_incident — bet placed on non-bettable match', {
            event: 'live_bet_incident',
            txHash: details.txHash,
            blockNumber: details.blockNumber,
            blockTimestamp: details.blockTimestamp.toISOString(),
            user: details.user,
            amount: details.amount,
            contractAddress: details.contractAddress,
            marketId: details.marketId,
            matchId: details.matchId,
            matchStatus: details.matchStatus,
        });
    }
}
