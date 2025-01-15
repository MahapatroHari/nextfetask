import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    additionalData: `@import "./app/_styles/_variables.scss";`, //TODO: this is a temp fix for the issue with the path
  },
};

export default nextConfig;
