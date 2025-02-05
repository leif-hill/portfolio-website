import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  assetPrefix: isProd ? "/leif-hill.github.io/" : "",
  images: {
    unoptimized: true, // Required because GitHub Pages doesn't support Next.js' Image Optimization
  },
};

export default nextConfig;
