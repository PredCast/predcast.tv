import { injectable } from 'tsyringe';

import type { IJobRunSignal } from '@chiliztv/domain/jobs/ports/IJobRunSignal';

/** Without Redis, workers pick manual runs up on their polling tick. */
@injectable()
export class NoopJobRunSignal implements IJobRunSignal {
    async notify(): Promise<void> {}

    subscribe(): () => void {
        return () => undefined;
    }
}
