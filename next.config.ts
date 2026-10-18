import type { NextConfig } from "next";

// Deployed to https://vimalraj9423.github.io/my-portfolio on GitHub Pages
const basePath = process.env.NODE_ENV === "production" ? "/my-portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
