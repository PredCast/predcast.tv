import { injectable } from 'tsyringe';

import type { JobCategory, JobDescriptor, JobSchedule } from '@chiliztv/domain/jobs/types';
import type { IJobCatalog } from '@chiliztv/domain/jobs/ports/IJobCatalog';

import { JobLocks, type JobLockConfig } from './JobLockConfig';
import { AdvanceEpochJob } from './jobs/AdvanceEpochJob';
import { CleanupStreamsJob } from './jobs/CleanupStreamsJob';
import { CloseLiveMarketsJob } from './jobs/CloseLiveMarketsJob';
import { CloudflareReconcileJob } from './jobs/CloudflareReconcileJob';
import { LiftExpiredBansJob } from './jobs/LiftExpiredBansJob';
import { OldEndedStreamsCleanupJob } from './jobs/OldEndedStreamsCleanupJob';
import { ProcessMatchOperationsJob } from './jobs/ProcessMatchOperationsJob';
import { PurgeJobRunsJob } from './jobs/PurgeJobRunsJob';
import { RefreshTokenPricesJob } from './jobs/RefreshTokenPricesJob';
import { ResolveHalftimeMarketsJob } from './jobs/ResolveHalftimeMarketsJob';
import { ResolveMarketsJob } from './jobs/ResolveMarketsJob';
import { SettlePredictionsJob } from './jobs/SettlePredictionsJob';
import { StaleStreamCleanupJob } from './jobs/StaleStreamCleanupJob';
import { SyncLiveMatchesJob } from './jobs/SyncLiveMatchesJob';
import { SyncMatchesJob } from './jobs/SyncMatchesJob';
import { ViewerReconcileJob } from './jobs/ViewerReconcileJob';

export interface RegisteredJob extends JobDescriptor {
    readonly lock: JobLockConfig;
    readonly run: () => Promise<void>;
}

const cron = (expression: string): JobSchedule => ({ kind: 'cron', expression });
const every = (everyMs: number): JobSchedule => ({ kind: 'interval', everyMs });
const selfRescheduled = (everyMs: number): JobSchedule => ({ kind: 'self_rescheduled', everyMs });

function define(
    name: string,
    category: JobCategory,
    description: string,
    schedule: JobSchedule,
    lock: JobLockConfig,
    run: () => Promise<void>,
): RegisteredJob {
    return { name, category, description, schedule, lock, lockTtlSeconds: lock.ttlSeconds, run };
}

/** Single source of truth for the scheduler, the manual runner and the admin Jobs page. */
@injectable()
export class JobRegistry implements IJobCatalog {
    private readonly jobs: ReadonlyArray<RegisteredJob>;

    constructor(
        syncMatches: SyncMatchesJob,
        syncLiveMatches: SyncLiveMatchesJob,
        resolveMarkets: ResolveMarketsJob,
        resolveHalftimeMarkets: ResolveHalftimeMarketsJob,
        closeLiveMarkets: CloseLiveMarketsJob,
        cleanupStreams: CleanupStreamsJob,
        staleStreamCleanup: StaleStreamCleanupJob,
        oldEndedStreamsCleanup: OldEndedStreamsCleanupJob,
        settlePredictions: SettlePredictionsJob,
        viewerReconcile: ViewerReconcileJob,
        cloudflareReconcile: CloudflareReconcileJob,
        refreshTokenPrices: RefreshTokenPricesJob,
        advanceEpoch: AdvanceEpochJob,
        liftExpiredBans: LiftExpiredBansJob,
        processMatchOperations: ProcessMatchOperationsJob,
        purgeJobRuns: PurgeJobRunsJob,
    ) {
        this.jobs = [
            define('SyncLiveMatches', 'on_chain', 'Live scores from API-Football (quota); resolves halftime markets on-chain as soon as the score is known.',
                selfRescheduled(syncLiveMatches.getIntervalMs()), JobLocks.syncLiveMatches, () => syncLiveMatches.execute()),
            define('SyncMatches', 'on_chain', 'Fixtures from API-Football (quota), then resolves finished matches on-chain.',
                cron(syncMatches.getSchedule()), JobLocks.syncMatches, () => syncMatches.execute()),
            define('RefreshTokenPrices', 'quota', 'Fan-token prices from CoinGecko (monthly call budget).',
                every(refreshTokenPrices.getIntervalMs()), JobLocks.refreshTokenPrices, () => refreshTokenPrices.execute()),
            define('ProcessMatchOperations', 'on_chain', 'Runs queued admin deploy / setup / cancel operations with the signer.',
                selfRescheduled(processMatchOperations.getIntervalMs()), JobLocks.matchOperations, () => processMatchOperations.execute()),
            define('CloseLiveMarkets', 'on_chain', 'Closes open markets of matches that kicked off.',
                every(closeLiveMarkets.getIntervalMs()), JobLocks.closeLiveMarkets, () => closeLiveMarkets.execute()),
            define('ResolveMarkets', 'on_chain', 'Backup resolution of finished matches.',
                every(resolveMarkets.getIntervalMs()), JobLocks.resolveMarkets, () => resolveMarkets.execute()),
            define('ResolveHalftimeMarkets', 'on_chain', 'Backup resolution of halftime markets.',
                selfRescheduled(resolveHalftimeMarkets.getIntervalMs()), JobLocks.resolveHalftimeMarkets, () => resolveHalftimeMarkets.execute()),
            define('AdvanceEpoch', 'on_chain', 'Advances the leaderboard epoch when it is due (permissionless call).',
                cron(advanceEpoch.getSchedule()), JobLocks.advanceEpoch, () => advanceEpoch.execute()),
            define('CloudflareReconcile', 'quota', 'Ends live streams Cloudflare reports as disconnected (Cloudflare API).',
                cron(cloudflareReconcile.getSchedule()), JobLocks.cloudflareReconcile, () => cloudflareReconcile.execute()),
            define('ViewerReconcile', 'safe', 'Recounts viewers from live viewer sessions.',
                cron(viewerReconcile.getSchedule()), JobLocks.viewerReconcile, () => viewerReconcile.execute()),
            define('StaleStreamCleanup', 'safe', 'Ends browser streams without heartbeat and abandoned stream setups.',
                cron(staleStreamCleanup.getSchedule()), JobLocks.staleStreamCleanup, () => staleStreamCleanup.execute()),
            define('CleanupStreams', 'safe', 'Cleans up ended streams older than 24 hours.',
                cron(cleanupStreams.getSchedule()), JobLocks.cleanupStreams, () => cleanupStreams.execute()),
            define('OldEndedStreamsCleanup', 'safe', 'Deletes ended streams older than 7 days.',
                cron(oldEndedStreamsCleanup.getSchedule()), JobLocks.oldEndedStreams, () => oldEndedStreamsCleanup.execute()),
            define('SettlePredictions', 'safe', 'Settles free predictions of finished matches.',
                every(settlePredictions.getIntervalMs()), JobLocks.settlePredictions, () => settlePredictions.execute()),
            define('LiftExpiredBans', 'safe', 'Marks expired bans as lifted and notifies clients.',
                every(liftExpiredBans.getIntervalMs()), JobLocks.liftExpiredBans, () => liftExpiredBans.execute()),
            define('PurgeJobRuns', 'safe', 'Deletes job run history older than 14 days.',
                cron(purgeJobRuns.getSchedule()), JobLocks.purgeJobRuns, () => purgeJobRuns.execute()),
        ];
    }

    list(): ReadonlyArray<JobDescriptor> {
        return this.jobs;
    }

    get(name: string): JobDescriptor | null {
        return this.find(name);
    }

    registered(): ReadonlyArray<RegisteredJob> {
        return this.jobs;
    }

    find(name: string): RegisteredJob | null {
        return this.jobs.find((job) => job.name === name) ?? null;
    }
}
