/** Position stored per processor cursor (`gamification_cursors.position`). */
export interface GamificationCursorPositions {
    readonly bets: { readonly lastId: number };
    readonly settlements: { readonly block: number; readonly logIndex: number };
    readonly support: { readonly createdAt: string };
    readonly chat_removals: { readonly removedAt: string };
    readonly stream_moderation: { readonly triggeredAt: string };
    readonly cycles: { readonly lastEpochId: number };
}

export type GamificationCursorName = keyof GamificationCursorPositions;
