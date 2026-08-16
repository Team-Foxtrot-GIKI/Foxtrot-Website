import type { ReactNode } from "react";

/**
 * RECOVERY LOG — the homepage's signature data panel.
 *
 * A monospace readout of the most recently recovered record. Every value is real
 * team data (currently Cardinal / UAS Challenge '24), read from src/data — nothing
 * here is decorative or invented.
 *
 * "Recording Integrity" is a genuine derived figure: the share of archive fields
 * that have been supplied, computed from the PENDING sentinels. It is honest
 * about how complete the archive is rather than always reading 100%.
 */

export type LogRow = {
  key: string;
  value: ReactNode;
  tone?: "default" | "amber" | "scope" | "titanium";
};

const tones = {
  default: "text-text",
  amber: "text-amber",
  scope: "text-scope",
  titanium: "text-titanium-text",
} as const;

export default function RecoveryLog({
  rows,
  integrity,
}: {
  rows: LogRow[];
  /** 0–100. Share of archive fields supplied. */
  integrity: number;
}) {
  return (
    <div className="corner border border-line bg-panel">
      <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-2.5">
        <h2 className="label text-text">Recovery Log</h2>
        <span className="label-micro inline-flex items-center gap-2 text-danger">
          <span aria-hidden className="ftx-rec inline-block size-1.5 bg-danger" />
          <span className="text-amber">REC</span>
        </span>
      </div>

      <dl className="divide-y divide-line">
        {rows.map((row) => (
          <div
            key={row.key}
            className="flex items-baseline justify-between gap-4 px-4 py-2.5"
          >
            <dt className="label-micro shrink-0">{row.key}</dt>
            <dd className={`data text-right text-xs ${tones[row.tone ?? "default"]}`}>
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="border-t border-line px-4 py-3">
        <div className="flex items-baseline justify-between gap-4">
          <span className="label-micro">Recording Integrity</span>
          <span className="data text-xs text-scope">{integrity}%</span>
        </div>
        <div
          className="mt-2 h-[3px] bg-panel-2"
          role="meter"
          aria-valuenow={integrity}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Archive recording integrity"
        >
          <div className="h-full bg-scope" style={{ width: `${integrity}%` }} />
        </div>
      </div>
    </div>
  );
}
