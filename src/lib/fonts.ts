import { Fraunces, Inter } from "next/font/google";

/**
 * Lumberjack Insurance — typography pairing.
 * - Fraunces (display): warm, high-contrast serif with optical sizing.
 *   Gives a "heritage timber company" editorial feel — distinct from the
 *   generic all-sans sister sites while staying professional and light.
 * - Inter (body / UI): neutral, legible workhorse.
 */
export const displayFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
