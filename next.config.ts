import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "calhacks-sierra.s3.us-west-2.amazonaws.com" },
      { protocol: "https", hostname: "calhacks-sierra.s3-us-west-2.amazonaws.com" },
      { protocol: "https", hostname: "iili.io" },
      { protocol: "https", hostname: "www.clker.com" },
      { protocol: "https", hostname: "media.licdn.com" },
      { protocol: "https", hostname: "prideglobal.com" },
      { protocol: "https", hostname: "www.pngmart.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};
export default nextConfig;
