import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      { source: "/go", destination: "/links", permanent: false },
      { source: "/linktree", destination: "/links", permanent: false },
    ];
  },
};

export default nextConfig;
