import { inject, injectable } from 'tsyringe';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IJobRunSignal } from '@chiliztv/domain/jobs/ports/IJobRunSignal';

import type { RedisClient } from '../../cache/RedisClient';
import { logger } from '../../logging/logger';

const CHANNEL = 'admin:job-runs';

/** Pub/sub wake-up; a dedicated subscriber connection (a subscribed ioredis client cannot run commands). */
@injectable()
export class RedisJobRunSignal implements IJobRunSignal {
    constructor(@inject(TOKENS.RedisClient) private readonly redis: RedisClient) {}

    async notify(runId: string): Promise<void> {
        await this.redis.publish(CHANNEL, runId);
    }

    subscribe(listener: () => void): () => void {
        const sub = this.redis.duplicate();
        sub.on('message', (channel: string) => {
            if (channel === CHANNEL) listener();
        });
        sub.on('error', (err: Error) => logger.warn('Job run signal subscriber error', { error: err.message }));
        sub.subscribe(CHANNEL).catch((err: Error) => {
            logger.warn('Job run signal subscribe failed, relying on polling', { error: err.message });
        });
        return () => {
            void sub.quit().catch(() => undefined);
        };
    }
}
