import type { GamificationCursorName, GamificationCursorPositions } from '../entities/CursorPositions';

/** `gamification_cursors`; resetting a cursor replays without double credit (`ref_key`). */
export interface IGamificationCursorRepository {
    get<K extends GamificationCursorName>(name: K): Promise<GamificationCursorPositions[K] | null>;
    set<K extends GamificationCursorName>(name: K, position: GamificationCursorPositions[K], at: Date): Promise<void>;
}
