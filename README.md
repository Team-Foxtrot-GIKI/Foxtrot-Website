# Team Foxtrot — Next.js site

The teamfoxtrot.pk website rebuilt with **Next.js 15 (App Router)**, **React 19**,
**TypeScript**, and **Tailwind CSS v4**. It replaces the previous
Bootstrap + jQuery static pages.

## Running it

```bash
npm install     # once
npm run dev     # http://localhost:3000
npm run build   # static export into out/
```

Other scripts: `npm run lint`, `npm run typecheck`.

## Where to change things

Almost all content lives in `src/data/` as typed TypeScript. You can edit these
without touching any JSX, and TypeScript will tell you if a field is missing.

| File | Controls |
| --- | --- |
| `src/data/site.ts` | Nav links, email, phone, address, socials, footer credits, Formspree endpoint |
| `src/data/news.ts` | "Latest News" blocks + About carousel on the home page |
| `src/data/projects.ts` | The accordion on `/our-projects` |
| `src/data/team.ts` | Executive Council on `/our-team`, founder/advisor cards |
| `src/data/sponsors.ts` | Sponsor tiers and the home page logo strip |
| `src/data/blogs.ts` | Blog posts — the whole `/blogs` section |
| `src/data/media.ts` | Photo gallery, Instagram embeds, press links |

Colours, fonts, and the `.btn-brand` / `.eyebrow` helpers are defined once at the
top of `src/app/globals.css`. Change `--color-brand` there and the whole site
follows.

Images live in `public/img/`. Reference them with a leading slash, e.g.
`/img/fox.webp`.

### Adding a blog post

Append an object to `blogPosts` in `src/data/blogs.ts`. The `slug` becomes the
URL and the page at `/blogs/<slug>` is generated automatically — no new files
needed. Inside `paragraph` blocks, `**text**` renders as bold.

### Adding a page

Create `src/app/<route>/page.tsx`. Add it to `mainNav` in `src/data/site.ts` if
it should appear in the header.

## Structure

```
src/
  app/          routes (one folder per URL) + globals.css + layout.tsx
  components/   Navbar, Footer, Carousel, ProjectAccordion, ContactForm, ...
  data/         all editable content
public/img/     images
```

## Deploying

`next.config.ts` sets `output: "export"`, so `npm run build` writes a plain
static site to `out/` — the same kind of output GitHub Pages already serves.
Point the Pages workflow at `foxtrot-next/out` instead of the repo root, or copy
`out/` wherever you host.
