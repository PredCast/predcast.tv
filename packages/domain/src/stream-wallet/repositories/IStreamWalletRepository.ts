import { Donation } from '../entities/Donation';
import { Subscription } from '../entities/Subscription';

export interface StreamerStats {
  totalDonations: number;
  totalDonationAmount: string;
  totalSubscribers: number;
  activeSubscribers: number;
}

export interface FindStreamWalletOptions {
  readonly limit: number;
  readonly offset: number;
}

export interface IStreamWalletRepository {
  findDonationsByStreamer(streamerAddress: string, options: FindStreamWalletOptions): Promise<Donation[]>;
  countDonationsByStreamer(streamerAddress: string): Promise<number>;
  findDonationsByDonor(donorAddress: string, options: FindStreamWalletOptions): Promise<Donation[]>;
  countDonationsByDonor(donorAddress: string): Promise<number>;
  findSubscriptionsByStreamer(streamerAddress: string, options: FindStreamWalletOptions): Promise<Subscription[]>;
  countSubscriptionsByStreamer(streamerAddress: string): Promise<number>;
  findSubscriptionsBySubscriber(subscriberAddress: string, options: FindStreamWalletOptions): Promise<Subscription[]>;
  countSubscriptionsBySubscriber(subscriberAddress: string): Promise<number>;
  /** True if the subscriber has at least one subscription currently within its `[startDate, endDate]` window. */
  hasActiveSubscriptionForSubscriber(subscriberAddress: string): Promise<boolean>;
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
