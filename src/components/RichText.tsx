import { Fragment } from "react";

/**
 * Renders text with `**bold**` runs as <strong>. Everything else is plain text,
 * so content in src/data/ can stay free of HTML.
 */
export default function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);

  return (
    <>
      {parts.map((part, i) =>
        // Odd indices are the captured groups, i.e. the bold runs.
        i % 2 === 1 ? (
          <strong key={i}>{part}</strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
