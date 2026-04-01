export interface SubscriptionProps {
  id: string;
  streamerAddress: string;
  subscriberAddress: string;
  streamWalletAddress?: string;
  durationSeconds: number;
  amount: string;
  platformFee?: string;
  streamerAmount?: string;
  startDate: Date;
  endDate: Date;
  transactionHash: string;
  status?: 'active' | 'expired';
}

export class Subscription {
  private constructor(private readonly props: SubscriptionProps) {}

  static create(props: Omit<SubscriptionProps, 'id'>): Subscription {
    return new Subscription({
      ...props,
      id: crypto.randomUUID(),
    });
  }

  static reconstitute(props: SubscriptionProps): Subscription {
    return new Subscription(props);
  }

  isActive(): boolean {
    const now = new Date();
    return this.props.startDate <= now && now <= this.props.endDate;
  }

  toJSON(): any {
    return {
      id: this.props.id,
      streamerAddress: this.props.streamerAddress,
      subscriberAddress: this.props.subscriberAddress,
      streamWalletAddress: this.props.streamWalletAddress,
      durationSeconds: this.props.durationSeconds,
      amount: this.props.amount,
      platformFee: this.props.platformFee,
      streamerAmount: this.props.streamerAmount,
      startDate: this.props.startDate,
      endDate: this.props.endDate,
      transactionHash: this.props.transactionHash,
      status: this.props.status,
      isActive: this.isActive(),
    };
  }
}
