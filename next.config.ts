import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['opengraph.githubassets.com', 'github-readme-stats.vercel.app'],
    dangerouslyAllowSVG: true
  },
};

export default nextConfig;
