import type { AdminRole } from '../types';

/** Audit actions visible in a role's activity feed, as action prefixes. */
export type ActivityScope =
    | { readonly kind: 'all' }
    | { readonly kind: 'only'; readonly prefixes: ReadonlyArray<string> }
    | { readonly kind: 'except'; readonly prefixes: ReadonlyArray<string> };

const MODERATION_PREFIXES = ['moderation.', 'config.report_config.'] as const;

/** Admins see every actor; moderators their own domain; finance everything but moderation and access denials. */
export function activityScopeFor(role: AdminRole): ActivityScope {
    switch (role) {
        case 'super_admin':
        case 'admin':
            return { kind: 'all' };
        case 'moderator':
            return { kind: 'only', prefixes: MODERATION_PREFIXES };
        case 'finance':
            return { kind: 'except', prefixes: [...MODERATION_PREFIXES, 'deny'] };
    }
}

export function isInActivityScope(scope: ActivityScope, action: string): boolean {
    if (scope.kind === 'all') return true;
    const hit = scope.prefixes.some((p) => action.startsWith(p));
    return scope.kind === 'only' ? hit : !hit;
}
