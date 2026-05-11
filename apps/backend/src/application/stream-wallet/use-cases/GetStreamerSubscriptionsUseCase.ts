import { injectable, inject } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { Subscription } from '@chiliztv/domain/stream-wallet/entities/Subscription';
import { IStreamWalletRepository } from '@chiliztv/domain/stream-wallet/repositories/IStreamWalletRepository';

export interface GetStreamerSubscriptionsQuery {
  readonly streamerAddress: string;
  readonly limit: number;
  readonly offset: number;
}

export interface GetStreamerSubscriptionsResult {
  readonly items: Subscription[];
  readonly total: number;
}

@injectable()
export class GetStreamerSubscriptionsUseCase {
  constructor(
    @inject(TOKENS.IStreamWalletRepository)
    private readonly streamWalletRepository: IStreamWalletRepository
  ) {}

  async execute(query: GetStreamerSubscriptionsQuery): Promise<GetStreamerSubscriptionsResult> {
    const [items, total] = await Promise.all([
      this.streamWalletRepository.findSubscriptionsByStreamer(query.streamerAddress, {
        limit: query.limit,
        offset: query.offset,
      }),
      this.streamWalletRepository.countSubscriptionsByStreamer(query.streamerAddress),
    ]);
    return { items, total };
  }
}
