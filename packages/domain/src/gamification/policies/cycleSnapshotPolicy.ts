import { CYCLE_SNAPSHOT_TOP } from '../catalog/constants';

export interface CycleScore {
    /** Lower-cased. */
    readonly wallet: string;
    readonly score: bigint;
}

export interface RankedWallet extends CycleScore {
    readonly rank: number;
}

/** Top of a closed cycle (§8.3): `score > 0`, `score DESC, wallet ASC`, ranks 1..top. */
export function rankCycle(scores: ReadonlyArray<CycleScore>, top: number = CYCLE_SNAPSHOT_TOP): ReadonlyArray<RankedWallet> {
    return scores
        .filter((s) => s.score > BigInt(0))
        .map((s) => ({ wallet: s.wallet.toLowerCase(), score: s.score }))
        .sort((a, b) => (a.score === b.score ? (a.wallet < b.wallet ? -1 : a.wallet > b.wallet ? 1 : 0) : a.score > b.score ? -1 : 1))
        .slice(0, top)
        .map((s, i) => ({ ...s, rank: i + 1 }));
}

/**
 * Only cycles closed at or after the launch count (§3.1 rule 6). The rank freezes when
 * `EpochAdvanced` is indexed, never at the theoretical boundary (D15).
 */
export function isCycleCounted(closedAt: Date, launchAt: Date): boolean {
    return closedAt.getTime() >= launchAt.getTime();
}
