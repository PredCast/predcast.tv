import { describe, expect, it } from 'vitest';

import { activityScopeFor, isInActivityScope } from '../ActivityScopePolicy';

const visible = (role: Parameters<typeof activityScopeFor>[0], action: string) => isInActivityScope(activityScopeFor(role), action);

describe('activity scope', () => {
    it('shows admins every action', () => {
        expect(visible('admin', 'moderation.ban.create')).toBe(true);
        expect(visible('super_admin', 'deny')).toBe(true);
    });

    it('limits moderators to moderation and its config', () => {
        expect(visible('moderator', 'moderation.ban.create')).toBe(true);
        expect(visible('moderator', 'config.report_config.update')).toBe(true);
        expect(visible('moderator', 'matches.publish')).toBe(false);
        expect(visible('moderator', 'jobs.run')).toBe(false);
    });

    it('hides moderation and access denials from finance', () => {
        expect(visible('finance', 'markets.contract.deploy')).toBe(true);
        expect(visible('finance', 'moderation.report.close')).toBe(false);
        expect(visible('finance', 'deny')).toBe(false);
    });
});
