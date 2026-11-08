/** Latest block of the chain the indexers follow (indexer lag on the admin Jobs page). */
export interface IChainHeadReader {
    latestBlock(): Promise<bigint>;
}
