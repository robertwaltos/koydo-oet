import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koydo OET — Occupational English Test Prep",
  description:
    "Free OET practice for Listening, Reading, Writing, and Speaking in healthcare English with AI analytics.",
  metadataBase: new URL("https://oet.koydo.app"),
  icons: { icon: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
  other: { "theme-color": "#2563EB" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
