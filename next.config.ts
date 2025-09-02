import type { NextConfig } from "next";
import type { Configuration, RuleSetRule, RuleSetUseItem } from "webpack";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [new URL("https://image.tmdb.org/**")],
  },
  webpack(config: Configuration) {
    config.module?.rules?.forEach((rule: RuleSetRule | any) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((one: RuleSetRule) => {
          const uses: RuleSetUseItem[] | any = Array.isArray(one.use)
            ? one.use
            : one.use
            ? [one.use]
            : [];

          uses.forEach((u: RuleSetUseItem) => {
            if (
              typeof u === "object" &&
              "loader" in u &&
              typeof u.loader === "string" &&
              u.loader.includes("css-loader") &&
              u.options &&
              typeof u.options === "object" &&
              "modules" in u.options &&
              u.options.modules !== false // ✅ guard against boolean `false`
            ) {
              const opts = u.options as {
                modules: { exportLocalsConvention?: string };
              };
              opts.modules.exportLocalsConvention = "camelCaseOnly";
            }
          });
        });
      }
    });
    return config;
  },
};

export default nextConfig;
