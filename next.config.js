/** @type {import('next').NextConfig} */
import { withAxiom } from "next-axiom";
const nextConfig = {
  experimental: {
    serverActions: true,
    mdxRs: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "*",
      },
    ],
  },
};

module.exports = withAxiom(nextConfig);
