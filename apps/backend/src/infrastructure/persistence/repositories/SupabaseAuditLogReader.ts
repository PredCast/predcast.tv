import { injectable } from 'tsyringe';

import type { AuditLogEntry, IAuditLogReader } from '@chiliztv/domain/admin/ports/IAuditLogReader';
import type { ActivityScope } from '@chiliztv/domain/admin/dashboard/ActivityScopePolicy';

import { supabaseClient as supabase } from '../../database/supabase/client';
import { logger } from '../../logging/logger';

interface AuditRow {
    id: number;
    action: string;
    target_type: string;
    target_id: string;
    actor_wallet: string;
    actor_role: string;
    created_at: string;
}

/** PostgREST `like` pattern of an action prefix (`*` is its wildcard; `_` matching one char is harmless here). */
const likePrefix = (prefix: string) => `${prefix}*`;

@injectable()
export class SupabaseAuditLogReader implements IAuditLogReader {
    async findRecent(limit: number, scope: ActivityScope = { kind: 'all' }): Promise<AuditLogEntry[]> {
        let query = supabase
            .from('audit_log')
            .select('id, action, target_type, target_id, actor_wallet, actor_role, created_at')
            .order('id', { ascending: false })
            .limit(limit);
        if (scope.kind === 'only') {
            query = query.or(scope.prefixes.map((p) => `action.like.${likePrefix(p)}`).join(','));
        } else if (scope.kind === 'except') {
            for (const p of scope.prefixes) query = query.not('action', 'like', likePrefix(p));
        }
        const { data, error } = await query;
        if (error) {
            logger.error('Failed to read recent audit entries', { error: error.message });
            throw new Error('Failed to read recent audit entries');
        }
        return ((data ?? []) as AuditRow[]).map((row) => ({
            id: row.id,
            action: row.action,
            targetType: row.target_type,
            targetId: row.target_id,
            actorWallet: row.actor_wallet,
            actorRole: row.actor_role,
            createdAt: new Date(row.created_at),
        }));
    }
}
