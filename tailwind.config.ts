import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "var(--font-inter)",
        editorial: "var(--font-editorial)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--color-primary)",
        red: "var(--color-red)",
        peach: "var(--color-peach)",
        "beige-1": "var(--color-beige-1)",
        "beige-2": "var(--color-beige-2)",
        "beige-3": "var(--color-beige-3)",
        "beige-4": "var(--color-beige-4)", 
      },
    },
  },
  plugins: [],
} satisfies Config;
