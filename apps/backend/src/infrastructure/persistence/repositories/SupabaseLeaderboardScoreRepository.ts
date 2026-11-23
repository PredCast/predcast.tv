import { injectable } from 'tsyringe';
import { supabaseClient as supabase } from '../../database/supabase/client';
import { logger } from '../../logging/logger';
import type {
    LeaderboardScore,
    LeaderboardScoreWithRank,
} from '@chiliztv/domain/leaderboard/entities/LeaderboardScore';
import type {
    ILeaderboardScoreRepository,
    LeaderboardWinEvent,
} from '@chiliztv/domain/leaderboard/repositories/ILeaderboardScoreRepository';

interface ScoreRow {
    user_address: string;
    total_score: string;
    updated_at: string;
}

interface CycleScoreRow {
    user_address: string;
    score: string;
    updated_at: string;
}

function toDomain(row: ScoreRow): LeaderboardScore {
    return {
        userAddress: row.user_address,
        totalScore: BigInt(row.total_score),
        updatedAt: new Date(row.updated_at),
    };
}

function cycleRowToDomain(row: CycleScoreRow): LeaderboardScore {
    return {
        userAddress: row.user_address,
        totalScore: BigInt(row.score),
        updatedAt: new Date(row.updated_at),
    };
}

@injectable()
export class SupabaseLeaderboardScoreRepository implements ILeaderboardScoreRepository {
    async recordWin(event: LeaderboardWinEvent): Promise<boolean> {
        const addr = event.userAddress.toLowerCase();
        // Set-from-latest-event in one SQL call: a replayed range never double counts (D6).
        const { data, error } = await supabase.rpc('record_leaderboard_win', {
            p_cycle_id: event.cycleId.toString(),
            p_user_address: addr,
            p_new_epoch_score: event.newEpochScore.toString(),
            p_block: event.blockNumber.toString(),
            p_log_index: event.logIndex,
        });
        if (error) {
            logger.error('Failed to record leaderboard win', {
                cycleId: event.cycleId.toString(),
                userAddress: addr,
                error: error.message,
            });
            throw new Error('Failed to record leaderboard win');
        }
        return data === true;
    }

    async getScoreForUser(userAddress: string): Promise<LeaderboardScore | null> {
        const { data, error } = await supabase
            .from('leaderboard_scores')
            .select('user_address, total_score, updated_at')
            .eq('user_address', userAddress.toLowerCase())
            .maybeSingle();
        if (error) {
            logger.error('Failed to read leaderboard score', { error: error.message });
            throw new Error('Failed to read leaderboard score');
        }
        return data ? toDomain(data as ScoreRow) : null;
    }

    async getRank(userAddress: string): Promise<number | null> {
        const { data, error } = await supabase.rpc('leaderboard_rank_of', {
            p_user_address: userAddress.toLowerCase(),
        });
        if (error) {
            logger.error('Failed to compute rank', { error: error.message });
            throw new Error('Failed to compute rank');
        }
        const rank = typeof data === 'number' ? data : Number(data);
        return Number.isFinite(rank) && rank > 0 ? rank : null;
    }

    async getTopN(limit: number): Promise<ReadonlyArray<LeaderboardScoreWithRank>> {
        const { data, error } = await supabase
            .from('leaderboard_scores')
            .select('user_address, total_score, updated_at')
            .order('total_score', { ascending: false })
            .limit(Math.max(1, Math.min(limit, 500)));
        if (error) {
            logger.error('Failed to read top scores', { error: error.message });
            throw new Error('Failed to read top scores');
        }
        return (data ?? []).map((row, idx) => ({
            ...toDomain(row as ScoreRow),
            rank: idx + 1,
        }));
    }

    async getCycleScoreForUser(cycleId: bigint, userAddress: string): Promise<LeaderboardScore | null> {
        const { data, error } = await supabase
            .from('leaderboard_cycle_scores')
            .select('user_address, score, updated_at')
            .eq('cycle_id', cycleId.toString())
            .eq('user_address', userAddress.toLowerCase())
            .maybeSingle();
        if (error) {
            logger.error('Failed to read cycle score', { error: error.message });
            throw new Error('Failed to read cycle score');
        }
        return data ? cycleRowToDomain(data as CycleScoreRow) : null;
    }

    async getCycleRank(cycleId: bigint, userAddress: string): Promise<number | null> {
        const { data, error } = await supabase.rpc('leaderboard_cycle_rank_of', {
            p_cycle_id: cycleId.toString(),
            p_user_address: userAddress.toLowerCase(),
        });
        if (error) {
            logger.error('Failed to compute cycle rank', { error: error.message });
            throw new Error('Failed to compute cycle rank');
        }
        const rank = typeof data === 'number' ? data : Number(data);
        return Number.isFinite(rank) && rank > 0 ? rank : null;
    }

    async getTopNForCycle(cycleId: bigint, limit: number): Promise<ReadonlyArray<LeaderboardScoreWithRank>> {
        const { data, error } = await supabase
            .from('leaderboard_cycle_scores')
            .select('user_address, score, updated_at')
            .eq('cycle_id', cycleId.toString())
            .order('score', { ascending: false })
            .limit(Math.max(1, Math.min(limit, 500)));
        if (error) {
            logger.error('Failed to read cycle top scores', { error: error.message });
            throw new Error('Failed to read cycle top scores');
        }
        return (data ?? []).map((row, idx) => ({
            ...cycleRowToDomain(row as CycleScoreRow),
            rank: idx + 1,
        }));
    }
}
