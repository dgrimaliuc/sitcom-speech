// postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {}, // ✅ the new Tailwind v4 plugin
    autoprefixer: {}, // ✅ still needed for vendor prefixes
  },
};

export default config;
