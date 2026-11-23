export interface JwtPayload {
  email: string | null;
  walletAddress: string;
  role: string;
  /** Present only when the wallet was proven by a Dynamic JWT at /auth/token. */
  accountId?: string;
  dynamicUserId?: string;
  iat?: number;
  exp?: number;
  iss?: string;
}

export enum UserRole {
  USER = 'USER',
  STREAMER = 'STREAMER',
  ADMIN = 'ADMIN',
}
