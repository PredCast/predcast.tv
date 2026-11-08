import { Icon } from '@/components/common/Icon';

const STEPS = ['Gate', 'Wallet', 'Signature'] as const;

/** 01–03 rail shared by the three guard screens so the flow reads as one journey. */
export function GuardSteps({ step }: Readonly<{ step: number }>) {
  return (
    <div className="font-mono flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.22em]">
      {STEPS.map((s, i) => (
        <span key={s} className="contents">
          <span className={`flex items-center gap-2 ${i < step ? 'text-positive' : i === step ? 'text-white' : 'text-fg-meta'}`}>
            <span
              className={`grid h-[18px] w-[18px] place-items-center rounded-full border text-[8px] tabular-nums tracking-normal ${
                i < step
                  ? 'border-positive/50 text-positive'
                  : i === step
                    ? 'border-accent bg-accent/15 text-white'
                    : 'border-line text-fg-meta'
              }`}
            >
              {i < step ? <Icon n="check" s={9} /> : `0${i + 1}`}
            </span>
            <span>{s}</span>
          </span>
          {i < STEPS.length - 1 && (
            <span aria-hidden="true" className={`h-px w-10 ${i < step ? 'bg-positive/40' : 'bg-[#222222]'}`} />
          )}
        </span>
      ))}
    </div>
  );
}
