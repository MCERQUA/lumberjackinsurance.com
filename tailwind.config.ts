import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],
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
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
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
        // granular brand ramp — light "rugged forest" identity
        forest: {
          50: "#f0f5f1",
          100: "#dbe8df",
          200: "#b6d0bf",
          300: "#8ab294",
          400: "#5a8e69",
          500: "#3a7149",
          600: "#2a5a38",
          700: "#214a30",
          800: "#1b3a26",
          900: "#14291c",
        },
        timber: {
          50: "#fbf4ea",
          100: "#f4e3c9",
          200: "#e9c794",
          300: "#dca85f",
          400: "#cf8f3c",
          500: "#b8682a",
          600: "#9c5220",
          700: "#7c3f1d",
          800: "#5f3019",
          900: "#452314",
        },
        paper: {
          DEFAULT: "#faf8f2",
          warm: "#f3efe4",
          sand: "#ede8db",
          ink: "#1a201b",
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
        card: "0 1px 2px rgba(20, 41, 28, 0.04), 0 12px 32px -12px rgba(20, 41, 28, 0.12)",
        lift: "0 2px 4px rgba(20, 41, 28, 0.05), 0 24px 48px -16px rgba(20, 41, 28, 0.20)",
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
      backgroundImage: {
        "contour":
          "radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.05) 0, transparent 32%), radial-gradient(circle at 80% 0%, hsl(var(--accent) / 0.06) 0, transparent 30%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
