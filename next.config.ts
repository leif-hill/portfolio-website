import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Optional: Only if you need to disable image optimization
  },
};

module.exports = nextConfig;
