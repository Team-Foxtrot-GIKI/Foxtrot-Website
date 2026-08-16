import type { ReactNode } from "react";

/** Small shared pieces used across the archive. */

/** Blinking record lamp. A real indicator switches — it steps, it doesn't fade. */
export function RecIndicator({ label = "REC" }: { label?: string }) {
  return (
    <span className="label-micro inline-flex items-center gap-2">
      <span aria-hidden className="ftx-rec inline-block size-1.5 bg-danger" />
      {label}
    </span>
  );
}

export type PillTone = "amber" | "scope" | "muted" | "warning";

const pillTone: Record<PillTone, string> = {
  amber: "text-amber",
  scope: "text-scope",
  muted: "text-titanium-text",
  warning: "text-warning",
};

export function Pill({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: PillTone;
}) {
  return <span className={`pill ${pillTone[tone]}`}>{children}</span>;
}

/**
 * Label/value pair with a dotted leader — a table-of-contents convention that
 * reads as documentation and keeps long spec lists scannable.
 */
export function SpecRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-1 border-b border-dotted border-line py-3 last:border-b-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] sm:gap-5">
      <dt className="label min-w-0">{label}</dt>
      <dd className="data min-w-0 break-words text-left leading-relaxed text-text sm:text-right">{value}</dd>
    </div>
  );
}

/** Section heading with a hairline rule and an optional trailing action. */
export function SectionHead({
  kicker,
  title,
  action,
}: {
  kicker?: string;
  title: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-3">
      <div>
        {kicker && <p className="label mb-1.5">{kicker}</p>}
        <h2 className="text-2xl tracking-[0.035em] sm:text-3xl">{title}</h2>
      </div>
      {action}
    </div>
  );
}

/** A single large figure. Used for archive statistics — never animated. */
export function Stat({
  value,
  label,
  accent = false,
}: {
  value: ReactNode;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="border-l border-line pl-4">
      <div
        className={`font-display text-4xl font-bold tabular-nums sm:text-5xl ${
          accent ? "text-amber" : "text-text"
        }`}
      >
        {value}
      </div>
      <div className="label mt-1">{label}</div>
    </div>
  );
}
