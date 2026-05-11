import { injectable, inject } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { IStreamWalletRepository } from '@chiliztv/domain/stream-wallet/repositories/IStreamWalletRepository';
import { ISubscriptionChecker } from '@chiliztv/domain/shared/ports/ISubscriptionChecker';

@injectable()
export class SubscriptionChecker implements ISubscriptionChecker {
  constructor(
    @inject(TOKENS.IStreamWalletRepository)
    private readonly streamWalletRepository: IStreamWalletRepository
  ) {}

  async hasActiveSubscription(walletAddress: string): Promise<boolean> {
    try {
      return await this.streamWalletRepository.hasActiveSubscriptionForSubscriber(walletAddress);
    } catch (error) {
      console.error('Error checking subscription status:', error);
      return false;
    }
  }
}
