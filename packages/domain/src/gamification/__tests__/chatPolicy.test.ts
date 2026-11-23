import { describe, expect, it } from 'vitest';

import { MessageType } from '../../chat/entities/ChatMessage';
import { SOURCE_RULES } from '../catalog/sources';
import { computeCreditedXp } from '../policies/doubleXpPolicy';
import { chatTextHash, evaluateChatMessage, normalizeChatText } from '../policies/chatPolicy';
import type { ITextHasher } from '../ports/ITextHasher';

const hasher: ITextHasher = { sha256Hex: (input) => `h(${input})` };
const T0 = new Date('2027-01-10T12:00:00Z');
const at = (seconds: number) => new Date(T0.getTime() + seconds * 1000);
const message = (text: string, seconds = 0, messageType = MessageType.REGULAR) => ({ messageType, text, createdAt: at(seconds) });

describe('normalizeChatText / chatTextHash', () => {
    it('lower-cases, trims and collapses whitespace before hashing', () => {
        expect(normalizeChatText('  Allez\n\tPSG   !! ')).toBe('allez psg !!');
        expect(chatTextHash('Allez  PSG', hasher)).toBe('h(allez psg)');
    });
});

describe('evaluateChatMessage', () => {
    it('only credits regular messages', () => {
        expect(evaluateChatMessage(message('great goal', 0, MessageType.BET), null, hasher))
            .toEqual({ valid: false, reason: 'not_a_message' });
        expect(evaluateChatMessage(message('great goal', 0, MessageType.SYSTEM), null, hasher).valid).toBe(false);
    });

    it('needs 4 characters after trim, 2 of them letters or digits', () => {
        expect(evaluateChatMessage(message('  ok! '), null, hasher)).toEqual({ valid: false, reason: 'too_short' });
        expect(evaluateChatMessage(message('!!!!'), null, hasher)).toEqual({ valid: false, reason: 'too_few_alphanumerics' });
        expect(evaluateChatMessage(message('a!!!'), null, hasher)).toEqual({ valid: false, reason: 'too_few_alphanumerics' });
        expect(evaluateChatMessage(message('⚽⚽⚽a'), null, hasher).valid).toBe(false);
        expect(evaluateChatMessage(message('gg!!'), null, hasher)).toEqual({ valid: true, textHash: 'h(gg!!)' });
        expect(evaluateChatMessage(message('été!'), null, hasher).valid).toBe(true);
        expect(evaluateChatMessage(message('1-0 !'), null, hasher).valid).toBe(true);
    });

    it('refuses the same normalized text as the last credited message within 24 h', () => {
        const last = { textHash: chatTextHash('Allez PSG', hasher), createdAt: T0 };
        expect(evaluateChatMessage(message('allez   psg', 60), last, hasher)).toEqual({ valid: false, reason: 'duplicate' });
        expect(evaluateChatMessage(message('allez psg', 25 * 3600), last, hasher).valid).toBe(true);
    });

    it('waits 20 s after the last credited message (CA11)', () => {
        const last = { textHash: 'h(previous)', createdAt: T0 };
        expect(evaluateChatMessage(message('what a save', 10), last, hasher)).toEqual({ valid: false, reason: 'too_soon' });
        expect(evaluateChatMessage(message('what a save', 20), last, hasher).valid).toBe(true);
    });
});

describe('chat daily cap (CA11)', () => {
    it('6 valid messages in a day earn 5 XP', () => {
        let used = 0;
        const xp = Array.from({ length: 6 }, () => {
            const credited = computeCreditedXp({
                requestedXp: SOURCE_RULES.chat_message.xp ?? 0,
                usedToday: used,
                dailyCap: SOURCE_RULES.chat_message.dailyCapXp,
                multiplier: 1,
            });
            used += credited.baseXp;
            return credited.xp;
        });
        expect(xp).toEqual([1, 1, 1, 1, 1, 0]);
    });
});
