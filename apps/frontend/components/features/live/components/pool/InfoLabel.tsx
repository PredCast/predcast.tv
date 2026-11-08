interface InfoLabelProps {
  readonly children: string;
}

export function InfoLabel({ children }: InfoLabelProps) {
  return <dt className="font-mono-ctv text-[9px] uppercase tracking-[0.16em] text-white/45">{children}</dt>;
}
