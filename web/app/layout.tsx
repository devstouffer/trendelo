import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const bodyFont = Figtree({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Trendelo — AI skills for your career",
  description: "AI is changing your field. We'll show you how.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bodyFont.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
