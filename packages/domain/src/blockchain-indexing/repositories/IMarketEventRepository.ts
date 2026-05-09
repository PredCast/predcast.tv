import { MarketEvent } from '../entities/MarketEvent';

export interface IMarketEventRepository {
    insertIfAbsent(event: MarketEvent): Promise<boolean>;
}
