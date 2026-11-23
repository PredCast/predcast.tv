import { createHash } from 'node:crypto';
import { injectable } from 'tsyringe';

import type { ITextHasher } from '@chiliztv/domain/gamification/ports/ITextHasher';

@injectable()
export class NodeTextHasher implements ITextHasher {
    sha256Hex(input: string): string {
        return createHash('sha256').update(input, 'utf8').digest('hex');
    }
}
