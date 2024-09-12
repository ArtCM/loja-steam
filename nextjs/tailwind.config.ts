import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        blackprimary: "var(--black)",
        whiteprimary: "var(--white)",
      },
      boxShadow: {
        '3xl': '0 0px 10px 0px rgb(221, 116, 4, 0.5)',
      }
    },
  },
  plugins: [],
};
export default config;
