import { isPending, type Pending } from "@/data/pending";

/**
 * Renders a value, or an unmistakable "awaiting data" chip when the team hasn't
 * supplied it yet. Deliberately visible rather than hidden — a gap you can see
 * is a gap that gets filled, and nothing ships to production looking finished
 * when it isn't.
 */
export function PendingValue({
  value,
  label = "Awaiting data",
  className = "",
}: {
  value: Pending<string>;
  label?: string;
  className?: string;
}) {
  if (!isPending(value)) return <span className={className}>{value}</span>;
  return <PendingChip label={label} />;
}

export function PendingChip({ label = "Awaiting data" }: { label?: string }) {
  return (
    <span
      className="label-micro inline-flex items-center gap-1.5 border border-dashed border-line px-2 py-0.5 text-titanium-text"
      title="This field has not been supplied by the team yet."
    >
      <span aria-hidden className="inline-block size-1 bg-warning" />
      {label}
    </span>
  );
}

/**
 * Renders children only when every listed value has been supplied. Keeps whole
 * sections out of the DOM until their data exists, rather than showing an empty
 * heading.
 */
export function WhenSettled({
  values,
  children,
}: {
  values: Pending<unknown>[];
  children: React.ReactNode;
}) {
  if (values.some((v) => isPending(v))) return null;
  return <>{children}</>;
}
