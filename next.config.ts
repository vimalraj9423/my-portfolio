import type { NextConfig } from "next";

// The site is served from the root of the custom domain https://vimalraj.net,
// so no basePath is needed. If you ever serve it from
// https://<user>.github.io/my-portfolio instead, build with BASE_PATH=/my-portfolio.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
