import { Donation } from '../entities/Donation';
import { Subscription } from '../entities/Subscription';

export interface StreamerStats {
  totalDonations: number;
  totalDonationAmount: string;
  totalSubscribers: number;
  activeSubscribers: number;
}

export interface IStreamWalletRepository {
  findDonationsByStreamer(streamerAddress: string): Promise<Donation[]>;
  findDonationsByDonor(donorAddress: string): Promise<Donation[]>;
  findSubscriptionsByStreamer(streamerAddress: string): Promise<Subscription[]>;
  findSubscriptionsBySubscriber(subscriberAddress: string): Promise<Subscription[]>;
  getStreamerStats(streamerAddress: string): Promise<StreamerStats>;

  // Write operations used by blockchain indexers
  saveDonation(donation: Donation): Promise<void>;
  findDonationByTransactionHash(txHash: string): Promise<boolean>;
  saveSubscription(subscription: Subscription): Promise<void>;
  findSubscriptionByTransactionHash(txHash: string): Promise<boolean>;
  saveStreamWallet(streamerAddress: string, walletAddress: string, transactionHash: string): Promise<void>;
  findStreamWalletByTransactionHash(txHash: string): Promise<boolean>;
  markExpiredSubscriptions(): Promise<number>;
}
