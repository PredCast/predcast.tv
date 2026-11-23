/**
 * On-chain jobs sign transactions: they only start on their own in production. Elsewhere they wait
 * for JOBS_ONCHAIN_ENABLED=true (a local restart must not send a tx); "Run now" works either way.
 */
export function onChainJobsEnabled(nodeEnv: string, flag: boolean | undefined): boolean {
    return flag ?? nodeEnv === 'production';
}
