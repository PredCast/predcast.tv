import { describe, expect, it } from 'vitest';
import { ChatMessage, MessageType } from '../ChatMessage';

const base = {
    matchId: 999000,
    userId: 'system',
    walletAddress: 'system',
    username: 'System',
    message: '🎯 New prediction: 0.10 USDC on Under 2.5',
    type: MessageType.SYSTEM,
    isFeatured: false,
};

describe('ChatMessage.create — bet invariant', () => {
    it('accepts a bet system message with streamId undefined', () => {
        const msg = ChatMessage.create({ ...base, systemType: 'bet' });
        expect(msg.getMatchId()).toBe(999000);
    });

    it('throws when bet notification targets a stream channel', () => {
        expect(() =>
            ChatMessage.create({ ...base, systemType: 'bet', streamId: '11111111-1111-1111-1111-111111111111' }),
        ).toThrow(/general match channel/);
    });

    it('allows non-bet system messages to set streamId', () => {
        const msg = ChatMessage.create({
            ...base,
            systemType: 'donation',
            streamId: '22222222-2222-2222-2222-222222222222',
        });
        expect(msg.getStreamId()).toBe('22222222-2222-2222-2222-222222222222');
    });

    it('allows regular user messages with streamId set', () => {
        const msg = ChatMessage.create({
            ...base,
            type: MessageType.REGULAR,
            streamId: '33333333-3333-3333-3333-333333333333',
        });
        expect(msg.getStreamId()).toBe('33333333-3333-3333-3333-333333333333');
    });
});
