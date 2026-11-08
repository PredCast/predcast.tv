'use client';

import { apiErrorMessage, apiRequestId } from '@/lib/api/errors';
import { fmtAgo } from '@/lib/ui/time';
import { shortWallet } from '@/lib/ui/operator';
import { useIndexers } from '@/hooks/api/useIndexers';
import { useNow } from '@/hooks/useNow';
import { Card } from '@/components/common/Card';
import { CardError } from '@/components/common/CardError';
import { CardHead } from '@/components/common/CardHead';
import { CopyButton } from '@/components/common/CopyButton';
import { EmptyState } from '@/components/common/EmptyState';
import { Skeleton } from '@/components/common/Skeleton';
import { THead } from '@/components/common/THead';
import { TRow } from '@/components/common/TRow';

const COLS = 'minmax(0,1fr) 180px 120px 100px 110px';
/** Indexers read `head - 6`: a few blocks behind is their normal position. */
const LAG_WARN_BLOCKS = BigInt(60);

/** Read-only: indexers run continuously in the worker and are not triggered from here. */
export function IndexersCard() {
  const { data, isLoading, error, refetch, isFetching } = useIndexers();
  const now = useNow();

  return (
    <Card as="section" label="Indexers">
      <CardHead title="Indexers" icon="activity" meta={data?.headBlock ? `Head #${data.headBlock}` : 'Read-only'} />
      {isLoading && <Skeleton className="m-4 h-24" />}
      {error && !data && (
        <CardError title="Couldn't load indexers" detail={apiErrorMessage(error)} requestId={apiRequestId(error)} onRetry={() => void refetch()} retrying={isFetching} />
      )}
      {data && data.indexers.length === 0 && <EmptyState icon="activity" title="No indexer checkpoint yet" py="py-8" />}
      {data && data.indexers.length > 0 && (
        <div className="overflow-x-auto">
          <div className="min-w-[640px]">
            <THead cols={COLS}>
              <span>Indexer</span>
              <span>Contract</span>
              <span className="text-right">Last block</span>
              <span className="text-right">Lag</span>
              <span className="text-right">Updated</span>
            </THead>
            {data.indexers.map((ix) => {
              const lag = ix.lagBlocks === null ? null : BigInt(ix.lagBlocks);
              const behind = lag !== null && lag > LAG_WARN_BLOCKS;
              return (
                <TRow key={ix.name} cols={COLS} density="compact" accent={behind ? '#F5C518' : undefined}>
                  <span className="font-mono text-[12px] text-white">{ix.name}</span>
                  <span className="flex items-center gap-1.5 font-mono text-[11px] text-fg-body">
                    {ix.contractAddress ? (
                      <>
                        {shortWallet(ix.contractAddress)}
                        <CopyButton value={ix.contractAddress} label={`Copy ${ix.name} contract address`} />
                      </>
                    ) : (
                      '—'
                    )}
                  </span>
                  <span className="text-right font-mono text-[12px] text-fg-strong">{ix.lastBlock}</span>
                  <span className={`text-right font-mono text-[12px] ${behind ? 'text-warning' : 'text-fg-body'}`}>
                    {lag === null ? '—' : `${behind ? '▲ ' : ''}${lag.toString()} blk`}
                  </span>
                  <span className="text-right font-mono text-[11px] text-fg-meta">{now ? fmtAgo(new Date(ix.updatedAt), now) : '—'}</span>
                </TRow>
              );
            })}
          </div>
        </div>
      )}
    </Card>
  );
}
