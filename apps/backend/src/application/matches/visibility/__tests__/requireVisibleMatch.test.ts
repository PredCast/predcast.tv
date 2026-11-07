import 'reflect-metadata';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { BusinessRuleError } from '@chiliztv/domain/shared/errors/BusinessRuleError';
import { NotFoundError } from '@chiliztv/domain/shared/errors/NotFoundError';
import type { Match } from '@chiliztv/domain/matches/entities/Match';
import type { IChatRepository } from '@chiliztv/domain/chat/repositories/IChatRepository';
import type { IStreamRepository } from '@chiliztv/domain/streams/repositories/IStreamRepository';
import type { IStreamingService } from '@chiliztv/domain/streams/ports/IStreamingService';
import type { ISubscriptionChecker } from '@chiliztv/domain/shared/ports/ISubscriptionChecker';

import { __resetTestMatchIdForTesting, matchFixture } from '../../../../testing/fixtures/match.fixtures';
import { CreateStreamUseCase } from '../../../streams/use-cases/CreateStreamUseCase';
import { SendMessageUseCase } from '../../../chat/use-cases/SendMessageUseCase';
import type { GetMatchByIdUseCase } from '../../use-cases/GetMatchByIdUseCase';
import { requireVisibleMatch } from '../requireVisibleMatch';

const getMatchReturning = (match: Match) => ({ execute: vi.fn(async () => match) }) as unknown as GetMatchByIdUseCase;

describe('requireVisibleMatch', () => {
    beforeEach(() => __resetTestMatchIdForTesting());

    it('returns a deployed, published match', async () => {
        const match = matchFixture.deployedPublished();
        await expect(requireVisibleMatch(getMatchReturning(match), 1)).resolves.toBe(match);
    });

    it.each([
        ['not deployed', () => matchFixture.notDeployed()],
        ['unpublished', () => matchFixture.deployedUnpublished()],
    ])('reports a %s match as not found', async (_label, build) => {
        await expect(requireVisibleMatch(getMatchReturning(build()), 1)).rejects.toBeInstanceOf(NotFoundError);
    });
});

describe('stream and chat guards', () => {
    beforeEach(() => __resetTestMatchIdForTesting());

    const streaming = { createLiveInput: vi.fn() } as unknown as IStreamingService;
    const streams = { save: vi.fn() } as unknown as IStreamRepository;
    const dto = { matchId: 1, streamerId: 'u', streamerName: 'n', streamerWalletAddress: '0x1' } as never;

    it('refuses to create a stream on an unpublished match before touching Cloudflare', async () => {
        const uc = new CreateStreamUseCase(streams, streaming, getMatchReturning(matchFixture.deployedUnpublished()));
        await expect(uc.execute(dto)).rejects.toBeInstanceOf(NotFoundError);
        expect(streaming.createLiveInput).not.toHaveBeenCalled();
    });

    it('refuses to create a stream on a finished match', async () => {
        const finished = matchFixture.fullTime({ bettingContractAddress: '0x00000000000000000000000000000000000000aa', publishedAt: new Date() });
        const uc = new CreateStreamUseCase(streams, streaming, getMatchReturning(finished));
        await expect(uc.execute(dto)).rejects.toMatchObject({ details: { reason: 'FINISHED' } });
        await expect(uc.execute(dto)).rejects.toBeInstanceOf(BusinessRuleError);
    });

    it('refuses a chat message on a match that is not visible', async () => {
        const chat = { saveMessage: vi.fn(), updateUserActivity: vi.fn() } as unknown as IChatRepository;
        const subs = { hasActiveSubscription: vi.fn(async () => false) } as unknown as ISubscriptionChecker;
        const uc = new SendMessageUseCase(chat, subs, getMatchReturning(matchFixture.notDeployed()));

        await expect(uc.execute({ matchId: 1, userId: 'u', walletAddress: '0x1', username: 'n', message: 'hi' } as never))
            .rejects.toBeInstanceOf(NotFoundError);
        expect(chat.saveMessage).not.toHaveBeenCalled();
    });
});
