import { Fraunces, Inter } from "next/font/google";

// Display: Fraunces — rugged-but-friendly serif with character (mountain-town feel)
export const displayFont = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

// Body: Inter — clean, highly legible
export const bodyFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});
