// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // faz <Image /> servir /imagens/... direto (sem /_next/image)
  },
};

export default nextConfig;
