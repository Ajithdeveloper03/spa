import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — required for Hostinger shared hosting
  output: "export",

  // Subfolder deployment: https://yourdomain.com/footref/
  basePath: "/footref",
  assetPrefix: "/footref",

  // Trailing slash for cleaner folder-based URLs (index.html inside each dir)
  trailingSlash: true,

  images: {
    // next/image doesn't work in static export; use unoptimized for compatibility
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
