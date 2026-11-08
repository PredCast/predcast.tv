import { Button } from './Button';
import { Sparkline } from './Sparkline';

export type DeltaTone = 'good' | 'bad' | 'flat';

export interface StatDelta {
  readonly dir: 'up' | 'down' | 'flat';
  readonly text: string;
  readonly tone: DeltaTone;
}

interface StatTileProps {
  readonly label: string;
  readonly state?: 'ready' | 'loading' | 'error';
  readonly value?: string;
  readonly unit?: string;
  readonly delta?: StatDelta;
  /** Text after the delta ("vs prev 24h"), or alone when there is no delta. */
  readonly caption?: string;
  readonly series?: ReadonlyArray<number>;
  /** Red value and sparkline (live counters above zero). */
  readonly live?: boolean;
  readonly onRetry?: () => void;
}

const ARROWS = { up: '▲', down: '▼', flat: '–' } as const;
const DELTA_COLORS: Record<DeltaTone, string> = { good: 'text-positive', bad: 'text-accent-text', flat: 'text-fg-meta' };

export function StatTile({
  label,
  state = 'ready',
  value = '—',
  unit,
  delta,
  caption,
  series,
  live = false,
  onRetry,
}: Readonly<StatTileProps>) {
  const errored = state === 'error';
  return (
    <div
      className={`flex min-h-32 flex-col gap-2.5 rounded-card border bg-card px-4 pb-3 pt-3.5 ${errored ? 'border-accent/40' : 'border-line-subtle'}`}
      aria-busy={state === 'loading'}
    >
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-fg-body">{label}</span>
      {state === 'loading' ? (
        <>
          <span className="pc-skel h-8 w-16" />
          <span className="pc-skel mt-auto h-2.5 w-4/5" />
        </>
      ) : (
        <>
          <div className="flex items-end justify-between gap-2">
            <div className="flex min-w-0 items-baseline gap-1.5">
              <span
                className={`font-display text-[38px] font-extrabold leading-9 ${
                  errored ? 'text-fg-meta' : live && value !== '0' ? 'text-accent-text' : 'text-white'
                }`}
              >
                {errored ? '—' : value}
              </span>
              {unit && !errored && (
                <span className="truncate font-mono text-[10px] uppercase tracking-[0.12em] text-fg-meta">{unit}</span>
              )}
            </div>
            {series && !errored && <Sparkline values={series} live={live} />}
          </div>
          {errored ? (
            <div className="mt-auto flex items-center justify-between gap-2">
              <span className="font-mono text-[11px] font-semibold text-accent-text">✕ Couldn&apos;t load</span>
              {onRetry && (
                <Button size="xs" onClick={onRetry}>
                  Retry
                </Button>
              )}
            </div>
          ) : (
            (delta || caption) && (
              <div className="mt-auto font-mono text-[11px]">
                {delta && (
                  <span className={`font-semibold ${DELTA_COLORS[delta.tone]}`}>
                    {ARROWS[delta.dir]} {delta.text}{' '}
                  </span>
                )}
                {caption && <span className="text-fg-meta">{caption}</span>}
              </div>
            )
          )}
        </>
      )}
    </div>
  );
}
