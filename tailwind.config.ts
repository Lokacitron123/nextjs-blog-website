import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"), // Allows us to style html that comes from example markdown files .mdx using the tailwind prose class
    require("@tailwindcss/aspect-ratio"),
  ],
};
export default config;
