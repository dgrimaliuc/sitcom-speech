import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module?.rules?.forEach((rule: any) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((one: any) => {
          const uses = Array.isArray(one.use)
            ? one.use
            : one.use
            ? [one.use]
            : [];

          uses.forEach((u: any) => {
            if (
              typeof u === "object" &&
              u.loader?.includes("css-loader") &&
              u.options?.modules
            ) {
              // ✅ only change this property, don’t override Next.js defaults
              u.options.modules.exportLocalsConvention = "camelCaseOnly";
            }
          });
        });
      }
    });

    return config;
  },
};

export default nextConfig;
