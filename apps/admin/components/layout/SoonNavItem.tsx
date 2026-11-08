import { Icon, type IconName } from "@/components/common/Icon";

export function SoonNavItem({ label, icon }: Readonly<{ label: string; icon: IconName }>) {
  return (
    <div
      aria-disabled="true"
      className="flex h-9 items-center gap-2.5 px-2.5 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-fg-meta"
    >
      <Icon n={icon} s={16} />
      <span>{label}</span>
      <span className="ml-auto rounded-badge border border-line px-[5px] text-[9px] leading-[14px] tracking-[0.14em]">SOON</span>
    </div>
  );
}
