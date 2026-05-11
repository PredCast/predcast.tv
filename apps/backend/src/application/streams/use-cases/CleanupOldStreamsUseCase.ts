import { injectable, inject } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { IStreamRepository } from '@chiliztv/domain/streams/repositories/IStreamRepository';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
/**
 * Cleanup Old Streams Use Case
 * Removes ended streams older than 24 hours from the database.
 */
@injectable()
export class CleanupOldStreamsUseCase {
    constructor(
        @inject(TOKENS.IStreamRepository) private readonly streamRepository: IStreamRepository,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    async execute(): Promise<{ success: boolean; deletedCount: number; error?: string }> {
        try {
            const twentyFourHoursAgo = new Date(this.clock.now().getTime() - 24 * 60 * 60 * 1000);
            const oldStreams = await this.streamRepository.findOldEndedStreams(twentyFourHoursAgo);

            let deletedCount = 0;
            for (const stream of oldStreams) {
                try {
                    await this.streamRepository.delete(stream.getId());
                    deletedCount++;
                } catch {
                    // Non-fatal: continue with remaining streams
                }
            }

            return { success: true, deletedCount };
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            return { success: false, deletedCount: 0, error: errorMessage };
        }
    }
}
