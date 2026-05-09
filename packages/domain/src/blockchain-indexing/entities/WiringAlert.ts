/**
 * Snapshot of the post-deploy wiring problems detected for a freshly-created
 * BettingMatch. Each entry of `missingSteps` corresponds to a setter or
 * grantRole call that should have been made by the deployer.
 *
 * The indexer never auto-corrects — it just records, so an ops dashboard
 * (or a future cron) can drive the remediation.
 */
export type WiringStep =
    | 'setUSDCToken'
    | 'setLiquidityPool'
    | 'pool.authorizeMatch'
    | 'grantRole.SWAP_ROUTER_ROLE'
    | 'grantRole.RESOLVER_ROLE';

export interface WiringAlert {
    readonly matchAddress: string;
    readonly missingSteps: ReadonlyArray<WiringStep>;
    readonly detectedAt: Date;
    readonly resolvedAt: Date | null;
}
