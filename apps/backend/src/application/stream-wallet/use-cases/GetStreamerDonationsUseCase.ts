import { injectable, inject } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { Donation } from '@chiliztv/domain/stream-wallet/entities/Donation';
import { IStreamWalletRepository } from '@chiliztv/domain/stream-wallet/repositories/IStreamWalletRepository';

export interface GetStreamerDonationsQuery {
  readonly streamerAddress: string;
  readonly limit: number;
  readonly offset: number;
}

export interface GetStreamerDonationsResult {
  readonly items: Donation[];
  readonly total: number;
}

@injectable()
export class GetStreamerDonationsUseCase {
  constructor(
    @inject(TOKENS.IStreamWalletRepository)
    private readonly streamWalletRepository: IStreamWalletRepository
  ) {}

  async execute(query: GetStreamerDonationsQuery): Promise<GetStreamerDonationsResult> {
    const [items, total] = await Promise.all([
      this.streamWalletRepository.findDonationsByStreamer(query.streamerAddress, {
        limit: query.limit,
        offset: query.offset,
      }),
      this.streamWalletRepository.countDonationsByStreamer(query.streamerAddress),
    ]);
    return { items, total };
  }
}
