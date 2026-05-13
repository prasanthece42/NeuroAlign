import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NeuroAlign",
  metadataBase: new URL("https://neuroalign.app"),
  description:
    "A neuroscience-inspired app for ambitious people who feel mentally overloaded.",
  applicationName: "NeuroAlign",
  keywords: [
    "NeuroAlign",
    "nervous system regulation",
    "attention training app",
    "future self visualization",
    "mental clarity app",
    "iOS wellness app",
    "Android wellness app",
  ],
  authors: [{ name: "NeuroAlign" }],
  creator: "NeuroAlign",
  openGraph: {
    title: "NeuroAlign",
    description: "Your mind was never designed for this much noise.",
    url: "https://neuroalign.app",
    siteName: "NeuroAlign",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroAlign",
    description: "Your mind was never designed for this much noise.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F1E8",
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
