import { injectable, inject } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { Donation } from '@chiliztv/domain/stream-wallet/entities/Donation';
import { IStreamWalletRepository } from '@chiliztv/domain/stream-wallet/repositories/IStreamWalletRepository';

export interface GetDonorHistoryQuery {
  readonly donorAddress: string;
  readonly limit: number;
  readonly offset: number;
}

export interface GetDonorHistoryResult {
  readonly items: Donation[];
  readonly total: number;
}

@injectable()
export class GetDonorHistoryUseCase {
  constructor(
    @inject(TOKENS.IStreamWalletRepository)
    private readonly streamWalletRepository: IStreamWalletRepository
  ) {}

  async execute(query: GetDonorHistoryQuery): Promise<GetDonorHistoryResult> {
    const [items, total] = await Promise.all([
      this.streamWalletRepository.findDonationsByDonor(query.donorAddress, {
        limit: query.limit,
        offset: query.offset,
      }),
      this.streamWalletRepository.countDonationsByDonor(query.donorAddress),
    ]);
    return { items, total };
  }
}
