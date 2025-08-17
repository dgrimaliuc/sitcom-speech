import type { Config } from "tailwindcss";
// import plugin from "tailwindcss/plugin";

// $brand-900: #001d39; // For navbars, footers.
// $brand-800: #0a4174;
// $brand-700: #49769f; // Primary brand color
// $brand-600: #4e8ea2;
// $brand-500: #6ea2b3; // For buttons, highlights, links, good for borders, less emphasis text..
// $brand-400: #7bbde8; // Secondary brand color
// $brand-300: #bdd8e9; // For sections, backgrounds, cards.
// import type { Config } from "tailwindcss";

// // min-width breakpoints (mobile-first)
// sm: 640px   // small devices (landscape phones)
// md: 768px   // tablets
// lg: 1024px  // laptops
// xl: 1280px  // desktops
// 2xl: 1536px // very large screens

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  plugins: [],
};

export default config;
