import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,md,mdx}", "./mdx-components.tsx"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          light: "hsl(var(--accent-light))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        // granular brand ramp — light "rugged forest" identity (hunter green)
        forest: {
          50: "#f0f6f1",
          100: "#dcecdf",
          200: "#bbd9c2",
          300: "#8fc1a0",
          400: "#5a9c72",
          500: "#2f7a4c",
          600: "#1f6138",
          700: "#14532d", // primary hunter green
          800: "#0f3f22",
          900: "#0a2d18",
        },
        // rust / timber copper accent ramp
        rust: {
          50: "#fbf3ef",
          100: "#f6e2d8",
          200: "#ecc3ad",
          300: "#e0a07c",
          400: "#d27d4f",
          500: "#b85f2e",
          600: "#9a3412", // accent rust
          700: "#7c2a10",
          800: "#5e2010",
          900: "#431809",
        },
        paper: {
          DEFAULT: "#faf8f4",
          warm: "#f4f0e7",
          sand: "#ebe6d8",
          ink: "#1f2a22",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(20, 42, 34, 0.04), 0 12px 32px -12px rgba(20, 42, 34, 0.12)",
        lift: "0 2px 4px rgba(20, 42, 34, 0.05), 0 24px 48px -16px rgba(20, 42, 34, 0.20)",
        glow: "0 0 0 1px hsl(var(--primary) / 0.12), 0 18px 40px -18px hsl(var(--primary) / 0.35)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-speed, 36s) linear infinite",
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-ring": "pulse-ring 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
