import type { Config } from "tailwindcss";

// $brand-800: #0a4174;
// $brand-600: #4e8ea2;

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
