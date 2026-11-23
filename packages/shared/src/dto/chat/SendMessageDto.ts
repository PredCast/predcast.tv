export interface SendMessageDto {
  matchId: number;
  streamId?: string;
  userId: string;
  walletAddress: string;
  username: string;
  message: string;
  isFeatured?: boolean;
  /** Client-generated UUID for deterministic optimistic dedup. */
  clientTempId?: string;
  /** Set by the server from the JWT (chat XP); never read from the request body. */
  accountId?: string;
}

export interface SendBetMessageDto extends SendMessageDto {
  betType: string;
  betSubType?: string;
  amount: number;
  odds: number;
}
