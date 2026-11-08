import { Button } from './Button';
import { Icon } from './Icon';

/** Per-card failure: the rest of the dashboard keeps rendering (State · Card error board). */
export function CardError({
  title,
  detail,
  requestId,
  lastGoodAt,
  onRetry,
  retrying = false,
  onShowCached,
}: Readonly<{
  title: string;
  detail: string;
  requestId?: string | null;
  lastGoodAt?: string | null;
  onRetry: () => void;
  retrying?: boolean;
  onShowCached?: () => void;
}>) {
  const meta = [lastGoodAt && `Last good data ${lastGoodAt}`, requestId && `Req id ${requestId}`].filter(Boolean).join(' · ');
  return (
    <div
      role="alert"
      className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-10 text-center"
      style={{
        backgroundImage:
          'repeating-linear-gradient(135deg, rgba(232,0,29,0.04) 0 10px, transparent 10px 20px)',
      }}
    >
      <span className="grid h-11 w-11 place-items-center rounded-panel border border-accent/55 text-accent-text">
        <Icon n="alertOctagon" s={18} />
      </span>
      <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-accent-text">{title}</p>
      <p className="max-w-[380px] text-[13px] leading-5 text-fg-body">{detail}</p>
      {meta && <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-meta">{meta}</p>}
      <div className="mt-1 flex gap-2">
        <Button size="sm" icon="rotateCcw" onClick={onRetry} busy={retrying}>
          Retry
        </Button>
        {onShowCached && (
          <Button size="sm" onClick={onShowCached}>
            Show cached
          </Button>
        )}
      </div>
    </div>
  );
}
