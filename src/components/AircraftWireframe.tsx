/**
 * Slowly rotating quadcopter wireframe — the hero's ambient element.
 *
 * A schematic X-frame plan view in scope green, not a model of any specific
 * airframe (we have no CAD yet). Pure CSS/SVG: no library, ~2 KB, and the
 * rotation is a compositor-only transform.
 *
 * Rotation stops entirely under prefers-reduced-motion via the global rule in
 * globals.css, and the shape stays legible when static.
 */
export default function AircraftWireframe({
  className = "",
}: {
  className?: string;
}) {
  const arms = [45, 135, 225, 315];

  return (
    <div aria-hidden className={`pointer-events-none select-none ${className}`}>
      <svg
        viewBox="-110 -110 220 220"
        className="ftx-spin h-full w-full"
        style={{ overflow: "visible" }}
      >
        <g
          stroke="currentColor"
          fill="none"
          strokeWidth="0.75"
          vectorEffect="non-scaling-stroke"
        >
          {/* Reference circles */}
          <circle r="100" strokeOpacity="0.16" />
          <circle r="66" strokeOpacity="0.1" strokeDasharray="3 5" />

          {/* Centre body */}
          <rect x="-17" y="-17" width="34" height="34" strokeOpacity="0.75" />
          <rect x="-9" y="-9" width="18" height="18" strokeOpacity="0.4" />

          {/* Four arms + rotor discs */}
          {arms.map((deg) => {
            const r = (deg * Math.PI) / 180;
            const x = Math.cos(r) * 74;
            const y = Math.sin(r) * 74;
            const bx = Math.cos(r) * 15;
            const by = Math.sin(r) * 15;
            return (
              <g key={deg}>
                <line x1={bx} y1={by} x2={x} y2={y} strokeOpacity="0.6" />
                <circle cx={x} cy={y} r="26" strokeOpacity="0.28" />
                <circle cx={x} cy={y} r="5" strokeOpacity="0.7" />
                {/* Rotor blade indication */}
                <line
                  x1={x - 24}
                  y1={y}
                  x2={x + 24}
                  y2={y}
                  strokeOpacity="0.14"
                />
              </g>
            );
          })}

          {/* Axis crosshair */}
          <line x1="-100" y1="0" x2="100" y2="0" strokeOpacity="0.08" />
          <line x1="0" y1="-100" x2="0" y2="100" strokeOpacity="0.08" />
        </g>
      </svg>
    </div>
  );
}
