import 'reflect-metadata';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { Match } from '@chiliztv/domain/matches/entities/Match';
import { MarketState } from '@chiliztv/domain/shared/ports/IBlockchainService';
import { ResolveHalftimeMarketUseCase } from '../ResolveHalftimeMarketUseCase';

const NOW = new Date('2026-06-11T20:00:00Z');

function makeMatch(opts: {
    id: number;
    status: string;
    kickoffMinAgo: number;
    htHome?: number | null;
    htAway?: number | null;
    contract?: string | null;
}): Match {
    return Match.reconstitute({
        id: opts.id,
        apiFootballId: 100 + opts.id,
        homeTeamId: 1,
        homeTeamName: 'Home',
        awayTeamId: 2,
        awayTeamName: 'Away',
        leagueId: 1,
        leagueName: 'Test League',
        season: 2026,
        status: opts.status,
        matchDate: new Date(NOW.getTime() - opts.kickoffMinAgo * 60_000),
        htHomeScore: opts.htHome ?? null,
        htAwayScore: opts.htAway ?? null,
        bettingContractAddress:
            opts.contract === undefined ? `0xCONTRACT${opts.id}` : (opts.contract ?? undefined),
        createdAt: NOW,
        updatedAt: NOW,
    });
}

describe('ResolveHalftimeMarketUseCase.executeAll', () => {
    let matchRepository: { findAll: ReturnType<typeof vi.fn>; findByApiFootballId: ReturnType<typeof vi.fn> };
    let blockchainService: {
        getMarketState: ReturnType<typeof vi.fn>;
        closeMarketsByIds: ReturnType<typeof vi.fn>;
        resolveAlreadyClosedMarkets: ReturnType<typeof vi.fn>;
        cancelMarket: ReturnType<typeof vi.fn>;
    };
    let useCase: ResolveHalftimeMarketUseCase;

    beforeEach(() => {
        matchRepository = { findAll: vi.fn(), findByApiFootballId: vi.fn() };
        blockchainService = {
            getMarketState: vi.fn().mockResolvedValue(MarketState.Open),
            closeMarketsByIds: vi.fn().mockResolvedValue({ closed: 1 }),
            resolveAlreadyClosedMarkets: vi.fn().mockResolvedValue(1),
            cancelMarket: vi.fn().mockResolvedValue({ cancelled: 1 }),
        };
        const clock = { now: () => NOW };
        useCase = new ResolveHalftimeMarketUseCase(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            matchRepository as any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            blockchainService as any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            clock as any,
        );
    });

    it('resolves a live 2H match once the HT score is known', async () => {
        matchRepository.findAll.mockResolvedValue([
            makeMatch({ id: 1, status: '2H', kickoffMinAgo: 60, htHome: 1, htAway: 0 }),
        ]);

        const r = await useCase.executeAll();
        expect(r).toEqual({ resolved: 1, voided: 0, scanned: 1 });
        expect(blockchainService.resolveAlreadyClosedMarkets).toHaveBeenCalledWith('0xCONTRACT1', {
            homeGoals: 1,
            awayGoals: 0,
            htHomeGoals: 1,
            htAwayGoals: 0,
        });
    });

    it('rescues a missed HALFTIME market on a freshly finished FT match', async () => {
        // Incident 2026-06-11: live window missed (deploys mid-match) — the
        // market must still resolve from the cron once the match shows FT.
        matchRepository.findAll.mockResolvedValue([
            makeMatch({ id: 2, status: 'FT', kickoffMinAgo: 120, htHome: 1, htAway: 0 }),
        ]);

        const r = await useCase.executeAll();
        expect(r).toEqual({ resolved: 1, voided: 0, scanned: 1 });
        expect(blockchainService.closeMarketsByIds).toHaveBeenCalled();
    });

    it('skips FT matches older than the rescue window', async () => {
        matchRepository.findAll.mockResolvedValue([
            makeMatch({ id: 3, status: 'FT', kickoffMinAgo: 7 * 60, htHome: 1, htAway: 0 }),
        ]);

        const r = await useCase.executeAll();
        expect(r).toEqual({ resolved: 0, voided: 0, scanned: 0 });
        expect(blockchainService.getMarketState).not.toHaveBeenCalled();
    });

    it('voids the market on a finished match when no HT score ever arrived', async () => {
        matchRepository.findAll.mockResolvedValue([
            makeMatch({ id: 4, status: 'FT', kickoffMinAgo: 120, htHome: null, htAway: null }),
        ]);

        const r = await useCase.executeAll();
        expect(r).toEqual({ resolved: 0, voided: 1, scanned: 1 });
        expect(blockchainService.cancelMarket).toHaveBeenCalled();
    });

    it('leaves already-resolved markets untouched (pre-flight state check)', async () => {
        blockchainService.getMarketState.mockResolvedValue(MarketState.Resolved);
        matchRepository.findAll.mockResolvedValue([
            makeMatch({ id: 5, status: 'FT', kickoffMinAgo: 120, htHome: 1, htAway: 0 }),
        ]);

        const r = await useCase.executeAll();
        expect(r).toEqual({ resolved: 0, voided: 0, scanned: 1 });
        expect(blockchainService.closeMarketsByIds).not.toHaveBeenCalled();
    });

    it('ignores matches without a betting contract', async () => {
        matchRepository.findAll.mockResolvedValue([
            makeMatch({ id: 6, status: '2H', kickoffMinAgo: 60, htHome: 1, htAway: 0, contract: null }),
        ]);

        const r = await useCase.executeAll();
        expect(r).toEqual({ resolved: 0, voided: 0, scanned: 0 });
    });
});
