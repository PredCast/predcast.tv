export interface SparklineGeometry {
  readonly line: string;
  readonly area: string;
  readonly end: { readonly x: number; readonly y: number };
}

/** Min-max normalised path in a `width`×`height` box with a 3px inset; null under 2 points. */
export function sparklineGeometry(values: ReadonlyArray<number>, width = 72, height = 28): SparklineGeometry | null {
  if (values.length < 2) return null;
  const inset = 3;
  const min = Math.min(...values);
  const range = Math.max(...values) - min || 1;
  const step = (width - 2 * inset) / (values.length - 1);
  const points = values.map((v, i) => ({
    x: Math.round((inset + i * step) * 10) / 10,
    y: Math.round((height - inset - ((v - min) / range) * (height - 2 * inset)) * 10) / 10,
  }));
  const line = `M${points.map((p) => `${p.x} ${p.y}`).join(' L')}`;
  const last = points[points.length - 1];
  const first = points[0];
  return { line, area: `${line} L${last.x} ${height} L${first.x} ${height} Z`, end: last };
}
