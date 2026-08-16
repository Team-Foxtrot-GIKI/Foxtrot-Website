import Link from "next/link";
import Titleblock from "@/components/Titleblock";
import { mainNav } from "@/data/site";

export default function NotFound() {
  return (
    <div className="shell py-16">
      <Titleblock
        kicker="Archive Error"
        title="Record not found"
        lede="That page isn't in the archive. It may have moved when the site was rebuilt."
        fields={[
          { key: "Status", value: "404", tone: "amber" },
          { key: "Cause", value: "Unknown record" },
          { key: "Action", value: "Return to index" },
          { key: "Archive", value: "Online", tone: "scope" },
        ]}
      />

      <nav aria-label="Archive sections" className="mt-12">
        <p className="label mb-4">Jump to a section</p>
        <ul className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {mainNav.map((l) => (
            <li key={l.href} className="bg-primary">
              <Link href={l.href} className="group block p-5">
                <span className="font-display text-lg font-bold tracking-[0.05em] uppercase group-hover:text-amber">
                  {l.label}
                </span>
                <span className="mt-1 block text-sm text-titanium-text">{l.hint}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link href="/" className="btn btn-primary mt-10">
        Return to the archive
      </Link>
    </div>
  );
}
