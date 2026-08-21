import type { ReactNode } from "react";

/**
 * The identity spine of the archive.
 *
 * Every engineering drawing carries a titleblock — a ruled strip declaring what
 * you are looking at and how current it is. Every page here opens with one, so a
 * visitor always has "where am I / what is this / how current" answered in fixed
 * positions. Visibility of system status, in four cells.
 */

export type TitleblockField = {
  key: string;
  value: ReactNode;
  /** Tints the value. Use sparingly — accent means "this is the headline fact". */
  tone?: "default" | "amber" | "scope" | "titanium";
};

const tones: Record<NonNullable<TitleblockField["tone"]>, string> = {
  default: "text-text",
  amber: "text-amber",
  scope: "text-scope",
  titanium: "text-titanium-text",
};

export default function Titleblock({
  kicker,
  title,
  lede,
  fields = [],
  children,
}: {
  kicker?: string;
  title: ReactNode;
  lede?: ReactNode;
  fields?: TitleblockField[];
  children?: ReactNode;
}) {
  return (
    <div className="corner border border-line">
      <div className="border-b border-line px-5 py-6 sm:px-7 sm:py-8">
        {kicker && <p className="label mb-3 text-amber">{kicker}</p>}
        <h1 className="break-words text-[clamp(2rem,7vw,4rem)] leading-[0.96] tracking-[0.015em]">
          {title}
        </h1>
        {lede && (
          <p className="mt-4 max-w-[56ch] break-words text-pretty text-titanium-text">
            {lede}
          </p>
        )}
        {children}
      </div>

      {fields.length > 0 && (
        <dl className="grid grid-cols-2 sm:grid-cols-4">
          {fields.map((field, i) => (
            <div
              key={field.key}
              className={[
                "px-4 py-3",
                // Hairline grid that collapses correctly at 2 columns.
                i % 2 === 0 ? "border-r border-line" : "",
                "sm:border-r sm:last:border-r-0",
                i < 2 ? "border-b border-line sm:border-b-0" : "",
              ].join(" ")}
            >
              <dt className="label-micro mb-1">{field.key}</dt>
              <dd
                className={`data text-sm ${tones[field.tone ?? "default"]}`}
              >
                {field.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
