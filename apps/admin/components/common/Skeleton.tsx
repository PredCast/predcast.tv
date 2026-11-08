/** Shimmer block, sized like the content it stands for. */
export function Skeleton({ className = '' }: Readonly<{ className?: string }>) {
  return <span aria-hidden="true" className={`pc-skel block ${className}`} />;
}
