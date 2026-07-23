import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "www.koaj.co",
      pathname: "/**",
    }],
  },
};

export default nextConfig;
