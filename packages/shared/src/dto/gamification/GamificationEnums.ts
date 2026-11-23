import { z } from 'zod';

export const RankTierSchema = z.enum(['rookie', 'starter', 'seasoned', 'captain', 'international', 'legend', 'icon']);
export const ProfileTagSchema = z.enum(['new', 'streamer', 'crown', 'founder']);
export const DoubleXpSourceSchema = z.enum(['check_in', 'watch', 'chat_message', 'stream_time']);

/** EVM address; read routes lowercase it. */
export const WalletAddressSchema = z.string().regex(/^0x[0-9a-fA-F]{40}$/, 'Invalid wallet address');

export type RankTierDto = z.infer<typeof RankTierSchema>;
export type ProfileTagDto = z.infer<typeof ProfileTagSchema>;
export type DoubleXpSourceDto = z.infer<typeof DoubleXpSourceSchema>;
