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
        "pt-serif": "var(--font-pt-serif)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--color-primary)",
        red: "var(--color-red)",
        peach: "var(--color-peach)",
        green: "var(--color-green)",
        "beige-1": "var(--color-beige-1)",
        "beige-2": "var(--color-beige-2)",
        "beige-3": "var(--color-beige-3)",
        "beige-4": "var(--color-beige-4)",
      },
    },
    container: {
      center: true,
      padding: '16px',
      screens: {
        sm: '640px',
        md: '488px',
        lg: '960px',
        xl: '1280px',
      },
    },
  },
  plugins: []
} satisfies Config;
