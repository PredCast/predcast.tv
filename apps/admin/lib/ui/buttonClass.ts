export type ButtonVariant = 'primary' | 'ghost' | 'danger';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

const BASE =
  'inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-control font-mono font-bold uppercase tracking-[0.14em] transition-colors duration-[120ms] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40';

const SIZES: Record<ButtonSize, string> = {
  xs: 'h-6 px-2 text-[9px]',
  sm: 'h-7 px-2.5 text-[10px]',
  md: 'h-8 px-3 text-[11px]',
  lg: 'h-10 px-4 text-[12px]',
};

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-white hover:bg-accent-hover active:bg-accent-dark',
  ghost: 'border border-line text-fg-strong hover:border-line-hover hover:bg-elevated hover:text-white',
  danger: 'border border-accent/50 text-accent-text hover:border-accent hover:bg-accent/15',
};

/** Shared by `<Button>` and links styled as buttons (Components board, §05). */
export function buttonClass(variant: ButtonVariant = 'ghost', size: ButtonSize = 'md', extra = ''): string {
  return `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${extra}`.trim();
}

/** Icon size per button size. */
export const BUTTON_ICON_SIZE: Record<ButtonSize, number> = { xs: 11, sm: 12, md: 14, lg: 16 };
