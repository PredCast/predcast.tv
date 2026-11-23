import { Icon } from '@/components/common/Icon';

/** What players will read in the app banner (up to 7 days before the start). */
export function DoubleXpBannerPreview({ text }: Readonly<{ text: string }>) {
  return (
    <div className="rounded-panel border border-warning/35 bg-warning/5 px-3 py-2.5">
      <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-warning">
        <Icon n="zap" s={12} />
        Banner preview
      </div>
      <p className="mt-1 text-[13px] leading-5 text-white">{text}</p>
    </div>
  );
}
