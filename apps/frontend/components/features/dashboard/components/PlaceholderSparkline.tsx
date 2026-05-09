interface PlaceholderSparklineProps {
    readonly width?: number;
    readonly height?: number;
}

/** Dashed flat line used inside empty stat cards. */
export function PlaceholderSparkline({ width = 240, height = 36 }: PlaceholderSparklineProps) {
    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="block">
            <line
                x1={0}
                y1={height / 2}
                x2={width}
                y2={height / 2}
                stroke="rgba(255,255,255,0.10)"
                strokeWidth={1}
                strokeDasharray="3 4"
            />
        </svg>
    );
}
