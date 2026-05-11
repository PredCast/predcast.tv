import { injectable, inject } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { Subscription } from '@chiliztv/domain/stream-wallet/entities/Subscription';
import { IStreamWalletRepository } from '@chiliztv/domain/stream-wallet/repositories/IStreamWalletRepository';

export interface GetSubscriberHistoryQuery {
  readonly subscriberAddress: string;
  readonly limit: number;
  readonly offset: number;
}

export interface GetSubscriberHistoryResult {
  readonly items: Subscription[];
  readonly total: number;
}

@injectable()
export class GetSubscriberHistoryUseCase {
  constructor(
    @inject(TOKENS.IStreamWalletRepository)
    private readonly streamWalletRepository: IStreamWalletRepository
  ) {}

  async execute(query: GetSubscriberHistoryQuery): Promise<GetSubscriberHistoryResult> {
    const [items, total] = await Promise.all([
      this.streamWalletRepository.findSubscriptionsBySubscriber(query.subscriberAddress, {
        limit: query.limit,
        offset: query.offset,
      }),
      this.streamWalletRepository.countSubscriptionsBySubscriber(query.subscriberAddress),
    ]);
    return { items, total };
  }
}
