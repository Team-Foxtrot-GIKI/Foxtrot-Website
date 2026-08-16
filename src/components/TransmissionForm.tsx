"use client";

import { useState } from "react";
import { site } from "@/data/site";

/**
 * The contact form, in the archive's register.
 *
 * Every renamed field carries a plain-language hint, because the metaphor must
 * never cost a visitor clarity — a sponsor failing to find how to reach the team
 * is a far worse outcome than a slightly less immersive form.
 *
 * "Priority" is a genuine triage field that helps the team sort incoming mail,
 * not flavour text. It posts to Formspree as a normal field.
 *
 * Progressive enhancement: this is a real <form> with a real action, so it works
 * with JavaScript disabled. The fetch handler simply improves the feedback.
 */

type State = "idle" | "sending" | "sent" | "error";

const priorities = [
  { value: "Routine", hint: "General enquiry" },
  { value: "Priority", hint: "Partnership or sponsorship" },
  { value: "Immediate", hint: "Press or time-sensitive" },
];

export default function TransmissionForm() {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    try {
      const res = await fetch(site.formAction, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="corner border border-scope/50 bg-panel p-8 text-center">
        <p className="label text-scope">Transmission sent</p>
        <h3 className="mt-3 text-2xl tracking-[0.04em]">Awaiting response</h3>
        <p className="mx-auto mt-3 max-w-[42ch] text-sm text-titanium-text">
          Your message reached the team. Expect a reply at the address you gave —
          usually within a few days.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="btn btn-ghost mt-6"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      action={site.formAction}
      method="POST"
      className="border border-line bg-panel p-6"
    >
      <div className="mb-5">
        <label htmlFor="origin" className="label mb-1.5 block">
          Origin
        </label>
        <p className="mb-2 text-xs text-titanium-text">Your name or organisation</p>
        <input
          id="origin"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="data w-full border border-line bg-primary px-3 py-2.5 text-text focus:border-amber focus:outline-none"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="channel" className="label mb-1.5 block">
          Transmission
        </label>
        <p className="mb-2 text-xs text-titanium-text">Where we should reply</p>
        <input
          id="channel"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="data w-full border border-line bg-primary px-3 py-2.5 text-text focus:border-amber focus:outline-none"
        />
      </div>

      <fieldset className="mb-5">
        <legend className="label mb-1.5">Priority</legend>
        <p className="mb-2 text-xs text-titanium-text">Helps us route your message</p>
        <div className="grid gap-px bg-line sm:grid-cols-3">
          {priorities.map((p, i) => (
            <label
              key={p.value}
              className="flex cursor-pointer flex-col bg-primary p-3 has-checked:bg-panel-2"
            >
              <span className="flex items-center gap-2">
                <input
                  type="radio"
                  name="priority"
                  value={p.value}
                  defaultChecked={i === 0}
                  className="accent-[#FFB100]"
                />
                <span className="font-display text-sm font-bold tracking-[0.06em] uppercase">
                  {p.value}
                </span>
              </span>
              <span className="mt-1 text-xs text-titanium-text">{p.hint}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mb-6">
        <label htmlFor="message" className="label mb-1.5 block">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="data w-full border border-line bg-primary px-3 py-2.5 text-text focus:border-amber focus:outline-none"
        />
      </div>

      {state === "error" && (
        <p
          role="alert"
          className="mb-4 border-l-2 border-warning bg-primary p-3 text-sm text-warning"
        >
          The transmission didn&apos;t go through. Please try again, or email us
          directly at {site.email}.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="btn btn-primary w-full justify-center disabled:opacity-60"
      >
        {state === "sending" ? "Transmitting…" : "Transmit"}
      </button>
    </form>
  );
}
