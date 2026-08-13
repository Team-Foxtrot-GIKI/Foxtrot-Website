import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export so the site can keep deploying to GitHub Pages.
  // Run `npm run build` and publish the generated `out/` folder.
  output: "export",
  trailingSlash: true,
  images: {
    // next/image optimisation needs a server; static export serves raw files.
    unoptimized: true,
  },
};

export default nextConfig;
