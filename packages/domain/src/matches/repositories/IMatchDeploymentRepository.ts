import type { Match } from '../entities/Match';
import type { MatchStatusKind } from '../policies/MatchStatusKind';

export interface AdminMatchQuery {
    /** Matched against team and league names, case-insensitive. */
    readonly search?: string;
    readonly leagueId?: number;
    readonly from?: Date;
    readonly to?: Date;
    readonly statusKind?: Exclude<MatchStatusKind, 'unknown'>;
    readonly deployed?: boolean;
    readonly published?: boolean;
    readonly sort: 'kickoff_asc' | 'kickoff_desc';
    readonly limit: number;
    readonly offset: number;
}

export interface MatchPage {
    readonly items: ReadonlyArray<Match>;
    readonly total: number;
}

/**
 * Writes to the columns the admin owns (contract, chain, opening, publication). They are kept out
 * of `IMatchRepository.update`, which rewrites a whole row read earlier and would otherwise undo a
 * publication or a deployment made in between by another process.
 */
export interface IMatchDeploymentRepository {
    recordContractDeployed(apiFootballId: number, contractAddress: string, chainId: number): Promise<void>;
    setBettingOpenedAt(apiFootballId: number, at: Date): Promise<void>;
    setPublishedAt(apiFootballId: number, at: Date | null): Promise<void>;
    searchForAdmin(query: AdminMatchQuery): Promise<MatchPage>;
}
