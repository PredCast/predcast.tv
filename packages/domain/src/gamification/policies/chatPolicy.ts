import { MessageType } from '../../chat/entities/ChatMessage';
import {
    CHAT_DUPLICATE_WINDOW_HOURS,
    CHAT_MIN_ALPHANUMERICS,
    CHAT_MIN_INTERVAL_SECONDS,
    CHAT_MIN_LENGTH,
} from '../catalog/constants';
import type { ITextHasher } from '../ports/ITextHasher';

export interface ChatMessageCandidate {
    readonly messageType: MessageType;
    readonly text: string;
    readonly createdAt: Date;
}

/** Last credited chat row of the account (`metadata.textHash` + `occurred_at`). */
export interface LastCreditedChat {
    readonly textHash: string;
    readonly createdAt: Date;
}

export type ChatRejection = 'not_a_message' | 'too_short' | 'too_few_alphanumerics' | 'duplicate' | 'too_soon';

export type ChatEvaluation =
    | { readonly valid: true; readonly textHash: string }
    | { readonly valid: false; readonly reason: ChatRejection };

const ALPHANUMERIC = /[\p{L}\p{N}]/gu;

/** Lower case, trimmed, whitespace runs collapsed — the only form ever hashed or compared. */
export function normalizeChatText(text: string): string {
    return text.trim().replace(/\s+/g, ' ').toLowerCase();
}

/** Hash stored in `metadata.textHash`; the text itself is never stored. */
export function chatTextHash(text: string, hasher: ITextHasher): string {
    return hasher.sha256Hex(normalizeChatText(text));
}

/** Whether a sent message earns chat XP (§3.3 `chat_message`). Daily caps are applied by the credit. */
export function evaluateChatMessage(
    candidate: ChatMessageCandidate,
    lastCredited: LastCreditedChat | null,
    hasher: ITextHasher,
): ChatEvaluation {
    if (candidate.messageType !== MessageType.REGULAR) return { valid: false, reason: 'not_a_message' };

    const trimmed = candidate.text.trim();
    if ([...trimmed].length < CHAT_MIN_LENGTH) return { valid: false, reason: 'too_short' };
    if ((trimmed.match(ALPHANUMERIC) ?? []).length < CHAT_MIN_ALPHANUMERICS) {
        return { valid: false, reason: 'too_few_alphanumerics' };
    }

    const textHash = chatTextHash(candidate.text, hasher);
    if (lastCredited) {
        const elapsedMs = candidate.createdAt.getTime() - lastCredited.createdAt.getTime();
        if (lastCredited.textHash === textHash && elapsedMs < CHAT_DUPLICATE_WINDOW_HOURS * 3_600_000) {
            return { valid: false, reason: 'duplicate' };
        }
        if (elapsedMs < CHAT_MIN_INTERVAL_SECONDS * 1000) return { valid: false, reason: 'too_soon' };
    }
    return { valid: true, textHash };
}
