import { describe, expect, it } from 'vitest';

import { buildSourcesHarness } from '../../../../testing/gamification/sourcesHarness';
import { PurgeGamificationDataUseCase } from '../PurgeGamificationDataUseCase';

const DAY_MS = 86_400_000;

function setup(launch: Parameters<typeof buildSourcesHarness>[0] = {}) {
    const h = buildSourcesHarness(launch);
    const purge = new PurgeGamificationDataUseCase(h.config, h.clock, h.watchMinutes, h.store.progress, h.store.notifications);
    return { h, purge };
}

describe('PurgeGamificationDataUseCase', () => {
    it('purges minutes and counters after 35 days and seen notifications after 30; the ledger stays', async () => {
        const { h, purge } = setup();
        const now = h.clock.now();
        const old = new Date(now.getTime() - 36 * DAY_MS);
        h.watchMinutes.minutes.add(`acc|${old.toISOString()}`);
        h.watchMinutes.minutes.add(`acc|${now.toISOString()}`);
        h.store.counters.set('acc|2027-01-20|minutes:watch', 40);
        h.store.counters.set('acc|2027-03-01|minutes:watch', 3);
        const seen = await h.store.notifications.create('acc', { kind: 'level_up', level: 2 }, old);
        h.store.notificationRows[0] = { ...seen, seenAt: new Date(now.getTime() - 31 * DAY_MS) };
        await h.store.notifications.create('acc', { kind: 'level_up', level: 3 }, now);

        expect(await purge.execute()).toEqual({ status: 'done', watchMinutes: 1, dailyCounters: 1, notifications: 1 });
        expect(h.watchMinutes.minutes.size).toBe(1);
        expect([...h.store.counters.keys()]).toEqual(['acc|2027-03-01|minutes:watch']);
        expect(h.store.notificationRows).toHaveLength(1);
    });

    it('exits at once when the gamification is not launched', async () => {
        const { h, purge } = setup({ launch: { launchAt: null } });
        h.store.counters.set('acc|2020-01-01|minutes:watch', 1);
        expect(await purge.execute()).toEqual({ status: 'skipped', reason: 'not_launched' });
        expect(h.store.counters.size).toBe(1);
    });
});
