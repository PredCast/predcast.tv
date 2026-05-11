import { injectable } from 'tsyringe';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';

@injectable()
export class SystemClock implements IClock {
    // eslint-disable-next-line no-restricted-syntax -- the one place new Date() is allowed
    now(): Date { return new Date(); }
}
