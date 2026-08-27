import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMonoFull = localFont({
  src: "./fonts/JetBrainsMono-Regular.woff2",
  variable: "--font-jetbrains-mono-full",
  weight: "400",
  style: "normal",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashuigordon.github.io/gordon-portfolio/"),
  title: "Gordon — AI Product Builder",
  description:
    "Gordon's portfolio: agentic products, developer tools, data systems, and open-source work.",
  keywords: [
    "Gordon",
    "AI product manager",
    "AI agents",
    "open source",
    "developer tools",
    "data products",
  ],
  authors: [{ name: "Gordon", url: "https://github.com/ashuiGordon" }],
  creator: "Gordon",
  openGraph: {
    type: "website",
    url: "https://ashuigordon.github.io/gordon-portfolio/",
    title: "Gordon — AI Product Builder",
    description:
      "Agentic products, developer tools, data systems, and open-source work.",
    siteName: "Gordon's Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Gordon — AI Product Builder",
    description:
      "Agentic products, developer tools, data systems, and open-source work.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetBrainsMono.variable} ${jetBrainsMonoFull.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
