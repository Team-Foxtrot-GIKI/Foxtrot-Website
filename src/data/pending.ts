/**
 * Marks content the team hasn't supplied yet.
 *
 * Rather than filling gaps with lorem ipsum — which would be invisible in a diff,
 * unsearchable, and shippable by accident — every missing field carries this
 * sentinel. It is:
 *
 *   - greppable      `grep -rn "PENDING" src/data`
 *   - type-safe      `Pending<string>` won't silently render as text
 *   - visible        <PendingValue /> renders an obvious "awaiting data" chip
 *   - countable      pendingCount() drives the outstanding-data report
 *
 * When real content arrives, replace the sentinel with the value and the chip
 * disappears. Nothing else needs to change.
 */

export const PENDING = "__PENDING__" as const;
export type PendingMark = typeof PENDING;

/** A value that may not have been supplied yet. */
export type Pending<T> = T | PendingMark;

export function isPending(value: unknown): value is PendingMark {
  return value === PENDING;
}

/** Returns the value, or `undefined` if it is still outstanding. */
export function settled<T>(value: Pending<T>): T | undefined {
  return isPending(value) ? undefined : (value as T);
}

/** Counts outstanding fields in any nested structure. Used by the data report. */
export function pendingCount(input: unknown): number {
  if (isPending(input)) return 1;
  if (Array.isArray(input)) {
    return input.reduce<number>((sum, item) => sum + pendingCount(item), 0);
  }
  if (input && typeof input === "object") {
    return Object.values(input).reduce<number>(
      (sum, item) => sum + pendingCount(item),
      0,
    );
  }
  return 0;
}
