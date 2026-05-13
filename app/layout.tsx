import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NeuroAlign | Train Your Mind to Support Your Future",
  description:
    "A neuroscience-inspired iOS and Android mobile app for calmer focus, emotional clarity, and aligned action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-KGMS73GQ2F" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KGMS73GQ2F');
          `}
        </Script>
      </body>
    </html>
  );
}
